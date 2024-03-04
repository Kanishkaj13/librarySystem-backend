// userService.js
const User = require('../models/userModel');
const Book = require('../models/bookModel');
const Hold = require('../models/holdModel'); 
const Feedback = require('../models/feedbackModel'); 
const Donation = require('../models/donationModel'); 

const userService = {
   exploreLibraryCatalog: async () => {
      try {
      const catalogData = await Book.find({}, 'title author quantity isAvailable');
      return catalogData;
    } catch (error) {
      throw new Error(`Error exploring library catalog: ${error.message}`);
    }
  },

  checkOutBook: async (userId, bookId) => {
    try {
    const existingBook = await Book.findById(bookId);

      if (!existingBook || !existingBook.isAvailable) {
        throw new Error('Book not available for checkout');
      }
      const transactionData = {
        userId,
        bookId,
        action: 'checkout',
        timestamp: new Date(),
      };

      const newTransaction = new Transaction(transactionData);
      await newTransaction.save();
      await Book.findByIdAndUpdate(bookId, { $set: { isAvailable: false } });

      return { message: 'Checkout processed successfully' };
    } catch (error) {
      throw new Error(`Error processing checkout: ${error.message}`);
    }
  },

   

  placeHoldOnBook: async (userId, bookId) => {

    try {
       const holdData = {
        userId,
        bookId,
        timestamp: new Date(),
      };

      const newHold = new Hold(holdData);
      await newHold.save();

      return { message: 'Hold placed successfully' };
    } catch (error) {
      throw new Error(`Error placing hold: ${error.message}`);
    }
  },

  viewAccountStatus: async (userId) => {

    try {
      const userData = await User.findById(userId);

      if (!userData) {
        throw new Error('User not found');
      }
        const accountStatus = {
        username: userData.username,
        fines: userData.fines,
        
      };

      return accountStatus;
    } catch (error) {
      throw new Error(`Error viewing account status: ${error.message}`);
    }
  },
  offerFeedback: async (feedbackDetails) => {
    
    try {
      const newFeedback = new Feedback(feedbackDetails);
      await newFeedback.save();

      return { message: 'Feedback submitted successfully' };
    } catch (error) {
      throw new Error(`Error offering feedback: ${error.message}`);
    }

  },

  updatePersonalInformation: async (userId, updatedData) => {
      try {
      await User.findByIdAndUpdate(userId, { $set: updatedData });

      return { message: 'Personal information updated successfully' };
    } catch (error) {
      throw new Error(`Error updating personal information: ${error.message}`);
    }

  
  },

  followLibraryPoliciesAndGuidelines: async () => {
       try {
        const policyData = await Policies.find();
  
        return policyData;
      } catch (error) {
        throw new Error(`Error fetching library policies and guidelines: ${error.message}`);
      } 
   
  },

  payFines: async (userId, amount) => {

    try {
      await User.findByIdAndUpdate(userId, { $inc: { fines: -amount } });

      return { message: 'Fines paid successfully' };
    } catch (error) {
      throw new Error(`Error paying fines: ${error.message}`);
    }
   
    
  },

  giveFeedback: async (feedbackDetails) => {

    try {
      const newFeedback = new Feedback(feedbackDetails);
      await newFeedback.save();

      return { message: 'Feedback submitted successfully' };
    } catch (error) {
      throw new Error(`Error giving feedback: ${error.message}`);
    }
    
  },

  donateBook: async (donationDetails) => {

try {
      const newDonation = new Donation(donationDetails);
      await newDonation.save();

      return { message: 'Book donated successfully' };
    } catch (error) {
      throw new Error(`Error processing book donation: ${error.message}`);
    }

    
  },
};

module.exports = userService;





 
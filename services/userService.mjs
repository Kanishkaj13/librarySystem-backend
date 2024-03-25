// userService.js
import user from '../models/userModel.mjs';
import book from '../models/bookModel.mjs';
import Hold from '../models/holdModel.mjs';
import Feedback from '../models/feedbackModel.mjs';
import Donation from '../models/donationModel.mjs';


async function exploreLibraryCatalog() {
  try {
    const catalogData = await find({}, 'title author quantity isAvailable');
    return catalogData;
  } catch (error) {
    throw new Error(`Error exploring library catalog: ${error.message}`);
  }
}

async function checkOutBook(userId, bookId) {
  try {
    const existingBook = await _findById(bookId);
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
    await _findByIdAndUpdate(bookId, { $set: { isAvailable: false } });
    return { message: 'Checkout processed successfully' };
  } catch (error) {
    throw new Error(`Error processing checkout: ${error.message}`);
  }
}

async function placeHoldOnBook(userId, bookId) {
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
}

async function viewAccountStatus(userId) {
  try {
    const userData = await findById(userId);
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
}

async function offerFeedback(feedbackDetails) {
  try {
    const newFeedback = new Feedback(feedbackDetails);
    await newFeedback.save();
    return { message: 'Feedback submitted successfully' };
  } catch (error) {
    throw new Error(`Error offering feedback: ${error.message}`);
  }
}

async function updatePersonalInformation(userId, updatedData) {
  try {
    await findByIdAndUpdate(userId, { $set: updatedData });
    return { message: 'Personal information updated successfully' };
  } catch (error) {
    throw new Error(`Error updating personal information: ${error.message}`);
  }
}

async function followLibraryPoliciesAndGuidelines() {
  try {
    const policyData = await Policies.find();
    return policyData;
  } catch (error) {
    throw new Error(`Error fetching library policies and guidelines: ${error.message}`);
  }
}

async function payFines(userId, amount) {
  try {
    await findByIdAndUpdate(userId, { $inc: { fines: -amount } });
    return { message: 'Fines paid successfully' };
  } catch (error) {
    throw new Error(`Error paying fines: ${error.message}`);
  }
}

async function giveFeedback(feedbackDetails) {
  try {
    const newFeedback = new Feedback(feedbackDetails);
    await newFeedback.save();
    return { message: 'Feedback submitted successfully' };
  } catch (error) {
    throw new Error(`Error giving feedback: ${error.message}`);
  }
}

async function donateBook(donationDetails) {
  try {
    const newDonation = new Donation(donationDetails);
    await newDonation.save();
    return { message: 'Book donated successfully' };
  } catch (error) {
    throw new Error(`Error processing book donation: ${error.message}`);
  }

}

export {
  donateBook,
  giveFeedback,
  followLibraryPoliciesAndGuidelines,
  payFines,
  offerFeedback,
  checkOutBook,
  placeHoldOnBook,
  exploreLibraryCatalog,
  viewAccountStatus,
  updatePersonalInformation
};
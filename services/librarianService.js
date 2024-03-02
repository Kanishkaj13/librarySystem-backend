
const Book = require('../models/bookModel');
const Transaction = require('../models/transactionModel');
const User = require('../models/userModel');
const report = require('../models/reportModel');

const librarianService = {
  addBook: async (bookData) => {
    const newBook = new Book(bookData);
    await newBook.save();
    return { message: 'Book added successfully' };
  },

  editBook: async (bookId, updatedData) => {
    await Book.findByIdAndUpdate(bookId, { $set: updatedData });
    return { message: 'Book updated successfully' };
  },

  removeBook: async (bookId) => {
    await Book.findByIdAndRemove(bookId);
    return { message: 'Book removed successfully' };
  },

  reviewHoldsAndRequests: async () => {

    try{
        const holdsAndRequestsData = await Transaction.find({ action: 'hold' })
          .populate('userId', 'username')
          .populate('bookId', 'title author');
        const formattedData = holdsAndRequestsData.map(transaction => ({
          user: transaction.userId.username,
          book: {
            title: transaction.bookId.title,
            author: transaction.bookId.author,
          },
          timestamp: transaction.timestamp,
        }));
  
        return formattedData;
      } catch (error) {
        throw new Error(`Error reviewing holds and requests: ${error.message}`);
      }

   
  },
     
  
    processCheckout: async (userId, bookId) => {
      try {
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

  processReturn: async (userId, bookId) => {
    const transactionData = {
      userId,
      bookId,
      action: 'return',
      timestamp: new Date(),
    };
    const newTransaction = new Transaction(transactionData);
    await newTransaction.save();
    await Book.findByIdAndUpdate(bookId, { $set: { isAvailable: true } });

    return { message: 'Return processed successfully' };
  },

  manageFinesAndFees: async (userId, amount) => {
      try {
        await User.findByIdAndUpdate(userId, { $inc: { fines: amount } });
        return { message: 'Fines and fees managed successfully' };
      } catch (error) {
        throw new Error(`Error managing fines and fees: ${error.message}`);
      }
   },

  generateReportsAndStatistics: async () => {

    try {
      const totalTransactions = await Transaction.countDocuments();
      const totalAvailableBooks = await Book.countDocuments({ isAvailable: true });
        const reportsAndStatisticsData = {
        totalTransactions,
        totalAvailableBooks,
      };
       return reportsAndStatisticsData;
    } catch (error) {
      throw new Error(`Error generating reports and statistics: ${error.message}`);
    }   
},
manageUserAccounts: async (userId, updatedData) => {

    try {
      await User.findByIdAndUpdate(userId, { $set: updatedData });
      return { message: 'User account managed successfully' };
    } catch (error) {
      throw new Error(`Error managing user accounts: ${error.message}`);
    }
  },
    
};

module.exports = librarianService;
 
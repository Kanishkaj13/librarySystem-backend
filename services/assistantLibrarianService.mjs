// assistantLibrarianService.js
const Book = require('../models/bookModel.mjs');
const Transaction = require('../models/transactionModel.mjs');
const User = require('../models/userModel.mjs');

const assistantLibrarianService = {
  assistCatalogingAndOrganizing: async (bookData) => {
    try {
      const newBook = new Book(bookData);
      await newBook.save();
      return { message: 'Book cataloged and organized successfully' };
    } catch (error) {
      throw new Error(`Error cataloging and organizing books: ${error.message}`);
    }
  },

  helpWithBookSearchAndCheckouts: async (userId, bookTitle) => {
    try {
      const book = await Book.findOne({ title: bookTitle, isAvailable: true });

      if (book) {
        const newTransaction = new Transaction({ userId, bookId: book._id, action: 'checkout' });
        await newTransaction.save();
        await Book.findByIdAndUpdate(book._id, { $set: { isAvailable: false } });

        return { message: 'Book search and checkout successful' };
      } else {
        return { message: 'Book not found or unavailable' };
      }
    } catch (error) {
      throw new Error(`Error helping with book search and checkouts: ${error.message}`);
    }
  },

  assistInProcessingBorrowingsAndReturns: async (userId, bookId, action) => {
    try {
      const newTransaction = new Transaction({ userId, bookId, action });
      await newTransaction.save();
      if (action === 'return') {
        await Book.findByIdAndUpdate(bookId, { $set: { isAvailable: true } });
      }

      return { message: 'Book borrowing/return processed successfully' };
    } catch (error) {
      throw new Error(`Error assisting in processing borrowings and returns: ${error.message}`);
    }
  },

  ensureProperShelvingAndMaintainOrder: async () => {
    try {

      const sortedBooks = await Book.find().sort({ title: 1 });
      return { message: 'Shelving and order maintenance completed successfully' };
    } catch (error) {
      throw new Error(`Error ensuring proper shelving and maintaining order: ${error.message}`);
    }
  },

  helpManageOverdueFinesAndFees: async (userId, amount) => {
    try {
      await User.findByIdAndUpdate(userId, { $inc: { fines: amount } });
      return { message: 'Overdue fines and fees managed successfully' };
    } catch (error) {
      throw new Error(`Error helping manage overdue fines and fees: ${error.message}`);
    }
  },

  provideBookInformation: async (bookTitle) => {
    try {
      const book = await Book.findOne({ title: bookTitle });

      if (book) {
        return { bookInfo: book };
      } else {
        return { message: 'Book not found' };
      }
    } catch (error) {
      throw new Error(`Error providing book information: ${error.message}`);
    }
  },
};

module.exports = assistantLibrarianService;

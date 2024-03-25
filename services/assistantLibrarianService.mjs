// assistantLibrarianService.js
import Book from '../models/bookModel.mjs';
import Transaction from '../models/transactionModel.mjs';
import user from '../models/userModel.mjs';

async function assistCatalogingAndOrganizing(bookData) {
  try {
    const newBook = new Book(bookData);
    await newBook.save();
    return { message: 'Book cataloged and organized successfully' };
  } catch (error) {
    throw new Error(`Error cataloging and organizing books: ${error.message}`);
  }
}

async function helpWithBookSearchAndCheckouts(userId, bookTitle) {
  try {
    const book = await findOne({ title: bookTitle, isAvailable: true });
    if (book) {
      const newTransaction = new Transaction({ userId, bookId: book._id, action: 'checkout' });
      await newTransaction.save();
      await findByIdAndUpdate(book._id, { $set: { isAvailable: false } });
      return { message: 'Book search and checkout successful' };
    } else {
      return { message: 'Book not found or unavailable' };
    }
  } catch (error) {
    throw new Error(`Error helping with book search and checkouts: ${error.message}`);
  }
}

async function assistInProcessingBorrowingsAndReturns(userId, bookId, action) {
  try {
    const newTransaction = new Transaction({ userId, bookId, action });
    await newTransaction.save();
    if (action === 'return') {
      await findByIdAndUpdate(bookId, { $set: { isAvailable: true } });
    }
    return { message: 'Book borrowing/return processed successfully' };
  } catch (error) {
    throw new Error(`Error assisting in processing borrowings and returns: ${error.message}`);
  }
}

async function ensureProperShelvingAndMaintainOrder() {
  try {
    const sortedBooks = await find().sort({ title: 1 });
    return { message: 'Shelving and order maintenance completed successfully' };
  } catch (error) {
    throw new Error(`Error ensuring proper shelving and maintaining order: ${error.message}`);
  }
}

async function helpManageOverdueFinesAndFees(userId, amount) {
  try {
    await _findByIdAndUpdate(userId, { $inc: { fines: amount } });
    return { message: 'Overdue fines and fees managed successfully' };
  } catch (error) {
    throw new Error(`Error helping manage overdue fines and fees: ${error.message}`);
  }
}

async function provideBookInformation(bookTitle) {
  try {
    const book = await findOne({ title: bookTitle });
    if (book) {
      return { bookInfo: book };
    } else {
      return { message: 'Book not found' };
    }
  } catch (error) {
    throw new Error(`Error providing book information: ${error.message}`);
  }
}

export {
  provideBookInformation,
  helpManageOverdueFinesAndFees,
  helpWithBookSearchAndCheckouts,
  ensureProperShelvingAndMaintainOrder,
  assistCatalogingAndOrganizing,
  assistInProcessingBorrowingsAndReturns
};
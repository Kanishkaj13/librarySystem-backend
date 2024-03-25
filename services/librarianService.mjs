import Book from '../models/bookModel.mjs';
import Transaction from '../models/transactionModel.mjs';
import User from '../models/userModel.mjs';
import report from '../models/reportModel.mjs';

async function createUser(userData) {
  try {
    const existingUser = await User.findOne({ username: userData.username });
    if (existingUser) {
      throw new Error('Username already exists');
    }
    const newUser = new User(userData);
    await newUser.save();
    return { message: 'User created successfully' };
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
}

async function addBook(bookData) {
  const newBook = new Book(bookData);
  await newBook.save();
  return { message: 'Book added successfully' };
}

async function editBook(bookId, updatedData) {
  await findByIdAndUpdate(bookId, { $set: updatedData });
  return { message: 'Book updated successfully' };
}

async function removeBook(bookId) {
  await findByIdAndRemove(bookId);
  return { message: 'Book removed successfully' };
}

async function reviewHoldsAndRequests() {
  try {
    const holdsAndRequestsData = await find({ action: 'hold' })
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
}

async function processCheckout(userId, bookId) {
  try {
    const transactionData = {
      userId,
      bookId,
      action: 'checkout',
      timestamp: new Date(),
    };
    const newTransaction = new Transaction(transactionData);
    await newTransaction.save();
    await findByIdAndUpdate(bookId, { $set: { isAvailable: false } });
    return { message: 'Checkout processed successfully' };
  } catch (error) {
    throw new Error(`Error processing checkout: ${error.message}`);
  }
}

async function processReturn(userId, bookId) {
  const transactionData = {
    userId,
    bookId,
    action: 'return',
    timestamp: new Date(),
  };
  const newTransaction = new Transaction(transactionData);
  await newTransaction.save();
  await findByIdAndUpdate(bookId, { $set: { isAvailable: true } });
  return { message: 'Return processed successfully' };
}

async function manageFinesAndFees(userId, amount) {
  try {
    await _findByIdAndUpdate(userId, { $inc: { fines: amount } });
    return { message: 'Fines and fees managed successfully' };
  } catch (error) {
    throw new Error(`Error managing fines and fees: ${error.message}`);
  }
}

async function generateReportsAndStatistics() {
  try {
    const totalTransactions = await _countDocuments();
    const totalAvailableBooks = await countDocuments({ isAvailable: true });
    const reportsAndStatisticsData = {
      totalTransactions,
      totalAvailableBooks,
    };
    return reportsAndStatisticsData;
  } catch (error) {
    throw new Error(`Error generating reports and statistics: ${error.message}`);
  }
}

async function manageUserAccounts(userId, updatedData) {
  try {
    await _findByIdAndUpdate(userId, { $set: updatedData });
    return { message: 'User account managed successfully' };
  } catch (error) {
    throw new Error(`Error managing user accounts: ${error.message}`);
  }
}

export {
  manageFinesAndFees,
  manageUserAccounts,
  generateReportsAndStatistics,
  createUser,
  generateReportsAndStatistics,
  addBook,
  editBook,
  removeBook,
  processCheckout,
  processReturn,
  reviewHoldsAndRequests
};
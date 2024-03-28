import Book from '../models/bookModel.mjs';
import Transaction from '../models/transactionModel.mjs';
import User from '../models/userModel.mjs';
import Report from '../models/reportModel.mjs';

const librarianService = {

  registerUser:async(username, email, password, roles)=> {
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
      throw new Error("User already registered");
    }
    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      roles
    });
    return user;
  },

 addBook: async (bookData) => {
   const newBook = new Book(bookData);
    await newBook.save();
    return { message: 'Book added successfully' };
  },

  editBook: async (bookId, updatedData) => {
    try {
      const updatedBook = await Book.findByIdAndUpdate(bookId, { $set: updatedData }, { new: true });
      if (!updatedBook) {
        throw new Error('Book not found');
      }
      return { message: 'Book updated successfully', updatedBook };
    } catch (error) {
      throw new Error(`Error editing book: ${error.message}`);
    }
  },

  removeBook: async (bookId) => {
    try {
      const deletedBook = await Book.findByIdAndRemove(bookId);
      if (!deletedBook) {
        throw new Error('Book not found');
      }
      return { message: 'Book removed successfully', deletedBook };
    } catch (error) {
      throw new Error(`Error removing book: ${error.message}`);
    }
  },

  reviewHoldsAndRequests: async () => {
    try {
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
      const newTransaction = new Transaction({ userId, bookId, action: 'checkout', timestamp: new Date() });
      await newTransaction.save();
      await Book.findByIdAndUpdate(bookId, { $set: { isAvailable: false } });
      return { message: 'Checkout processed successfully' };
    } catch (error) {
      throw new Error(`Error processing checkout: ${error.message}`);
    }
  },

  processReturn: async (userId, bookId) => {
    try {
      const newTransaction = new Transaction({ userId, bookId, action: 'return', timestamp: new Date() });
      await newTransaction.save();
      await Book.findByIdAndUpdate(bookId, { $set: { isAvailable: true } });
      return { message: 'Return processed successfully' };
    } catch (error) {
      throw new Error(`Error processing return: ${error.message}`);
    }
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
      const reportsAndStatisticsData = { totalTransactions, totalAvailableBooks };
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

export default librarianService;

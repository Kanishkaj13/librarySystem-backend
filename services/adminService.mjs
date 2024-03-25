import User from "../models/userModel.mjs";
import Book from '../models/bookModel.mjs'
import Transaction from '../models/transactionModel.mjs'
import Report from '../models/reportModel.mjs'
import bcrypt from 'bcrypt'

async function getAllUsers() {
  try {
    const users = await User.find();
    return users;
  } catch (error) {

    console.error(error);
    throw new Error('Error fetching users');
  }
}

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

async function registerUser(username, email, password, roles) {
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
}

async function assignRolesAndPermissions(userId, roles, permissions) {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }
  user.roles = roles;
  user.permissions = permissions;
  await user.save();
  return { message: 'Roles and permissions assigned successfully' };
}

async function addOrUpdateBook(bookData) {
  const existingBook = await Book.findOne({ title: bookData.title });
  if (existingBook) {
    existingBook.quantity += bookData.quantity;
    await existingBook.save();
    return { message: 'Existing book updated successfully' };
  } else {
    const newBook = new Book(bookData);
    await newBook.save();
    return { message: 'New book added successfully' };
  }
}

async function registerMemberIssue(issueDetails) {
  await User.findByIdAndUpdate({ _id: issueDetails.userId },
    { $set: { issues: [issueDetails] } }, { upsert: true });
  return { message: 'Member issue registered successfully' };
}

async function trackBorrowingAndReturns(userId, bookId, action) {
  const transactionData = {
    userId,
    bookId,
    action,
    timestamp: new Date(),
  };
  const newTransaction = new Transaction(transactionData);
  await newTransaction.save();
  return { message: `Book ${action === 'borrow' ? 'borrowed' : 'returned'} successfully` };
}

async function manageOverdueFines(userId, amount) {
  await User.findByIdAndUpdate(userId, { $inc: { fines: amount } });
  return { message: 'Overdue fines managed successfully' };
}

async function generateLibraryReport() {
  const transactions = await Transaction.find();
  const reportData = {
    totalBorrowedBooks: transactions.filter(transaction => transaction.action === 'borrow').length,
    totalReturnedBooks: transactions.filter(transaction => transaction.action === 'return').length,
  };
  const newReport = new Report(reportData);
  await newReport.save();
  return { message: 'Library report generated and saved successfully' };
}

export {
  generateLibraryReport,
  getAllUsers,
  manageOverdueFines,
  trackBorrowingAndReturns,
  registerMemberIssue,
  registerUser,
  addOrUpdateBook,
  assignRolesAndPermissions,
  createUser,
};
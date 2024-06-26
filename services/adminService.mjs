import User from "../models/userModel.mjs";
import Book from '../models/bookModel.mjs'
import Transaction from '../models/transactionModel.mjs'
import Report from '../models/reportModel.mjs'
import bcrypt from 'bcrypt'
const adminService={
 getAllUsers:async(userType)=> {
  try {
    const users = await User.find();
    return users;
  } catch (error) {

    console.error(error);
    throw new Error('Error fetching users');
  }
},


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

 assignRolesAndPermissions:async(userId, roles, permissions)=>{
  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }
  user.roles = roles;
  user.permissions = permissions;
  await user.save();
  return { message: 'Roles and permissions assigned successfully' };
},

addBook: async (bookData) => {
  const newBook = new Book(bookData);
   await newBook.save();
   return { message: 'Book added successfully' };
 },

 updateBook: async (bookId, updatedData) => {
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
registerMemberIssue:async(issueDetails) =>{
  await User.findByIdAndUpdate({ _id: issueDetails.userId },
    { $set: { issues: [issueDetails] } }, { upsert: true });
  return { message: 'Member issue registered successfully' };
},

 trackBorrowingAndReturns:async(userId, bookId, action) =>{
  const transactionData = {
    userId,
    bookId,
    action,
    timestamp: new Date(),
  };
  const newTransaction = new Transaction(transactionData);
  await newTransaction.save();
  return { message: `Book ${action === 'borrow' ? 'borrowed' : 'returned'} successfully` };
},

 manageOverdueFines:async(userId, amount)=> {
  await User.findByIdAndUpdate(userId, { $inc: { fines: amount } });
  return { message: 'Overdue fines managed successfully' };
},

generateLibraryReport:async()=> {
  const transactions = await Transaction.find();
  const reportData = {
    totalBorrowedBooks: transactions.filter(transaction => transaction.action === 'borrow').length,
    totalReturnedBooks: transactions.filter(transaction => transaction.action === 'return').length,
  };
  const newReport = new Report(reportData);
  await newReport.save();
  return { message: 'Library report generated and saved successfully' };
}
}


export default adminService;
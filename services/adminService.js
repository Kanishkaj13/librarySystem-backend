// adminService.js
const User = require('../models/userModel');
const Book = require('../models/bookModel');
const Transaction = require('../models/transactionModel');
const Report = require('../models/reportModel');

const adminService = {
  createUser: async (userData) => {
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
 
  
     },                                 
    

  assignRolesAndPermissions: async (userId, roles, permissions) => {
      try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }
      user.roles = roles;
      user.permissions = permissions;
      await user.save();

      return { message: 'Roles and permissions assigned successfully' };
    } catch (error) {
      throw new Error(res.status(404).json({ message:'roles are not assigned properly' }));
    }
  },

  addOrUpdate0rRemovebook: async (bookData) => {
     try {
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
     
    }catch (error) {
      throw new Error(res.status(401).json({message:`Error adding or updating book`}));
    }
  

   
    
  },

  registerMemberIssue: async (userId, issueDetails)=> {
    try {
      await User.findByIdAndUpdate(userId, { $push: { issues: issueDetails } });
      return { message: 'Member issue registered successfully' };
    } catch (error) {
      throw new Error(res.status(404).json({message:`Error registering member issue`}));
    }
},

  trackBorrowingAndReturns: async (userId, bookId, action) => {
     try {
       const transactionData = {
        userId,
        bookId,
        action,
        timestamp: new Date(),
      };

      const newTransaction = new Transaction(transactionData);
      await newTransaction.save();

      return { message: `Book ${action === 'borrow' ? 'borrowed' : 'returned'} successfully` };
    } catch (error) {
      throw new Error (res.status(401).json({message:`Error tracking borrowing and returns`}));
    }
    
  },

  manageOverdueFines: async (userId, amount) => {

      try {
        await User.findByIdAndUpdate(userId, { $inc: { fines: amount } });
  
        return { message: 'Overdue fines managed successfully' };
      } catch (error) {
        throw new Error (res.status(401).json({message:`overdue fines not managed properly`}));
      }
    
  },

  generateLibraryReport: async () => {

    try {
      const transactions = await Transaction.find();
      const reportData = {
        totalBorrowedBooks: transactions.filter(transaction => transaction.action === 'borrow').length,
        totalReturnedBooks: transactions.filter(transaction => transaction.action === 'return').length,
      };
      const newReport = new Report(reportData);
      await newReport.save();

      return { message: 'Library report generated and saved successfully' };
    } catch (error) {
      throw new Error (res.status(401).json({message:`not generated and saved properly`}));
    }
  
  },
  };

module.exports = adminService;




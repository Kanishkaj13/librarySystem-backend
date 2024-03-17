// adminController.mjs

import {
  createUser as _createUser,
  assignRolesAndPermissions as _assignRolesAndPermissions,
  addOrUpdateBook as _addOrUpdateBook,
  registerMemberIssue as _registerMemberIssue,
  trackBorrowingAndReturns as _trackBorrowingAndReturns,
  manageOverdueFines as _manageOverdueFines,
  generateLibraryReport as _generateLibraryReport
} from '../services/adminService.mjs';

  

  

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    await adminService.createUser(userData);
    res.json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const assignRolesAndPermissions = async (req, res) => {
  try {
    const { userId, roles, permissions } = req.body;
    await adminService.assignRolesAndPermissions(userId, roles, permissions);
    res.json({ message: 'Roles and permissions assigned successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const addOrUpdateBook = async (req, res) => {
  try {
    const bookData = req.body;
    await adminService.addOrUpdateBook(bookData);
    res.json({ message: 'Book added or updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const registerMemberIssue = async (req, res) => {
  try {
    const { userId, issueDetails } = req.body;
    await adminService.registerMemberIssue(userId, issueDetails);
    res.json({ message: 'Member issue registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
const trackBorrowingAndReturns = async (req, res) => {
  try {
    const { userId, bookId, action } = req.body;
    await adminService.trackBorrowingAndReturns(userId, bookId, action);
    res.json({ message: 'Borrowing/Return tracked successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const manageOverdueFines = async (req, res) => {
  try {
    const { userId, amount } = req.body;
    await adminService.manageOverdueFines(userId, amount);
    res.json({ message: 'Overdue fines managed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const generateLibraryReport = async (req, res) => {
  try {
    await adminService.generateLibraryReport();
    res.json({ message: 'Library report generated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export  {
  createUser,
  assignRolesAndPermissions,
  addOrUpdateBook,
  registerMemberIssue,
  trackBorrowingAndReturns,
  manageOverdueFines,
  generateLibraryReport,
};

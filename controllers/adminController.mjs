// adminController.mjs

import adminService from "../services/adminService.mjs";



const adminController = {

   createUser: async (req, res) => {
    try {
      const userData = req.body;
      await adminService.createUser(userData);
      res.json({ message: 'User created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

   assignRolesAndPermissions: async (req, res) => {
    try {
      const { userId, roles, permissions } = req.body;
      await adminService.assignRolesAndPermissions(userId, roles, permissions);
      res.json({ message: 'Roles and permissions assigned successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

   addOrUpdateBook: async (req, res) => {
    try {
      const bookData = req.body;
      await adminService.addOrUpdateBook(bookData);
      res.json({ message: 'Book added or updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

   registerMemberIssue: async (req, res) => {
    try {
      const { userId, issueDetails } = req.body;
      await adminService.registerMemberIssue(userId, issueDetails);
      res.json({ message: 'Member issue registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

   trackBorrowingAndReturns: async (req, res) => {
    try {
      const { userId, bookId, action } = req.body;
      await adminService.trackBorrowingAndReturns(userId, bookId, action);
      res.json({ message: 'Borrowing/Return tracked successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  manageOverdueFines: async (req, res) => {
    try {
      const { userId, amount } = req.body;
      await adminService.manageOverdueFines(userId, amount);
      res.json({ message: 'Overdue fines managed successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  generateLibraryReport: async (req, res) => {
    try {
      await adminService.generateLibraryReport();
      res.json({ message: 'Library report generated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export default adminController;
// librarianController.js
import{ addBook as _addBook,
  editBook as _edtBook,
  removeBook as _removeBook,
  reviewHoldsAndRequests as _reviewHoldsAndRequests,
  processCheckout as _processCheckout,
  processReturn as _processReturn,
  manageFinesAndFees as _manageFinesAndFees,
  generateReportsAndStatistics as _generateReportsAndStatistics,
  manageUserAccounts as _manageUserAccounts
}from'../services/librarianService.mjs';

const addBook = async (req, res) => {
  try {
    const bookData = req.body;
    const result = await librarianService.addBook(bookData);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const editBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const updatedData = req.body;
    const result = await librarianService.editBook(bookId, updatedData);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const removeBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const result = await librarianService.removeBook(bookId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const reviewHoldsAndRequests = async (req, res) => {
  try {
    const holdsAndRequestsData = await librarianService.reviewHoldsAndRequests();
    res.json(holdsAndRequestsData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const processCheckout = async (req, res) => {
  try {
    const { userId, bookId } = req.body;
    const result = await librarianService.processCheckout(userId, bookId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const processReturn = async (req, res) => {
  try {
    const { userId, bookId } = req.body;
    const result = await librarianService.processReturn(userId, bookId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const manageFinesAndFees = async (req, res) => {
  try {
    const { userId, amount } = req.body;
    const result = await librarianService.manageFinesAndFees(userId, amount);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const generateReportsAndStatistics = async (req, res) => {
  try {
    const reportsAndStatisticsData = await librarianService.generateReportsAndStatistics();
    res.json(reportsAndStatisticsData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const manageUserAccounts = async (req, res) => {
  try {
    const { userId } = req.params;
    const updatedData = req.body;
    const result = await librarianService.manageUserAccounts(userId, updatedData);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export  {
  addBook,
  editBook,
  removeBook,
  reviewHoldsAndRequests,
  processCheckout,
  processReturn,
  manageFinesAndFees,
  generateReportsAndStatistics,
  manageUserAccounts,
};

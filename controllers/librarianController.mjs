// librarianController.js
import  librarianService from "../services/librarianService.mjs";

async function createUser(req, res) {
    try {
      const userData = req.body;
      await librarianService.createUser(userData);
      res.json({ message: 'User created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

async function addBook(req, res) {
  try {
    const bookData = req.body;
    const result = await librarianService.addBook(bookData);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function editBook(req, res) {
  try {
    const { bookId } = req.params;
    const updatedData = req.body;
    const result = await librarianService.editBook(bookId, updatedData);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function removeBook(req, res) {
  try {
    const { bookId } = req.params;
    const result = await librarianService.removeBook(bookId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function reviewHoldsAndRequests(req, res) {
  try {
    const holdsAndRequestsData = await librarianService.reviewHoldsAndRequests();
    res.json(holdsAndRequestsData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function processCheckout(req, res) {
  try {
    const { userId, bookId } = req.body;
    const result = await librarianService.processCheckout(userId, bookId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function processReturn(req, res) {
  try {
    const { userId, bookId } = req.body;
    const result = await librarianService.processReturn(userId, bookId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function manageFinesAndFees(req, res) {
  try {
    const { userId, amount } = req.body;
    const result = await librarianService.manageFinesAndFees(userId, amount);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function generateReportsAndStatistics(req, res) {
  try {
    const reportsAndStatisticsData = await librarianService.generateReportsAndStatistics();
    res.json(reportsAndStatisticsData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function manageUserAccounts(req, res) {
  try {
    const { userId } = req.params;
    const updatedData = req.body;
    const result = await librarianService.manageUserAccounts(userId, updatedData);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}


export {
  createUser,
  addBook,
  manageFinesAndFees,
  manageUserAccounts,
  processCheckout,
  processReturn,
  removeBook,
  editBook
};

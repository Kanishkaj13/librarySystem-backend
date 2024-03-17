// librarianController.js
import  librarianService from "../services/librarianService.mjs";

const librarianController={
addBook :async (req, res) => {
  try {
    const bookData = req.body;
    const result = await librarianService.addBook(bookData);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

 editBook : async (req, res) => {
  try {
    const { bookId } = req.params;
    const updatedData = req.body;
    const result = await librarianService.editBook(bookId, updatedData);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

 removeBook : async (req, res) => {
  try {
    const { bookId } = req.params;
    const result = await librarianService.removeBook(bookId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},
 reviewHoldsAndRequests : async (req, res) => {
  try {
    const holdsAndRequestsData = await librarianService.reviewHoldsAndRequests();
    res.json(holdsAndRequestsData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

 processCheckout : async (req, res) => {
  try {
    const { userId, bookId } = req.body;
    const result = await librarianService.processCheckout(userId, bookId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},
 processReturn :async (req, res) => {
  try {
    const { userId, bookId } = req.body;
    const result = await librarianService.processReturn(userId, bookId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

 manageFinesAndFees : async (req, res) => {
  try {
    const { userId, amount } = req.body;
    const result = await librarianService.manageFinesAndFees(userId, amount);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

 generateReportsAndStatistics : async (req, res) => {
  try {
    const reportsAndStatisticsData = await librarianService.generateReportsAndStatistics();
    res.json(reportsAndStatisticsData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

 manageUserAccounts :async (req, res) => {
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
}

export  default librarianController;

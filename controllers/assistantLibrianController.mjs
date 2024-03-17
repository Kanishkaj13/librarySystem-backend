// assistantLibrarianController.js
import {assistCatalogingAndOrganizing as _assistCatalogingAndOrganizing,
helpWithBookSearchAndCheckouts as _helpWithBookSearchAndCheckouts,
assistInProcessingBorrowingsAndReturns as _assistInProcessingBorrowingsAndReturns, 
ensureProperShelvingAndMaintainOrder as _ensureProperShelvingAndMaintainOrder,
helpManageOverdueFinesAndFees as helpManageOverdueFinesAndFees,
provideBookInformation as provideBookInformation} from '../services/assistantLibrarianService.mjs';

  

const assistCatalogingAndOrganizing = async (req, res) => {
  try {
    const bookData = req.body;
    const result = await assistantLibrarianService.assistCatalogingAndOrganizing(bookData);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const helpWithBookSearchAndCheckouts = async (req, res) => {
  try {
    const { userId, bookTitle } = req.body;
    const result = await assistantLibrarianService.helpWithBookSearchAndCheckouts(userId, bookTitle);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const assistInProcessingBorrowingsAndReturns = async (req, res) => {
  try {
    const { userId, bookId, action } = req.body;
    const result = await assistantLibrarianService.assistInProcessingBorrowingsAndReturns(userId, bookId, action);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const ensureProperShelvingAndMaintainOrder = async (req, res) => {
  try {
    const result = await assistantLibrarianService.ensureProperShelvingAndMaintainOrder();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const helpManageOverdueFinesAndFees = async (req, res) => {
  try {
    const { userId, amount } = req.body;
    const result = await assistantLibrarianService.helpManageOverdueFinesAndFees(userId, amount);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const provideBookInformation = async (req, res) => {
  try {
    const { bookTitle } = req.body;
    const result = await assistantLibrarianService.provideBookInformation(bookTitle);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
export{
  assistCatalogingAndOrganizing,
  helpWithBookSearchAndCheckouts,
  assistInProcessingBorrowingsAndReturns,
  ensureProperShelvingAndMaintainOrder,
  helpManageOverdueFinesAndFees,
  provideBookInformation,
};

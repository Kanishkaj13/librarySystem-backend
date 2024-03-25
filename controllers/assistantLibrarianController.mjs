import assistantLibrarianService from "../services/assistantLibrarianService.mjs";

async function assistCatalogingAndOrganizing(req, res) {
  try {
    const bookData = req.body;
    const result = await assistantLibrarianService.assistCatalogingAndOrganizing(bookData);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function helpWithBookSearchAndCheckouts(req, res) {
  try {
    const { userId, bookTitle } = req.body;
    const result = await assistantLibrarianService.helpWithBookSearchAndCheckouts(userId, bookTitle);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function assistInProcessingBorrowingsAndReturns(req, res) {
  try {
    const { userId, bookId, action } = req.body;
    const result = await assistantLibrarianService.assistInProcessingBorrowingsAndReturns(userId, bookId, action);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function ensureProperShelvingAndMaintainOrder(req, res) {
  try {
    const result = await assistantLibrarianService.ensureProperShelvingAndMaintainOrder();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function helpManageOverdueFinesAndFees(req, res) {
  try {
    const { userId, amount } = req.body;
    const result = await assistantLibrarianService.helpManageOverdueFinesAndFees(userId, amount);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function provideBookInformation(req, res) {
  try {
    const { bookTitle } = req.body;
    const result = await assistantLibrarianService.provideBookInformation(bookTitle);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}


export {
  provideBookInformation,
  assistCatalogingAndOrganizing,
  assistInProcessingBorrowingsAndReturns,
  helpManageOverdueFinesAndFees,
  helpWithBookSearchAndCheckouts,
  ensureProperShelvingAndMaintainOrder,
};
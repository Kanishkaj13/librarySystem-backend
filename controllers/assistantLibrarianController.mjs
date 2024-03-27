import assistantLibrarianService from "../services/assistantLibrarianService.mjs";
const assistantLibrarinController={
assistCatalogingAndOrganizing:async(req, res)=> {
  try {
    const bookData = req.body;
    const result = await assistantLibrarianService.assistCatalogingAndOrganizing(bookData);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

helpWithBookSearchAndCheckouts:async(req, res)=> {
  try {
    const { userId, bookTitle } = req.body;
    const result = await assistantLibrarianService.helpWithBookSearchAndCheckouts(userId, bookTitle);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

 assistInProcessingBorrowingsAndReturns:async(req, res)=> {
  try {
    const { userId, bookId, action } = req.body;
    const result = await assistantLibrarianService.assistInProcessingBorrowingsAndReturns(userId, bookId, action);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

ensureProperShelvingAndMaintainOrder:async(req, res) =>{
  try {
    const result = await assistantLibrarianService.ensureProperShelvingAndMaintainOrder();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

 helpManageOverdueFinesAndFees:async(req, res) =>{
  try {
    const { userId, amount } = req.body;
    const result = await assistantLibrarianService.helpManageOverdueFinesAndFees(userId, amount);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

 provideBookInformation:async(req, res) =>{
  try {
    const { bookTitle } = req.body;
    const result = await assistantLibrarianService.provideBookInformation(bookTitle);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
};

export default assistantLibrarinController;
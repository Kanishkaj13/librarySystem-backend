// accountantController.js
const accountantService = require('../services/accountantService');

const monitorAndManageBudget = async (req, res) => {
  try {
    const result = await accountantService.monitorAndManageBudget();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const handleFines = async (req, res) => {
  try {
    const { userId, amount } = req.body;
    const result = await accountantService.handleFines(userId, amount);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const trackAndRecordExpenses = async (req, res) => {
  try {
    const expenseDetails = req.body;
    const result = await accountantService.trackAndRecordExpenses(expenseDetails);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const interactWithVendors = async (req, res) => {
  try {
    const vendorDetails = req.body;
    const result = await accountantService.interactWithVendors(vendorDetails);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const assistInPlanningFinancialAllocations = async (req, res) => {
  try {
    const result = await accountantService.assistInPlanningFinancialAllocations();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const provideFinancialAdvice = async (req, res) => {
  try {
    const result = await accountantService.provideFinancialAdvice();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  monitorAndManageBudget,
  handleFines,
  trackAndRecordExpenses,
  interactWithVendors,
  assistInPlanningFinancialAllocations,
  provideFinancialAdvice,
};

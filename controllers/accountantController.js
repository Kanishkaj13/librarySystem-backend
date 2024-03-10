// accountantController.js
import { monitorAndManageBudget as _monitorAndManageBudget, handleFines as _handleFines, trackAndRecordExpenses as _trackAndRecordExpenses, interactWithVendors as _interactWithVendors, assistInPlanningFinancialAllocations as _assistInPlanningFinancialAllocations, provideFinancialAdvice as _provideFinancialAdvice } from '../services/accountantService';

const monitorAndManageBudget = async (req, res) => {
  try {
    const result = await _monitorAndManageBudget();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const handleFines = async (req, res) => {
  try {
    const { userId, amount } = req.body;
    const result = await _handleFines(userId, amount);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const trackAndRecordExpenses = async (req, res) => {
  try {
    const expenseDetails = req.body;
    const result = await _trackAndRecordExpenses(expenseDetails);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const interactWithVendors = async (req, res) => {
  try {
    const vendorDetails = req.body;
    const result = await _interactWithVendors(vendorDetails);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const assistInPlanningFinancialAllocations = async (req, res) => {
  try {
    const result = await _assistInPlanningFinancialAllocations();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const provideFinancialAdvice = async (req, res) => {
  try {
    const result = await _provideFinancialAdvice();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default {
  monitorAndManageBudget,
  handleFines,
  trackAndRecordExpenses,
  interactWithVendors,
  assistInPlanningFinancialAllocations,
  provideFinancialAdvice,
};

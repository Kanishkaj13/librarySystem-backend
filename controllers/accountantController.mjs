import accountantService from "../services/accountantService.mjs";

async function monitorAndManageBudget(req, res) {
  try {
    const result = await _monitorAndManageBudget();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function handleFines(req, res) {
  try {
    const { userId, amount } = req.body;
    const result = await _handleFines(userId, amount);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function trackAndRecordExpenses(req, res) {
  try {
    const expenseDetails = req.body;
    const result = await _trackAndRecordExpenses(expenseDetails);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function interactWithVendors(req, res) {
  try {
    const vendorDetails = req.body;
    const result = await _interactWithVendors(vendorDetails);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function assistInPlanningFinancialAllocations(req, res) {
  try {
    const result = await _assistInPlanningFinancialAllocations();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function provideFinancialAdvice(req,res) {
  try {
    const result = await _provideFinancialAdvice();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export {
  monitorAndManageBudget,
  handleFines,
  trackAndRecordExpenses,
  interactWithVendors,
  assistInPlanningFinancialAllocations,
  provideFinancialAdvice
};
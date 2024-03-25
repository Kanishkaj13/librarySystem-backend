import Transaction from '../models/transactionModel.mjs';
import Expense from '../models/expenseModel.mjs';
import Budget from '../models/budgetModel.mjs';

async function trackAndRecordExpenses(expenseDetails) {
  try {
    const newExpense = new Expense(expenseDetails);
    await newExpense.save();
    return { message: 'Expense tracked and recorded successfully' };
  } catch (error) {
    throw new Error(`Error tracking and recording expenses: ${error.message}`);
  }
}

async function handleFines(userId, amount) {
  try {

    await User.findByIdAndUpdate(userId, { $inc: { fines: amount } });
    return { message: 'Fines handled successfully' };
  } catch (error) {
    throw new Error(`Error handling fines: ${error.message}`);
  }
}


async function interactWithVendors(vendorDetails) {
  try {

    await vendorService.handleVendorInteraction(req.body);
    res.json({ message: 'Interaction with vendors successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }

}

async function assistInPlanningFinancialAllocations() {
  try {
    await financialService.analyzeBudgetAndExpenses();
    res.json({ message: 'Assisted in planning financial allocations' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function provideFinancialAdvice() {
  try {
    const financialAdvice = await financialAdviceService.generateFinancialAdvice();
    res.json({ financialAdvice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export {
  trackAndRecordExpenses,
  handleFines,
  provideFinancialAdvice,
  assistInPlanningFinancialAllocations,
  interactWithVendors
};
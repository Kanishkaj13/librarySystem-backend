import Transaction from '../models/transactionModel.mjs';
import Expense from '../models/expenseModel.mjs';
import Budget from '../models/budgetModel.mjs';

const accountantService = {
  trackAndRecordExpenses: async (expenseDetails) => {
       try {
      const newExpense = new Expense(expenseDetails);
      await newExpense.save();
      return { message: 'Expense tracked and recorded successfully' };
    } catch (error) {
      throw new Error(`Error tracking and recording expenses: ${error.message}`);
    }
   },

  handleFines: async (userId, amount) => {
     try {
      const budget = budget(budgetDetails);
      await User.findByIdAndUpdate(userId, { $inc: { fines: amount } });
      return { message: 'Fines handled successfully' };
    } catch (error) {
      throw new Error(`Error handling fines: ${error.message}`);
    }
},

 
  interactWithVendors: async (vendorDetails) => {

    try {
      const interaction = new Transaction({
        type: 'vendor_interaction',
        details: vendorDetails,
        timestamp: new Date(),
      });
      await interaction.save();


       res.json({ message: 'Interaction with vendors successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
   
  },

  assistInPlanningFinancialAllocations: async () => {

    try {
      const budget = await Budget.find();
      const expenses = await Expense.find();
      const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
      res.json({ message:'Assisted in planning financial allocations' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
   },

  provideFinancialAdvice: async () => {

    try {
    
      const financialAdvice = await financialAdviceService.generateFinancialAdvice();
      res.json({ financialAdvice });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
},
};

export default accountantService;
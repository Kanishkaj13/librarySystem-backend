
import accountantService from "../services/accountantService.mjs";

const accountantController = {
 monitorAndManageBudget : async (req, res) => {
  try {
    const result = await _monitorAndManageBudget();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

 handleFines :async (req, res) => {
  try {
    const { userId, amount } = req.body;
    const result = await _handleFines(userId, amount);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

 trackAndRecordExpenses :async (req, res) => {
  try {
    const expenseDetails = req.body;
    const result = await _trackAndRecordExpenses(expenseDetails);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

 interactWithVendors :async (req, res) => {
  try {
    const vendorDetails = req.body;
    const result = await _interactWithVendors(vendorDetails);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

 assistInPlanningFinancialAllocations : async (req, res) => {
  try {
    const result = await _assistInPlanningFinancialAllocations();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}, 
provideFinancialAdvice : async (req,res)=>{
  try {
    const result = await _provideFinancialAdvice();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
}

export default accountantController;

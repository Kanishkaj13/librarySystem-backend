import accountantService from "../services/accountantService.mjs";
const aacountantController={
 monitorAndManageBudget:async(req, res) =>{
  try {
    const result = await accountantService.monitorAndManageBudget();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

handleFines:async(req, res) =>{
  try {
    const { userId, amount } = req.body;
    const result = await accountantService.handleFines(userId, amount);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

trackAndRecordExpenses:async(req, res)=> {
  try {
    const expenseDetails = req.body;
    const result = await accountantService.trackAndRecordExpenses(expenseDetails);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

 interactWithVendors:async(req, res)=>{
  try {
    const vendorDetails = req.body;
    const result = await accountantService.interactWithVendors(vendorDetails);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

 assistInPlanningFinancialAllocations:async(req, res)=> {
  try {
    const result = await accountantService.assistInPlanningFinancialAllocations();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

 provideFinancialAdvice:async(req,res)=> {
  try {
    const result = await accountantService.provideFinancialAdvice();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
};

export default accountantController;
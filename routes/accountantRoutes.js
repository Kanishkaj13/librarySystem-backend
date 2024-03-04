
const express = require('express');
const router = express.Router();
const accountantController = require('../controllers/accountantController');
const { authenticateToken } = require('../middlewares/authenticationMiddleware');

router.get('/monitor-manage-budget', authenticateToken, accountantController.monitorAndManageBudget);
router.post('/handle-fines', authenticateToken, accountantController.handleFines);
router.post('/track-record-expenses', authenticateToken, accountantController.trackAndRecordExpenses);
router.post('/interact-with-vendors', authenticateToken, accountantController.interactWithVendors);
router.get('/assist-in-planning-financial-allocations', authenticateToken, accountantController.assistInPlanningFinancialAllocations);
router.get('/provide-financial-advice', authenticateToken, accountantController.provideFinancialAdvice);

module.exports = router;

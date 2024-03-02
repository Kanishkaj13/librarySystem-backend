// accountantRoutes.js
const express = require('express');
const router = express.Router();
const accountantService = require('../services/accountantService');
const { authenticateToken } = require('../middlewares/authenticationMiddleware');

router.get('/monitor-manage-budget', authenticateToken, accountantService.monitorAndManageBudget);
router.post('/handle-fines', authenticateToken, accountantService.handleFines);
router.post('/track-record-expenses', authenticateToken, accountantService.trackAndRecordExpenses);
router.post('/interact-with-vendors', authenticateToken, accountantService.interactWithVendors);
router.get('/assist-in-planning-financial-allocations', authenticateToken, accountantService.assistInPlanningFinancialAllocations);
router.get('/provide-financial-advice', authenticateToken, accountantService.provideFinancialAdvice);

module.exports = router;


import express from 'express';
import { Router } from 'express';
import accountantController from '../controllers/accountantController.mjs';
import { authenticateToken } from "../middlewares/authenticationMiddleware..mjs";

router.get('/monitor-manage-budget', authenticateToken, accountantController.monitorAndManageBudget);
router.post('/handle-fines', authenticateToken, accountantController.handleFines);
router.post('/track-record-expenses', authenticateToken, accountantController.trackAndRecordExpenses);
router.post('/interact-with-vendors', authenticateToken, accountantController.interactWithVendors);
router.get('/assist-in-planning-financial-allocations', authenticateToken, accountantController.assistInPlanningFinancialAllocations);
router.get('/provide-financial-advice', authenticateToken, accountantController.provideFinancialAdvice);

export  default  router;

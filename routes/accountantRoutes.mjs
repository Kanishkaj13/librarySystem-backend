import { Router } from 'express';
import {
    monitorAndManageBudget,
    handleFines,
    trackAndRecordExpenses,
    interactWithVendors,
    assistInPlanningFinancialAllocations,
    provideFinancialAdvice
} from '../controllers/accountantController.mjs';
import authenticateToken from "../middlewares/authenticationMiddleware.mjs";
const router = Router();

router.get('/monitor-manage-budget', authenticateToken, monitorAndManageBudget);
router.post('/handle-fines', authenticateToken, handleFines);
router.post('/track-record-expenses', authenticateToken, trackAndRecordExpenses);
router.post('/interact-with-vendors', authenticateToken, interactWithVendors);
router.get('/assist-in-planning-financial-allocations', authenticateToken, assistInPlanningFinancialAllocations);
router.get('/provide-financial-advice', authenticateToken, provideFinancialAdvice);

export default router;
import { Router } from 'express';
import {
    createUser,
    addBook,
    manageFinesAndFees,
    manageUserAccounts,
    processCheckout,
    processReturn,
    removeBook,
    editBook,
    reviewHoldsAndRequests,
    generateReportsAndStatistics
} from '../controllers/librarianController.mjs';
import { authenticateToken } from "../middlewares/authenticationMiddleware.mjs";
const router = Router();

router.post('/create-user', authenticateToken, createUser);
router.post('/add-book', authenticateToken, addBook);
router.put('/edit-book/:bookId', authenticateToken, editBook);
router.delete('/remove-book/:bookId', authenticateToken, removeBook);
router.get('/review-holds-requests', authenticateToken, reviewHoldsAndRequests);
router.post('/process-checkout', authenticateToken, processCheckout);
router.post('/process-return', authenticateToken, processReturn);
router.post('/manage-fines-fees', authenticateToken, manageFinesAndFees);
router.get('/generate-reports-statistics', authenticateToken, generateReportsAndStatistics);
router.put('/manage-user-accounts/:userId', authenticateToken, manageUserAccounts);

export default router;

import  express from'express';
import { Router } from 'express';
import librarianController from '../controllers/librarianController.mjs';
import { authenticateToken } from "../middlewares/authenticationMiddleware..mjs";


router.post('/add-book', authenticateToken, librarianController.addBook);
router.put('/edit-book/:bookId', authenticateToken, librarianController.editBook);
router.delete('/remove-book/:bookId', authenticateToken, librarianController.removeBook);
router.get('/review-holds-requests', authenticateToken, librarianController.reviewHoldsAndRequests);
router.post('/process-checkout', authenticateToken, librarianController.processCheckout);
router.post('/process-return', authenticateToken, librarianController.processReturn);
router.post('/manage-fines-fees', authenticateToken, librarianController.manageFinesAndFees);
router.get('/generate-reports-statistics', authenticateToken, librarianController.generateReportsAndStatistics);
router.put('/manage-user-accounts/:userId', authenticateToken, librarianController.manageUserAccounts);

export default router;

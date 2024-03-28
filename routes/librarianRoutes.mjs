// librarianRoutes.js
import express from 'express';
import authenticateToken from '../middlewares/authenticationMiddleware.mjs';
import librarianController from '../controllers/librarianController.mjs';

const router = express.Router();


router.post('/add-book', authenticateToken, librarianController.addBook);
router.put('/edit-book/:bookId', authenticateToken, librarianController.editBook);
router.delete('/remove-book/:bookId', authenticateToken, librarianController.removeBook);
router.get('/holds-requests', authenticateToken, librarianController.reviewHoldsAndRequests);
router.post('/checkout-book', authenticateToken, librarianController.processCheckout);
router.post('/return-book', authenticateToken, librarianController.processReturn);
router.post('/manage-fines-fees', authenticateToken, librarianController.manageFinesAndFees);
router.get('/generate-reports', authenticateToken, librarianController.generateReportsAndStatistics);
router.put('/manage-user/:userId', authenticateToken, librarianController.manageUserAccounts);

export default router;

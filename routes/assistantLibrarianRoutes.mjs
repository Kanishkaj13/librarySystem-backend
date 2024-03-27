// assistantLibrarianRoutes.js
import express from 'express';
import authenticateToken from '../middlewares/authenticationMiddleware.mjs';
import assistantLibrarianController from '../controllers/assistantLibrarianController.mjs';

const router = express.Router();

router.post('/catalog-organize-book', authenticateToken, assistantLibrarianController.assistCatalogingAndOrganizing);
router.post('/search-checkout-book', authenticateToken, assistantLibrarianController.helpWithBookSearchAndCheckouts);
router.post('/process-borrow-return', authenticateToken, assistantLibrarianController.assistInProcessingBorrowingsAndReturns);
router.post('/maintain-shelving-order', authenticateToken, assistantLibrarianController.ensureProperShelvingAndMaintainOrder);
router.post('/manage-overdue-fines-fees', authenticateToken, assistantLibrarianController.helpManageOverdueFinesAndFees);
router.post('/provide-book-information', authenticateToken, assistantLibrarianController.provideBookInformation);

export default router;

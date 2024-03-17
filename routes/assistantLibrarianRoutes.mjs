
import  express from 'express';
import { Router } from 'express';
import assistantLibrarianController from'../controllers/assistantLibrarianController.mjs';
import { authenticateToken } from "../middlewares/authenticationMiddleware..mjs";



router.post('/assist-cataloging-organizing', authenticateToken, assistantLibrarianController.assistCatalogingAndOrganizing);
router.post('/help-with-book-search-checkouts', authenticateToken, assistantLibrarianController.helpWithBookSearchAndCheckouts);
router.post('/assist-borrowings-returns', authenticateToken, assistantLibrarianController.assistInProcessingBorrowingsAndReturns);
router.post('/ensure-proper-shelving-order', authenticateToken, assistantLibrarianController.ensureProperShelvingAndMaintainOrder);
router.post('/help-manage-overdue-fines-fees', authenticateToken, assistantLibrarianController.helpManageOverdueFinesAndFees);
router.post('/provide-book-information', authenticateToken, assistantLibrarianController.provideBookInformation);

export default router;

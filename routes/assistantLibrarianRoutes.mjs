import { Router } from 'express';
import {
    provideBookInformation,
    assistCatalogingAndOrganizing,
    assistInProcessingBorrowingsAndReturns,
    helpManageOverdueFinesAndFees,
    helpWithBookSearchAndCheckouts,
    ensureProperShelvingAndMaintainOrder,
} from '../controllers/assistantLibrarianController.mjs';
import { authenticateToken } from "../middlewares/authenticationMiddleware.mjs";
const router = Router();

router.post('/assist-cataloging-organizing', authenticateToken, assistCatalogingAndOrganizing);
router.post('/help-with-book-search-checkouts', authenticateToken, helpWithBookSearchAndCheckouts);
router.post('/assist-borrowings-returns', authenticateToken, assistInProcessingBorrowingsAndReturns);
router.post('/ensure-proper-shelving-order', authenticateToken, ensureProperShelvingAndMaintainOrder);
router.post('/help-manage-overdue-fines-fees', authenticateToken, helpManageOverdueFinesAndFees);
router.post('/provide-book-information', authenticateToken, provideBookInformation);

export default router;
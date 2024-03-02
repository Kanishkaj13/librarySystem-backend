// assistantLibrarianRoutes.js
const express = require('express');
const router = express.Router();
const assistantLibrarianService = require('../services/assistantLibrarianService');
const { authenticateToken } = require('../middlewares/authenticationMiddleware');

router.post('/assist-cataloging-organizing', authenticateToken, assistantLibrarianService.assistCatalogingAndOrganizing);
router.post('/help-with-book-search-checkouts', authenticateToken, assistantLibrarianService.helpWithBookSearchAndCheckouts);
router.post('/assist-borrowings-returns', authenticateToken, assistantLibrarianService.assistInProcessingBorrowingsAndReturns);
router.post('/ensure-proper-shelving-order', authenticateToken, assistantLibrarianService.ensureProperShelvingAndMaintainOrder);
router.post('/help-manage-overdue-fines-fees', authenticateToken, assistantLibrarianService.helpManageOverdueFinesAndFees);
router.post('/provide-book-information', authenticateToken, assistantLibrarianService.provideBookInformation);

module.exports = router;

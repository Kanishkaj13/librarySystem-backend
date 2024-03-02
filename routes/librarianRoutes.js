// librarianRoutes.js
const express = require('express');
const router = express.Router();
const librarianService = require('../services/librarianService');
const { authenticateToken } = require('../middlewares/authenticationMiddleware');

router.post('/add-book', authenticateToken, librarianService.addBook);
router.put('/edit-book/:bookId', authenticateToken, librarianService.editBook);
router.delete('/remove-book/:bookId', authenticateToken, librarianService.removeBook);
router.get('/review-holds-requests', authenticateToken, librarianService.reviewHoldsAndRequests);
router.post('/process-checkout', authenticateToken, librarianService.processCheckout);
router.post('/process-return', authenticateToken, librarianService.processReturn);
router.post('/manage-fines-fees', authenticateToken, librarianService.manageFinesAndFees);
router.get('/generate-reports-statistics', authenticateToken, librarianService.generateReportsAndStatistics);
router.put('/manage-user-accounts/:userId', authenticateToken, librarianService.manageUserAccounts);

module.exports = routerr;
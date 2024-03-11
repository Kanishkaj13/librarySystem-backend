
const express = require('express');
const router = express.Router();
const librarianController = require('../controllers/librarianController.js');
const { authenticateToken } = require('../middlewares/authenticationMiddleware.js');

router.post('/add-book', authenticateToken, librarianController.addBook);
router.put('/edit-book/:bookId', authenticateToken, librarianController.editBook);
router.delete('/remove-book/:bookId', authenticateToken, librarianController.removeBook);
router.get('/review-holds-requests', authenticateToken, librarianController.reviewHoldsAndRequests);
router.post('/process-checkout', authenticateToken, librarianController.processCheckout);
router.post('/process-return', authenticateToken, librarianController.processReturn);
router.post('/manage-fines-fees', authenticateToken, librarianController.manageFinesAndFees);
router.get('/generate-reports-statistics', authenticateToken, librarianController.generateReportsAndStatistics);
router.put('/manage-user-accounts/:userId', authenticateToken, librarianController.manageUserAccounts);

module.exports = router;

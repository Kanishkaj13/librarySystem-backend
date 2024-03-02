// userRoutes.js
const express = require('express');
const router = express.Router();
const userService = require('../services/userService');
const { authenticateToken } = require('../middlewares/authenticationMiddleware');

router.get('/explore-library-catalog', authenticateToken, userService.exploreLibraryCatalog);
router.post('/check-out-book', authenticateToken, userService.checkOutBook);
router.post('/place-hold-on-book', authenticateToken, userService.placeHoldOnBook);
router.get('/view-account-status/:userId', authenticateToken, userService.viewAccountStatus);
router.post('/offer-feedback', authenticateToken, userService.offerFeedback);
router.post('/update-personal-information', authenticateToken, userService.updatePersonalInformation);
router.get('/follow-library-policies-and-guidelines', authenticateToken, userService.followLibraryPoliciesAndGuidelines);
router.post('/pay-fines', authenticateToken, userService.payFines);
router.post('/give-feedback', authenticateToken, userService.giveFeedback);
router.post('/donate-book', authenticateToken, userService.donateBook);

module.exports = router;

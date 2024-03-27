// userRoutes.js
// userRoutes.js
import express from 'express';
import authenticateToken from '../middlewares/authenticationMiddleware.mjs';
import userController from '../controllers/userController.mjs';

const router = express.Router();

router.get('/explore-library-catalog', authenticateToken, userController.exploreLibraryCatalog);
router.post('/check-out-book', authenticateToken, userController.checkOutBook);
router.post('/place-hold-on-book', authenticateToken, userController.placeHoldOnBook);
router.get('/view-account-status/:userId', authenticateToken, userController.viewAccountStatus);
router.post('/offer-feedback', authenticateToken, userController.offerFeedback);
router.put('/update-personal-information', authenticateToken, userController.updatePersonalInformation);
router.get('/follow-library-policies', authenticateToken, userController.followLibraryPoliciesAndGuidelines);
router.post('/pay-fines', authenticateToken, userController.payFines);
router.post('/give-feedback', authenticateToken, userController.giveFeedback);
router.post('/donate-book', authenticateToken, userController.donateBook);

export default router;

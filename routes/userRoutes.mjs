

import { Router } from 'express';
const router = Router();
import userController from '../controllers/userController.mjs';
import { authenticateToken } from "../middlewares/authenticationMiddleware.mjs";


router.get('/explore-library-catalog', authenticateToken, userController.exploreLibraryCatalog);
router.post('/check-out-book', authenticateToken, userController.checkOutBook);
router.post('/place-hold-on-book', authenticateToken, userController.placeHoldOnBook);
router.get('/view-account-status/:userId', authenticateToken, userController.viewAccountStatus);
router.post('/offer-feedback', authenticateToken, userController.offerFeedback);
router.post('/update-personal-information', authenticateToken, userController.updatePersonalInformation);
router.get('/follow-library-policies-and-guidelines', authenticateToken, userController.followLibraryPoliciesAndGuidelines);
router.post('/pay-fines', authenticateToken, userController.payFines);
router.post('/give-feedback', authenticateToken, userController.giveFeedback);
router.post('/donate-book', authenticateToken, userController.donateBook);

export default router;

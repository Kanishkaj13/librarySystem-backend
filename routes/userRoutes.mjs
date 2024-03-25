import { Router } from 'express';
import {
    donateBook,
    giveFeedback,
    followLibraryPoliciesAndGuidelines,
    functionpayFines,
    updatePersonalInformation,
    offerFeedback,
    checkOutBook,
    placeHoldOnBook,
    viewAccountStatus,
    exploreLibraryCatalog
} from '../controllers/userController.mjs';
import { authenticateToken } from "../middlewares/authenticationMiddleware.mjs";
const router = Router();

router.get('/explore-library-catalog', authenticateToken, exploreLibraryCatalog);
router.post('/check-out-book', authenticateToken, checkOutBook);
router.post('/place-hold-on-book', authenticateToken, placeHoldOnBook);
router.get('/view-account-status/:userId', authenticateToken, viewAccountStatus);
router.post('/offer-feedback', authenticateToken, offerFeedback);
router.post('/update-personal-information', authenticateToken, updatePersonalInformation);
router.get('/follow-library-policies-and-guidelines', authenticateToken, followLibraryPoliciesAndGuidelines);
router.post('/pay-fines', authenticateToken, functionpayFines);
router.post('/give-feedback', authenticateToken, giveFeedback);
router.post('/donate-book', authenticateToken, donateBook);

export default router;
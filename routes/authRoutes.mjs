import express from 'express';
import authenticateToken from '../middlewares/authenticationMiddleware.mjs';
import adminController from '../controllers/adminController.mjs';
const router = express.Router();

router.post('/login', authenticateToken);
router.post('/register',authenticateToken,adminController. registerUser);

export default router;
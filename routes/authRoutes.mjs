import express from 'express';
import authenticateToken from '../middlewares/authenticationMiddleware.mjs';
const router = express.Router();

// Login route
router.post('/login', authenticateToken);

export default router;


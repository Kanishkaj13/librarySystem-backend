import express from 'express';
import authenticateToken from '../middlewares/authenticationMiddleware.mjs';
import {
    getAllUsers,
    registerUser,
    assignRolesAndPermissions,
} from '../controllers/adminController.mjs';
const router = express.Router();

router.post('/login', authenticateToken);
router.post('/register', registerUser);

export default router;
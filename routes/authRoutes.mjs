import express from 'express';
import {authenticateToken}from '../middlewares/authenticationMiddleware.mjs';
const router = express.Router();
import adminController from '../controllers/adminController.mjs';

router.post('/login', authenticateToken);
router.post('/register', adminController.registerUser);
router.get('/users',adminController.getAllUsers);
router.post('/assign-roles-permissions/:id', adminController.assignRolesAndPermissions);

export default router;
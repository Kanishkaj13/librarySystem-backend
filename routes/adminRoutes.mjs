// adminRoutes.js
import express from 'express';
import authenticateToken from '../middlewares/authenticationMiddleware.mjs';
import adminController from '../controllers/adminController.mjs';

const router = express.Router();

router.get('/get-all-users',authenticateToken,adminController.getAllUsers);
router.post('/assign-roles-permissions', authenticateToken, adminController.assignRolesAndPermissions);
router.post('/add-update-book', authenticateToken, adminController.addOrUpdateBook);
router.post('/track-borrowing-returns', authenticateToken, adminController.trackBorrowingAndReturns);
router.post('/manage-overdue-fines', authenticateToken, adminController.manageOverdueFines);
router.post('/generate-library-report', authenticateToken, adminController.generateLibraryReport);

export default router;

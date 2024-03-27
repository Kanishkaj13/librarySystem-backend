// adminRoutes.js
import express from 'express';
import authenticateToken from '../middlewares/authenticationMiddleware.mjs';
import adminController from '../controllers/adminController.mjs';

const router = express.Router();

router.post('/create-user', authenticateToken, adminController.createUser);
router.post('/assign-roles-permissions', authenticateToken, adminController.assignRolesAndPermissions);
router.post('/add-update-book', authenticateToken, adminController.addOrUpdateBook);
router.post('/register-member-issue', authenticateToken, adminController.registerMemberIssue);
router.post('/track-borrowing-returns', authenticateToken, adminController.trackBorrowingAndReturns);
router.post('/manage-overdue-fines', authenticateToken, adminController.manageOverdueFines);
router.post('/generate-library-report', authenticateToken, adminController.generateLibraryReport);

export default router;

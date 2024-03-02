// adminRoutes.js
import { Router } from 'express';
const router = Router();
import { createUser, assignRolesAndPermissions, addOrUpdateBook, registerMemberIssue, trackBorrowingAndReturns, manageOverdueFines, generateLibraryReport } from '../services/adminService';
import { authenticateToken } from '../middlewares/authenticationMiddleware';

router.post('/create-user', authenticateToken, createUser);
router.post('/assign-roles-permissions', authenticateToken, assignRolesAndPermissions);
router.post('/add-update-remove-book', authenticateToken, addOrUpdateBook);
router.post('/register-member-issue', authenticateToken, registerMemberIssue);
router.post('/track-borrowing-returns', authenticateToken, trackBorrowingAndReturns);
router.post('/manage-overdue-fines', authenticateToken, manageOverdueFines);
router.post('/generate-library-report', authenticateToken, generateLibraryReport);

export default router;

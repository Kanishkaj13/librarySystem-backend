// adminRoutes.js
import express from 'express';
import authenticateToken from '../middlewares/authenticationMiddleware.mjs';
import  authorizeRoles  from '../middlewares/authorizationMiddleware.mjs';
import adminController from '../controllers/adminController.mjs';

const router = express.Router();

router.get('/get-all-users',authenticateToken,authorizeRoles,adminController.getAllUsers);
router.post('/assign-roles-permissions', authenticateToken, authorizeRoles,adminController.assignRolesAndPermissions);
router.post('/add-book', authenticateToken, authorizeRoles,adminController.addBook);
router.post('/update-book',authenticateToken,authorizeRoles,adminController.updateBook);
router.post('/track-borrowing-returns', authenticateToken,authorizeRoles, adminController.trackBorrowingAndReturns);
router.post('/manage-overdue-fines', authenticateToken,authorizeRoles, adminController.manageOverdueFines);
router.post('/generate-library-report', authenticateToken,authorizeRoles, adminController.generateLibraryReport);

export default router;

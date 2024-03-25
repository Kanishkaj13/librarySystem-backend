import { Router } from 'express';
import {
    getAllUsers,
    generateLibraryReport,
    manageOverdueFines,
    trackBorrowingAndReturns,
    addOrUpdateBook,
    registerUser,
    assignRolesAndPermissions,
    createUser,
} from '../controllers/adminController.mjs';
import authenticateToken from "../middlewares/authenticationMiddleware.mjs";
const router = Router();

router.post('/create-user', authenticateToken, createUser);
router.post('/get-all-user', authenticateToken, createUser);
router.post('/assign-roles-permissions', authenticateToken, assignRolesAndPermissions);
router.post('/add-update-book', authenticateToken, addOrUpdateBook);
router.post('/register-member-issue', authenticateToken, registerUser);
router.post('/track-borrowing-returns', authenticateToken, trackBorrowingAndReturns);
router.post('/manage-overdue-fines', authenticateToken, manageOverdueFines);
router.post('/generate-library-report', authenticateToken, generateLibraryReport);

export default router;
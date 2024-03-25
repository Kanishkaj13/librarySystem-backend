import { Router } from 'express';
import {
    getAllBooks,
    getBook,
    postBook,
    updateBook,
    deleteBook,
} from '../controllers/bookController.mjs';
import { authenticateToken } from "../middlewares/authenticationMiddleware.mjs";
const router = Router();

router.get('/', authenticateToken, getAllBooks);
router.post('/', authenticateToken, postBook);
router.get('/:id', authenticateToken, getBook);
router.put('/:id', authenticateToken, updateBook);
router.delete('/:id', authenticateToken, deleteBook);

export default router;
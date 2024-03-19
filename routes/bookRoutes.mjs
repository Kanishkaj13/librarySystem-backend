import { Router } from 'express';
import   bookController from '../controllers/bookController.mjs';

import { authenticateToken } from "../middlewares/authenticationMiddleware.mjs";

const router = Router();

router.get('/',authenticateToken, bookController.getAllBooks);
router.post('/',authenticateToken, bookController.postBook);
router.get('/:id',authenticateToken, bookController.getBook);
router.put('/:id',authenticateToken, bookController.updateBook);
router.delete('/:id',authenticateToken, bookController.deleteBook);

export default router;

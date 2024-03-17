import express from'express';
const router = express.Router();
import { authenticateToken } from "../middlewares/authenticationMiddleware..mjs";


import {getAllBooks,postBook,getBook,updateBook,deleteBook} from"../controllers/bookController.mjs";

router.route("/").get(getAllBooks).post(postBook);

router.route("/:id").get(getBook).put(updateBook).delete(deleteBook);
export default router;
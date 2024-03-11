const express = require("express");
const router = express.Router();
const { authenticateToken } = require('../middlewares/authenticationMiddleware.js');


const {getAllBooks,postBook,getBook,updateBook,deleteBook} = require("../controllers/bookController");

router.route("/").get(getAllBooks).post(postBook);

router.route("/:id").get(getBook).put(updateBook).delete(deleteBook);



module.exports = router;
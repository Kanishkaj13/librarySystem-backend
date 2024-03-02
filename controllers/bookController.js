const asyncHandler = require ("express-async-Handler");
const book = require ("../models/bookModel");

const getAllBooks =asyncHandler(async (req,res) =>{

    res.status(200).json({message: "get all books"});

});


const postBook =asyncHandler(async (req,res) =>{
    console.log("The request body is:",req.body);
    const{title,author} = req.body;
    if(!title || !author) {
        res.status (400);
        throw new Error ("All feild are mandotory");
    }

    res.status(201).json({message: "post the book"});

});

const getBook =asyncHandler(async (req,res) =>{
    res.status(200).json({message: `get the  book for ${req.params.id}`});

});

const updateBook =asyncHandler(async (req,res) =>{
    res.status(200).json({message: `get the  book for ${req.params.id}`});

});

const deleteBook =asyncHandler(async(req,res) =>{
    res.status(200).json({message: `delete the book for ${req.params.id}`});
});

module.exports = {getAllBooks,postBook,getBook,updateBook,deleteBook};
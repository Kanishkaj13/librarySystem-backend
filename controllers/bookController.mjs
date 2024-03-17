import asyncHandler from "express-async-Handler";

import {getAllBooks as _getAllBooks,postBook as _postBook,getBook as _getBook,updateBook as _updateBook,deleteBook as _deleteBook} from '../services/bookService.mjs';


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

export {getAllBooks,postBook,getBook,updateBook,deleteBook};
import express, { json } from "express";
import rateLimit from 'express-rate-limit';

import connectDb from './config/db.mjs';

import dotenv from 'dotenv';
dotenv.config();

import adminRoutes from "./routes/adminRoutes.mjs";
import assistantLibrarianRoutes from "./routes/assistantLibrarianRoutes.mjs";
import librarianRoutes from "./routes/librarianRoutes.mjs";
import accountantRoutes from "./routes/accountantRoutes.mjs";
import userRoutes from "./routes/userRoutes.mjs";


import errorHandler from "./middlewares/errorHandler.mjs";



connectDb();
const app = express();


const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, 
  max: 20,
  message: 'Too many requests from this IP, please try again later',
});

app.use('/api', limiter);


const port = process.env.PORT |5002
app.use(json());


app.use('/admin',adminRoutes);
app.use('/assistantLibrarian',assistantLibrarianRoutes);
app.use('/librarian',librarianRoutes);
app.use('/accountant',accountantRoutes);
app.use('/user',userRoutes);



app.use(errorHandler);



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

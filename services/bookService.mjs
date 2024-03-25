import Book from '../models/bookModel.mjs';

async function getAllBooks() {
  try {
    const books = await Book.find();
    return books;
  } catch (error) {
    throw new Error(`Error fetching books: ${error.message}`);
  }
}

async function postBook(bookData) {
  try {
    const newBook = new Book(bookData);
    await newBook.save();
    return newBook;
  } catch (error) {
    throw new Error(`Error adding book: ${error.message}`);
  }
}

async function getBook(bookId) {
  try {
    const book = await Book.findById(bookId);
    if (!book) {
      throw new Error('Book not found');
    }
    return book;
  } catch (error) {
    throw new Error(`Error fetching book: ${error.message}`);
  }
}

async function updateBook(bookId, bookData) {
  try {
    const updatedBook = await Book.findByIdAndUpdate(bookId, bookData, { new: true });
    if (!updatedBook) {
      throw new Error('Book not found');
    }
  } catch (error) {
    throw new Error(`Error updating book: ${error.message}`);
  }
}

async function deleteBook(bookId) {
  try {
    const deletedBook = await Book.findByIdAndDelete(bookId);
    if (!deletedBook) {
      throw new Error('Book not found');
    }
    return deletedBook;
  } catch (error) {
    throw new Error(`Error deleting book: ${error.message}`);
  }
}

export {
  getAllBooks,
  getBook,
  postBook,
  updateBook,
  deleteBook
};
import bookService from '../services/bookService.mjs';

async function getAllBooks(req, res) {
  try {
    const books = await bookService.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

async function postBook(req, res) {
  try {
    const newBook = await bookService.postBook(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

async function getBook(req, res) {
  try {
    const book = await bookService.getBook(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

async function updateBook(req, res) {
  try {
    const updatedBook = await bookService.updateBook(req.params.id, req.body);
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

async function deleteBook(req, res) {
  try {
    const deletedBook = await bookService.deleteBook(req.params.id);
    res.status(200).json(deletedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  getAllBooks,
  getBook,
  postBook,
  updateBook,
  deleteBook,
};
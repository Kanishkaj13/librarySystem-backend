import bookService from '../services/bookService.mjs';
const bookController = {
  
  getAllBooks:async(req, res)=> {
  try {
    const books = await bookService.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
},

 postBook:async(req, res)=> {
  try {
    const newBook = await bookService.postBook(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
},

 getBook:async(req, res) =>{
  try {
    const book = await bookService.getBook(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
},

 updateBook:async(req, res) =>{
  try {
    const updatedBook = await bookService.updateBook(req.params.id, req.body);
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
},

deleteBook:async(req, res)=> {
  try {
    const deletedBook = await bookService.deleteBook(req.params.id);
    res.status(200).json(deletedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
};

export default bookController;
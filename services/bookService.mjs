// bookService.mjs

// Sample data for demonstration
const books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' },
  ];
  
  // Function to get all books
  export const getAllBooks = () => {
    return books;
  };
  
  // Function to get a book by id
  export const getBook = (id) => {
    return books.find(book => book.id === id);
  };
  
  // Function to add a new book
  export const postBook = (title, author) => {
    const id = books.length + 1;
    const newBook = { id, title, author };
    books.push(newBook);
    return newBook;
  };
  
  // Function to update a book by id
  export const updateBook = (id, title, author) => {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
      books[index] = { id, title, author };
      return books[index];
    } else {
      throw new Error('Book not found');
    }
  };
  
  // Function to delete a book by id
  export const deleteBook = (id) => {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
      const deletedBook = books.splice(index, 1);
      return deletedBook[0];
    } else {
      throw new Error('Book not found');
    }
  };
  
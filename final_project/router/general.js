const axios = require('axios');

// Get all books
exports.getAllBooks = async () => {
  try {
    const response = await axios.get('http://localhost:5000/');
    return response.data;
  } catch (error) {
    return { error: "Unable to fetch books" };
  }
};

// Get book by ISBN
exports.getBookByISBN = async (isbn) => {
  try {
    const response = await axios.get(`http://localhost:5000/isbn/${isbn}`);
    return response.data;
  } catch (error) {
    return { error: "Book not found with given ISBN" };
  }
};

// Get books by author
exports.getBooksByAuthor = async (author) => {
  try {
    const response = await axios.get(`http://localhost:5000/author/${author}`);
    return response.data;
  } catch (error) {
    return { error: "No books found for this author" };
  }
};

// Get books by title
exports.getBooksByTitle = async (title) => {
  try {
    const response = await axios.get(`http://localhost:5000/title/${title}`);
    return response.data;
  } catch (error) {
    return { error: "No books found with this title" };
  }
};

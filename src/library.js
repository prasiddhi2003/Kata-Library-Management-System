class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push({ ...book, available: true });
    }
  
    viewAvailableBooks() {
      return this.books.filter((book) => book.available);
    }
  }
  
  module.exports = Library;
  
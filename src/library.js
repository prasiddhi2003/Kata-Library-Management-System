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

    borrowBook(isbn) {
        const book = this.books.find((b) => b.isbn === isbn && b.available);
        if (!book) {
          throw new Error('Book is not available');
        }
        book.available = false;
      }
      
      returnBook(isbn) {
        const book = this.books.find((b) => b.isbn === isbn && !b.available);
        if (!book) {
          throw new Error('Book was not borrowed');
        }
        book.available = true;
      }
      
  }
  
  module.exports = Library;
  
const Library = require('../src/library');

describe('Library Management System', () => {
  let library;

  beforeEach(() => {
    library = new Library();
  }); 
  
  test('should add a new book to the library', () => {
    const book = { isbn: '1234', title: 'Clean Code', author: 'Robert C. Martin', year: 2008 };
    library.addBook(book);
    const expectedBook = { ...book, available: true };
    expect(library.viewAvailableBooks()).toContainEqual(expectedBook);
  });

  test('should borrow a book if available', () => {
    const book = { isbn: '1234', title: 'Clean Code', author: 'Robert C. Martin', year: 2008 };
    library.addBook(book);
    library.borrowBook('1234');
    expect(library.viewAvailableBooks()).not.toContainEqual(book);
  });
  
  test('should raise an error if the book is not available', () => {
    const book = { isbn: '1234', title: 'Clean Code', author: 'Robert C. Martin', year: 2008 };
    library.addBook(book);
    library.borrowBook('1234');
    expect(() => library.borrowBook('1234')).toThrow('Book is not available');
  });
  
});
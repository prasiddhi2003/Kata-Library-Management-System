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
});
// Store Library
let myLibrary = [];

// Book Constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// Book Info Prototype
Book.prototype.info = function () {
    let readStatus = this.read ? 'read.' : 'not read yet.';
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
}

// Add Book Function
function addBookToLibrary(myLibrary, book) {
    myLibrary.push(book);
}


// Instantiate Objects
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const aGameOfThrones = new Book('A Game Of Thrones', 'George R. R. Martin', 835, false);
const nineteenEightyFour = new Book('1987', 'George Orwell', 328, true);
const deepWork = new Book('Deep Work', 'Cal Newport', 296, true);
const thePowerOfNow = new Book('The Power of Now', 'Eckhart Tolle', 236, true);
const sapiens = new Book('Sapiens: A Brief History of Humankind', 'Yuval Noah Harari', 443, false);
const theAlchemist = new Book('The Alchemist', 'Paulo Coelho', 208, true);
const thinkingFastAndSlow = new Book('Thinking, Fast and Slow', 'Daniel Kahneman', 499, false);


// Add Books
addBookToLibrary(myLibrary, theHobbit);
addBookToLibrary(myLibrary, aGameOfThrones);
addBookToLibrary(myLibrary, nineteenEightyFour);
addBookToLibrary(myLibrary, deepWork);
addBookToLibrary(myLibrary, thePowerOfNow);
addBookToLibrary(myLibrary, sapiens);
addBookToLibrary(myLibrary, theAlchemist);
addBookToLibrary(myLibrary, thinkingFastAndSlow);

// Create DOM Elements
const container = document.createElement('div');
container.classList.add('container');
container.setAttribute('id', 'myContainer');
document.body.appendChild(container);

// Show Books
function showBooks() {
    // Loop Through Books
    for (let i = 0; i < myLibrary.length; i++) {
        const book = new Book(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages, myLibrary[i].read);

        const bookList = document.createElement('div');
        bookList.classList.add('book');

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('title');
        titleDiv.textContent = 'Title: ' + book.title;

        const authorDiv = document.createElement('div');
        authorDiv.classList.add('author');
        authorDiv.textContent = 'Author: ' + book.author;

        const pagesDiv = document.createElement('div');
        pagesDiv.classList.add('pages');
        pagesDiv.textContent = 'Pages: ' + book.pages;

        const readDiv = document.createElement('div');
        readDiv.classList.add('read');
        readDiv.textContent = 'Read: ' + (book.read ? 'Yes' : 'No');

        bookList.appendChild(titleDiv);
        bookList.appendChild(authorDiv);
        bookList.appendChild(pagesDiv);
        bookList.appendChild(readDiv);
        container.appendChild(bookList);
    }
}

showBooks();
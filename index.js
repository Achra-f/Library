// Book Class
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() {
        let readStatus = this.read ? 'read.' : 'not read yet.';
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(book) {
        const index = this.books.indexOf(book);
        if (index > -1) {
            this.books.splice(index, 1)
        }
    }

    toggleReadStatus(book) {
        book.read = !book.read;
    }

    showBooks() {
        const container = document.createElement('div');
        container.classList.add('container');
        container.setAttribute('id', 'myContainer');

        // Loop through books
        for (let i = this.books.length - 1; i >= 0; i--) {
            const book = this.books[i];
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

            const readLabel = document.createElement('label');
            readLabel.textContent = 'Read: ';

            const readCheckbox = document.createElement('input');
            readCheckbox.type = 'checkbox';
            readCheckbox.checked = book.read;

            readCheckbox.addEventListener('change', () => {
                this.toggleReadStatus(book);
            });

            readDiv.appendChild(readLabel);
            readDiv.appendChild(readCheckbox);

            const button = document.createElement('button');
            button.classList.add('delete');
            button.textContent = 'Remove';
            button.addEventListener('click', () => {
                this.removeBook(book);
                this.showBooks();
            });

            bookList.appendChild(titleDiv);
            bookList.appendChild(authorDiv);
            bookList.appendChild(pagesDiv);
            bookList.appendChild(readDiv);
            bookList.appendChild(button);
            container.appendChild(bookList);
        }

        const existingContainer = document.getElementById('myContainer');
        if (existingContainer) {
            existingContainer.replaceWith(container);
        } else {
            document.body.appendChild(container);
        }
    }
}

// Instantiate Objects
const myLibrary = new Library();

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const aGameOfThrones = new Book('A Game Of Thrones', 'George R. R. Martin', 835, false);
const nineteenEightyFour = new Book('1987', 'George Orwell', 328, true);
const deepWork = new Book('Deep Work', 'Cal Newport', 296, true);
const thePowerOfNow = new Book('The Power of Now', 'Eckhart Tolle', 236, true);
const sapiens = new Book('Sapiens: A Brief History of Humankind', 'Yuval Noah Harari', 443, false);
const theAlchemist = new Book('The Alchemist', 'Paulo Coelho', 208, true);
const thinkingFastAndSlow = new Book('Thinking, Fast and Slow', 'Daniel Kahneman', 499, false);

myLibrary.addBook(theHobbit);
myLibrary.addBook(aGameOfThrones);
myLibrary.addBook(nineteenEightyFour);
myLibrary.addBook(deepWork);
myLibrary.addBook(thePowerOfNow);
myLibrary.addBook(sapiens);
myLibrary.addBook(theAlchemist);
myLibrary.addBook(thinkingFastAndSlow);

myLibrary.showBooks();

const showModalButton = document.getElementById('showModalButton');
const modal = document.getElementById('modalForm');
const close = document.querySelector('.close');

showModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
});

const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value === 'read';

    const newBook = new Book(title, author, pages, read);

    myLibrary.addBook(newBook);

    myForm.reset();

    myLibrary.showBooks();
    modal.style.display = 'none';
});
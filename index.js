function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function () {
        if (read === 'read') {
            read = 'read.'
        } else {
            read = 'not read yet.'
        }
        return (title + ' by ' + author + ', ' + pages + ' pages, ' + read);
    }
}

const theHobbit = new Book('The Hobbit','J.R.R. Tolkien',295, 'not');

console.log(theHobbit.info());

console.log(Object.getPrototypeOf(theHobbit));


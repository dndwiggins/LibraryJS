const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        if (this.read == true) {
            return this.title + "by" + this.author + "," + this.pages + "pages, has been read"
        }
        return this.title + "by" + this.author + "," + this.pages + "pages, not read yet"
    };

}

const book1 = new Book("To Kill a Mocking Bird", "IDK", 200, true);

console.log(book1.info);

function addBookToLibrary() {
    // do stuff here
}
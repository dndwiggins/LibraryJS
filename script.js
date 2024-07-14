const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        if (this.read == true) {
            return this.title + " by " + this.author + ", " + this.pages + " pages, has been read"
        }
        return this.title + " by " + this.author + ", " + this.pages + " pages, not read yet"
    };



}

var counter = -1;

const book1 = new Book("To Kill a Mocking Bird", "IDK", 200, false);

const main = document.querySelector("#main");

const book2 = new Book("The Dumb Book", "Me", 90, true);


function addBookToLibrary(book) {
    myLibrary.push(book);

    counter++;

    var container = document.createElement("div");

    container.className = "container";

    main.appendChild(container);

    var contentHolder = document.createElement("ul");

    container.appendChild(contentHolder);

    var title = document.createElement("li");
    var author = document.createElement("li");
    var pages = document.createElement("li");
    var readHT = document.createElement("li");

    title.innerHTML = book.title;

    author.innerHTML = book.author;

    pages.innerHTML = book.pages

    readHT.innerHTML = "read: " + book.read


    contentHolder.appendChild(title);

    contentHolder.appendChild(author);

    contentHolder.appendChild(pages);

    contentHolder.appendChild(readHT);


    var readBt = document.createElement("button");

    readBt.innerHTML = "Read"

    readBt.addEventListener('click', function () {
        if (book.read == true) {
            book.read = false
            readHT.innerHTML = "read: " + book.read;

        } else {
            book.read = true
            readHT.innerHTML = "read: " + book.read;
        }


    });

    container.appendChild(readBt);

    //append children after you add event listener

    var deleteBt = document.createElement("button");

    deleteBt.innerHTML = "Delete"

    deleteBt.addEventListener('click', function () {
        main.removeChild(container)
        myLibrary.splice(counter, counter);
        counter--;

    });

    container.appendChild(deleteBt)


}

addBookToLibrary(book1);
addBookToLibrary(book2);


const addBT = document.querySelector("#add");


addBT.addEventListener('click', function () {

    var titleValue = document.getElementById("title").value;
    var authorValue = document.getElementById("author").value;
    var pageValue = document.getElementById("pages").value;

    if (titleValue == "" || authorValue == "" || pageValue == "") {
        alert("Add real inputs bruh")
        return
    }

    const book = new Book(titleValue, authorValue, pageValue, false);

    addBookToLibrary(book);


});





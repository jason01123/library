const library = [];

function Book(title, author, genre, pages, isRead) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this. isRead = isRead;
}


function addBook(title, author, genre, pages, isRead) {
    const newBook = new Book(title, author, genre, pages, isRead);
    library.push(newBook);
}

function addCard(newBook) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    bookHTML = "<div class='title'>" + newBook.title + "</div>";
    bookHTML += "<div>by " + newBook.author + "</div>";
    bookHTML += "<div>Pages " + newBook.pages + "</div>";
    bookHTML += "<div>Read " + newBook.isRead + "</div><br>";
    cardDiv.innerHTML = bookHTML;
    const cardsDiv = document.querySelector(".cards"); 
    cardsDiv.appendChild(cardDiv);
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    cardDiv.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
        cardDiv.remove();
     });
    const isReadButton = document.createElement("button");
    if(newBook.isRead)
        isReadButton.innerHTML = "Mark Unread";
    else
        isReadButton.innerHTML = "Mark Read";
    cardDiv.appendChild(isReadButton);
    isReadButton.addEventListener("click", () => {
        console.log("toggle read");
        if(newBook.isRead) {
            newBook.isRead = false;
            isReadButton.innerHTML = "Mark Read";
            bookHTML = "<div class='title'>" + newBook.title + "</div>";
            bookHTML += "<div>by " + newBook.author + "</div>";
            bookHTML += "<div>Pages " + newBook.pages + "</div>";
            bookHTML += "<div>Read " + newBook.isRead + "</div><br>";
            cardDiv.innerHTML = bookHTML;
            cardDiv.appendChild(deleteButton);
            cardDiv.appendChild(isReadButton);
        }
        else {
            newBook.isRead = true;
            isReadButton.innerHTML = "Mark Unread";
            bookHTML = "<div class='title'>" + newBook.title + "</div>";
            bookHTML += "<div>by " + newBook.author + "</div>";
            bookHTML += "<div>Pages " + newBook.pages + "</div>";
            bookHTML += "<div>Read " + newBook.isRead + "</div><br>";
            cardDiv.innerHTML = bookHTML;
            cardDiv.appendChild(deleteButton);
            cardDiv.appendChild(isReadButton);
        }
     });
}

addBook("War and Peace", "Leo Tolstoy", "Novel", 1225, false);
addBook("Pride and Prejudice", "Jane Austen", "Novel", 709, true);
addBook("Great Expectations", "Charles Dickens", "Novel", 204, true);
addBook("Frankenstein", "Mary Shelley", "Novel", 741, false);


for (let i = 0; i < library.length; i++) {
    addCard(library[i], i);
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".show-button");
const closeButton = document.querySelector(".close-button");
const addButton = document.querySelector(".add-button");
const bookForm = document.querySelector("form");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

addButton.addEventListener("click", () => {
    addBook(document.querySelector("#title").value, document.querySelector("#author").value, "Novel", document.querySelector("#pages").value, document.querySelector("#read").checked);    
    addCard(library[library.length-1]);
    bookForm.reset();
});


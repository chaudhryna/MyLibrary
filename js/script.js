const title = document.querySelector("#title");
const author = document.querySelector("#author");
const numPages = document.querySelector("#num-pages");
const read = document.querySelector("#read");
const btn = document.querySelector(".btn");
const main = document.querySelector("main");

const myLibrary = [];

// Book object
class Book {
  constructor(title, author, numPages, read) {
	this.title = title;
	this.author = author;
	this.numPages = numPages;
	this.read = read;
  }
  toggleRead() {
		this.read = !this.read;
  }
};

function addBookToLibrary(e) {
	e.preventDefault();
	let newBook = new Book(title.value, author.value, numPages.value, read.checked);
	myLibrary.push(newBook);
	loadLibrary(myLibrary);
	newBook = {};
	title.value = '';
	author.value = '';
	numPages.value = '';
	read.checked = '';
};

function loadLibrary(myLibrary) {
	main.replaceChildren();
	myLibrary.forEach((book, index) => {
		const cardDiv = document.createElement("div");
		cardDiv.classList.add("book");
		cardDiv.classList.add("card");
		const title = document.createElement("h3");
		title.classList.add("title");
		title.textContent = `Title: ${book.title}`
		cardDiv.appendChild(title);
		const author = document.createElement("h3");
		author.classList.add("author");
		author.textContent = `Author: ${book.author}`;
		cardDiv.appendChild(author);
		const pages = document.createElement('h3');
		pages.classList.add('pages');
		pages.textContent = `Pages: ${book.numPages}`;
		cardDiv.appendChild(pages);
		const btnDiv = document.createElement("div");
		btnDiv.classList.add("div-grid");
		cardDiv.appendChild(btnDiv);
		const can = document.createElement("img");
		can.classList.add("trash-can");
		can.src = './images/trash-can.svg';
		can.setAttribute("data-book", `${index}`)
		can.addEventListener('click', deleteBook);
		btnDiv.appendChild(can);
		const toggleLabel = document.createElement("label");
		toggleLabel.textContent = "Read it?";
		btnDiv.appendChild(toggleLabel);
		const toggleRead = document.createElement("input");
		toggleRead.classList.add('toggleRead');
		toggleRead.setAttribute('data-book', `${index}`);
		toggleRead.setAttribute('type', 'checkbox');
		if (book.read) {
			toggleRead.checked = true;
		}
		toggleRead.addEventListener('click', checkRead);
		btnDiv.appendChild(toggleRead);
		main.appendChild(cardDiv);
	});
};

function deleteBook(e) {
	const index = e.target.getAttribute('data-book');
	console.log(index);
	myLibrary.splice(index, 1);
	loadLibrary(myLibrary);
};

function checkRead(e) {
	const index = e.target.getAttribute('data-book');
	myLibrary[index].toggleRead();
};

btn.addEventListener('click', addBookToLibrary);


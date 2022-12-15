const title = document.querySelector("#title");
const author = document.querySelector("#author");
const numPages = document.querySelector("#num-pages");
const read = document.querySelector("#read");
const btn = document.querySelector(".btn");
const main = document.querySelector("main");

const myLibrary = [
	{
		title: 'The Hobbit',
		author: 'J.R.R. Tolkien',
		numPages: 295,
		read: false,
	},
	{
		title: 'Death on the Nile',
		author: 'Agatha Christie',
		numPages: 352,
		read: true,
	},
	{
		title: 'Grokking Algorithms',
		author: 'Aditya Bhargava',
		numPages: 256,
		read: false,
	},
	{
		title: 'Winnie the Pooh',
		author: 'A.A. Milne',
		numPages: 176,
		read: true, 
	},
];

function loadLibrary(myLibrary) {
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
		const read = document.createElement('h3');
		read.classList.add('read');
		read.textContent = `Read: ${book.read}`;
		cardDiv.appendChild(read);
		const can = document.createElement("img");
		can.classList.add("trash-can");
		can.src = './images/trash-can.svg';
		can.setAttribute("data-book", `${index}`)
		can.addEventListener('click', deleteBook);
		cardDiv.appendChild(can);
		main.appendChild(cardDiv);
	});
};

function deleteBook(e) {
	const index = e.target.getAttribute('data-book');
	myLibrary.splice(index, 1);
	loadLibrary();
};

function Book(title, author, numPages, read) {
	this.title = title;
	this.author = author;
	this.numPages = numPages;
	this.read = read;
	this.info = function () {
		return `${title} by ${author}, ${numPages} pages ${
			read ? 'read' : 'not read yet'
		}`;
	};
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

btn.addEventListener('click', addBookToLibrary);

loadLibrary(myLibrary);

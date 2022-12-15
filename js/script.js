const title = document.querySelector("#title");
const author = document.querySelector("#author");
const numPages = document.querySelector("#num-pages");
const read = document.querySelector("#read");
const btn = document.querySelector(".btn");
const main = document.querySelector("main");
let trashCans = document.querySelectorAll('.trash-can');

let myLibrary = [
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
		read: false
	},
	{
		title: 'Winnie the Pooh',
		author: 'A.A. Milne',
		numPages: 176,
		read: true 
	}
];

function loadLibrary(myLibrary) {
	myLibrary.forEach(function (book, index) {
		main.innerHTML += `<div class="book card">
            <h3 class="title"><em>Title:</em> ${book.title}</h3>
            <h3 class="author"><em>Author:</em> ${book.author}</h3>
            <h3 class="pages"><em>Pages:</em> ${book.numPages}</h3>
            <h3 class="read"><em>Read:</em> ${book.read}</h3>
			<img data-book="${index}" class="trash-can" src="./images/trash-can.svg">
        </div>`
	});
	trashCans = document.querySelectorAll('.trash-can');
}

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
}

// function deleteBook()

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
}

btn.addEventListener('click', addBookToLibrary);


trashCans.forEach((trashCan) => {
	console.log(trashCan);
	trashCan.addEventListener('click', () => {
		console.log(`Trash can clicked!`);
	});
});

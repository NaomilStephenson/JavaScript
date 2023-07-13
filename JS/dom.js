'use strict'

/*
DOM Manupulation - Document Object Model

Takes the HTML pages and converst ito into a Javascript Object
which allows us to manipulate it.
*/

// Declare variables from the DOM

const pageInput = document.getElementById('textInput');
const pageButton = document.getElementById('btn');
const pageParagraph = document.getElementById('textOutput');

let display = str => pageParagraph.innerText = `${str}`;

pageButton.onclick = () => display(pageInput.value);

const pageList = document.getElementById('myList');

let addToList = str => {
    let el = documemt.createElement('li');
    el.innerText = str;
    pageList.appendChild(el);
};
'use strict'

/*
DOM Manupulation - Document Object Model

Takes the HTML pages and converst ito into a Javascript Object
which allows us to manipulate it.
*/

// Declare variables from the DOM

const pageInput = document.getElementById("textInput");
const pageButton = document.getElementById("btn");
const pageParagraph = document.getElementById("textOutput");
const pageList = document.getElementById('myList');

let addToList = value => {
    let listItem = document.createElement('li');
    listItem.innerText = value;
    pageList.appendChild(listItem);
};

pageButton.onclick =()=> {
    pageParagraph.innerText= `Added "${pageInput.value}" to the list`;
    addToList(pageInput.value);
    console.log(`Added ${pageInput.value} to the list`);
};
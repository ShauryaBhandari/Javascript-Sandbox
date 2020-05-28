// how to move through the DOM
let val;

const list = document.querySelector("ul.collection");

const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

// Get child nodes, that is we get all the elements within the current selected tag along with text nodes that are line breaks present in the html

val = list.childNodes; //this returns node list
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// this tells us what type of node it is depending on the number
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes
val = list.children; //this returns html collection and not node list
val = list.children[1];
list.children[1].textContent = "Hello";

// Children of children
list.children[3].children[0].id = "test-link";
val = list.children[3].children[0];

// First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);

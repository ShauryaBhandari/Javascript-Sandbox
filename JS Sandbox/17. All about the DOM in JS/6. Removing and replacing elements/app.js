// REPLACE ELEMENT

// Create Element first
const newHeading = document.createElement("h2");

// Add id
newHeading.id = "task-title";

// New text node
newHeading.appendChild(document.createTextNode("Task List"));

// Get the old heading
const oldHeading = document.getElementById("task-title");

//Parent of heading to be replaced as it is within a card
const cardAction = document.querySelector(".card-action");

// Replace both the elements
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll("li"); //select all li items
const list = document.querySelector("ul");

// Remove list item
lis[0].remove(); //removes the first list item

// Remove child element
list.removeChild(lis[3]); //as li is child of ul, we remove the 4th child of the ul which is the 4th li item

// CLASSES & ATTR
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let val;

// Classes
val = link.className; //string of class names
val = link.classList; //dom token list - like an array
val = link.classList[0];
link.classList.add("test");
link.classList.remove("test");
val = link;

// Attribute functions
val = link.getAttribute("href");
val = link.setAttribute("href", "http://google.com");
link.setAttribute("title", "Google");
val = link.hasAttribute("title");
link.removeAttribute("title");
val = link;

console.log(val);

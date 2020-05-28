// PRIMITIVE - stored directly in the location, stored on a stack

// String
const name = "John Doe";
// Number
const age = 45;
// put numbers in"" and we'll get the type as string then
// Boolean
const hasKids = true;
// Null
const car = null;
// type of this comes as object, this is a kind of bug ever since the start of JS, ignore it
// Undefined
let test;
// Symbol (ES6)
const sym = Symbol();

// REFERENCE TYPES - Objects, accessed by reference, stored on a heap, pointer to location in memory
// Array
const hobbies = ["movies", "music"];
// Object literal
const address = {
  city: "Boston",
  state: "MA",
};
const today = new Date();
console.log(today);
console.log(typeof today);

// JS is dynamically typed language
//Same variable can have various types
// We need not specify types
//C++, Java etc. almost all are statically typed

const firstName = "Shaurya";
const lastName = "Bhandari";
const age = 36;
const str = "Hello there my name is Shaurya";
const tags = "web design,web development,programming";

let val;

// Concatenation
val = firstName + lastName;

// Concatenation with space
val = firstName + " " + lastName;

// Append
val = "Shaurya";
val += "Bhandari"; //value is added to original value, not overwritten

val = "Hello, my name is " + firstName + " and I am " + age;

// Escaping
val = "That's awesome, I can't wait"; // add \ to escape a single quote

// Length
val = firstName.length;

// concat()
val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf("l");
val = firstName.lastIndexOf("l");

// charAt()
val = firstName.charAt("2");
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split() string at spaces comma etc. to get string as array
val = str.split(" ");
val = tags.split(",");

// replace()
val = str.replace("Shau", "Jack");

// includes()
val = str.includes("foo");

console.log(val);

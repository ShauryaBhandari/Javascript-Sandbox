// FUNCTION DECLARATIONS

//function with default arguments
function greet(firstName = "Shaurya", lastName = "Bhandari") {
  // if(typeof firstName === 'undefined'){firstName = 'John'} // old method
  // if(typeof lastName === 'undefined'){lastName = 'Doe'}
  //console.log('Hello');
  return "Hello " + firstName + " " + lastName;
}

// console.log(greet());

// FUNCTION EXPRESSIONS

const square = function (x = 3) {
  return x * x;
};

// console.log(square());

// IMMEDIATELY INVOCABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//   console.log('IIFE Ran..');
// })(); //end parenthesis must be added

// (function(name){
//   console.log('Hello '+ name);
// })('Brad');

// PROPERTY METHODS

const todo = {
  add: function () {
    console.log("Add todo..");
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log("Delete todo...");
};

todo.add();
todo.edit(22);
todo.delete();

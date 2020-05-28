// Global Scope: access it anywhere
var a = 1;
let b = 2;
const c = 3;

// function test() { //here abc become local variables hence the value can be changed but global values remain same
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope: ', a, b, c);
// }

// test();

// block scope changes the var global value whereas let and const remains the same, this is a con as it may cause confusion

// if(true) {
//   // Block Scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('If Scope: ', a, b, c);
// }

// for(var a = 0; a < 10; a++) {
//   console.log(`Loop: ${a}`);
// }

console.log("Global Scope: ", a, b, c);

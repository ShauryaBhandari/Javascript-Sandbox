const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2; // remainder

// Math Object
val = Math.PI; // 3.14... value
val = Math.E; // eulers number 2.71....
val = Math.round(2.4); // round number
val = Math.ceil(2.4); // round upper
val = Math.floor(2.8); // round lower
val = Math.sqrt(64); // square root
val = Math.abs(-3); // absolute value
val = Math.pow(8, 2); // exponent
val = Math.min(2, 33, 4, 1, 55, 6, 3, -2); // find min value
val = Math.max(2, 33, 4, 1, 55, 6, 3, -2); // find max value
val = Math.random(); // random number between 0 and 1

val = Math.floor(Math.random() * 20 + 1); // get random number between specific value, remove floor to get decimal value

console.log(val);

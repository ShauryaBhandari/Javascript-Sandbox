// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
// second way
const numbers2 = new Array(22, 45, 33, 76, 54);
// strings array
const fruit = ["Apple", "Banana", "Orange", "Pear"];
// mixed array of data types
const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

// Get array length
val = numbers.length;

// Check if is array, useful in DOM
val = Array.isArray(numbers);

// Get single value, 0 based index
val = numbers[3];
val = numbers[0];

// Insert into array
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS

// // Add on to end
// numbers.push(250);

// // Add on to front
// numbers.unshift(120);

// // Take off from end
// numbers.pop();

// // Take off from front
// numbers.shift();

// // Splice values, remove values between given indices
// numbers.splice(1,3);

// // Reverse
// numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort(); //alphabetical order
// val = numbers.sort(); // sorting by units digit

// // Use the "compare function" // for ascending order
// val = numbers.sort(function(x, y){
//   return x - y;
// });

// // Reverse sort // for descending order
// val = numbers.sort(function(x, y){
//   return y - x;
// });

// Find first number under 50 - under50 (<)
function over50(num) {
  return num > 50;
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);

// // Selectors give us an HTML collection of elements, it is NOT an array, but is very similar to an array and can be converted easily to a proper array so that all array functions can be carried out on the html collection

// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item'); // to get specific scope elements

// console.log(listItems);

// document.getElementsByTagName, here we are selecting it by the element name rather than the class, rest all the working remains the same

// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// // Convert HTML Collection into array (imp)
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

// document.querySelectorAll: same as the above but returns a node list and there is no need to convert it into an array then

const items = document.querySelectorAll("ul.collection li.collection-item");

items.forEach(function (item, index) {
  item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

//change colour using foreach loop
liOdd.forEach(function (li, index) {
  li.style.background = "#ccc";
});

// use simple for loop to change colour
for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "#f4f4f4";
}

console.log(items);

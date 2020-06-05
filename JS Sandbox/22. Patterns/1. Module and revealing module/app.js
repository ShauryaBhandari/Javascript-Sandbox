// Patterns are re usable solutions or code that can be applied to occurring problems in JS code
// are kind of templates
// Basic structure

// (function() {
//   // Declare private vars and functions

//   return {
//     // Declare public var and functions
//   }
// })();

// STANDARD MODULE PATTERN
// const UICtrl = (function() {
//   let text = 'Hello World';

//   const changeText = function() {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {
//     callChangeText: function() {
//       changeText();
//       // console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText();
// // UICtrl.changeText(); // this will lead to an error as we cannot access the private function

// console.log(UICtrl.text);

// REVEALING MODULE PATTERN: same as above but rather than returning stuff, it maps the private stuff that we wish to reveal
const ItemCtrl = (function () {
  let data = [];

  function add(item) {
    data.push(item);
    console.log("Item Added....");
  }

  function get(id) {
    return data.find((item) => {
      return item.id === id;
    });
  }

  return {
    // this is used to reveal the things we wanna return
    add: add,
    // get: get
  };
})();

ItemCtrl.add({ id: 1, name: "John" });
ItemCtrl.add({ id: 2, name: "Mark" });
console.log(ItemCtrl.get(2));

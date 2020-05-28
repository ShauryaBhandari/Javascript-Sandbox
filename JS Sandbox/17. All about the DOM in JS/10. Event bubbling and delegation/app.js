// EVENT BUBBLING is the bubbling up of events through its parents ie, event on child element moves up to all parent elements and all parents are called one by one without actually clicking them. It is like a chain reaction

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });

//this is parent of card title
// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

//parent of card content
// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

//parent of card
// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });

// EVENT DELEGATION is opposite of event bubbling, it moves from parents to children in a chain reaction

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener("click", deleteItem);

function deleteItem(e) {
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete item');
  // }

  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete item");
    e.target.parentElement.parentElement.remove();
  }
}

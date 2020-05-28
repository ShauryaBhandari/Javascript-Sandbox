// events are needed to interact with the UI/ the actual web page

//add event listener takes the task we want to listen to and also a function which can be anonymous or a proper defined function

// document.querySelector('.clear-tasks').addEventListener('click', function(e){

//   console.log('Hello World');

//   //e.preventDefault(); //stop default behaviour
// });

// better to use proper named function than unnamed function as seen above
document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
  //console.log('Clicked');

  let val;

  val = e; // e is the event object

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  // Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}

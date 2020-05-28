const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

// Click
// clearBtn.addEventListener('click', runEvent);
// Double click
// clearBtn.addEventListener('dblclick', runEvent);

// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);

// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);

// Mouseenter : fire up on parent main element
// card.addEventListener('mouseenter', runEvent);

// Mouseleave: fire up on parent main element
// card.addEventListener('mouseleave', runEvent);

// Mouseover : works on child element of a bigger element
// card.addEventListener('mouseover', runEvent);

// Mouseout : works on child element of a bigger element
// card.addEventListener('mouseout', runEvent);

// Mousemove
card.addEventListener("mousemove", runEvent); // any mouse movement within the element, good for games or interactive stuff

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`; // track mouse on screen

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}

// first element's button has onclick applied on html
const second = document.getElementsByClassName("card")[1];
const third = document.getElementsByClassName("card")[2];
const cards = document.getElementById("cards");
const wrapper = document.getElementsByClassName("wrapper")[0];

// Display message on click that you can delete on click
second.addEventListener("click", function (event) {
  event.stopPropagation();
  // generate message
  message = document.createElement("h3");
  // get all h3 elements
  let h3s = document.getElementsByTagName("h3");
  // set message
  message.textContent = `You clicked card 2 - ${h3s.length + 1} times!`;
  // append message to wrapper
  wrapper.append(message);
  // add event to remove every h3 message on click
  [...h3s].forEach((h3) => {
    h3.addEventListener("click", function (event) {
      event.stopPropagation();
      h3.remove();
    });
  });
});

// Rotate third tile on click
third.addEventListener("click", function (event) {
  event.stopPropagation();
  // add rotate class to third tile
  third.classList.add("rotate");
  // remove rotate class after 1s (time of animation)
  setTimeout(() => {
    third.classList.remove("rotate");
  }, 1000);
});

// resizing
const initialWidth = window.innerWidth;
window.addEventListener("resize", function () {
  // check console for innerWidth value
  console.log(window.innerWidth);
});

// Do something after whole DOM structure is loaded
addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
});

// Obtain where cards bottom is
const tilesBottom =
  cards.getBoundingClientRect().top + cards.getBoundingClientRect().height;
// Add event listener to check if you passed the cards with scroll
window.addEventListener("scroll", function () {
  // get message
  const h1 = document.getElementsByClassName("passed")[0];
  // check if scroll passed and if there is no message
  if (this.scrollY > tilesBottom && !h1) {
    // Create h1 message with class passed and append it after cards
    const passedMsg = document.createElement("h1");
    passedMsg.classList.add("passed");
    passedMsg.textContent = "You passed the cards!";
    passedMsg.style.color = "red";
    cards.insertAdjacentElement("afterend", passedMsg);
  }
});

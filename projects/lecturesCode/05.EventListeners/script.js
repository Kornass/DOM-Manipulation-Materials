// get second card
const second = document.getElementsByClassName("card")[1];
const third = document.getElementsByClassName("card")[2];
const wrapper = document.getElementById("wrapper");
const body = document.getElementsByTagName("body")[0];
let message;
// display message on click that you can delete
second.addEventListener("click", function () {
  message = document.createElement("h3");
  message.textContent = "You clicked card 2!";
  message.addEventListener("click", function () {
    message.remove();
  });
  body.append(message);
});

// resizing
window.addEventListener("resize", function () {
  let message = document.createElement("h3");
  message.textContent = "Resizing";
  body.append(message);
});

//* do something after whole DOM structure is loaded
// addEventListener("DOMContentLoaded", (event) => {});

//scrolling
window.addEventListener("scroll", function () {
  console.log("scrolling happenign");
  console.log("scroll position: ", this.scrollY);
});

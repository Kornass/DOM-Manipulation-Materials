// first element's button has onclick applied on html
const second = document.getElementsByClassName("card")[1];
const third = document.getElementsByClassName("card")[2];
const wrapper = document.getElementsByClassName("wrapper")[0];
let message;

// display message on click that you can delete
second.addEventListener("click", function () {
  message = document.createElement("h3");
  message.textContent = "You clicked card 2!";
  message.addEventListener("click", function () {
    message.remove();
  });
  wrapper.append(message);
});

const initialWidth = window.innerWidth;
// resizing
window.addEventListener("resize", function () {
  console.log(window.innerWidth);
  // let message = document.createElement("h3");
  // message.textContent = "Resizing";
  // wrapper.append(message);
});

//* do something after whole DOM structure is loaded
// addEventListener("DOMContentLoaded", (event) => {});

//scrolling
window.addEventListener("scroll", function () {
  console.log("scrolling happenign");
  console.log("scroll position: ", this.scrollY);
});

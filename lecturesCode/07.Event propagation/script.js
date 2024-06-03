const wrapper = document.getElementsByClassName("wrapper")[0];
const first = document.getElementsByClassName("first")[0];
const firstInner = first.firstElementChild;
const firstButton = firstInner.firstElementChild;

wrapper.addEventListener("click", (e) => {
  alert("Wrapper");
});
// Click first container button to see how the event propagates during bubbling phase
first.addEventListener("click", (e) => {
  alert("First container");
});
firstInner.addEventListener("click", (e) => {
  alert("First inner container");
});
firstButton.addEventListener("click", (e) => {
  alert("First button");
});

const second = document.getElementsByClassName("second")[0];
const secondInner = second.firstElementChild;
const secondButton = secondInner.firstElementChild;

// See how second container is capturing event during capturing phase
// Check the console to see that event.target is refering to clicked button even in second's addEventlistener (after bubbling phase, during capturing phase event.target is going to be empty)

second.addEventListener(
  "click",
  (e) => {
    alert("Second container");
    console.log(e.target);
  },
  true
);
secondInner.addEventListener("click", (e) => {
  alert("Second inner container");
});
secondButton.addEventListener("click", (e) => {
  alert("Second button");
});

const third = document.getElementsByClassName("third")[0];
const thirdInner = third.firstElementChild;
const thirdButton = thirdInner.firstElementChild;

// Click the button to see how stopPropagation() is stopping event from travelling up to the parent elements
third.addEventListener("click", (e) => {
  alert("Third container");
});
thirdInner.addEventListener("click", (e) => {
  alert("Third inner container");
});
thirdButton.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("Third button");
});

const wrapper = document.getElementsByClassName("wrapper")[0];

// See how, even if we have only eventListener applied on the button, we can still get the click event on the li elements by delegating the event to the parent element:

wrapper.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked on:", e.target.textContent);
    alert(`Clicked on: ${e.target.textContent}`);
  }
});

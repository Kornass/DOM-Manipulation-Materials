let container = document.querySelector(".wrapper");

// Creating two paragraphs and appending them to the beggining (prepend) and end (append) of a parent
let paragraph1 = document.createElement("p");
let paragraph2 = document.createElement("p");

paragraph1.textContent = "This is another paragraph";
paragraph2.textContent = "Text after button";

container.prepend(paragraph1);
container.appendChild(paragraph2);

// Create button with nested button
function addSquare() {
  // creating div and button
  let square = document.createElement("div");
  let removeBtn = document.createElement("button");
  let clickMeBtn = document.createElement("button");

  // Modifying button and appending it to the div
  clickMeBtn.textContent = "Click me!";
  square.appendChild(clickMeBtn);
  removeBtn.textContent = "remove";
  square.appendChild(removeBtn);

  // modifying div
  square.classList.add("square");

  // button to generate random background color, the first child of the square (clickMeBtn)
  square.childNodes[0].addEventListener("click", function () {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    square.style.backgroundColor = bgColor;
  });
  // giving div removeMeBtn removing functionality
  square.childNodes[1].addEventListener("click", function () {
    square.remove();
  });

  // appending squares to the main container
  container.appendChild(square);
}

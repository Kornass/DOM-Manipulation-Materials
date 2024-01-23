const list = document.getElementsByTagName("ul")[0];
const lis = document.getElementsByTagName("li");
console.log(list);
console.log(lis);

const addItemBtn = document.getElementsByTagName("button")[0];

addItemBtn.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.innerHTML = `User${lis.length + 1}`;
  newItem.setAttribute("id", "item");
  list.appendChild(newItem);
});

const removeStylingBtn = document.getElementsByTagName("button")[1];

removeStylingBtn.addEventListener("click", function () {
  [...lis].forEach((ele) => ele.removeAttribute("id"));
});

// checking the attribute of single li
console.log(lis[0].getAttribute("id"));

// adding/ removing class
lis[0].classList.add("special");
lis[0].classList.remove("special");

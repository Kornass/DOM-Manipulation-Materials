const list = document.getElementsByTagName("ul")[0];
// converting HTML collection to the array with spread operator
let lis = [...document.getElementsByTagName("li")];
console.log(list);
console.log(lis);

const addItemBtn = document.getElementsByTagName("button")[0];

// Create list item on click on first button and apply item id to it
addItemBtn.addEventListener("click", function () {
  // Creating list item
  const newItem = document.createElement("li");
  // Making a text content dependend on length of lis array
  newItem.innerHTML = `User${lis.length + 1}`;
  // add item attribute
  newItem.setAttribute("id", "item");
  // add special class toggle on click
  newItem.addEventListener("click", () => {
    if (!newItem.classList.contains("special")) {
      newItem.classList.add("special");
    } else {
      newItem.classList.remove("special");
    }
  });
  // append list item at the end of the parent
  list.appendChild(newItem);
  // reassign lis array to contain newly created element
  lis = [...document.getElementsByTagName("li")];
});

const toggleStylingBtn = document.getElementsByTagName("button")[1];

// Remove styling of all elements
toggleStylingBtn.addEventListener("click", function () {
  lis.forEach((ele) => {
    if (ele.getAttribute("id")) {
      ele.removeAttribute("id");
    } else {
      ele.setAttribute("id", "item");
    }
  });
});

// adding/ removing special class (font change)
lis.forEach((item) => {
  item.addEventListener("click", () => {
    if (!item.classList.contains("special")) {
      item.classList.add("special");
    } else {
      item.classList.remove("special");
    }
  });
});

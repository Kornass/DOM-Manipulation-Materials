// getElementById()
const wrapper = document.getElementById("wrapper");

setTimeout(() => {
  wrapper.style.backgroundColor = "aliceblue";
}, 1000);

// getElementsByTagName()

const element = document.getElementsByTagName("body");

setTimeout(() => {
  element[0].style.backgroundColor = "#c4aec7";
}, 2000);

// getElementsByClassName()

const posts = document.getElementsByClassName("post");

console.log(posts);

for (let i = 0; i < posts.length; i++) {
  posts[i].classList.add("shadow");
}

// getElementsByName() – search element by name attribute

function showPreview() {
  let text = document.getElementsByName("feedback")[0].value;

  document.getElementsByClassName("preview")[0].textContent = text;
}

// querySelector() – returns the first element that matches the specified selector
let text = (document.querySelector(".preview").style.color = "red");

// querySelectorAll() – returns elements that match the specified selector

let elements = document.querySelectorAll(".post");

setTimeout(() => {
  for (let i = 0; i < posts.length; i++) {
    elements[i].classList.remove("shadow");
  }
}, 5000);

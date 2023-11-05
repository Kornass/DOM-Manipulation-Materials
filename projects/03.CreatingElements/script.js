let container = document.querySelector(".wrapper")

let paragraph1 = document.createElement("p")
let paragraph2 = document.createElement("p")

paragraph1.textContent = "This is another paragraph"
paragraph2.textContent = "Text after button"

container.prepend(paragraph1)
container.appendChild(paragraph2)

function addSquare(){
    console.log('here');
let square = document.createElement("div")

    square.classList.add('square')

container.appendChild(square)
} 

function removeSquare() {
    console.log(e)
// let divs = document.querySelectorAll('.square')


}
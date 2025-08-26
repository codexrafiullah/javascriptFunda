// Q1

// mouseOut
// let mouseOut = document.querySelector("#mouseEvents");
// mouseOut.addEventListener("mouseout", () => {
//   console.log("mouse Out");
// } )

// // mouseenter 
// let mouseEnter = document.querySelector("#mouseEvents");
// mouseEnter.addEventListener('mouseenter', () => {
//   console.log("mouse Entered");
// })

// //mouseover 
// let mouseOver = document.querySelector("#mouseEvents");
// mouseOver.addEventListener("mouseover", () => {
//   console.log("Mouse Over");
// })

// // keypress 
// let keyPress = document.querySelector("#mouseEvents");
// keyPress.addEventListener('keypress', (event) => {
//   console.log("keypressed : " + event.key);
// })

// // scroll
// let scrollEvent = document.querySelector("#mouseEvent");
// scrollEvent.addEventListener('scroll', () => {

// })


//// Q2
let btn = document.querySelector("button");
let checkColor = document.querySelector("#checkColor")
let colorText = document.querySelector("#colorText")

btn.addEventListener('click', () => {
  let btnColor = getRandomColor();
  btn.style.cssText = `background: ${btnColor}`
  colorText.textContent = btnColor;
})

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = `rgb(${red}, ${green}, ${blue})`
  return color
}

//// Q3
// let userInput = document.querySelector("#inputArea");
// let heading = document.querySelector("#heading")

// userInput.addEventListener('input', () => {
//   // heading.innerText = userInput.value;
//   let filtered = userInput.value.replace(/[^a-zA-Z\s]/g, "")
//   userInput.value = filtered;
//   heading.innerText = filtered
// })
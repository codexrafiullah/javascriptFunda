let btn = document.querySelector("button");
btn.style.background = getRandomColor();

btn.addEventListener("click", () => {
  let h3 = document.querySelector("h3");
  let randomColor = getRandomColor();//// we decleared a variable because it will take same colors 
  h3.innerText = randomColor;

  let div = document.querySelector("div");
  div.style.background = randomColor;
  btn.style.background = randomColor;
})

function getRandomColor (){
  let red = Math.floor(Math.random() * 255)
  let green = Math.floor(Math.random() * 255)
  let blue = Math.floor(Math.random() * 255)

  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}
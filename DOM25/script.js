// let smallImages = document.getElementsByClassName("oldImg");
// for(let i = 0; i < smallImages.length; i++) {
//   console.log(smallImages[i]);
// }


// console.dir(document.querySelector("h1"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelectorAll("p"));


// let heading = document.querySelector("h1");
// heading.innerHTML = "Roman Reigns";


// //// change the text of paragraph
// let para = document.querySelector('p')
// para.innerText = "paragraph"


// //// change the img
// let img = document.querySelector("#mainImg");
// img.setAttribute('src', "spiderMan.png");

// //// change the name of id
// let heading1 = document.querySelector('#mainImg');
// heading1.setAttribute("id", "firstImg")

// //// change the name of class
// let paraId = document.querySelector("#description");
// paraId.setAttribute("id", "paragraph")


// ////// change the css styling  
// let heading = document.querySelector("h1")
// // heading.style.color = 'purple'
// // heading.style.fontFamily = 'Helvetica'
// // heading.style.background = 'Yellow'
// //// shortCut
// heading.style.cssText = "color: purple; font-family: Helvetica; background:yellow";

// let links = document.querySelectorAll(".box a");
// // for(let i=0; i<links.length; i++){
// //   links[i].style.cssText = "color:green; background:yellow";
// // }
// //// using for of loop
// for(link of links) {
//    link.style.cssText = "color:green; background:yellow";
// }


//// add a class
// let green = document.querySelector("h1");
// green.classList.add("green");

//// remove the class 
// green.classList.remove("green")


// //////////  Create Element

// //// appendChild = create new child element 
// //// append = create element in last 
// //// prefore = create element before the paragraph
// //// inserAdjacent(where, element)

// //// inserAdjacent(beforebegin, elementName)
// //// beforebegin, add before the start of element 
// //// afterbegin , add in the start of element 
// //// beforeend, add before the end of element
// //// afterend, add after the end of element
// let btn = document.createElement('button');
// btn.innerText = "click me";
// btn.classList.add("btn")
// let box = document.querySelector(".box")
// box.appendChild(btn);
// // btn.style.cssText = "background : blue; color: white"

// //// remove the element 
// btn.remove();


// //// add element in exact location using "insertAdjacentElement"
// let btn2 = document.createElement("button");
// btn2.innerText = "button";
// let p = document.querySelector("#p1")
// p.insertAdjacentElement("beforebegin", btn2);
// btn2.classList.add("btn2")


//////  Task 
// Q1
let para1 = document.createElement('p')
para1.innerText = "Hey i am red";
document.querySelector("body").append(para1);
para1.classList.add("red")
// Q2
let h3 = document.createElement("h3");
h3.innerText = "I am a blue h3";
document.querySelector("body").append(h3)
h3.classList.add("blue")
//Q3
let div = document.createElement("div")
let h1 = document.createElement("h1")
let para2 = document.createElement("p")

h1.innerText = "I am in a div";
para2.innerText = "ME TOO!"

div.append(h1)
div.append(para2)
div.classList.add("box");
document.querySelector("body").append(div)

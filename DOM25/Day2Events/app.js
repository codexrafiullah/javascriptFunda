// ////onclick // we can't take more than one value
// let btn = document.querySelector("button");
// btn.onclick = () => console.log("button was clicked");

// ////addEventListener // we can take more values 
// btn2.addEventListener("click", () => console.log("button was clicked"))
// btn2.addEventListener("click", () => console.log("button was clicked"))
// btn2.addEventListener("click", () => console.log("button was clicked"))


//// onmouseenter
// let btn = document.querySelector("button")
// btn.onmouseenter = () => console.log("you entered a button");

//// practice
let firstName = document.querySelector("#fname");
let lastName = document.querySelector("#lname")
let email = document.querySelector("#email")
let btn2 = document.querySelector("button")
let output = document.querySelector("#output")

//// in console
// btn2.onclick = () => {
//   console.log(firstName.value);
//   console.log(email.value); 
//   console.log(lastName.value);
// }

//// on page with onclick
// btn2.onclick = () => {
//   output.innerHTML = `
//   <p><b>First Name: </b> ${firstName.value}</p>
//   <p><b>Last Name: </b> ${lastName.value}</p>
//   <p><b>Email : </b> ${email.value}</p>
//   `;
// };

//// on page with addEventListener
btn2.addEventListener("click", () => {
   output.innerHTML = `
  <p><b>First Name: </b> ${firstName.value}</p>
  <p><b>Last Name: </b> ${lastName.value}</p>
  <p><b>Email : </b> ${email.value}</p>
  `;
})

// btn2.addEventListener("click", () => console.log(firstName.value))
// btn2.addEventListener("click", () => console.log(lastName.value))
// btn2.addEventListener("click", () => console.log(email.value))

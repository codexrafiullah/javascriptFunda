let form = document.querySelector("form")

form.addEventListener("submit",(event) => {
  event.preventDefault();

  let user =  form.elements[0];
  let pass = form.elements[1];

  console.log(user.value);
  console.log(pass.value);
  
  alert(`Hi ${user.value}, your password is set to ${pass.value}`)
})
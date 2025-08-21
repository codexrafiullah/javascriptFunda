let js = 'amazing';
// if (js==='amazing'){
//   alert("JavaScript is FUN!")
// };
// if (js!='amazing'){
//   alert("JavaScript is Boaring")
// }

// console.log( 40 + 8 + 3 + 23);

// console.log("Jonas");
// console.log(23);

// let firstName = "Jonas";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);


// // Boolean
// let JavaScriptIsFun = true;
// console.log(JavaScriptIsFun);

// // Typeof
// console.log(typeof true);
// console.log(typeof JavaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// //Undefined
// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);


// // Null
// console.log(typeof null);


//// let , var and const 

// var is globally scoped 
// var a = 45;
// console.log(a);
// {
//   var a = 40;
//   console.log(a);
// }
// console.log(a);

//// var is block scoped
// let b = 50;
// console.log(b);
// {
//   let b = 60;
//   console.log(b);
// }
// console.log(b);

//// Basic operators

//// Maths
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// //// assignment operators
// let x = 10 + 5; // 15
// console.log(x); 
// x += 10; // x = x + 10 = 25
// console.log(x);
// x *= 4; // x = x * 4 = 100
// console.log(x);
// x++; // x = x + 1 = 101
// console.log(x);
// x--; // x = x - 1 = 100
// console.log(x);

// //// Comparison operator
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log("Age of Jonas = ",ageJonas,"Age of Sarah = ", ageSarah);

// console.log(ageJonas > ageSarah); // >

// console.log(ageSarah >= 18); //>=

// let x , y;
// x = y = 25 - 10 - 5; //y= 10 and x = y, So x = y ; x=10, y=10
// console.log(x, y);


// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

//// String 
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "i'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

//// Template Literals
const jonasNew = `i'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`String with \n\multiple \n\lines  `);
console.log(`String with 
multiple 
lines  `);





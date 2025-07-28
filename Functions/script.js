"use strict ";

// function logger() {
//   console.log('My name is jonas');
// }

// logger();
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//   return juice;
// }
// const appleJuice = fruitProcessor(5,0)
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// const num = Number('23');
// console.log(num + 2 - 5);

// // Task 1
// function greetUser(name){
//   const greet = `${name} Welcome to Brandora Agency.`;
//   return greet;
// }
// const greeting = greetUser('Rafi Ullah')
// console.log(greeting);

// //// OR
// function greetUser(name){
//   console.log(`${name} Welcome to brandora agency`);
// }
// greetUser('Rafi Ullah')

// //// Task 2
// function calculateArea(length, width){
//   return length * width;
// }
// let area = calculateArea(5, 6);
// console.log(area);

// ////Practice
// function calculatePerimeter(length, width){
//   return 2*(length+width)
// }
// let perimeter = calculatePerimeter(4,6)
// console.log(perimeter);

// function checkEligibility(age, hasID){
//   if(age >= 18 && hasID){
//     console.log(`You are eligible to vote`);
//   }else{
//     console.log(`You are not eligible to vote`);
//   };
// }
// checkEligibility(20, true);
// checkEligibility(17, true);
// checkEligibility(20, false);

//////////////////////////////////////////

// //// Function Declaration vs Expression

// //// Function Declaration
// function calcAge1(birthYear){
//   return 2037 - birthYear
// }
// const age1 = calcAge1(1991)
// console.log(age1);

// //// Function Expression
// const calcAge2 = function (birthYear){
//   return 2037 - birthYear
// }
// const age2 = calcAge2(1991)
// console.log(age2);
// // call both
// console.log(age1, age2);

// //// Task
// function add(a, b){
//   return a + b;
// }
// const sum = add(3, 3);
// console.log(`Sum = ${sum}`);

// let multiply = function(a, b){
//   return a * b;
// }
// let multplication = multiply(3, 3);
// console.log(`Multplication = ${multplication}`);
// // call both
// console.log(`Sum = ${sum} ,`, ` Multplication = ${multplication}`);

////////////////////////////////////////////

// //////// Arrow Function

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearUntilRetirement = birthYear => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return retirement
// }
// const retirementAge = yearUntilRetirement(1991);
// console.log(retirementAge);

// const yearUntilRetirement = (birthYear, fullName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${fullName} retires in ${retirement} years`
// }
// const retirementAge1 = yearUntilRetirement(1980, 'Jonas');
// console.log(retirementAge1);

// const retirementAge2 = yearUntilRetirement(1991, 'Bob');
// console.log(retirementAge2);

// //// Practice Questions
// // Q:1
// const sayHello = () => console.log('Hello World');
// sayHello();

// //Q:2
// const double = number => number * 2;
// const doubleNumber = double(5);
// console.log(doubleNumber);

// //Q:3
// const toUpperCase = string => string.toUpperCase();
// const name = toUpperCase('rafi ullah')
// console.log(name);

// // Q:4
// const add = (num1, num2) => num1 + num2;
// const sum = add(45 , 45);
// console.log(sum);

// //Q:5
// const isEven = number => number % 2 == 0 ?  true : false
// const checkIsEven = isEven(9);
// console.log(checkIsEven);

// // Q:6
// const getInitial = (firstName, lastName) => `${firstName[0]}.${lastName[0]}`;
// const initialWords = getInitial('Rafi', 'Ullah');
// console.log(initialWords);

// // Q:7
// const calculateArea = (length, width) => length * width;
// const area = calculateArea(4, 6);
// console.log(area);

// // Q:8
// const greetUser = name => `Hello ${name}!`
// const greetMessage = greetUser('Jonas');
// console.log(greetMessage);

// // Q:9
// const maxOfTwo = (num1, num2) => num1 > num2 ? `Number1(${num1}) greater than number(${num2})` : num1 === num2 ? `Both are equal` : `Number2(${num2}) is greater than Number1(${num1})`;

// const maxNumber = maxOfTwo(4, 6);
// console.log(maxNumber);

// // Q:10
// const reverseString = string => string.split('').reverse().join('');
// const reverseStr = reverseString('JavaScript');
// console.log(reverseStr);


// //// Task 1 Arrow function

// const getFullName = (firstName, lastName) => {
//   return `Full Name : ${firstName} ${lastName}`
// }
// const fullName = getFullName('Rafi', 'Ullah');
// console.log(fullName);

// //// Task 2
// const square = number =>  number * number;
// console.log(square(4));
// console.log(square(5));
// console.log(square(6));

// //// Task 3
// const  greet = ()  => console.log('Welcome to javaScript learning ');
// greet();

////////////////////////////////////////

//// Functions Calling Other Functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples)
//   const orangePieces = cutFruitPieces(oranges)
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));
 
// //// Task
// function cutFruit(fruit) {
//   return fruit * 4;
// }
// function makeJuice(apples, oranges) {
//   const applePieces = cutFruit(apples);
//   const orangePieces = cutFruit(oranges);
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
//   return juice;
// }
// console.log(makeJuice(2,3));


// //// Practice Questions 
// // Q:1
// function mixIngredients(flour) {
//   return flour *2
// }
// function bakeCake(layers, flavor) {
//   const cakeLayers = mixIngredients(layers)
//   const cake = `Baking a ${flavor} cake with ${cakeLayers} layers`
//   return cake;
// }
// console.log(bakeCake(3, "vanilla"));

// // Q:2
// function sliceBread(loaves){
//   return loaves * 10;
// }
// function makeSandwiches(breadSlices, cheese) {
//   const loafslices = sliceBread(breadSlices);
//   const sandwiche = `Making 5 sandwiches with ${loafslices} slices of bread and ${cheese}`
//   return sandwiche;
// }
// console.log(makeSandwiches(1, "cheese"));

// // Q:3
// function calculateLiters(area){
//   return Math.ceil(area / 5);
// }
// function paintRoom(walls, area) {
//   const requiredLiters = calculateLiters(area)
//   const paint = `Painting ${walls} walls using ${requiredLiters} liters of paint.`;
//   return paint;
// }
// console.log(paintRoom(4, 40));


// // Q:4
// function cutFruit(fruit) {
//   return fruit * 4;
// }
// function makeJuice(apples, oranges, iceCubes) {
//   const applePieces = cutFruit(apples);
//   const orangePieces = cutFruit(oranges);
//   const juice = `Juice with ${applePieces} pieces of apple, ${orangePieces} pieces of orange and ${iceCubes} ice cubes.`
//   return juice;
// }
// console.log(makeJuice(2, 3, 5));

// // Q:5
// function calculateHours(distance){
//   return Math.ceil(distance / 100)
// }
// function planTrip(distance, location){
//   const hours = calculateHours(distance);
//   const trip = `Trip to ${location} will take ${hours} hours.`
//   return trip;
// }
// console.log(planTrip(500, 'Lahore'));


///////////////////////////////////

//// Review Functions ////

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }
// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   return retirement > 0 ? retirement : -1;
// }
// console.log(yearUntilRetirement(1991, 'jonas'));
// console.log(yearUntilRetirement(1970, 'Mike'));


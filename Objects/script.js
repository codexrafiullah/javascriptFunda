////// Objects ///// 
// const jonas = {
//   firstName : 'Jonas',
//   lastName : 'Schemedtmann',
//   age : 2037 - 1991,
//   job : 'teacher',
//   friends : ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas);

////////// task 1 ////////
const person = {
  firstName : 'Rafi',
  lastName : 'Ullah',
  age : 22,
  hobbies : ["reading", "coding", "cricket"],

  getSummary : function() {
    return `${this.firstName} ${this.lastName} is ${this.age} years old and love to plying ${this.hobbies}.`
  }
}
console.log(person);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.hobbies);

////// task 2 /////
console.log(person['firstName']);
console.log(person['hobbies']);

person.profession = 'web developer';  // add new property 
person['country'] = 'Pakistan'

console.log(person);

//// Task 3
console.log(person.getSummary());





// console.log(jonas.firstName);
// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);


// const interestedIn = prompt('What do you know about Jonas? Choose between firstName, LastName, age, job, and friends');

// // if(jonas[interestedIn]) {
// // console.log(jonas[interestedIn]);
// // }else{
// //   console.log('wrong request! Choose between firstName, LastName, age, job, and friends');
// // }

// jonas[interestedIn]? console.log(jonas[interestedIn]) : console.log('wrong request! Choose between firstName, LastName, age, job, and friends');


// const jonas = {
//   firstName : 'jonas',
//   lastName : 'Schmedtman',
//   birthYear : '1991',
//   job : 'teacher',
//   friends : ['Michael', 'Peter', 'Steven'],
//   hasDriverLicense : true,

//   // calcAge : function (birthYear){
//   //   return 2037 - birthYear;
//   // }

//   //  calcAge : function (){
//   //   return 2037 - this.birthYear;
//   // }

//   // with help of 'this' we can store a New property in Object 
//   calcAge : function (){
//     this.age = 2037 - this.birthYear
//     return this.age;
//   },

//   getSummary : function () {
//     return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license `
//   }
// };

// // console.log(jonas.calcAge());
// // console.log(jonas['calcAge']());

// console.log(jonas.getSummary());


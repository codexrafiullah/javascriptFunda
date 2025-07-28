// //// Type Conversion
// // ConverT String to Number
// const inputYear = '1991';
// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);

// // Convert Number to String 
// console.log(String(23), 23);
// console.log(String(23) + 7, 23 + 7);


// //// Type Coercion
// console.log('i am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' * '2');
// console.log('23' > '18');

//// Task 

// let age = 25;
// let year = "2020";
// let name = "Jonn";

// console.log(Number(year));
// console.log(String(age));
// console.log(Number(year) + 20);
// console.log(String(age) + 20);


// //// Truthy & falsy values 
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(NaN));


// const money = 0;
// if (money){
//   console.log(`Don't spend it all`);
// }else {
//   console.log(`You should get a job!`);
// }

// let height;
// if(height){
//   console.log(` Height is defined`);
// }else{
//   console.log(`height is not defined`);
// }

// //// Task
// let values = [0,"","Hello",undefined, null, NaN, 1, "false"];
// for(let i=0; i<=values.length-1; i++){
//   if(values[i]){
//     console.log(`value : ${values[i]} is truthy value`);
//   }else{
//     console.log(`value : ${values[i]} is falsy value`);
//   }
// }


//// Equality operators

// const favourite = (prompt(`what is your favorite number`));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite == 23){
//   console.log(`Cool! 23 is an amazing number! ==`);
// }

// if (favourite === 23){
//   console.log(`Cool! 23 is an amazing number! ===`);
// }


// //// Task
// let num = 5;
// let str = "5";
// // == compare values only not data type 
// if (num == str){
//   console.log("loos equality");
// }
// // === compare value and data type both
// if (num === str){
//   console.log("strict equality");
// }


// //// Logical Operator 
// const hasDriverLicense = true;// A
// const hasGoodVision = true;// B

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasGoodVision);


// const shouldDrive = hasDriverLicense && hasGoodVision;
// if (shouldDrive){
//   console.log(`Sarah can drive!`);
// }else{
//   console.log(`Someone else should drive...`);
// }


// const isTired = false; // C
// console.log(hasDriverLicense && hasGoodVision && isTired);

// if (hasDriverLicense && hasGoodVision && !isTired){
//   console.log(`Sarah can drive!`);
// }else{
//   console.log(`Someone else should drive...`);
// }

// //// Task
// let isUserLoggedIn = true;
// let hasAccess = false;

// // &&
// if(isUserLoggedIn && hasAccess){
//   console.log("You have access to dashboard");
// }else{
//   console.log("You have no access to dashboard");
// }

// // || 
// if(isUserLoggedIn || hasAccess){
//   console.log("You have a partial access or Logged in");
// }else{
//   console.log("You have no access it all");
// }

// // ! 
// if(!isUserLoggedIn){
//   console.log("Please logged in first");
// }else{
//   console.log("You are logged in");
// }

// // combine ! and ||
// if(!isUserLoggedIn || !hasAccess){
//   console.log("missing login or access");
// }else{
//   console.log("Fuly access granted");
// }


//// Switch statement 
//// Task
const day = 'Tuesday';

switch (day){
  case 'Monday' :
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;

  case 'Tuesday' :
    console.log(`prepare theory videos`);
    break;

  case 'Wednesday':
  case 'Thursday' :
    console.log('write code example');
    break;
  
  case 'Friday' :
    console.log('Record videos');
    break;
    
  case 'Saturday' :
  case 'Sunday' :
    console.log('Enjoy the weekend');
    break;
  
  default :
  console.log('Not a valid day');
}
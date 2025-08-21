// for(let rep = 1; rep <= 10; rep++){
//   console.log(`Lifting weights repetition ${rep}`);
// }

//// table of 2

// for(let t = 1; t <= 10; t++){
//   console.log(`${t} X ${2} = ${t*2}`);
// }

//// Task 1
// let scores = [80, 92, 67, 75, 88];
// let total = 0;
// for(let s = 0; s < scores.length; s++){
//   console.log(scores[s]);
//   total += scores[s];
// }
// let avg = total/scores.length

// console.log(total);
// console.log(avg);

// //// Task 2
// for(let x = 1; x <= 10; x++){
//   console.log(`Numbers : ${x}`);
// };

// //// Task 3
// const names =['Rafi!', 'Aisha!', 'Nisar!'];
// for(let i = 0; i<names.length; i++){
//   console.log(`Hi ${names[i]}`);
// }

/////// Looping Arrays with break and continue

// const jonas = [
//   'jonas',
//   'Schmedtman',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true
// ];

// const types = []

// for(let i = 0; i < jonas.length; i++){
//   console.log(jonas[i], ` type is : ${typeof jonas[i]}`);
//   types[i] = typeof jonas[i]
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// let a = 1;
// for(let i = 0; i < years.length; i++){
//   ages.push(`age of ${a++} person is ${2037-years[i]}`)
// }
//  console.log(ages);

// console.log('---- CONTINUE STRINGS ----');
// for(let i = 0; i < jonas.length; i++){
//   if (typeof jonas[i] !== 'string') continue;

//   console.log(jonas[i], typeof jonas[i]);
//  }

//  console.log('---- BREAK WITH NUMBERS ----');
// for(let i = 0; i < jonas.length; i++){
//   if (typeof jonas[i] !== 'string') break;

//   console.log(jonas[i], typeof jonas[i]);
//  }

//  //// Task 1

//  const items = ["Book", 34, "Pen", true, "Notebook", 0];
//  for(let i = 0; i < items.length; i++){
//   if(typeof items[i] !== 'string') continue;
//   console.log(items[i], typeof items[i]);
//  }

//   for(let i = 0; i < items.length; i++){
//   if(typeof items[i] === 'boolean') break;
//   console.log(items[i], typeof items[i]);
//  }


//// Looping Backwards & Nested Loops
// const jonas = [
//   'jonas',
//   'Schmedtman',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true
// ];

// for(let i = jonas.length -1; i>= 0; i--){
//   console.log(jonas[i]);
// }


// ////// Task 
// const colors = ['red', 'white', 'blue', 'green']
// for(let i = colors.length-1; i>=0; i--){
//   console.log(colors[i]);
// }


// /// Nested loop
// for(let execirse = 1; execirse < 4; execirse++){
//   console.log(`---------Starting execirse ${execirse}`);
  
//   for(let rep = 1; rep < 6; rep++){
//     console.log(`Execirse : ${execirse} Lifting weight repetition ${rep}`);
//   }
// }


// //// Task
// for (let exercise = 1; exercise <= 2; exercise++) {
//   console.log(`Exercise ${exercise}`);
  
//   for (let set = 1; set <= 2; set++) {
//     console.log(`Set ${set}`);
//   }
// }



// console.log('------------For loop');
// for(let rep = 1; rep <= 10; rep++){
//   console.log(`lifting weights repetition ${rep}`);
// }

// console.log('-----------while loop');
// let rep = 1;
// while(rep <= 10){
//   console.log(`lifting weights repetition ${rep}`);
//   rep++
// }


// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
while(dice !== 6){
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6){
    console.log(  'the loop is about to end.....');
  }
}

///// Arrays /////

// let marksOfclass12 = [91, 82, 63, 84, null, false, 'Not Presenst'];

// console.log(marksOfclass12);
// console.log(marksOfclass12[0]);
// console.log(marksOfclass12[1]);
// console.log(marksOfclass12[2]);
// console.log(marksOfclass12[3]);
// console.log(marksOfclass12[4]);
// console.log(marksOfclass12[5]);
// console.log(marksOfclass12[6]);
// console.log(marksOfclass12[7]);

// //// Usaing for loop
// for(let i=0; i<=marksOfclass12.length; i++){
//   console.log(marksOfclass12[i]);
// }

// //// length
// console.log('The lenght of marks class 12 is =',marksOfclass12.length);

// //// typeOf
// console.log(typeof marksOfclass12);

// //// update 
// marksOfclass12[7] = 89; // change the value of index 7 from undefined
// console.log(marksOfclass12[7]);
// // OR
// marksOfclass12[2] = 90; // update the marks of index 2
// console.log(marksOfclass12[2]);

/////////////////////////////

//// Methods of Array

const friends = ['Michaek', 'Steven', 'Peter'];
console.log(friends);

// push
friends.push('jay'); // add element to the last in array 
console.log(friends);

// unshift
friends.unshift('John') // add element to the start in array
console.log(friends);

// pop
friends.pop() // remove element from the last of array
console.log(friends);

// shift
friends.shift(); // remove element from the start of array
console.log(friends);

// indexOf
console.log(friends.indexOf('Steven'));// check the index of an element 
console.log(friends.indexOf('Bob'));// check the index of an element

// includes
console.log(friends.includes('Steven'));// check if an element exists in array 
console.log(friends.includes('Bob'));// check if an element exists in array
if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}

//// Task
console.log('task');

const fruits = ['Apple', 'Banana', 'Mango']
console.log(fruits);
fruits.push('Orange')
console.log(fruits);
fruits.shift()
console.log(fruits);
fruits.unshift('Grapes')
console.log(fruits);
console.log(fruits.indexOf('Mango'));
console.log(fruits.includes('Pineapple'));


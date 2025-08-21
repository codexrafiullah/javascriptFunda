////  toString Methods
// let num = [1, 2, 3, 4, 5];
// let b = num.toString();
// console.log(b, typeof b);


//// join Method
// let num = [1, 2, 3, 4, 5];
// let c = num.join("_")
// console.log(c);


//// pop
// let num = [1, 2, 3, 4, 5];
// let a = num.pop(); // pop return the pop element(new array)
// console.log(a, num);


// //// push
// let num = [1, 2, 3, 4, 5];
// let r = num.push(6) // push return the pushed element (new array)
// console.log(r, num);


//// unshift
// let num = [1, 2, 3, 4, 5];
// let c = num.unshift(0) // unsift retern the unshifted elements (new array)
// console.log(c, num);


//// delete method
// let num = [1, 2, 3, 4, 5];
// delete num[3];
// console.log(num);


//// cancat method
// let num = [1, 2, 3, 4, 5];
// let num2 = [6, 7, 8, 9, 10]
// let newarray = num.concat(num2);
// console.log(newarray);


// // sort Method
// let num = [3,4, 5, 2, 1];
// num.sort()
// console.log(num);
// let alphabat = ['b', 'a', 'c', 'e', 'd','f']
// alphabat.sort()
// console.log(alphabat);


// let nums = [3,4, 5, 2, 1];
// nums.sort((a, b) => {console.log(a, b);return b-a});
// console.log(nums);


//// splice 
// let nums = [11,31,51,71,91];
// nums.splice(3, 0, 55, 58, 65)
// console.log(nums);


//// slice 
// let nums = [1,2,3,4,5, 6, 7, 8, 9];
// let sliced = nums.slice(4, 7)
// console.log(sliced);


//// forEach
// const numbers = [1, 2, 3, 4, 5]
// numbers.forEach((items, index, arr ) => {
//   console.log(items, index, arr);
// })


//// map
// const numbers = [1, 2, 3, 4, 5]
// numbers.map((items, index, arr) => {
// console.log(items * 2);
// })

// Example 2 of map
// const products = [
//   {
//     name : 'laptop',
//     price : 1000,
//     count : 5,
//   },
//   {
//     name : 'desktop',
//     price : 500,
//     count : 2,
//   },
//   {
//     name : 'phone',
//     price : 500,
//     count : 10,
//   }
// ];
// // const totalProductValue = products.map(item => item.price * item.count);
// // console.log(totalProductValue);

// const totalProductValue = products.map(item => ({
//   name : item.name,
//   count : item.count,
//   total : item.price * item.count
// }));
// console.log(totalProductValue);

// console.log(products[0].count * 1000);

// Example 3 of map
// const students = [
//   { name: 'Ali', marks: 80 },
//   { name: 'Sara', marks: 92 },
//   { name: 'Ahmed', marks: 67 }
// ];

// const showGrades = students.map(item => ({
//   name : item.name,
//   grade : item.marks >= 90 ? 'A' : item.marks >= 80 ? 'B' : 'C'
// }));
// console.log(showGrades);


//// filter 
// const numbers = [1, 2, 3, 4, 5, 6]
// const even = numbers.filter(isEven);
// function isEven(value) {
//   return value % 2 === 0
// }
// console.log(even);

// const numbers = [1, 2, 3, 4, 5, 6]
// const even = numbers.filter(value => value % 2 ===0)
// console.log(even);

// const maxValue = numbers.reduce((max, current) =>
//   current > max ? current : max
// )
// console.log(maxValue);


//// reduce 
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const total = numbers.reduce(sum)
// function sum(accumulator, value) {
//   return accumulator + value * 2
// }
// console.log(total);


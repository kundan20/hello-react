// 1) Output
// (function(){
//   var a=b=5;
// })();
// console.log(b)
// //5

let obj1 = { 
    name : "John",
    age: 20
    }; 
let obj2 = Object.create(obj1);

// console.log(obj1);
// console.log(obj2);
console.log(delete obj2.name); // deleted name from obj2  true
console.log(obj2.name);//undefined
console.log(delete obj1.name); // error
console.log(obj1.name);
console.log(obj2.name);


// 3) Write a function that determines if two strings are anagrams of each other
// An anagram is a word or phrase formed by changing the order of the letters in another word or phrase. For example, ' triangle' is an anagram of ' integral'.

// function isAnagaram(str1, str2) {
//     let m = str1.length;
//     let n = str2.length;

//     if (m !== n) return false;

//     const map = new Map();

//     for (const key of str1) {
//         if (map.has(key)) {
//             map.set(key, map.get(key) + 1);
//         } else {
//             map.set(key, 1);
//         }
//     }

//     for (const key of str2) {
//         if (map.has(key)) {
//             map.set(key, map.get(key) - 1);
//         }
//     }

//     for (const key of map.keys()) {
//         if (map.has(key)) {
//             if (map.get(key) !== 0) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }
// console.log("isAnagaram: ", isAnagaram("Triangle", "integraL"));


//  function that flattens a nested array in JavaScript, converting it into a single-level array. 
// const Input = [1,2,[3,4,[5,6,[7,8]]]];
// // Output : [1,2,3,4,5,6,7,8]

// let op = [];
// function flattenArray(input) {
//     if (input.length === 0) return [];
//     for (const key of input) {
//         if (Array.isArray(key)) {
//             flattenArray(key);
//         } else {
//             op.push(key);
//         }
//     }
//     return op;
// }
// console.log(flattenArray(Input));

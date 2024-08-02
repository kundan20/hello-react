// Normal function: - input
// 

// // Curry  - oiuput
// const curriedSum = (a) => (b) => (c) => a + b + c

// const curriedSum = (a)  { 
//     return funtion(b) { 
//     return function (c){
//         return a + b +c
// }
    

// const curriedSum = curry(sum) ;

// console.log(curriedSum(1, 2, 3)); // Output: 6
// console.log(curriedSum(1)(2, 3)); // Output: 6
// console.log(curriedSum(1)(2)(3)); // Output: 6
// console.log(curriedSum(3)); // Output: [Function]

// function sum(a) {
//     return function(b) {
//         return b ? sum(a+b) : a;
//     }
// }

function sum(a,b,c){ return a+b+c}

const curry = function(callback) {

    return function(args) {
        console.log( args)
        return args ? callback.call(undefined, args) : callback
    }
}
const curriedSum = curry(sum) ;

// console.log(curriedSum(1, 2, 3));
// console.log(curriedSum(1)(2)(3)); // Output: 6
console.log(curriedSum(3)); // Output: [Function]



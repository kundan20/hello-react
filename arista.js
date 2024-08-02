
// const sum = (...args) => args.reduce((acc, curr) => acc + Number(curr), 0);
// console.log(sum([1,2,3,4]));

const sumArr = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
function sum(...a) {
    let op = sumArr(a);
    // console.log(op);
    return function(...b) {
        let op1 = sumArr(b);
        return b.length ? sum(op + op1) : op;
    }
}
console.log(sum(1,2)(5)(3,6,7)());

// const curry = function(callback) {
//     const curried = function(...args) {
//         if(args.length > callback.length) {
//             return callback(args);
//         } else {
//             return (...nextArgs) => curried(...args, ...nextArgs);
//         }
//     }
//     return curried;
// }
// const curriedSum = curry(fnSum);
// console.log(curriedSum(1,2,3,4)(5));
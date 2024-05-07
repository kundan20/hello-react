// getName();
// // console.log('x', x);
// // console.log(getName);

// const x = 5; 

// function getName() {
//     console.log('Hello JS');
// }

// // const getName = () => {
// //     console.log('Hello JS');
// // }

// // var getName = function() {
// //     console.log('Hello JS');
// // }

// getName();

// // console.log(getName);
// console.log(this.x)

// function a() {
//     c();
//     function c() {
//         console.log(b);
//     }
// }
// a();

// const b = 10;
// console.log(b);

//closures

// function x() {
//     var a = 7;
//     return function y() {
//         console.log(a);
//     }
// }
// x()();
// console.log(x()());

// function x() {
//     for (var i = 1; i <= 5; i++) {
//         function close(i) {
//             setTimeout(() => {
//                 console.log(i);
//             }, i * 1000);
//         }
//        close(i);
//     }
// }
// x();

// a();
// function a() {
//     console.log("Hello", a);
// }

// // b();
// var b = function fd() {
//     console.log("Hello", fd);
// }

// b();

// const x = function xy(param) {
//     return function () { param() };
// }
// x( () => { console.log('param'); })();

//polyfills
// const arr = [5, 10, 3, 2, 6];

// const op = arr.reduce(function (acc, curr) {
//     if (curr > acc) {
//         acc = curr;
//     }
//     return acc;
// }, 0);
// console.log(op);

//creating a promise

const cart = ['shoes', 'kurtas', 'shorts'];
const cart1 = [];

createOrder(cart).then((orderId) => {console.log(orderId); return orderId; })
        .then((orderId) => proceedToPayment(orderId))
        .then((paymentDetail) => console.log(paymentDetail))
        .catch((err) => console.log(err.message))

// function proceedToPayment(orderId) {
//     return new Promise((resolve, reject) => {
//         // resolve('Payment Success.')
//         if(orderId) {
//             resolve('Payment Success.')
//         } else {
//             reject(new Error('Payment Failed.'))
//         }
//     });
// }

// function createOrder(cart) {
//     const promise = new Promise(function(resolve, reject) {
//         if (!cart.length) {
//             reject(new Error('Cart is empty'));
//         } else {
//             resolve('1234')
//         }
//     });
//     return promise;
// }


//async await
// async function getData() {
//     // return "hello";
//     return new Promise((resolve, reject) => resolve('hello world'));
// }
// getData().then((data) => console.log(data))
// console.log('fsad',getData())

//  const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('hello world');
//     }, 5000);
//     console.log('Promise res afterd1');
//  });

//  const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('hello world');
//     }, 10000);
//     console.log('Promise res afterd2');
//  });

//  function getData() {
//     promise.then((res) => {
//         console.log('Promise res before');
//         console.log(res);
//     });
//     console.log('Promise res after');
//  }

//  async function getDataAsync() {
//     try {
//         const apiResp = await fetch('');
//         const apiVal = await apiResp.json();
//         const val1 = await promise1;
//         console.log('async/await res1');
//         console.log(val1);
    
//         const val2 = await promise2;
//         console.log('async/await res2');
//         console.log(val2);
//     } catch (err) {
//         console.log(err);
//     }


//     //then
//     // fetch('').then((res) => res.json()).then((data) => console.log(data));

   
//  }
//  getDataAsync().catch((err) => console.log(err)); 
// //  getData();

//  console.log('test');

// Promise.all([p1, p2])

// Promise.allSettled([p1,p2,p3,p4])

// Promise.race([p1,p2]) return first settled promise

// Promise.any([p1,p2]) return first resolve resp and if all fails then return aggregate error [err1, err2]

//Promise APIs

//call apply bind
// const name1 = {
//     firstName: 'Kundan',
//     lastName: 'Nigam'
// };
// const printFullName = function(hometown, state) {
//     console.log(this.firstName + ' ' + this.lastName + ' ' + hometown + ' '+ state);
// }

// // printFullName.call(name1, 'Gorakhpur', 'UP');

// // printFullName.apply(name1, ['Gorakhpur', 'UP']);
// const printFullNameBind = printFullName.bind(name1, 'fjda', 'fds');
// printFullNameBind();

// const name2 = {
//     firstName: 'Pandu',
//     lastName: 'Nigam'
// };

// printFullName.call(name2, 'Udupi', 'Karanataka');

// printFullName.apply(name2, ['f', 'ffd']);

//Polyfill

// const name1 = {
//     firstName: 'Kundan',
//     lastName: 'Nigam'
// };
// const printFullName = function(hometown, state, country) {
//     console.log(this.firstName + ' ' + this.lastName + ' ' + hometown + ' '+ state + ' ' + country);
// }

// Function.prototype.myBind = function(...args) {
//     let obj = this;
//     const params = args.slice(1);
//     return function (...args2) {
//         obj.apply(args[0], [...params, ...args2]);
//     }
// }

// const printFullNameBind = printFullName.myBind(name1, 'hello', 'world');

// printFullNameBind('IN');

//Currying
// const multiply = function(x, y) {
//     console.log(x * y);
// }

// const multiplyClosure = function(x) {
//     return function(y) {
//         console.log(x * y);
//     }
// }

// const multiplyByTwo = multiply.bind(this, 8);
// multiplyByTwo(5);

// const multiplyByTwo = multiplyClosure(5);
// multiplyByTwo(2);

//Debouncing
// var counter = 1;

// const getData = function() {
//     console.log('Fetching Data...', counter++)
// }


// const debounce = function(fn, delay) {
//     let timer;
//     return function () {
//         let context = this;
//         args = arguments;
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn.apply(context, args); 
//         }, delay);
//     }
// }
// const getImpovedData = debounce(getData, 300);

//Throttling
// const expensive = () => {
//     console.log('Expensive calls');
// }

// const betterMethod = throttle(expensive, 500);

// window.addEventListener('resize', betterMethod);


// function throttle(fn, limit) {
//     let flag = true;
//     return function () {
//         let context = this;
//         args = arguments;
//         if (flag) {
//             fn.apply(context, args);
//             flag = false;
//             setTimeout(() => {
//                 flag = true;
//             }, limit);
//         }
//     }
// }

//sum(1)(2)(3)(4) op: 10

// function sum(x) {
//     return function(y) {
//         if (y) {
//             return sum(x + y);
//         }
//         return x;
//     }
// }
// const sum1 = x => y => { return y ? sum1(x + y) : x };

// console.log(sum(1)(2)(3)(4)())
// console.log(sum1(1)(2)(3)(4))






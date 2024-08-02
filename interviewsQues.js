const arr = [2,4,9,5,1,9];

function binarySearch(arr, ele) { //O(n)
    for (const item of arr) {
        if (item === ele) return true;
    }
    return false;
}

function optimizedBS(arr, ele) {
    let si = 0, ei = arr.length - 1;
    while (si <= ei) {
        let mid = Math.floor((si + ei) / 2);
        if (arr[mid] === ele) return true;
        if (arr[mid] > ele) {
            ei = mid - 1;
        } else {
            si = mid + 1;
        }
    }
    return false;
}
// console.log(binarySearch(arr, 2));
// console.log(optimizedBS(arr, 2));

//Merge Sort
function mergeSort(arr) {
    return mergeSortAux(arr, 0, arr.length - 1);
}
function mergeSortAux(arr, si, ei) {
    if (si >= ei) return;

    let mid = Math.floor((si + ei) / 2);
    mergeSortAux(arr, si, mid);
    mergeSortAux(arr, mid + 1, ei);
    return merge2SortedArrays(arr, si, mid, ei);
}
function merge2SortedArrays(arr, si, mid, ei) {
    let m = mid - si + 1;
    let n = ei - mid;
    let arr1 = [], arr2 = [];
    for (let i = 0; i < m; i++) {
        arr1.push(arr[i + si]);
    }
    for (let i = 0; i < n; i++) {
        arr2.push(arr[i + mid + 1]);
    }
    console.log(arr1, arr2)
    let i = 0, j = 0;
    let op = [];

    while(i < m && j < n) {
        if (arr1[i] < arr2[j]) {
            op.push(arr1[i]);
            i++;
        } else {
            op.push(arr2[j]);
            j++;
        }
    }
    while(i < m) {
        op.push(arr1[i++]);
    }
    while(j < n) {
        op.push(arr2[j++]);
    }
    return op;
}
// console.log(mergeSort(arr));

function bubbleSort(arr) {
    var isSwapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
        isSwapped = false;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr[j], arr[j+1]);
                isSwapped = true;
            }
        }
        if (!isSwapped) return false;
    }
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1; 
        }
        arr[j + 1] = key;
    }
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minInd = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minInd]) {
                minInd = j;
            }
        }
        if (minInd !== i) {
            //swap(arr[i], arr[minInd]);
            [arr[i], arr[minInd]] = [arr[minInd], arr[i]]
        }
    }
}

function quickSort(arr) {
    quickSortAux(arr, si, arr.length - 1);
}
function quickSortAux(arr, l, h) {
    if (l < h) {
        let pi = partition(arr, l, h);
        quickSortAux(arr, l, pi - 1);
        quickSortAux(arr, pi + 1, h);
    }
}
function partition(arr, l, h) {
    let pivot = arr[h];
    let i = l - 1;
    for (let j = l; j <= h; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i+1], arr[h]] = [arr[h], arr[i+1]];
    return i + 1;
}
// function max1sRows(arr) {
//     let maxCount = 0;
//     let rowInd = -1;
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0;
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] === 1) {
//                 count++;
//             }
//         }
//         if (maxCount < count) {
//             maxCount = count;
//             rowInd = i;
//         }
//     }
//     return rowInd;
// }
// console.log(max1sRows([[1,1,1],[1,0,0],[1,0,1],[0,0,0]]))

// function isAnagrams(str1, str2) {
//     let m = str1.length;
//     let n = str2.length;
//     if (m !== n) return false;

//     const map = new Map();
//     for (const item of str1) {
//         if (map.has(item)) {
//             map.set(item, map.get(item) + 1);
//         } else {
//             map.set(item, 1);
//         }
//     }
//     for (const item of str2) {
//         if (map.has(item)) {
//             map.set(item, map.get(item) - 1);
//         }
//         //  else {
//         //    return false;
//         // }
//     }
//     const keys = map.keys();
//     for (const key of keys) {
//         if (map.get(key) !== 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isAnagrams('geeksforgeeks', 'forgeeksgeekk'))
function swap(a, b) {
    // let key = a;
    // a = b;
    // b = key;
    a = [a, a = b][0];
}

function reverseStr(str) {
    // let newStr = str.split('');
    // let si = 0, ei = newStr.length - 1;

    // while (si < ei) {
    //     // var a = str[si], b = str[ei];
    //     [newStr[si], newStr[ei]] = [newStr[ei], newStr[si]]; 
    //     // let key =  str[si];
    //     // str[si] = str[ei];
    //     // str[ei] = key;
    //     // str[si] = a,
    //     // str[ei] = b;
    //     // console.log( str, str[si], str[ei])

    //     si++;
    //     ei--;
    //     // console.log( str, str[si], str[ei])
    // }
    // return newStr.join('');
    // const revStr = str.split('').reduce((acc, char) => {
    //     console.log('char ', char, acc)
    //     char + acc
    // }, '');
    // return revStr;

    // let revStr = '';
    // let i = str.length - 1;
    // while (i >= 0) {
    //     revStr += str[i];
    //     i--;
    // }
    // return revStr;
}
// console.log(reverseStr('abcd'));

// var a = "Hello", b = "World!";
// console.log(a, b); // Hello World!
// [a, b] = [b, a]; //
// console.log(a, b); // World! Hello

function OnesArr(arr) {
    // let count = 0;
    // for (const item of arr) {
    //     if (item === 1) count++;
    // }
    // return count;
    let si = 0, ei = arr.length - 1;
    while (si <= ei) {
        let mid = Math.floor((si + ei)/2);
        if (arr[mid] < 1) {
            ei = mid - 1;
        } else if (arr[mid] > 1) {
            si = mid + 1;
        } else {
            if (mid === arr.length - 1 || arr[mid + 1] !== 1) {
                return mid + 1;
            } else {
                si = mid + 1;
            }
        }
    }
}
// console.log(OnesArr([1,2,3,41,1,0,3]));
// console.log(OnesArr([1,1,1,1,0,0,0]));

// function middleEle(arr) {
//     let slow = 0, fast = 0;
//     while (fast < arr.length && fast + 1 < arr.length) {
//         slow++;
//         fast += 2;
//     }
//     return arr[slow];
// }
// console.log(middleEle([1,2,3,41,1,0]))
// let arr1 = [10,1,1,1,0,0,0];
// console.log(arr1.shift());
// console.log(arr1);

// function minChoclates(arr) {
//     let dp = [];
//     dp.push(1);
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > arr[i-1]) {
//             dp.push(dp[i-1] + 1);
//         } else {
//             dp.push(1);
//         }
//     }
//     console.log(dp)
//     for (let i = arr.length-2; i >= 0; i--) {
//         if ((arr[i] > arr[i+1]) && (dp[i] <= dp[i+1])) {
//             dp[i] = dp[i+1] + 1;
//         }
//     }
//     console.log(dp)

//     return dp.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(minChoclates([8,7,5]));

function kSubarrayMaxSum(arr, k) {
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }
    let windowSum = maxSum;
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum + arr[k] - arr[i-k];
        maxSum = Math.max(windowSum, maxSum);
    }
    return maxSum;
}

//kadane's algorithm
function largestSumSubarrays(arr) {
    let currentSum = arr[0], max_sum_so_far = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(currentSum + arr[i], arr[i]);
        max_sum_so_far = Math.max(currentSum, max_sum_so_far);
    }
    return max_sum_so_far;
}

function minStepsTo1(n) {
    let dp = [0, 0, 1, 1];
    for (let i = 4; i <= n; i++) {
        let x = y = z = n;
        x = dp[i-1];
        if (i % 2 === 0) {
            y = dp[i/2];
        }
        if (i % 3 === 0) {
            z = dp[i/3];
        }
        dp[i] = 1 + Math.min(x, Math.min(y,z));
    }
    return dp[n];
}

function coinChange(arr, n, V) {
    let dp = [];
    for (let i = 0; i < n; i++) {
        dp.push(0);
    }
    dp[0] = 1;
    for (let i = 0; i < n; i++) {
        for (let j = arr[i]; j <= V; j++) {
            dp[j] += dp[j-arr[i]];
        }
    }
    return dp[V];
}

function findTriplets(arr, sum) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 2; i++) {
        let l = i + 1;
        let r = arr.length - 1;
        while (l < r) {
            if (arr[i] + arr[l] + arr[r] === sum) return true;
            else if (arr[i] + arr[l] + arr[r] < sum) {
                l++;
            } else {
                r--;
            }
        }
    }
    return false;
}
// console.log(10 + 'Hello');

// let obj = {
//     a: 10,
//     b: 20
// }
// function passByRef(obj) {
//     // obj = {
//     //     a: 10,
//     //     b: 20,
//     //     c: 'Geeks'
//     // } //updating reference then no impact on original val
//     obj.c = 'Geeks'; //mutating the object, impact original value

//     console.log('inside ', obj);
// }
// passByRef(obj);
// console.log('outside ', obj);

//Higher order components

// const higherOrderComponents = (Component) => {

//     return (props) => {
//         return (
//             <div>
//                 <h1>Test</h1>
//                 <Component {...props}/>
//             </div>
//         );
//     }

// }
// const PromotedComponent = higherOrderComponents(Component);
// <PromotedComponent config={test}/>

//Higher order functions

// const radius = [1,2,3];
// const area = (r) => 2.14 * r * r;
// const diamerter = (r) => 2 * 2.14 * r;

// const calculate = function(logic, radius) {
//     const result = [];
//     for (let i = 0; i < radius.length; i++) {
//         result.push(logic(radius[i]));
//     }
//     return result;
// }

// Array.prototype.calculate = function(logic) {
//     const result = [];
//     for (let i = 0; i < this.length; i++) {
//         result.push(logic(this[i]));
//     }
//     return result;
// }
// console.log(calculate(diamerter, radius));

// console.log(radius.calculate(diamerter));

// console.log(x);
// x = 1;

// function test() {
//     var a = b = 1;

//     console.log(a, b);
// }

// test();
// console.log( b);

//call, apply and bind
// var a = 20;

// const calculate = function(...params) {
//     console.log(this.a, ...params);
// }
// let test1 = {
//     a: 10
// }
// calculate.call(test1, 2, 4,5,4);
// calculate.apply(test1, [2, 4]);
// const calCopy = calculate.bind(test1, 2, 4);
// calCopy(45);
// console.log(this)

// Function.prototype.myBind = function(...args) {
//     const obj = this;
//     const params = args.slice(1);
//     return function(...args2) {
//         obj.apply(args[0], [...params, ...args2]);
//     }
// }
// const calCopy = calculate.myBind(test1, 2, 4);
// calCopy(45, 4);

//caching/memoization

// function fibonacci(n, cache) {
//     if (cache[n]) return cache[n];
//     return cache[n] = fibonacci(n-1, cache) + fibonacci(n-2, cache);
// }
// console.log(fibonacci(5, [1,1]));

// class Car {
//     constructor(brand) {
//         this.carBrand = brand;
//     }
//     present() {
//         return this.carBrand;
//     }
// }
// class Model extends Car {
//     constructor(brand, model) {
//         super(brand);
//         this.model = model;
//     }
//     show() {
//         return this.present() + this.model;
//     }
// }

// const car = new Model('Lambo ', 'X1');
// console.log(car.show());

// function test1() {
//     var foo = 10;
//     if (foo) {
//         let foo = foo + 20; //error thrown
//     }
//     console.log(foo);
// }
// test1();

// function test2() {
//     var num = 20;
//     let a = 100;
//     if (num < 30) {
//         var lNum = 40;
//         // let anLNum = 50;
//         let a = 20;
//     }
//     console.log(lNum);
//     // console.log(anLNum);
//     console.log(a);

// }
// test2();

// function test3(obj) {
//     console.log(obj);
//     for (let obj of obj.a) {
//         console.log(obj);
//     }
// }
// test3({
//     a: 1
// });

// function myFunction() {
//     return this;
// }
// const myFunction = () => {
//     return this;
// }
// console.log(this)
// console.log(myFunction());

// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return  this.firstName + " " + this.lastName;
//     }
// };
// console.log(person.fullName());

//Debouncing and Throttling
{/* <input type="text" onKeyUp={betterFun()} /> */}
// const callback = () => {
//     console.log('Hello callback', this);
// }
// const debounce = (callback, delay) => {
//     let timeout = null;
//     return function (...args) {
//         console.log('this fe', this)
//         let context = this;
//         clearTimeout(timeout);
//         timeout = setTimeout(() => {
//             callback.apply(context, [...args]);
//         }, delay);
//     }
// }
// const betterFun = debounce(callback, 500);
// betterFun();

// const throttle = (callback, limit) => {
//     let flag = true;
//     return function(...args) {
//         let context = this;
//         if (flag) {
//             callback.apply(context, args);
//             flag = false;
//             setTimeout(() => {
//                 flag = true;
//             }, limit);
//         }
//     }
// }


// const user = {
//     name: 'Kundan',
//     address: {
//         city: 'Gkp',
//         country: 'India'
//     }
// }
// function bigFun(obj, parent) {
//     const result = {};
//     function flattenObj(obj, parent) {
//         for (const key in obj) {
//             if (typeof(obj[key]) === 'object') {
//                 flattenObj(obj[key], parent + '>' + key);
//             } else {
//                 result[parent + '>' + key] = obj[key];
//             }
//         }
//     }
//     flattenObj(obj, parent);
//     return result;
// }

// // flattenObj(user, 'user');
// // console.log(result);
// console.log(bigFun(user, 'user'));

// Array.prototype.myMap = function(callback) {
//     const op = [];
//     for (let i = 0; i < this.length; i++) {
//         op.push(callback(this[i]));
//     }
//     return op;
// }

// Array.prototype.myFilter = function(callback) {
//     const op = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i])) {
//             op.push(this[i]);
//         }
//     }
//     return op;
// }

// Array.prototype.myReduce = function(callback, initialValue) {
//     let accumulator = initialValue;
//     for (let i = 0; i < this.length; i++) {
//         if (accumulator) {
//             accumulator = callback.call(undefined, accumulator, this[i], i, this);
//         } else {
//             accumulator = this[i];
//         }
//     }
//     return accumulator;
// }

// function checkAdult(age) {
//     return age >= 18;
// }

// const ages = [32, 33, 16, 40];
// // const resultMap = ages.myMap(checkAdult);
// // const resultFilter = ages.filter(checkAdult);
// // const resultmyFilter = ages.myFilter(checkAdult);
// // console.log(resultFilter);
// // console.log(resultmyFilter);

// // const resultReduce = ages.reduce(((acc, currVal) => acc + currVal), 0);
// const resultmyReduce = ages.myReduce(((acc, currVal) => acc + currVal), 0);

// console.log(resultmyReduce);
// // console.log(resultmyFilter);
// import { cloneDeep } from 'lodash';
// let emp = {
//     a: 10
// };
// // let newEmp = emp; //shallow copy
// // let newEmp1 = JSON.parse(JSON.stringify(emp)); //deep copy
// // let newEmp1 = lodash.cloneDeep(emp); //deep copy
// // let newEmp1 = cloneDeep(emp)
// // newEmp.b = 20;
// newEmp1.b = 20;
// console.log(emp);
// // console.log(newEmp);
// console.log(newEmp1);

//callback, promise and async await
//callback
// function someThing() {
// 	console.log("Do Something!");
// }

// function someThingElse (callback) {
//     result = 10;
//   console.log("Do Something Else!");
//   callback(result)
// }

// function doThirdThing () {
//   console.log("Do Third thing!");
// }
// someThing(someThingElse);
// someThing(function() {
//     console.log("First anonymous callback!");
//     someThingElse(function() {
//         console.log("Second anonymous callback!")
//         doThirdThing(function() {
//             console.log("Third anonymous callback!");
//         })
//     })
// })

//promise
const cart = ['shoes', 'speaker'];

function createOrder(cart) {
    const promise = new Promise((resolve, reject) => {
        if (cart.length) {
            resolve('1234');
        } else {
            reject(new Error('Cart is empty'))
        }
    });
    return promise;
}
// function proceedToPayment(orderId) {
//     return new Promise((resolve, reject) => {
//         if (orderId) {
//             resolve('Payment Confirmed', 1234);
//         } else {
//             reject(new Error('Error thrown.'))
//         }
//     })
// }
// createOrder(cart).then((orderId) => {
//     console.log(orderId);
//     return orderId;
// }).then((orderId) => proceedToPayment(orderId))
//     .then((paymentInfo) => {
//         console.log(paymentInfo);
//     })
//     .catch((err) => console.log(err.mesasge));

//async await
// async function getData() {
//     const value = await createOrder([]);
//     console.log('value', value);
// }
// getData().catch((err) => console.log(err.message));
// async function getData() {
//     // return "hello";
//     return new Promise((resolve, reject) => resolve('hello world'));
// }
// getData().then((data) => console.log(data))
// console.log('fsad',getData())

 const promise1 = new Promise((resolve, reject) => {
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

// //  function getData() {
// //     promise.then((res) => {
// //         console.log('Promise res before');
// //         console.log(res);
// //     });
// //     console.log('Promise res after');
// //  }

//  async function getDataAsync() {
//     try {
//         // const apiResp = await fetch('');
//         // const apiVal = await apiResp.json();
//         const val1 = await promise1;
//         console.log('async/await res1');
//         console.log(val1);
    
//         const val2 = await promise2;
//         console.log('async/await res2');
//         console.log(val2);
//     } catch (err) {
//         console.log(err);
//     }
// }
// getDataAsync();

//slice and splice

// slice
// const cities = ["Tokyo", "Udupi", "Gkp", "Mumbai", ["agra", "Bangalore"]];
// const shallowCities = cities;
// shallowCities.push('DelhiBC');
// shallowCities[4].push("somehog");

// // const newCities = shallowCities.push('DelhiBC');
// // newCities[4].push("Delhiiii");
// // newCities.push("hello")

// console.log(cities);
// // console.log(newCities);
// console.log(shallowCities);

//splice
// const cities = ["Tokyo", "Udupi", "Gkp", "Mumbai", ["agra", "Bangalore"]];
// // const newCities = cities.splice(0);
// const helloCities = [...cities];
// helloCities[4].push('test');
// console.log(helloCities);
// console.log(cities);
// console.log(newCities);

// console.log(true && 'Hello' && 'test');
// 'use-strict';

// const obj = {
//     a: 10
// };
// for (const key in obj) {
//     console.log(key, obj[key])
// }
// for (const [key, val] of Object.entries(obj)) {
//     console.log(key, val)
// }
// // const test = obj;
// const test = Object.freeze(obj);
// obj.a = 20;
// console.log(obj)

// console.log(test)

// const arra = [1,2,3,4];
// const arra1 = [5,6];
// //spread
// const newArr = [...arra1, ...arra];
// console.log(newArr);
// //rest
// const [a, b, ...rest] = [1,2,3,4];

// console.log(a,b,...rest);

// function a() {
//     const b =10;
//     function x() {
//         console.log(b)
//     }
//     x();
// }
// a();
// console.log(b)

// function countChars(str) {
//     let op = '', count = 1;
//     for (let i = 0; i < str.length; i++) {
//         console.log('i: ', i, str[i],str[i+1], count)
//         if (str[i] === str[i+1]) {
//             count++;
//         } else {
//             op = op + count + str[i];
//             count = 1;
//         }
//     }
//     return op;
// }
// console.log(countChars('aaabbccaa'))

const input = {
    a: 1,
    b: {
      c: 2,
      d: -3,
      e: {
        f: {
          g: -4,
        },
      },
      h: {
        i: 5,
        j: 6,
      },
    }
  };
const result = {};
function flattenObject(input, parentKey) {
    for (const key in input) {
        if (typeof input[key] === 'object') {
            flattenObject(input[key], parentKey + '->' + key);
        } else {
            result[parentKey + '->' + key] = input[key];
        }
    }
    return result;
}

// function filterObject(input, parentKey) {
//     for (const key in input) {
//         if (typeof input[key] === 'object') {
//             console.log('parentKey', parentKey)
//             filterObject(input[key], key);
//         } else {
//             const len = Object.keys(input).length;
//             if (input[key] < 0) {
//                 delete input[key];
//             }
//         }
//     }
//     return input;
// }

function filterObject(obj) {
    if (typeof obj !== 'object' ) {
      // Base case: if obj is not an object, return the value if it's greater than 0
      return obj > 0 ? obj : undefined;
    }
    
    // if (Array.isArray(obj)) {
    //   // If obj is an array, filter its elements
    //   return obj.map(item => filterObject(item));
    // }
    
    // If obj is an object, iterate through its keys and filter each value
    const result = {};
    for (const key in obj) {
      const filteredValue = filterObject(obj[key]);
      if (filteredValue !== undefined) {
        // Add the key-value pair to the result if the filtered value is not undefined
        result[key] = filteredValue;
      }
    }
    console.log("res:", result)
    // return result;
    return Object.keys(result).length > 0 ? result : undefined; // Return undefined if no keys remain
  }
  
//   const input = {
//     a: 1,
//     b: {
//       c: 2,
//       d: -3,
//       e: {
//         f: {
//           g: -4,
//         },
//       },
//       h: {
//         i: 5,
//         j: 6,
//       },
//     }
//   };
  
//   const filteredInput = filterObject(input);
//   console.log(filteredInput);
  
// let res = filterObject(input, '');
// res = Object.fromEntries(Object.entries(res).filter(([key, val]) => {
//     return val > 0;
//     console.log("item", key, val)
// }))
// const obj = Object.fromEntries(Object.entries(input));
// console.log("Filter Object: ", res)
// console.log("Filter Object: ", obj)

// console.log("Flatten Object: ", flattenObject(input, 'input'))

// function sum(a) {
//     return function(b) {
//         return b ? sum(a+b) : a;
//     }
// }
// var add = sum(5);
// console.log(add(2)(3)(4)(5)());


function decimal2Binary(num) {
    op = '';
    while (num > 0) {
        op += num % 2;
        num = Math.floor(num / 2);
    }
    return op.split('').reduce((acc, curr) => curr + acc, '');
}
// console.log(decimal2Binary(5))

function factorial(num) {
    let product = 1;
    while (num > 0) {
        product *= num;
        num--;
    }
    return product;
}
// console.log(factorial(5))

function gcd(a, b) {
    let res = Math.min(a, b);
    while (res > 0) {
        if (a % res === 0 && b % res === 0) {
            return res;
        }
        res--;
    }
}
// console.log(gcd(60, 30))


function myPow(x, y) {
    let product = 1;
    while (y > 0) {
        product *= x;
        y--;
    }
    return product;
}
// console.log(myPow(2, 30))


function binary2decimal(binary) {
    const binStr = String(binary);
    let ei = binStr.length - 1;
    let count = 0, sum = 0;
    while (ei >= 0) {
        sum += (Number(binStr[ei]) * myPow(2, count++));
        ei--;
    }
    return sum;
}
// console.log(binary2decimal('111'))

// function fibonacci(num, cache) {
//     if (cache[num]) return cache[num];
//     return cache[num] = fibonacci(num-1, cache) + fibonacci(num-2, cache);
// }
// // console.log(fibonacci(4, [1,1]));

// function shuffleArray(input) {
//     let currInd = input.length;
//     while (currInd !== 0) {
//         const randomInd = Math.floor(Math.random() * currInd);
//         currInd--;
//         [input[currInd], input[randomInd]] = [input[randomInd], input[currInd]];
//     }
//     return input;
// }
// console.log(shuffleArray([1,2,3,4,20]))

let obj = {
    a: [1,2,3,4],
    b: 6,
    name: 'Kundan',
    address: 'Udupi'
}
const newObj = Object.freeze(obj);
obj.a.push(9);
newObj.b = 10;
newObj.a.push(90);

console.log('obj ', obj);
console.log('newObj ', newObj);

// Object.seal(obj);
// obj.hello = 'sexy';
// // obj = null;
// obj.a.push(9);
// obj.b = 10;
// delete obj.b; //prevents delete

// Object.defineProperties(obj, {
//     name: {
//         writable: false
//     },
//     a: {
//         writable: false
//     }
// })
// Object.defineProperty(obj, 'address', {
//     writable: false
// })
// obj.name = 'Pandu';
// obj.address = "";

// console.log('obj ', obj);

//curriedFn
// const sumArr = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
// function sum(...a) {
//     let op = sumArr(a);
//     return function(...b) {
//         let op1 = sumArr(b);
//         return b.length ? sum(op + op1) : op;
//     }
// }
// console.log(sum(1,2)(5)(3,6,7)());

// const curry = (fn) => {
//     const curried = (...args) => {
//         if (args.length >= fn.length) {
//             return fn(...args);
//         } else {
//             return (...nextArgs) => curried(...args, ...nextArgs);
//         }
//     }
//     return curried;
// }
// const sum = (a,b,c,d) => (a + b + c + d);
// const curriedSum = curry(sum);
// console.log(curriedSum(1, 2));
// console.log(curriedSum(1)(2)(3)(4));

const job1 = (cb) => {

    setTimeout(() => {
  
      cb("first");
  
    }, 500);
  
  };
  
  const job2 = (cb) => {
  
    setTimeout(() => {
  
      cb("second");
  
    }, 30);
  
  };
  
  const job3 = (cb) => {
  
    setTimeout(() => {
  
      cb("third");
  
    }, 900);
  
  };
  
  const jobs = [
  
    job1,
  
    job2,
  
    job3
  
  ];
  
  
  const asyncMap = (jobs, done) => {
    let len = jobs.length;
    let completedJobs = 0;
    let op = [];
    jobs.forEach((job, index) => {
        job((resp) => {
            op[index] = resp;
            completedJobs++;
            if (completedJobs === len) {
                done(op);
            }
        });
    })
        
        
       
  
  };
  
   
  
  asyncMap(jobs, (results) => {
    console.log("Final result: ", results);
  
  });
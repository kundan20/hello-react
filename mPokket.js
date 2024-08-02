// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Resolved');
//     }, 5000)
// });
// promise.then((resp) => {
//     console.log(resp);
// }).catch((err) => console.log(err));

// obj.initializeVal(5).add(5).subtract(5).result();

// class Calculation {
//     constructor(val) {
//         this.currVal = val;
//     }

//     initializeVal =  (value) => {
//         this.currVal = value;
//         // return new Calculation(this.currVal);
//     }

//     add = (value) => {
//         this.currVal = this.currVal  + value;
//         // return new Calculation(this.currVal);
//     }

//     subtract = (value) => {
//         this.currVal -= value;
//         return new Calculation;
//     }

//     result = () => {
//         console.log("Result: ", this.currVal);
//     }
// }

// const obj = new Calculation(0);

// obj.initializeVal(5);
// obj.add(5);
// obj.result();

// function mPokket() {
//     var currVal = 0;

//      this.initializeVal = function(value) {
//         currVal = value;
//         return this;
//     }

//     this.add = function(value) {
//         currVal = currVal + value;
//         return this;
//     }

//      this.subtract = function(value) {
//         currVal = currVal - value;
//         return this;
//     }

//      this.result = function() {
//         console.log("Result: ", currVal);

//     }

// }
// const obj = new mPokket();
// obj.initializeVal(5).add(5).subtract(5).result();


// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

function count(arr, mid) {
    const n = arr.length;
    let count = 0;
    for(let i = 0; i < n; i++) {
        if (arr[i] >= mid) {
            count++;
        }
    }
    return count;
}
function kthLargestEle(arr, k) {
    const n = arr.length;
    let low = 1000000, high = -1;

    for(let i = 0; i < n; i++) {
        low = Math.min(low, arr[i]);
        high = Math.max(high, arr[i]);
    }


    while(low < high) {
        let mid = Math.floor((low + high)/2);
        // console.log("low mid high ", low, mid, high);
        if (count(arr, mid) > k) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return high;
}
console.log("Hello ", kthLargestEle([3,2,3,1,2,4,5,5,6], 4));
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

function fibonacci(num, cache) {
    if (cache[num]) return cache[num];
    return cache[num] = fibonacci(num-1, cache) + fibonacci(num-2, cache);
}
// console.log(fibonacci(4, [1,1]));

function shuffleArray(input) {
    let currInd = input.length;
    while (currInd !== 0) {
        const randomInd = Math.floor(Math.random() * currInd);
        currInd--;
        [input[currInd], input[randomInd]] = [input[randomInd], input[currInd]];
    }
    return input;
}
// console.log(shuffleArray([1,2,3,4,20]))

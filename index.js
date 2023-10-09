// Biggie Size Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].

const makeItBig = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            arr[i] = "big";
        }
    }
    return arr;
};

console.log(makeItBig([-1, 3, 5, -5]));

// Print Low, Return High Create a function that takes array of numbers. The function should print the lowest value in the array, and return the highest value in the array.

const printLow = (arr) => {
    let highest = arr[0];
    let lowest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i];
        }
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
    }
    console.log(lowest);
    return highest;
};
console.log(printLow([-4, 8, 12, 80, -5]));

//  Print One, Return Another Build a function that takes array of numbers. The function should print second-to-last value in the array, and return first odd value in the array.

const printOneReturnAnother = (arr) => {
    let secondLast = arr[arr.length - 2];
    console.log(secondLast);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return arr[i];
        }
    }
};
console.log(printOneReturnAnother([2, 3, 6, 8, 29, 7]));

//  Double Vision Given array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.

const double = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
};

console.log(double([1, 2, 3]));

// Count Positives Given array of numbers, create function to replace last value with number of positive values. Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

const countPositives = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
        arr[arr.length - 1] = count;
    }
    return arr;
};

console.log(countPositives([-1, 1, 1, 1]));

// Chapter 2

// Threes and Fives Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.
//Second: Create betterThreesFives(start,end) that allows you to enter arbitrary start and end values for your range. Think of threesFives()as betterThreesFives(100,4000000).

const threesFives = () => {
    let finalSum = 0;
    for (let i = 100; i <= 4000000; i++) {
        if ((i % 3 === 0 || i % 5 !== 0) && (i % 3 !== 0 || i % 5 === 0)) {
            finalSum += i;
        }
    }
    console.log(finalSum);
};

threesFives();

const betterThreesFives = (start, end) => {
    let finalSum = 0;
    for (let i = start; i <= end; i++) {
        if ((i % 3 === 0 || i % 5 !== 0) && (i % 3 !== 0 || i % 5 === 0)) {
            finalSum += i;
        }
    }
    console.log(finalSum);
};

betterThreesFives(100, 4000000);

//  Generate Coin Change

// Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents). Accept a number of American cents, compute and print how to represent that amount with smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).

//Second: can you simplify/shorten your code? Example output, given (94): // 94 cents can be represented by: quarters:3 dimes:1 nickels:1 pennies:4

// Third: add half-dollar (50 cents) and dollar (100 cents) coins with 40 additional characters or less.

const generateCoinChange = (cents) => {
    const quarters = Math.floor(cents / 25); // 94 / 25 = 3.76  => 3
    const dimes = Math.floor((cents - quarters * 25) / 10); // 94 - (3 * 25) = 19 / 10 = 1.9 => 1
    const nickels = Math.floor((cents - quarters * 25 - dimes * 10) / 5); // 94 - (3 * 25) - (1 * 10) = 94 - 75 - 10 = 9 / 5 = 1.8 => 1
    const pennies = cents - quarters * 25 - dimes * 10 - nickels * 5; // 94 - (3 * 25) - (1 * 10) - (1 * 5) = 94 - 75 - 10 - 5 = 4;

    console.log(
        `quarters: ${quarters}, dimes: ${dimes}, nickels: ${nickels}, pennies: ${pennies}`
    );
};

generateCoinChange(94);

// Messy Math Mashup Create a function messyMath(num) that will return the following sum: add all integers from 0 up to the given num, except for the following special cases of our count value:

// 1. If current count (not num) is evenly divisible by 3, don’t add to sum; skip to the next count;

// 2. Otherwise, if current count is evenly divisible by 7, include it twice in sum instead of once;

// 3. Regardless of the above, if current count is exactly 1/3 of num, return -1 immediately. For example, if given num is 4, return 7. If given num is 8, return 34. If given num is 15, return -1.

const messyMath = (num) => {
    let sum = 0;
    // if (num % 3 === 0) return -1;
    for (let i = 0; i < num; i++) {
        if (i % 3 === 0) {
            continue;
        } else if (i % 7 === 0) {
            sum = sum + i * 2;
        } else {
            sum += i;
        }
    }
    return sum;
};
console.log(messyMath(10));

const twelveBar = () => {
    for (let i = 1; i <= 12; i++) console.log(i, "boom", "cheek", "boom");
};

twelveBar();

const fibonacci = () => {};

//Array: Min to Front Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

const minToPos = (arr) => {
    let lowestNumIdx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[lowestNumIdx] > arr[i]) {
            lowestNumIdx = i;
        }
    }
    return lowestNumIdx;
};

const minToFront = (arr) => {
    let minPos = minToPos(arr);
    for (let i = minPos; i > 0; i--) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
    }
    return arr;
};

console.log(minToFront([4, 2, 1, 3, 5]));

// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

// [1,2,3,4,5,6,7]   =>   [7,6,5,4,3,2,1]

const reverseArray = (array) => {
    let leftSide = 0;
    let rightSide = array.length - 1;

    let i = leftSide;

    while (i < rightSide) {
        let temp = array[i];
        array[i] = array[rightSide];

        array[rightSide] = temp;

        i++;
        rightSide--;
    }
    return array;
};

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));

const reverseArray2 = (array) => {
    let left = 0;
    let right = array.length - 1;

    for (let i = left; i < right; i++) {
        let temp = array[left]; // temp = 1

        array[left] = array[right]; // array[left] = 7

        array[right] = temp; // array[right] = 1

        left++;
        right--;
    }
    return array;
};

console.log(reverseArray2([1, 2, 3, 4, 5, 6, 7]));
console.log(reverseArray2([1, 2, 3, 4, 5, 6, 7, 10]));

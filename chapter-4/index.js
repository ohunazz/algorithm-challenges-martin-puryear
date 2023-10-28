// Remove Blanks Create a function that, given a string, returns all of that string’s contents, but without blanks. If given the string " Pl   ayTha  tF   u  nkyM  usi    c  ", return "PlayThatFunkyMusic".

const removeBlanks = (string) => {
    // return string.trim(" ").split(" ").join("");
    return string.split(" ").join("");
};

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
// String: Get Digits Create a JavaScript function that given a string, returns the integer made from the

function getDigitsFromString(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(parseInt(str[i]))) {
            result += str[i];
        }
    }
    return parseInt(result, 10);
}

const inputString = "0s1a3y5w7h9a2t4?6!8?0";
const result = getDigitsFromString(inputString);
console.log(result);

// Acronyms Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). Given " there's no free lunch  -  gotta pay yer way. ", return "TNFL-GPYW". Given "Live from New York, it's Saturday Night!", return "LFNYISN".

const acronyms = (str) => {
    let result = [];
    let word = str.split(" ");
    for (let i = 0; i < word.length; i++) {
        let char = word[i];

        result.push(char[0].toUpperCase());
    }
    return result.join("");
};
// console.log(acronyms(" there's no free lunch -  gotta pay yer way. "));

const countLength = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char !== " ") {
            count++;
        }
    }
    return count;
};

console.log(countLength("Honey pie, you are driving me crazy"));

// ["abc", "defg", "a", "xy"], 3; => ["abc", "defg"];

// Given anarray of string, and length(number). Return a new array, remove all strings that have less chars than length

const compareTwo = (str, num) => {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char.length >= num) {
            result.push(char);
        }
    }
    return result;
};

const filterStrings = (arr, length) => {
    return arr.filter((str) => str.length >= length);
};
console.log(compareTwo(["qgh", "kjsh", "gs"], 3));

// String: Reverse Implement reverseString(str) that, given string, returns that string with characters reversed. Given "creature", return "erutaerc". Tempting as it seems, do not use the built-in reverse()!

//   Integer to Roman Numerals Given a positive integer that is less than 4000, return a string containing that value in Roman numeral representation. In this representation, I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000. Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV.
// const dic = {
//     1: "I",
//     5: "V",
//     10: "X",
//     50: "L",
//     100: "C",
//     500: "D",
//     1000: "M",

//     4: "IV",
//     9: "IX",
//     19: "XIX",
//     40: "XL",
//     49: "XLIX"
// };

const romanNumerical = (num) => {
    let val = [1000, 500, 100, 50, 40, 20, 10, 9, 5, 4, 1];
    let roman = ["M", "D", "C", "L", "XL", "XX", "X", "IX", "V", "IV", "I"];
    let result = "";
    for (let i = 0; i < val.length; i++) {
        let char = val[i];
        while (num >= char) {
            result += roman[i];
            num -= char;
        }
    }
    return result;
};
console.log(romanNumerical(350));
console.log(romanNumerical(95));

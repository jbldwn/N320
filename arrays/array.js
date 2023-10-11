/* Array methods */

// const { log } = require("tone/build/esm/core/util/Debug");

//for each

let arr = [1, 2, 3];
arr.forEach(function (value) {
    console.log("for Each Value: ", value);
})

function doubleValues(arr) {
    var newArr = [];
    arr.forEach(function (value) {
        newArr.push(value * 2);
    })
    return newArr;
}

console.log("Double Values: ", doubleValues(arr));

/* Every */
//does every value in our array match our condition (Boolean)

/* Every returns True: */
var EveryArray = [-1, -2, -3];
var EveryFunction1 = EveryArray.every(function (value) {
    return value < 0;
})

console.log("Every Function 1: ", EveryFunction1);

/* Every returns False: */

var EveryArray2 = [-1, -2, -3];
var EveryFunction2 = EveryArray2.every(function (value) {
    return value > -2;
})

console.log("Every Function 2: ", EveryFunction2);

//Check to see if all the characters are all lowercase

function allLowerCase(str) {
    return str.split("").every(function (val) {
        return val === val.toLowerCase();
    })
}

console.log("All lower case 1: ", allLowerCase("this is a sentence"));
console.log("All lower case 2: ", allLowerCase("today is Thursday"));

//Check to see if all Array Values are arrays
function allArrays(arr) {
    return arr.every(Array.isArray);
}

console.log("All arrays 1: ", allArrays([[1, 2], ["dog", "cat"], [true, false], ["Talor Swift"]]));
console.log("All arrays 2: ", allArrays([["Bird", "Hedgehog"], [true], "Talor Swift"]));


/* (get) Some */
//does some values in our array match our condition (Boolean)
var someArray = [10, 20, 30];
var somefn1 = someArray.some(function (value) {
    return value < 20;
})
var somefn2 = someArray.some(function (value) {
    return value < 10;
})

console.log("Some Method 1: ", somefn1);
console.log("Some Method 2: ", somefn2);

function hasEvenNum(arr) {
    return arr.some(function (value) {
        return value % 2 == 0;
    })
}

console.log("Has even num1: ", hasEvenNum([1, 2, 3, 4, 5]));
console.log("Has even num2: ", hasEvenNum([1, 3, 5, 7, 9]));


/* Code challenge */
/* one */
function hasAZ(zStr) {
    return zStr.split("").some(function (val) {
        return val == "z";
    })
}

console.log("check for z case 1: ", hasAZ("every good boy"));
console.log("check for z case 2: ", hasAZ("the lazy hound"));

/* Two */
function hasOnlyOddNumbers(arr) {
    return arr.every(function (value) {
        return value % 2 !== 0;
    })
}

console.log("Has only odd num1: ", hasOnlyOddNumbers([1, 2, 3, 4, 5]));
console.log("Has only odd num2: ", hasOnlyOddNumbers([1, 3, 5, 7, 9]));

/* Filter */
// capture values greater than 2
let fArr = [1, 2, 3];

var firstFilter = fArr.filter(function (value) {
    return value > 2;
})

console.log("FirstFilter: ", firstFilter);

//only names with 4 letters

var names = ['ben', 'erin', 'jennifer', 'blake', 'john', 'jane', 'amelia', 'nougat', 'remington'];

function fourLetters(arr) {
    return arr.filter(function (value) {
        return value.length === 4;
    })
}

console.log("Four letters: ", fourLetters(names));

//filter classes greater than 300

var classes = ['N115', 'N220', 'N215', 'N320', 'N315', 'N423'];

function upperLvl(arr) {
    return arr.filter(function (value) {
        return value.substr(1, 3) >= 300;
    })
}

console.log("Class filter: ", upperLvl(classes));

//works for looking if the value is false, OR if it doesn't exist

let students = [
    { first: "Jennifer", last: "Baldwin", employed: true },
    { first: "Ben", last: "Jackson" },
    { first: "Erin", last: "Bain", employed: true },
    { first: "Blake", last: "Baldwin", employed: true },
    { first: "Taylor", last: "Swift" }
]

function filterByIndex(arr, key) {
    return arr.filter(function (obj) {
        return !obj[key];
    })
}
console.log("unemployed students: ", filterByIndex(students, 'employed'));

let students2 = [
    { first: "Jennifer", last: "Baldwin", employed: true },
    { first: "Ben", last: "Jackson", employed: false },
    { first: "Erin", last: "Bain", employed: true },
    { first: "Blake", last: "Baldwin", employed: true },
    { first: "Taylor", last: "Swift", employed: false }
]
console.log("unemployed students2: ", filterByIndex(students2, 'employed'));

/* Map */
//creating an object
let mArr = [2, 3, 4, 5, 6];
let mapArray = mArr.map(function (value, index) {
    return { key: index, value: value * value }
})
console.log("Squared: ", mapArray);

//get value from object using students2
//first names only

function firstNames(arr) {
    return arr.map(function (value) {
        return value.first;
    })
}

console.log("only first names: ", firstNames(students2));

//Value * index

function vtIndex(arr) {
    return arr.map(function (value, index) {
        return value * index;
    })
}

console.log("value * index: ", vtIndex([1, 2, 3, 4]));



let arrChal = [1, 2, 3, 4, 5];

var reduceFn = arrChal.reduce(function (accumulator, nextValue) {
    let num = nextValue * nextValue;
    console.log("num value: ", num);
    if (num % 2 == 0) {
        return accumulator + num;
    }
    return accumulator;
}, 50)

console.log("reduce function: ", reduceFn);

//rest "..."
//takes the rest of the values an dputs them in an array

function add(...nums) {
    let total = 0;
    for (const n of nums) {
        total += n;
    }

    return total
}

console.log("add function:", add(1, 3, 5, 7, 9));
/* Does not work with arrays, because it's creating an array */
console.log("add function2:", add(arrChal));

function printVal(a, b, ...c) {
    console.log("A: ", a);
    console.log("B: ", b);
    console.log("C: ", c);
}
printVal(1, 2, 3, 4, 5, 6, 7, 8, 9)
printVal(1, 2)
printVal("happy", "halloween", "candy corn", "pumkins", "spookies")

function cb(num1, num2, ...mValues) {
    let total = mValues.reduce(function (accm, next) {
        accm += next;
        return accm;
    }, 0);
    let myAvg = total / mValues.length;
    console.log("Total: ", total);
    console.log("Average: ", myAvg);
}

function higherOrder(num1, num2, cb) {
    let a = num1 + num2
    let s = num1 - num2
    let m = num1 * num2
    let d = num1 % num2

    cb(num1, num2, a, s, d, m)
}

higherOrder(4, 2, cb);

//spread
//takes an array and spreads them out to individual values

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let combine = [...arr1, ...arr2, ...arr3]

console.log("combined: ", combine);
console.log("Max Value: ", Math.max(...combine));


function sumVal(a, b, c) {
    return a + b + c;

}

console.log("sums: ", sumVal(...arr1));

//start: [1,6][2,3,4,5]
//end: [1,2,3,4,5,6]

function inMiddle(arr, vals) {
    let mid = Math.floor(arr.length / 2);
    arr.splice(mid, 0, ...vals);
    return arr;
}

console.log("placed middle: ", inMiddle([1, 6], [2, 3, 4, 5]));
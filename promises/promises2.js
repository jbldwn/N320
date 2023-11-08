// /* Thursday video */
// /* Promise ALL */

// //all promise need to be resolved to boolean true
// const p1 = new Promise(function (resolve, rejcect) {
//     setTimeout(function () {
//         console.log("First promise has resolved");
//         resolve(10)
//     }, 1000);
// })

// const p2 = new Promise(function (resolve, rejcect) {
//     setTimeout(function () {
//         console.log("Second promise has resolved");
//         resolve(20)
//     }, 2000);
// })

// const p3 = new Promise(function (resolve, rejcect) {
//     setTimeout(function () {
//         console.log("Third promise has resolved");
//         resolve(30)
//     }, 3000);
// })

// Promise.all([p1, p2, p3]).then(function (results) {
//     console.log(`Results: ${results}`)
// })

/* Promise All, but one rejects */
const p4 = new Promise(function (resolve, rejcect) {
    setTimeout(function () {
        console.log("Reject example: first promise has resolved");
        resolve(40)
    }, 1000)
})
const p5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Reject example: second promise has rejected");
        reject(50)
    }, 2000)
})
const p6 = new Promise(function (resolve, rejcect) {
    setTimeout(function () {
        console.log("Reject example: third promise has resolved");
        resolve(60)
    }, 3000)
})

Promise.all([p4, p5, p6]).then(function (value) {
    console.log(value);
}).catch(function (value) {
    console.log(value);
})

/* Promise ANY */
// as long as any of them resolve, the promise will be fullfilled. 

const p10 = new Promise((resolve, rejcect) => {
    setTimeout(() => {
        console.log("Any Promise: 1 is resolved");
        resolve(10)
    }, 1000);
});

const p11 = new Promise((resolve, rejcect) => {
    setTimeout(() => {
        console.log("Any Promise: 2 is resolved");
        resolve(11)
    }, 2000);
});

const p12 = new Promise((resolve, rejcect) => {
    setTimeout(() => {
        console.log("Any Promise: 3 is resolved");
        resolve(12)
    }, 3000);
});

const pAny = Promise.any([p10, p11, p12]);
pAny.then((value) => {
    console.log("any promise: Returned");
    console.log(value);
}).catch((value) => {
    console.log("any promise: rejected" + value);
})
/* rejected first promise */
const p20 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Any Promise: 1 is resolved");
        reject(20)
    }, 1000);
});

const p21 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Any Promise: 2 is resolved");
        reject(21)
    }, 2000);
});

const p22 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Any Promise: 3 is resolved");
        reject(22)
    }, 3000);
});

const pAny2 = Promise.any([p20, p21, p22]);
pAny2.then((value) => {
    console.log("any2 promise: Returned");
    console.log(value);
}).catch((value) => {
    console.log("any2 promise: rejected " + value);
})
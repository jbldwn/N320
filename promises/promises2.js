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
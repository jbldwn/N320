//working the DOM

//Return one element: querySelector
document.querySelector('div ul li:first-child').innerHTML = 'querySelector';

//more generic querySelector
document.querySelector('.my').innerHTML = 'querySelector p ';

//Grab a list
//getElementsByClassName('my');

document.getElementsByClassName("my")[1].innerHTML += "class name";

//get Elemnts by TagName
document.getElementsByTagName("li")[1].innerHTML += "Second List Item";


//query selector all
document.querySelectorAll('body>ul>li')[0].innerHTML = "querySelectorAll";


//single values:
//getElmentByID
//querySelector

//Lists:
//getElementsByClassName
//getElementsByTagName
//querySelectorAll


//callback example

//function to be called back
function callBack(){
    console.log("this is a callback function.")
}

//creating a function taking in a variable
function higherOrder(newFn){
    console.log("Before calling funciton");
    //set up variable as function
    newFn();
    console.log("After Callback function");
}

//call init function, with the function to be called back
higherOrder(callBack);

//another callback example

function firstFn(msg){
    alert(msg);
}

function middleFn(msg){
    console.log(msg);
}

function lastFn(msg){
    return confirm(msg);
}

firstFn("First Message");
middleFn("Middle Message");
lastFn("Last Message");


//arrow function
//same as:
// function StartFunction(msg, mfn){}
const startFunction = (msg, mfn)=>{
    msg += '1 ';
    alert(msg);
    mfn(msg, endFunction);
}

const nextFunction = (msg, eFn)=>{
    msg += '2 ';
    console.log(msg);
    eFn(msg);
}

const endFunction = (msg)=>{
    msg += '3';
    return confirm (msg);
}
// last function could be written as:
// const endFunction=(msg)=>confirm(msg);
//only works with single line code functions

startFunction("Callback message...", nextFunction);

const costTable = (subT, tip, tax, total) =>{
    let taxMoney = tax.toFixed(2);
    
    let createTable = `
    <ul>
        <li>SubTotal: ${subT}</li>
        <li>Tip: ${tip}</li>
        <li>Tax: ${taxMoney}</li>
        <li>Total: ${total}</li>
    </ul>`;
    document.write(createTable);
}

const calcTotal = (subT, tip, callback, taxRate=0.07) =>{
    let tax = (subT * taxRate)
    let total = subT + tax + tip;
    total = total.toFixed(2);
    
    callback(subT, tip, tax, total);
}

calcTotal(34.95, 10.50, costTable);

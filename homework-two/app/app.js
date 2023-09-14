/* 
Using your knowledge of targeting elements WITHOUT using IDs, add the information above to your HTML WITHOUT using IDs.

No special identifiers, use query selectors

You will create a higher order function that will take in two numeric parameters and a callback function.

The higher order function will find the arithmetic values of addition, subtraction, multiplication and division of the two numbers. 

You will use these values in your callback function and go through the values to find the average of all the values. 

Use the data from your functions to display the information listed above. 
*/


// fctn to be called back
/* Student created callback function to calculate total and average. */
function toBeCalled( avg, ttl ){
    console.log("callback called")
    /* prnt to page */
document.querySelectorAll('p')[1].innerHTML = `Average:  ${avg}`;
document.querySelectorAll('p')[2].innerHTML = `Total:  ${ttl}`;

}

/* Student created higher order function and added the appropriate code to calculate all arithmetic functions. Higher order function also included callback as a parameter. */
function higherOrder(callback){
    let num1 = parseInt(document.querySelectorAll("input")[0].value);
    let num2 = parseInt(document.querySelectorAll("input")[1].value);
    
    const total = num1 + num2;
    const average = (total)/2;

    //send numbers
    //  to callback for calculation
    callback( average, total)

    /* Student targeted HTML elements without using IDs to display data. */
    //add to page
}


/* insert numeric inputs on HTML */
document.querySelectorAll('p')[0].innerHTML = "<input type='number' /><input type='number' /><button onclick='higherOrder(toBeCalled)'>calculate</button>";





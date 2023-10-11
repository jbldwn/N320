
/* __  In your javascript file, you will create a promise that fetch data from the API.  */
const quoteFetch = new Promise(function (resolving, rejecting) {
    setTimeout(function () {
        const fetchedQuote = fetch("https://api.quotable.io/quotes?limit=20")
            /* __  Once the data is returned successfully, don't forget to parse it as JSON. */
            .then((response) => response.json())

        resolving(fetchedQuote);
    }, 2000);
})

/* __  Create another async function that takes the fetched data and displays it in the HTML container you created in index.html. You can use template literals or any other method to format and display the data. */

quoteFetch.then(function (data) {

    let quotes = data.results;

    let quoteWall = document.getElementsByTagName('body');

    quotes.forEach(quote => {
        let printedQuote = `<div class="quote">
        <p>"${quote.content}"</p><span>-${quote.author}</span></div>`
        quoteWall[0].innerHTML += printedQuote;

    });
})

/* __  If the promise is rejected, have the console.log display the following text through a new Error object: Failed to fetch data. Also have the error message display on your page to give your users some feedback. */
quoteFetch.then(function () {
    // resolved
    console.log("quote fetch successful");
}, function () {
    let errorObj = {
        "errorMSG": "Failed to fetch data",
    }
    // rejected
    console.log(errorObj.errorMSG);
    document.getElementsByTagName('body').innerHTML = errorObj.errorMSG;
})


/* __   In your javascript file, you will create an async function that fetch data from the API.  */

async function getDogs() {
    /* __   If the promise is successful, you will display the data as shown below.Remember to use "await" to handle the asynchronous request. */
    //api call
    const rawDogs = await fetch("https://dog.ceo/api/breeds/image/random/20");
    /* __   Once the data is returned successfully, don't forget to parse it as JSON.  */
    //format into json
    const dogs = await rawDogs.json();

    return dogs;
}

/* __   Create another async function that takes the fetched data and displays it in the HTML container you created in index.html.You can use template literals or any other method to format and display the data. */

getDogs().then((data) => {

    let dogs = data.message;

    let daBois = document.getElementsByTagName("body");
    daBois[0].innerHTML += `<div id="dogWall"></div>`
    let wallOfFame = document.getElementById("dogWall");



    dogs.forEach(dog => {
        let goodboi = `<img src="${dog}" alt="best boi"/>`;

        wallOfFame.innerHTML += goodboi;
    });
})


/* __   If the promise is rejected, have the console.log display the following text through a new Error object: Failed to fetch data.Also have the error message display on your page to give your users some feedback.  */
getDogs().then(function () {
    // resolved
    console.log("quote fetch successful");
}, function () {
    // rejected
    let errorObj = {
        "errorMSG": "Failed to fetch data",
    }
    // rejected
    console.log(errorObj.errorMSG);
    document.getElementsByTagName('body').innerHTML = errorObj.errorMSG;
})

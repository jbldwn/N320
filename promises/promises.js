/* 3 states of promises: 
    pending, fulfilled, rejected */

    let basicPromise = new Promise(function(resolve, rejected){
        /* change x to 10 for "resolved" */
        let x=12;
        if(x==10){
            resolve();
        }else{
            rejected();
        }
    })

    basicPromise.then(function(){
        /* .then will only work if the promise is resolved */

        document.write("Basic Promise Resolvded");
    }, function(){
        /* this function will run if it's rejected */
        document.write("Basic Promise is rejected");
    })
    
    /* Using "Catch" */
    const cPromise = new Promise(function(resolve, reject){
        let newNum = Math.random();
        if(newNum<0.5){
            resolve(newNum);
        } else {
            reject(newNum);
        }
    })

    cPromise.then(function(num){
        /* resolved promise */
        console.log("Promise Resolved, ", num );
    }).catch(function(num){
        /* rejected promise */
        console.log("Promise Rejected, ", num);
    })


    /* Promise with a setTimeout */
    const rNumPromsie = new Promise(function(resolving, rejecting){
        setTimeout(function(){
            /* math.floor allows for 0 to ensure 0-9, add 1 to get 1-10, never 0 and never 11 */
            let randNum = Math.floor(Math.random()*10)+1;

                resolving(randNum);

        }, 2000);
    })

    rNumPromsie.then(function(data){
        console.log("SetTimeout Promise Resolved", data);
    })

    console.log("SetTimeout Initiated");


    /* Promise Chaining */
    const promiseChain = new Promise(function(resolve, reject){
        /* Promise fulfilled */
        resolve(5);
    });

    promiseChain.then(function(data){
        return data*2;
    }).then(function(data){
        return data+20;
    }).then(function(data){
        console.log("chained promise",data);
    })

    /* Data from an external source */

    const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
    //should have a timeout because it would wait forever, AKA pergatory

    console.log("Fetched Promise: ", fetchPromise);

    fetchPromise.then(function(response){

        const jPromise = response.json();
        console.log("Fetched Promise: ", jPromise);

        jPromise.then(function(data){
            console.log("Data Recieved",data[2].name);
        })

    })

    /* Promise ALL */
    /* Promise ANY */
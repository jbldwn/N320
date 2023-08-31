// music list

let genres = ["country", "rock", "R&B", "Pop", "Taylor Swift" ];

// for (let i = 0; i < genres.length; i++) {
//     const element = genres[i];
//     console.log(element);
// }

for(type of genres){
    console.log(type);
}

//music Preference

document.querySelectorAll('p')[1].innerHTML = "My favorite genre of music is " + genres[4] + ".";

//animals
function animals (breed, color){
    document.getElementById("animals").innterHTML += "I have a " + breed + ""
}

//name and color
function getName(){
    var userName = document.getElementById("myName").value;
    var color = prompt("Welcome " + userName + "! What is your favorite color?");
    document.getElementsByTagName('body')[0].style.backgroundColor=color;
}

//numbers
function getNumber(){
    var userNum = document.getElementById("numPick").value;
    do{
        if(userNum>=7){
            if(userNum%7==0){
                alert(userNum + " is the first number divisible by 7.");
                break;
            }
            console.log("not yet...");
            userNum--;
        } else{
            alert("No matches");
        }

    } while(userNum<7)
}

document.getElementsByTagName('button')[0].addEventListener('click', getNumber)
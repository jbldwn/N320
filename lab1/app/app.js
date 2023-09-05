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

document.querySelectorAll('p')[2].innerHTML = "My favorite genre of music is " + genres[4] + ".";

//animals

let pets = ["German Daschund", "Cat", "Cat"];

let title =["Remington", "Amelia", "Nougat"]
let coats = ["A Red Boar Hair", "Delute Calico", "Delute Tortie"];

function animals (breed, name, color){
    document.getElementById("animals").innerHTML += "I have a " + breed + ", named "+ name + ", that is " + color + ". <br>";

    // console.log( breed + name + color);
}

for (let i = 0; i < pets.length; i++) {
    const animal = pets[i];
    const name = title[i];
    const coat = coats[i];

    animals(animal, name, coat);
    
}

//name and color

function changeColor(color){
    document.getElementsByTagName('body')[0].style.backgroundColor = color;
}

function prompt(message){
    document.getElementById('prompt').innerHTML = message;
}
function getName(){
    //establish elements
    var userName = document.getElementById("myName");
    var userColor = document.getElementById("color");

    //change prompt
    var color = prompt("Welcome " + userName.value + "! What is your favorite color?");

    //update inputs
    userName.style.display = "none";
    userColor.style.display = "block";

    //updatelistener
    document.getElementsByTagName('button')[0].addEventListener('click', changeColor(userColor.value));
}

document.getElementsByTagName('button')[0].addEventListener('click', getName);

//numbers
function getNumber(){
    var userNum = document.getElementById("numPick").value;
    do{
        if(userNum>=7){
            if(userNum%7==0){
                alert(userNum + " is divisible by 7.");
                break;
            }
            alert("not yet...");
            userNum--;
        } else{
            alert("No matches");
        }

    } while(userNum<7)
}

document.getElementsByTagName('button')[1].addEventListener('click', getNumber)
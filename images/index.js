var randomNumber1 = Math.random(); // here we create a random number 

randomNumber1 = randomNumber1 * 6; // here we multiply it with 6 but it will be 5.9499484

randomNumber1 = Math.floor(randomNumber1) + 1 //here we add 1 to make it six so that when its being called it can reach 6


var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImage = "images/" + randomDiceImage;

var image = document.querySelectorAll("img")[0];

image.setAttribute("src", randomImage); //src is our target and randomimage is wat we want to replace the text
//so set attribute is for removing and replacing elements in the html tag
//then we insert in the image of the second player

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player One wins🚩";

} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "PLayer two wins 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
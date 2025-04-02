var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
console.log(randomNumber2);

// this will return all imag inside div
// in a NodeList which can be accessed by NodeList[0, 1, so on....] .
var DiceImages = document.querySelectorAll("div img"); 

var firstDiceLoc = DiceImages[0].getAttribute("src");
console.log(firstDiceLoc)

var secondDiceLoc = DiceImages[1].getAttribute("src");
console.log(secondDiceLoc)

var newFirstDiceImageLoc = "images/dice" + randomNumber1 + ".png";
var newSecondDiceImageLoc = "images/dice" + randomNumber2 + ".png";

DiceImages[0].setAttribute("src", newFirstDiceImageLoc);
DiceImages[1].setAttribute("src", newSecondDiceImageLoc);

var newFirstDiceImage = DiceImages[0].getAttribute("src");
var newSecondDiceImage = DiceImages[1].getAttribute("src");

console.log(newFirstDiceImage);
console.log(newSecondDiceImage);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 WON";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 WON";
} else {
    document.querySelector("h1").innerHTML = "DRAW !";
}

// ----

// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);


// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// //If player 1 wins
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
// }
// else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// }
// else {
//   document.querySelector("h1").innerHTML = "Draw!";
// }

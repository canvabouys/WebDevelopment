var name = prompt("What's your name?");
var firstLetter = name.slice(0,1).toUpperCase();
var remainingLetters = name.slice(1 ,name.length).toLowerCase();

alert("Hello, " + firstLetter + remainingLetters);
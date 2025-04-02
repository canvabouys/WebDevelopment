var noOfDrums = document.querySelectorAll(".drum").length ;

console.log(noOfDrums);

// Listen to Mouse Clicks
for (var i = 0; i < noOfDrums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var drumInnerHTML = this.innerHTML;
        makeSound(drumInnerHTML);
        buttonAnimation(drumInnerHTML);
    });
}

// Listen to Keyboard Presses
document.addEventListener("keydown", function(event) {
    // document.addEventListener("keypress", function(event) {
        makeSound(event.key)
        buttonAnimation(event.key);
});

// function to make Souncs on both clicks and presses.
function makeSound(key) {

    switch (key) {
        case "w" :
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();

        case "a" :
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();

        case "s" :
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();

        case "d" :
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();

        case "j" :
            var snare = new Audio("sounds/snare.mp3");
            snare.play();

        case "k" :
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        
        case "l" :
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
        
        default: 
            console.log(key);
    }
}

function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key); // '.w'  , '.s' so on

    activeButton.classList.add("pressed")
    setTimeout( function() {
        activeButton.classList.remove("pressed")
    } , 100);
}
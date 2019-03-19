

//create a random number 1 to 6, yse multiple
var randonNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randonNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;//images/dice1.png to png.5
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",  randomImageSource);

// second way to creat a random number 
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(randonNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML ="Play 1 wins";
}
else if( randomNumber2 > randonNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}



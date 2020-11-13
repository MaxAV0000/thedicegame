var diceone = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]
var dicetwo = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]

var random;
random1 = Math.round(5*Math.random());
random2 = Math.round(5*Math.random());

document.getElementById("diceone").setAttribute("src", diceone[random1]);
document.getElementById("dicetwo").setAttribute("src", dicetwo[random2]);

if(random1 < random2){
  document.getElementById("result").innerHTML="PLAYER 2 WINS 🤩";
}
else if(random1 > random2){
  document.getElementById("result").innerHTML="PLAYER 1 WINS 🤩";
}
else {
  document.getElementById("result").innerHTML="DRAW";
}

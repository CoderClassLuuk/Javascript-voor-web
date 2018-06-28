var newColor = document.getElementsByClassName("invoer");

var kleuren = ["red", "blue", "yellow"]

function colorChange(){
  newColor[0].style.backgroundColor = kleuren[Math.floor(Math.random()*kleuren.length)];
  newColor[1].style.backgroundColor = kleuren[Math.floor(Math.random()*kleuren.length)];
}

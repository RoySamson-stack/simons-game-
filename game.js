var buttonColors = ["red", "blue", "green" ,"yellow"];
var gamePattern = [];

function nextSequence(){
 var randomNumber = Math.floor(Math.random() * 3);
 //get random color from array using the randomNUmber 
  var randomChosenColor = buttonColors[randomNumber];
  //push the randomChosenColor to the array
  gamePattern.push(randomChosenColor);


}
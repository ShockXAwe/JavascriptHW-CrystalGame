// Variables for the game to function
var numberGoal = Math.floor(Math.random() * 102) + 19;
// var userOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var userOptions = Math.floor(Math.random() * 12) + 1;
var userCount = 0;
var pylonBlue = $("#bluePylon");
var pylonGreen = $("#greenPylon");
var pylonYellow = $("#yellowPylon");
var pylonRed = $("#redPylon");

// Tieing up the HTML div with the random number being created
$("#randomNumber").text("Random number: " + numberGoal);

// for (var i = 0; i < userOptions.length; i++) {

//   pylonBlue.addClass("blue-image");

//   pylonBlue.attr("data-pylonBlue", userOptions[i]);

//   $("#bluePylon").append(pylonBlue);

// }

pylonBlue.attr("data-pylonBlue", userOptions);

$("#bluePylon").append(pylonBlue);

$("#bluePylon").on("click", function () {

  var crystalValue = ($(this).attr("data-pylonBlue"));
  crystalValue = parseInt(crystalValue);
  userCount += crystalValue;

  $("#playerScore").text("Your current amount: " + userCount);

  if (userCount === numberGoal) {
    $("#wins").text("Wins: " + 1);
    numberGoal = Math.floor(Math.random() * 102) + 19;
    userOptions = Math.floor(Math.random() * 12) + 1;
    userCount = 0;
    
  }

  else if (userCount >= numberGoal) {
    $("#lost").text("Lost: " + 1);
    numberGoal = Math.floor(Math.random() * 102) + 19;
    userOptions = Math.floor(Math.random() * 12) + 1;
    userCount = 0;
    
  }

})
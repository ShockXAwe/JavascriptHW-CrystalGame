// Variables for the game to function
var numberGoal = Math.floor(Math.random() * 102) + 19;
var userOptions = Math.floor(Math.random() * 12) + 1;
var userCount = 0
var pylonBlue = $("#bluePylon");
var pylonGreen = $("#greenPylon");
var pylonYellow = $("#yellowPylon");
var pylonRed = $("#redPylon");

// Tieing up the HTML div with the random number being created
$("#randomNumber").text("Random number: " + numberGoal);

pylonBlue.attr("data-pylonBlue", userOptions);
$("#bluePylon").append(pylonBlue);


console.log(userOptions);
console.log(numberGoal);
console.log(pylonBlue);
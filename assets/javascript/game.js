// Variables for the game to function
var numberGoal = Math.floor(Math.random() * 102) + 19;
// var userOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var userOptions = Math.floor(Math.random() * 12) + 1;
var userCount = 0;
var win = 0;
var lost = 0;
var pylonBlue = $("#bluePylon");
var pylonGreen = $("#greenPylon");
var pylonYellow = $("#yellowPylon");
var pylonRed = $("#redPylon");

// Tieing up the HTML div with the random number being created
$("#randomNumber").text("Random number: " + numberGoal);



pylonBlue.attr("data-pylonBlue", userOptions);

$("#bluePylon").append(pylonBlue);

$("#bluePylon").on("click", function () {

  var crystalValue = ($(this).attr("data-pylonBlue"));
  crystalValue = parseInt(crystalValue);
  userCount += crystalValue;

  $("#playerScore").text("Your current amount: " + userCount);

  if (userCount === numberGoal) {
    countWinOrLoss('win')
  }

  else if (userCount > numberGoal) {
    countWinOrLoss('loss')
  }

})
// Function created for Win or Loss
function countWinOrLoss(result) {
  // If win do below
  if (result === 'win') {
    win++;
    $("#wins").text("Wins: " + win);
    // If loss do below
  } else if (result === 'loss') {
    lost++;
    $("#lost").text("Lost: " + lost);
  }
  // This happens below to both win and loss since its not in the if and else if.
  var newNumberGoal = Math.floor(Math.random() * 102) + 19;
  $("#randomNumber").text("Random number: " + newNumberGoal);
  userOptions = Math.floor(Math.random() * 12) + 1;
  var newUserOption = Math.floor(Math.random() * 12) + 1;
  pylonBlue.attr("data-pylonBlue", newUserOption);
  $("#bluePylon").append(pylonBlue);

  userCount = 0;
  numberGoal = newNumberGoal;
}
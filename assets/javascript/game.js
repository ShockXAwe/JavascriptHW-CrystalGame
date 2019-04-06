// Variables for the game to function
var numberGoal = Math.floor(Math.random() * 102) + 19;
// var userOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var userOptionsBlue = Math.floor(Math.random() * 12) + 1;
var userOptionsGreen = Math.floor(Math.random() * 12) + 1;
var userOptionsYellow = Math.floor(Math.random() * 12) + 1;
var userOptionsRed = Math.floor(Math.random() * 12) + 1;
var userCount = 0;
var win = 0;
var lost = 0;
var pylonBlue = $("#bluePylon");
var pylonGreen = $("#greenPylon");
var pylonYellow = $("#yellowPylon");
var pylonRed = $("#redPylon");

// Tieing up the HTML div with the random number being created
$("#randomNumber").text("Random number: " + numberGoal);

// Add attr name data-pylonBlue and the random numbers variable to pylonBlue
pylonBlue.attr("data-pylonBlue", userOptionsBlue);
// Append to the ID bluePylon which already has the attributes as added above
$("#bluePylon").append(pylonBlue);

pylonGreen.attr("data-pylonGreen", userOptionsGreen);
$("#greenPylon").append(pylonGreen);

pylonYellow.attr("data-pylonYellow", userOptionsYellow);
$("#yellowPylon").append(pylonYellow);

pylonRed.attr("data-pylonRed", userOptionsRed);
$("#redPylon").append(pylonRed);


// Create the function if you click on bluePylon
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

$("#greenPylon").on("click", function () {

  var crystalValue = ($(this).attr("data-pylonGreen"));
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

$("#yellowPylon").on("click", function () {

  var crystalValue = ($(this).attr("data-pylonYellow"));
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

$("#redPylon").on("click", function () {

  var crystalValue = ($(this).attr("data-pylonRed"));
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
    // userCount = 0;
    $("#wins").text("Wins: " + win);
    alert("Nice job! You win!")
    // If loss do below
  } else if (result === 'loss') {
    lost++;
    // userCount = 0;
    alert("GG you lose!")
    $("#lost").text("Losses: " + lost);
  }
  // This happens below to both win and loss since its not in the if and else if.
  var newNumberGoal = Math.floor(Math.random() * 102) + 19;
  $("#randomNumber").text("Random number: " + newNumberGoal);

  userOptionsBlue = Math.floor(Math.random() * 12) + 1;
  var newUserOptionBlue = Math.floor(Math.random() * 12) + 1;

  userOptionsGreen = Math.floor(Math.random() * 12) + 1;
  var newUserOptionGreen = Math.floor(Math.random() * 12) + 1;

  userOptionsYellow = Math.floor(Math.random() * 12) + 1;
  var newUserOptionYellow = Math.floor(Math.random() * 12) + 1;

  userOptionsRed = Math.floor(Math.random() * 12) + 1;
  var newUserOptionRed = Math.floor(Math.random() * 12) + 1;

  pylonBlue.attr("data-pylonBlue", newUserOptionBlue);
  $("#bluePylon").append(pylonBlue);

  pylonGreen.attr("data-pylonGreen", newUserOptionGreen);
  $("#greenPylon").append(pylonGreen);

  pylonYellow.attr("data-pylonYellow", newUserOptionYellow);
  $("#yellowPylon").append(pylonYellow);

  pylonRed.attr("data-pylonRed", newUserOptionRed);
  $("#redPylon").append(pylonRed);



  userCount = 0;
  $("#playerScore").text("Your total score: " + userCount);
  numberGoal = newNumberGoal;
}

// function countWinOrLossGreen(result) {
//   // If win do below
//   if (result === 'win') {
//     win++;
//     $("#wins").text("Wins: " + win);
//     // If loss do below
//   } else if (result === 'loss') {
//     lost++;
//     $("#lost").text("Lost: " + lost);
//   }
//   // This happens below to both win and loss since its not in the if and else if.
//   var newNumberGoal = Math.floor(Math.random() * 102) + 19;
//   $("#randomNumber").text("Random number: " + newNumberGoal);
//   userOptionsGreen = Math.floor(Math.random() * 12) + 1;
//   var newUserOption = Math.floor(Math.random() * 12) + 1;

//   pylonGreen.attr("data-pylonGreen", newUserOption);
//   $("#greenPylon").append(pylonGreen);

//   userCount = 0;
//   numberGoal = newNumberGoal;
// }

// function countWinOrLossYellow(result) {
//   // If win do below
//   if (result === 'win') {
//     win++;
//     $("#wins").text("Wins: " + win);
//     // If loss do below
//   } else if (result === 'loss') {
//     lost++;
//     $("#lost").text("Lost: " + lost);
//   }
//   // This happens below to both win and loss since its not in the if and else if.
//   var newNumberGoal = Math.floor(Math.random() * 102) + 19;
//   $("#randomNumber").text("Random number: " + newNumberGoal);
//   userOptionsYellow = Math.floor(Math.random() * 12) + 1;
//   var newUserOption = Math.floor(Math.random() * 12) + 1;

//   pylonYellow.attr("data-pylonYellow", newUserOption);
//   $("#yellowPylon").append(pylonYellow);

//   userCount = 0;
//   numberGoal = newNumberGoal;
// }

// function countWinOrLossRed(result) {
//   // If win do below
//   if (result === 'win') {
//     win++;
//     $("#wins").text("Wins: " + win);
//     // If loss do below
//   } else if (result === 'loss') {
//     lost++;
//     $("#lost").text("Lost: " + lost);
//   }
//   // This happens below to both win and loss since its not in the if and else if.
//   var newNumberGoal = Math.floor(Math.random() * 102) + 19;
//   $("#randomNumber").text("Random number: " + newNumberGoal);
//   userOptionsRed = Math.floor(Math.random() * 12) + 1;
//   var newUserOption = Math.floor(Math.random() * 12) + 1;

//   pylonRed.attr("data-pylonRed", newUserOption);
//   $("#redPylon").append(pylonRed);

//   userCount = 0;
//   numberGoal = newNumberGoal;
// }
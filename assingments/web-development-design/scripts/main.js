var points = 0;

// Question One Function
function questionOne() {
  var input = document.getElementById("questionOneIn").value.toUpperCase(); // User input
  var element = document.getElementById("questionOne"); // element id
  console.log(`Question one output = ${input}.`); // Gives the output of the input into the console to make sure it gives the correct output.

  if (input == "RHOMBUS") {
    points++;
    document.getElementById(
      "resultOne"
    ).innerHTML = `Correct, your score is currently: ${points}`;
    document.getElementById("questionOneFrm").style.backgroundColor = "green"; // Changes the colour of the form (element) background to green if correct.
    element.classList.add("frm-correct"); // Another way of changing background colour (this adds a class to the element)
  } else {
    document.getElementById("resultOne").innerHTML =
      "You didn't get the answer correct! You missed out on 1 point.";
    document.getElementById("questionOneFrm").style.backgroundColor = "red"; // Changes the colour of the form (element) background to red if incorrect.
    element.classList.add("frm-incorrect"); // Another way of changing background colour (this adds a class to the element)
  }
  document.getElementById("submitBtnOne").disabled = true; // Disables the button after submitting.
}

// Question Two Function
function questionTwo() {
  var input = document.getElementById("questionTwoIn").value.toUpperCase();
  console.log(`Question two output = ${input}.`); // Gives the output of the input into the console to make sure it gives the correct output.

  if (input == "TETRAHEDRON") {
    points++;
    document.getElementById(
      "resultTwo"
    ).innerHTML = `Correct, your score is currently: ${points}`;
    document.getElementById("questionTwoFrm").style.backgroundColor = "green"; // Changes the colour of the form background to green if correct.
  } else {
    document.getElementById("resultTwo").innerHTML =
      "You didn't get the answer correct! You missed out on 1 point.";
    document.getElementById("questionTwoFrm").style.backgroundColor = "red"; // Changes the colour of the form (element) background to red if incorrect.
  }
  document.getElementById("submitBtnTwo").disabled = true; // Disables the button after submitting.
}

// Question Three Function
function questionThree() {
  var inputOne = document.getElementById("questionThreeA").value;
  console.log(`Question three A output = ${inputOne}.`); // Gives the first output of the input into the console to make sure it gives the correct output.
  var inputTwo = document.getElementById("questionThreeB").value;
  console.log(`Question three B output = ${inputTwo}.`); // Gives the second output of the input into the console to make sure it gives the correct output.

  const answerOne = "oblong";
  const answerTwo = "rectangle";

  if (
    (inputOne == answerOne && inputTwo == answerTwo) ||
    (inputOne == answerTwo && inputTwo == answerOne)
  ) {
    points = points + 2;
    document.getElementById(
      "resultThree"
    ).innerHTML = `Correct, your score is currently: ${points}`;
    document.getElementById("questionThreeFrm").style.backgroundColor = "green"; // Changes the colour of the form background to green if correct.
  } else {
    document.getElementById("resultThree").innerHTML =
      "You didn't get the answer correct! You missed out on 2 points.";
    document.getElementById("questionThreeFrm").style.backgroundColor = "red"; // Changes the colour of the form (element) background to red if incorrect.
  }
  document.getElementById("submitBtnThree").disabled = true; // Disables the button after submitting.
}

// Question Four Function
function questionFour() {
  var input = document.getElementById("questionFourIn").value;

  const answer = "shapeC";
  console.log(`Question four output = ${input}.`); // Gives the output of the input into the console to make sure it gives the correct output.

  if (input == answer) {
    points++;
    document.getElementById(
      "resultFour"
    ).innerHTML = `Correct, your score is currently: ${points}`;
    document.getElementById("questionFourFrm").style.backgroundColor = "green"; // Changes the colour of the form background to green if correct.
  } else {
    document.getElementById("resultFour").innerHTML =
      "You didn't get the answer correct! You missed out on 1 point.";
    document.getElementById("questionFourFrm").style.backgroundColor = "red"; // Changes the colour of the form (element) background to red if incorrect.
  }

  document.getElementById("submitBtnFour").disabled = true; // Disables the button after submitting.
}

// Question Five Function
function questionFive() {
  var input = document.getElementById("questionFiveIn").value;
  console.log(`Question five output = ${input}.`); // Gives the output of the input into the console to make sure it gives the correct output.

  if (input == "isosceles") {
    points++;
    document.getElementById(
      "resultFive"
    ).innerHTML = `Correct, your score is currently: ${points}`;
    document.getElementById("questionFiveFrm").style.backgroundColor = "green"; // Changes the colour of the form background to green if correct.
  } else {
    document.getElementById("resultFive").innerHTML =
      "You didn't get the answer correct! You missed out on 1 point.";
    document.getElementById("questionFiveFrm").style.backgroundColor = "red"; // Changes the colour of the form (element) background to red if incorrect.
  }
  document.getElementById("submitBtnFive").disabled = true; // Disables the button after submitting.
}

// Question Six Function
function questionSix() {
  var input = Number(document.getElementById("questionSixIn").value);
  console.log(`Question six output = ${input}.`); // Gives the output of the input into the console to make sure it gives the correct output.

  if (input == 8) {
    points++;
    document.getElementById(
      "resultSix"
    ).innerHTML = `Correct, your score is currently: ${points}`;
    document.getElementById("questionSixFrm").style.backgroundColor = "green"; // Changes the colour of the form background to green if correct.
  } else {
    document.getElementById("resultSix").innerHTML =
      "You didn't get the answer correct! You missed out on 1 point.";
    document.getElementById("questionSixFrm").style.backgroundColor = "red"; // Changes the colour of the form background to red if incorrect.
  }
  document.getElementById("submitBtnSix").disabled = true; // Disables the button after submitting.
}

// Question Seven Function
function questionSeven() {
  var input = document.getElementById("questionSevenIn").checked;
  console.log(`Question seven output = ${input}.`); // Outputs the value of the input from the question seven form checkbox to console.

  if (input) {
    points++;
    document.getElementById(
      "resultSeven"
    ).innerHTML = `Correct, your score is currently: ${points}`;
    document.getElementById("questionSevenFrm").style.backgroundColor = "green"; // Changes the colour of the form background to green if correct.
  } else {
    document.getElementById("resultSeven").innerHTML =
      "You didn't get the answer correct! You missed out on 1 point.";
    document.getElementById("questionSevenFrm").style.backgroundColor = "red"; // Changes the colour of the form background to red if incorrect.
  }
  document.getElementById("submitBtnSeven").disabled = true; // Disables the button after submitting.
}

// Question Eight Function
function questionEight() {
  var input = document.getElementById("questionEightIn").value;
  console.log(`Question eight output = ${input}.`);

  if (input == "threesixty") {
    points++;
    document.getElementById(
      "resultEight"
    ).innerHTML = `Correct, your score is currently: ${points}`;
    document.getElementById("questionEightFrm").style.backgroundColor = "green"; // Changes the colour of the form (element) background to green if correct.
  } else {
    document.getElementById("resultEight").innerHTML =
      "You didn't get the answer correct! You missed out on 1 point.";
    document.getElementById("questionEightFrm").style.backgroundColor = "red"; // Changes the colour of the form (element) background to red if incorrect.
  }
  document.getElementById("submitBtnEight").disabled = true; // Disables the button after submitting.
}

// Question Nine Function
function questionNine() {
  var input = Number(document.getElementById("questionNineIn").value);
  console.log(`Question nine output = ${input}.`);

  if (input == 961) {
    points++;
    document.getElementById(
      "resultNine"
    ).innerHTML = `Correct, your score is currently: ${points}`;
    document.getElementById("questionNineFrm").style.backgroundColor = "green"; // Changes the colour of the form (element) background to green if correct.
  } else {
    document.getElementById("resultNine").innerHTML =
      "You didn't get the answer correct! You missed out on 1 point.";
    document.getElementById("questionNineFrm").style.backgroundColor = "red"; // Changes the colour of the form (element) background to red if incorrect.
  }
  document.getElementById("submitBtnNine").disabled = true; // Disables the button after submitting.
}

// Question Ten Function
function questionTen() {
  var input = Number(document.getElementById("questionTenIn").value);
  console.log(`Question ten output = ${input}.`); //
  console.log(typeof input); // Gives the data type of the input variable, this is to make sure it's classed as a Number type and not a String type.

  if (input == 168) {
    points++;
    document.getElementById(
      "resultTen"
    ).innerHTML = `Correct, your score is currently: ${points}`;
    document.getElementById("questionTenFrm").style.backgroundColor = "green"; // Changes the colour of the form (element) background to green if correct.
  } else {
    document.getElementById("resultTen").innerHTML =
      "You didn't get the answer correct! You missed out on 1 point.";
    document.getElementById("questionTenFrm").style.backgroundColor = "red"; // Changes the colour of the form (element) background to red if incorrect.
  }
  document.getElementById("submitBtnTen").disabled = true; // Disables the button after submitting.
}

// Help Button
function helpButton() {
  var helpText = "To use the quiz on the website, you first need to type your answer into the input box or choose out of one of the options used for the question. Then you can submit the question and move onto the next one. When finished click Submit Answers.";
  alert(helpText);
}

function finalDetails() { }
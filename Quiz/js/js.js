const questions = [{
      "id": 0,
      "question": "What is the answer",
      "A": "A",
      "B": "B",
      "C": "C",
      "D": "D",
      "correctAnswer": 1
   },
   {
      "id": 1,
      "question": "What is the next answer",
      "A": "AWODUAWDHOUDO",
      "B": "F",
      "C": "G",
      "D": "H",
      "correctAnswer": 2
   }
];
const maxStrikes = 3;
var score = 0;
var strikes = 0;

var currentquestion;

function start() {
   currentquestion = questions[0];
   buildQuestion();
   updateData();
}

function buildQuestion() {
   document.getElementById("questionTitle").innerHTML = currentquestion.question;
   document.getElementById("label1").innerHTML = currentquestion.A;
   document.getElementById("label2").innerHTML = currentquestion.B;
   document.getElementById("label3").innerHTML = currentquestion.C;
   document.getElementById("label4").innerHTML = currentquestion.D;
}

function checkAnswer() {
   let correctID = "check" + currentquestion.correctAnswer;

   if (document.getElementById(correctID).checked) {
      correct();
      score++;
      nextQuestion();
   } else {
      incorrect();
      strikes++;
   }

   updateData();

}

function updateData() {
   document.getElementById("score").innerHTML = score + "/" + questions.length;
   document.getElementById("strikes").innerHTML = strikes + "/" + maxStrikes;
   if(strikes >= maxStrikes) {
      gameOver();
   }
}

function nextQuestion() {
   currentquestion = questions[currentquestion.id + 1];
   if (currentquestion != null) {
      buildQuestion();
   } else {
      win();
   }

}

function win() {
   $("Modal-title").html("You Win!");
   $("Modal-content").html("Congratulations, you won the ___ quiz, you got <span id='winModalStrikes'>?</span>.");

   if(strikes == 0) {
      $("#winModalStrikes").html("no Strikes");
   } else if (strikes == 1) {
      $("#winModalStrikes").html("only one strike");
   } else {
      $("#winModalStrikes").html(strikes + " strikes");
   }

   $("#Modal").modal({
      show: true
   });
}

function gameOver() {
   $("Modal-title").html("You Lose");
   $("Modal-content").html("Try agin.");


   $("#Modal").modal({
      show: true
   });
}

function correct() {
   alert("Correct");
}

function incorrect() {
   $("Modal-title").html("Incorrect");
   $("Modal-content").html("Try agin.");


   $("#Modal").modal({
      show: true
   });
}

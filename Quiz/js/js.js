const questions = [
  {
    "question":"What is the answer",
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D",
    "correctAnswer": 1
  },
  {
    "question":"What is the next answer",
    "A": "E",
    "B": "F",
    "C": "G",
    "D": "H",
    "correctAnswer": 2
  }
];
var score = 0;

var currentquestion;

function start() {
  currentquestion = questions[0];
  buildQuestion();
  updateScore();
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

  if(document.getElementById(correctID).checked) {
    alert("Correct");
    score++;
    updateScore();
    nextQuestion();
  }

  return false;
}

function updateScore() {
  document.getElementById("score").innerHTML = score + "/" + questions.length;
}

function nextQuestion() {

}

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

// Question prototype

Question.prototype.checkAnswer = function (answer) {
  return this.answer === answer;
};

//Quiz constructor

function Quiz(questions) {
  this.questions = questions;
  this.score = 0;
  this.questionIndex = 0;
}

//Quiz prototype

Quiz.prototype.getQuestion = function () {
  return this.questions[this.questionIndex];
};

// Quiz isFinish

Quiz.prototype.isFinish = function () {
  return this.questions.length === this.questionIndex;
};

// Quiz guess

Quiz.prototype.guess = function (answer) {
  var question = this.getQuestion();

  if (question.checkAnswer(answer)) {
    this.score++;
  }
  this.questionIndex++;
};

var q1 = new Question(
  "1-)What is the most popular programming?",
  ["javascript", "C#", ".Net", "python"],
  "javascript"
);
var q2 = new Question(
  "2-)What is the most popular programming?",
  ["javascript", "C#", "visual basic", "python"],
  "javascript"
);
var q3 = new Question(
  "3-)What is the most popular programming?",
  ["javascript", "java", "visual basic", "python"],
  "javascript"
);

var questions = [q1, q2, q3];

// Start Quiz

var quiz = new Quiz(questions);

loadQuestion();

function loadQuestion() {
  if (quiz.isFinish()) {
    showScore();
  } else {
    let question = quiz.getQuestion();
    let choices = question.choices;
    document.querySelector("#question").textContent = question.text;

    for (let i = 0; i < choices.length; i++) {
      let element = document.querySelector("#choice" + i);
      element.innerHTML = choices[i];

      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
}

function guess(id, guess) {
  let btn = document.getElementById(id);
  btn.onclick = function () {
    quiz.guess(guess);
    loadQuestion();
  };
}

function showScore() {
  let html = `<h2>Score</h2><h4>${quiz.score}</h4>`;

  document.querySelector(".card-body").innerHTML = html;
}

function showProgress() {
  var totalQuestion = quiz.questions.length;
  var questionNumber = quiz.questionIndex + 1;
  document.querySelector(
    "#progress"
  ).innerHTML = `Question ${questionNumber} of ${totalQuestion}`;
}

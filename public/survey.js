// Questions
var question = [
  "You enjoy talking politics.",
  "You like to Netflix and Chill.",
  "You prefer outdoor activities.",
  "You like tacos",
  "You're a night owl.",
  "You prefer beer to wine",
  "You like crowded places",
  "You shower daily",
  "You prefer to call versus text",
  "You prefer jeans to slacks"
];

function loadQuestions() {
  console.log("Loaded");
  for (var i = 0; i < question.length; i++) {
    console.log(question.length[i]);
    // $(".question").append("<h4>" + questions.length[i] + "<h4>");
  }
}

function answer() {}

function compare() {}

loadQuestions();

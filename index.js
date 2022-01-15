var readlineSync = require("readline-sync");
var score= 0;
var userName = readlineSync.question("What's your name? ");
console.log ("Welcome " + userName + " to HOW WELL DO YOU KNOW NEHA TRIVIA!!! ");
console.log("************************************************");

function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()){
  console.log("ABSOLUTELY RIGHT!");
  score = score + 1;
} else {
  console.log("MEH, NEVERMIND ");
}
  console.log("CURENT SCORE: " + score);
  console.log("=======================")
}

var questions = [{
  question: "WHAT IS MY MOTHER's NAME? ",
  answer: "Anushri"
},{
  question: "WHAT IS MY BIRTH COUNTRY? ",
  answer: "Saudi Arabia"
},{
  question: "MY FAV STREET FOOD IS? ",
  answer: "Pani puri"
  
}, {
question: "FAV COLOR IS? ",
  answer: "Blue"},{
    question: "DO I HAVE A BIRTHMARK? ",
  answer: "Yes"
  }

];

for (var i=0; i<questions.length; i++) 
{
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)

}
console.log("YAY!!! You've Scored: "+ score);
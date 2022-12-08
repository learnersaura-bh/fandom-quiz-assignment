var readlinesync = require("readline-sync")
var userName = readlinesync.question("What is your name ")
console.log("Welcome! ", userName, " to this GK quiz and let's test your knowledge")
console.log("Type option example- a or b")
var score = 0;

function quiz (question , answer){
  var userAnswer = readlinesync.question(question)
  if(userAnswer === answer){
    console.log("Well! Sahi Jawab")
      score = score + 1;
   }
  else {
    console.log("Sorry! You missed it this time" )
    }
  console.log("Current Score: ", score)
  console.log("..........................")
}
 
var questions = [ 
{
question : "What is capital of India? (a)Delhi (b)Mumbai  "  ,
answer : "a" 
},
{ question: "Which is festival of colours? (a)Diwali (b)Holi ",
answer : "b"
},
{question : "Who is author of novel 2 states? (a)Chetan bhagat (b)Salman Rushdy ", 
answer : "a"
},
{question : "How many hours are there in 2 days? (a)24 (b)48 ",
answer : "b"
},
{question : "National animal of Inida? (a)Cow (b) Tiger ", 
answer : "b"
}]

for(i=0 ; i<questions.length ; i++){
  var currentQuestion = questions[i];
  quiz(currentQuestion.question , currentQuestion.answer)
}
console.log("You scored: ", score, "points");
console.log("Thanks for attempting this quiz and you did well :) ")
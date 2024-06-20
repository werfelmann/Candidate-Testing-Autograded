const input = require('readline-sync');
let candidateName = "";
let candidateAnswer = "";
let correctAnswer = "Sally Ride"

candidateName = input.question("What is your name? ");
console.log("Hello, " + candidateName + "!");
candidateAnswer = input.question("Who was the first American woman to go to space?")
console.log("Your answer was " + candidateAnswer);
if (candidateAnswer === correctAnswer || candidateAnswer === correctAnswer.toLowerCase()) {
    console.log("Your answer was correct.");
} else {
    console.log("Your answer was incorrect.");
}
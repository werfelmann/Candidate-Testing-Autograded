const input = require('readline-sync');
let candidateName = "";
let candidateAnswer = "";
candidateName = input.question("What is your name? ");
console.log("Hello, " + candidateName + "!");
candidateAnswer = input.question("Who was the first American woman to go to space?")
console.log("Your answer was " + candidateAnswer);

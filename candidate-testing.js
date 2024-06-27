const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
let candidatePrepared = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let question2 = "True or false: 5 kilometer == 5000 meters? ";
let question3 = "(5 + 3)/2 * 10 = ? ";
let question4 = "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ";
let question5 = "What is the minimum crew size for the ISS? ";

let correctAnswer = "Sally Ride";
let correctAnswer2 = "true";
let correctAnswer3 = "40";
let correctAnswer4 = "Trajectory";
let correctAnswer5 = "3";

let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [question, question2, question3, question4, question5];
let correctAnswers = [correctAnswer, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  console.log("");
  console.log("---------------------------------------------------------------------------------");
  console.log("Welcome to the Candidate Testing Portal.");
  console.log("");
  candidateName = input.question("Please enter your name: ");
  console.log("");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //note: need for loop that, for each iteration, asks the questions from the questions array
  //for each iteration, use the .push() method to add the user response to the candidateAnswers array  
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(questions[i]);
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      console.log("Your answer is correct!");
      console.log("");
    } else {
      console.log("Your answer is incorrect.");
      console.log("");
    }
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

// if (candidateAnswer === correctAnswer || candidateAnswer === correctAnswer.toLowerCase() || candidateAnswer === correctAnswer.toUpperCase()) {
//   console.log("Your answer was correct.");
// } else {
//   console.log("Your answer was incorrect.");
// }

  
let grade = 0;  //TODO 3.2 use this variable to calculate the candidates score.
let numCorrect = 0;

  for (let i = 0; i < questions.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      numCorrect += 1;
    } 
  }
  grade = (numCorrect/correctAnswers.length)*100;
  console.log(`>>> Overall Grade: ${grade}% (${numCorrect} of ${questions.length} responses were correct) <<<`);
  console.log("");
  if (grade >= 60) {
    console.log(">>>Congratulations. You have PASSED the test.<<<");
    console.log("");
    console.log("---------------------------------------------------------------------------------");
  } else {
    console.log(">>>You did not receive a passing grade. Please try again.<<<");
    console.log("");
    console.log("---------------------------------------------------------------------------------");
  }
  
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Greetings, " + candidateName + ". ");
  console.log("");
  console.log("You will be asked a series of questions."); 
  console.log("Each question is worth 20 points."); 
  console.log("In order to pass the test, you must earn a score of 60% or above.");
  console.log("");
  candidatePrepared = input.question("Are you ready to begin the test? ");
  if (candidatePrepared.toLowerCase() === "yes" || candidatePrepared.toLowerCase() === "y") {
    console.log("");
    console.log("Initiating test. Good luck!");
    console.log("");
  } else {
    console.log("");
    console.log("Trick question! Of course you are ready. Initiating test.")
    console.log("");
  }
  
  askQuestion();
  console.log("");
  console.log("Test complete. Here are the results:");
  console.log("");
  console.log(`Candidate Name: ${candidateName}`);
  console.log(`1) ${question}`);
  console.log(`Your Answer: ${candidateAnswers[0]}`);
  console.log(`Correct Answer: ${correctAnswer}`);
  console.log("");
  console.log(`2) ${question2}`);
  console.log(`Your Answer: ${candidateAnswers[1]}`);
  console.log(`Correct Answer: ${correctAnswer2}`);
  console.log("");
  console.log(`3) ${question3}`);
  console.log(`Your Answer: ${candidateAnswers[2]}`);
  console.log(`Correct Answer: ${correctAnswer3}`);
  console.log("");
  console.log(`4) ${question4}`);
  console.log(`Your Answer: ${candidateAnswers[3]}`);
  console.log(`Correct Answer: ${correctAnswer4}`);
  console.log("");
  console.log(`5) ${question5}`);
  console.log(`Your Answer: ${candidateAnswers[4]}`);
  console.log(`Correct Answer: ${correctAnswer5}`);
  console.log("");
  gradeQuiz(this.candidateAnswers);
}


// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
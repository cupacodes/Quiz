// Starting index number where questions will be pulled from
var currentQuestionIndex = 0;
// Grabbing needed elements for manipulation
// Parent Element is questionTitle
var questionAnswerDisplay = document.getElementById("current-question");
var questionName = document.getElementById("question-name");
var choicesOption = document.getElementById("answers");
var startQuizEl = document.getElementById("start-btn");
var beginScreen = document.getElementById("begin-screen");
var printMessage = document.getElementById("print-message");
// On-Click Event to trigger start quiz button to start the quiz
startQuizEl.addEventListener("click", function() {
  startQuiz();
});
// Array of questions containing objects, AKA the questions that will be asked from the quiz and triggered using bracket notation to trigger index numbers, as well as dot notation to manipulate the DOM objects (i.e. title, choices, answer)
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "Which operator is used to assign a value to a variable?",
        choices: ["*", "-", "=", "X"],
        answer: "="
    },
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<script>", "<js>", "<javascript>", "<scripting"],
        answer: "<script>"
    },
    {
        title: "Where is the correct place to insert JavaScript?",
        choices: ["The <body> section", "The <head> section", "Both the <head> section and the <body> section are correct", "what is JavaScript?"],
        answer: "The <head> section"
    },
    {   title: "How do you create a function in JavaScript?",
        choices: ["function = myFunction()", "function myFunction()", "function:myFunction()", "what's a function?" ],
        answer: "function = myFunction()"
    }
]
// Calling the function that actually allows the quiz to start
function startQuiz() {

    beginScreen.setAttribute("class", "hide");

    questionAnswerDisplay.removeAttribute("class");
        

        
    retrieveQuestion();    

}

function retrieveQuestion() {

    var currentQuestion = questions[currentQuestionIndex];
    questionName.textContent = currentQuestion.title;
    choicesOption.innerHTML = "";
    currentQuestion.choices.forEach(function(choice, i){
      var choiceButton = document.createElement("button");
      choiceButton.setAttribute("value", choice);
      choiceButton.textContent = choice;
      choicesOption.appendChild(choiceButton);
     choiceButton.onclick = handleClick;
    })

}

function handleClick() {
    if (this.value !== questions[currentQuestionIndex].answer) {
       console.log(this.value);
        printMessage.textContent = "Womp Womp!";
      } else {
        printMessage.textContent = "Hooray! Great Job!";
      }
      printMessage.removeAttribute("class");
      setTimeout(function() {
          printMessage.setAttribute("class", "hide")
      }, 1000);
      currentQuestionIndex++;
    if (questions.length === currentQuestionIndex) {
        printMessage.textContent = "Game Over!";
        questionAnswerDisplay.setAttribute("class", "hide");
    } else {
        retrieveQuestion();  
    }

    
}
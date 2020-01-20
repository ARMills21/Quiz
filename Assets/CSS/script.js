const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons')
const timer = document.getElementById('timer');
const highscore = document.getElementById('highscores');

var timeLeft
var highScores 
var score 
var createDiv = document.createElement('div');
let shuffledQuestions, currentQuestionIndex;
let answer = questions.answer; 

// function startQuiz () {
//     startButton.classList.add('hide');
//     shuffledQuestions = questions.sort(() => Math.random() -.5);
//     currentQuestionIndex = 0;
//     questionContainerElement.classList.remove('hide');
//     displayQuestion();
// };

function startQuiz() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

startButton.addEventListener('click');

function displayQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
};

function showQuestion(question) {
    questionElement.innerText = quetion.question

    resetState()
    question.choices.forEach(choice =>{
        const button = document.createElement('button');
        button.innerText = choice;
        button.classList.add('btn');

        answerButtonsElement.appendChild(button)
        button.addEventListener('click', selectAnswer)
    })
};

function selectAnswer(event) {
    var selectedButton = event.target;

    questionIndex = 0;

    if(selectedButton.textContent = answer) {
        var createDiv = document.createElement('div');
        createDiv.setAttribute("id", "creatDiv");
    }

    if(selectedButton.textContent === questions[questionIndex].answer){
        createDiv.textContent = "Your answer is Correct!";
    }
    else{
        createDiv.textContent = "Wrong Answer!"
    };
}
console.log(selectAnswer)
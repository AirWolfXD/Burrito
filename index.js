//mini quiz on home page set up
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){
    const output = [];

    questions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];

            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>
                    <br>`
                );
            }
            answers.push(
                `<br>
                 <br>`
            )

output.push(
  `<div class="question"> <b>${currentQuestion.question}</b> </div>
  <div class="answers"> ${answers.join('')} </div>`
);
        }
    );
    quizContainer.innerHTML = output.join('');
}

function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    let numCorrect = 0;
  
    questions.forEach( (currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      
        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
            answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });
    resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
  }

//Creating questions for mini quiz
const questions = [
    {
      question: "Is COVID-19 real?",
      answers: {
        a: "Yes",
        b: "No"
      },
      correctAnswer: "a"
    },
    {
      question: "Should you wear a mask whenever you go outside?",
      answers: {
        a: "No",
        b: "Yes",
        c: "What's a mask?",
        d: "No, because Corona doesn't exist"
      },
      correctAnswer: "b"
    },
    {
      question: "Should you practice social distancing when around others?",
      answers: {
        a: "Yes",
        b: "No",
        c: "Yes, but only when in a large group",
        d: "No, because Corona doesn't exist"
      },
      correctAnswer: "a"
    },
    {
      question: "How long should you wash your hands for?",
      answers: {
        a: "5 seconds",
        b: "15 seconds",
        c: "1 minute",
        d: "0 seconds"
      },
      correctAnswer: "c"
    },
    {
      question: "A person who has no symptoms of COVID-19 is not a risk to others.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "How do I prevent getting COVID-19 from a sick family member?",
      answers: {
        a: "Stay near them and hug them all the time",
        b: "Wear a mask, ask your sick family member to wear a mask, and stay at least 6 feet away",
        c: "Rub your nose, eyes, and touch everything that you can"
      },
      correctAnswer: "b"
    }
  ];

  buildQuiz();
  submitButton.addEventListener('click', showResults);
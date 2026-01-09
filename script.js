
function handleLogin() {
  const username = document.getElementById("username").value.trim();
  const errorBox = document.getElementById("login-error");

  if (username === "") {
    errorBox.innerText = "Please enter your name to continue.";
  } else {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    // (Optional) Display user's name somewhere
    // document.getElementById("welcome-user").innerText = `Welcome, ${username}!`;
  }
}

const quizData = [
    {
        question: "1. Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "2. What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "3. What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "4. What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
     {
        question: "5. Which of the following is a high-level programming language?",
        a:  "assembly",
        b:  "python",
        c:  "Machine code",
        d:  "binary",
        correct: "b",
    },
     {  
         question: "6. What symbol is used to end a statement in C++?",
        a:  ":",
        b:  ";",
        c:  ".",
        d:  "#",
        correct: "b", 
     },
    {   
        question:  "7. In Python, which keyword is used to define a function?",
        a:  "def",
        b:  "func",
        c:  "function",
        d:  "define",
        correct:  "a",

    },
    {
        question:  "8. Which language is mainly used for developing Android applications?",
        a:  "Python",
        b:  "Java",
        c:  "HTML",
        d:  "Swift",
        correct:  "b",
    },
    {
        question:  "9. Which of the following is not a valid variable name in C?",
        a:  "total",
        b:  "sum",
        c:  "1sum",
        d:  "_count",
        correct:  "c",
    },
      {
        question:  "10. What does IDE stand for?",
        a:  "Integrated Development Environment",
        b:  "Internal Development Environment",
        c:  "Integrated Debugging Environment",
        d:  "Intelligent Development Editor",
        correct:  "a",
    },
    {
        question:  "11.Which operator is used for exponentiation in Python?",
        a:  "^",
        b:  "**",
        c:  "%",
        d:  "//",
        correct:  "b",
    },
     {
        question:  "12. Which of the following languages is used for web development?",
         a:  "Java",
         b:  "Python",
         c:  "HTML",
         d:  "C++",
         correct:  "c",
    },
     {
        question:  "13. In C++, which keyword is used to create an object from a class?",
        a:  "class",
        b:  "new",
        c:  "object",
        d:  "this",
        correct:  "b",
    },
     {
        question:  "14. In Java, which of the following is used to inherit a class?",
        a:  "inherits",
        b:  "extends",
        c:  "instanceof",
        d:  "implement",
        correct:  "b",
    },
     {
        question:  "15. Which function is used to display output in Python?",
        a:  "write()",
        b:  "output()",
        c:  "display()",
        d:  "Print()",
        correct:  "d",
    },
     {
        question:  "16. What is the result of 5 // 2 in Python?",
        a:  "2.5",
        b:  "3",
        c:  "2",
        d:  "5",
        correct:  "c",
    },
     {
        question:  "17. In C, what is the correct format specifier for printing an integer?",
        a:  "%c",
        b:  "%d",
        c:  "%s",
        d:  "%f",
        correct:  "b",
    },
     {
        question:  "18. Which programming language uses indentation to define code blocks?",
        a:  "C++",
        b:  "Java",
        c:  "Python",
        d:  "Kotlin",
        correct:  "c",
    },
    {
        question:  "19.Which of these is not an OOP concept?",
        a:  "Encapsulation",
        b:  "Inheritance",
        c:  "Compilation",
        d:  "Polymorphism",
        correct:  "c",
    },
    {
        question:  "20. Which of the following is a correct comment in C++?",
        a:  "/* This is a comment */",
        b:  "<!-- Comment -->",
        c:  "# This is a comment",
        d:  " -- Comment",
        correct: "a",
    }    
];
const backBtn = document.getElementById('back');
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0
const startTime = new Date(); // Start the timer
let userAnswers = [];         // To track user-selected answers



loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    const progressFill = document.getElementById('progress-fill')
    const scoreDisplay = document.getElementById('score-display')


    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    // Update progress bar
    const progressPercent = ((currentQuiz + 1) / quizData.length) * 100
    progressFill.style.width = `${progressPercent}%`

    // Update score display
    scoreDisplay.innerText = `Score: ${score}`
    // Re-select previous answer if available
const prevAnswer = userAnswers[currentQuiz];
if (prevAnswer) {
    document.getElementById(prevAnswer).checked = true;

}
backBtn.style.display = currentQuiz === 0 ? 'none' : 'inline-block';

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    userAnswers.push(answer);


    if (answer) {
        const correct = quizData[currentQuiz].correct;
        const selectedLabel = document.querySelector(`label[for=${answer}]`);
        const correctLabel = document.querySelector(`label[for=${correct}]`);

        // Highlight answers
        if (answer === correct) {
            selectedLabel.classList.add('correct');
            score++;
        } else {
            selectedLabel.classList.add('incorrect');
            correctLabel.classList.add('correct');
        }

        // Disable radio buttons
        answerEls.forEach(el => el.disabled = true);

        // Wait 1 second to show result, then move to next
        setTimeout(() => {
            // Remove highlights
            selectedLabel.classList.remove('correct', 'incorrect');
            correctLabel.classList.remove('correct');

            currentQuiz++;
            answerEls.forEach(el => el.disabled = false);

            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                let feedback = '';
                if (score <= 2) feedback = "Keep practicing!";
                else if (score <= 4) feedback = "Good job!";
                else feedback = "You're a pro!";

                const endTime = new Date();
const timeTaken = Math.floor((endTime - startTime) / 1000); // seconds

let summaryHTML = `
  <h2>Final Score: ${score}/${quizData.length}</h2>
  <p>Total Time Taken: ${timeTaken} seconds</p>
  <h3>Review:</h3>
  <ol>
`;

quizData.forEach((data, index) => {
  const userAnswer = userAnswers[index];
  const isCorrect = userAnswer === data.correct;
  summaryHTML += `
    <li>
      <strong>Q${index + 1}: ${data.question}</strong><br>
      Your Answer: <span style="color:${isCorrect ? 'green' : 'red'}">
        ${userAnswer ? data[userAnswer] : "No Answer"}
      </span><br>
      Correct Answer: <span style="color:green">${data[data.correct]}</span>
    </li><br>
  `;
});


summaryHTML += `</ol>
<button onclick="location.reload()">Reload</button>`;

quiz.innerHTML = summaryHTML;

            }
        }, 1000);
    }
});

backBtn.addEventListener('click', () => {
    if (currentQuiz > 0) {
        currentQuiz--;

        // Remove last answer
        const lastAnswer = userAnswers.pop();

        // If last answer was correct, decrease score
        if (lastAnswer === quizData[currentQuiz].correct) {
            score--;
        }

        loadQuiz();
    }
});

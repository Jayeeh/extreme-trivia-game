const questions = [
    "What's the capital of France?", 
    "Who painted the Mona Lisa?",
    "What is the largest planet in our Solar System?",
    "Who wrote Romeo and Juliet?",
    "What is the hardest natural substance on Earth?",
    "Which element has the chemical symbol 'O'?",
    "Who was the first President of the United States?",
    "What is the smallest unit of life that can replicate independently?",
    "In which year did the Titanic sink?",
    "What is the chemical symbol for gold?"
];

const choicesArray = [
    ["Paris", "London", "Berlin", "Madrid"], 
    ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
    ["Earth", "Jupiter", "Mars", "Saturn"],
    ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    ["Gold", "Iron", "Diamond", "Platinum"],
    ["Gold", "Oxygen", "Osmium", "Hydrogen"],
    ["Thomas Jefferson", "Abraham Lincoln", "John Adams", "George Washington"],
    ["Cell", "Molecule", "Atom", "Organ"],
    ["1912", "1922", "1932", "1942"],
    ["Au", "Ag", "Pb", "Fe"]
];

const correctAnswers = ["Paris", "Da Vinci", "Jupiter", "William Shakespeare", "Diamond", "Oxygen", "George Washington", "Cell", "1912", "Au"];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById('question').innerHTML = questions[currentQuestionIndex];
        for (let i = 0; i < 4; i++) {
            const btn = document.getElementById(`choice${i+1}`);
            btn.innerHTML = choicesArray[currentQuestionIndex][i];
            btn.value = choicesArray[currentQuestionIndex][i];
        }
    } else {
        document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}!`;
        document.getElementById('question').innerHTML = "";
        document.getElementById('choices').innerHTML = "";
    }
}

function checkAnswer(btn) {
    if (btn.value === correctAnswers[currentQuestionIndex]) {
        score++;
    }
    currentQuestionIndex++;
    displayQuestion();
}

displayQuestion();
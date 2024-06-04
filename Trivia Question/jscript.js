const questions = [
    "What is the approximate age of the Earth?",
    "Which mathematician is known for the incompleteness theorems?",
    "Which molecule is known as the 'molecule of life'?",
    "Who developed the theory of general relativity?",
    "What is the rarest blood type in the world?",
    "In which year did the Wright brothers first achieve powered flight?",
    "What is the smallest prime number greater than 100?",
    "What is the longest river in the world by length?",
    "Which element has the highest melting point?",
    "Who is considered the father of modern chemistry?",
    "What is the heaviest naturally occurring element?",
    "Who formulated the uncertainty principle?",
    "Which scientist is known for the law of universal gravitation?",
    "What is the chemical formula for table salt?",
    "Who wrote the Principia Mathematica?",
    "Which planet has the most moons?",
    "What is the most abundant gas in the Earth's atmosphere?",
    "Who is known for the principle of buoyancy?",
    "What is the smallest bone in the human body?",
    "Which physicist developed the theory of electromagnetism?"
];

const choicesArray = [
    ["4.5 billion years", "2.5 billion years", "6.5 billion years", "1.5 billion years"],
    ["Alan Turing", "John von Neumann", "Kurt Gödel", "Henri Poincaré"],
    ["ATP", "DNA", "RNA", "Glucose"],
    ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Max Planck"],
    ["AB-", "O+", "B+", "A-"],
    ["1903", "1899", "1910", "1905"],
    ["101", "103", "107", "109"],
    ["Amazon", "Nile", "Yangtze", "Mississippi"],
    ["Tungsten", "Carbon", "Osmium", "Iridium"],
    ["Antoine Lavoisier", "Dmitri Mendeleev", "Robert Boyle", "Joseph Priestley"],
    ["Uranium", "Plutonium", "Lead", "Thorium"],
    ["Erwin Schrödinger", "Werner Heisenberg", "Max Born", "Niels Bohr"],
    ["Galileo Galilei", "Isaac Newton", "Johannes Kepler", "Albert Einstein"],
    ["NaCl", "KCl", "LiCl", "CsCl"],
    ["René Descartes", "Isaac Newton", "Leonhard Euler", "Blaise Pascal"],
    ["Jupiter", "Saturn", "Uranus", "Neptune"],
    ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
    ["Archimedes", "Galileo", "Pascal", "Bernoulli"],
    ["Stapes", "Incus", "Malleus", "Hyoid"],
    ["James Clerk Maxwell", "Michael Faraday", "Nikola Tesla", "Andre-Marie Ampère"]
];

const correctAnswers = [
    "4.5 billion years", 
    "Kurt Gödel", 
    "DNA", 
    "Albert Einstein", 
    "AB-", 
    "1903", 
    "101", 
    "Nile", 
    "Tungsten", 
    "Antoine Lavoisier",
    "Uranium", 
    "Werner Heisenberg", 
    "Isaac Newton", 
    "NaCl", 
    "Isaac Newton", 
    "Jupiter", 
    "Nitrogen", 
    "Archimedes", 
    "Stapes", 
    "James Clerk Maxwell"
];


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
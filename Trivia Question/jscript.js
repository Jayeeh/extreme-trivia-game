const questions = [
    "Which element has the highest melting point?",
    "Who wrote 'The Art of War'?",
    "What is the capital of Australia?",
    "What is the smallest prime number?",
    "Who painted the ceiling of the Sistine Chapel?",
    "What is the hardest natural substance on Earth?",
    "What is the chemical symbol for potassium?",
    "In what year did World War I begin?",
    "Which planet is known as the Red Planet?",
    "Who developed the theory of relativity?",
    "What is the longest river in the world?",
    "What is the largest mammal?",
    "Which country is the largest by area?",
    "What is the main ingredient in traditional Japanese miso soup?",
    "Who discovered penicillin?",
    "What is the capital of Canada?",
    "Which gas is most abundant in the Earth's atmosphere?",
    "In what year did the Titanic sink?",
    "Who was the first woman to fly solo across the Atlantic Ocean?",
    "What is the most spoken language in the world?",
    "Who wrote 'Pride and Prejudice'?",
    "What is the boiling point of water in Fahrenheit?",
    "Who invented the light bulb?",
    "Which planet is closest to the sun?",
    "What is the smallest bone in the human body?",
    "Who was the first President of the United States?",
    "What is the largest ocean on Earth?",
    "Which organ in the human body produces insulin?",
    "What is the chemical formula for table salt?",
    "Who painted the Mona Lisa?",
    "Which element is known as the 'King of Chemicals'?",
    "What is the tallest mountain in the world?",
    "Who is known as the 'Father of Computers'?",
    "What is the largest desert in the world?",
    "Which Shakespeare play features the character of Shylock?",
    "What is the speed of light in a vacuum?",
    "Who discovered the law of gravity?",
    "What is the capital of Brazil?",
    "Which vitamin is produced when a person is exposed to sunlight?",
    "What is the primary ingredient in chocolate?",
    "Who wrote 'The Catcher in the Rye'?",
    "Which organ is responsible for filtering blood in the human body?",
    "What is the capital of Japan?",
    "Who is the author of 'Harry Potter'?",
    "What is the largest planet in our solar system?",
    "Who was the first man to walk on the moon?",
    "What is the main gas found in the air we breathe?",
    "Who developed the polio vaccine?",
    "What is the largest country in South America?",
    "Which planet has the most moons?"
];

const choicesArray = [
    ["Tungsten", "Iron", "Gold", "Platinum"],
    ["Sun Tzu", "Confucius", "Laozi", "Mencius"],
    ["Canberra", "Sydney", "Melbourne", "Brisbane"],
    ["1", "2", "3", "5"],
    ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
    ["Diamond", "Gold", "Iron", "Platinum"],
    ["K", "P", "Pt", "Pb"],
    ["1912", "1914", "1916", "1918"],
    ["Mars", "Jupiter", "Saturn", "Venus"],
    ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
    ["Amazon", "Nile", "Yangtze", "Mississippi"],
    ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
    ["Russia", "Canada", "China", "United States"],
    ["Tofu", "Seaweed", "Miso Paste", "Soy Sauce"],
    ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Isaac Newton"],
    ["Ottawa", "Toronto", "Vancouver", "Montreal"],
    ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
    ["1912", "1922", "1932", "1942"],
    ["Amelia Earhart", "Harriet Quimby", "Bessie Coleman", "Jacqueline Cochran"],
    ["Mandarin Chinese", "English", "Spanish", "Hindi"],
    ["Jane Austen", "Charlotte Bronte", "Emily Bronte", "Mary Shelley"],
    ["212°F", "100°F", "180°F", "220°F"],
    ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Guglielmo Marconi"],
    ["Mercury", "Venus", "Earth", "Mars"],
    ["Stapes", "Femur", "Tibia", "Humerus"],
    ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
    ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    ["Pancreas", "Liver", "Kidneys", "Stomach"],
    ["NaCl", "KCl", "CaCl2", "MgCl2"],
    ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
    ["Sulfuric Acid", "Nitric Acid", "Hydrochloric Acid", "Acetic Acid"],
    ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    ["Charles Babbage", "Alan Turing", "John von Neumann", "Steve Jobs"],
    ["Sahara", "Arabian", "Gobi", "Kalahari"],
    ["The Merchant of Venice", "Othello", "Hamlet", "Macbeth"],
    ["299,792 km/s", "150,000 km/s", "100,000 km/s", "50,000 km/s"],
    ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Johannes Kepler"],
    ["Brasilia", "Rio de Janeiro", "Sao Paulo", "Salvador"],
    ["Vitamin D", "Vitamin C", "Vitamin B12", "Vitamin K"],
    ["Cocoa Beans", "Milk", "Sugar", "Vanilla"],
    ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "Harper Lee"],
    ["Kidneys", "Liver", "Heart", "Lungs"],
    ["Tokyo", "Kyoto", "Osaka", "Nagoya"],
    ["J.K. Rowling", "J.R.R. Tolkien", "Stephen King", "George R.R. Martin"],
    ["Jupiter", "Saturn", "Uranus", "Neptune"],
    ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
    ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
    ["Jonas Salk", "Albert Sabin", "Edward Jenner", "Louis Pasteur"],
    ["Brazil", "Argentina", "Peru", "Chile"],
    ["Jupiter", "Saturn", "Uranus", "Neptune"]
];

const correctAnswers = [
    "Tungsten", "Sun Tzu", "Canberra", "2", "Michelangelo", "Diamond", "K", "1914", 
    "Mars", "Albert Einstein", "Nile", "Blue Whale", "Russia", "Miso Paste", "Alexander Fleming", 
    "Ottawa", "Nitrogen", "1912", "Amelia Earhart", "Mandarin Chinese", "Jane Austen", "212°F", 
    "Thomas Edison", "Mercury", "Stapes", "George Washington", "Pacific Ocean", "Pancreas", "NaCl", 
    "Leonardo da Vinci", "Sulfuric Acid", "Mount Everest", "Charles Babbage", "Sahara", "The Merchant of Venice", 
    "299,792 km/s", "Isaac Newton", "Brasilia", "Vitamin D", "Cocoa Beans", "J.D. Salinger", 
    "Kidneys", "Tokyo", "J.K. Rowling", "Jupiter", "Neil Armstrong", "Nitrogen", "Jonas Salk", 
    "Brazil", "Jupiter"
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
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

//pagination
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');

let currentSlide = 0;

const myQuestions = [
    {
        question: "What is the surname given to bastards born in Dorne?",
        answers: {
            a: 'Stone',
            b: 'Rivers',
            c: 'Sand',
            d: 'Waters'
        },
        correctAnswer: 'c'
    },
    {
        question: "'The Mountain' is the nickname for which character?",
        answers: {
            a: 'Gerold Clegane',
            b: 'Oberyn Martell',
            c: 'Sandor Clegane',
            d: 'Gregor Clegane'
        },
        correctAnswer: 'd'
    },
    {
        question: "Who is Lord Commander of the Kingsguard at the beginning of Game of Thrones?",
        answers: {
            a: 'Ser Loras Tyrell',
            b: 'Ser Jeor Mormont',
            c: 'Ser Barristan Selmy',
            d: 'Ser Jaime Lannister'
        },
        correctAnswer: 'c'
    },
    {
        question: "Who was Margaery Tyrell's first husband?",
        answers: {
            a: 'Renly Baratheon',
            b: 'Joffrey Baratheon',
            c: 'Stannis Baratheon',
            d: 'Tommen Baratheon'
        },
        correctAnswer: 'a'
    },
    {
        question: "Who is known as 'The-King-Beyond-the-Wall'?",
        answers: {
            a: 'Mance Rayder',
            b: 'Tormund Giantsbane',
            c: 'The Night King',
            d: 'Stannis Baratheon'
        },
        correctAnswer: 'a'
    },
    {
        question: "How many times has Sansa Stark been married?",
        answers: {
            a: 'Once',
            b: 'Twice',
            c: 'Three times',
            d: 'None'
        },
        correctAnswer: 'b'
    },
    {
        question: "Who is the ruler of the Iron Islands at the beginning of Game of Thrones?",
        answers: {
            a: 'Euron Greyjoy',
            b: 'Aeron Greyjoy',
            c: 'Yara Greyjoy',
            d: 'Balon Greyjoy'
        },
        correctAnswer: 'd'
    },
    {
        question: "Who was the mad king’s first born son?",
        answers: {
            a: 'Aemon Targaryen',
            b: 'Aegon Targaryen',
            c: 'Rhaegar Targaryen',
            d: 'Viserys Targaryen'
        },
        correctAnswer: 'c'
    },
    {
        question: "Who delivered the fatal blow to the King-in-the North, Robb Stark?",
        answers: {
            a: 'Roose Bolton',
            b: 'Walder Frey',
            c: 'Allister Thorne',
            d: 'Ramsay Bolton'
        },
        correctAnswer: 'a'
    },
    {
        question: "Gray Worm and Missandei became allies of Daenerys Targaryen after she liberated the slaves of which city?",
        answers: {
            a: 'Yunkai',
            b: 'Astapor',
            c: 'Meereen',
            d: 'Qarth'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is the name of the royal executioner who beheaded Eddard Stark for treason?",
        answers: {
            a: 'Ser Janos Slynt',
            b: 'Ser Meryn',
            c: 'Ser Ilyn Payne',
            d: 'Ser Beric Dondarrion'
        },
        correctAnswer: 'c'
    },
    {
        question: "Which rival king attempted to take King's Landing during the Battle of the Blackwater?",
        answers: {
            a: 'Robb Stark',
            b: 'Stannis Baratheon',
            c: 'Renly Baratheon',
            d: 'Balon Greyjoy'
        },
        correctAnswer: 'b'
    },
    {
        question: "Who was the fool who helped Sansa Stark escape King's Landing after King Joffrey's death?",
        answers: {
            a: 'Eddison Tollet',
            b: 'Vardis Egen',
            c: 'Dontos Hollard',
            d: 'Mord'
        },
        correctAnswer: 'c'
    },
    {
        question: "Which city does Samwell Tarly travel to in order to train as a maester?",
        answers: {
            a: 'Oldtown',
            b: 'Sunspear',
            c: 'Gulltown',
            d: 'Highgarden'
        },
        correctAnswer: 'a'
    },
    {
        question: "The wildling Gilly has a son, who is the father?",
        answers: {
            a: 'Samwell Tarly',
            b: 'Tormund Giantsbane',
            c: 'Jeor Mormont',
            d: 'Craster'
        },
        correctAnswer: 'd'
    },
    {
        question: "In which city does Arya Stark train to become a Faceless Man?",
        answers: {
            a: 'Meereen',
            b: 'Astapor',
            c: 'Braavos',
            d: 'Pentos'
        },
        correctAnswer: 'c'
    },
    {
        question: "Thoros of Myr is responsible for reviving which character from the dead?",
        answers: {
            a: 'Sandor Clegane',
            b: 'Beric Dondarrion',
            c: 'Jon Snow',
            d: 'Gregor Clegane'
        },
        correctAnswer: 'b'
    },
    {
        question: "In Season 4, who does Tywin Lannister plan to marry his daughter, Cersei to?",
        answers: {
            a: 'Petyr Baelish',
            b: 'Loras Tyrell',
            c: 'Euron Greyjoy',
            d: 'Oberyn Martell'
        },
        correctAnswer: 'b'
    },
    {
        question: "Davos Seaworth grew up in the slums of which city?",
        answers: {
            a: 'Lannisport',
            b: 'Oldtown',
            c: 'King\'s Landing',
            d: 'Gulltown'
        },
        correctAnswer: 'c'
    },
    {
        question: "What relation is Lyanna Mormont to Jorah Mormont?",
        answers: {
            a: 'Sister',
            b: 'Daughter',
            c: 'Niece',
            d: 'Cousin'
        },
        correctAnswer: 'd'
    },
]

function buildQuiz(){
    const output = [];
    
    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        
        for (letter in currentQuestion.answers) {
            answers.push(`<label><input type='radio' name='question${questionNumber}' value='${letter}'>${letter.toUpperCase()} :  ${currentQuestion.answers[letter]}</label>`);
        }
        
        output.push(`<div class='slide'><div class='question'>${currentQuestion.question}</div><div class='answers'>${answers.join('')}</div></div>`);
    });
    
    quizContainer.innerHTML = output.join('');
}

function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    
    let numCorrect = 0;
    
    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = 'input[name=question'+questionNumber+']:checked';
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        
        if(userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;            
            answerContainers[questionNumber].style.color = '#00bc0e';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    
    resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    
    if (currentSlide === 0) {
        previousButton.style.display = 'none';
    } else {
        previousButton.style.display = 'inline-block';
    }
    
    if (currentSlide === slides.length - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    } else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide -1);
}

previousButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

buildQuiz();

showSlide(0);

submitButton.addEventListener('click', showResults);







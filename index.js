var questionsData = [
    {
        question:"Where is Moscow?",
        firstAnswer: "In USA",
        secondAnswer:"In India",
        thirdAnswer:"In Russia",
        fourthAnswer:"In Kazahstan",
        right: "In Russia"
    },
    {
        question:"Who is the most famous?",
        firstAnswer: "ASAP Rocky",
        secondAnswer:"Askar",
        thirdAnswer:"Putin",
        fourthAnswer:"Superman", 
        right: "ASAP Rocky"
    },
    {
        question:"The most useful is...",
        firstAnswer: "JavaScript",
        secondAnswer:"C++",
        thirdAnswer:"Python",
        fourthAnswer:"PHP",
        right: "JavaScript"
    }, 
    {
        question:"My name is...",
        firstAnswer: "Askar",
        secondAnswer:"Konstantin",
        thirdAnswer:"Vasiliy",
        fourthAnswer:"Nikolay",
        right: "Konstantin"
    }
]


var question = document.querySelector('h1');
var answer_a = document.getElementById('firstQ');
var answer_b = document.getElementById('secondQ');
var answer_c = document.getElementById('thirdQ');
var answer_d = document.getElementById('fourthQ');

var numberQuestion = 0;
var correctAnswers = 0;




function isRightAnswer() {
    const answers = document.querySelectorAll('input[type=radio');
    var chekedInput;
    answers.forEach((elem) => {
        if (elem.checked) {
            chekedInput = elem.id;            
        }
    })
    console.log(chekedInput, rightAnswer, numberQuestion)
    switch(chekedInput){
        case "first":
            if(answer_a.innerHTML == rightAnswer) correctAnswers += 1;
            return true;
        case "second":
            if(answer_b.innerHTML == rightAnswer) correctAnswers += 1;
            return true;
        case "third":
            if(answer_c.innerHTML == rightAnswer) correctAnswers += 1;
            return true;
        case "fourth":
            if(answer_d.innerHTML == rightAnswer) correctAnswers += 1;
            return true;
        default:
            return false;
    }
}


function setQandA() {
    
    question.innerHTML = questionsData[numberQuestion].question;
    answer_a.innerHTML = questionsData[numberQuestion].firstAnswer;
    answer_b.innerHTML = questionsData[numberQuestion].secondAnswer;
    answer_c.innerHTML = questionsData[numberQuestion].thirdAnswer;
    answer_d.innerHTML = questionsData[numberQuestion].fourthAnswer;
    rightAnswer = questionsData[numberQuestion].right;
    checkRadioFalse()
    
}

function checkRadioFalse() {
    const answers = document.querySelectorAll('input[type=radio');
    answers.forEach((elem) => {
        elem.checked = false;
    })
}

document.querySelector('.submit').addEventListener('click', (e)=>{
    isRightAnswer();
    numberQuestion += 1;
    if(numberQuestion == questionsData.length) {
        alert(`Congratulations! You answered ${correctAnswers} questions correctly
        `);
        numberQuestion = 0;
        correctAnswers = 0;
    }
    setQandA();
})

setQandA();
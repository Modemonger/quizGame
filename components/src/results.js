import removeChildren from "../util/childElements.js";
import showScore from "./score.js";
import printQuestion from "./makeQuestion.js";

export default function renderResults(questions, answers){
    const quizContainer = document.getElementById('quizContainer');
    const questionNum = document.getElementById('questionNum');
    questionNum.innerText = 'FINISHED!';
    
    removeChildren(quizContainer);
    removeChildren(timer);

    const score = showScore();

    const right = document.createElement('p');
    right.id = 'correct';
    right.innerHTML = `You got <span>${score[0]}</span> right!`;

    const wrong = document.createElement('p');
    wrong.id = 'incorrect';
    wrong.innerHTML = `And <span>${score[1]}</span> wrong`;

    const missed = document.createElement('p');
    missed.id = 'missed';
    missed.innerHTML = `And missed <span>${score[2]}</span> questions`;

    const showButton = document.createElement('button');
    showButton.id = 'showScores';
    showButton.innerText = 'See what you got wrong';

    const answersContainer = document.createElement('div');
    answersContainer.id = 'scoresContainer';

    questions.forEach(elem => {
        const question = document.createElement('p');
        question.className = 'givenQuestion';
        question.innerText = elem.question;
        elem.answers.forEach(element => {
            const anwser = document.createElement('p');
            anwser.id = 'givenAnswer';
            anwser.innerText = element.text;
        });
    });

    // the big button boi
    const reset = document.createElement('button');
    reset.innerText = 'RESET';
    reset.className = 'button';

    reset.addEventListener('click', function(){
        
        timerBox.style.cssText = 'visibility: visible; height: 150px; margin: 2rem;';
        timer.style.cssText = 'visibility: visible; height: 100%;';
        const progress = document.getElementById('progress');
        progress.style.width = '0%';
        removeChildren(quizContainer);
        printQuestion();

    });

    quizContainer.append(right, wrong, missed, reset);
}
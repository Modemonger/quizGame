import removeChildren from "../util/childElements.js";
import showScore from "./score.js";
import printQuestion from "./makeQuestion.js";

export default function renderResults(){
    const quizContainer = document.getElementById('quizContainer');
    removeChildren(quizContainer);
    removeChildren(timer);
    const score = showScore();
    const right = document.createElement('p');
    right.id = 'correct';
    right.innerHTML = `You got <span>${score[0]}</span> right!`;
    const wrong = document.createElement('p');
    wrong.id = 'incorrect';
    wrong.innerHTML = `And <span>${score[1]}</span> wrong`;
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
        console.log("is it working");
    });

    quizContainer.append(right, wrong, reset);
}
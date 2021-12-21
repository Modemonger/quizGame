import questions from "../data/data.js"; // import the data container
import removeChildren from "../util/childElements.js"; // my often used function that im tired of re-writing
import changeProgress from "./progress.js";
import getCount from "./timer.js";
import {addRight, addWrong, clearScore} from "./score.js";
import renderResults from "./results.js";
import shuffleFisherYates from "../util/shuffle.js";
import resault from './resultList.js';

let index = 0;
let seconds = 20;
let ranQuestions;
let answerList = [];

export default function printQuestion(){
    const timer = document.getElementById('timer');
    const timerBox = document.getElementById('timerBox');
    let count = seconds;
    getCount(count);
    if(index == 0) {
        ranQuestions = shuffleFisherYates(questions); 
        // okay so theres this guy named fisher yates and he has an algorithm just google it
    }
    //timer things i hate timers actually cause its so hard to time stuff
    let time = setInterval(function(){
        if(count==0){
            count=seconds; 
            clearInterval(time);
        }
        getCount(--count);
        ;}, 
        1000);
    // so if we reach the last question we just reset everything so when we reset stuff its already reset
    // i imagine we update database right before this goes down
    if(index >= ranQuestions.length){
        count = 0;
        index = 0;
        timer.style.cssText = 'visibility: hidden; height: 2rem; margin: 1rem;';
        timerBox.style.cssText = 'visibility: hidden; height: 2rem; margin: 1rem;';
        clearInterval(time);
        renderResults(ranQuestions, answerList);
        clearScore();
        return;
    }
    
    removeChildren(quizContainer);
    // the questions are random BUT what if we make answers random too ;)
    ranQuestions[index].answers = shuffleFisherYates(ranQuestions[index].answers);
    const answersContainer = document.createElement('div');
    answersContainer.id = 'answerContainer';
    const question = document.createElement('div');
    question.className = 'question';
    question.innerText = ranQuestions[index].question;
    
    // so now we make the random stuff into a quiz 
    ranQuestions[index].answers.forEach(elem => {
        const quest = document.createElement('p');
        quest.innerText = elem.text;
        answersContainer.append(quest);
        quest.addEventListener('click', function(){
            if(elem.isCorrect == true){
                addRight();
                clearInterval(time);
                getCount(seconds);
                const tmp = resault(elem.text, true);
                answerList[index] = tmp.getState();
                printQuestion();
            }
            else{
                addWrong();
                clearInterval(time);
                getCount(seconds);
                const tmp = resault(elem.text, false);
                answerList[index] = tmp.getState();
                printQuestion();
            }
        });
    });

    quizContainer.append(question, answersContainer);
    ++index;
    changeProgress(index, ranQuestions.length);
}

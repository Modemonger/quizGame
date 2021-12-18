'use strict'

import printQuestion from "./components/src/makeQuestion.js";

const root = document.getElementById('root'); // get the main or root container

const logo = document.createElement('div');
logo.id = 'logo';
logo.innerText = 'SQ';
root.append(logo);

const timerBox = document.createElement('div');
timerBox.id = "timerBox";
const timer = document.createElement('p');
timer.id = "timer";
timerBox.append(timer);

const quizContainer = document.createElement('div'); // make an area for the questions and answers
quizContainer.id = 'quizContainer';

const progressBar = document.createElement('div');
progressBar.id = 'progressBar';

const progress = document.createElement('div');
progress.id = 'progress';
progress.style.width = '0%';

const questionNum = document.createElement('p');
questionNum.id = 'questionNum';
progress.append(questionNum);
progressBar.append(progress);

root.append(timerBox,progressBar,quizContainer);// put the three together

printQuestion();
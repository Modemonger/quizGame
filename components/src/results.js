import removeChildren from "../util/childElements.js";
import showScore from "./score.js";
import printQuestion from "./makeQuestion.js";

export default function renderResults(questions, givenAnswer){
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
    if(score[2] <= 1 && score[2] != 0) missed.innerHTML = `And missed <span>${score[2]}</span> question`;
    else missed.innerHTML = `And missed <span>${score[2]}</span> questions`;

    const showButton = document.createElement('button');
    showButton.id = 'showScores';
    showButton.className = 'button';
    showButton.innerText = 'See what you got wrong';

    const answersContainer = document.createElement('div');
    answersContainer.id = 'scoresContainer';
    answersContainer.style.display = 'none';

    const check = document.createElement('div');
    check.id = 'checYourself';

    for(let i = 0; i < questions.length; i++){
        const question = document.createElement('p');
        const answered = document.createElement('div');
        answered.className = 'answered';
        question.className = 'givenQuestion';
        question.innerText = questions[i].question;
        answered.append(question);
        for(let ii = 0; ii < questions[i].answers.length; ii++){
            const answer = document.createElement('p');
            answer.className = 'givenAnswer';
            answer.innerText = questions[i].answers[ii].text;
            
            if(givenAnswer[i+1]!=undefined && questions[i].answers[ii].text == givenAnswer[i+1][0] && questions[i].answers[ii].isCorrect == true){
                answer.classList = 'right givenAnswer';
            }
            else if(givenAnswer[i+1]!=undefined && questions[i].answers[ii].text == givenAnswer[i+1][0] && questions[i].answers[ii].isCorrect == false) 
                answer.classList = 'wrong givenAnswer';

            if(questions[i].answers[ii].isCorrect == true) answer.classList.add('correct');
            
            answered.append(answer);
        }
        
        check.append(answered);
        
    }
    answersContainer.append(check);
    showButton.addEventListener('click', function(){
        if(answersContainer.style.display == 'block'){
            answersContainer.style.display = 'none';
        }
        else answersContainer.style.display = 'block';
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

    quizContainer.append(right, wrong, missed, showButton, answersContainer, reset);
}
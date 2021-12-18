import {addWrong} from "./score.js";
import printQuestion from "./makeQuestion.js";

export default function getCount(count){
    const timer = document.getElementById('timer');
    if(count < 10) timer.innerText = `0${count}`
    if(count < 1){
        addWrong();
        printQuestion(); 
    }
    else if(count < 10) timer.innerText = `0${count}`
    else timer.innerText = `${count}`;
}


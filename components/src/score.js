import resault from './resultList.js';

let right = 0;

let wrong = 0;

let missed = 0;

export default function showScore(){
    let score = [right, wrong, missed];
    return score;
}

export function addRight(index){
    right++;
}

export function addWrong(index){
    wrong++;
}

export function clearScore(){
    wrong=0;
    right=0;
    missed=0;
}

export function addMissed(index){
    missed++;
}
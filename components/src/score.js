let right = 0;

let wrong = 0;

export default function showScore(){
    let score = [right, wrong];
    return score;
}

export function addRight(){
    right++;
}

export function addWrong(){
    wrong++;
}

export function clearScore(){
    wrong=0;
    right=0;
}
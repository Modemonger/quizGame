
export default function changeProgress(index, lenght){
    const progress = document.getElementById('progress');
    const questionNum = document.getElementById('questionNum');
    questionNum.innerText = `Nr.${index}`;
    const tmp = (index / (lenght))*100;
    progress.style.width = `${tmp}%`;
}

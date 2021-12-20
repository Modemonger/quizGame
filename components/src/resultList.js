class quest{
    constructor(index, answer){
        this.index = index;
        this.answer = answer;
    }
    getState(){
        const arr = [this.index, this.answer];
        return arr;
    }
};

export default function(){quest};
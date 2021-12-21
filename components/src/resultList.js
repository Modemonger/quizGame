class quest{
    constructor(text, state){
        this.text = text;
        this.state = state;
    }
    getState(){
        const arr = [this.text, this.state];
        return arr;
    }
};

export default function resault(text,state){
    const tmp = new quest(text,state);
    return tmp;
};
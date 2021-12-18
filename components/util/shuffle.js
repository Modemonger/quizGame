export default function shuffleFisherYates(array) {
    let i = array.length; // get length obviosly
    // loop for every element 
    while (i--) {
      const ran = Math.floor(Math.random() * i); // get random index in the array
      [array[i], array[ran]] = [array[ran], array[i]]; // i still hate this but its useful ill agree but ill be sarcastic about it
    }
    return array; // return returns
}
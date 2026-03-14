function randomInteger(min, max){

    let random = Math.round(Math.random()*(max-min)+min);

    return random;

}

console.log(randomInteger(1,5));
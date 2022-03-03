export function randomNumber() { 
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}

function randomLetter() { 
    const alphabet="abcdefg"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}


export function getRandomNote(){
    const octave = randomNumber().toString()
    const key = randomLetter()
    return key + octave
}



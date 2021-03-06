function randomNumber() {
  const numbers ='12345'
  return numbers[Math.floor(Math.random() * numbers.length)]
}

function randomLetter() {
  const alphabet = 'abcdefg'
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}

export function getRandomNote() {
  const octave = randomNumber().toString()
  const key = randomLetter()
  return key + octave
}

export function getCurrentSong(level){
    let currentSong = []
    const songLength = (level) + 2
    // shortened song length for development:
    // const songLength = 2
    for (let i = 0; i < songLength; i++){
      const note = getRandomNote()
      currentSong.push(note)
    }
 return currentSong
}


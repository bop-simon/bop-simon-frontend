function randomNumber() {
  return Math.floor(Math.random() * (6 - 1 + 1)) + 1
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
//level 1 = 5 notes
//currentSong.length = level * 5
// export function getCurrentSong(level){
//     let currentSong = []
//     const songLength = level * 5

//     for(let i=0; i < songLength; i++){
//     const note = getRandomNote()
//     currentSong.push(note)

//     while(i < songLength){
//         currentSong.push(note)
//         }
//     }
// }

console.log('soooong', getCurrentSong(2))

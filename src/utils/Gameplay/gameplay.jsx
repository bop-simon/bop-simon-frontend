import { useEffect, useState, useHistory } from 'react'
import { useUser } from '../../context/UserContext'
import { getCurrentSong, startGame } from './gamelogic'

//set the level in UserContext to grab it later
// const {user, setUser, userLevel, setUserLevel}= useUser()
const userLevel = 2
const [currentSong, setCurrentSong]=useState(userLevel)
let playerHistory = []
let cpuHistory = []
setCurrentSong(getCurrentSong(userLevel))

function startGame(){
  const note = currentSong[(playerHistory.length)]
  playNote(note);
  cpuHistory.push(note)
  }

  //could we set the points and level in our useEffect?

useEffect(() => {
   if(playerHistory !== cpuHistory){
       return gameOver()
   } else {
       return startGame()
   }
}, [playerHistory])

//in game.jsx playerHistory.push(note) onClick

const history = useHistory();

//the scoring function will need to take 


function gameOver(){
//brings up the pop up
//could set the Player's next level
//const nextLevel = setUserLevel(level)
history.push("/home")
//

}
const {user, setUser} = useUser()

console.log('can you see me', user.score * 10)

const {user, setUser} = useUser()
console.log('can you see me', user.score)
//the level of user
const [level, setLevel] = useState(0)
function levelUp(){
  //we want the user's new score to update
  const newScore = editsProfile(user.score)
  console.log('score', user.score)
  //we want to set the user's new score to the db
  setUser(newScore)
  //we want to get the next level by doing math to divide the user.score by their current level
  const currentLevel = user.score / 5 
  setLevel(currentLevel)
  startGame(level)
  }
 



import React from 'react'
import { editsProfile } from '../../services/profile'
//import the popup Katie made

export default function 
() {
  return (
    <>
      <Popup
      text={
        <div>
        <p>You seem to have fallen FLAT!</p>
        <p>Not everyone can B as # as me</p>
        <Button onClick={gameOver}>Try Again</Button>
        </div>
      } />

    </>
  )
}


import { useEffect, useState } from 'react'
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

useEffect(() => {
   if(playerHistory !== cpuHistory){
       return gameOver()
   } else {
       return startGame()
   }
}, [playerHistory])

//in game.jsx playerHistory.push(note) onClick

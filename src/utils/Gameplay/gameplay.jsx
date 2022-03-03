import { useEffect } from 'react'
import { useUser } from '../../context/UserContext'
import { getRandomNote, getCurrentSong } from './gamelogic'

const {user, setUser}= useUser()
let playerHistory = []
let cpuHistory = []


useEffect(() => {
   if(playerHistory === cpuHistory){
        return playerHistory
   } else if (playerHistory !== cpuHistory){
       return gameOver()
   }
}, [playerHistory])

export function startGame(level){
    let currentSong = getCurrentSong(level)
    cpuHistory.push(currentSong[0] ++ //note sure how to do the counter loop
        )
        currentSong.forEach((note) => {
            playNote(note)
        })
}
import { PlayLessonTwoTone } from '@mui/icons-material'
import { useEffect } from 'react'
import { useUser } from '../../context/UserContext'
import { getRandomNote } from './gamelogic'

const {user, setUser}= useUser()
let playerHistory = []
let cpuHistory = []



export function getCurrentSong(level){
    let currentSong = []
    const note = getRandomNote()
    currentSong.push(note)
    setUser(level)
    user ? {level} : 0
   //we want this to happen for 2 songs

}

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
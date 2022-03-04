import * as Tone from 'tone'
import styles from './game.module.css'
import { useState } from 'react'
import { getCurrentSong } from '../../utils/Gameplay/gamelogic'
import { useUser } from '../../context/UserContext'
import { updateScore } from '../../services/user'

export default function Game() {
  const { user, setUser } = useUser()

  let userLevel = user.score / 5 + 1

  let currentTurnNotes = []
  let cpuHistory = []
  let turnNumber = 1
  let currentSong = getCurrentSong(userLevel)
  console.log(currentSong, 'current song')
  let turnTimeout, nextTurnTimeout

  const synthSounds = {
    oscillator: {
      type: 'triangle2'
    },
    envelope: {
      attack: 0.001,
      decay: 1.5,
      sustain: 0.2,
      release: 0.8
    }
  }
  const limiter = new Tone.Limiter(-2)
  const synth = new Tone.Synth(synthSounds).chain(limiter).toDestination()

  function gameOver() {
    cpuHistory = []
    turnNumber = 1
    currentSong = getCurrentSong(userLevel)
    console.log(currentSong, 'loser')
    alert('you lose')
  }

  function levelUp(user) {
    updateScore(user.id, user.score)
    alert(`Yaas! You leveled up! Your level is now ${user.score}`)
  }

  function startGame() {
    console.log('>>>>>>>>>>>>>>>>> new turn (cpu) <<<<<<<<<<<<<<,')
    currentTurnNotes = []
    console.log('hello')
    for (let i = 0; i < turnNumber; i++) {
      const note = currentSong[i]
      setTimeout(() => {
        playNote(note)
      }, i * 1000)
      if (i === cpuHistory.length) {
        cpuHistory.push(note)
      }
      console.log('cpu history', cpuHistory, 'current song', currentSong)
    }
  }

  const handleClick = (note) => {
    console.log('>>>>>new click (user)<<<')
    clearTimeout(turnTimeout)
    clearTimeout(nextTurnTimeout)
    playNote(note)
    currentTurnNotes.push(note)
    let wrongNote = false

    turnTimeout = setTimeout(() => {
      for (let i = 0; i < cpuHistory.length; i++) {
        if (cpuHistory[i] !== currentTurnNotes[i]) {
          wrongNote = true
        }
      }
      if (wrongNote) {
        clearTimeout(turnTimeout)
        clearTimeout(nextTurnTimeout)
        gameOver()
        // Stop playing!!
        // user.score + 5
      }
    }, 1500)

    nextTurnTimeout = setTimeout(() => {
      turnNumber++
      startGame()
    }, 1500)
  }

// function winRound() {
 // if (currentTurnNotes === currentSong){
  // levelUp(user)
 //}
//}

  function playNote(note) {
    const element = document.getElementById(note)
    const noteFreq = Tone.Frequency(note)
    element.style.opacity = '.2'
    element.style.borderRadius = '100px'
    synth.triggerAttackRelease(noteFreq, '2n')
    setTimeout(() => {
      element.style.opacity = '1'
      element.style.borderRadius = '0px'
    }, 1000)
  }

  return (
    <section className={styles.gameMain}>
      <div className={styles.App}>
        <div className={styles.main}>
          <p>This is the Game Play Board</p>
          <div className={styles.container}>
            <div
              onClick={() => handleClick('c2')}
              id="c2"
              aria-label="c2"
            ></div>
            <div onClick={() => handleClick('d2')} id="d2"></div>
            <div onClick={() => handleClick('e2')} id="e2"></div>
            <div onClick={() => handleClick('f2')} id="f2"></div>
            <div onClick={() => handleClick('g2')} id="g2"></div>
            <div onClick={() => handleClick('a2')} id="a2"></div>
            <div onClick={() => handleClick('b2')} id="b2"></div>
            <div onClick={() => handleClick('c3')} id="c3"></div>
            <div onClick={() => handleClick('d3')} id="d3"></div>
            <div onClick={() => handleClick('e3')} id="e3"></div>
            <div onClick={() => handleClick('f3')} id="f3"></div>
            <div onClick={() => handleClick('g3')} id="g3"></div>
            <div onClick={() => handleClick('a3')} id="a3"></div>
            <div onClick={() => handleClick('b3')} id="b3"></div>
            <div onClick={() => handleClick('c4')} id="c4"></div>
            <div onClick={() => handleClick('d4')} id="d4"></div>
            <div onClick={() => handleClick('e4')} id="e4"></div>
            <div onClick={() => handleClick('f4')} id="f4"></div>
            <div onClick={() => handleClick('g4')} id="g4"></div>
            <div onClick={() => handleClick('a4')} id="a4"></div>
            <div onClick={() => handleClick('b4')} id="b4"></div>
            <div onClick={() => handleClick('c5')} id="c5"></div>
            <div onClick={() => handleClick('d5')} id="d5"></div>
            <div onClick={() => handleClick('e5')} id="e5"></div>
            <div onClick={() => handleClick('f5')} id="f5"></div>
            <div onClick={() => handleClick('g5')} id="g5"></div>
            <div onClick={() => handleClick('a5')} id="a5"></div>
            <div onClick={() => handleClick('b5')} id="b5"></div>
            <div onClick={() => handleClick('c6')} id="c6"></div>
            <div onClick={() => handleClick('d6')} id="d6"></div>
            <div onClick={() => handleClick('e6')} id="e6"></div>
            <div onClick={() => handleClick('f6')} id="f6"></div>
            <div onClick={() => handleClick('g6')} id="g6"></div>
            <div onClick={() => handleClick('a6')} id="a6"></div>
            <div onClick={() => handleClick('b6')} id="b6"></div>
          </div>
          <button onClick={startGame}>start</button>
        </div>
      </div>
    </section>
  )
}

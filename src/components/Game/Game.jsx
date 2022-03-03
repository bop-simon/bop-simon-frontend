import * as Tone from 'tone'
import styles from './game.module.css'
import { useState } from 'react'
import { getCurrentSong } from '../../utils/Gameplay/gamelogic'
import { useUser } from '../../context/UserContext'

export default function Game() {
  const { user, setUser } = useUser()

  let userLevel = user.score / 5 + 1
  // const userLevel = user.score / 5
  // user level
  // level up
  // game over

  let currentTurnNotes = []
  let cpuHistory = []
  let turnNumber = 1
  const currentSong = getCurrentSong(userLevel)
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
    currentTurnNotes = []
    turnNumber = 1
    alert('you lose')
  }

  function startGame() {
    console.log('>>>>>>>>>>>>>>>>> new turn (cpu) <<<<<<<<<<<<<<,')
    currentTurnNotes = []
    for (let i = 0; i < turnNumber; i++) {
      const note = currentSong[i]
      setTimeout(() => {
        playNote(note)
      }, i * 1000)
      if (i === cpuHistory.length) {
        cpuHistory.push(note)
      }
      console.log('cpu history', cpuHistory)
    }
  }

  const handleClick = (note) => {
    console.log('>>>>>new click<<<')
    clearTimeout(turnTimeout)
    clearTimeout(nextTurnTimeout)
    playNote(note)
    currentTurnNotes.push(note)
    let wrongNote = false
    console.log('currentTurnNotes', currentTurnNotes)
    turnTimeout = setTimeout(() => {
      for (let i = 0; i < cpuHistory.length; i++) {
        console.log(
          'currentTurnNotes[i]',
          currentTurnNotes[i],
          'cpuHistory',
          cpuHistory[i]
        )
        console.log(
          'i',
          i,
          'current turn notes',
          currentTurnNotes,
          cpuHistory,
          '< cpu history'
        )
        if (cpuHistory[i] !== currentTurnNotes[i]) {
          wrongNote = true
        }
      }
      if (wrongNote) {
        return gameOver()
      }
    }, 1500)
    nextTurnTimeout = setTimeout(() => {
      turnNumber++
      startGame()
    }, 1500)
  }

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
            <div onClick={() => handleClick('c2')} id="c2" aria-label="c2"></div>
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
          </div>
          <button onClick={startGame}>start</button>
        </div>
      </div>
    </section>
  )
}

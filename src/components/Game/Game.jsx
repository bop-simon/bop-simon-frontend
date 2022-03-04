import * as Tone from 'tone'
import { useUser } from '../../context/UserContext'
import styles from './game.module.css'
import { Button } from '@mui/material'
import { getCurrentSong } from '../../utils/gamelogic'
import { editsProfile } from '../../services/profile'

export default function Game() {
  const { user, setUser } = useUser()
  const userLevel = user.score / 5

  // CPU Game Logic variables
  let currentTurnNotes = []
  let cpuHistory = []
  let turnNumber = 1
  let currentSong = getCurrentSong(userLevel)
  let turnTimeout, nextTurnTimeout

  // Synth Controls
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
  const limiter = new Tone.Limiter(-3)
  const synth = new Tone.Synth(synthSounds).chain(limiter).toDestination()

  async function levelUp(user) {
    cpuHistory = []
    turnNumber = 1
    currentSong = getCurrentSong(userLevel)
    let newScore = Number(user.score + 5)
    setUser({ ...user, score: newScore })
    // update user on back end
    await editsProfile({ score: newScore, bio: user.bio })
    alert(
      `Yaas! You leveled up! Your level is now ${
        userLevel + 1
      } because that is what you deserve`
    )
  }

  function gameOver() {
    cpuHistory = []
    turnNumber = 1
    currentSong = getCurrentSong(userLevel)
    alert('you lost? Not surprised.')
  }

  // Reset User score for development purposes
  function reset() {
    editsProfile({ score: 0, bio: user.bio })
  }

  // CPU Turn Logic
  function startGame() {
    currentTurnNotes = []
    for (let i = 0; i < turnNumber; i++) {
      const note = currentSong[i]
      setTimeout(() => {
        playNote(note)
      }, i * 1000)
      if (i === cpuHistory.length) {
        cpuHistory.push(note)
      }
    }
  }

  // User Turn Logic
  const handleClick = (note) => {
    clearTimeout(turnTimeout)
    clearTimeout(nextTurnTimeout)
    playNote(note)
    currentTurnNotes.push(note)
    let wrongNote = false
    let wonGame = false

    turnTimeout = setTimeout(() => {
      for (let i = 0; i < cpuHistory.length; i++) {
        if (cpuHistory[i] !== currentTurnNotes[i]) {
          wrongNote = true
        }
      }
      for (let i = 0; i < currentTurnNotes.length; i++) {
        if (currentSong.length === currentTurnNotes.length) {
          wonGame = true
        }
      }
      if (wrongNote) {
        clearTimeout(turnTimeout)
        clearTimeout(nextTurnTimeout)
        gameOver()
      }
      if (wonGame) {
        console.log('howdy')
        clearTimeout(turnTimeout)
        clearTimeout(nextTurnTimeout)
        levelUp(user)
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

          <div className={styles.container}>
            {/* 
            Ministry of Beeps and Boops
             */}
            <div onClick={() => handleClick('c1')} id="c1"></div>
            <div onClick={() => handleClick('d1')} id="d1"></div>
            <div onClick={() => handleClick('e1')} id="e1"></div>
            <div onClick={() => handleClick('f1')} id="f1"></div>
            <div onClick={() => handleClick('g1')} id="g1"></div>
            <div onClick={() => handleClick('a1')} id="a1"></div>
            <div onClick={() => handleClick('b1')} id="b1"></div>
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
          </div>  
          <Button variant="outlined" onClick={startGame}>start</Button>
        </div>
      </div>
    </section>
  )
}

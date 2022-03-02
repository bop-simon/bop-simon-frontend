import * as Tone from 'tone'
import styles from './freeplay.module.css'

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

export default function FreePlay() {
  return (
    <section className={styles.gameMain}>
      <div className={styles.App}>
        <div className={styles.main}>
          <p>This is the Free Play Board</p>
          <div className={styles.container}>
            {/* 
            C = Pink 
            D = Yellow 
            E = Grey 
            F = Purple x 1,000 
            G = Tuscany 
            A = Bop Simon Green
            B = Bop Simon Blue 
            */}
            <div onClick={() => playNote('c2')} id="c2"></div>
            <div onClick={() => playNote('d2')} id="d2"></div>
            <div onClick={() => playNote('e2')} id="e2"></div>
            <div onClick={() => playNote('f2')} id="f2"></div>
            <div onClick={() => playNote('g2')} id="g2"></div>
            <div onClick={() => playNote('a2')} id="a2"></div>
            <div onClick={() => playNote('b2')} id="b2"></div>
            <div onClick={() => playNote('c3')} id="c3" aria-label="c3"></div>
            <div onClick={() => playNote('d3')} id="d3"></div>
            <div onClick={() => playNote('e3')} id="e3"></div>
            <div onClick={() => playNote('f3')} id="f3"></div>
            <div onClick={() => playNote('g3')} id="g3"></div>
            <div onClick={() => playNote('a3')} id="a3"></div>
            <div onClick={() => playNote('b3')} id="b3"></div>
            <div onClick={() => playNote('c4')} id="c4"></div>
            <div onClick={() => playNote('d4')} id="d4"></div>
            <div onClick={() => playNote('e4')} id="e4"></div>
            <div onClick={() => playNote('f4')} id="f4"></div>
            <div onClick={() => playNote('g4')} id="g4"></div>
            <div onClick={() => playNote('a4')} id="a4"></div>
            <div onClick={() => playNote('b4')} id="b4"></div>
            <div onClick={() => playNote('c5')} id="c5"></div>
            <div onClick={() => playNote('d5')} id="d5"></div>
            <div onClick={() => playNote('e5')} id="e5"></div>
            <div onClick={() => playNote('f5')} id="f5"></div>
            <div onClick={() => playNote('g5')} id="g5"></div>
          </div>
          {/* <button onClick={startGame}>start</button> */}
        </div>
      </div>
    </section>
  )
}

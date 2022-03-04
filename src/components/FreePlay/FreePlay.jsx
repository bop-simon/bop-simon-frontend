import * as Tone from 'tone'
import styles from './freeplay.module.css'
import { useEffect, useState } from 'react'
import { getAllUserSongs, postUserSong } from '../../services/songs'
import { Button } from '@mui/material'
import { get } from 'superagent'
import { getCurrentUser } from '../../services/user.js'

export default function FreePlay() {
  const [isRecording, setIsRecording] = useState(false)
  const [favSong, setFavSong] = useState([])

  let notesArray = []

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

  const pushNotes = (note) => {
    notesArray.push(note)
  }

  const startRecording = () => {
    setIsRecording(true)
  }

  const stopRecording = async () => {
    setIsRecording(false)

    setFavSong(notesArray)
    if (notesArray.length === 0) {
      alert('song must contain notes to save')
      return
    }
    window.alert('Your song has been saved! I guess.')

    await postUserSong(notesArray)

    setFavSong(notesArray)
    await postUserSong(notesArray)
  }

  const playUserSong = async (song) => {
    playInterval(song)
  }

  function playInterval(notes) {
    const limiter = new Tone.Limiter(-2);
    const now = Tone.now()
    const synth = new Tone.Synth(synthSounds).chain(limiter).toDestination();
    const interval = new Tone.Sequence(function(time, note){
        synth.triggerAttackRelease(note, now);
    }, notes, "4n");
    //8n super fast >> 1n very slow

    //begin at the beginning
    interval.loop = false;
    interval.start(0);
    Tone.Transport.start("+0.1");
}

  return (
    <section className={styles.gameMain}>
      <div className={styles.App}>
        <div className={styles.controlsRecord}>
          <Button onClick={startRecording}>Record</Button>
          {
            isRecording ?
            <Button onClick={stopRecording}>Stop</Button> :
            ''
          }
        </div>
        <div className={styles.main}>
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
            <div
              onClick={() => {
                playNote('c2')
                if (isRecording) pushNotes('c2')
              }}
              id="c2"
            ></div>
            <div
              onClick={() => {
                playNote('d2')
                if (isRecording) pushNotes('d2')
              }}
              id="d2"
            ></div>
            <div
              onClick={() => {
                playNote('e2')
                if (isRecording) pushNotes('e2')
              }}
              id="e2"
            ></div>
            <div
              onClick={() => {
                playNote('f2')
                if (isRecording) pushNotes('f2')
              }}
              id="f2"
            ></div>
            <div
              onClick={() => {
                playNote('g2')
                if (isRecording) pushNotes('g2')
              }}
              id="g2"
            ></div>
            <div
              onClick={() => {
                playNote('a2')
                if (isRecording) pushNotes('a2')
              }}
              id="a2"
            ></div>
            <div
              onClick={() => {
                playNote('b2')
                if (isRecording) pushNotes('b2')
              }}
              id="b2"
            ></div>
            <div
              onClick={() => {
                playNote('c3')
                if (isRecording) pushNotes('c3')
              }}
              id="c3"
              aria-label="c3"
            ></div>
            <div
              onClick={() => {
                playNote('d3')
                if (isRecording) pushNotes('d3')
              }}
              id="d3"
            ></div>
            <div
              onClick={() => {
                playNote('e3')
                if (isRecording) pushNotes('e3')
              }}
              id="e3"
            ></div>
            <div
              onClick={() => {
                playNote('f3')
                if (isRecording) pushNotes('f3')
              }}
              id="f3"
            ></div>
            <div
              onClick={() => {
                playNote('g3')
                if (isRecording) pushNotes('g3')
              }}
              id="g3"
            ></div>
            <div
              onClick={() => {
                playNote('a3')
                if (isRecording) pushNotes('a3')
              }}
              id="a3"
            ></div>
            <div
              onClick={() => {
                playNote('b3')
                if (isRecording) pushNotes('b3')
              }}
              id="b3"
            ></div>
            <div
              onClick={() => {
                playNote('c4')
                if (isRecording) pushNotes('c4')
              }}
              id="c4"
            ></div>
            <div
              onClick={() => {
                playNote('d4')
                if (isRecording) pushNotes('d4')
              }}
              id="d4"
            ></div>
            <div
              onClick={() => {
                playNote('e4')
                if (isRecording) pushNotes('e4')
              }}
              id="e4"
            ></div>
            <div
              onClick={() => {
                playNote('f4')
                if (isRecording) pushNotes('f4')
              }}
              id="f4"
            ></div>
            <div
              onClick={() => {
                playNote('g4')
                if (isRecording) pushNotes('g4')
              }}
              id="g4"
            ></div>
            <div
              onClick={() => {
                playNote('a4')
                if (isRecording) pushNotes('a4')
              }}
              id="a4"
            ></div>
            <div
              onClick={() => {
                playNote('b4')
                if (isRecording) pushNotes('b4')
              }}
              id="b4"
            ></div>
            <div
              onClick={() => {
                playNote('c5')
                if (isRecording) pushNotes('c5')
              }}
              id="c5"
            ></div>
            <div
              onClick={() => {
                playNote('d5')
                if (isRecording) pushNotes('d5')
              }}
              id="d5"
            ></div>
            <div
              onClick={() => {
                playNote('e5')
                if (isRecording) pushNotes('e5')
              }}
              id="e5"
            ></div>
            <div
              onClick={() => {
                playNote('f5')
                if (isRecording) pushNotes('f5')
              }}
              id="f5"
            ></div>
            <div
              onClick={() => {
                playNote('g5')
                if (isRecording) pushNotes('g5')
              }}
              id="g5"
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
//

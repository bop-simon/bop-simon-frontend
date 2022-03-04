import { useEffect, useState } from 'react'
import { FormControlLabel, FormGroup, Switch } from '@mui/material'
import { MusicNote } from '@mui/icons-material'
import { Button } from '@mui/material'
import Popup from '../../components/Popup/Popup.jsx'
import Game from '../../components/Game/Game'
import FreePlay from '../../components/FreePlay/FreePlay'
import MenuBar from '../../components/MenuBar/MenuBar.jsx'
import styles from './home.module.css'
import { useParams } from 'react-router-dom'
import { useUser } from '../../context/UserContext.jsx'

export default function Home() {
  const [toggleTutorial, setToggleTutorial] = useState(false)
  const [gamePlay, setGamePlay] = useState(true)
  const [currentNotes, setCurrentNotes] = useState([])
  const [playing, setPlaying] = useState(false)

  const params = useParams()
  const { user } = useUser()
  console.log(currentNotes)

  const handleChange = (event) => {
    setGamePlay(event.target.checked)
  }
  const open = () => setToggleTutorial(true)
  const close = () => setToggleTutorial(false)

  useEffect(() => {
    console.log(params)
    if (params.id) {
      setGamePlay(false)
      const { notes } = user.songs.find(song => song.id === params.id)
      setCurrentNotes(notes)
      setPlaying(true)
    } 
  },[])



  return (
    <main className={styles.home}>
      <MenuBar />
      <div className={styles.controls}>
        {!toggleTutorial ? (
          <>
            <FormGroup sx={{ display: 'block' }}>
              <FormControlLabel
                control={
                  <Switch
                    sx={{
                      '& .MuiSwitch-thumb':{
                        color: '#A51FFF'
                      }
                    }}
                    checked={gamePlay}
                    onChange={handleChange}
                    aria-label="play mode switch"
                  />
                }
                label={gamePlay ? 'Game Mode' : 'Free Play'}
              />
            </FormGroup>
            <Button onClick={open}>instructions</Button>
          </>
        ) : (
          ''
        )}
      </div>
      {toggleTutorial ? (
        <Popup
          handleClose={close}
          modalOpen={toggleTutorial}
          text={
            gamePlay ?
            <>
              <p>Beat the Bop!</p>
              <p>
                <MusicNote /> press button to start game{' '}
              </p>
              <p>
                <MusicNote />
                watch closely while Bop Simon plays, and try to play it back
              </p>
              <Button onClick={close}>got it</Button>
            </> :
            <>
               <p>
                <MusicNote /> press record to begin recording your beautiful melody. when done, press stop to save your song to your profile.
              </p>
            </>
          }
        />
      ) : (
        <>{gamePlay ? <Game /> : <FreePlay setPlaying={setPlaying} playing={playing} notes={currentNotes} />}</>
      )}
    </main>
  )
}

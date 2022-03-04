import { useState } from 'react'
import { FormControlLabel, FormGroup, Switch } from '@mui/material'
import { MusicNote } from '@mui/icons-material'
import { Button } from '@mui/material'
import Popup from '../../components/Popup/Popup.jsx'
import Game from '../../components/Game/Game'
import FreePlay from '../../components/FreePlay/FreePlay'
import MenuBar from '../../components/MenuBar/MenuBar.jsx'
import styles from './home.module.css'

export default function Home() {
  const [toggleTutorial, setToggleTutorial] = useState(false)
  const [gamePlay, setGamePlay] = useState(true)

  const handleChange = (event) => {
    setGamePlay(event.target.checked)
  }
  const open = () => setToggleTutorial(true)
  const close = () => setToggleTutorial(false)

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
            </>
          }
        />
      ) : (
        <>{gamePlay ? <Game /> : <FreePlay />}</>
      )}
    </main>
  )
}

import { useState } from 'react'
import { useUser } from '../../context/UserContext'
import { TextField, Button } from '@mui/material'
import { editsProfile } from '../../services/profile'
import MenuBar from '../../components/MenuBar/MenuBar'
import styles from './profile.module.css'
import triangle from '../../assets/triangle.png'
import { useNavigate } from 'react-router-dom'

export default function Profile() {

  const [updateBio, setUpdateBio] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  const navigate = useNavigate()
  const { user, setUser } = useUser()

  const handleUpdateBio = async () => {
    editsProfile({ bio: updateBio, score: user.score })
    setUser({ ...user, bio: updateBio })
    toggleEdit()
  }

  const toggleEdit = () => {
    setIsEditing((prevState) => !prevState)
  }

  const handleChange = (e) => {
    setUpdateBio(e.target.value)
  }

  const handlePlaySong = (id) => {
    navigate(`/home/${id}`)
  }

  return (
    <div className={styles.profile}>
      <MenuBar />
      <section className={styles.profileCard}>
        <img src={triangle} alt="green triangle with three eyes, mouth agape" />
        <h1>{user.username}</h1>
        <h2>High Score</h2>
        <p>{user.score < 1 ? `looks like someone hasn't been able to beat Simon yet...` : user.score}</p>
        {
          isEditing ?
            <div
              className={styles.editPass}
            >
              <TextField
                onChange={handleChange}
                label="Bio"
                color="primary"
                focused />
              <br />
              <Button
                variant="outlined"
                onClick={handleUpdateBio}
              >submit</Button>
              <Button
                variant="outlined"
                onClick={toggleEdit}
              >cancel</Button>
            </div> :
            <div>
              <h3>{user.bio ? user.bio : 'we do not have a bio'}</h3><Button
                onClick={toggleEdit}>Update Your Bio</Button>
            </div>
        }
        <ul className={styles.userSongs}>
        my songs
          {
            user?.songs?.map((song) => {
            return <li key={song.id}>
            <p>song# {song.id}</p>
            <Button onClick={() => handlePlaySong(song.id)}>play me</Button>
            </li>
            })
          }
        </ul>
      </section>
    </div>
  )
}

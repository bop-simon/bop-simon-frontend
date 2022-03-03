import { useState } from 'react'
import MenuBar from '../../components/MenuBar/MenuBar'
import { useUser } from '../../context/UserContext'
import styles from './profile.css'
import triangle from '../../assets/triangle.png'
import { editsProfile } from '../../services/profile'
import { TextField, Button } from '@mui/material'


export default function About() {

   const [password, setPassword]=useState('')
   const [isEditing, setIsEditing] = useState(false)

   const {user, setUser}= useUser()
  

   const handleUpdatePassword = async() => {
       editsProfile(id,{password})
   }

   const toggleEdit = () => {
     setIsEditing(!isEditing)
   }

  const handleChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div className={styles.profile}>
      <MenuBar />
      <section className={styles.profileCard}>
        <img src={triangle} alt="green triangle with three eyes, mouth agape" />
        <h1>{user.username}</h1>
        <h2>High Score</h2>
        <p>{user.score < 1 ?`looks like someone hasn't been able to beat Simon yet...`:user.score}</p>
      </section>
      <Button
        onClick={toggleEdit}>update password</Button>

      {
        isEditing ?
        <div
          className={styles.editPass}
        >
          <TextField 
          onChange={handleChange}
          label="new pass" 
          color="secondary" 
          focused />
          <br />
        <Button 
          variant="outlined" 
          // onClick={handleClick}
        >submit</Button>
        <Button 
          variant="outlined" 
          onClick={toggleEdit}
        >cancel</Button>
        </div> :
        ''
      }
    </div>
  )
}

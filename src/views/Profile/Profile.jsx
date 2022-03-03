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
     const updatePass = confirm('Would you like to update your password?');
     if(updatePass){
       editsProfile(id,{password})
     }
   }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const toggleEdit = () => {
    setIsEditing(!isEditing)
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
        <>
          <TextField 
          onChange={handlePasswordChange}
          label="password" 
          color="secondary" 
          focused />
        <Button 
          variant="outlined" 
          // onClick={handleClick}
        >submit</Button>
        </> :
        ''
      }
    </div>
  )
}

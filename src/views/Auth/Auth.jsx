import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AuthQuestion from "../../components/Auth/AuthQuestion/AuthQuestion.jsx";
import UserForm from "../../components/Auth/UserForm/UserForm.jsx";
import { useUser } from "../../context/UserContext.jsx";
import { logIn, signUp } from "../../services/auth.js";
import { postProfile } from "../../services/profile.js";
import { getCurrentUser, getUserById } from "../../services/user.js";
import styles from './auth.css'
///when we submit our username/password on login or signup
///the message signed in sucessfully is set as the user in context
///if we hardcode the home view 


export default function Auth() {
  const navigate = useNavigate()
  const { setUser } = useUser();

  const [answered, setAnswered] = useState(false)
  const [formError, setFormError] = useState('')
  const [isSigningUp, setIsSigningUp] = useState(true)
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  console.log('is signing up', isSigningUp)

  const handleSignUp = async () => {
    const { username, password } = formData
    if(username.length < 2) {
      setFormError('please enter a username greater than 1 character')
    }
    if(password.length < 8) {
      setFormError('please enter a password with more than 8 characters.')
    }
    try {
        await signUp(username, password)
        await logIn(username, password)
        await postProfile({ score: 0, bio: ''})
        const user = await getCurrentUser()
        await setUser(user)
        navigate('/home')
      } catch (error) {
        setFormError(error)
      }
    } 
  
  const handleLogin = async () => {
    const { username, password } = formData

    if(username.length < 2) {
      setFormError('please enter a username greater than 1 character')
    }
    if(password.length < 8) {
      setFormError('please enter a password with more than 8 characters.')
    }

      try {
        await logIn(username, password)
        const user = await getCurrentUser()
        await setUser(user)

        navigate('/home')
      } catch (error) {
        //figure out why catch isn't working when trying to login with a username that doesn't exist
        setFormError(error)
      }
  }

  const handleStateChange = (e) => {
    const { value, name } = e.target
    setFormData({...formData, [name]: value})
  }

  const toggleSignUp = (e) => {
    setAnswered(true)
    setIsSigningUp(e.target.value)
  }

  return (
    <div className={styles.auth} >
      {
        answered ?
        <UserForm
          handleChange={handleStateChange}
          handleSubmit={ isSigningUp === 'true' ? handleSignUp : handleLogin }
          formState={formData}
        /> :
        <AuthQuestion
          handleChange={toggleSignUp}
        />
      }
      { formError ? <p>{formError}</p> : ''}
    </div>
  )
}

import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AuthQuestion from "../../components/Auth/AuthQuestion/AuthQuestion.jsx";
import UserForm from "../../components/Auth/UserForm/UserForm.jsx";
import { logIn, signUp } from "../../services/auth.js";
import styles from './auth.css'

export default function Auth() {
  const navigate = useNavigate()

  const [answered, setAnswered] = useState(false)
  const [formError, setFormError] = useState('')
  const [isSigningUp, setIsSigningUp] = useState(true)
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  console.log('is signing up', isSigningUp)

  const handleSignUp = async () => {
    console.log("Form Data - handleSubmit", formData)
    const { username, password } = formData

    if(username.length < 2) {
      setFormError('please enter a username greater than 1 character')
    }
    if(password.length < 8) {
      setFormError('please enter a password with more than 8 characters.')
    }
    try {
        console.log('trying to sign up')
        await signUp(username, password)
        await logIn(username, password)
        console.log('sign up and login successful')
        navigate('/home')
      } catch (error) {
        setFormError(error)
      }
    } 
  
  const handleLogin = async () => {
    console.log("Form Data - handleSubmit", formData)
    const { username, password } = formData

    if(username.length < 2) {
      setFormError('please enter a username greater than 1 character')
    }
    if(password.length < 8) {
      setFormError('please enter a password with more than 8 characters.')
    }

      try {
        console.log('trying to login')
        await logIn(username, password)
        console.log('login successful')
        navigate('/home')
      } catch (error) {
        setFormError(error)
      }
  }

  const handleStateChange = (e) => {
    const { value, name } = e.target
    setFormData({...formData, [name]: value})
  }

  const toggleSignUp = () => {
    setAnswered(true)
    setIsSigningUp(true)
  }

  return (
    <div className={styles.auth} >
      {
        answered ?
        <UserForm
          handleChange={handleStateChange}
          handleSubmit={ isSigningUp ? handleSignUp : handleLogin }
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

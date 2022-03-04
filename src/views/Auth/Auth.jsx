import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext.jsx'
import { logIn, signUp } from '../../services/auth.js'
import { postProfile } from '../../services/profile.js'
import { getCurrentUser } from '../../services/user.js'
import AuthQuestion from '../../components/Auth/AuthQuestion/AuthQuestion.jsx'
import UserForm from '../../components/Auth/UserForm/UserForm.jsx'
import styles from './auth.module.css'

export default function Auth() {
  const [answered, setAnswered] = useState(false)
  const [formError, setFormError] = useState('')
  const [isSigningUp, setIsSigningUp] = useState(true)
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const navigate = useNavigate()
  const { setUser } = useUser()

  const handleSignUp = async () => {
    const { username, password } = formData
    if (username.length < 2) {
      setFormError('please enter a username greater than 1 character')
      return
    }
    if (password.length < 8) {
      setFormError('password must have > 8 characters.')
      return
    }
    try {
      await signUp(username, password)
      await logIn(username, password)
      await postProfile({ score: 0, bio: '' })
      const user = await getCurrentUser()
      await setUser(user)
      navigate('/home')
    } catch (error) {
      setFormError(error)
    }
  }

  const handleLogin = async () => {
    const { username, password } = formData
    if (username.length < 2) {
      setFormError('please enter a username greater than 1 character')
      return
    }
    if (password.length < 8) {
      setFormError('please enter a password with more than 8 characters.')
      return
    }
    try {
      await logIn(username, password)
      const user = await getCurrentUser()
      await setUser(user)
      navigate('/home')
    } catch (error) {
      setFormError(error)
    }
  }

  const handleStateChange = (e) => {
    const { value, name } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const toggleSignUp = (e) => {
    setAnswered(true)
    setIsSigningUp(e.target.value)
  }

  return (
    <div className={styles.auth}>
      {answered ? (
        <UserForm
          handleChange={handleStateChange}
          handleSubmit={isSigningUp === 'true' ? handleSignUp : handleLogin}
          formState={formData}
        />
      ) : (
        <AuthQuestion handleChange={toggleSignUp} />
      )}
      {formError ? <p>{formError}</p> : ''}
    </div>
  )
}

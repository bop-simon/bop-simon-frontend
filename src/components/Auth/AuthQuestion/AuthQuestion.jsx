import { Button } from '@mui/material'
import styles from './authquestion.module.css'

export default function AuthQuestion({ handleChange }) {
  return (
    <div className={styles.authQuestion}>
      <p>please login or sign up to continue</p>
      <Button 
        sx={ { borderRadius: 28 } }
        variant="outlined" 
        onClick={handleChange}
        name='isSigningUp'
      >sign me up</Button>
      <Button 
        sx={ { borderRadius: 28 } }
        variant="outlined" 
        onClick={handleChange} 
        name='isSigningUp'
      >log me in</Button>
    </div>
  )
}

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
        value={true}
      >sign me up</Button>
      <Button 
        sx={ { borderRadius: 28 } }
        variant="outlined" 
        onClick={handleChange} 
        name='isSigningUp'
        value={false}
      >log me in</Button>
    </div>
  )
}

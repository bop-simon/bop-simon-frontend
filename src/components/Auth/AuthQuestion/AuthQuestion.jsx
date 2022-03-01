import { Button } from '@mui/material'
import styles from './authquestion.module.css'

export default function AuthQuestion({ onSubmit }) {

  const handleChange = (e) => {
    onSubmit(e)
  }

  return (
    <div className={styles.authQuestion}>
      <p>please login or sign up to continue</p>
      <Button 
        sx={ { borderRadius: 28 } }
        variant="outlined" 
        onClick={handleChange}
        value={true}
        name='isSigningUp'
      >sign me up</Button>
      <Button 
        sx={ { borderRadius: 28 } }
        variant="outlined" 
        onClick={handleChange} 
        value={false}
        name='isSigningUp'
      >log me in</Button>
    </div>
  )
}

import { Button } from '@mui/material'

export default function AuthQuestion({ onSubmit, nextStep }) {

  const handleChange = (e) => {
    onSubmit(e)
    nextStep(e)
  }

  return (
    <div>
      <p>Have you logged in here before?</p>
      <Button 
        variant="outlined" 
        onClick={handleChange}
        value={true}
        name='isSigningUp'
      >yes</Button>
      <Button 
        variant="outlined" 
        onClick={handleChange} 
        value={false}
        name='isSigningUp'
      >no</Button>
    </div>
  )
}

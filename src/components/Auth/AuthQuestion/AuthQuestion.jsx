import { Button } from '@mui/material'
import React, { useState } from 'react'

export default function AuthQuestion({ onSubmit, isSigningUp }) {

  const [signUp, setSignUp] = useState('')

  console.log("SIGN UP", signUp)

  const handleChange = (e) => {
    const { value } = e.target
    setSignUp(value)
    onSubmit("isSigningUp", e)
  }



  return (
    <div>
      <p>Have you logged in here before?</p>
      <Button 
        variant="outlined" 
        onClick={handleChange}
        value={true}
      >yes</Button>
      <Button 
        variant="outlined" 
        onClick={handleChange} 
        value={false}
      >no</Button>
    </div>
  )
}

import React, { useState } from 'react'
import AuthQuestion from '../AuthQuestion/AuthQuestion.jsx'
import Password from '../Password/Password.jsx'
import Username from '../Username/Username.jsx'

export default function UserForm() {
  const [formState, setFormState] = useState({
    step:1,
    isSigningUp:'',
    username: '',
    password:''
  })

  let { step } = formState

  console.log("FORM STATE", formState)

  function nextStep(e) {
    e.preventDefault()
    let { step } = formState
    setFormState({
      ...formState,
      step: step + 1
    })
  }

  function prevStep(e) {
    e.preventDefault()
    let { step } = formState
    setFormState({
      step: step - 1 
    })
  }

  const handleChange = async (e) => {
    const { value, name } = e.target
    setFormState({...formState, [name]: value})
  }

  if (step === 1) {
    return(
      <AuthQuestion
        onSubmit={handleChange}
        nextStep={nextStep}
      />
    )
  }

  if (step === 2) {
    return(
      <Username
        onSubmit={handleChange}
        nextStep={nextStep}
      />
    )
  }

  if (step = 3) {
    return(
      <Password
        onSubmit={handleChange}
      />
    )
  }

  if (step = 4) {
    history.push('/home')
  }

  else {
    return(
      <p>No step found</p>
    )
  }
}

import React, { useState } from 'react'
import AuthQuestion from '../AuthQuestion/AuthQuestion.jsx'
import UInput from '../UInput/UInput.jsx'

export default function UserForm() {
  const [formState, setFormState] = useState({
    step:1,
    isSigningUp:'',
    username: '',
    password:''
  })

  let { step } = formState

  console.log(formState)

  function nextStep(e) {
    e.preventDefault()
    let { step } = formState
    setFormState({
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

  const handleChange = async (input, e) => {
    setFormState({ [input]: e.target.value })
    nextStep(e)
  }

  if (step === 1) {
    return(
      <AuthQuestion
        onSubmit={handleChange}
        isSigningUp={formState.isSigningUp}
      />
    )
  }

  if (step === 2) {
    return(
      <UInput
        handleChange
      />
    )
  }

  // if (step = 3) {
  //   return(
  //     <Password />
  //   )
  // }

  else {
    return (
      <p>no steps found</p>
    )
  }

}

import React, { useState } from 'react'
import { Button, TextField } from "@mui/material";


export default function UserForm({ handleSubmit, handleChange, formState }) {

  const handleClick = () => {
    handleSubmit()
  }

  return (
    <>
      <TextField 
        value={formState.username}
        onChange={handleChange}
        name="username"
        label="username" 
        color="secondary" 
        focused />
      <TextField 
        value={formState.password}
        onChange={handleChange}
        name="password" 
        label="password" 
        color="secondary" 
        focused />
      <Button
        onClick={handleClick}
        variant="outlined" 
      >next</Button>
    </>
  )
}


import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function Username({ onSubmit }) {

  const [username, setUsername] = useState('')

  console.log("USERNAME", username)

  const handleChange = (e) => {
    const { value } = e.target
    setUsername(value)
  }
  
  const handleClick = (e) => { 
    onSubmit("username", e)
  }

  return (
    <div>
      <TextField 
        onChange={handleChange}
        label="username" 
        color="secondary" 
        focused />
      <Button 
        variant="outlined" 
        onClick={handleClick}
      >next</Button>
    </div>
  )
}

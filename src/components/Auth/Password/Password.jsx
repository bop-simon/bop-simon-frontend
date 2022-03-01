import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function Password({ onSubmit }) {

  const [password, setPassword] = useState('')

  console.log("PASS", password)

  const handleChange = (e) => {
    const { value } = e.target
    setPassword(value)
  }
  
  const handleClick = (e) => { 
    onSubmit("password", e)
  }

  return (
    <div>
      <TextField 
        onChange={handleChange}
        label="password" 
        color="secondary" 
        focused />
      <Button 
        variant="outlined" 
        onClick={handleClick}
      >next</Button>
    </div>
  )
}

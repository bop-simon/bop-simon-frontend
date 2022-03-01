import { Button, TextField } from "@mui/material";
import classes from './userform.module.css'


export default function UserForm({ handleSubmit, handleChange, formState }) {

  const handleClick = () => {
    handleSubmit()
  }

  return (
    <div className={classes.userForm}>
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
    </div>
  )
}


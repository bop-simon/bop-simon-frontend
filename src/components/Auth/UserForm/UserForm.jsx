import { Button, TextField } from '@mui/material'
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
        color="purple"
        focused
      />
      <TextField
        value={formState.password}
        onChange={handleChange}
        name="password"
        type="password"
        label="password"
        color="purple"
        focused
      />
      <Button
        onClick={handleClick}
        variant="outlined"
        sx={{ borderRadius: 28, marginTop: 3 }}
        className={classes.contButton}
      >
        continue
      </Button>
    </div>
  )
}

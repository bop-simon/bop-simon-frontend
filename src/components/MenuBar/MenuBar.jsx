import styles from '../../App.css'
import { useState } from 'react'
import UserMenu from './UserMenu'
import HamburgerMenu from './HamburgerMenu'
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  FormGroup,
  FormControlLabel,
  Switch
} from '@mui/material'

export default function MenuBar() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [auth, setAuth] = useState(true)

  const handleChange = (event) => {
    setAuth(event.target.checked)
  }
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box
      sx={{ justifyContent: 'center', paddingBottom: 6 }}
      className={styles.appBar}
    >
      <FormGroup sx={{ display: 'block' }}>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar
        position="static"
        sx={{
          boxShadow: 0,
          bgcolor: 'appBar',
          border: 2,
          borderRadius: 1
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'center'
          }}
        >
          <HamburgerMenu />
          <Typography component="div" sx={{ flexGrow: 1 }}></Typography>
          {auth && <UserMenu />}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

import AccountCircle from '@mui/icons-material/AccountCircle'
import { IconButton, MenuItem, Menu } from '@mui/material'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext.jsx'
import { signOut } from '../../services/auth.js'
import styles from './menubar.module.css'

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = useState(null)

  const { user, setUser } = useUser()

  const navigate = useNavigate()

  const handleChange = (event) => {
    setAuth(event.target.checked)
  }
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = async () => {
    await signOut()
    navigate('/')
    setUser({})
  }

  return (
    <>
      <div className={styles.userInfo}>
        {/* <h3>Rank 3</h3> */}
        <h3>{user.username}</h3>
        <h3>score: {user.score ? user.score : `0`}</h3>
      </div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={0}
        sx={{
          padding: 0
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            borderTop: 2,
            borderBottom: 2,
            borderLeft: 2,
            borderRight: 2
          }}
        >
          <Link to="/profile">Profile</Link>
        </MenuItem>
        <MenuItem
          onClick={handleLogout}
          sx={{
            borderBottom: 2,
            borderLeft: 2,
            borderRight: 2
          }}
        >
          Log Out
        </MenuItem>
      </Menu>
    </>
  )
}

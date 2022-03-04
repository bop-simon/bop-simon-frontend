import circle from '../../assets/circle.png'
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
        <h3>{user.username}</h3>
       <h3> <i>level: {user.score ? user.score/5 : `0`}</i> {' '}🎵{' '}<i>
        score: {user.score ? user.score : `0`}</i></h3>
      </div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        className={styles.iconC}
      >
        <img className={styles.accountIcon} src={circle} alt="" />
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

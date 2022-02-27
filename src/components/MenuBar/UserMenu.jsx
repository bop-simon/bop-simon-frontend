import AccountCircle from '@mui/icons-material/AccountCircle'
import { IconButton, MenuItem, Menu } from '@mui/material'
import { Link } from 'react-router-dom'

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [auth, setAuth] = React.useState(true)

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
    <>
      <h3>sillyg00se 25pts Rank 3</h3>
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
          onClick={handleClose}
          // handleLogOut ^^^
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

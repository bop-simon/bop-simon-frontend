import MenuIcon from '@mui/icons-material/Menu'
import { IconButton, MenuItem, Menu } from '@mui/material'

export default function HamburgerMenu() {
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
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={0}
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
          Play
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            borderBottom: 2,
            borderLeft: 2,
            borderRight: 2
          }}
        >
          Learn
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            borderBottom: 2,
            borderLeft: 2,
            borderRight: 2
          }}
        >
          Leaderboard
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            borderBottom: 2,
            borderLeft: 2,
            borderRight: 2
          }}
        >
          About Bop Simon
        </MenuItem>
      </Menu>
    </>
  )
}

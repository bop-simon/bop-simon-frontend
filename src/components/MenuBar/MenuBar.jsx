import styles from '../../App.css'
import UserMenu from './UserMenu'
import HamburgerMenu from './HamburgerMenu'
import { AppBar, Typography, Toolbar, Box } from '@mui/material'

export default function MenuBar() {
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
          <UserMenu />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

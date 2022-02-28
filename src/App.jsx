import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import RoutesComponent from './components/RoutesComponent/RoutesComponent'
import Splash from './components/Splash/Splash'
import Home from './views/Home/Home'
import Leaderboard from './views/Leaderboard/Leaderboard'
import About from './views/About/About'
import Profile from './views/Profile/Profile'
import Theme from './context/Theme.js'
import MenuBar from './components/MenuBar/MenuBar'
export default function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <MenuBar />
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/home" element={<Home />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { UserProvider } from './context/UserContext.jsx'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'
import Splash from './views/Splash/Splash'
import Home from './views/Home/Home'
import Leaderboard from './views/Leaderboard/Leaderboard'
import About from './views/About/About'
import Profile from './views/Profile/Profile'
import Theme from './context/Theme.js'
import Auth from './views/Auth/Auth.jsx'

export default function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="auth" element={<Auth />} />
            <Route path="home" element={ <PrivateRoute children={<Home />}/> } />
            <Route path="home/:id" element={ <PrivateRoute children={<Home />}/> } />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="about" element={<About />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </UserProvider>
      </ThemeProvider>
    </>
  )
}

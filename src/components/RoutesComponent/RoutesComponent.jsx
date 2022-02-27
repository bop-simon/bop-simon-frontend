import { Route, Routes } from 'react-router-dom'
import Splash from '../../views/Splash/Splash'
import Home from '../../views/Home/Home'
import Leaderboard from '../Leaderboard/Leaderboard'
import About from '../../views/About/About'
import Profile from '../../views/Profile/Profile'

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

import { Route, Routes } from 'react-router-dom'
import Splash from '../../components/Splash/Splash'
import Home from '../../views/Home/Home'
import Leaderboard from '../../views/Leaderboard/Leaderboard'
import About from '../../views/About/About'
import Profile from '../../views/Profile/Profile'

export default function RoutesComponent() {
  return (
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
   )
}

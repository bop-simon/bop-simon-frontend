import { Route, Routes } from 'react-router-dom';
import Splash from '../../views/Splash/Splash';
import Home from '../../views/Home/Home';
import Leaderboard from '../Leaderboard/Leaderboard';

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
  );
}

import MenuBar from '../../components/MenuBar/MenuBar'
import styles from './leaderboard.css'
import { useState, useEffect } from 'react'
import LeaderList from '../../components/LeaderList/LeaderList';
import { fetchHighScores } from '../../services/fetch';

export default function Leaderboard() {
  const [scoreLeaders, setScoreLeaders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getLeaderBoard = async () => {
      const leaders = await fetchHighScores();
      setScoreLeaders(leaders);
      setIsLoading(false);
    }
    getLeaderBoard();
  }, []);

  return (
    <>
      {/* <MenuBar /> */}
      <section className={styles.leaderCard}>
        {/* <ol>
          <h2>Rankings</h2>
          <li>Bop Simon | 28</li>
          <li>Taylor | 27 </li>
          <li>sillyg00se | 20</li>
          <li>Your Acutal Dad | 20</li>
        </ol> */}
        {isLoading ? <h1>Loading...</h1> : (<LeaderList leaders={scoreLeaders} />)}
      </section>
    </>
  )
}
//

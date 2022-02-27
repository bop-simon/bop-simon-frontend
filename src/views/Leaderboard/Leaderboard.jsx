import MenuBar from '../MenuBar/MenuBar'
import styles from './leaderboard.css'

export default function Leaderboard() {
  return (
    <>
      <MenuBar />
      <section className={styles.leaderCard}>
        <ol>
          <h2>Rankings</h2>
          <li>Bop Simon | 28</li>
          <li>Taylor | 27 </li>
          <li>sillyg00se | 20</li>
          <li>Your Acutal Dad | 20</li>
        </ol>
      </section>
    </>
  )
}

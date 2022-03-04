import styles from './welcome.css'
import simon from '../../assets/simon.png'

export default function Welcome() {
  return (
    <main className={styles.splash}>
      <div className={styles.welcome} aria-label="welcome">
        Welcome to Bop Simon!
      </div>
      <img src={simon} alt="Bop-Simon" height="50%" className={styles.simon} />
      <div className={styles.subheader} aria-label="clickAnywhere">
        Click anywhere to begin.
      </div>
    </main>
  )
}

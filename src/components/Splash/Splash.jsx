import styles from '../../App.css'
import Welcome from '../../components/Welcome/Welcome'
import { Link, BrowserRouter } from 'react-router-dom'

export default function Splash() {
  return (
    <main className={styles.splash}>
      <BrowserRouter>
        <Link to="/home">
          <Welcome />
        </Link>
      </BrowserRouter>
    </main>
  )
}

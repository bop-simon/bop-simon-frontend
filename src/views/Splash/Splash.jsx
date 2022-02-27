import styles from '../../App.css';
import Welcome from '../../components/Welcome/Welcome';
import { Link } from 'react-router-dom';

export default function Splash() {
  return (
    <main className={styles.splash}>
      <Link to="/home">
        <Welcome />
      </Link>
    </main>
  );
}

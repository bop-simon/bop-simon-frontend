import MenuBar from '../../components/MenuBar/MenuBar';
import Game from '../../components/Game/Game';
import styles from './home.css';

export default function Home() {
  return (
    <main className={styles.home}>
      <MenuBar />
      <Game />
    </main>
  );
}

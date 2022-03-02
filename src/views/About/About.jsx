import MenuBar from '../../components/MenuBar/MenuBar'
import styles from './about.css'
import simon from '../../assets/simon.png'

export default function About() {
  return (
    <>
      <MenuBar />
      <section className={styles.aboutCard}>
        <h1 className={styles.aboutHeading}>About Bop Simon</h1>
        <div>
          <img
            src={simon}
            alt="Bop-Simon"
            height="50%"
            className={styles.simon}
          />
        </div>
      </section>
    </>
  )
}

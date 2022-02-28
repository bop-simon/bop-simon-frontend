import MenuBar from '../../components/MenuBar/MenuBar'
import styles from './profile.css'
import simon from '../../assets/simon.png'

export default function About() {
  return (
    <>
      {/* <MenuBar /> */}
      <section className={styles.profileCard}>
        <h1>User Profile!</h1>
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

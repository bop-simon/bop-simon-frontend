import MenuBar from '../../components/MenuBar/MenuBar'
import styles from './about.module.css'
import simon from '../../assets/simon.png'
import sarani from '../../assets/Sarani.png'
import julius from '../../assets/Julius.png'
import taylor from '../../assets/Taylor.png'
import katie from '../../assets/Katie.png'

export default function About() {
  return (
    <>
      <MenuBar />
      <section className={styles.aboutCard}>
        <h1 className={styles.aboutHeading}>About Bop Simon</h1>
        <div>
          <div className={styles.team}>
          <img
            src={simon}
            alt="Bop-Simon"
            height="50%"
            className={styles.simon}
          />
          <h2>Bop Simon</h2>
          <br></br>
          <p>I hail from the land where music runs free and contenders attempt to take my top spot. My favorite song is too complicated for the human mind to comprehend. It is a series of beeps and boops that only musical geniuses can comprehend. My favorite thing about this app is me.</p>
          </div>
         <br></br>
          <div className={styles.team}>
          <img
            src={taylor}
            alt="Bop-Simon"
            height="50%"
            className={styles.simon}
          />
          <h2>Taylor</h2>
          <br></br>
          <p>Full Stack Dev || S Tier Bop <a className={styles.link} href='https://www.linkedin.com/in/taylor-c-williams/'>LinkedIn</a> // <a className={styles.link} href='https://github.com/taylor-c-williams'>Github</a></p>
          </div>
         <br></br>
          <div className={styles.team}>
          <img
            src={katie}
            alt="Bop-Simon"
            height="50%"
            className={styles.simon}
          />
          <h2>Katie</h2>
          <br></br>
          <p>Full Stack Software Engineer || Bop Certified <a className={styles.link} href='https://www.linkedin.com/in/k-schrattenholzer/'>LinkedIn</a> // <a className={styles.link} href='https://github.com/k-schrattenholzer'>Github</a></p>
          </div>
         <br></br>
          <div className={styles.team}>
          <img
            src={julius}
            alt="Bop-Simon"
            height="50%"
            className={styles.simon}
          />
          <h2>Julius</h2>
          <br></br>
          <p>Full Stack Software Engineer || Bop Certified <a className={styles.link} href='https://www.linkedin.com/in/juliusfranklin88/'>LinkedIn</a> // <a className={styles.link} href='https://github.com/coding-neophyte'>Github</a></p>
          </div>
         <br></br>
          <div className={styles.team}>
          <img
            src={sarani}
            alt="Bop-Simon"
            height="50%"
            className={styles.simon}
          />
          <h2>Sarani</h2>
          <br></br>
          <p>Full Stack Developer || Bop Certified <a className={styles.link} href='https://www.linkedin.com/in/emily-sarani/'>LinkedIn</a> // <a className={styles.link} href='https://github.com/EmilyDSarani'>Github</a> </p>
          </div>
        </div>
      </section>
    </>
  )
}

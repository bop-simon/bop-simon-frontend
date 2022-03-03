import MenuBar from '../../components/MenuBar/MenuBar'
import styles from './about.css'
import simon from '../../assets/simon.png'
import sarani from '../../assets/OctogonWHeadphones.png'
import julius from '../../assets/PentagonWHeadphones.png'
import taylor from '../../assets/ScaleneBigEyes.png.png'
import katie from '../../assets/ShapeWEarbuds.png'

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
          <hr></hr>
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
          <hr></hr>
          <p>Chase ball of string eat plants, meow, and throw up because I ate plants going to catch the red dot today going to catch the red dot today. I could pee on this if I had the energy. <a href='https://www.linkedin.com/in/taylor-c-williams/'>LinkedIn</a> // <a href='https://github.com/taylor-c-williams'>Github</a></p>
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
          <hr></hr>
          <p>Meow. Tuxedo cats always looking dapper hunt anything that moves, but grass smells good playing with balls of wool attack feet, yet chase ball of string. <a href='https://www.linkedin.com/in/k-schrattenholzer/'>LinkedIn</a> // <a href='https://github.com/k-schrattenholzer'>Github</a></p>
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
          <hr></hr>
          <p>Intently stare at the same spot need to chase tail, so sit on human they not getting up ever eat the rubberband a nice warm laptop for me to sit on but cat ass trophy. Catch small lizards, bring them into house, then unable to find them on carpet. <a href='https://www.linkedin.com/in/juliusfranklin88/'>LinkedIn</a> // <a href='https://github.com/coding-neophyte'>Github</a></p>
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
          <hr></hr>
          <p>My favorite thing about this app was learning how tonejs works and how to utilize it. studying the game logic was a lot of fun and planning out and studying it was amazing. It was a lot of fun playing with different notes and I am glad that this team incorporated a free-play that allows users to join in on the fun. <a href='https://www.linkedin.com/in/emily-sarani/'>LinkedIn</a> // <a href='https://github.com/EmilyDSarani'>Github</a> </p>
          </div>
        </div>
      </section>
    </>
  )
}

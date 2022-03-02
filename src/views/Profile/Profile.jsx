import MenuBar from '../../components/MenuBar/MenuBar'
import styles from './profile.css'
import simon from '../../assets/simon.png'
// import useUser from '../../context/UserContext'

export default function About() {
  //const {user, setUser} = useUser()

  //function PasswordUpdate(){
  // grab the user id and change the password associated with that user
  //this would probably take in a patch/put, check the backend and create that route in user.js
  //then return the updated user
  //}
  //next we will


  return (
    <>
      <MenuBar />
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

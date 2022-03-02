import { motion } from 'framer-motion'
import Backdrop from '../Backdrop/Backdrop.jsx'
import styles from './popup.module.css'

const dropIn = {
  hidden: {
    y:'-100vh',
    opacity: 0
  },
  visible: {
    y:'0',
    opacity:1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    }
  },
  exit: {
    y:'100vh',
    opacity: 0
  }
}

export default function Popup({ handleClose, text }) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal}
        variants={dropIn}
        initial='hidden'
        animate="visible"
        exit="exit"
        >
          {text}
      </motion.div>

    </Backdrop>
  )
}

    // <div className={styles.popup}>
    //     <p>Beat the Bop!</p>
    //     <p><MusicNote/> press button to start game </p>
    //     <p><MusicNote/>watch closely while Bop Simon plays, and try to play it back</p>
    //   </div>
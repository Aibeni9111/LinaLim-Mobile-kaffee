import { motion } from 'framer-motion'
import apeIcon from '../assets/ape-icon.svg'
import './AnimatedLogo.css'

function AnimatedLogo() {
  return (
    <div className="animated-logo">
      <motion.img
        src={apeIcon}
        alt="LinaLim Mobile Kaffee"
        className="animated-logo__icon"
        initial={{ x: -420, y: 30, rotate: -20, opacity: 0 }}
        animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
        transition={{
          x: { type: 'spring', stiffness: 70, damping: 10, delay: 0.15 },
          y: { type: 'spring', stiffness: 90, damping: 7, delay: 0.15 },
          rotate: { type: 'spring', stiffness: 80, damping: 8, delay: 0.15 },
          opacity: { duration: 0.2, delay: 0.15 },
        }}
      />

      <motion.div
        className="animated-logo__text"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.3, ease: 'easeOut' }}
      >
        <span className="animated-logo__name">LinaLim</span>
        <span className="animated-logo__tagline">Mobile Kaffee</span>
      </motion.div>
    </div>
  )
}

export default AnimatedLogo

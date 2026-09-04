import { motion } from 'framer-motion'
import bean1 from '../assets/bean-1.jpg'
import bean2 from '../assets/bean-2.avif'
import './PageTransition.css'

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3, ease: 'easeIn' } },
}

const beanVariants = {
  initial: { opacity: 0, x: '-10vw', rotate: 0 },
  animate: {
    opacity: [0, 1, 1, 0],
    x: '110vw',
    rotate: 320,
    transition: { duration: 0.7, ease: 'easeInOut' },
  },
  exit: { opacity: 0 },
}

function TransitionBean({ modifier, src }) {
  return (
    <motion.img
      src={src}
      alt=""
      aria-hidden="true"
      className={`page-transition__bean page-transition__bean--${modifier}`}
      variants={beanVariants}
    />
  )
}

function PageTransition({ children }) {
  return (
    <motion.div
      className="page-transition"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <TransitionBean modifier="1" src={bean1} />
      <TransitionBean modifier="2" src={bean2} />
      {children}
    </motion.div>
  )
}

export default PageTransition

import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import './MagneticButton.css'

const MOTION_TAGS = {
  a: motion.a,
  button: motion.button,
}

function MagneticButton({ as = 'a', className = '', children, ...props }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.2 })
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.2 })

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function handleMouseMove(event) {
    if (prefersReducedMotion) return

    const rect = ref.current.getBoundingClientRect()
    const relativeX = event.clientX - (rect.left + rect.width / 2)
    const relativeY = event.clientY - (rect.top + rect.height / 2)

    x.set(relativeX * 0.35)
    y.set(relativeY * 0.35)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const MotionTag = MOTION_TAGS[as] || motion.a

  return (
    <MotionTag
      ref={ref}
      className={`magnetic-button ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </MotionTag>
  )
}

export default MagneticButton

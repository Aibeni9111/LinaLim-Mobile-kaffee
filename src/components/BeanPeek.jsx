import bean1 from '../assets/bean-1.jpg'
import './BeanPeek.css'

function BeanPeek({ className = '' }) {
  return <img src={bean1} className={`bean-peek ${className}`} alt="" aria-hidden="true" />
}

export default BeanPeek

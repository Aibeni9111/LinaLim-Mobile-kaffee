import bean1 from '../assets/bean-1.jpg'
import bean2 from '../assets/bean-2.avif'
import bean3 from '../assets/bean-3.avif'
import './CoffeeBeans.css'

const BEANS = [
  { top: '12%', left: '6%', size: 44, duration: '15s', delay: '0s', src: bean1 },
  { top: '68%', left: '10%', size: 30, duration: '19s', delay: '2s', src: bean3 },
  { top: '18%', left: '86%', size: 60, duration: '17s', delay: '1s', src: bean2 },
  { top: '75%', left: '90%', size: 46, duration: '21s', delay: '3s', src: bean1 },
  { top: '45%', left: '48%', size: 32, duration: '16s', delay: '4s', src: bean3 },
]

function CoffeeBeans({ className = '' }) {
  return (
    <div className={`coffee-beans ${className}`} aria-hidden="true">
      {BEANS.map((bean, index) => (
        <span
          key={index}
          className="coffee-beans__spin"
          style={{ top: bean.top, left: bean.left, width: bean.size }}
        >
          <img
            src={bean.src}
            className="coffee-beans__bean"
            alt=""
            style={{
              animationDuration: bean.duration,
              animationDelay: bean.delay,
            }}
          />
        </span>
      ))}
    </div>
  )
}

export default CoffeeBeans

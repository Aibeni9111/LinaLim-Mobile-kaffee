import { useEffect, useState } from 'react'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import './QuickContactBar.css'

const PHONE_NUMBER = '+436606333398'
const WHATSAPP_NUMBER = '436606333398'
const BUSINESS_EMAIL = 'LinaLim@gmail.com'

function QuickContactBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`quick-contact ${isVisible ? 'is-visible' : ''}`}>
      <a
        className="quick-contact__item quick-contact__item--whatsapp"
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={16} />
        WhatsApp
      </a>

      <a className="quick-contact__item" href={`tel:${PHONE_NUMBER}`}>
        <Phone size={16} />
        Anrufen
      </a>

      <a className="quick-contact__item" href={`mailto:${BUSINESS_EMAIL}`}>
        <Mail size={16} />
        E-Mail
      </a>
    </div>
  )
}

export default QuickContactBar

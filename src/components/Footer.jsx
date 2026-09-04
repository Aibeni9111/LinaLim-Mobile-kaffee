import { Link } from 'react-router-dom'
import logo from '../assets/LinaLim2.svg'
import './Footer.css'

const WHATSAPP_NUMBER = '436606333398'
const PHONE_NUMBER = '+436606333398'
const BUSINESS_EMAIL = 'LinaLim@gmail.com'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo-badge">
          <img src={logo} alt="LinaLim Mobile Kaffee" className="footer__logo" />
        </span>

        <nav className="footer__nav">
          <Link to="/#about">Über uns</Link>
          <Link to="/#services">Leistungen</Link>
          <Link to="/#menu">Getränkekarte</Link>
          <Link to="/pakete">Pakete</Link>
          <Link to="/#faq">FAQ</Link>
          <Link to="/#contact">Kontakt</Link>
        </nav>

        <div className="footer__contact">
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
          <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>
          <span>Wien, Österreich</span>
        </div>

        <div className="footer__bottom">
          <span>© {currentYear} LinaLim Mobile Kaffee</span>
          <div className="footer__legal">
            <a href="/impressum.html">Impressum</a>
            <a href="/datenschutz.html">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

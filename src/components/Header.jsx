import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/LinaLim2.svg'
import './Header.css'

const NAV_LINKS = [
  { to: '/#about', label: 'Über uns' },
  { to: '/#services', label: 'Leistungen' },
  { to: '/#menu', label: 'Getränkekarte' },
  { to: '/pakete', label: 'Pakete' },
  { to: '/#gallery', label: 'Galerie' },
  { to: '/#faq', label: 'FAQ' },
  { to: '/#contact', label: 'Kontakt' },
]

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function updateHeaderHeight() {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          '--header-height',
          `${headerRef.current.offsetHeight}px`,
        )
      }
    }

    updateHeaderHeight()
    window.addEventListener('resize', updateHeaderHeight)

    return () => window.removeEventListener('resize', updateHeaderHeight)
  }, [])

  return (
    <header ref={headerRef} className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner container">
        <Link to="/#top" className="header__brand" onClick={() => setIsMenuOpen(false)}>
          <img src={logo} alt="LinaLim Mobile Kaffee" className="header__logo" />
        </Link>

        <nav className={`header__nav ${isMenuOpen ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="header__link"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className={`header__toggle ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Menü öffnen"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header

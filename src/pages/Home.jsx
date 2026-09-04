import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Services from '../components/Services.jsx'
import Process from '../components/Process.jsx'
import Menu from '../components/Menu.jsx'
import Faq from '../components/Faq.jsx'
import Contact from '../components/Contact.jsx'

function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [location])

  return (
    <PageTransition>
      <Hero />
      <About />
      <Services />
      <Process />
      <Menu />
      <Faq />
      <Contact />
    </PageTransition>
  )
}

export default Home

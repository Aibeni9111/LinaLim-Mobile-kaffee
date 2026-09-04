import { lazy, Suspense } from 'react'
import MagneticButton from './MagneticButton.jsx'
import SteamEffect from './SteamEffect.jsx'
import AnimatedLogo from './AnimatedLogo.jsx'
import './Hero.css'

const HeroScene = lazy(() => import('./HeroScene.jsx'))

function Hero() {
  return (
    <section className="hero" id="top">
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>
      <SteamEffect />

      <div className="hero__content container">
        <AnimatedLogo />

        <div className="hero__panel">
          <h1 className="hero__title">
            Mobiler Kaffee.
            <br />
            Für Ihr Event.
          </h1>

          <p className="hero__subtitle">
            Espresso vom Piaggio Ape — für Firmenevents, Märkte und private
            Feiern in Wien.
          </p>

          <MagneticButton as="a" href="#contact" className="hero__cta">
            Jetzt Anfrage stellen
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}

export default Hero

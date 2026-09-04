import { useEffect } from 'react'
import Reveal from '../components/Reveal.jsx'
import CoffeeBeans from '../components/CoffeeBeans.jsx'
import BeanPeek from '../components/BeanPeek.jsx'
import PageTransition from '../components/PageTransition.jsx'
import MagneticButton from '../components/MagneticButton.jsx'
import './Packages.css'

const WHATSAPP_NUMBER = '436606333398'

const PACKAGES = [
  {
    name: 'Basis',
    duration: '2 Stunden',
    guests: 'bis 40 Gäste',
    price: 'ab 290 €',
    features: [
      'Espresso, Cappuccino, Latte Macchiato',
      'Anfahrt in Wien inkludiert',
      '1 Barista',
    ],
  },
  {
    name: 'Standard',
    duration: '4 Stunden',
    guests: 'bis 80 Gäste',
    price: 'ab 490 €',
    features: [
      'Volle Getränkekarte',
      'Anfahrt in Wien inkludiert',
      '1 Barista',
      'Individuelles Branding-Schild',
    ],
    highlight: true,
  },
  {
    name: 'Ganztags',
    duration: '8 Stunden',
    guests: 'Unbegrenzt',
    price: 'ab 790 €',
    features: [
      'Volle Getränkekarte',
      'Anfahrt in Wien inkludiert',
      '1–2 Barista',
      'Individuelles Branding-Schild',
    ],
  },
]

function Packages() {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <PageTransition>
    <section className="packages">
      <span className="glow packages__glow"></span>
      <CoffeeBeans />

      <div className="container">
        <Reveal>
          <span className="packages__eyebrow">Pakete</span>
          <h1 className="packages__title">Transparente Preise, faire Einstiegsangebote</h1>
          <p className="packages__intro">
            Als junger Ein-Personen-Betrieb mit einem Ape können wir günstiger
            kalkulieren als große Anbieter mit ganzer Flotte. Die Preise unten
            sind Richtwerte — für Ihr konkretes Event erhalten Sie ein
            individuelles Angebot.
          </p>
        </Reveal>

        <div className="packages__grid">
          {PACKAGES.map((pkg, index) => {
            const message = `Hallo! Ich interessiere mich für das Paket "${pkg.name}" (${pkg.duration}, ${pkg.guests}).`
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              message,
            )}`

            return (
              <Reveal key={pkg.name} delay={index * 120}>
                <div
                  className={`packages__card ${pkg.highlight ? 'is-highlighted' : ''}`}
                >
                  <BeanPeek />
                  {pkg.highlight && <span className="packages__badge">Beliebt</span>}

                  <h2 className="packages__card-name">{pkg.name}</h2>
                  <p className="packages__card-meta">
                    {pkg.duration} · {pkg.guests}
                  </p>
                  <p className="packages__card-price">{pkg.price}</p>

                  <ul className="packages__features">
                    {pkg.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <MagneticButton
                    as="a"
                    className="packages__cta"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Paket anfragen
                  </MagneticButton>
                </div>
              </Reveal>
            )
          })}
        </div>

        <p className="packages__note">
          Mehrtägige Events, Standorte außerhalb Wiens oder besondere Wünsche?
          Schreiben Sie uns — wir erstellen Ihnen gerne ein individuelles
          Angebot.
        </p>
      </div>
    </section>
    </PageTransition>
  )
}

export default Packages

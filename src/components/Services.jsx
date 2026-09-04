import Reveal from './Reveal.jsx'
import BeanPeek from './BeanPeek.jsx'
import './Services.css'

const SERVICES = [
  {
    title: 'Firmenevents & Corporate Days',
    text: 'Kaffeepause mit Wow-Effekt für Ihr Team, Ihre Kunden oder Ihre Konferenz.',
  },
  {
    title: 'Messen & Märkte',
    text: 'Publikumsmagnet auf Wiener Märkten, Messen und Pop-up-Flächen.',
  },
  {
    title: 'Hochzeiten & private Feiern',
    text: 'Handgemachter Espresso als besonderes Highlight für Ihren großen Tag.',
  },
  {
    title: 'Produktlaunches & Markenaktivierung',
    text: 'Die mobile Kaffeebar als Eyecatcher für Ihre Markenkommunikation.',
  },
]

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <Reveal>
          <span className="services__eyebrow">Leistungen</span>
          <h2 className="services__title">Kaffee für Ihren Anlass</h2>
        </Reveal>

        <div className="services__grid">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={index * 100}>
              <div className="services__card">
                <BeanPeek />
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-text">{service.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

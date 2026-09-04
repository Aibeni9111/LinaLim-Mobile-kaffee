import Reveal from './Reveal.jsx'
import CoffeeBeans from './CoffeeBeans.jsx'
import './About.css'

const STATS = [
  { value: '2026', label: 'Gegründet in Wien' },
  { value: '100%', label: 'Handgemachter Espresso' },
  { value: '1', label: 'Ape, unbegrenzt viele Standorte' },
]

function About() {
  return (
    <section className="about" id="about">
      <span className="glow about__glow"></span>
      <CoffeeBeans />

      <div className="container about__inner">
        <Reveal>
          <span className="about__eyebrow">Über uns</span>

          <h2 className="about__title">
            Handgemachter Kaffee, wo immer Sie ihn brauchen.
          </h2>

          <p className="about__text">
            LinaLim Mobile Kaffee bringt italienische Espressokultur dorthin,
            wo sonst kein Kaffeewagen hinkommt. Unser umgebauter Piaggio Ape
            ist eine vollausgestattete Espressobar auf drei Rädern — kompakt
            genug für jeden Innenhof, jede Messehalle und jeden Marktplatz in
            Wien.
          </p>
        </Reveal>

        <div className="about__stats">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 120}>
              <div className="about__stat">
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

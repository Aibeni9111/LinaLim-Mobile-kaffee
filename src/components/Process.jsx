import Reveal from './Reveal.jsx'
import './Process.css'

const STEPS = [
  {
    number: '01',
    title: 'Anfrage stellen',
    text: 'Formular ausfüllen oder anrufen — mit Datum, Ort und ungefährer Gästezahl.',
  },
  {
    number: '02',
    title: 'Kostenlose Beratung',
    text: 'Wir besprechen Ihre Wünsche und den optimalen Standort für den Ape.',
  },
  {
    number: '03',
    title: 'Angebot erhalten',
    text: 'Transparentes Angebot innerhalb von 48 Stunden — keine versteckten Kosten.',
  },
  {
    number: '04',
    title: 'Event genießen',
    text: 'Wir kommen, bauen auf und servieren — Sie kümmern sich um nichts.',
  },
]

function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <Reveal>
          <span className="process__eyebrow">So funktioniert&apos;s</span>
          <h2 className="process__title">Von der Anfrage bis zum letzten Espresso</h2>
        </Reveal>

        <ol className="process__list">
          {STEPS.map((step, index) => (
            <li key={step.number} className="process__step">
              <Reveal delay={index * 100}>
                <span className="process__number">{step.number}</span>
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-text">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process

import { useState } from 'react'
import { Plus } from 'lucide-react'
import Reveal from './Reveal.jsx'
import './Faq.css'

const FAQ_ITEMS = [
  {
    question: 'Wie viel Vorlaufzeit brauchen Sie für eine Buchung?',
    answer:
      'Idealerweise 2–3 Wochen im Voraus. Bei kurzfristigen Anfragen fragen Sie einfach an — oft ist auch spontan noch etwas möglich.',
  },
  {
    question: 'Brauchen Sie Strom oder Wasser vor Ort?',
    answer:
      'Der Ape ist weitgehend autark. Ein Stromanschluss (230V) vor Ort ist von Vorteil, aber nicht zwingend nötig. Wasser bringen wir selbst mit.',
  },
  {
    question: 'Was passiert bei schlechtem Wetter?',
    answer:
      'Die Kaffeestation im Ape ist überdacht. Bei starkem Regen empfehlen wir einen überdachten Standort — das besprechen wir gemeinsam bei der Planung.',
  },
  {
    question: 'Wie viel Platz benötigt der Ape vor Ort?',
    answer:
      'Der Piaggio Ape ist sehr kompakt und passt durch die meisten Innenhöfe, Fußgängerzonen und Messehallen.',
  },
  {
    question: 'Wie wird der Preis berechnet?',
    answer:
      'Der Preis richtet sich nach Dauer, Gästezahl und Standort. Nach Ihrer Anfrage erhalten Sie ein individuelles, transparentes Angebot.',
  },
]

function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggleItem(index) {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section className="faq" id="faq">
      <div className="container faq__inner">
        <Reveal>
          <span className="faq__eyebrow">Häufige Fragen</span>
          <h2 className="faq__title">Gut zu wissen</h2>
        </Reveal>

        <div className="faq__list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = index === openIndex

            return (
              <Reveal key={item.question} delay={index * 80} className="faq__item">
                <button
                  type="button"
                  className="faq__question"
                  aria-expanded={isOpen}
                  onClick={() => toggleItem(index)}
                >
                  {item.question}
                  <Plus className={`faq__icon ${isOpen ? 'is-open' : ''}`} size={20} />
                </button>

                <div className={`faq__answer-wrap ${isOpen ? 'is-open' : ''}`}>
                  <p className="faq__answer">{item.answer}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faq

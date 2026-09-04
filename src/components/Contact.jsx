import { useState } from 'react'
import Reveal from './Reveal.jsx'
import './Contact.css'

const WHATSAPP_NUMBER = '436606333398'

const INITIAL_FORM = {
  name: '',
  company: '',
  email: '',
  date: '',
  message: '',
}

function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM)

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const message = `Neue Anfrage über die Website:
Name: ${formData.name}
Firma: ${formData.company}
E-Mail: ${formData.email}
Datum der Veranstaltung: ${formData.date}

Nachricht:
${formData.message}`

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`

    window.open(whatsappUrl, '_blank', 'noreferrer')
  }

  return (
    <section className="contact" id="contact">
      <span className="glow contact__glow"></span>

      <div className="container contact__grid">
        <Reveal className="contact__info">
          <span className="contact__eyebrow">Kontakt</span>
          <h2 className="contact__title">Planen wir Ihr Event</h2>
          <p className="contact__text">
            Schreiben Sie uns Details zu Datum, Ort und Anlass — wir melden
            uns innerhalb von 48 Stunden mit einem Angebot.
          </p>

          <a
            className="contact__whatsapp"
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
          >
            Lieber direkt chatten? Schreiben Sie uns auf WhatsApp
          </a>
        </Reveal>

        <Reveal delay={120} className="contact__form-wrap">
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="contact__field">
            <label htmlFor="company">Firma (optional)</label>
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="contact__field">
            <label htmlFor="email">E-Mail</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="contact__field">
            <label htmlFor="date">Datum der Veranstaltung</label>
            <input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="contact__field">
            <label htmlFor="message">Nachricht</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="contact__submit">
            Anfrage per WhatsApp senden
          </button>
        </form>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact

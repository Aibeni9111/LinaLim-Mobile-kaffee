import Reveal from './Reveal.jsx'
import CoffeeBeans from './CoffeeBeans.jsx'
import './Menu.css'

const MENU_ITEMS = [
  { name: 'Espresso', text: 'Kurz, intensiv, italienische Röstung', price: '2,50 €' },
  { name: 'Cappuccino', text: 'Espresso, heiße Milch, feiner Schaum', price: '3,50 €' },
  { name: 'Latte Macchiato', text: 'Drei Schichten Genuss', price: '4,00 €' },
  { name: 'Flat White', text: 'Doppelter Espresso, samtige Milch', price: '4,00 €' },
  { name: 'Filterkaffee', text: 'Langsam gebrüht, mild im Geschmack', price: '3,00 €' },
  { name: 'Heiße Schokolade', text: 'Für die kalten Wiener Tage', price: '3,50 €' },
]

function Menu() {
  return (
    <section className="menu" id="menu">
      <CoffeeBeans className="coffee-beans--dark" />

      <div className="container">
        <Reveal>
          <span className="menu__eyebrow">Getränkekarte</span>
          <h2 className="menu__title">Was wir servieren</h2>
        </Reveal>

        <ul className="menu__list">
          {MENU_ITEMS.map((item, index) => (
            <li key={item.name} className="menu__item">
              <Reveal delay={(index % 3) * 100}>
                <div className="menu__item-row">
                  <span className="menu__item-name">{item.name}</span>
                  <span className="menu__item-price">{item.price}</span>
                </div>
                <p className="menu__item-text">{item.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="menu__note">
          Alle Preise inkl. MwSt. Für Events erstellen wir Ihnen ein
          individuelles Angebot.
        </p>
      </div>
    </section>
  )
}

export default Menu

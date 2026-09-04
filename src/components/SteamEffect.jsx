import './SteamEffect.css'

const WISPS = [
  { left: '36%', size: 80, delay: '0s' },
  { left: '46%', size: 100, delay: '1.2s' },
  { left: '56%', size: 70, delay: '2.4s' },
]

function SteamEffect() {
  return (
    <div className="steam" aria-hidden="true">
      {WISPS.map((wisp, index) => (
        <span key={index} className="steam__rise" style={{ left: wisp.left }}>
          <span
            className="steam__wobble"
            style={{
              width: wisp.size,
              height: wisp.size * 2.4,
              animationDelay: wisp.delay,
            }}
          ></span>
        </span>
      ))}
    </div>
  )
}

export default SteamEffect

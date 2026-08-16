export default function LostRouteFallback({ resolved = false }) {
  return (
    <div className={`lost-route-fallback ${resolved ? 'is-resolved' : ''}`} aria-hidden="true">
      <div className="lost-route-grid" />
      <svg viewBox="0 0 640 520" focusable="false">
        <path className="lost-route-path" d="M80 400 L190 335 L286 360 L364 275 L462 286" />
        <path className="lost-route-guide" d="M462 286 C500 250 510 170 555 116" />
        <circle className="lost-route-dot" cx="80" cy="400" r="6" />
        <circle className="lost-route-dot" cx="190" cy="335" r="6" />
        <circle className="lost-route-dot" cx="286" cy="360" r="6" />
        <circle className="lost-route-dot" cx="364" cy="275" r="6" />
        <circle className="lost-route-detached" cx="555" cy="116" r="12" />
      </svg>
      <div className="lost-route-module"><span>JV</span><small>HOME / 00</small></div>
      <span className="lost-route-code">404</span>
    </div>
  )
}

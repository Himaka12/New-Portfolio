function Marquee({ items }) {
  return (
    <div className="marquee" aria-label="Skill highlights">
      <div className="marquee__track">
        {items.map((item) => (
          <span key={`track-a-${item}`} className="marquee__item">
            {item}
          </span>
        ))}
      </div>
      <div className="marquee__track" aria-hidden="true">
        {items.map((item) => (
          <span key={`track-b-${item}`} className="marquee__item">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee

const techItems = [
  { mark: 'Re', name: 'React' },
  { mark: 'Vi', name: 'Vite' },
  { mark: 'No', name: 'Node.js' },
  { mark: 'Mo', name: 'MongoDB' },
  { mark: 'Js', name: 'JavaScript' },
  { mark: 'Py', name: 'Python' },
  { mark: 'Gt', name: 'Git' },
  { mark: 'Ui', name: 'Responsive UI' },
]

function TechLogos() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <div className="section-head">
          <p className="section-label">Tech Logos</p>
          <h2 className="section-title">Core tools behind the work.</h2>
          <p className="section-copy">
            Styled as logo plates for now, so the first version stays lightweight
            while still highlighting the stack clearly.
          </p>
        </div>

        <div className="tech-grid">
          {techItems.map((item) => (
            <article key={item.name} className="tech-card">
              <span className="tech-card__mark">{item.mark}</span>
              <strong>{item.name}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechLogos

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <div>
          <p className="section-label">Contact</p>
          <h2 className="section-title">
            Let&apos;s build something thoughtful and useful.
          </h2>
          <p className="section-copy">
            Open to internships, collaborations, student product work, and web
            experiences that need both technical structure and visual care.
          </p>

          <div className="hero-actions">
            <a className="button" href="mailto:himaka.dev@example.com">
              Email Himaka
            </a>
            <a className="button button--ghost" href="#projects">
              Review projects
            </a>
          </div>
        </div>

        <div className="contact-panel">
          <div className="contact-item">
            <span>Email</span>
            <strong>himaka.dev@example.com</strong>
          </div>
          <div className="contact-item">
            <span>Main stack</span>
            <strong>React, Node.js, MongoDB, AI/ML</strong>
          </div>
          <div className="contact-item">
            <span>Best fit</span>
            <strong>Portfolio sites, MERN apps, research-driven builds</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

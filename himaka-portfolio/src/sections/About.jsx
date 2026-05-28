function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div>
          <p className="section-label">About</p>
          <h2 className="section-title">
            A developer who enjoys turning ideas into reliable web products.
          </h2>
          <p className="section-copy">
            Himaka is a full stack developer with a strong interest in modern
            interfaces, backend logic, data-driven features, and AI/ML
            experimentation. The work style blends design awareness with
            practical development thinking.
          </p>
          <p className="section-copy">
            This portfolio is designed to reflect a premium digital presence:
            bold, clean, and story-led, while still keeping the code simple,
            readable, and beginner-friendly.
          </p>

          <div className="about-highlights">
            <div className="info-chip">
              <strong>Approach</strong>
              <span>Build clean, learn fast, iterate smart.</span>
            </div>
            <div className="info-chip">
              <strong>Focus</strong>
              <span>MERN applications, dashboards, and research-driven builds.</span>
            </div>
            <div className="info-chip">
              <strong>Strength</strong>
              <span>Connecting UI clarity with backend structure.</span>
            </div>
          </div>
        </div>

        <div className="about-visual" aria-hidden="true">
          <div className="about-visual__card">
            <span className="section-label">Portfolio Direction</span>
            <h3>Dark luxury aesthetic</h3>
            <p>Big typography, visual storytelling, and smooth section rhythm.</p>
          </div>
          <div className="about-visual__stack">
            <div className="stack-card">
              <span>React</span>
              <strong>Interfaces</strong>
            </div>
            <div className="stack-card">
              <span>Node.js</span>
              <strong>APIs</strong>
            </div>
            <div className="stack-card">
              <span>MongoDB</span>
              <strong>Data Models</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

function getGreeting() {
  const hour = new Date().getHours()

  if (hour < 12) {
    return 'Good morning!'
  }

  if (hour < 18) {
    return 'Good afternoon!'
  }

  return 'Good evening!'
}

function Hero() {
  const greeting = getGreeting()

  return (
    <section className="section hero-section" id="home">
      <div className="hero-stage">
        <div className="hero-stage__bg" aria-hidden="true"></div>
        <div className="hero-stage__texture" aria-hidden="true"></div>

        <div className="hero-stage__meta">
          <p className="hero-meta-copy">{greeting}</p>

          <div className="hero-socials">
            <span>Socials</span>
            <a href="#contact">gh</a>
            <span>/</span>
            <a href="#contact">li</a>
            <span>/</span>
            <a href="#contact">cv</a>
          </div>

          <div className="hero-short-nav">
            <a href="#home">Index</a>
            <span>/</span>
            <a href="#about">About</a>
            <span>/</span>
            <a href="#projects">Projects</a>
          </div>

          <a className="hero-top-cta" href="#contact">
            Let&apos;s talk!
          </a>
        </div>

        <div className="hero-stage__body">
          <div className="hero-content">
            <div className="hero-intro">
              <p>Hi there! this is</p>
              <h1>
                <span className="hero-intro__primary">Himaka</span>
                <span className="hero-intro__secondary">Full Stack Developer</span>
              </h1>
            </div>

            <div className="hero-headline">
              <strong>SMART</strong>
              <strong>WEB APPLICATIONS</strong>
              <strong className="hero-headline__accent">AI / ML</strong>
            </div>

            <p className="hero-scroll-note">(Scroll down)</p>
          </div>

          <aside className="hero-aside">
            <div className="hero-aside__block">
              <span className="hero-aside__line"></span>
              <ul className="hero-service-list">
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>Database Design</li>
                <li>AI / ML Projects</li>
              </ul>
            </div>

            <div className="hero-aside__block">
              <span className="hero-aside__line"></span>
              <div className="hero-help-row">
                <a className="hero-help-link" href="#contact">
                  How can I help?
                </a>
                <span className="hero-help-arrow">&#8599;</span>
              </div>
              <p className="hero-copy">
                I build smart web applications using React, Node.js, MongoDB,
                and AI / ML with a focus on thoughtful structure, premium UI,
                and practical problem solving.
              </p>
            </div>

            <div className="hero-aside__block">
              <span className="hero-aside__line"></span>
              <div className="hero-awards-mini">
                <span className="hero-award-mark">&#9679;</span>
                <span className="hero-award-mark">Projects</span>
                <span className="hero-award-mark">UX Thinking</span>
                <span className="hero-award-mark">ML Builds</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Hero

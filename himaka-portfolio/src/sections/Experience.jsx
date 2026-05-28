import Marquee from '../components/Marquee'

const marqueeItems = [
  'React Interfaces',
  'Node.js APIs',
  'MongoDB Schemas',
  'Authentication Flows',
  'Dashboard UI',
  'AI/ML Experiments',
  'Responsive Layouts',
  'Project Collaboration',
]

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-head">
          <p className="section-label">Experience / Skill Marquee</p>
          <h2 className="section-title">
            Growing through projects, experimentation, and consistent building.
          </h2>
          <p className="section-copy">
            The portfolio combines student work, hands-on practice, and a clear
            ambition to create polished software that solves real problems.
          </p>
        </div>

        <div className="experience-grid">
          <article className="experience-card">
            <span className="section-label">Frontend + UX</span>
            <h3>Clean, modern interfaces with clear structure.</h3>
            <p>
              Layout rhythm, hover states, responsive behavior, and visual
              storytelling are treated as part of the product experience.
            </p>
          </article>

          <article className="experience-card">
            <span className="section-label">Backend + Logic</span>
            <h3>Reliable application flow from data to interface.</h3>
            <p>
              From API endpoints to database design, the focus stays on code that
              is practical, scalable, and understandable.
            </p>
          </article>
        </div>

        <Marquee items={marqueeItems} />
      </div>
    </section>
  )
}

export default Experience

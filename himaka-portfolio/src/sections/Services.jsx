import {
  Bot,
  Database,
  LayoutPanelTop,
  Palette,
  ServerCog,
} from 'lucide-react'

const services = [
  {
    title: 'Frontend Development',
    description:
      'Responsive interfaces with React, component structure, clean layouts, and interactive UI behavior.',
    Icon: LayoutPanelTop,
  },
  {
    title: 'Backend Development',
    description:
      'REST-style APIs, server logic, authentication-ready patterns, and maintainable Node.js project structure.',
    Icon: ServerCog,
  },
  {
    title: 'Database Design',
    description:
      'MongoDB schema planning, data organization, and query-friendly structures for real project use.',
    Icon: Database,
  },
  {
    title: 'AI / ML Projects',
    description:
      'Academic and experimental machine learning work that connects data insights with practical outcomes.',
    Icon: Bot,
  },
  {
    title: 'UI Development',
    description:
      'Visual polish, animation feeling, interaction details, and user-focused implementation for modern websites.',
    Icon: Palette,
  },
]

function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <p className="section-label">Services / Skills</p>
          <h2 className="section-title">
            Focused on building complete digital experiences.
          </h2>
          <p className="section-copy">
            From interface design to API development, the goal is to build
            products that feel polished on the surface and structured underneath.
          </p>
        </div>

        <div className="services-grid">
          {services.map(({ title, description, Icon }) => (
            <article key={title} className="service-card">
              <div className="service-card__icon">
                <Icon size={24} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

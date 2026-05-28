import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head">
          <p className="section-label">Projects</p>
          <h2 className="section-title">
            Selected builds that show range across web and AI/ML.
          </h2>
          <p className="section-copy">
            These project cards use original placeholder content to present
            direction, stack choices, and product thinking in a portfolio-ready
            format.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

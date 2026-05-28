import { ArrowUpRight } from 'lucide-react'

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__visual">
        <div className="project-card__layer project-card__layer--back"></div>
        <div className="project-card__layer project-card__layer--middle"></div>
        <div className="project-card__layer project-card__layer--front">
          <span>{project.visualTag}</span>
          <strong>{project.type}</strong>
        </div>
      </div>

      <div className="project-card__body">
        <div className="project-card__top">
          <div>
            <p className="project-card__year">{project.year}</p>
            <h3>{project.title}</h3>
          </div>
          <span className="project-card__badge">{project.category}</span>
        </div>

        <p>{project.description}</p>

        <ul className="tag-list">
          {project.stack.map((item) => (
            <li key={item} className="tag">
              {item}
            </li>
          ))}
        </ul>

        <div className="project-card__footer">
          <span>{project.outcome}</span>
          <span className="project-card__link">
            Case study concept
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard

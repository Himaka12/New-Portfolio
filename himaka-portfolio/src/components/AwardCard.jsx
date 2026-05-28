import { Award } from 'lucide-react'

function AwardCard({ award }) {
  return (
    <article className="award-card">
      <div className="award-card__icon">
        <Award size={22} />
      </div>
      <p className="award-card__year">{award.year}</p>
      <h3>{award.title}</h3>
      <p>{award.description}</p>
      <span className="award-card__meta">{award.category}</span>
    </article>
  )
}

export default AwardCard

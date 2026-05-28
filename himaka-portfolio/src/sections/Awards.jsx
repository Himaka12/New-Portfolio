import AwardCard from '../components/AwardCard'
import { awards } from '../data/awards'

function Awards() {
  return (
    <section className="section" id="awards">
      <div className="container">
        <div className="section-head">
          <p className="section-label">Achievements / Awards</p>
          <h2 className="section-title">
            Milestones that shape the learning journey.
          </h2>
          <p className="section-copy">
            These placeholder achievements keep the first portfolio version
            grounded in academic work, practical effort, and steady progress.
          </p>
        </div>

        <div className="awards-grid">
          {awards.map((award) => (
            <AwardCard key={award.title} award={award} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards

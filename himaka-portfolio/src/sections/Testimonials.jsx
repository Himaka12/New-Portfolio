import TestimonialCard from '../components/TestimonialCard'
import { testimonials } from '../data/testimonials'

function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-head">
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">
            Feedback from collaboration and academic work.
          </h2>
          <p className="section-copy">
            Simple placeholder feedback helps the layout feel complete until real
            testimonials are ready to replace it.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

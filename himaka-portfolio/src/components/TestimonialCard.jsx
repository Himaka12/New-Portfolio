import { Quote } from 'lucide-react'

function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-card__icon">
        <Quote size={22} />
      </div>
      <p>{testimonial.quote}</p>
      <div className="testimonial-card__author">
        <h3>{testimonial.name}</h3>
        <span>{testimonial.role}</span>
      </div>
    </article>
  )
}

export default TestimonialCard

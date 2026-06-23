import Reveal from "./Reveal";
import { testimonials } from "../data/portfolio";

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <Reveal>
          <span className="section-label">05 — Client Voices</span>
          <h2 className="section-title">
            What clients <span className="gradient-text">say</span>
          </h2>
          <p className="section-intro">
            Founders and product leaders I've partnered with — on architecture,
            product design and shipping experiences their users love.
          </p>
        </Reveal>

        <div className="testimonial-grid" style={{ marginTop: 44 }}>
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.08} className="testimonial-card glass">
              <span className="quote-mark">"</span>
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-tags">
                {t.tags.map((tag) => (
                  <span className="chip" key={tag}>{tag}</span>
                ))}
              </div>
              <div className="testimonial-author">
                <img className="testimonial-avatar" src={t.avatar} alt={t.name} loading="lazy" />
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                  <div className="testimonial-stars">★★★★★</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

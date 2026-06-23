import Reveal from "./Reveal";
import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal>
          <span className="section-label">03 — Experience</span>
          <h2 className="section-title">
            Where I've <span className="gradient-text">shipped</span>
          </h2>
          <p className="section-intro">
            5+ years across startups, enterprise and government — leading teams
            and owning products from first commit to production.
          </p>
        </Reveal>

        <div className="timeline" style={{ marginTop: 48 }}>
          {experiences.map((e, i) => (
            <Reveal key={`${e.company}-${e.period}`} delay={0.04} className="exp-item">
              <span className="exp-dot" />
              <div className="exp-card glass">
                <div className="exp-top">
                  <span className="exp-role">{e.role}</span>
                  <span className="exp-period">{e.period}</span>
                </div>
                <div className="exp-company">
                  <strong>{e.company}</strong> · {e.location}
                </div>
                <ul className="exp-highlights">
                  {e.highlights.map((h, j) => (
                    <li key={j}><span className="mark">▹</span> {h}</li>
                  ))}
                </ul>
                <div className="skill-tags">
                  {e.stack.map((s) => (
                    <span className="chip" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="container">
        <Reveal>
          <span className="section-label">04 — Selected Work</span>
          <h2 className="section-title">
            Products I've <span className="gradient-text">built</span>
          </h2>
          <p className="section-intro">
            A selection of products shipped end-to-end — across health,
            surveillance, mobility, govtech and conversational AI.
          </p>
        </Reveal>

        <div className="work-grid" style={{ marginTop: 44 }}>
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.08} className="project-card glass">
              <span className={`project-glow glow-${p.accent}`} />
              <div className="project-top">
                <span className="project-cat">{p.category}</span>
                <span className="project-year">{p.year}</span>
              </div>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-blurb">{p.blurb}</p>
              <ul className="project-highlights">
                {p.highlights.map((h, j) => (
                  <li key={j}><span className="mark">+</span> {h}</li>
                ))}
              </ul>
              <div className="project-stack">
                {p.stack.map((s) => (
                  <span className="chip" key={s}>{s}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

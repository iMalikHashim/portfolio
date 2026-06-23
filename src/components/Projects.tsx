import { useState } from "react";
import Reveal from "./Reveal";
import ProjectModal from "./ProjectModal";
import { projects, type Project } from "../data/portfolio";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section className="section" id="work">
      <div className="container">
        <Reveal>
          <span className="section-label">04 — Selected Work</span>
          <h2 className="section-title">
            Products I've <span className="gradient-text">built</span>
          </h2>
          <p className="section-intro">
            A selection of products shipped end-to-end — across e-commerce,
            health, surveillance, mobility, govtech and conversational AI.
            Click any project to explore the full case study.
          </p>
        </Reveal>

        <div className="work-grid" style={{ marginTop: 44 }}>
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.08}>
              <button
                type="button"
                className={`project-card glass ${p.image ? "has-image" : ""}`}
                onClick={() => setActive(p)}
                aria-label={`Open ${p.name} case study`}
              >
                <span className={`project-glow glow-${p.accent}`} />

                {p.image && (
                  <div className="project-thumb">
                    <img src={p.image} alt={`${p.name} preview`} loading="lazy" />
                  </div>
                )}

                <div className="project-body">
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
                  <span className="project-explore">
                    Explore case study →
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

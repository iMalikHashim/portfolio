import Reveal from "./Reveal";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal>
          <span className="section-label">02 — Capabilities</span>
          <h2 className="section-title">
            A <span className="gradient-text">full-stack</span> toolkit
          </h2>
          <p className="section-intro">
            From databases and APIs to pixel-perfect frontends, native mobile,
            cloud pipelines and the AI layer on top — one engineer across the
            whole stack.
          </p>
        </Reveal>

        <div className="skills-grid" style={{ marginTop: 44 }}>
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.08} className="skill-card glass">
              <div className="skill-head">
                <span className="skill-icon">{g.icon}</span>
                <h3>{g.title}</h3>
              </div>
              <div className="skill-tags">
                {g.skills.map((s) => (
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

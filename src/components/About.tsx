import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { profile, stats } from "../data/portfolio";

/** Animated count-up for numeric-ish stat values (handles "5+", "10+", "8"). */
function StatValue({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  const num = parseInt(value, 10);
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!inView || isNaN(num)) {
      if (isNaN(num)) setDisplay(value);
      return;
    }
    let start = 0;
    const dur = 1100;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(String(Math.round(eased * num)));
      if (p < 1) requestAnimationFrame(tick);
      else setDisplay(String(num));
    };
    requestAnimationFrame(tick);
  }, [inView, num, value]);

  return (
    <div className="stat-value gradient-text" ref={ref}>
      {display}
      {suffix}
    </div>
  );
}

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <span className="section-label">01 — About</span>
          <h2 className="section-title">
            Engineer who ships <span className="gradient-text">end-to-end</span>
          </h2>
        </Reveal>

        <div className="about-grid" style={{ marginTop: 40 }}>
          <Reveal className="about-text" delay={0.05}>
            <p>{profile.summary}</p>
            <p>
              From backend architecture to App Store releases, I own the full
              lifecycle — and I bring LLMs into products as real, shipping
              features, not demos. I've led teams, owned client relationships,
              and delivered across health, surveillance, mobility and
              enterprise.
            </p>
          </Reveal>

          <Reveal className="about-card glass" delay={0.15}>
            <h3>What I bring</h3>
            <ul className="about-list">
              <li><span className="mark">▹</span> Full ownership: architecture → delivery → release</li>
              <li><span className="mark">▹</span> Production LLM features (RAG, agents, voice, streaming)</li>
              <li><span className="mark">▹</span> Cross-platform mobile in React Native & Flutter</li>
              <li><span className="mark">▹</span> Real-time systems — streaming, WebSockets, maps</li>
              <li><span className="mark">▹</span> Team leadership & direct client partnership</li>
            </ul>
          </Reveal>
        </div>

        <motion.div className="stats-grid" style={{ marginTop: 40 }}>
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="stat glass">
              <StatValue value={s.value} />
              <div className="stat-label">{s.label}</div>
            </Reveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { useEffect, useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/portfolio";

// Lazy-load the WebGL scene so the page paints instantly and never blocks.
const Scene3D = lazy(() => import("./Scene3D"));

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIdx((i) => (i + 1) % profile.roles.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  return (
    <header className="hero" id="top">
      <div className="hero-canvas" aria-hidden="true">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </div>

      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span className="hero-badge">
            <span className="status-dot" /> Available for select projects
          </span>

          <h1>
            {profile.firstName}{" "}
            <span className="gradient-text">{profile.lastName}</span>
          </h1>

          <div className="hero-rotator">
            <span className="static">I build</span>
            <span className="rotator-word">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIdx}
                  className="gradient-text"
                  initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
                  transition={{ duration: 0.45 }}
                  style={{ display: "inline-block" }}
                >
                  {profile.roles[roleIdx]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>

          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">
              View Work →
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in Touch
            </a>
          </div>

          <div className="hero-meta">
            <span>◷ {profile.location}</span>
            <a href={profile.github} target="_blank" rel="noreferrer">
              ⟡ {profile.githubHandle}
            </a>
            <span>{profile.subtitle}</span>
          </div>
        </motion.div>
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <span className="bar" />
      </div>
    </header>
  );
}

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../data/portfolio";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  // Close on Escape + lock body scroll while open
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="modal glass"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={`project-glow glow-${project.accent}`} />

            <button className="modal-close" onClick={onClose} aria-label="Close">
              ✕
            </button>

            <div className="modal-header">
              <div className="project-top">
                <span className="project-cat">{project.category}</span>
                <span className="project-year">{project.year}</span>
              </div>
              <h3 className="modal-title gradient-text">{project.name}</h3>
              <p className="modal-blurb">{project.blurb}</p>

              <div className="modal-cols">
                <div>
                  <h4 className="modal-sub">Highlights</h4>
                  <ul className="project-highlights">
                    {project.highlights.map((h, j) => (
                      <li key={j}><span className="mark">+</span> {h}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="modal-sub">Tech Stack</h4>
                  <div className="project-stack">
                    {project.stack.map((s) => (
                      <span className="chip" key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {project.deck && project.deckTiles ? (
              <div className="modal-deck">
                <div className="modal-deck-label">
                  Full case study — design, architecture & outcomes
                </div>
                {Array.from({ length: project.deckTiles }).map((_, i) => (
                  <img
                    key={i}
                    className="deck-tile"
                    src={`${project.deck}/${i}.jpg`}
                    alt={`${project.name} case study — section ${i + 1}`}
                    loading={i < 2 ? "eager" : "lazy"}
                    decoding="async"
                  />
                ))}
              </div>
            ) : (
              <div className="modal-deck-empty">
                A detailed case study for this project is available on request.
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

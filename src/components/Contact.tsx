import Reveal from "./Reveal";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal className="contact-wrap">
          <span className="section-label" style={{ justifyContent: "center", display: "inline-flex" }}>
            05 — Contact
          </span>
          <h2 className="contact-title">
            Let's build something <span className="gradient-text">futuristic</span>
          </h2>
          <p className="contact-sub">
            Have a product to ship or an AI feature to bring to life? I'm open to
            select freelance and contract work. Let's talk.
          </p>

          <div className="contact-cards">
            <a className="contact-card glass" href={`mailto:${profile.email}`}>
              <span className="ic">✉</span>
              <span className="lbl">Email</span>
              <span className="val">{profile.email}</span>
            </a>
            <a className="contact-card glass" href={`tel:${profile.phoneHref}`}>
              <span className="ic">☎</span>
              <span className="lbl">Phone</span>
              <span className="val">{profile.phone}</span>
            </a>
          </div>

          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Start a Conversation →
            </a>
            <a className="btn btn-ghost" href={profile.resumeUrl} download>
              Download Resume ↓
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

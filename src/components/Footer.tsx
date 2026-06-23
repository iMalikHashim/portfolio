import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="mono">
          © 2026 {profile.name} · {profile.title}
        </span>
        <span className="mono">
          Built with React · Three.js · deployed on GitHub Pages
        </span>
        <a className="mono" href={profile.github} target="_blank" rel="noreferrer">
          ⟡ {profile.githubHandle}
        </a>
      </div>
    </footer>
  );
}

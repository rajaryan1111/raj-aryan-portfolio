import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <p className="footer__meta">
          © {new Date().getFullYear()} {profile.name} · {profile.role}
          <br />
          Built with React + Vite. No tracking, no analytics.
        </p>
        <nav className="footer__links" aria-label="Footer">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a href={profile.github} target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  )
}

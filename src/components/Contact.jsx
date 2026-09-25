import { profile } from '../data/profile'
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="shell">
        <div className="contact">
          <p className="eyebrow">Contact</p>
          <h2>Open to internships and interesting projects</h2>
          <p>
            I’m looking for AI/ML engineering internships where I can work on real systems — RAG, agents, vision, and
            the backend to make them usable. If that sounds like your team, let’s talk.
          </p>

          <div className="contact__actions">
            <a className="btn btn--primary" href={profile.github} target="_blank" rel="noreferrer noopener">
              <GitHubIcon />
              GitHub
              <ArrowUpRightIcon />
            </a>
            <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noreferrer noopener">
              <LinkedInIcon />
              LinkedIn
              <ArrowUpRightIcon />
            </a>
            {profile.emailVerified && profile.email ? (
              <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
                <MailIcon />
                Email
              </a>
            ) : (
              <a className="btn btn--ghost" href={`${profile.linkedin}`} target="_blank" rel="noreferrer noopener">
                <MailIcon />
                Message on LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

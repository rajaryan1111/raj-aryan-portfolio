import { profile } from '../data/profile'
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="shell">
        <div className="contact">
          <p className="eyebrow">Contact</p>
          <h2>Open to AI/ML internships and interesting projects</h2>
          <p>
            I’m looking for an AI/ML engineering internship where I can work on real systems — RAG, agents, vision,
            and the backend that makes them usable. I’m also open to interesting technical projects and collaborations.
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
              <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noreferrer noopener">
                <LinkedInIcon />
                Message on LinkedIn
                <ArrowUpRightIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

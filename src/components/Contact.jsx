import { profile } from '../data/profile'
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="shell">
        <div className="contact">
          <p className="eyebrow">Contact</p>
          <h2>Have an AI problem worth building?</h2>
          <p>
            I&apos;m looking for AI/ML engineering internships, research-oriented projects and opportunities to
            build useful systems.
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

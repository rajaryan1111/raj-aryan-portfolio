import { profile } from '../data/profile'
import { ArrowRightIcon, GitHubIcon, LinkedInIcon } from './Icons'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="shell hero__inner">
        <p className="status">
          <span className="status__dot" aria-hidden="true" />
          {profile.status}
        </p>

        <p className="hero__id">
          <strong>{profile.name}</strong>
          <span aria-hidden="true">/</span>
          <span>{profile.role}</span>
          <span aria-hidden="true">/</span>
          <span>B.Tech ECE</span>
        </p>

        <h1 className="hero__title">
          <span>Building AI systems</span>
          <span className="dim">that actually ship.</span>
        </h1>

        <p className="hero__copy">
          I build practical AI applications across <b>RAG</b>, <b>LLM applications</b>, <b>AI agents</b>,{' '}
          <b>computer vision</b> and <b>backend systems</b> — turning messy real-world inputs into useful,
          explainable products.
        </p>

        <div className="hero__cta">
          <a className="btn btn--primary" href="#work">
            View Projects
            <ArrowRightIcon />
          </a>
          <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer noopener">
            <GitHubIcon />
            GitHub
          </a>
          <a className="btn btn--quiet" href={profile.linkedin} target="_blank" rel="noreferrer noopener">
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>

        <div className="hero__meta">
          <span>
            <b>Focus</b> RAG · LLMs · Agents · CV
          </span>
          <span>
            <b>Stack</b> Python · FastAPI · React · TypeScript
          </span>
          <span>
            <b>Based in</b> {profile.location}
          </span>
        </div>
      </div>
    </section>
  )
}

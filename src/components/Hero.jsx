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
          <span>B.Tech Electronics</span>
        </p>

        <h1 className="hero__title">
          <span>Building AI systems end to end.</span>
          <span className="dim">From model to interface.</span>
        </h1>

        <p className="hero__copy">
          I’m a student engineer in Bengaluru. I build <b>RAG apps with explainable retrieval</b>, <b>agents that can see and act</b>, <b>computer-vision pipelines for messy inputs</b>, and the <b>backend + frontend</b> around them. I like working on the parts around the model — retrieval, APIs, evaluation, and interfaces.
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
            <b>Focus</b> RAG · Agents · Vision · Full-stack
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

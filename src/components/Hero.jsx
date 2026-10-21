import { profile } from '../data/profile'
import { ArrowRightIcon, GitHubIcon, LinkedInIcon } from './Icons'

const systems = [
  { number: '01', name: 'IS Copilot', type: 'RAG · Semantic retrieval', accent: 'cyan' },
  { number: '02', name: 'AI Career Agent', type: 'Python · Local-first desktop', accent: 'violet' },
  { number: '03', name: 'Jarvis', type: 'Agents · Voice + vision', accent: 'lime' },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="hero__glow hero__glow--one" aria-hidden="true" />
      <div className="hero__glow hero__glow--two" aria-hidden="true" />
      <div className="shell hero__inner">
        <div className="hero__content">
          <p className="hero__id">
            <strong>{profile.name}</strong>
            <span aria-hidden="true">/</span>
            <span>{profile.role}</span>
            <span aria-hidden="true">/</span>
            <span>B.E. Electronics</span>
          </p>

          <div className="status">
            <span className="status__dot" aria-hidden="true" />
            Open to AI/ML internship opportunities
          </div>

          <h1 className="hero__title">
            <span>I build AI that</span>
            <span className="hero__title-accent">does more than demo.</span>
          </h1>

          <p className="hero__copy">
            I’m an engineering student in Bengaluru building <b>RAG systems</b>, <b>AI agents</b>, and <b>computer-vision pipelines</b> — from model logic and APIs to the interfaces people actually use.
          </p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#work">
              Explore my work
              <ArrowRightIcon />
            </a>
            <a className="btn btn--ghost" href={profile.resume} target="_blank" rel="noreferrer noopener">
              Resume
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
            <span><b>Focus</b> RAG · Agents · Vision</span>
            <span><b>Build</b> Python · FastAPI · React</span>
            <span><b>Based</b> {profile.location}</span>
          </div>
        </div>

        <aside className="hero__showcase" aria-label="Selected engineering projects">
          <div className="showcase__top">
            <span className="showcase__eyebrow"><span className="showcase__pulse" /> SELECTED SYSTEMS</span>
            <span className="showcase__index">PORTFOLIO / 2026</span>
          </div>
          <div className="showcase__diagram" aria-hidden="true">
            <div className="diagram__orbit diagram__orbit--outer" />
            <div className="diagram__orbit diagram__orbit--inner" />
            <div className="diagram__core">
              <span className="diagram__core-mark">AI</span>
              <span>ENGINEERING</span>
            </div>
            <span className="diagram__node diagram__node--one">RAG</span>
            <span className="diagram__node diagram__node--two">AGENTS</span>
            <span className="diagram__node diagram__node--three">VISION</span>
            <span className="diagram__node diagram__node--four">APIs</span>
          </div>
          <div className="showcase__list">
            {systems.map((system) => (
              <a className="showcase__project" href={system.name === 'IS Copilot' ? '#case-is-copilot' : system.name === 'AI Career Agent' ? '#case-ai-career-agent' : '#case-jarvis'} key={system.number}>
                <span className={`showcase__number showcase__number--${system.accent}`}>{system.number}</span>
                <span className="showcase__project-copy">
                  <strong>{system.name}</strong>
                  <small>{system.type}</small>
                </span>
                <span className="showcase__arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
          <div className="showcase__foot">
            <span>BUILT WITH INTENT</span>
            <span>NOT JUST PROMPTS.</span>
          </div>
        </aside>
      </div>
    </section>
  )
}

import { projects } from '../data/projects'
import { ArrowUpRightIcon, GitHubIcon, GlyphMark } from './Icons'

const glyphFor = {
  'is-copilot': 'document',
  'h2s-dosimeter': 'vision',
  jarvis: 'voice',
  'fake-id-screening': 'vision',
  'ai-resume-review': 'graph',
  'ai-adaptive-onboarding': 'stack',
}

function Media({ project }) {
  if (project.image) {
    return (
      <div className="pcard__media">
        <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" width="1600" height="900" />
      </div>
    )
  }
  return (
    <div className="pcard__media">
      <div className="glyph">
        <div style={{ position: 'relative', display: 'grid', justifyItems: 'center' }}>
          <GlyphMark variant={glyphFor[project.id]} />
          <span className="glyph__label">{project.category}</span>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, wide }) {
  return (
    <article className={`pcard${wide ? ' pcard--wide' : ''}`}>
      <Media project={project} />
      <div className="pcard__body">
        <div className="pcard__top">
          <span className="tag">{project.category}</span>
          {project.badge && <span className="tag tag--signal">{project.badge}</span>}
        </div>

        <h3 className="pcard__title">
          {project.name}
          <span className="pcard__subtitle">{project.subtitle}</span>
        </h3>

        <p className="pcard__text">{project.tagline}</p>

        <ul className="stack" aria-label={`${project.name} technologies`}>
          {project.tech.slice(0, 6).map((t) => (
            <li className="chip" key={t}>
              {t}
            </li>
          ))}
        </ul>

        <div className="pcard__foot">
          {project.demo && (
            <a className="linkbtn linkbtn--solid" href={project.demo} target="_blank" rel="noreferrer noopener">
              Live demo
              <ArrowUpRightIcon />
              <span className="sr-only">— {project.name} (opens in a new tab)</span>
            </a>
          )}
          <a className="linkbtn" href={project.repo} target="_blank" rel="noreferrer noopener">
            <GitHubIcon width="14" height="14" />
            Repository
            <span className="sr-only">— {project.name} (opens in a new tab)</span>
          </a>
          <a className="linkbtn" href={`#case-${project.id}`}>
            Case study
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [lead, ...rest] = projects

  return (
    <section className="section" id="work">
      <div className="shell">
        <header className="section-head">
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-sub">
            Six systems built end to end — retrieval and ranking engines, computer-vision pipelines, voice agents
            and the interfaces that make their output reviewable. Every link below points to a public repository.
          </p>
        </header>

        <div className="projects">
          <ProjectCard project={lead} wide />
          {rest.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

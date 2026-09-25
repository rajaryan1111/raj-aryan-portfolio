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

function Media({ project, wide }) {
  const handleError = (e) => {
    e.currentTarget.style.display = 'none'
    const fallback = e.currentTarget.nextElementSibling
    if (fallback) fallback.style.display = 'grid'
  }

  if (project.image) {
    return (
      <div className={`pcard__media ${wide ? 'pcard__media--wide' : ''}`}>
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          width={wide ? 1600 : 1200}
          height={wide ? 900 : 675}
          onError={handleError}
        />
        <div className="glyph" style={{ display: 'none' }}>
          <div style={{ position: 'relative', display: 'grid', justifyItems: 'center' }}>
            <GlyphMark variant={glyphFor[project.id]} />
            <span className="glyph__label">{project.category}</span>
            {project.demo && (
              <a
                className="glyph__action"
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
              >
                Open live demo
                <ArrowUpRightIcon width="13" height="13" />
              </a>
            )}
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className={`pcard__media ${wide ? 'pcard__media--wide' : ''}`}>
      <div className="glyph">
        <div style={{ position: 'relative', display: 'grid', justifyItems: 'center' }}>
          <GlyphMark variant={glyphFor[project.id]} />
          <span className="glyph__label">{project.category}</span>
        </div>
      </div>
    </div>
  )
}

function MainCard({ project }) {
  return (
    <article className="pcard pcard--flagship">
      <Media project={project} wide />
      <div className="pcard__body">
        <div className="pcard__top">
          <span className="tag">{project.category}</span>
          {project.badge && <span className="tag tag--signal">{project.badge}</span>}
          <span className="tag">{project.year}</span>
        </div>

        <h3 className="pcard__title pcard__title--flagship">
          {project.name}
          <span className="pcard__subtitle">{project.subtitle}</span>
        </h3>

        <p className="pcard__text">{project.tagline}</p>

        <p className="pcard__text" style={{ fontSize: 14, color: 'var(--text-tertiary)' }}>
          I built this to make Indian Standards discovery less dependent on exact wording. It reads a requirement,
          searches by meaning, and shows why each standard was picked.
        </p>

        <ul className="stack" aria-label={`${project.name} technologies`}>
          {project.tech.slice(0, 6).map((t) => (
            <li className="chip" key={t}>
              {t}
            </li>
          ))}
        </ul>

        {project.gallery && project.gallery.length > 1 && (
          <div className="pcard__gallery" aria-label={`${project.name} screenshots`}>
            {project.gallery.slice(1).map((g) => (
              <figure key={g.src} className="pcard__gallery-item">
                <div className="pcard__gallery-thumb">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    decoding="async"
                    width={480}
                    height={270}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      const fb = e.currentTarget.nextElementSibling
                      if (fb) fb.style.display = 'flex'
                    }}
                  />
                  <div className="pcard__gallery-fallback" style={{ display: 'none' }}>
                    <GlyphMark variant="document" />
                    <span>{g.label}</span>
                  </div>
                </div>
                <figcaption>
                  <strong>{g.label}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        <div className="pcard__foot">
          {project.demo && (
            <a className="linkbtn linkbtn--solid" href={project.demo} target="_blank" rel="noreferrer noopener">
              Live demo
              <ArrowUpRightIcon />
            </a>
          )}
          <a className="linkbtn" href={project.repo} target="_blank" rel="noreferrer noopener">
            <GitHubIcon width="14" height="14" />
            Repository
            <ArrowUpRightIcon />
          </a>
          <a className="linkbtn" href={`#case-${project.id}`}>
            Details
          </a>
        </div>

      </div>
    </article>
  )
}

function SecondaryCard({ project }) {
  return (
    <article className="pcard pcard--secondary">
      <Media project={project} />
      <div className="pcard__body">
        <div className="pcard__top">
          <span className="tag">{project.category}</span>
          {project.badge && <span className="tag tag--signal">{project.badge}</span>}
          <span className="tag">{project.year}</span>
        </div>

        <h3 className="pcard__title">
          {project.name}
          <span className="pcard__subtitle">{project.subtitle}</span>
        </h3>

        <p className="pcard__text">{project.tagline}</p>

        <ul className="stack" aria-label={`${project.name} technologies`}>
          {project.tech.slice(0, 5).map((t) => (
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
            </a>
          )}
          <a className="linkbtn" href={project.repo} target="_blank" rel="noreferrer noopener">
            <GitHubIcon width="14" height="14" />
            Code
          </a>
          <a className="linkbtn" href={`#case-${project.id}`}>
            Details
          </a>
        </div>
      </div>
    </article>
  )
}

function CompactCard({ project }) {
  return (
    <article className="pcard pcard--compact">
      <div className="pcard__body">
        <div className="pcard__top">
          <span className="tag">{project.category}</span>
          <span className="tag">{project.year}</span>
        </div>
        <h3 className="pcard__title" style={{ fontSize: 18 }}>
          {project.name}
          <span className="pcard__subtitle">{project.subtitle}</span>
        </h3>
        <p className="pcard__text" style={{ fontSize: 14 }}>
          {project.tagline}
        </p>
        <ul className="stack">
          {project.tech.slice(0, 4).map((t) => (
            <li className="chip" key={t}>
              {t}
            </li>
          ))}
        </ul>
        <div className="pcard__foot">
          <a className="linkbtn" href={project.repo} target="_blank" rel="noreferrer noopener">
            <GitHubIcon width="14" height="14" />
            Code
          </a>
          <a className="linkbtn" href={`#case-${project.id}`}>
            Details
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const main = projects.find((p) => p.flagship) || projects[0]
  const secondary = projects.filter((p) => p.featured && !p.flagship).slice(0, 2)
  const moreWork = projects.filter((p) => !p.featured && !p.flagship)

  return (
    <section className="section" id="work">
      <div className="shell">
        <header className="section-head">
          <p className="eyebrow">Work</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-sub">
            IS Copilot is the project I spent the most time on — it’s live and you can try it. The other two are
            solid builds, and the rest are smaller things I learned from.
          </p>
        </header>

        <div className="projects projects--flagship">
          <MainCard project={main} />
        </div>

        <div className="projects projects--secondary" style={{ marginTop: 18 }}>
          {secondary.map((p) => (
            <SecondaryCard key={p.id} project={p} />
          ))}
        </div>

        <div className="more-work">
          <div className="more-work__head">
            <h3 className="more-work__title">More work</h3>
            <p className="more-work__sub">
              Smaller builds — vision, screening, resume analysis. Repos are public, case studies below.
            </p>
          </div>
          <div className="projects projects--more">
            {moreWork.map((p) => (
              <CompactCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

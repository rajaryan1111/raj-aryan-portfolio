import { useEffect, useState } from 'react'
import { projects } from '../data/projects'
import { ArrowUpRightIcon, ChevronDownIcon, GitHubIcon, InfoIcon } from './Icons'

function Block({ label, children }) {
  return (
    <div className="block">
      <h4 className="block__label">{label}</h4>
      {children}
    </div>
  )
}

function EvidenceGallery({ project }) {
  if (!project.gallery || project.gallery.length === 0) return null
  return (
    <Block label="Product evidence — real screenshots from live deployment">
      <div className="evidence-grid">
        {project.gallery.map((g) => (
          <figure key={g.src} className="evidence-item">
            <div className="evidence-thumb">
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                decoding="async"
                width={800}
                height={450}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const fb = e.currentTarget.nextElementSibling
                  if (fb) fb.style.display = 'flex'
                }}
              />
              <div className="evidence-fallback" style={{ display: 'none' }}>
                <span>{g.label} — live demo: {project.demo}</span>
                <small>Expected at public{g.src} — real screenshot pending capture from live app</small>
              </div>
            </div>
            <figcaption>
              <strong>{g.label}</strong> — {g.role}
              <br />
              <span style={{ color: 'var(--text-tertiary)', fontSize: 12 }}>{g.alt}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="note" style={{ marginTop: 12 }}>
        <InfoIcon />
        <span>
          Screenshots are real product evidence captured from{' '}
          <a href={project.demo} target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'underline' }}>
            {project.demo}
          </a>
          . Expected files: <code>public/projects/is-copilot/dashboard.png</code> (main),{' '}
          <code>recommendations.png</code>, <code>relationship-graph.png</code>,{' '}
          <code>standards-explorer.png</code>. If a file is missing, the UI shows a placeholder and does not generate a
          fake screenshot.
        </span>
      </p>
    </Block>
  )
}

function CaseStudy({ project, index, open, onToggle }) {
  const panelId = `panel-${project.id}`

  return (
    <article className="case" data-open={open} id={`case-${project.id}`}>
      <h3>
        <button
          type="button"
          className="case__trigger"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="case__trigger-main">
            <span className="case__index">
              {String(index + 1).padStart(2, '0')} · {project.year} {project.flagship ? '· Flagship' : ''}{' '}
              {project.featured && !project.flagship ? '· Featured' : ''} {!project.featured ? '· More Work' : ''}
            </span>
            <span className="case__name">
              {project.name} — {project.subtitle}
            </span>
            <span className="case__hint">{open ? 'Hide full case study' : 'Read the full case study'}</span>
          </span>
          <ChevronDownIcon className="case__chev" />
        </button>
      </h3>

      {open && (
        <div className="case__panel" id={panelId}>
          {project.id === 'is-copilot' ? (
            <EvidenceGallery project={project} />
          ) : project.image ? (
            <figure className="case__shot">
              <img
                src={project.image}
                alt={project.imageAlt}
                loading="lazy"
                decoding="async"
                width="1600"
                height="900"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <figcaption>{project.name} — application screenshot</figcaption>
            </figure>
          ) : null}

          <Block label="Problem">
            <p>{project.problem}</p>
          </Block>

          <Block label="Approach">
            <p>{project.solution}</p>
            <ul className="list">
              {project.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Block>

          <Block label="Architecture">
            <ol className="flow">
              {project.architecture.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </Block>

          <div className="grid-2">
            <Block label="Key features">
              <ul className="list">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </Block>

            <div style={{ display: 'grid', gap: 30, alignContent: 'start' }}>
              <Block label="Technology">
                <ul className="stack">
                  {project.tech.map((t) => (
                    <li className="chip" key={t}>
                      {t}
                    </li>
                  ))}
                </ul>
              </Block>

              <Block label="Challenges">
                <ul className="list">
                  {project.challenges.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </Block>
            </div>
          </div>

          <Block label="What I built">
            <ul className="list">
              {project.contribution.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Block>

          {project.disclaimer && (
            <p className="note">
              <InfoIcon />
              <span>{project.disclaimer}</span>
            </p>
          )}

          <Block label="Links">
            <div className="case__links">
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
            </div>
            {project.repoNote && (
              <p style={{ fontSize: 13, color: 'var(--text-quaternary)', fontFamily: 'var(--mono)' }}>
                {project.repoNote}
              </p>
            )}
          </Block>
        </div>
      )}
    </article>
  )
}

export default function CaseStudies() {
  const [openId, setOpenId] = useState(null)

  // Allow deep-linking to a case study (#case-is-copilot) from the project cards.
  useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash
      if (hash.startsWith('#case-')) {
        const id = hash.replace('#case-', '')
        if (projects.some((p) => p.id === id)) setOpenId(id)
      }
    }
    openFromHash()
    window.addEventListener('hashchange', openFromHash)
    return () => window.removeEventListener('hashchange', openFromHash)
  }, [])

  // Order case studies to match homepage priority: flagship first, featured next, then more work
  const ordered = [...projects].sort((a, b) => {
    if (a.flagship && !b.flagship) return -1
    if (!a.flagship && b.flagship) return 1
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return 0
  })

  return (
    <section className="section" id="case-studies">
      <div className="shell">
        <header className="section-head">
          <p className="eyebrow">Deep dive</p>
          <h2 className="section-title">Case studies</h2>
          <p className="section-sub">
            The problem, the approach, the architecture and the honest limitations of each project. Flagship case
            study (IS Copilot) includes real product evidence from the live deployment. Content is drawn from each
            project&apos;s own repository — no metrics are claimed that the repository does not document.
          </p>
        </header>

        <div style={{ display: 'grid', gap: 12 }}>
          {ordered.map((project, i) => (
            <CaseStudy
              key={project.id}
              project={project}
              index={i}
              open={openId === project.id}
              onToggle={() => setOpenId((cur) => (cur === project.id ? null : project.id))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

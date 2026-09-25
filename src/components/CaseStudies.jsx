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

function Gallery({ project }) {
  if (!project.gallery || project.gallery.length === 0) return null
  return (
    <Block label="Screenshots — from the live app">
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
                <span>{g.label}</span>
                <small>
                  See it live at{' '}
                  <a href={project.demo} target="_blank" rel="noreferrer noopener">
                    {project.demo}
                  </a>
                </small>
              </div>
            </div>
            <figcaption>
              <strong>{g.label}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
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
              {String(index + 1).padStart(2, '0')} · {project.year}
            </span>
            <span className="case__name">
              {project.name} — {project.subtitle}
            </span>
            <span className="case__hint">{open ? 'Hide details' : 'Read details'}</span>
          </span>
          <ChevronDownIcon className="case__chev" />
        </button>
      </h3>

      {open && (
        <div className="case__panel" id={panelId}>
          {project.id === 'is-copilot' && <Gallery project={project} />}

          <Block label="Why I built it">
            <p>{project.problem}</p>
            <p style={{ marginTop: 8 }}>{project.solution}</p>
          </Block>

          <Block label="How it works">
            <ol className="flow">
              {project.architecture.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <ul className="list" style={{ marginTop: 16 }}>
              {project.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Block>

          {project.engineeringNotes && project.engineeringNotes.length > 0 && (
            <Block label="What I had to figure out">
              <ul className="list">
                {project.engineeringNotes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </Block>
          )}

          <div className="grid-2">
            <Block label="What it does">
              <ul className="list">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </Block>

            <div style={{ display: 'grid', gap: 30, alignContent: 'start' }}>
              <Block label="Stack">
                <ul className="stack">
                  {project.tech.map((t) => (
                    <li className="chip" key={t}>
                      {t}
                    </li>
                  ))}
                </ul>
              </Block>

              <Block label="What was tricky">
                <ul className="list">
                  {project.challenges.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </Block>
            </div>
          </div>

          <Block label={project.repoNote?.includes('Team') ? 'My contribution — team project' : 'My contribution'}>
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
          <p className="eyebrow">Details</p>
          <h2 className="section-title">How I built them</h2>
          <p className="section-sub">
            Short version on the cards, longer version here if you want it. All from the actual repos — no invented
            numbers.
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

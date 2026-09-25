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
            <span className="case__hint">{open ? 'Hide full case study' : 'Read the full case study'}</span>
          </span>
          <ChevronDownIcon className="case__chev" />
        </button>
      </h3>

      {open && (
        <div className="case__panel" id={panelId}>
          {project.image && (
            <figure className="case__shot">
              <img
                src={project.image}
                alt={project.imageAlt}
                loading="lazy"
                decoding="async"
                width="1600"
                height="900"
              />
              <figcaption>{project.name} — application screenshot</figcaption>
            </figure>
          )}

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

  return (
    <section className="section" id="case-studies">
      <div className="shell">
        <header className="section-head">
          <p className="eyebrow">Deep dive</p>
          <h2 className="section-title">Case studies</h2>
          <p className="section-sub">
            The problem, the approach, the architecture and the honest limitations of each project. Content is
            drawn from each project&apos;s own repository — no metrics are claimed that the repository does not
            document.
          </p>
        </header>

        <div style={{ display: 'grid', gap: 12 }}>
          {projects.map((project, i) => (
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

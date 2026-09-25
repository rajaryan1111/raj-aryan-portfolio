import { otherWork } from '../data/projects'
import { profile } from '../data/profile'
import { ArrowUpRightIcon, GitHubIcon } from './Icons'

export default function OtherWork() {
  return (
    <section className="section" id="other-work">
      <div className="shell">
        <header className="section-head">
          <p className="eyebrow">Other stuff</p>
          <h2 className="section-title">Other repos</h2>
          <p className="section-sub">
            Smaller things — pipelines, ingestion, coursework. Still public, still documented.
          </p>
        </header>

        <div className="repolist">
          {otherWork.map((item) => (
            <article className="repoitem" key={item.name}>
              <div className="repoitem__head">
                <h3>{item.name}</h3>
                <div className="repoitem__links">
                  {item.demo && (
                    <a className="linkbtn" href={item.demo} target="_blank" rel="noreferrer noopener">
                      Demo
                      <ArrowUpRightIcon />
                    </a>
                  )}
                  <a className="linkbtn" href={item.repo} target="_blank" rel="noreferrer noopener">
                    <GitHubIcon width="14" height="14" />
                    Code
                  </a>
                </div>
              </div>
              <p>{item.description}</p>
              <ul className="stack">
                {item.tech.map((t) => (
                  <li className="chip" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 22 }}>
          <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer noopener">
            <GitHubIcon />
            See all on GitHub
            <ArrowUpRightIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

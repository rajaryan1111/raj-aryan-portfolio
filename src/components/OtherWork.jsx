import { otherWork } from '../data/projects'
import { profile } from '../data/profile'
import { ArrowUpRightIcon, GitHubIcon } from './Icons'

export default function OtherWork() {
  return (
    <section className="section" id="other-work">
      <div className="shell">
        <header className="section-head">
          <p className="eyebrow">Also public</p>
          <h2 className="section-title">Other repositories</h2>
          <p className="section-sub">
            Smaller or supporting work that is open on GitHub — data pipelines, ingestion tooling and coursework
            built up properly.
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
                      <span className="sr-only">— {item.name} (opens in a new tab)</span>
                    </a>
                  )}
                  <a className="linkbtn" href={item.repo} target="_blank" rel="noreferrer noopener">
                    <GitHubIcon width="14" height="14" />
                    Code
                    <span className="sr-only">— {item.name} (opens in a new tab)</span>
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
            See all repositories on GitHub
            <ArrowUpRightIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

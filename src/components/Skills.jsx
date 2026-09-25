import { skillGroups } from '../data/content'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="shell">
        <header className="section-head">
          <p className="eyebrow">Technical skills</p>
          <h2 className="section-title">What I work with</h2>
          <p className="section-sub">
            Grouped by where it actually gets used. Everything listed here appears in the projects and public
            repositories above — nothing is included just to fill the list.
          </p>
        </header>

        <div className="skillgrid">
          {skillGroups.map((group) => (
            <article className="skillcard" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="stack">
                {group.skills.map((s) => (
                  <li className="chip" key={s}>
                    {s}
                  </li>
                ))}
              </ul>
              <p className="skillcard__note">{group.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

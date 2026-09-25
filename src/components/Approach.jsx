import { principles } from '../data/content'

export default function Approach() {
  return (
    <section className="section" id="approach">
      <div className="shell">
        <header className="section-head">
          <p className="eyebrow">Engineering approach</p>
          <h2 className="section-title">How I build</h2>
          <p className="section-sub">
            Four things I try to hold to in every project. They are habits I&apos;m building, not a methodology
            I&apos;m selling.
          </p>
        </header>

        <div className="principles">
          {principles.map((p) => (
            <article className="principle" key={p.number}>
              <span className="principle__num">{p.number}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

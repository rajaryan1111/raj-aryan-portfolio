import { principles } from '../data/content'

export default function Approach() {
  return (
    <section className="section" id="approach">
      <div className="shell">
        <header className="section-head">
          <p className="eyebrow">How I work</p>
          <h2 className="section-title">A few things I try to do</h2>
          <p className="section-sub">Not a methodology — just habits I’m building.</p>
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

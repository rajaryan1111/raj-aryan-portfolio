import { aboutFacts, aboutParagraphs } from '../data/content'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <header className="section-head">
          <p className="eyebrow">About</p>
          <h2 className="section-title">I like building the parts around the model</h2>
        </header>

        <div className="about">
          <div className="about__prose">
            {aboutParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <dl className="facts">
            {aboutFacts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

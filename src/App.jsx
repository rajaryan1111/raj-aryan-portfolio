import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import CaseStudies from './components/CaseStudies'
import Skills from './components/Skills'
import About from './components/About'
import Approach from './components/Approach'
import OtherWork from './components/OtherWork'
import Contact from './components/Contact'
import Footer from './components/Footer'

/** Lightweight scroll reveal — a few lines of IntersectionObserver instead of an animation library. */
function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const targets = document.querySelectorAll('.section > .shell > *')
    targets.forEach((el) => el.classList.add('reveal'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.04 },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useReveal()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Projects />
        <CaseStudies />
        <Skills />
        <About />
        <Approach />
        <OtherWork />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/profile'
import { ArrowUpRightIcon, CloseIcon, GitHubIcon, MenuIcon } from './Icons'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('is-locked', open)
    return () => document.body.classList.remove('is-locked')
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1))
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0.05, 0.3] },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="nav" data-scrolled={scrolled}>
      <div className="shell nav__inner">
        <a className="brand" href="#top" aria-label={`${profile.name} — back to top`}>
          <span className="brand__mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="brand__name">{profile.name}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="nav__link"
              href={link.href}
              aria-current={active === link.href ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a
            className="btn btn--ghost"
            href={profile.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
            <ArrowUpRightIcon width="14" height="14" />
          </a>
          <a
            className="btn btn--ghost btn--github"
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            <GitHubIcon />
            GitHub
          </a>
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="nav__drawer" id="mobile-menu" aria-label="Mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="btn btn--primary"
            href={profile.resume}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => setOpen(false)}
          >
            Resume
            <ArrowUpRightIcon width="14" height="14" />
          </a>
          <a
            className="btn btn--primary"
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => setOpen(false)}
          >
            <GitHubIcon />
            GitHub
          </a>
        </nav>
      )}
    </header>
  )
}

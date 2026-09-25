/**
 * Verified profile data.
 *
 * Every value here was checked against public sources on 2026-09-25:
 *  - https://api.github.com/users/rajaryan1111
 *  - https://github.com/rajaryan1111/rajaryan1111 (profile README)
 *
 * Do not add unverified claims (metrics, awards, employment, users, accuracy).
 */

export const profile = {
  name: 'Raj Aryan',
  role: 'AI/ML Engineer',
  initials: 'RA',
  // Verified: GitHub API "bio" + profile README
  headlineTop: 'BUILDING AI SYSTEMS',
  headlineBottom: 'THAT ACTUALLY SHIP.',
  summary:
    'I build practical AI applications across RAG, LLMs, AI agents, computer vision and backend systems — turning messy real-world inputs into useful, explainable products.',
  // Verified: GitHub API "location"
  location: 'Bengaluru, India',
  education: 'B.Tech — Electronics & Communication Engineering',
  status: 'Open to AI/ML internship opportunities',
  github: 'https://github.com/rajaryan1111',
  // Verified: linked from the GitHub profile README of rajaryan1111
  linkedin: 'https://www.linkedin.com/in/raj-aryan-20aa32394/',
  // NOT VERIFIED — GitHub profile exposes no public email address.
  // Replace the address below and set `emailVerified: true`.
  email: '',
  emailVerified: false,
}

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

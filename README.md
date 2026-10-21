# Raj Aryan — AI/ML Engineering Portfolio

A responsive portfolio built with React and Vite. It presents selected AI/ML, retrieval, agent, computer-vision, and full-stack projects, with implementation notes and links to source repositories.

## Run locally

Requirements: Node.js and npm.

```bash
git clone https://github.com/rajaryan1111/raj-aryan-portfolio.git
cd raj-aryan-portfolio
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
npm run preview
```

The project currently defines development, production-build, and preview scripts. It does not define a portfolio-specific automated test script.

## Project structure

- `src/components/` — page sections and reusable UI components.
- `src/data/projects.js` — project descriptions, architecture notes, technologies, limitations, and repository/demo links.
- `src/data/content.js` — skills, about content, and engineering principles.
- `src/data/profile.js` — profile, contact, and social links.
- `src/styles/index.css` — design tokens, responsive layout, animations, and reduced-motion styles.
- `public/projects/` — committed project screenshots used in the portfolio.
- `public/resume.html` — printable resume page; use the browser's Print / Save PDF action to export it.

## Featured work

- **IS Copilot** — a demonstration tool for finding relevant Indian Standards from procurement requirements. Its data is a labelled demo dataset; it is not an official BIS service, and results must be checked against official sources.
- **AI Career Agent** — an early, local-first desktop alpha for eligibility checks and application tracking. It is not an automated job-application bot; live discovery and application submission are not implemented.
- **Jarvis** — a personal macOS-oriented voice and vision assistant; it is not packaged for general distribution.
- **H₂S Exposure Dosimeter** — a hackathon prototype whose ML evaluation uses synthetic data and which is not safety-certified.
- **Fake-ID Screening** — a prototype that surfaces signals for human review, not a legal determination.

The project case studies describe known limitations and distinguish prototypes from production systems. Check each linked repository for its current implementation and setup instructions.

## Accessibility and motion

The stylesheet includes keyboard focus styles, a skip-to-content link, responsive layouts, and a `prefers-reduced-motion` rule. Please report any accessibility or display issue by opening a GitHub issue.

## Links

- Portfolio: https://raj-aryan-portfolio-nine.vercel.app/
- GitHub: https://github.com/rajaryan1111
- LinkedIn: https://www.linkedin.com/in/raj-aryan-20aa32394/

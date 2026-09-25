export const skillGroups = [
  {
    title: 'AI / Machine Learning',
    note: 'What I actually used in these projects — not a wishlist.',
    skills: [
      'Python',
      'RAG',
      'LLM Apps',
      'AI Agents',
      'Embeddings',
      'Vector Search',
      'Computer Vision',
      'OpenCV',
      'OCR',
    ],
  },
  {
    title: 'Backend & Data',
    note: 'APIs and persistence behind the demos.',
    skills: ['FastAPI', 'REST APIs', 'PostgreSQL', 'Supabase', 'SQLAlchemy', 'Docker'],
  },
  {
    title: 'Frontend',
    note: 'If the output isn’t readable, it’s not usable.',
    skills: ['React', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'React Flow', 'Recharts'],
  },
  {
    title: 'Engineering',
    note: 'Keeping things runnable for others.',
    skills: ['Git', 'GitHub Actions', 'Docker Compose', 'Vercel', 'Vitest / Pytest'],
  },
]

export const principles = [
  {
    number: '01',
    title: 'Show your work',
    body: 'In IS Copilot every recommendation comes with the snippet and source it came from, plus how confident I am and why. A score without evidence isn’t useful when you’re drafting a tender.',
  },
  {
    number: '02',
    title: 'Make failure obvious',
    body: 'Vector search can be down, a PDF can be scanned, an LLM can time out. I’d rather show a fallback or say “this is from synthetic data” than fail silently.',
  },
  {
    number: '03',
    title: 'Build the interface too',
    body: 'A model output in a log file isn’t a product. I build the frontend alongside — explorer, graph, gaps — so someone can actually review what the system did.',
  },
  {
    number: '04',
    title: 'Keep it runnable',
    body: 'Env-based config, Docker Compose, offline demo mode, CI. If someone clones it, they should be able to run it without asking me for a secret setup.',
  },
]

export const aboutParagraphs = [
  'I’m a B.Tech Electronics student in Bengaluru building AI systems that actually work. I’ve been working across RAG, LLM apps, agents, computer vision, and full-stack — mostly because the interesting part isn’t just the model, it’s everything around it.',
  'Most of my projects start from messy input — a tender clause in three languages, a photo of a color strip in bad light, a resume vs a job description. I like turning that into something structured you can check and use.',
  'I’m currently looking for AI/ML internship opportunities where I can work on real systems, not just notebooks.',
]

export const aboutFacts = [
  { label: 'Education', value: 'B.Tech — Electronics' },
  { label: 'Based in', value: 'Bengaluru, India' },
  { label: 'Focus', value: 'RAG · Agents · Computer Vision · Full-stack' },
  { label: 'Looking for', value: 'AI/ML internships' },
]

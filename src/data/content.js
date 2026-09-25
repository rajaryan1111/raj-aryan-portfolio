export const skillGroups = [
  {
    title: 'AI / Machine Learning',
    note: 'Applied across IS Copilot, Jarvis, the H₂S dosimeter and the resume-analysis projects.',
    skills: [
      'Python',
      'Machine Learning',
      'LLM Applications',
      'RAG',
      'AI Agents',
      'Embeddings',
      'Vector Search',
      'Semantic Retrieval',
      'Computer Vision',
      'OpenCV',
      'OCR',
      'Prompt Engineering',
    ],
  },
  {
    title: 'Backend & Data',
    note: 'Used to build the APIs, persistence and pipelines behind these projects.',
    skills: [
      'FastAPI',
      'REST APIs',
      'PostgreSQL',
      'Supabase',
      'SQLAlchemy',
      'pgvector',
      'Async pipelines',
      'Docker',
    ],
  },
  {
    title: 'Frontend',
    note: 'Every project ships with an interface — the analysis is only useful if it can be read.',
    skills: ['React', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'React Flow', 'Recharts', 'Modern CSS'],
  },
  {
    title: 'Engineering',
    note: 'How the work is kept reproducible and verifiable.',
    skills: ['Git', 'GitHub Actions', 'CI', 'Vitest / Pytest', 'Docker Compose', 'Vercel', 'API integration'],
  },
]

export const principles = [
  {
    number: '01',
    title: 'Ground outputs in evidence',
    body: 'A recommendation without a source is a guess with better formatting. In IS Copilot every recommendation carries per-requirement evidence snippets, indexed source metadata and a confidence breakdown, so a reviewer can check the reasoning instead of trusting the score.',
  },
  {
    number: '02',
    title: 'Make failure visible',
    body: 'Systems degrade — vector search goes down, a provider times out, a document is unreadable. I prefer explicit fallbacks and visible limitations over silent failure: lexical fallback when retrieval fails, demoted "related" results below a confidence threshold, and written scope notes where evaluation used synthetic data.',
  },
  {
    number: '03',
    title: 'Build the interface too',
    body: 'A model output nobody can read is not a product. I build the frontend alongside the pipeline — explorers, graphs, gap views and dashboards — because the interface is where an AI system either becomes reviewable or stays a black box.',
  },
  {
    number: '04',
    title: 'Keep systems reproducible',
    body: 'Environment-based configuration, Docker Compose setups, deterministic test fixtures, offline demo modes and CI on the repositories. Someone else should be able to clone the project and run it without a private setup ritual.',
  },
]

export const aboutParagraphs = [
  "I'm a B.Tech ECE student focused on building practical AI systems. My work spans retrieval-augmented generation, LLM applications, computer vision, AI agents and full-stack AI products.",
  'I enjoy working on the engineering around the model — data pipelines, retrieval, APIs, evaluation, interfaces and deployment — because a useful AI system needs more than a good model.',
  'Most of what I build starts from a messy real input: a pasted tender clause in three languages, a photo of a colour strip under bad lighting, a resume against a job description. The interesting part is turning that into something structured, explainable and checkable.',
]

export const aboutFacts = [
  { label: 'Education', value: 'B.Tech — Electronics & Communication Engineering' },
  { label: 'Based in', value: 'Bengaluru, India' },
  { label: 'Focus', value: 'RAG · LLM applications · AI agents · Computer vision' },
  { label: 'Looking for', value: 'AI/ML engineering internships' },
]

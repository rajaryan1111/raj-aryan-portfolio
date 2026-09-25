/**
 * Project data — rewritten to sound like a real engineer explaining his work.
 * All repo URLs verified 2026-09-25. No invented metrics.
 * IS Copilot screenshots are committed product captures from the deployed application;
 * they are real application views, not mockups.
 */

export const projects = [
  {
    id: 'is-copilot',
    name: 'IS Copilot',
    subtitle: 'Finding the right Indian Standards for a tender',
    category: 'RAG · Search',
    year: '2026',
    featured: true,
    flagship: true,
    badge: 'SIH 2026 · SIH26108',
    tagline:
      'Paste a procurement requirement in English, Hindi or Hinglish and get back relevant Indian Standards with why each one matters.',
    problem:
      'When you draft a government tender you have to cite the correct Indian Standards. There are thousands of them, they reference each other, editions change, and the requirement comes as messy text — “waterproof”, “IP66”, “जलरोधक” all mean the same thing but share no keywords. Keyword search misses most of it.',
    solution:
      'I built a tool that reads the requirement, pulls out technical parameters, searches by meaning instead of keywords, ranks the results, and shows evidence for each recommendation. It also checks for outdated references, certification signals, and gaps in the spec, and can draft a standards-ready spec you can edit.',
    approach: [
      'Clean the input, detect language (EN / Hindi / Hinglish), normalize through a concept lexicon, then extract parameters like IP rating, wattage, voltage, conductor size with rules — LLM extraction is merged in if available, not used alone.',
      'Parse IS citations in many forms — IS 694:2010, IS 10322 (Part 5/Sec 3):2012, IS/IEC 60529 — into a canonical key so we can look them up.',
      'Chunk the query, embed each chunk, do nearest-neighbour search, aggregate per standard, boost slightly by inferred sector but don’t hard-filter so allied standards aren’t lost. Fall back to text search if vectors are down.',
      'Rerank by combining provider score with metadata overlap, how many extracted requirements are covered, graph connectivity, and evidence strength.',
      'Score confidence with six components (0-100) and four bands. Below threshold goes to “Related” instead of pretending it’s a top result.',
      'Check certifications, outdated editions, run gap rules, build a relationship graph, generate a draft spec.',
    ],
    architecture: [
      'Spec in — text, pasted clause, or PDF (pdf.js in browser)',
      'Requirement extraction — clean, language detect, rule + optional LLM',
      'Reference parsing — IS / IS-IEC / IS-ISO',
      'Retrieval — chunk → embed → nearest-neighbour (in-memory or pgvector)',
      'Ranking — rerank fused with coverage and graph',
      'Confidence — six components → band',
      'Evidence — snippets with source + reason + graph expansion',
      'Compliance — certs, outdated checks, gaps, graph',
      'Report + editable spec draft',
    ],
    features: [
      'Free-text or PDF tender input',
      'Semantic search over indexed standards',
      'Recommendations with per-requirement evidence',
      'Confidence breakdown you can actually read',
      'Gap and outdated-reference checks',
      'Relationship graph and standards explorer',
      'Search history (localStorage, plus Supabase if configured)',
      'English, Hindi, Hinglish',
      'Works offline in demo mode, no API keys needed',
    ],
    tech: ['React 19', 'TypeScript', 'Vite', 'Embeddings', 'pgvector', 'Supabase', 'Vitest'],
    challenges: [
      'Same intent, different words — had to normalize and embed instead of string matching.',
      'Allied standards were getting dropped when I filtered by sector, so I changed it to a soft boost.',
      'A single similarity score means nothing to a procurement officer, so I split confidence into six parts and show them.',
      'Demo has to work without keys, so every provider call has a deterministic fallback.',
    ],
    engineeringNotes: [
      'The hardest part was not the retrieval — it was making the output reviewable. I kept getting “here are 5 standards” with no reason, which is useless for tenders. Adding per-requirement snippets and a confidence breakdown made it actually usable.',
      'I started with LLM-only extraction and it was brittle. Switching to rule-based extraction first, then merging LLM output if present, made it more reliable and cheaper.',
      'Sector inference as a hard filter removed useful normative and test standards. Soft boost fixed it.',
      'What I’d improve next: better PDF table extraction, real BIS API for edition freshness instead of indexed demo data, and a proper evaluation set with procurement officers.',
    ],
    contribution: [
      'Built the retrieval and ranking: extraction, reference parsing, embedding search, rerank fusion, confidence model.',
      'Built the analysis: evidence assembly, graph expansion, outdated checks, gap rules, spec draft.',
      'Built the React + TypeScript UI — recommendations, explorer, graph, gaps, history.',
      'Set up offline demo mode, CI, and Vercel deploy.',
    ],
    disclaimer:
      'AI assistance only — not BIS. Every result is labelled as AI recommendation and needs checking against official BIS sources. Dataset is a labelled demo dataset.',
    repo: 'https://github.com/rajaryan1111/indian-standards-procurement-ai',
    demo: 'https://indian-standards-procurement-ai.vercel.app/',
    image: '/projects/is-copilot/dashboard.webp',
    imageAlt: 'IS Copilot dashboard — live application screenshot',
    imagePosition: '50% 0%',
    gallery: [
      { src: '/projects/is-copilot/evidence.webp', alt: 'IS Copilot dashboard', label: 'Dashboard', objectPosition: '50% 0%' },
      { src: '/projects/is-copilot/evidence.webp', alt: 'IS Copilot analysis and recommendation results', label: 'Recommendation results', objectPosition: '50% 33.333%' },
      { src: '/projects/is-copilot/evidence.webp', alt: 'IS Copilot standards relationship graph', label: 'Relationship graph', objectPosition: '50% 66.667%' },
      { src: '/projects/is-copilot/evidence.webp', alt: 'IS Copilot standards explorer', label: 'Standards explorer', objectPosition: '50% 100%' },
    ],  },

  {
    id: 'ai-adaptive-onboarding',
    name: 'AI Adaptive Onboarding Engine',
    subtitle: 'Resume vs role — what’s missing and what to learn next',
    category: 'Full-stack · LLM',
    year: '2026',
    featured: true,
    flagship: false,
    badge: 'Team project',
    tagline:
      'Upload a resume and a job description, see the skill gap, get a learning path. Admin and user dashboards are separate.',
    problem:
      'Onboarding is usually the same for everyone. It doesn’t matter what you already know or what the role actually needs.',
    solution:
      'A platform that analyses resume + JD, saves the result, figures out the gap, and suggests what to learn. Role-based dashboards — admin sees user management and analytics, users see their own analysis.',
    approach: [
      'FastAPI with JWT — registration, login, profile, password reset.',
      'Analysis pipeline that persists results to DB instead of keeping them in UI state.',
      'Gap detection → adaptive recommendations.',
      'Separate admin and user capabilities in API and frontend.',
      'Analytics from real DB queries, not mock data.',
      'Docker Compose for frontend, backend, Postgres.',
    ],
    architecture: [
      'React + Vite frontend (Nginx)',
      'JWT auth',
      'FastAPI backend',
      'SQLAlchemy + PostgreSQL',
      'Docker Compose',
    ],
    features: [
      'Auth with JWT',
      'Resume + JD analysis that saves to DB',
      'Skill-gap and recommendations',
      'Admin vs user dashboards',
      'User management for admins',
      'Analytics from DB',
      'One-command local setup',
    ],
    tech: ['FastAPI', 'Python', 'React', 'PostgreSQL', 'Docker', 'JWT'],
    challenges: [
      'Had to make analysis results durable — otherwise dashboards had nothing to read after refresh.',
      'Admin vs user permissions had to be clean on both API and UI.',
      'Making it runnable for evaluators with just docker compose up.',
    ],
    engineeringNotes: [
      'This is a team repo owned by a collaborator. I worked on the analysis pipeline and parts of the frontend.',
      'We learned that keeping results in React state breaks as soon as you refresh. Moving to persisted DB rows fixed dashboards and analytics.',
      'Next improvement would be better evaluation of the gap detection — right now it’s heuristic + LLM, needs more testing.',
    ],
    contribution: [
      'Contributed to analysis pipeline and frontend as part of a team.',
      'Team repo — check commit history for full breakdown.',
    ],
    disclaimer: 'Team project. Repo is source of truth for what’s implemented.',
    repo: 'https://github.com/RajanKumar44/ai-adaptive-onboarding-engine',
    repoNote: 'Team repo — owned by collaborator',
    demo: null,
    image: null,
    imageAlt: null,
  },

  {
    id: 'jarvis',
    name: 'Jarvis',
    subtitle: 'Voice assistant that can see and control my Mac',
    category: 'Agents · Voice',
    year: '2025 — 2026',
    featured: true,
    flagship: false,
    badge: null,
    tagline:
      'Wake-word voice, LLM reasoning, local RAG over my notes, vision, and macOS controls — all behind a browser HUD.',
    problem:
      'Chat assistants can’t see your screen, read your local PDFs, or control your machine. I wanted something that could.',
    solution:
      'Python assistant with a local server and browser HUD. Listens for wake word, transcribes, routes through LLM, pulls from a local vector index over notes/PDFs, runs vision, does system actions, answers with macOS TTS.',
    approach: [
      'Voice loop: wake-word, speech recognition, macOS TTS.',
      'LLM for reasoning and command parsing.',
      'Local RAG over personal notes and PDFs.',
      'Vision: face registration/recognition, hand gesture, person detection.',
      'Automation: reminders, study planner, system controls — shared logic for CLI and HUD via local server.',
      'Keep personal data local — face images, memory, keys are gitignored.',
    ],
    architecture: [
      'Wake word → speech to text',
      'Router (CLI or local API)',
      'LLM + local RAG + vision',
      'Actions — reminders, planner, system controls',
      'Answer → TTS + HUD log',
    ],
    features: [
      'Hands-free wake-word',
      'LLM responses',
      'Local RAG over notes/PDFs',
      'Vision — face, gesture, person',
      'macOS controls',
      'Reminders and study planner',
      'Browser HUD with logs and chat',
    ],
    tech: ['Python', 'Flask', 'OpenCV', 'Speech recognition', 'RAG', 'JavaScript'],
    challenges: [
      'Keeping voice responsive while LLM and retrieval run.',
      'Not duplicating logic between CLI and HUD.',
      'Keeping private data out of git.',
    ],
    engineeringNotes: [
      'Biggest lesson: sharing one router between voice CLI and HUD saved a lot of duplicated code.',
      'Face recognition is useful but needs good lighting — added registration flow to make it more reliable.',
      'Runs only on my Mac, not packaged for others. Would need proper packaging and permissions handling to distribute.',
    ],
    contribution: ['Built end to end — voice, routing, LLM, RAG, vision, automation, HUD.'],
    disclaimer: 'Personal project, macOS only, not packaged for distribution.',
    repo: 'https://github.com/rajaryan1111/jarvis-assistant',
    demo: null,
    image: null,
    imageAlt: null,
  },

  {
    id: 'h2s-dosimeter',
    name: 'H₂S Exposure Dosimeter',
    subtitle: 'Wristband that changes color + computer vision reading',
    category: 'Computer Vision · Hardware',
    year: '2026',
    featured: false,
    badge: 'SIH 2026 · SIH26118',
    tagline:
      'Disposable colorimetric wristband where color change is read by phone camera with lighting correction and ML.',
    problem:
      'Workers need cumulative H₂S exposure, not just an alarm. Electronic dosimeters are expensive at scale. A color strip is cheap but reading it by eye is inconsistent.',
    solution:
      'Copper-acetate strip darkens with cumulative H₂S. Phone photos it next to a reference card, software corrects lighting, converts to Lab, uses ΔE2000 vs fresh strip, regresses to ppm·hr, logs to backend, shows on dashboard.',
    approach: [
      'Chemistry: Cu(CH₃COO)₂ + H₂S → CuS + 2 CH₃COOH — strip darkens.',
      'Vision: ROI with OpenCV/HSV, sRGB → XYZ → Lab, ΔE2000 vs baseline.',
      'Lighting correction via printed reference card.',
      'Random Forest maps color difference to dose.',
      'FastAPI + SQLAlchemy for workers, readings, alerts, reports. React dashboard.',
    ],
    architecture: [
      'Wristband — strip darkens with exposure',
      'Phone photo with reference card',
      'ROI detection',
      'sRGB → Lab, ΔE2000 + lighting correction',
      'ML → dose ppm·hr',
      'FastAPI backend',
      'React dashboard',
    ],
    features: [
      'Colorimetric strip with reference scale',
      'Cumulative dose, not instant',
      'Lab + ΔE2000 with correction',
      'ML dose estimation',
      'FastAPI backend',
      'React dashboard',
    ],
    tech: ['Python', 'OpenCV', 'scikit-learn', 'FastAPI', 'React'],
    challenges: [
      'Lighting changes RGB more than chemistry — need reference card.',
      'RGB distance isn’t perceptual, so Lab + ΔE2000.',
      'Current ML eval uses synthetic data — needs real hardware validation.',
    ],
    engineeringNotes: [
      'I worked on the color science and ML pipeline plus backend and dashboard.',
      'We realized early that phone photos are useless without a reference card for white balance.',
      'This is a hackathon prototype — no safety certification, accuracy not validated on real hardware yet.',
    ],
    contribution: [
      'Worked on color-science and ML reading pipeline.',
      'Worked on FastAPI backend and React dashboard.',
    ],
    disclaimer: 'Hackathon prototype. No safety certification. Uses synthetic data for ML eval.',
    repo: 'https://github.com/rajaryan1111/SIH-H2S-Dosimeter',
    repoNote: 'Fork of team repo RajanKumar44/SIH-H2S-Dosimeter',
    demo: null,
    image: null,
    imageAlt: null,
  },

  {
    id: 'fake-id-screening',
    name: 'Fake-ID Screening',
    subtitle: 'Flag documents for human review',
    category: 'Computer Vision · Backend',
    year: '2026',
    featured: false,
    badge: null,
    tagline:
      'Mobile capture, OCR/image checks, FastAPI backend that stores submissions safely and returns signals for review.',
    problem:
      'Checking IDs manually is slow and inconsistent. An automated step can flag suspicious ones, but it should be clear it’s a signal, not a verdict.',
    solution:
      'Phone captures document + live photo, FastAPI validates, stores with UUID filenames, runs OCR/image modules, saves result to Postgres. Offline demo mode so flow can be shown without deployed backend.',
    approach: [
      'FastAPI endpoint for document + live photo.',
      'Validate MIME and size (10 MB limit).',
      'UUID filenames to avoid path traversal.',
      'Postgres via SQLAlchemy with seed data.',
      'Mobile capture flow.',
      'Offline demo mode.',
      'Separate client/backend/detection so modules are swappable.',
    ],
    architecture: [
      'Mobile camera',
      'Doc + live photo',
      'FastAPI — validation, OCR, result',
      'Postgres',
    ],
    features: [
      'Mobile capture',
      'Doc + live photo endpoint',
      'MIME/size validation',
      'Safe file storage',
      'SQLAlchemy + Supabase',
      'Offline demo',
      'Health + screening endpoints',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'OpenCV', 'React'],
    challenges: [
      'Untrusted uploads — had to add validation, limits, non-guessable names early.',
      'Keeping detection swappable so logic can evolve.',
      'Scoping claim correctly — signals, not legal verdict.',
    ],
    engineeringNotes: [
      'Built the FastAPI endpoint with validation and safe storage, plus DB models.',
      'Learned to treat file uploads as hostile from day one — UUID names and MIME checks prevent a lot of issues.',
    ],
    contribution: [
      'Built screening endpoint and DB layer.',
      'Worked on mobile capture and offline demo.',
    ],
    disclaimer: 'Prototype — signals for human review, not legal determination. Not in production.',
    repo: 'https://github.com/rajaryan1111/fake-id-screening',
    repoNote: 'Team copy at SIH-Fake-ID-Screening/fake-id-screening',
    demo: null,
    image: null,
    imageAlt: null,
  },

  {
    id: 'ai-resume-review',
    name: 'AI Resume Review',
    subtitle: 'Resume vs JD — what’s missing',
    category: 'LLM · Full-stack',
    year: '2026',
    featured: false,
    badge: null,
    tagline:
      'Paste resume and JD as text or PDF, get extracted skills, gaps, and a visual skill graph.',
    problem:
      'Hard to know which skills a role expects that your resume doesn’t show. Manual reading gives vague feeling, not concrete list.',
    solution:
      'React + Vite UI that sends resume + JD to analysis API, shows skills, gaps, and graph with Recharts + React Flow.',
    approach: [
      'Input: resume + JD as text or PDF, optional role hint.',
      'Multipart request to analysis API, backend URL from env.',
      'Backend: extraction → skill analysis → gap.',
      'Frontend: results + graph.',
      'Keep personal docs and keys out of git.',
    ],
    architecture: [
      'Resume / JD (text or PDF)',
      'React frontend',
      'Analysis API',
      'Extraction → skill → gap',
      'Results + graph',
    ],
    features: [
      'Text or PDF input',
      'Role hint',
      'Skill extraction + gap',
      'Role-aware insights',
      'Skill graph',
      'Env-based backend URL',
    ],
    tech: ['React', 'Vite', 'React Flow', 'Recharts', 'FastAPI'],
    challenges: [
      'Turning two unstructured texts into comparable skills.',
      'Making gap analysis actionable, not just a score.',
      'Keeping personal docs out of repo.',
    ],
    engineeringNotes: [
      'Built the React frontend and the multipart request flow.',
      'Visual graph helped make gaps understandable — list alone wasn’t enough.',
    ],
    contribution: [
      'Built React frontend, results views, skill graph.',
      'Wired analysis request and env config.',
    ],
    disclaimer: 'Portfolio/hackathon project, not a deployed product.',
    repo: 'https://github.com/rajaryan1111/AI_resume_review',
    demo: null,
    image: null,
    imageAlt: null,
  },
]

export const otherWork = [
  {
    name: 'GraphOne Intelligence Pipeline',
    description:
      'Async ingestion for research papers, startups, products, news, jobs. Handles retries, worker pools, idempotent writes, validation, and multi-provider LLM fallback. Built to not lose data silently.',
    tech: ['Python', 'Async', 'PostgreSQL', 'Docker'],
    repo: 'https://github.com/rajaryan1111/graphone-intelligence-pipeline',
  },
  {
    name: 'AI Orbit Tools Ingestion',
    description:
      'Pipeline for AI-tool metadata — discovery, normalization, dedup, URL checks, scoring, checkpoints, and fixtures for tests so it’s reproducible.',
    tech: ['Python', 'Data pipelines', 'Testing'],
    repo: 'https://github.com/rajaryan1111/ai-orbit-tools-ingestion',
  },
  {
    name: 'Deep Learning Signal Modulation Lab',
    description:
      'Lab for AM/FM/PM modulation with signal controls, spectrum view, and a small neural classifier. Built alongside ECE coursework.',
    tech: ['TypeScript', 'React', 'Signal processing'],
    repo: 'https://github.com/rajaryan1111/deep-learning-am-fm-modulation',
    demo: 'https://a1creator284-deep-learning-am-fm-mo.vercel.app',
    demoNote: 'Demo still under old subdomain, works',
  },
]

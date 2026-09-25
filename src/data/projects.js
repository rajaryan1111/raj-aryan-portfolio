/**
 * Project data.
 *
 * All repository URLs and the live demo were verified with HTTP checks and the
 * GitHub API on 2026-09-25. Content is drawn from each repository's own README.
 *
 * NOTE ON URLS: the owner's GitHub username changed from `a1creator284` to
 * `rajaryan1111`. The old URLs only work through GitHub's 301 redirect, so the
 * canonical `rajaryan1111/*` URLs are used throughout.
 *
 * Rules:
 *  - no invented metrics, users, accuracy, revenue, awards or deployments
 *  - numbers only appear when they are stated in the project's own repository
 *  - `image: null` renders a generated non-photographic visual, never a fake screenshot
 */

export const projects = [
  {
    id: 'is-copilot',
    name: 'IS Copilot',
    subtitle: 'AI-Powered Indian Standards Intelligence for Procurement',
    category: 'RAG · Document Intelligence',
    year: '2026',
    featured: true,
    badge: 'Smart India Hackathon 2026 · SIH26108',
    tagline:
      'Turns an unstructured procurement requirement into an explainable set of potentially applicable Indian Standards, with evidence, confidence and gap analysis.',
    problem:
      'Procurement officers in government departments, PSUs and public agencies must cite the correct Indian Standards when drafting tenders. There are thousands of standards with overlapping scopes; a single product pulls in allied normative, test, safety and installation standards; editions get superseded; and specifications arrive as free text in English, Hindi or Hinglish. Keyword search does not capture semantics — "waterproof", "IP66" and "जलरोधक" express the same intent but share no keywords.',
    solution:
      'A retrieval-augmented, evidence-grounded assistant for standards discovery. It extracts structured requirements from free text, retrieves semantically similar standards from an indexed dataset, reranks candidates, expands along a typed standards relationship graph, and attaches evidence snippets, a transparent confidence breakdown and gap findings. Every output is labelled as an AI recommendation for human verification.',
    approach: [
      'Requirement extraction: input cleaning, language detection (English / Devanagari Hindi / Hinglish), normalisation through a domain concept lexicon, then rule-based extraction of technical parameters — optionally merged with LLM extraction rather than replaced by it.',
      'Reference parsing: canonicalises Indian Standard citations across many written forms (IS 694:2010, IS 10322 (Part 5/Sec 3):2012, IS/IEC 60529) into a lookup key.',
      'Semantic retrieval: chunk with overlap, embed each chunk, run nearest-neighbour search, aggregate hits per standard, apply inferred sectors as a soft boost, and fall back to lexical search when vector search is unavailable.',
      'Candidate ranking: fuses provider rerank scores with metadata overlap, extracted-requirement coverage, relationship-graph connectivity and evidence strength.',
      'Confidence analysis: six weighted components summed to a 0–100 score and mapped to four bands; candidates below the primary threshold are demoted to "Related" instead of shown as recommendations.',
      'Compliance analysis: certification lookups, outdated-reference detection against indexed editions, a gap rule engine over the specification and a standards-ready specification draft.',
    ],
    architecture: [
      'Procurement specification (text · pasted clause · EN/HI/Hinglish · PDF)',
      'Requirement extraction — clean, language detect/normalise, rule + optional LLM extraction',
      'Reference & entity detection — canonicalise IS / IS-IEC / IS-ISO citations',
      'Semantic retrieval — chunk → embed → nearest-neighbour (in-memory cosine or pgvector)',
      'Candidate ranking — provider rerank fused with metadata, coverage, graph connectivity',
      'Confidence analysis — 6 weighted components → 0–100 → confidence band',
      'Evidence & recommendations — snippets, reasons, one-hop graph expansion, freshness',
      'Compliance analysis — certifications · outdated refs · gaps · knowledge graph',
      'Explainable analysis report + specification draft',
    ],
    features: [
      'Procurement requirement analysis from free text or a pasted tender clause',
      'Embedding-based semantic retrieval over an indexed standards dataset',
      'Standard recommendations with per-requirement evidence snippets',
      'Transparent six-component confidence breakdown',
      'Gap analysis over the submitted specification',
      'Standards explorer and typed relationship graph',
      'Tender specification support with PDF upload',
      'Search history',
      'English, Hindi and Hinglish input',
      'Fully offline demo mode with no API keys required',
    ],
    tech: [
      'React 19',
      'TypeScript',
      'Vite',
      'Embeddings',
      'Vector search / pgvector',
      'LLM providers',
      'Supabase',
      'Vitest',
    ],
    challenges: [
      'Semantics over keywords — equivalent requirements share no vocabulary across English, Hindi and Hinglish, so retrieval had to run on normalised, embedded text rather than string matching.',
      'Keeping allied standards in scope — inferred sectors are applied as a soft boost rather than a hard filter, so cross-sector normative and test standards are not silently dropped.',
      'Explainability — a raw similarity score is not usable for procurement, so ranking was decomposed into a six-component confidence breakdown shown in the interface.',
      'Running without credentials — the demo path had to work offline so the system can be evaluated without API keys, which meant a deterministic fallback for every provider call.',
    ],
    contribution: [
      'Built the retrieval and ranking engine: requirement extraction, reference parsing, chunked embedding retrieval, rerank fusion and the confidence model.',
      'Built the analysis layer: evidence assembly, relationship-graph expansion, outdated-reference checks and the gap rule engine.',
      'Built the React + TypeScript interface, including recommendations, standards explorer, relationship graph and gap analysis views.',
      'Set up the demo-mode fallback path, CI and the deployed demo.',
    ],
    disclaimer:
      'IS Copilot is an AI assistance system, not a BIS or regulatory authority. Every recommendation is labelled as an AI recommendation and must be verified against authoritative BIS sources before procurement use. The bundled dataset is a clearly-labelled demo dataset.',
    repo: 'https://github.com/rajaryan1111/indian-standards-procurement-ai',
    demo: 'https://indian-standards-procurement-ai.vercel.app/',
    image: '/projects/is-copilot.png',
    imageAlt:
      'IS Copilot application screenshot showing the Standards Intelligence workspace with Analyze Specification, Recommendations, Standards Explorer, Relationship Graph and Gap Analysis',
  },

  {
    id: 'h2s-dosimeter',
    name: 'H₂S Exposure Dosimeter',
    subtitle: 'Passive Colorimetric Wristband with AI-Based Quantitative Reading',
    category: 'Computer Vision · Hardware + Software',
    year: '2026',
    featured: true,
    badge: 'Smart India Hackathon 2026 · SIH26118',
    tagline:
      'A disposable colorimetric wristband whose progressive colour change is read quantitatively by a computer-vision and ML pipeline.',
    problem:
      'Workers exposed to hydrogen sulfide need a record of cumulative exposure, not just an instantaneous alarm. Electronic dosimeters are expensive to issue at scale, and a passive colour-changing strip is only useful if the colour can be read consistently — by eye, lighting and observer bias make the reading unreliable.',
    solution:
      'A low-cost disposable wristband carries a copper-acetate colorimetric strip that darkens progressively with cumulative H₂S exposure. A phone photographs the strip next to a printed reference colour card; software applies lighting correction and an ML regression to quantify the cumulative dose in ppm·hr, which is logged to a backend and surfaced on an admin dashboard.',
    approach: [
      'Chemistry: copper acetate reacts with H₂S to form copper sulfide, darkening the strip — Cu(CH₃COO)₂ + H₂S → CuS + 2 CH₃COOH.',
      'Computer vision: ROI detection with OpenCV/HSV, sRGB → CIE XYZ → CIE L*a*b* conversion, and CIE ΔE2000 colour difference against a fresh-strip baseline.',
      'Lighting correction using the printed reference colour card so readings are comparable across ambient conditions.',
      'ML: a Random Forest regression maps the corrected colour difference to a cumulative dose in ppm·hr.',
      'Backend: FastAPI + SQLAlchemy services for worker, reading, alert and reporting workflows, consumed by a React dashboard.',
    ],
    architecture: [
      'Worker wears wristband — copper-acetate strip darkens with cumulative H₂S exposure',
      'Phone captures strip alongside printed reference colour card',
      'ROI detection (OpenCV / HSV)',
      'sRGB → CIE XYZ → CIE L*a*b*',
      'CIE ΔE2000 vs fresh-strip baseline + reference-card lighting correction',
      'ML regression → dose_ppm_hr',
      'POST /readings/ → FastAPI + SQLAlchemy backend',
      'Admin dashboard (React + Vite) — workers, readings, alerts, reports',
    ],
    features: [
      'Chemical colorimetric strip with a printed reference colour scale',
      'Cumulative exposure reading rather than instantaneous concentration',
      'Colour-science pipeline (CIE Lab, ΔE2000) with lighting correction',
      'ML regression for quantitative dose estimation',
      'FastAPI backend with worker, reading, alert and reporting workflows',
      'React admin dashboard for exposure history',
      'Shelf-life / freshness indication through the baseline comparison',
    ],
    tech: [
      'Python',
      'OpenCV',
      'scikit-learn',
      'Colour science (CIE Lab · ΔE2000)',
      'FastAPI',
      'SQLAlchemy',
      'React',
      'Vite',
    ],
    challenges: [
      'Ambient lighting changes the measured RGB far more than the chemistry does, so every reading is corrected against a printed reference card before comparison.',
      'Perceptual colour difference needs a proper metric — RGB distance is not perceptually uniform, so the pipeline converts to CIE L*a*b* and uses ΔE2000.',
      'The current ML evaluation uses synthetic/physics-based data; real-hardware validation is still an open project dependency.',
    ],
    contribution: [
      'Worked on the colour-science and ML reading pipeline (ROI detection, Lab conversion, ΔE2000, dose regression).',
      'Worked on the FastAPI backend and the React dashboard that consumes it.',
    ],
    disclaimer:
      'This is a hackathon prototype. It carries no industrial, medical or occupational-safety certification, and its accuracy has not been validated against real hardware or field conditions. The current ML evaluation uses synthetic / physics-based data.',
    repo: 'https://github.com/rajaryan1111/SIH-H2S-Dosimeter',
    repoNote: 'Fork of the team repository RajanKumar44/SIH-H2S-Dosimeter',
    demo: null,
    image: null,
    imageAlt: null,
  },

  {
    id: 'jarvis',
    name: 'Jarvis',
    subtitle: 'AI Voice Assistant for macOS',
    category: 'AI Agents · Voice · Computer Vision',
    year: '2025 — 2026',
    featured: true,
    badge: null,
    tagline:
      'A desktop assistant that combines wake-word voice interaction, LLM reasoning, local RAG over personal notes, vision utilities and macOS automation behind a browser HUD.',
    problem:
      'General-purpose chat assistants cannot see the screen, control the machine or answer questions from local documents. A useful desktop assistant needs voice input, local knowledge, vision and system access wired into one loop.',
    solution:
      'A Python assistant with a browser-based HUD served by a local server. It listens for a wake word, transcribes speech, routes the request through an LLM, retrieves from a local vector index over personal notes and PDFs, runs vision utilities, executes macOS system actions, and answers through system text-to-speech.',
    approach: [
      'Voice loop: wake-word detection, speech recognition and macOS text-to-speech for output.',
      'LLM integration for reasoning and natural-language command interpretation.',
      'Local RAG: notes and PDFs are embedded into a local vector index that the assistant retrieves from before answering.',
      'Vision utilities: face registration/recognition, hand-gesture and person detection.',
      'Automation: reminders, study planning and macOS system controls, exposed through a local server so the HUD and the CLI share the same logic.',
      'Privacy: face images, memory data and API credentials stay local and are excluded from source control.',
    ],
    architecture: [
      'Wake word → speech recognition',
      'Command router (CLI entry point or local server API)',
      'LLM reasoning · local RAG over notes/PDF vector index · vision module',
      'Action layer — reminders, study planner, macOS system controls',
      'Response → macOS text-to-speech + browser HUD log feed',
    ],
    features: [
      'Hands-free wake-word voice interaction',
      'LLM-backed responses',
      'Local RAG over personal notes and PDFs via a vector index',
      'Vision utilities — face, hand-gesture and person detection',
      'macOS system controls and automation',
      'Reminders and study planner',
      'Browser HUD with status, log feed and chat box',
      'Speech output through the macOS system voice',
    ],
    tech: ['Python', 'Flask', 'OpenAI API', 'OpenCV', 'Speech recognition', 'Vector index / RAG', 'JavaScript'],
    challenges: [
      'Keeping the voice loop responsive while LLM, retrieval and vision work run behind it.',
      'Sharing one command-routing layer between the voice CLI and the browser HUD instead of duplicating logic.',
      'Keeping personal data local — face images, memory and credentials are deliberately kept out of version control.',
    ],
    contribution: [
      'Built the assistant end to end: voice loop, command routing, LLM integration, local RAG index, vision utilities, automation layer and the browser HUD.',
    ],
    disclaimer:
      'A personal project built and run on macOS. It is not packaged for distribution and has not been tested on other platforms.',
    repo: 'https://github.com/rajaryan1111/jarvis-assistant',
    repoNote: 'Previously hosted at a1creator284/jarvis-assistant (username changed)',
    demo: null,
    image: null,
    imageAlt: null,
  },

  {
    id: 'fake-id-screening',
    name: 'Fake-ID Screening',
    subtitle: 'AI-Assisted Identity Document Screening',
    category: 'Computer Vision · OCR · Backend',
    year: '2026',
    featured: true,
    badge: null,
    tagline:
      'A document-screening prototype that combines mobile camera capture, OCR/image analysis and a validated FastAPI backend to flag documents for human review.',
    problem:
      'Manually checking identity documents at scale is slow and inconsistent. An automated screening step can surface suspicious documents for review — but it must be explicit that it produces signals, not verdicts.',
    solution:
      'A modular screening system: a mobile camera flow captures a document image and a live photo, a FastAPI endpoint validates and stores the submission safely, and OCR/image-analysis modules produce a screening result persisted to PostgreSQL. An offline demo mode lets the verification flow be demonstrated without a deployed backend.',
    approach: [
      'Screening API: a FastAPI endpoint accepting a document image plus a live photo.',
      'Input validation: MIME-type and file-size checks with a 10 MB upload limit.',
      'Safe file handling: UUID-based filenames to avoid path traversal and predictable-file enumeration.',
      'Persistence: Supabase PostgreSQL through SQLAlchemy, with models and development seed data.',
      'Mobile capture: a camera-based capture workflow for the client experience.',
      'Offline demo mode so the flow can be demonstrated without depending on a deployed backend.',
      'Modular separation of client, backend and detection components so detection modules can be replaced independently.',
    ],
    architecture: [
      'Mobile camera capture',
      'Document image + live photo',
      'Screening API (FastAPI)',
      '├─ input validation (MIME type, size limit)',
      '├─ OCR / image-analysis modules',
      '└─ screening result',
      'PostgreSQL / Supabase',
    ],
    features: [
      'Mobile camera capture flow',
      'Document + live photo submission endpoint',
      'MIME-type and file-size validation with a 10 MB limit',
      'UUID-based safe file storage',
      'SQLAlchemy models over Supabase PostgreSQL with seed data',
      'Offline demo verification mode',
      'Health-check and screening REST endpoints',
      'CI workflow in the repository',
    ],
    tech: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL / Supabase', 'OpenCV', 'OCR', 'React', 'React Native'],
    challenges: [
      'Handling untrusted file uploads safely — validation, size limits and non-guessable storage filenames were built in rather than added later.',
      'Keeping detection modules swappable, so the screening logic can evolve without rewriting the capture or API layers.',
      'Scoping the claim correctly: the system produces review signals, not a legal determination of authenticity.',
    ],
    contribution: [
      'Built the FastAPI screening endpoint with input validation and safe file handling.',
      'Built the database layer with SQLAlchemy models and development seed data.',
      'Worked on the mobile capture flow and the offline demo verification mode.',
    ],
    disclaimer:
      'A prototype. It does not establish with legal certainty whether an identity document is genuine or fraudulent; results are signals that require human review. It is not deployed in production.',
    repo: 'https://github.com/rajaryan1111/fake-id-screening',
    repoNote: 'A team copy also exists at SIH-Fake-ID-Screening/fake-id-screening',
    demo: null,
    image: null,
    imageAlt: null,
  },

  {
    id: 'ai-resume-review',
    name: 'AI Resume Review',
    subtitle: 'Resume ↔ Job Description Skill-Gap Analysis',
    category: 'LLM Application · Full-Stack',
    year: '2026',
    featured: true,
    badge: null,
    tagline:
      'Compares a resume against a target job description and surfaces skills, gaps and diagnostics through an interactive skill graph.',
    problem:
      'Candidates rarely know which specific skills a target role expects that their resume does not evidence. Reading a job description manually gives a vague impression rather than a concrete, reviewable list.',
    solution:
      'A React + Vite interface that accepts a resume and a job description as text or PDF, sends them to an analysis API, and renders the extracted skills, the detected gaps and a visual skill graph alongside role-aware insights.',
    approach: [
      'Input: resume and job description as pasted text or PDF, with an optional target-role hint.',
      'Transport: a multipart request to the analysis API, with the backend URL supplied by environment configuration.',
      'Pipeline: extraction → skill analysis → gap analysis on the backend.',
      'Output: results plus a visual skill graph (React Flow) and charts (Recharts).',
      'Explicit repository hygiene — resumes, job descriptions with personal data and API keys are kept out of version control.',
    ],
    architecture: [
      'Resume / job description (text or PDF)',
      'React + Vite frontend',
      'Analysis API',
      'Extraction → skill analysis → gap analysis',
      'Results + interactive skill graph',
    ],
    features: [
      'Resume and job-description text or PDF input',
      'Optional target-role hint',
      'Skill extraction and skill-gap analysis',
      'Role-aware insights',
      'Visual skill graph and dashboard interface',
      'Environment-based backend URL configuration',
    ],
    tech: ['React', 'Vite', 'Tailwind CSS', 'React Flow', 'Recharts', 'FastAPI', 'PostgreSQL'],
    challenges: [
      'Turning two pieces of unstructured text into a comparable skill representation before any gap can be computed.',
      'Presenting a gap analysis so it reads as actionable guidance rather than an opaque score.',
      'Keeping personal documents out of the repository while still supporting a realistic local workflow.',
    ],
    contribution: [
      'Built the React + Vite frontend, including the analysis flow, results views and the skill graph visualisation.',
      'Wired the multipart analysis request and environment-based backend configuration.',
    ],
    disclaimer: 'A hackathon/portfolio project under active development. It is not a deployed product.',
    repo: 'https://github.com/rajaryan1111/AI_resume_review',
    repoNote: 'Previously hosted at a1creator284/AI_resume_review (username changed)',
    demo: null,
    image: null,
    imageAlt: null,
  },

  {
    id: 'ai-adaptive-onboarding',
    name: 'AI Adaptive Onboarding Engine',
    subtitle: 'Profile-vs-Role Analysis with Adaptive Learning Paths',
    category: 'LLM Application · Full-Stack',
    year: '2026',
    featured: true,
    badge: 'Team project',
    tagline:
      'Analyses candidate profiles against role requirements, detects skill gaps and generates adaptive learning recommendations behind role-aware dashboards.',
    problem:
      'Traditional onboarding is static and role-agnostic: every new joiner gets the same material regardless of what they already know or what the role actually requires.',
    solution:
      'A full-stack platform that runs a resume + job-description analysis pipeline, persists the results, detects the skill delta and turns it into structured learning recommendations, surfaced through role-aware dashboards for admin and regular users.',
    approach: [
      'FastAPI backend with JWT auth flows — registration, login, profile and password management.',
      'Analysis pipeline over resume and job description, with results persisted rather than held in the UI.',
      'Skill-gap detection driving adaptive learning recommendations.',
      'Role-aware dashboards separating admin and regular-user capability, plus admin user management.',
      'Analytics views derived from database-backed endpoints rather than mock data.',
      'Docker Compose setup (frontend, backend, PostgreSQL) for a reproducible local environment.',
    ],
    architecture: [
      'Frontend (React + Vite, served via Nginx)',
      'HTTP with JWT',
      'Backend API (FastAPI)',
      'SQLAlchemy ORM',
      'PostgreSQL',
      'All three services orchestrated with Docker Compose',
    ],
    features: [
      'Secure auth flows — registration, login, profile, password management',
      'Resume and job-description analysis pipeline with persisted results',
      'Skill-gap detection and adaptive recommendations',
      'Role-aware dashboards (admin vs regular user)',
      'Admin user management',
      'Database-backed analytics views',
      'Docker Compose for reproducible local setup',
    ],
    tech: ['FastAPI', 'Python', 'React', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'JWT', 'LLM analysis'],
    challenges: [
      'Keeping analysis results durable and queryable so dashboards and analytics read from the database instead of transient UI state.',
      'Separating admin and regular-user capability cleanly across the API and the frontend.',
      'Making the whole stack reproducible for evaluators with a single Docker Compose command.',
    ],
    contribution: [
      'Contributed to this team project across the analysis pipeline and the frontend application.',
      'Team repository — see the repository history for the full contribution breakdown.',
    ],
    disclaimer:
      'A team project. No usage, accuracy or production-scale claims are made here; the repository is the source of truth for what is implemented.',
    repo: 'https://github.com/RajanKumar44/ai-adaptive-onboarding-engine',
    repoNote: 'Team repository owned by a collaborator',
    demo: null,
    image: null,
    imageAlt: null,
  },
]

/** Additional verified public repositories, shown as a compact list. */
export const otherWork = [
  {
    name: 'GraphOne Intelligence Pipeline',
    description:
      'Async, fault-tolerant ingestion pipeline for AI research papers, startups, products, news and jobs — retries, worker pools, idempotent persistence, schema validation, explicit failure accounting, multi-provider LLM orchestration with fallback and entity resolution.',
    tech: ['Python', 'Async', 'PostgreSQL', 'Docker', 'LLM orchestration'],
    repo: 'https://github.com/rajaryan1111/graphone-intelligence-pipeline',
  },
  {
    name: 'AI Orbit Tools Ingestion',
    description:
      'Python ingestion and curation pipeline for AI-tool metadata: staged discovery, normalisation, deduplication invariants, URL verification, rubric scoring, resumable checkpoints and deterministic local fixtures for tests.',
    tech: ['Python', 'Data pipelines', 'Provenance', 'Testing'],
    repo: 'https://github.com/rajaryan1111/ai-orbit-tools-ingestion',
  },
  {
    name: 'Deep Learning Signal Modulation Lab',
    description:
      'Interactive lab for AM / FM / PM modulation, demodulation and signal analysis with a neural classifier over engineered signal features — built alongside the ECE curriculum.',
    tech: ['TypeScript', 'React', 'Signal processing', 'Neural networks'],
    repo: 'https://github.com/rajaryan1111/deep-learning-am-fm-modulation',
    demo: 'https://a1creator284-deep-learning-am-fm-mo.vercel.app',
  },
]

const vendorproofProject = {
  id: 'vendorproof-ai',
  name: 'VendorProof AI',
  subtitle: 'Evidence-first supplier document verification',
  category: 'Full-stack · Document AI',
  year: '2026',
  featured: true,
  flagship: false,
  badge: 'Personal project · Validation release',
  tagline:
    'A supplier-verification workflow that extracts document data, checks it against defined requirements, and keeps evidence and human review in the loop.',
  problem:
    'Supplier onboarding often means manually reading certificates, registrations, and compliance documents, then copying facts into spreadsheets. That makes review slow and makes it difficult to trace why a supplier passed or failed a check.',
  solution:
    'VendorProof AI combines document intake, OCR/PDF extraction, deterministic verification rules, evidence provenance, and human review. It is designed to make each result traceable instead of presenting an opaque AI verdict.',
  approach: [
    'Accept supplier documents and extract structured fields from PDFs and images using OCR and document parsing.',
    'Normalize extracted values and run deterministic checks against configured requirements.',
    'Attach evidence provenance to findings so reviewers can trace each result to its source.',
    'Support human review and correction workflows rather than treating automated output as a final compliance decision.',
    'Use FastAPI, PostgreSQL, SQLAlchemy, and Alembic for the backend data and API layer.',
  ],
  architecture: [
    'Supplier documents — PDF and image intake',
    'OCR and PDF text extraction',
    'Structured field normalization',
    'Deterministic verification rules',
    'Evidence provenance and review queue',
    'Human corrections and audit trail',
  ],
  features: [
    'OCR and PDF text extraction pipeline',
    'Rule-based supplier verification',
    'Evidence-linked findings and provenance',
    'Human review and correction workflow',
    'Role-based access and tenant isolation in the application design',
    'React + TypeScript frontend with FastAPI backend',
  ],
  tech: ['React', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'OCR'],
  challenges: [
    'Keeping extracted text separate from verified facts so OCR errors do not silently become compliance decisions.',
    'Making every finding traceable to the document evidence that produced it.',
    'Designing review and correction paths for uncertain or conflicting information.',
  ],
  engineeringNotes: [
    'The local and CI readiness work has passed for the current implementation, including the core document and verification workflow.',
    'The frontend is publicly deployed. The hosted supplier-intake workflow remains restricted because the deployed Render parser-isolation probe did not pass.',
    'The current public release is suitable for personal validation; production supplier onboarding and real-world compliance use are not yet verified.',
  ],
  contribution: [
    'Built the full-stack workflow across document extraction, deterministic verification, evidence provenance, and human review.',
    'Implemented the React/TypeScript frontend and FastAPI/PostgreSQL backend foundations.',
    'Worked through deployment diagnostics and kept hosted intake closed when the parser-isolation check failed.',
  ],
  disclaimer:
    'Personal validation release. Frontend is live, but hosted supplier intake is currently restricted; production readiness and real-world verification are not claimed.',
  repo: 'https://github.com/rajaryan1111/vendorproof-ai',
  demo: 'https://vendorproof-ai-frontend.vercel.app/',
  image: null,
  imageAlt: null,
}

export { vendorproofProject }

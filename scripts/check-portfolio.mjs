import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const projectsPath = join(root, 'src/data/projects.js')
const projectCardsPath = join(root, 'src/components/Projects.jsx')
const resumePath = join(root, 'public/resume.html')
const htmlPath = join(root, 'index.html')

const projects = readFileSync(projectsPath, 'utf8')
const cards = readFileSync(projectCardsPath, 'utf8')
const resume = readFileSync(resumePath, 'utf8')
const html = readFileSync(htmlPath, 'utf8')
const failures = []

function check(condition, message) {
  if (!condition) failures.push(message)
}

const ids = [...projects.matchAll(/\bid:\s*'([^']+)'/g)].map((match) => match[1])
check(ids.length > 0, 'No project IDs found in src/data/projects.js')
check(new Set(ids).size === ids.length, 'Project IDs must be unique')
check(!projects.includes('ai-resume-review') && !cards.includes('ai-resume-review'), 'Removed AI Resume Review is still referenced')

const repoLinks = [...projects.matchAll(/\brepo:\s*'(https?:\/\/[^']+)'/g)].map((match) => match[1])
check(repoLinks.length > 0, 'No project repository links found')
check(repoLinks.every((url) => url.startsWith('https://github.com/')), 'A project repository link is not a GitHub HTTPS URL')

const localAssets = [...projects.matchAll(/\b(?:image|src):\s*'(\/[^']+)'/g)].map((match) => match[1])
for (const asset of new Set(localAssets)) {
  check(existsSync(join(root, 'public', asset.slice(1))), `Missing referenced public asset: ${asset}`)
}

check(
  /id:\s*'h2s-dosimeter'[\s\S]*?disclaimer:\s*'[^']*synthetic evaluation data[^']*not safety-certified[^']*'/i.test(projects),
  'H2S project must prominently disclose synthetic evaluation data and lack of safety certification',
)
check(
  /synthetic-data results only[\s\S]*?not safety-certified/i.test(resume),
  'Resume must disclose that H2S metrics are synthetic-data results and the prototype is not safety-certified',
)
check(/name="theme-color"\s+content="#000000"/i.test(html), 'Browser theme color should match the black portfolio theme')
check(cards.includes('{project.disclaimer && <p className="pcard__note">'), 'Project cards should show limitations/disclaimers where supplied')

if (failures.length) {
  console.error('Portfolio checks failed:')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exitCode = 1
} else {
  console.log(`Portfolio checks passed: ${ids.length} unique projects, ${new Set(localAssets).size} local assets, ${repoLinks.length} repository links, safety caveats, and theme metadata.`)
}

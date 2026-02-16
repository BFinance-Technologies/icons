const fs = require("fs")
const path = require("path")

const iconsDir = path.resolve(__dirname, "../src/icons")
const indexPath = path.resolve(__dirname, "../src/index.ts")

function toPosixPath(p) {
  return p.split(path.sep).join("/")
}

function walkTsxFiles(dirAbs) {
  const entries = fs.readdirSync(dirAbs, { withFileTypes: true })
  const out = []

  for (const entry of entries) {
    const abs = path.join(dirAbs, entry.name)
    if (entry.isDirectory()) {
      out.push(...walkTsxFiles(abs))
      continue
    }
    if (entry.isFile() && entry.name.endsWith(".tsx")) {
      out.push(abs)
    }
  }

  return out
}

function numberToWords0to99(n) {
  const ones = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ]
  const teens = [
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ]
  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ]

  if (n < 0 || n > 99 || !Number.isInteger(n)) return null
  if (n < 10) return ones[n]
  if (n < 20) return teens[n - 10]
  const t = Math.floor(n / 10)
  const o = n % 10
  return tens[t] + (o === 0 ? "" : ones[o])
}

function pascalCaseFromSegments(segments) {
  return segments
    .filter(Boolean)
    .map(seg =>
      seg
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .replace(/[^a-zA-Z0-9]+/g, " ")
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .map(w => w[0].toUpperCase() + w.slice(1))
        .join("")
    )
    .join("")
}

function toSafeExportName(fileBaseName) {
  // Normalize and strip diacritics to avoid odd identifiers like "Uzbekistán"
  let s = fileBaseName.normalize("NFD").replace(/\p{Diacritic}/gu, "")

  // Replace non-identifier-ish characters with spaces, then PascalCase
  s = s
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join("")

  if (!s) return "Icon"

  // If it starts with digits, convert the leading number (0-99) to words.
  const m = s.match(/^(\d{1,2})(.*)$/)
  if (m) {
    const n = Number(m[1])
    const words = numberToWords0to99(n)
    if (words) return words + (m[2] || "")
    return "Icon" + s
  }

  // If it still doesn't start with a valid identifier start, prefix.
  if (!/^[A-Za-z_$]/.test(s)) return "Icon" + s

  return s
}

function parseExistingIndex(indexText) {
  const lines = indexText.split(/\r?\n/)
  const exports = []
  const byFrom = new Map()
  const byName = new Map()

  for (const line of lines) {
    const m = line.match(
      /^export\s+\{\s*default\s+as\s+([A-Za-z0-9_$]+)\s*\}\s+from\s+["'](.+?)["']\s*$/
    )
    if (!m) continue
    const name = m[1]
    const from = m[2]
    const entry = { raw: line, name, from }
    exports.push(entry)
    byFrom.set(from, entry)
    if (!byName.has(name)) byName.set(name, [])
    byName.get(name).push(entry)
  }

  return { exports, byFrom, byName }
}

const iconFilesAbs = walkTsxFiles(iconsDir)
const allFromPaths = iconFilesAbs.map(abs => {
  const rel = path.relative(iconsDir, abs).replace(/\.tsx$/, "")
  return `./icons/${toPosixPath(rel)}`
})

const existingText = fs.existsSync(indexPath)
  ? fs.readFileSync(indexPath, "utf8")
  : ""
const existing = parseExistingIndex(existingText)

const availableFromSet = new Set(allFromPaths)
const keptExisting = existing.exports.filter(e => availableFromSet.has(e.from))

const usedNames = new Set(keptExisting.map(e => e.name))
const usedFrom = new Set(keptExisting.map(e => e.from))

function pickUniqueName(preferred, fallbacks) {
  if (!usedNames.has(preferred)) return preferred
  for (const cand of fallbacks) {
    if (!usedNames.has(cand)) return cand
  }
  let i = 2
  while (usedNames.has(`${preferred}${i}`)) i++
  return `${preferred}${i}`
}

const newExports = []

for (const abs of iconFilesAbs) {
  const relNoExt = path.relative(iconsDir, abs).replace(/\.tsx$/, "")
  const from = `./icons/${toPosixPath(relNoExt)}`
  if (usedFrom.has(from)) continue

  const base = path.basename(relNoExt)
  const preferred = toSafeExportName(base)
  const segments = toPosixPath(relNoExt).split("/")
  const dirSegments = segments.slice(0, -1)

  // Disambiguate by prefixing with folders (closest first),
  // e.g. flags/Afghanistan -> FlagsAfghanistan if needed.
  const fallbackPrefixes = []
  for (let i = dirSegments.length; i >= 1; i--) {
    const prefix = pascalCaseFromSegments(dirSegments.slice(dirSegments.length - i))
    if (prefix) fallbackPrefixes.push(prefix + preferred)
  }

  const name = pickUniqueName(preferred, fallbackPrefixes)
  usedNames.add(name)
  usedFrom.add(from)
  newExports.push({ name, from })
}

newExports.sort((a, b) => a.name.localeCompare(b.name))

const exportsList = [
  ...keptExisting.map(e => e.raw),
  ...newExports.map(e => `export { default as ${e.name} } from "${e.from}"`),
]
  .filter(Boolean)
  .join("\n")
  .trimEnd()
  .concat("\n")

fs.writeFileSync(
  indexPath,
  exportsList
)

console.log("✅ index.ts generated")

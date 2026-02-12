const fs = require("fs")
const path = require("path")

const iconsDir = path.resolve(__dirname, "../src/icons")

const files = fs.readdirSync(iconsDir)

const exportsList = files
  .filter(file => file.endsWith(".tsx"))
  .map(file => {
    const name = file.replace(".tsx", "")
    return `export { default as ${name} } from "./icons/${name}"`
  })
  .join("\n")

fs.writeFileSync(
  path.resolve(__dirname, "../src/index.ts"),
  exportsList
)

console.log("✅ index.ts generated")

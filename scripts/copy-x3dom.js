// Copies the shared, patched x3dom build (../x3dom) into this site's public/
// folder, so `npm start` and `npm run build` serve it from %PUBLIC_URL%/x3dom/.
const fs = require("fs");
const path = require("path");

const from = path.join(__dirname, "..", "x3dom");
const to = path.join(process.cwd(), "public", "x3dom");

fs.mkdirSync(to, { recursive: true });
for (const file of ["x3dom.js", "x3dom.css"]) {
  fs.copyFileSync(path.join(from, file), path.join(to, file));
}

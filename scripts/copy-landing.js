// Copies the landing page (links to all six apps) to the top-level NASP
// folder, next to the NASP_* app builds, so the folder serves as one site.
const fs = require("fs");
const path = require("path");

fs.copyFileSync(
  path.join(__dirname, "..", "landing", "index.html"),
  path.join(__dirname, "..", "..", "index.html")
);

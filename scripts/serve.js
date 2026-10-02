// Serves the top-level NASP folder as one site: the landing page and the six
// built NASP_* apps. Everything else in that folder (source/ with its .git and
// node_modules, _original_builds/) is refused, so the repository is never
// exposed, even with --lan.
//
//   node scripts/serve.js          http://localhost:8080/, this machine only
//   node scripts/serve.js --lan    also reachable from other machines
//   PORT=9000 node scripts/serve.js
const os = require("os");
const path = require("path");
const httpServer = require("http-server");

const ROOT = path.join(__dirname, "..", "..");
const PORT = Number(process.env.PORT) || 8080;
const LAN = process.argv.includes("--lan");
const HOST = LAN ? "0.0.0.0" : "127.0.0.1";

// "/", "/index.html", or anything inside a NASP_<Forest> app folder.
const ALLOWED = /^\/(index\.html)?$|^\/NASP_[A-Za-z]+(\/|$)/;

function allowOnlySite(req, res) {
  let pathname = "";
  try {
    pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  } catch {
    // Malformed URL: leave pathname empty so it is refused below.
  }
  const hasHiddenPart = pathname.split(/[\\/]/).some((part) => part.startsWith("."));
  if (!ALLOWED.test(pathname) || hasHiddenPart) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
    return;
  }
  res.emit("next");
}

httpServer
  .createServer({ root: ROOT, cache: -1, showDir: "false", before: [allowOnlySite] })
  .listen(PORT, HOST, () => {
    console.log(`Serving ${ROOT} (Ctrl+C to stop)`);
    console.log(`  http://localhost:${PORT}/`);
    if (LAN) {
      for (const addrs of Object.values(os.networkInterfaces())) {
        for (const a of addrs) {
          if (a.family === "IPv4" && !a.internal) console.log(`  http://${a.address}:${PORT}/`);
        }
      }
    }
  });

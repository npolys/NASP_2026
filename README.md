# NASP Forestry Photosphere Viewers

Six small React web apps, one per USFS forest used in the Virginia Tech /
USDA NASP Forest Management exercises. Each app shows 360° photospheres of
the forest's sample plots in X3DOM, alongside the plot's tree data table, a
clickable site map, a video or overhead drone image, and downloadable
resources (aerial and topo maps, environmental and soil report).

All six apps are served together as one static site: a landing page plus one
folder per app. There is no back end or database.

## Quick start

```sh
cd source
npm install        # once; installs for all six apps
npm start          # builds all six apps, then serves them at http://localhost:8080/
```

`npm start` takes a couple of minutes because it builds all six apps first.
Press Ctrl+C to stop the server.

## Contents

The top-level `NASP` folder is the site. `source/` holds the code that
builds it.

```
NASP/
├── index.html            landing page linking to the six apps   (generated)
├── NASP_Argonne/         built app, served at /NASP_Argonne/      (generated)
├── NASP_Fishburn/        ...                                      (generated)
├── NASP_Jefferson/
├── NASP_Penobscot/
├── NASP_Reynolds/
├── NASP_Robinson/
├── _original_builds/     the 2023 builds this source was recovered from
└── source/               this repository
```

Don't edit the generated folders. Every build replaces them.

```
source/
├── README.md             this file
├── LICENSE               MIT (code only; see "License and credits")
├── X3DOM-CHANGES.md      what was changed in X3DOM 1.8.4-dev, and how to rebuild it
├── package.json          npm workspaces root: start, build and serve scripts
├── landing/index.html    the landing page, copied to ../index.html on build
├── x3dom/                patched X3DOM 1.8.4-dev shared by all apps (see below)
│   ├── x3dom.js, x3dom.css
│   ├── turntable-reverse-drag.patch
│   └── VERSION, LICENSE.md
├── scripts/
│   ├── serve.js          local web server for the site (npm run serve)
│   ├── copy-x3dom.js     copies x3dom/ into each app's public/ before start/build
│   └── copy-landing.js   copies landing/index.html to the top-level folder
├── NASP_Argonne/         one Create React App project per forest
├── NASP_Fishburn/
├── NASP_Jefferson/
├── NASP_Penobscot/
├── NASP_Reynolds/
└── NASP_Robinson/
```

Every app has the same layout:

```
NASP_<Forest>/
├── .env                  build output folder and dev-server host (no secrets; it is committed)
├── package.json
├── public/               index.html template, favicon, manifest
└── src/
    ├── App.js            page layout and shared state (current plot, view, mobile mode)
    ├── Data/
    │   ├── Data.js       ALL site content: plots, table data, images, videos, menus
    │   ├── images/       photospheres, one folder per plot
    │   └── resources-assets/   maps and the environmental/soil report PDF
    └── components/
        ├── X3D/          X3DOM scene: photosphere geometry (Plot.js) and viewer (X3D.js)
        ├── Table/        plot tree data table
        ├── SiteMap/      stand map with clickable plot markers (positions in SiteMap.css)
        ├── Header/       title bar, Resources menu, Mobile (gyroscope) toggle
        ├── Video/ or OverheadImage/
        └── Footer/
```

| App | URL path | Plots | Photosphere views | Below the viewer |
|---|---|---|---|---|
| NASP_Argonne | `/NASP_Argonne/` | 1–4 | center | YouTube videos + site map |
| NASP_Fishburn | `/NASP_Fishburn/` | 1–10 | center | YouTube videos + site map |
| NASP_Jefferson | `/NASP_Jefferson/` | 1–8 | center, N, E, S, W ("View Plot" menu) | YouTube videos + site map |
| NASP_Penobscot | `/NASP_Penobscot/` | 11, 13, 15, 41, 43 | center, N, E, S, W ("View Plot" menu) | overhead drone image + site map |
| NASP_Reynolds | `/NASP_Reynolds/` | 1–4 | center | YouTube videos + site map; overhead image under Resources |
| NASP_Robinson | `/NASP_Robinson/` | 1–8 | center | YouTube videos + site map |

To change a site's content, edit its `src/Data/Data.js` and the files it
imports. To add a plot, add its images under `src/Data/images/plotN/`, add an
entry to `Data` in `Data.js`, and add a marker in `SiteMap.js` and
`SiteMap.css`. If you add or rename an app, also update
`landing/index.html`.

## Requirements

- Node.js 18 or newer (tested with Node 22.16 and npm 10.9)

## Commands

Run these from `source/`.

| Command | What it does |
|---|---|
| `npm install` | Installs dependencies for all six apps (once, and after dependency changes). |
| `npm start` | `npm run build`, then `npm run serve`. |
| `npm run build` | Builds all six apps into the top-level `NASP_*` folders and copies the landing page to `NASP/index.html`. |
| `npm run build -w NASP_Argonne` | Builds one app into its top-level folder. |
| `npm run serve` | Serves the top-level `NASP` folder at http://localhost:8080/ without rebuilding. |
| `npm run serve:lan` | Same as `serve`, but other machines on the network can reach it too. |
| `npm start -w NASP_Argonne` | Runs one app on its own development server (http://localhost:3000) with live reload, for editing. |

The build prints lint warnings (unused variables, hook dependencies) that
come from the original code. They don't affect the result.

`npm run serve` runs `scripts/serve.js`, a small
[http-server](https://github.com/http-party/http-server) wrapper:
- It serves only `/`, `/index.html` and the six `NASP_*` app folders.
  Everything else in the top-level folder returns 404: `source/` (including
  `.git` and `node_modules`), `_original_builds/`, and any hidden file or
  `..` path.
- Caching and directory listings are off.
- It listens on `127.0.0.1` only. `npm run serve:lan` listens on every
  network interface so other machines can reach it, with the same
  restrictions.
- Set `PORT` to change the port, for example `PORT=9000 npm run serve`, or
  `$env:PORT=9000; npm run serve` in PowerShell.

## Deploying to a web server

The site is plain static files. The apps are built with `"homepage": "."`,
so every asset path is relative and the site works from any URL path on any
server. No rewrite rules or server configuration are needed.

1. Run `npm run build` in `source/`.
2. Copy `index.html` and the six `NASP_*` folders from the top-level `NASP`
   folder to one directory on the server. Don't copy `source/` or
   `_original_builds/`. For example:

   ```sh
   cd NASP
   rsync -a index.html NASP_* user@server:/var/www/html/nasp/
   ```

   or on Windows:

   ```powershell
   cd NASP
   Copy-Item -Recurse index.html, NASP_* \\server\www\nasp\
   ```

3. Browse to `https://server/nasp/`. Each app is at
   `https://server/nasp/NASP_<Forest>/`. Keep the trailing slash on app
   URLs. Apache, nginx and IIS add it automatically when it's missing.
   Without it, the relative paths resolve one level too high.

Notes:

- Serve over HTTPS. iOS only lets a page read the gyroscope (the Mobile
  button) from a secure origin.
- Don't open `index.html` straight from disk (`file://`). Serve it over HTTP,
  even locally.
- Files under each app's `static/` have content hashes in their names and
  can be cached indefinitely. `index.html` files and `x3dom/` should not be
  cached long-term.
- Builds include source maps (`*.map`). That's how this source was recovered,
  so keep them unless you need to hide the code.

## X3DOM and "Reverse Turntable" navigation

The viewer uses X3DOM's `TURNTABLE` navigation with one change: drag
rotation (mouse and one-finger touch) is reversed and scaled by
`NavigationInfo.speed` (0.2 in these apps). User studies showed that non-3D
users think of dragging the sphere with their hand, not steering a camera.
This "Reverse Turntable" is described in
[npolys/X3DSpheres](https://github.com/npolys/X3DSpheres).

`x3dom/x3dom.js` is X3DOM **1.8.4-dev**, built from
[x3dom/x3dom](https://github.com/x3dom/x3dom) `master` at commit
`1ababa215711e56a6da2698eee19e320d6c1b9c7` (2026-04-22, build 7525), with
`x3dom/turntable-reverse-drag.patch` applied. X3DOM has no official 1.8.4
release yet. [X3DOM-CHANGES.md](X3DOM-CHANGES.md) has the exact change, its
history, test results and rebuild steps.

The apps load X3DOM from the same server, not a CDN.
`scripts/copy-x3dom.js` runs before each app's start and build. It copies
`x3dom/x3dom.js` and `x3dom.css` into the app's `public/x3dom/`, which then
lands in the built app as `NASP_<Forest>/x3dom/`. `public/x3dom/` is
generated and git-ignored. After updating X3DOM, rebuild.

## How this source was recovered

The original React source was not available. This tree was rebuilt in
October 2026 from the production builds now kept in
`../_original_builds/NASP_*`. Those builds only work under
`/~parthranawat/NASP_<Forest>/` (Jefferson: `NASP_Jefferson_2`), so they
would not load anywhere else.

The builds shipped with source maps, which contain the original source text.
Apart from the files listed below, every `.js` and `.css` file under `src/`
was extracted from those maps exactly. Every image and PDF was matched from
its hashed build filename back to the path that imports it.

Recreated, because they are not in a production build:

- `package.json` for each app. The versions are read from the bundles:
  React 18.2.0, react-router-dom 6.8.2, web-vitals 2.x, react-scripts 5.0.1.
- `public/index.html`, from the built HTML.
- `src/error-page.js`, a stand-in. `App.js` imports it but never renders it,
  so the original was left out of the bundle.

Changes from the original code:

1. `"homepage": "."` instead of `/~parthranawat/NASP_<Forest>`, so the apps
   run from any path.
2. X3DOM is the vendored, patched 1.8.4-dev described above. The originals
   loaded `nasp_x3dom` from unpkg: a 1.8.2-dev fork with the same Turntable
   change, which also slowed Examine-mode rotation by `speed`. See
   [X3DOM-CHANGES.md](X3DOM-CHANGES.md).
3. `components/X3D/X3D.js` (all apps except Jefferson) now follows the
   gyroscope only while Mobile is on, and ignores the empty orientation event
   that desktop browsers send. The original code listened while Mobile was
   *off*. Older X3DOM versions ignored the resulting viewpoint change, but
   1.8.4-dev applies it, so the page opened looking straight down. Jefferson
   already had a working version of this logic.
4. `NASP_Fishburn/src/components/Header/Header.js` no longer imports
   `directionDropdownItems`. It was never used, doesn't exist in that site's
   `Data.js`, and current webpack treats the missing export as an error.
5. New for the combined site: the landing page, the `.env` files that point
   each build at the top-level folder, and the root `start`, `build` and
   `serve` scripts.
6. react-router-dom was removed. The apps never routed; they only used
   `<Link>` to render links:
   - The Resources menu's file links (report, maps, overhead image) are now
     plain `<a href>`. With relative asset paths, `<Link>` resolved them to
     the server root and they returned 404.
   - The click-only menu items (Table, and View Plot's directions) are now
     `<button type="button">`. `DropdownItems.css` resets the button look,
     and `Header.css` targets `.nav-item > button` so the header's styles
     don't reach them. They look exactly as before.
   - The `<BrowserRouter>` wrapper in `Header.js` and the unused `useParams`
     import in `App.js` are gone.
7. `X3D.js` checks `window.DeviceMotionEvent` instead of the bare global.
   Browsers hide that object on plain-HTTP pages served from another
   machine. The bare reference threw `ReferenceError` there and blanked the
   page: Jefferson on load, the others when Mobile was clicked. The original
   code had the same bug.

## Security

Reviewed in October 2026 before publishing this repository.

**The site** is static files with no back end, no login, no forms and no
storage. Every URL the apps use (images, PDFs, YouTube embeds) is fixed at
build time in `Data.js`. Nothing comes from the page URL or user input, and
nothing is written into the page as raw HTML. Links that open in a new tab
use `rel="noopener noreferrer"`.

**Shipped code.** Each app's browser bundle contains only `react`,
`react-dom` and `scheduler`, plus the vendored X3DOM. None of them has a
known advisory. Third-party requests from the page go to YouTube (video
embeds) and Google Fonts (`Table.css`).

**Build tools.** `npm audit` reports about 30 advisories, all inside
`react-scripts` (Create React App 5): webpack-dev-server, postcss, svgo,
nth-check and others. They affect only the build and the single-app
development server, not the site. Create React App is no longer maintained,
so these won't be fixed upstream. Moving the apps to Vite would clear them.
Until then:
- The single-app dev server (`npm start -w`) listens on `127.0.0.1` only,
  set by `HOST` in each `.env`.
- Don't browse untrusted websites while it is running. Several of its
  advisories involve a malicious page reading from it.

**Local server.** `scripts/serve.js` serves only the site, never `source/`,
`.git`, `_original_builds/` or the folders above `NASP`. It refuses hidden
files and `..` paths, including encoded ones.

**Repository contents.** No credentials, tokens or keys. The photos have no
GPS or camera-serial metadata, only capture dates and editing-software
names. The six soil-report PDFs list "Edwards, Johnathan" as author in
their document properties.

**Deploying.** Serve over HTTPS. If your server lets you add headers,
`X-Content-Type-Options: nosniff` is safe for this site. Test any
Content-Security-Policy before enabling it: X3DOM, the YouTube iframes and
Google Fonts all need to be allowed.

## Known issues

- On iOS, the gyroscope permission request isn't made directly from the
  Mobile button's click, so iOS may not show the prompt. The original code
  behaved the same way.

## License and credits

The code in this repository is released under the [MIT License](LICENSE).

Not covered by that license:
- **X3DOM** (`x3dom/`) is dual-licensed MIT/GPL by the X3DOM authors. See
  [`x3dom/LICENSE.md`](x3dom/LICENSE.md). The Reverse Turntable change comes
  from [npolys/X3DSpheres](https://github.com/npolys/X3DSpheres) (MIT).
- **Photospheres, maps, overhead images and soil reports** (everything under
  each app's `src/Data/`) are courtesy of Virginia Tech Prof. John Munsell
  and the USDA NASP Forest Management program. Ask them before reusing
  these outside this project.
- **The Virginia Tech logo** (`components/Footer/`) is a trademark of
  Virginia Tech.

The original React apps were written by Parth Ranawat for the Virginia Tech
NASP project, building on Nicholas Polys's X3D photosphere work.

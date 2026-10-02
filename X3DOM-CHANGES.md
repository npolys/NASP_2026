# X3DOM 1.8.4-dev changes for NASP ("Reverse Turntable")

The NASP photosphere viewers use their own build of X3DOM, kept in
[`x3dom/`](x3dom/). It is upstream X3DOM 1.8.4-dev with one change: dragging
in `TURNTABLE` navigation is reversed and scaled by `NavigationInfo.speed`.
This document says exactly what was changed, why, how it was tested, and how
to rebuild it.

## Base version

| | |
|---|---|
| Upstream | [x3dom/x3dom](https://github.com/x3dom/x3dom), branch `master` |
| Commit | `1ababa215711e56a6da2698eee19e320d6c1b9c7` (2026-04-22, "Update Changelog") |
| Version / build | 1.8.4-dev, build 7525 |
| Bundle | `x3dom.js`, the minified BASIC profile (not `x3dom-full.js` or physics) |

X3DOM has no 1.8.4 release. The latest release is 1.8.3 (2023-08-01). The
"dev" download on x3dom.org is a 1.8.4-dev build from 2023-08-01 (build
7483), much older than this one.

## The change

One file changed: `src/nodes/Navigation/modes/TurntableNavigation.js`. The
full diff is [`x3dom/turntable-reverse-drag.patch`](x3dom/turntable-reverse-drag.patch).

In both drag handlers, the rotation angles are multiplied by
`speed * -1.0`.

**`onDrag`**: mouse drag with the left button, and one-finger touch drag
(see [Touch input](#touch-input)):

```diff
     if ( buttonState & 1 ) //left
     {
-        alpha = ( dy * 2 * Math.PI ) / view._height;
-        beta = ( dx * 2 * Math.PI ) / view._width;
+        alpha = ( dy * 2 * Math.PI ) / view._height * navi._vf.speed * -1.0;
+        beta = ( dx * 2 * Math.PI ) / view._width * navi._vf.speed * -1.0;

         this.rotate( view, alpha, beta );
     }
```

**`onTouchDrag`**, the one-finger branch:

```diff
-            var alpha = ( dy * 2 * Math.PI ) / view._height;
-            var beta = ( dx * 2 * Math.PI ) / view._width;
+            var alpha = ( dy * 2 * Math.PI ) / view._height * this.navi._vf.speed * -1.0;
+            var beta = ( dx * 2 * Math.PI ) / view._width * this.navi._vf.speed * -1.0;
```

`onTouchDrag` has no local `navi` variable, so it reads `this.navi`, the same
`NavigationInfo` that `onDrag` uses.

### Effect

- **Reversed.** Dragging right turns the view left, as if grabbing the
  sphere and pulling it. Stock X3DOM turns the camera the way you drag.
- **Scaled by `speed`.** In stock X3DOM, `speed` only affects turntable zoom
  and pan distances. With this change it also sets how fast a drag rotates.
  The NASP scenes use `speed="0.2"`, so a drag turns the view one fifth as
  far as stock. A scene with `speed="1"` (the default) is reversed but not
  slowed.

Everything else is unchanged:
- right-drag zoom and middle-drag pan;
- two-finger pinch zoom and pan;
- double-click;
- keyboard navigation;
- every other navigation type (Examine, Walk, Fly, and so on).

`x3dom.css` is the unmodified upstream file.

### Why

User studies of the photosphere and videosphere viewers found that people
who aren't 3D professionals don't think of the mouse as steering a camera.
They imagine grabbing the environment with their hand and dragging it. The
change, called "Reverse Turntable", keeps `TURNTABLE`'s heading and pitch
with no roll, and negates the mouse-to-rotation mapping to fit that mental
model. See [npolys/X3DSpheres](https://github.com/npolys/X3DSpheres) and:

- Polys, N. F., et al. "Extensible experiences: fusality for stream and
  field." *Proceedings of Web3D 2016.*
- Polys, N. F., et al. "X3D field trips for remote learning." *Proceedings
  of Web3D 2021.*

### Touch input

In `TURNTABLE` mode, X3DOM sends one-finger touch drags to **`onDrag`**, not
`onTouchDrag`:
- At touchstart, `src/X3DCanvas.js` sets `examineNavType = 2` for
  `turntable`.
- On touchmove, it calls `doc.onDrag( …, 1 )`, the same path as a
  left-button mouse drag.

`onTouchDrag` is only reached in `examine` mode, which uses a different
navigation class. So the `onDrag` change alone reverses both mouse and touch.
The `onTouchDrag` change has no effect in current X3DOM. It's there so touch
stays consistent if a later X3DOM version routes turntable touches to
`onTouchDrag`.

## History of this change

| Build | Based on | Turntable drag | Examine drag | Used by |
|---|---|---|---|---|
| `nasp_x3dom@1.8.2-dev` on npm (March 2023) | X3DOM 1.8.2-dev, December 2020 | `onDrag` × speed × −1 | × speed (slowed, not reversed) | The original NASP builds, loaded from unpkg |
| X3DSpheres "live mod" | X3DOM 1.8.3 release | `onDrag` × speed × −1 | unchanged | [X3DSpheres](https://github.com/npolys/X3DSpheres), [metagrid1](http://metagrid1.sv.vt.edu/~npolys/Web3D/Tools_2025/X3D_Spheres/x3dom/) |
| **This build** | X3DOM 1.8.4-dev, `master` 2026-04-22 | `onDrag` and `onTouchDrag` × speed × −1 | unchanged | These NASP apps |

`nasp_x3dom@1.8.3-dev`, also on npm, has no navigation change. The package's
`latest` tag points to 1.8.2-dev.

The Examine-mode slowdown in `nasp_x3dom` was not carried forward. The NASP
scenes start in `TURNTABLE`. Users can still switch to Examine with X3DOM's
`e` key, and there they now get stock X3DOM rotation speed.

## Other differences from 1.8.3 that affect the apps

Between 1.8.3 and this build, X3DOM started applying changes to the bound
Viewpoint's `orientation` field immediately. 1.8.3 and the 2023 1.8.4-dev
ignored them until the viewpoint was bound again. This was seen in testing;
the upstream commit wasn't identified.

That exposed a bug in five of the NASP apps. They listened to the gyroscope
while the Mobile button was *off*, and desktop browsers send one empty
orientation event, so the page opened looking straight down. `X3D.js` was
fixed to listen only while Mobile is on (see [README.md](README.md)). Any
other page that sets `orientation` on a bound Viewpoint will now see the view
move.

## Testing

Tested in headless Microsoft Edge (SwiftShader WebGL) against the built
NASP_Penobscot app. Each test dragged 100 px to the right and measured the
change in camera yaw:

| Input | Stock X3DOM 1.8.3 | This build | Ratio |
|---|---|---|---|
| Mouse, left button | +0.5035 rad | −0.1007 rad | −0.200 |
| One-finger touch | +0.5035 rad | −0.1007 rad | −0.200 |

A ratio of −0.2 is exactly `speed × −1` for `speed="0.2"`. Wrapping both
handlers showed that the touch drag went through `onDrag` (10 calls) and
never reached `onTouchDrag`. All six apps loaded with no errors or failed
requests and reported `x3dom.about.version` as 1.8.4-dev, build 7525.

## Rebuilding

```sh
git -c core.longpaths=true clone https://github.com/x3dom/x3dom.git
cd x3dom
git checkout 1ababa215711e56a6da2698eee19e320d6c1b9c7   # or stay on master for newer code
git apply /path/to/source/x3dom/turntable-reverse-drag.patch
npm install
npm run build
cp dist/x3dom.js dist/x3dom.css dist/VERSION /path/to/source/x3dom/
```

Then rebuild the apps (`npm run build` in `source/`).

- `core.longpaths=true` is needed on Windows. Some test fixtures have very
  long paths.
- Use a full clone, not `--depth 1`. The build number in the X3DOM header is
  `git rev-list --count HEAD`.
- If the patch doesn't apply to newer upstream code, make the same edit by
  hand. Multiply `alpha` and `beta` by `speed * -1.0` in both functions.
- Check the result with
  `grep -o "_vf.speed\*-1" dist/x3dom.js | wc -l`, which should print `4`.

## License

X3DOM is dual-licensed under MIT and GPL. See
[`x3dom/LICENSE.md`](x3dom/LICENSE.md). The X3DSpheres changes are
MIT-licensed.

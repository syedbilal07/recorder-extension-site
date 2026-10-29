# Reframe's website

Static pages, no build step and no external requests:

- `index.html` (+ `landing.css`): the landing page.
- `privacy.html`: the privacy policy (its URL is required by the Chrome Web Store).
- `help.html`, `practice.html`: help, and the practice page linked from the welcome screen.
- `style.css`: shared styles, header and footer. `site.js`: the store button and reduced-motion handling.
- `media/`: the demo clip, its poster, the editor image and the icon. Re-record them from the real extension with
  `npm run build`, then `xvfb-run -a -s "-screen 0 1920x1080x24" node scripts/site-media.mjs`.

**Publish** with GitHub Pages: create a public repository named `recorder-extension-site`, copy this folder's files to
its root, then Settings → Pages → Deploy from branch → `main` / root. The extension expects
`https://syedbilal07.github.io/recorder-extension-site/` (`src/core/site.ts`). Later, a custom domain can point at
the same Pages site, or these files can be uploaded as they are to any web host (Hostinger included).

**Once the store listing is live**, paste its URL into `STORE_URL` in `site.js`: every "Coming soon" button becomes
"Add to Chrome – it's free" and links there.

The support address in `privacy.html`, `help.html` and the footers is info@koderskube.com; change it there and in
`src/core/brand.ts` together.

`tests/e2e/site.spec.ts` checks every page with axe (light and dark), at phone width, and for broken links.

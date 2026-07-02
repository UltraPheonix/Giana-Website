<<<<<<< HEAD
This is a website for Giana's singing 
=======
# Giana Ribeiro — Vocalist Website

A one-page portfolio and booking site for Giana Ribeiro, a Boston-area vocalist
(jazz, classical, liturgical, and pop). Built with plain HTML, CSS, and
JavaScript — no build step or dependencies.

## Files

- `index.html` — page structure and content.
- `styles.css` — layout, colors, typography, and responsiveness.
- `script.js` — mobile menu, footer year, and scroll reveal animations.
- `Images/` — the hero portrait and the performance photo used on the intro card.
- `videos/` — performance clips (`.mp4`) plus their poster thumbnails (`.jpg`),
  grouped by genre: `Jazz1–3`, `Contemp1–2`, `Liturgical1`.

## Sections

1. **Intro banner** — full-screen portrait with her name.
2. **About** — short bio and the two call-to-action buttons.
3. **Demonstration** — performance videos grouped by genre (Jazz, Contemporary,
   Classical / Liturgical).
4. **Book & Contact** — direct email and phone links.

## Editing content

- **Bio / copy:** edit the text directly in `index.html`.
- **Photos:** replace the files in `Images/` (keep the same names, or update the
  paths in `index.html` and `styles.css`). Filenames are case-sensitive once
  hosted.
- **Videos:** drop a compressed `.mp4` into `videos/`, add a matching poster
  `.jpg`, and copy one of the `<figure class="video-card">` blocks in the
  relevant genre panel. Keep videos small and use `preload="none"` so the page
  loads fast.
- **Contact info:** update the `mailto:` and `tel:` links in the Book & Contact
  section.

## Publishing

It's a static site, so it can be hosted anywhere (GitHub Pages, Netlify, etc.).
Upload the folder as-is; `index.html` is the entry point.
>>>>>>> 5f131f5 (Website)

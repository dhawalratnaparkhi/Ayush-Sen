# Ayush Sen — Portfolio (Static)

Static portfolio built with HTML/CSS/JS. Place assets in `assets/` and push to GitHub.

## Quick start
1. Put `index.html`, `css/styles.css`, and `js/script.js` into a repo (structure in project root).
2. Add your headshot: `assets/headshot.jpg` (use the uploaded headshot image).
3. Add your resume PDF to `assets/Profile.pdf`. (I used the uploaded resume to prefill content.) 
4. Optional: update contact email in `index.html` (search for `ayush@example.com`).
5. Deploy:
   - GitHub Pages: push `main` branch, enable Pages from the repo settings (serve from root).
   - Vercel / Netlify: drag & drop or link the repo.

## Contact form setup (Formspree - suggested)
1. Go to https://formspree.io and create a free form. Copy the form ID (looks like `f/xxxxx`).
2. Replace `action="https://formspree.io/f/{your_form_id}"` in the `form` tag inside `index.html`.
3. Formspree will email form submissions to your address.

## Editing content
- Edit `index.html` directly to update sections and projects.
- Replace `assets/headshot.jpg` with a new image (keep the filename).
- For a custom OG image create `og.png` and add metadata in `<head>`.

## Notes
- Project screenshots were not added due to company policy; add images in the `#projects` section when cleared.
- No cookies or analytics included by default. To add analytics, insert tracking snippet in `index.html`.

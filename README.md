# Modern Personal Portfolio

A light, responsive finance student portfolio built with React, Vite, and Tailwind CSS. It includes placeholder content for a hero/about area, education, experience, volunteering, certifications, resume link, contact section, and social links.

## Getting Started

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Customize

- Update placeholder profile data, social links, education, experience, volunteering, and certifications in `src/App.jsx`.
- Replace `public/resume.html` with your real resume page, or change `resumeHref` in `src/App.jsx` to point to a PDF.
- Update the page title and description in `index.html`.

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Push the project to a GitHub repository.
2. In GitHub, open **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to the `main` branch, or run the workflow manually from the **Actions** tab.

The Vite build uses a relative production base path, so it works on GitHub Pages project sites without needing the repository name in the config.

## Static Asset Notes

- `npm run build` outputs a static site to `dist`.
- Built asset URLs are relative, such as `./assets/...`, so they work from a GitHub Pages subpath.
- Files in `public` are copied directly to `dist`, including `resume.html` and `.nojekyll`.
- There is no backend, API server, database, or runtime asset pipeline required.

# Abhishek Singh - AI & Data Architecture Portfolio

This is a ready-to-use React + Vite portfolio website designed for a GitHub Pages profile site.

## Website positioning

**AI Solution Architect | Data Platform Architect | Enterprise Solution Designer**

The site highlights:

- AI and data architecture experience
- Enterprise solution design
- Cloud and integration platforms
- Architecture case studies
- Business impact and measurable outcomes
- CMS Collection Management System migration
- Revenue assurance, fraud, bad debt and sales-to-contract automation

## Local setup

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Build

```bash
npm run build
```

## GitHub Pages deployment

Create a public GitHub repository named:

```text
abhiku28.github.io
```

Then push this project:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/abhiksingh28/abhiksingh28.github.io.git
git push -u origin main
```

In GitHub:

```text
Repository → Settings → Pages → Build and deployment → Source → GitHub Actions
```

The deployment workflow is already included at:

```text
.github/workflows/deploy.yml
```

Once the workflow succeeds, the website will be available at:

```text
https://abhiksingh28.github.io
```

## Customisation

Update your content in:

```text
src/data/profile.ts
```

Update design styles in:

```text
src/index.css
```

Update layout/sections in:

```text
src/App.tsx
```

## Notes

- Replace LinkedIn and portfolio placeholder links in `src/data/profile.ts`.
- If you deploy to a project repository instead of `abhiksingh28.github.io`, update `base` in `vite.config.ts`.

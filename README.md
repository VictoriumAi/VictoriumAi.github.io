# Victorium Solutions Landing Page

## Edit Text Directly (Fastest)

Main landing content is now centralized in one file:

- `src/content/landing-content.json`

This lets you remove or rewrite unwanted details without touching layout code.

Main page layout component:

- `src/pages/Index.tsx`

SEO/meta tags:

- `index.html`

## Visual Editing (Implemented: Decap CMS)

Admin panel path:

- `/admin`

Config and schema:

- `public/admin/config.yml`

Admin app entry:

- `public/admin/index.html`

### Local CMS editing flow

1. Start Vite dev server.
2. In a second terminal run: `npx decap-server`.
3. Open `http://localhost:8080/admin`.
4. Edit content in the UI and save.

### Production auth note

The CMS backend is configured for GitHub (`seo-victorium/seo-victorium.github.io`).
For production login on GitHub Pages, you need a GitHub OAuth flow for Decap.

## Clean Build Notes

This project no longer includes generator tagging integration.

- Vite config: `vite.config.ts`
- Dependency manifest: `package.json`

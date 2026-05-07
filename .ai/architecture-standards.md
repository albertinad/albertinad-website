# Architecture Standards

## Framework
- **Astro 6** with `output: 'static'` — the site is fully pre-rendered at build time
- **React 19** is used only for interactive components, hydrated via `client:load` in Astro pages
- **Panda CSS** provides the design token system and utility classes

## Directory Layout

```
src/
  components/         Astro (.astro) and React (.tsx) UI components
    <Component>/
      index.ts(x)     Component implementation
      __tests__/      Co-located tests
  layouts/
    BaseLayout.astro  Root HTML shell — SEO meta, fonts, structured data, theme
  pages/
    index.astro       Main page (composes components)
    404.astro         Not found page
  hooks/              React custom hooks (e.g. useParticles)
  utils/              Pure utility functions (no side effects)
  i18n/               i18n config; default and only locale is `en`
  index.css           Global CSS reset / base styles
public/               Static assets served as-is (favicons, webmanifest)
styled-system/        Auto-generated Panda CSS output — never edit manually
```

## Path Aliases
- `@/` → `src/` (configured in `tsconfig.json` and `astro.config.mjs`)
- `styled-system/` → generated Panda output (configured in Vite aliases)

## Hydration
- React components in Astro pages use `client:load` for immediate hydration
- Prefer Astro components (zero JS) unless client-side interactivity is required

## Build Pipeline
1. `panda codegen` — generates types and design tokens into `styled-system/`
2. `panda cssgen` — generates the CSS output
3. `astro build` — compiles and outputs static site to `dist/`

## Deployment
- **Cloudflare Workers** via Wrangler — serves `dist/` as static assets
- **GitHub Actions** CI/CD: `lint-test` → `deploy` (main only) → `purge-cache`
- Required secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_ZONE_ID`

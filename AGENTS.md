# AGENTS.md

## Before Making Changes

1. Run `npm run lint` and `npm run test` to baseline quality
2. Read the standards in `.ai/`

## Standards

- [Coding Standards](.ai/coding-standards.md)
- [Architecture Standards](.ai/architecture-standards.md)
- [Testing Standards](.ai/testing-standards.md)

## Skills

- `/quality-check` — Runs Prettier format, tests, and build; iterates fixing errors until all pass
- `/accessibility-check` — WCAG 2.1 AA audit via pa11y; suggests and optionally applies fixes

## Committing

Run `npm run lint && npm run test` before committing. Never commit `dist/`, `.astro/`, or `styled-system/`.

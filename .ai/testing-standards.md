# Testing Standards

## Framework
- **Jest 30** with `ts-jest` for TypeScript support
- **React Testing Library** (`@testing-library/react`) for component tests
- **jest-environment-jsdom** for DOM simulation
- **jest-dom** matchers (`@testing-library/jest-dom`) for readable assertions

## Coverage Threshold
80% enforced on **branches, functions, lines, and statements** — checked in CI via `npm run test:coverage`. New code must maintain or improve coverage.

## File Location
Co-locate tests with their source file:

```
src/components/Header/
  index.tsx
  __tests__/
    Header.test.tsx
    HeaderIconLink.test.tsx
```

Utility tests follow the same pattern:
```
src/utils/
  colors.ts
  __tests__/
    colors.test.ts
```

## What to Test
- **Components**: render output, user interactions, prop variations, edge cases
- **Hooks**: behavior under different state transitions
- **Utilities**: all branches of pure functions
- Test **behavior**, not implementation details — avoid testing internal state or method calls

## Running Tests
| Command | Purpose |
|---------|---------|
| `npm run test` | Full suite (passes with no tests) |
| `npm run test:coverage` | Suite + coverage threshold enforcement |

## Rules
- All tests must pass before committing
- Do not use `any` in test files
- Use `screen` queries from `@testing-library/react` (avoid direct DOM queries)
- Prefer `userEvent` over `fireEvent` for interaction testing

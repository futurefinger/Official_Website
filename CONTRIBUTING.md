# Contributing to Future Finger Technologies Official Website

Thank you for your interest in contributing to the corporate digital platform of **Future Finger Technologies**.

## Code of Conduct & Authenticity Standards
1. **Strict Authenticity:** Never commit fabricated statistics, fake client names, fictitious employee numbers, or unverified certificates.
2. **Type Safety:** All code must be written in TypeScript with strict mode enabled. `any` types are discouraged without explicit architect sign-off.
3. **Accessibility:** UI components must adhere to WCAG 2.1 AA contrast and keyboard accessibility standards.

## Development Workflow
1. Branch from `main`: `git checkout -b feature/your-feature-name`.
2. Ensure automated typechecking passes: `npx tsc --noEmit`.
3. Verify production compilation: `npm run build`.
4. Open a Pull Request targeting `main`. Automated GitHub Actions will run continuous integration checks.

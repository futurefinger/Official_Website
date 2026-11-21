# Deployment Guide — Future Finger Technologies Official Website

## Live Production Target
- **Live URL:** [https://futurefinger.github.io/Official_Website/](https://futurefinger.github.io/Official_Website/)
- **Hosting Engine:** GitHub Pages (Static Edge Distribution)
- **Deployment Mechanism:** GitHub Actions (`.github/workflows/deploy.yml`)

## Automated Deployment Protocol
The automated deployment workflow triggers automatically upon any commit or merge to the `main` branch.

1. **Trigger:** `git push origin main`
2. **Automated Verification:**
   - Installs dependencies via `npm ci`.
   - Runs `npm run build` with `VITE_BASE_PATH=/Official_Website/`.
   - Verifies TypeScript compiler without errors.
3. **Artifact Staging:**
   - Packages `./dist` directory.
   - Uploads bundle to GitHub Pages artifact store via `actions/upload-pages-artifact@v3`.
4. **Publishing:**
   - Deploys to GitHub Pages via `actions/deploy-pages@v4`.

## Repository Settings Configuration
To enable GitHub Pages via GitHub Actions:
1. Navigate to **Settings** → **Pages** in the `futurefinger/Official_Website` repository.
2. Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Under **Workflow permissions** (Settings → Actions → General), ensure "Read and write permissions" or default workflow permissions with `id-token: write` are active.

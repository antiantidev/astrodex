---
title: "GitHub Pages Deployment"
description: "Detailed guide on configuring the automated GitHub Actions workflow for Astrodex."
project: "astrodex-base"
version: "v1.0.1"
status: "stable"
order: 2
---

# GitHub Pages Deployment

Astrodex comes pre-configured with a high-performance CI/CD pipeline specifically for GitHub Pages. This ensures that every time you push content to your repository, your documentation hub is automatically rebuilt and distributed globally.

## The `deploy.yml` Workflow

The automation logic is located in `.github/workflows/deploy.yml`. This file uses the official `withastro/action` to handle building and deploying your static site.

### Workflow Structure

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
  workflow_dispatch:
# ... permissions and jobs
```

## Setup Instructions

### 1. Repository Permissions
To allow GitHub Actions to publish your site, you must ensure the workflow has the correct permissions. This is already defined in the `deploy.yml`:
- `contents: read`
- `pages: write`
- `id-token: write`

### 2. Configure GitHub Pages Settings
1.  Navigate to your repository on GitHub.
2.  Go to **Settings > Pages**.
3.  Under **Build and deployment > Source**, select **GitHub Actions**.

### 3. Triggering the Deployment
- **Automatic:** Simply push a commit to the `main` branch.
- **Manual:** Go to the **Actions** tab, select **Deploy to GitHub Pages**, and click **Run workflow**.

## Troubleshooting

### Base Path Issues
If your site is hosted at `username.github.io/repo-name/`, ensure your `astro.config.mjs` has the correct `base` property:
```javascript
export default defineConfig({
  site: 'https://username.github.io',
  base: '/repo-name',
});
```
*Note: Astrodex components automatically handle this base path via the `<Link />` component.*

### Node.js Version
The workflow defaults to the latest stable Node.js version supported by the Astro action. If you require a specific version, you can uncomment and modify the `node-version` property in the `build` step.

---

> **Next Step:** Understand how to organize your projects and versions in the [Project Architecture](/docs/astrodex-base/v1.0.1/getting-started/structure/) guide.

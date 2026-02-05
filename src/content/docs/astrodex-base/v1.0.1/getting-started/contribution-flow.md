---
title: "Setup & Deployment"
description: "Bootstrapping your Astrodex hub: from local installation to global edge deployment."
project: "astrodex-base"
version: "v1.0.1"
status: "stable"
order: 1
---

# Setup & Deployment

Initializing your professional documentation hub takes less than 60 seconds. Follow this technical pipeline to get started.

## 1. Environment Bootstrap

The most efficient way to start is by utilizing the GitHub Template.

1.  Initialize your repository via the [Astrodex Template](https://github.com/antiantidev/astrodex).
2.  Clone your instance locally:
    ```bash
    git clone https://github.com/YOUR_USER/your-docs.git
    cd your-docs
    ```

## 2. Dependency Injection

Astrodex requires Node.js 20+. Install the core engine dependencies:

```bash
npm install
```

## 3. Development Runtime

Launch the local development server with HMR (Hot Module Replacement):

```bash
npm run dev
```
The engine will be accessible at `http://localhost:4321`.

## 4. Global Configuration

Centralized branding is managed in `src/site.config.ts`. Update this file to define your hub's identity:

```typescript
export const SITE_CONFIG = {
  brand: {
    name: "Your Brand",
    description: "Your elite technical hub",
    // ...
  }
};
```

## 5. Theme Orchestration

Modify the `@theme` layer in `src/styles/global.css` to adjust the monochromatic palette or primary accents.

## 6. Deployment Pipeline

Since Astrodex generates a 100% static build, it can be hosted on any edge network for **zero cost**.

### GitHub Pages (Automated)
We provide a pre-configured CI/CD workflow. Simply enable **GitHub Actions** in your settings, and every push to `main` will trigger a global deployment.

### Vercel / Netlify
Connect your repository and ensure the build command is `npm run build` and the output directory is `dist/`.

---

> **Next Phase:** Master the [Project Structure](/docs/astrodex-base/v1.0.1/getting-started/structure/) to organize your content efficiently.
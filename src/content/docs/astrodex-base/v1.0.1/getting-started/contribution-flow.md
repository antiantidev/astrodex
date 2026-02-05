---
title: "Setup & Deployment"
description: "A step-by-step guide to installing, configuring, and deploying your own documentation hub."
project: "astrodex-base"
version: "v1.0.1"
status: "stable"
order: 1
---

# Setup & Deployment

Launching your own premium documentation hub is simple. Follow these steps to get the Astrodex engine running locally and on the web.

## 1. Get the Code

The fastest way to start is by using the **GitHub Template** feature.

1.  Visit the [Astrodex Repository](https://github.com/antiantidev/astrodex).
2.  Click the **"Use this template"** button.
3.  Clone your new repository to your local machine:
    ```bash
    git clone https://github.com/YOUR_USERNAME/your-docs-repo.git
    cd your-docs-repo
    ```

## 2. Local Installation

Install the required dependencies using NPM:

```bash
npm install
```

## 3. Development Server

Start the engine in development mode to see changes in real-time:

```bash
npm run dev
```
Open your browser to `http://localhost:4321`.

## 4. Initial Configuration

All global branding is centralized in `src/site.config.ts`. Open this file to update:
- **Brand Name:** Your site's primary title.
- **Logo Text:** The letter or icon text in the header logo.
- **Social Links:** Your GitHub and Twitter profiles.

## 5. Visual Customization

To change the colors or typography, modify the `@theme` block in `src/styles/global.css`.

```css
@theme {
  --color-primary-500: #ffffff; /* Main Accent */
  --color-midnight: #000000;    /* Background */
}
```

## 6. Deployment

Astrodex generates a purely static site, making it compatible with any modern web host for **Zero Cost**.

### Vercel (Recommended)
1.  Connect your GitHub repo to Vercel.
2.  Vercel will automatically detect **Astro** and deploy your site.

### GitHub Pages
We include a GitHub Action workflow to deploy automatically on every push. See `.github/workflows/deploy.yml`.

---

> **Next Step:** Learn how to organize your documentation files in the [Project Structure](/docs/astrodex-base/v1.0.1/getting-started/structure) guide.

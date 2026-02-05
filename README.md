# 🌌 Astrodex | Enterprise-Grade Multi-Project Documentation Engine

**Astrodex** is an elite, monochromatic documentation framework engineered for developers who demand high-performance technical infrastructure. Built on **Astro 5.x** and **Tailwind CSS v4**, it provides a "Product-Level" UI for hosting complex documentation ecosystems with absolute speed, precision, and zero maintenance overhead.

[![Lighthouse Performance](https://img.shields.io/badge/Lighthouse-100%2F100-brightgreen?style=for-the-badge&logo=googlechrome)](https://pagespeed.web.dev/)
[![Built with Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?style=for-the-badge&logo=astro)](https://astro.build)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Zero JS](https://img.shields.io/badge/JavaScript-Zero%20by%20Default-yellow?style=for-the-badge)](https://astro.build/philosophy/)

---

## ⚡ Why Astrodex?

Documentation is often the most neglected part of a product. **Astrodex** changes the narrative by treating documentation as a high-end software product. It’s not just a template; it's a static-first engine designed to scale from a single README to a massive enterprise hub.

### 🚀 Core Pillars
- **Infinite Scalability:** Orchestrate multiple independent projects (CLI, API, SDKs) in one unified hub.
- **Native Versioning:** Parallel support for `v1.x`, `v2.x`, and `legacy` with automatic routing.
- **Obsidian Aesthetic:** A premium, monochromatic design system that eliminates visual noise.
- **Search Engine Dominance:** Engineered for SEO with automatic sitemaps, semantic HTML, and metadata validation.

---

## ✨ Features for Technical Teams

### 📂 Ecosystem Management
Manage independent project identities using the `project.metadata.md` manifest. Each project gets its own overview, maintainer list (Facepile), and version switcher.

### 🔍 Elite Discovery Tools
- **Stateful Sidebar:** Remembers collapsed/expanded groups across sessions.
- **Real-time Filter:** Instant UI refinement as you type.
- **Command Palette:** Site-wide search via `Ctrl + K` with pre-indexed results.

### 📊 Advanced Technical Formatters
- **Mermaid.js Diagrams:** Native architecture and sequence visualization.
- **Premium Code Blocks:** Shiki-powered syntax highlighting with one-click copy.
- **Admonitions:** Semantic callouts for `Note`, `Warning`, and `Danger`.
- **Intelligent Assets:** Automatic WebP conversion and `medium-zoom` lightboxes.

---

## 🛠️ Operational Guide

### 1. Initialization
Create your repository using the **GitHub Template** or clone manually:
```bash
git clone https://github.com/antiantidev/astrodex.git
npm install
```

### 2. Development Pipeline
```bash
npm run dev
```
Engine accessible at `http://localhost:4321`.

### 3. Content Architecture
Follow the **Filesystem-as-API** structure in `src/content/docs/`:
```text
docs/
└── my-project/
    ├── project.metadata.md     <-- Root Manifest
    └── v1.0/                   <-- Version Folder
        ├── introduction.md
        └── configuration/      <-- Sidebar Category
            └── setup.md
```

---

## ⚙️ Configuration Matrix

- **Hub Identity:** Edit `src/site.config.ts` to define your brand, social links, and global SEO.
- **Visual Theme:** Modify the `@theme` variables in `src/styles/global.css` to rebrand the monochromatic palette.
- **Validation:** All content is validated via **Zod** schemas in `src/content/config.ts`.

---

## 🌐 Global Deployment (Zero Cost)

Astrodex is optimized for edge distribution. Deploy to any static provider in seconds:

- **GitHub Pages:** Pre-configured workflow in `.github/workflows/deploy.yml`.
- **Vercel / Netlify:** Automatic detection and instant deployment.

---

## 🤝 Contributing

We welcome contributions to the Astrodex Engine. Please see our [Astrodex Manual](https://antiantidev.github.io/astrodex/docs/astrodex-base/v1.0.1/introduction/) for detailed architecture notes.

## 📄 License

Licensed under the [MIT License](LICENSE).

---

**Built with absolute focus by [Antiantidev](https://github.com/antiantidev).**  
*If this engine powers your docs, consider giving it a ⭐.*

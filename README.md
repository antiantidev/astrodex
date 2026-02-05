# 🌌 Astrodex | Elite Multi-Project Documentation Engine

**Astrodex** is a high-performance, monochromatic documentation framework engineered for developers who demand technical precision and absolute speed. Built on **Astro 5.x** and **Tailwind CSS v4**, it provides a "Premium-Dark" foundation for hosting unlimited projects and versions in one unified, SEO-optimized hub.

[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-100%2F100-brightgreen?style=for-the-badge&logo=googlechrome)](https://pagespeed.web.dev/)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro%205.x-BC52EE?style=for-the-badge&logo=astro)](https://astro.build)
[![Tailwind CSS v4](https://img.shields.io/badge/Styled%20with-Tailwind%20v4-38B2AC?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

## ⚡ Technical Edge

- 🚀 **Extreme Performance:** Near-perfect Lighthouse scores. Zero-JS by default ensures content is delivered instantly to the global edge.
- 📂 **Multi-Project Orchestration:** Host independent ecosystems (e.g., Core API, CLI, SDKs) within a single unified deployment.
- 🔢 **Native Versioning:** Full support for parallel versions (v1.0, v2.0, legacy) with automatic routing and version switchers.
- 🔍 **Advanced Discovery:** Real-time sidebar filtering, stateful folder-based grouping, and site-wide `Ctrl+K` command palette.
- 🎨 **Obsidian Design Language:** A sophisticated monochromatic aesthetic using Tailwind CSS v4 variables for effortless rebranding.
- 🛡️ **Zod-Validated Content:** Strict metadata validation ensures data integrity and prevents broken links at build time.
- 📊 **Technical Formatters:** Native support for Mermaid diagrams, premium code blocks with Shiki, and smart image lightboxes.

## 🚀 Deployment Pipeline

### 1. Initialize Instance
Create your private or public repository using the **GitHub Template** feature.

### 2. Local Setup
```bash
git clone https://github.com/YOUR_USER/your-docs.git
cd your-docs
npm install
```

### 3. Development Runtime
```bash
npm run dev
```
Open `http://localhost:4321` to view your hub in real-time.

## ⚙️ Configuration Matrix

Astrodex is centralized for maximum control:

1.  **Identity:** Modify `src/site.config.ts` to define your brand name, logo, social links, and navigation hierarchy.
2.  **Branding:** Adjust the `@theme` variables in `src/styles/global.css` to transform the monochromatic palette.
3.  **Content:** Organize your Markdown/MDX articles in `src/content/docs/[project]/[version]/`. Every project requires a `project.metadata.md` manifest at its root.

## 📁 Repository Architecture

```text
src/
├── components/     # High-performance UI components
├── content/        # Markdown/MDX source files (Zod-validated)
│   └── docs/       # Multi-project documentation hierarchy
├── layouts/        # Page orchestrators (DocsLayout, Layout)
├── pages/          # Dynamic routing & search index
├── styles/         # Tailwind v4 core & monochromatic theme
└── site.config.ts  # The Hub Control Center
```

## 🌐 Global Hosting

Astrodex generates a 100% static build, making it compatible with any modern edge provider for **Zero Cost**:

- **GitHub Pages:** Pre-configured CI/CD workflow included (`.github/workflows/deploy.yml`).
- **Vercel:** Native Astro 5.x support with global edge distribution.
- **Netlify:** Automatic build detection and instant deployment.

## 📜 License

Astrodex is open-source software licensed under the [MIT License](LICENSE).

---

**Built for the Absolute Edge by [Antiantidev](https://github.com/antiantidev).**
*If this engine powers your documentation, consider giving it a ⭐ on GitHub.*
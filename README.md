# 🌌 Astrodex | Premium Documentation Starter Kit

**Astrodex** is a high-performance, monochromatic documentation engine built for developers who value precision, speed, and absolute clarity. Engineered with **Astro 5.x** and **Tailwind CSS v4**, it provides a rock-solid foundation for building professional documentation hubs—from simple API guides to complex multi-project ecosystems.

![Astrodex Preview](https://raw.githubusercontent.com/antiantidev/crefinity-doc/main/public/favicon.svg)

## ✨ Key Features

- 🚀 **Extreme Performance:** 100/100 Lighthouse scores. Zero-JS by default for content pages.
- 🎨 **Obsidian & Silver Theme:** A sophisticated, dark-mode design system using Tailwind CSS v4.
- 📂 **Multi-Tenancy:** Host multiple independent projects (API, CLI, UI) in one unified codebase.
- 🔢 **Native Versioning:** Full support for parallel versions (v1.0, v2.0, latest) with automatic routing.
- 🔍 **Advanced Navigation:** Real-time sidebar filtering, folder-based grouping, and state persistence.
- ⌨️ **Command Palette:** Site-wide search accessible via `Ctrl+K`.
- 📝 **Markdown & MDX:** Write content using the tools you love.

## 🚀 Quick Start

### 1. Use the Template
Click the **"Use this template"** button on GitHub to create your own repository.

### 2. Local Installation
```bash
git clone https://github.com/YOUR_USERNAME/your-docs-repo.git
cd your-docs-repo
npm install
```

### 3. Start Development
```bash
npm run dev
```
Visit `http://localhost:4321` to see your hub live.

## 🛠️ Customization

Astrodex is designed to be personalized in minutes:

1.  **Global Config:** Edit `src/site.config.ts` to update your brand name, logo, social links, and navigation.
2.  **Visuals:** Modify the `@theme` block in `src/styles/global.css` to change colors and typography.
3.  **Content:** Add your projects and articles in `src/content/docs/`. Follow the `project/version/article` hierarchy.

## 📁 Project Structure

```text
src/
├── components/     # Modular UI components
├── content/        # Markdown/MDX content (The source of truth)
│   └── docs/       # Multi-project documentation
├── layouts/        # Page structures (Layout, DocsLayout)
├── pages/          # Routing & Special pages
├── styles/         # Tailwind v4 & Global CSS
└── site.config.ts  # Central configuration (The control center)
```

## 🌐 Deployment

Deploy to the Edge for free in seconds:

- **Vercel:** Optimized out-of-the-box support.
- **Netlify:** Automatic detection and deployment.
- **GH Pages:** GitHub Actions workflow included.

## 📄 License

Astrodex is open-source software licensed under the [MIT License](LICENSE).

---

**Built with Absolute Focus by [Astrodex Team](https://github.com/antiantidev).**
If you find this useful, consider [Sponsoring](https://buymeacoffee.com/chokernguyen) the project.

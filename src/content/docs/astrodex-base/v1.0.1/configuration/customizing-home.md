---
title: "Landing Page Control"
description: "Customizing the monochromatic home page and modular components."
project: "astrodex-base"
version: "v1.0.1"
status: "stable"
order: 7
---

# Landing Page Control

The Astrodex home page is a modular composition of Astro components designed for high-conversion technical branding.

## Section Orchestration

The layout is defined in `src/pages/index.astro`. You can modify the order or visibility of sections by manipulating the component calls:

```astro
<Layout title="...">
    <Hero />
    <TechStack /> <!-- The logo marquee -->
    <ProjectsShowcase /> <!-- Featured documentation cards -->
    <Features /> <!-- Core engine value-props -->
    <Workflow /> <!-- Deployment terminal -->
    <FAQ /> <!-- Common technical queries -->
    <Stats /> <!-- Performance metrics -->
</Layout>
```

## Component Customization

Each module is located in `src/components/home/`:
- **Hero:** Edit `Hero.astro` to change the H1 headline and CTA links.
- **FAQ:** Modify the `faqs` array in `FAQ.astro` to update questions.
- **Workflow:** Edit the terminal commands and status messages in `Workflow.astro`.

## Visual Variables

The landing page follows the global theme defined in `src/styles/global.css`. To change the site's accent color (e.g., from Silver to Emerald), simply update the `--color-primary-500` variable.

---

> **Custom Components:** Because Astrodex is built on Astro, you can drop any React or Vue component directly into these layouts if you need complex interactivity.
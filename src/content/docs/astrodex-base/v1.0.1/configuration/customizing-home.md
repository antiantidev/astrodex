---
title: "Customizing the Home Page"
description: "Learn how to modify the landing page, add/remove components, and edit the hero content."
project: "astrodex-base"
version: "v1.0.1"
status: "stable"
order: 6
---

# Customizing the Home Page

The Astrodex landing page is fully modular. It is built using isolated Astro components located in `src/components/home/`.

## 1. Modifying the Hero

The main entry point is `src/components/home/Hero.astro`. 
- **Text:** Edit the H1 and P tags to change your headline.
- **CTA:** Update the `href` of the buttons to point to your repository or documentation.

## 2. Managing Page Sections

Open `src/pages/index.astro` to see the layout of the home page. You can easily reorder or disable sections by commenting out their component calls:

```astro
<!-- src/pages/index.astro -->
<Layout title="...">
	<Hero />
    <TechStack /> <!-- Disable this to hide the logo bar -->
    <ProjectsShowcase featuredProjects={featuredProjects} />
	<Features />
    <Workflow />
    <FAQ />
    <Stats ... />
</Layout>
```

## 3. Editing Components

Each section has its own file for easy editing:
- **TechStack:** `src/components/home/TechStack.astro` (Edit the `tech` array).
- **Features:** `src/components/home/Features.astro` (Modify the feature grid).
- **FAQ:** `src/components/home/FAQ.astro` (Edit the `faqs` constant).
- **Stats:** `src/components/home/Stats.astro` (Adjust the project metrics).

## 4. Branding & Colors

The home page inherits all styles from `src/styles/global.css`. By changing the `@theme` variables, you can transform the look of all home page components instantly.

---

> **Advanced:** Since these are standard Astro components, you can add your own React, Vue, or Svelte components anywhere on the home page!

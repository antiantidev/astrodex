---
title: "Project Architecture"
description: "Understanding the folder-based routing and content organization of the Astrodex engine."
project: "astrodex-base"
version: "v1.0.1"
status: "stable"
order: 3
---

# Project Architecture

Astrodex uses a **Filesystem-as-API** approach. Your folder structure directly dictates the routing, sidebar grouping, and versioning of your documentation hub.

## Directory Hierarchy

All documentation assets are located in `src/content/docs/`. The engine parses this directory using the following logic:

```text
src/content/docs/
├── [project-id]/               <-- Kebab-case project ID
│   ├── project.metadata.md     <-- Root identity file
│   └── [version]/              <-- e.g., 'v1.0', 'v2.0'
│       ├── introduction.md     <-- Version landing page
│       └── [category]/         <-- Sidebar grouping
│           └── article.md      <-- Technical content
```

### 1. Project Identity
The top-level folder name (e.g., `astrodex-base`) serves as the unique ID for that project ecosystem. It must be kebab-case.

### 2. Versioning Logic
Any sub-folder within a project that starts with `v` is automatically treated as a version. The engine will:
- Generate a version-specific route: `/docs/[project]/[version]/`.
- Include it in the sidebar **Version Switcher**.
- Index it for version-specific searches.

### 3. Automated Grouping
Folders inside a version directory (e.g., `getting-started/`) automatically create a collapsible category in the sidebar. The folder name is transformed into a readable title (e.g., `getting-started` → `GETTING STARTED`).

## Content Sorting

Sidebar order is determined by the `order` field in the Markdown frontmatter:
- **Priority:** Lower numbers (0, 1, 2) appear first.
- **Fallback:** If `order` is missing, alphabetical sorting is applied.

---

> **Technical Tip:** Keep your filenames lowercase and use hyphens for SEO-friendly URL slugs.
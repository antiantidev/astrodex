---
title: "Project Structure"
description: "How to organize projects, versions, and sub-folders within the Astrodex directory hierarchy."
project: "astrodex-base"
version: "v1.0.1"
status: "stable"
order: 2
---

# Project Structure

Astrodex is designed for scalability. It uses a strict directory hierarchy to automatically generate URLs, sidebars, and version switchers without manual configuration.

## The Content Directory

All your documentation lives in `src/content/docs/`. The system expects this pattern:

```text
src/content/docs/
├── [project-id]/               <-- e.g., 'auth-api'
│   ├── project.metadata.md     <-- Global project info
│   └── [version]/              <-- e.g., 'v1.0'
│       ├── introduction.md     <-- Default landing page
│       └── [group-name]/       <-- e.g., 'getting-started'
│           ├── setup.md
│           └── config.md
```

### 1. Project ID (The Hub Level)
The folder name at the root of `docs/` defines the project URL: `/docs/auth-api`.

### 2. Project Metadata
The `project.metadata.md` file defines the project's display title and description for the main ecosystem gallery. **This file is required for every project.**

### 3. Versioning
Folders starting with `v` (e.g., `v1.0`, `v2.5.1`) are treated as versions. The version switcher in the sidebar will automatically list these folders.

### 4. Folder-based Grouping
To create a section in the sidebar, simply create a sub-folder inside your version directory.
- **Example:** `v1.0/routing/pages.md`
- **Result:** A sidebar category named **ROUTING** containing the **Pages** link.

## Sidebar Sorting

The order of items in the sidebar is controlled by the `order` field in each file's frontmatter.
- Lower numbers appear at the top.
- If no `order` is provided, items are sorted alphabetically.

---

> **Tip:** Keep your project IDs in kebab-case (`my-awesome-tool`) for clean, SEO-friendly URLs.

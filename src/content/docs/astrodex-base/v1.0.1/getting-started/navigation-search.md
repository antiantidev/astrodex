---
title: "Navigation & Discovery"
description: "Utilizing the advanced discovery tools in Astrodex: Sidebar filtering, command palette, and stateful navigation."
project: "astrodex-base"
version: "v1.0.1"
status: "stable"
order: 3
---

# Navigation & Discovery

Astrodex is engineered for massive data sets. We provide elite discovery tools to ensure developers can locate specific technical details in milliseconds.

## 1. Stateful Sidebar 📂

The sidebar is the primary navigation matrix. It features:
- **Folder Grouping:** Automatic hierarchical categorization.
- **Collapsible States:** Toggle groups to save vertical space.
- **Persistence:** The engine remembers which groups you've opened across page reloads.

## 2. Real-time Filtering 🔍

Located at the apex of the sidebar, the filter allows for instant UI refinement.
- **Instant Search:** Hides irrelevant articles as you type.
- **Auto-Expansion:** Automatically opens collapsed groups if they contain a match.

## 3. Global Command Palette (`Ctrl + K`)

For site-wide intelligence, the Command Palette searches across all projects and versions.
- **Pre-indexed:** The search index is built at compile-time for zero-latency results.
- **Full-Text Search:** Scans titles, descriptions, and content bodies.

## 4. Contextual Breadcrumbs 🗺️

Every article includes semantic breadcrumbs for rapid upward traversal:
`Home / Ecosystem / Project Name / Version / Current Topic`

---

> **Performance Note:** Navigation utilizes the "Astro View Transitions" API (where enabled) to provide app-like fluidity while maintaining the stability of a static site.

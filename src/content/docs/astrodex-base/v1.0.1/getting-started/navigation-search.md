---
title: "Navigation & Search"
description: "Master the discovery tools in Astrodex: Sidebar filtering, collapsible groups, and the global command palette."
project: "astrodex-base"
version: "v1.0.1"
status: "stable"
order: 3
---

# Navigation & Search

Astrodex is built to handle massive documentation sets. We provide several tools to help users find exactly what they need instantly.

## 1. Sidebar Filtering 🔍

Located at the top of the left sidebar, the filter allows you to search for articles by title in real-time.

- **Dynamic Search:** As you type, the sidebar hides irrelevant items.
- **Smart Expansion:** Folder groups containing a match will automatically expand.
- **Reset:** Clearing the input restores the sidebar to its original state.

## 2. Collapsible Folder Groups 📂

Articles are grouped by their file system directory.

- **Manual Toggle:** Click any group header to expand or collapse it.
- **Persistence:** The sidebar remembers your choices. If you close a group, it stays closed when you refresh or switch pages.
- **Auto-Focus:** The system ensures the group containing your current page is always expanded so you never feel lost.

## 3. Global Command Palette ⌨️

For a site-wide search across all projects, press **`Ctrl+K`** or click the **Search** icon in the header.

- **Fast Indexing:** The search index is pre-generated during build-time for instant results.
- **Filtering:** You can filter search results by project or version within the modal.

## 4. Breadcrumbs 🗺️

Every page features responsive breadcrumbs (e.g., `Home / Project / v1.0 / Topic`). This provides clear context and allows for quick upward navigation.

---

> **Design Choice:** All navigation logic is highly optimized. We use minimal client-side JavaScript to ensure the fastest possible page transitions.
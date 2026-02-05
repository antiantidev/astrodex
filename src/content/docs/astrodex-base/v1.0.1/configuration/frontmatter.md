---
title: "Article Metadata (Frontmatter)"
description: "A complete reference for mandatory and optional fields in your documentation Markdown files."
project: "astrodex-base"
version: "v1.0.1"
status: "stable"
order: 4
---

# Article Metadata

Every documentation file must begin with a YAML frontmatter block. This metadata is strictly validated using **Zod** to ensure technical integrity and prevent broken links.

## Mandatory Configuration

At a minimum, each file requires these three fields:

```markdown
---
title: "Your Page Title"
project: "your-project-id"
version: "v1.0.1"
---
```

## Complete Field Reference

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `title` | String | Yes | The H1 title of the page and browser tab. |
| `description`| String | No | Used for SEO meta tags and preview snippets. |
| `project` | String | Yes | Must match the project's root folder name. |
| `version` | String | Yes | The version folder name (e.g., `v1.0.1`). |
| `status` | Enum | No | `stable`, `beta`, `alpha`, `deprecated`. |
| `order` | Number | No | Priority in the sidebar (lower = higher). |
| `lastUpdated`| Date | No | Displays the last revision date on the page. |

## Status Badges

The `status` field renders a premium monochromatic badge next to the title:
- **stable:** Clean border with a check icon.
- **beta:** Dotted border indicating testing.
- **deprecated:** Ghostly text style.

---

> **Validation Note:** If your project ID in the frontmatter does not match the folder name, the build will fail. This is intentional to keep your data consistent.

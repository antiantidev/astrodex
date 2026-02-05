---
title: "Frontmatter Reference"
description: "Technical specifications for article metadata and Zod-based validation."
project: "astrodex-base"
version: "v1.0.1"
status: "stable"
order: 4
---

# Frontmatter Reference

Every Markdown file in the Astrodex ecosystem must be preceded by a YAML frontmatter block. This data is strictly validated via **Zod** to ensure system integrity.

## Standard Schema

```yaml
---
title: "Technical Title"
description: "Short SEO description"
project: "project-id"
version: "v1.0"
status: "stable"
order: 0
---
```

## Field Specifications

| Property | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | Yes | The primary H1 and meta-title. |
| `project` | `string` | Yes | Must match the root folder ID. |
| `version` | `string` | Yes | Must match the version folder name. |
| `description`| `string` | No | SEO meta description. |
| `status` | `enum` | No | `stable`, `beta`, `alpha`, `deprecated`. |
| `order` | `number` | No | Sidebar sorting priority (default: 0). |
| `lastUpdated`| `date` | No | Displays revision date on footer. |

## Status badges
The `status` field triggers visual indicators next to the article title:
- **Stable:** Minimalist border (default).
- **Beta/Alpha:** Specialized indicators for work-in-progress content.
- **Deprecated:** Visual warning for legacy documentation.

---

> **Build Alert:** If the `project` or `version` fields do not match the actual file path, the Astro build process will terminate with a validation error.
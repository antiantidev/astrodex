---
title: "Project Identity"
description: "Defining global project metadata and the Ecosystem gallery presence."
project: "astrodex-base"
version: "v1.0.1"
status: "stable"
order: 6
---

# Project Identity

The `project.metadata.md` file serves as the manifest for an entire project ecosystem. It controls the project's appearance in the **Ecosystem Gallery** and defines its core contributors.

## Manifest Location

Each project must contain exactly one metadata manifest at its root:
`src/content/docs/[project-id]/project.metadata.md`

## Manifest Schema

```yaml
---
title: "Project Full Name"
project: "project-id"
description: "Elevator pitch for the project card."
status: "stable"
contributors:
  - username: "github_user"
    role: "Maintainer"
---
```

### Attribute Reference

- **`title`**: The display name used on the Hub and Project Overview.
- **`description`**: A concise summary (max 160 chars) for the project card.
- **`contributors`**: Array of objects. Avatars are automatically fetched from GitHub.

## Project Overview Page

The content below the YAML frontmatter in `project.metadata.md` is rendered as the project's root landing page (`/docs/[project-id]/`). Use this space for:
- High-level project goals.
- Links to external resources (Discord, Slack).
- Contribution guidelines.

---

> **Pro Tip:** Adding contributors here will populate the **Facepile** component in the documentation footer for all versions of this project.
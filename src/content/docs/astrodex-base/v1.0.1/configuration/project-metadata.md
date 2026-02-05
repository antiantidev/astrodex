---
title: "Project Identity (Metadata)"
description: "How to define the global identity of your project using the mandatory project.metadata.md file."
project: "astrodex-base"
version: "v1.0.1"
status: "stable"
order: 5
---

# Project Identity

The `project.metadata.md` file is the central nervous system of a documentation set. It defines how your project appears in the Ecosystem gallery and who is maintaining it.

## File Location

Each project must have exactly one metadata file at its root:
`src/content/docs/[project-id]/project.metadata.md`

## The Schema

The metadata file uses a specialized YAML block:

```markdown
---
title: "Astrodex Core"
description: "The primary engine documentation."
project: "astrodex-base"
status: "stable"
contributors:
  - username: "antiantidev"
    role: "Lead Maintainer"
---
```

### Mandatory Fields

| Field | Description |
| :--- | :--- |
| `title` | The full name of the project shown on the home page and hub. |
| `description` | The teaser text used in the project cards. |
| `project` | The unique kebab-case ID matching the folder name. |
| `contributors` | A list of GitHub usernames. Avatar images are fetched automatically. |

## The Project Overview Page

The content body of this file (below the `---`) is automatically rendered as the **Project Overview** page at `/docs/[project-id]`. 

Use this space to provide a high-level "What is this?" overview that applies to all versions of your project.

---

> **Tip:** Keep your `description` under 160 characters to ensure it looks great on all screen sizes.

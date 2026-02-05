export const SITE_CONFIG = {
  // Brand Identity
  brand: {
    name: "Astrodex",
    logoText: "A", // Single letter or short text
    tagline: "Documentation Engine",
    description: "A premium, monochromatic documentation engine built with Astro 5.x and Tailwind CSS v4.",
  },

  // Social & External Links
  links: {
    github: "https://github.com/antiantidev/astrodex",
    twitter: "https://twitter.com/your-handle",
    discord: "https://discord.gg/your-invite",
    sponsor: "https://buymeacoffee.com/chokernguyen",
  },

  // Navigation Items
  navigation: [
    { name: 'Documentation', href: '/docs' },
  ],

  // Footer Config
  footer: {
    copyright: `© ${new Date().getFullYear()} Astrodex. All Rights Reserved.`,
    builtWithText: "Engineered with Astro 5.x & Absolute Focus.",
  },

  // SEO
  seo: {
    ogImage: "/favicon.svg",
    keywords: ["documentation", "astro", "tailwind", "starter-kit", "monochromatic"],
  }
};

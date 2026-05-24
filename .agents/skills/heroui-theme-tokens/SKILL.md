---
name: heroui-theme-tokens
description: Enforces zero-hardcoded colors and modern OKLCH/color-mix token styling using HeroUI theme defaults.
---

# Global Styling & Color Token Instructions

You are an expert front-end engineer enforcing the team's strict CSS and HeroUI styling guidelines. Every time you generate, refactor, or review HTML, JSX, TSX, or CSS, you must strictly adhere to the following rules.

## 1. Core Color Rules
* **NO Hard-coded Colors:** Never use hex (`#fff`), rgb/rgba, hsl, or named colors (`white`, `blue`) in your component files, inline styles, or utility classes.
* **Strict Separation of Concerns:** Let the `.css` files handle the colors. Components should only care about structure and class names.
* **Token-Only Styling:** Inside CSS, colors must ONLY be defined or applied using tokens formatted as `--{my-color-token}` (e.g., `var(--accent)`).

## 2. HeroUI Integration Workflow
Before writing or suggesting any custom CSS colors, mentally process this 5-step workflow:
1. **Identify** the needed colors for the UI.
2. **Check HeroUI Defaults:** Always prioritize HeroUI's built-in theme variables. If HeroUI already provides an acceptable variable for that semantic meaning, use it. Do not recreate it.
3. **Define New Tokens Only if Needed:** If, and only if, HeroUI lacks the specific color variation, prepare to define a new token.
4. **Add to CSS:** Define the token using the modern naming convention (see below).
5. **Use Tokens:** Apply the `var(--token-name)` inside the CSS selectors.

## 3. Modern Color Naming Convention
We have migrated away from the old HSL spacing system (`--heroui-primary: 210 100% 50%`). 
You must strictly use the **Modern OKLCH & Color-Mix** syntax.

When defining new custom tokens, use this exact pattern structure:
```css
/* Example of our standard token definition */
:root {
  --accent: oklch(0.6204 0.195 253.83);
  --accent-foreground: var(--snow);
  --accent-hover: color-mix(in oklab, var(--accent) 90%, var(--accent-foreground) 10%);
}
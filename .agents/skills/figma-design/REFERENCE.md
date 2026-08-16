# Figma Design System - Quick Reference

## Token Variables Quick Lookup

### Colors
```css
--chroma-ocean: #1565C0 (dark mode --primary: #a9c7ff)
--chroma-ocean-strong: #0D47A1
--chroma-purple: #7B1FA2 (dark mode --secondary: #ffd27a)
--chroma-nature: #00897B (dark mode --tertiary: #9fd4b4)
--chroma-sunny: #FFD600 (dark mode --secondary: #ffd27a)

--surface: #F3F1FC (dark: #100f1c)
--surface-container-lowest: #ffffff (dark: #0a0917)
--surface-container: #E3DCFA (dark: #1c1a2c)
--surface-container-high: #d8d0f5 (dark: #222035)
--on-surface: #1a1c1b (dark: #e5e3f5)
--on-surface-variant: #464554 (dark: #c8c5db)
```
Dark mode overrides live under `:root.theme-dark` in `tokens.css` — some roles resolve to different literal hexes rather than a fixed dark variant of the same `--chroma-*` constant, so check the file directly for anything beyond a quick lookup.

### Font Families
```
--font-script: Caveat (cursive)
--font-display: Fraunces (serif)
--font-body / --font-brand: Plus Jakarta Sans (sans-serif)
--font-mono: JetBrains Mono (monospace)
```

### Spacing
No `--space-*` token scale exists in this codebase. Spacing is handled by utility classes in `layout.css`: `.gap-2` (0.5rem), `.gap-3` (0.75rem), `.gap-4` (1rem), `.gap-8` (2rem), `.gap-10` (2.5rem), `.gap-15` (3.75rem), `.gap-20` (5rem), `.gap-30` (7.5rem), `.gap-48` (12rem).

### Border Radius (tokenized, in `tokens.css`)
```
--radius-sm: 0.375rem
--radius-md: 0.75rem
--radius-lg: 1.5rem
--radius-xl: 2rem
--radius-full: 9999px
```

---

## Workflow Quick Start

### When Starting a New Component
1. **Find Figma frame** → Copy link
2. **Document spec** → Use template above
3. **Check tokens** → All colors in `tokens.css`?
4. **Create Astro file** → `src/components/ComponentName.astro`
5. **Map properties** → Figma props → Astro props
6. **Test states** → Default, hover, active, disabled
7. **Dark mode** → Verify colors work in dark
8. **Responsive** → Check 3 breakpoints (mobile, tablet, desktop)

### When Updating Design Tokens
1. **Identify change** → In Figma
2. **Update `tokens.css`** → Add new variable or modify
3. **Audit usage** → grep for old value in components
4. **Update components** → Replace with new variable
5. **Test dark mode** → Ensure contrast
6. **Commit separately** → `style: update design tokens`

### Before Deploying
1. **Visual QA** → Screenshot Figma vs live site
2. **Responsive check** → Mobile, tablet, desktop
3. **Dark mode test** → All variants in both themes
4. **Accessibility** → Run audit tool
5. **Performance** → Check image sizes, CSS size
6. **Commit message** → Clear description of changes

---

## Git Commit Messages for Design Work

```bash
# New component
feat(components): add ProjectCard component

# Design token updates
style(tokens): update color variables for new palette

# Component updates
refactor(components): improve Hero component styling

# CSS refactoring
refactor(styles): reorganize component styles

# Dark mode fixes
fix(theme): improve dark mode color contrast
```

---

## Status Badges

| Status | Meaning | Action |
|---|---|---|
| 🟢 Done | Implemented & tested | Ready to ship |
| 🟡 In Progress | Being developed | Review spec |
| 🔵 Draft | Design only, not coded | Plan implementation |
| 🔴 Blocked | Can't proceed | Resolve blocker |
| ⚪ Deprecated | No longer used | Can be removed |

---

## Quick Commands

```bash
# Search for color usage
grep -r "chroma-ocean" src/

# Find all CSS variables
grep -r "var(--" src/ | grep -o "var(--[^)]*)" | sort | uniq

# Test responsive design
# Browser dev tools: F12 → Ctrl+Shift+M

# Generate color contrast report
# https://webaim.org/resources/contrastchecker/

# Optimize SVG assets
# https://jakearchibald.github.io/svgomg/

# Export from Figma: File → Export → Select frames
```

---

## Component Checklist

Before marking a component as ✅ Done:

- [ ] Figma spec documented
- [ ] All variants created
- [ ] TypeScript props defined
- [ ] CSS matches Figma design
- [ ] Dark mode tested
- [ ] Mobile responsive (< 640px)
- [ ] Tablet responsive (640-1024px)
- [ ] Desktop responsive (> 1024px)
- [ ] ARIA labels added
- [ ] Keyboard navigation works
- [ ] Color contrast AA minimum
- [ ] Component in component library
- [ ] Used in at least one page
- [ ] Git commit with proper message
- [ ] No console warnings/errors
- [ ] Storybook docs updated (if applicable)

---

## Troubleshooting

### Component looks different than Figma
→ Check if all design tokens are using CSS variables
→ Verify font weights, sizes, and line heights match
→ Screenshot side-by-side for comparison

### Dark mode colors not working
→ Verify `:root.theme-dark` selector exists
→ Check color-mix() fallbacks
→ Test with Firefox dark mode enabled

### SVG icons not displaying
→ Ensure `public/` path is used: `public/assets/icons/icon.svg`
→ Check SVG dimensions in Figma export
→ Verify `fill` and `stroke` properties are set

### Responsive breakpoints not working
→ Check media query breakpoints: 50em (800px for tablet), etc.
→ Use `clamp()` for fluid sizing
→ Test with browser dev tools viewport settings

---

## Links & Resources

- **Figma Design File**: [Add your Figma link]
- **Deployed Site**: https://ana-monsalve.netlify.app
- **Repository**: https://github.com/amonsalv/Portfolio-Astro
- **Design Tokens**: `src/styles/tokens.css`
- **Component Lib**: `src/components/`
- **Styles Folder**: `src/styles/`

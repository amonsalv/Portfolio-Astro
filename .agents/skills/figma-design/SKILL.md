---
name: figma-design
description: |
  **Design System & Figma Workflow** — Maintain synchronization between Figma designs and Astro codebase.
  
  Use when: 
  - Syncing design tokens (colors, typography, spacing) from Figma to CSS variables
  - Creating Astro components from Figma frames
  - Documenting component specifications and design decisions
  - Running visual QA checks before pushing to production
  - Handoff process: Figma design → code implementation
  - Exporting assets and maintaining design-to-code consistency
---

# Figma Design System Integration

## Design Tokens Mapping

### Color System
**Location**: `src/styles/tokens.css` (light mode on `:root`, dark mode on `:root.theme-dark`)

| Figma Variable | CSS Custom Property | Light | Dark | Usage |
|---|---|---|---|---|
| `chroma/ocean` | `--chroma-ocean` | `#1565C0` | `--primary: #a9c7ff` | Primary brand, CTAs, accents |
| `chroma/purple` | `--chroma-purple` | `#7B1FA2` | `--tertiary`-adjacent, see `--secondary` dark | Secondary accent, highlights |
| `chroma/nature` | `--chroma-nature` | `#00897B` | `--tertiary: #9fd4b4` | Tertiary accent, borders |
| `chroma/sunny` | `--chroma-sunny` | `#FFD600` | `--secondary: #ffd27a` | Attention, decorative |
| `surface/container-lowest` | `--surface-container-lowest` | `#ffffff` | `#0a0917` | Card backgrounds |
| `surface/container` | `--surface-container` | `#E3DCFA` | `#1c1a2c` | Component backgrounds |
| `on-surface` | `--on-surface` | `#1a1c1b` | `#e5e3f5` | Primary text |
| `on-surface-variant` | `--on-surface-variant` | `#464554` | `#c8c5db` | Secondary text |

Dark mode isn't a simple per-color override — several roles (`--primary`, `--secondary`, `--tertiary`) resolve to different literal hex values under `:root.theme-dark` rather than reusing the same `--chroma-*` constants. Read `tokens.css` directly for the authoritative value rather than trusting this table for anything beyond a quick lookup.

### Typography
**Location**: `src/styles/tokens.css`

```css
/* Font families */
--font-script:   'Caveat', cursive;
--font-display:  'Fraunces', Georgia, serif;
--font-mono:     'JetBrains Mono', 'Fira Code', monospace;
--font-body:     'Plus Jakarta Sans', system-ui, sans-serif;
--font-brand:    'Plus Jakarta Sans', system-ui, sans-serif;

/* Font scale (static rem, not clamp) */
--text-sm:   0.875rem;
--text-base: 1rem;
--text-md:   1.125rem;
--text-lg:   1.25rem;
--text-xl:   1.625rem;
--text-2xl:  2.125rem;
--text-3xl:  2.625rem;
--text-4xl:  3.5rem;
--text-5xl:  4.5rem;
```

### Spacing & Layout
**Location**: `src/styles/layout.css`

There is no `--space-*` token scale in this codebase — spacing is done via utility classes (`.gap-2` = 0.5rem, `.gap-4` = 1rem, `.gap-8` = 2rem, up to `.gap-48` = 12rem) rather than CSS custom properties. Border radius and easing *are* tokenized, in `tokens.css`:

```css
/* Border radius */
--radius-sm:   0.375rem;
--radius-md:   0.75rem;
--radius-lg:   1.5rem;
--radius-xl:   2rem;
--radius-full: 9999px;

/* Transitions */
--theme-transition: 0.2s ease-in-out;
--ease-expressive:  cubic-bezier(0.4, 0, 0.2, 1);
```

---

## Component Specification Template

Use this template when creating Astro components from Figma frames:

```
## ComponentName

**Figma Frame**: [Link to frame in Figma]
**Status**: [Draft | In Progress | Ready | Done]
**Last Updated**: [YYYY-MM-DD]

### Variants
- [ ] Default state
- [ ] Hover state
- [ ] Active state
- [ ] Disabled state
- [ ] Dark mode

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Accessibility
- [ ] Semantic HTML
- [ ] ARIA labels where needed
- [ ] Color contrast tested
- [ ] Keyboard navigation

### CSS Classes
- Primary: `.component-name`
- Modifier: `.component-name--modifier`
- State: `.component-name.active`

### Implementation Notes
- Any special handling or dependencies
```

---

## Figma to Code Export Checklist

### 1. Asset Export (Before Development)
- [ ] Export all icon assets to `public/assets/icons/`
- [ ] Export all image assets to `public/assets/images/`
- [ ] Ensure SVGs are optimized
- [ ] Document asset naming convention

### 2. Design Token Verification
- [ ] All colors mapped to CSS variables
- [ ] Typography scales match design
- [ ] Spacing values consistent
- [ ] Update `tokens.css` if new tokens added

### 3. Component Audit
- [ ] Verify all Figma components have Astro counterparts
- [ ] Check variant coverage (default, hover, active, disabled)
- [ ] Test dark mode styling
- [ ] Validate responsive behavior

### 4. Quality Assurance
- [ ] Visual regression test (compare Figma vs deployed)
- [ ] Mobile responsiveness check
- [ ] Cross-browser testing
- [ ] Accessibility audit

---

## Current Design System Spec

### Project: Portfolio-Astro

**Design Language**: Warm Editorial Minimalism
**Primary Color**: `chroma-ocean` (#1565C0 light → `--primary: #a9c7ff` dark)
**Secondary Color**: `chroma-purple` (#7B1FA2)
**Accent Color**: `chroma-nature` (#00897B light → `--tertiary: #9fd4b4` dark)

**Key Characteristics**:
- Bold typography with clear hierarchy
- Generous whitespace
- Soft shadow system
- Smooth micro-interactions
- Dark mode support

---

## Workflow: Figma → Astro

### Phase 1: Design Validation
1. Figma file updated with new components/variants
2. Review in Figma - check spacing, colors, typography
3. Document design decisions in component specs

### Phase 2: Token Sync
1. Extract new tokens from Figma
2. Update `src/styles/tokens.css`
3. Verify all CSS variables are defined

### Phase 3: Component Implementation
1. Create Astro component from Figma frame
2. Map Figma properties to CSS classes
3. Implement all variants and states
4. Add TypeScript props for reusability

### Phase 4: Integration Testing
1. Test component in context on pages
2. Verify dark mode
3. Test responsive breakpoints
4. Check accessibility

### Phase 5: Visual QA & Deployment
1. Screenshots comparison: Figma vs Astro
2. Performance check
3. Final accessibility audit
4. Commit with proper message

---

## Common Component Patterns

### Hero Section Pattern
```astro
---
// Props from Figma spec
interface Props {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  theme?: 'light' | 'dark';
}
---

<section class="hero" class:list={{'theme-dark': theme === 'dark'}}>
  <h1 class="hero-title">{title}</h1>
  <p class="hero-subtitle">{subtitle}</p>
  <a href={ctaHref} class="hero-cta">{ctaText}</a>
</section>
```

### Card Component Pattern
```astro
---
interface Props {
  title: string;
  description: string;
  tags?: string[];
  image?: string;
  variant?: 'default' | 'featured' | 'minimal';
}
---

<article class="card" class:list={`card--${variant}`}>
  {image && <img src={image} alt="" class="card-image" />}
  <div class="card-content">
    <h3 class="card-title">{title}</h3>
    <p class="card-desc">{description}</p>
    {tags && <div class="card-tags">{tags.map(tag => <span>{tag}</span>)}</div>}
  </div>
</article>
```

---

## Naming Conventions

### CSS Classes
- Use kebab-case: `.component-name`
- Modifiers: `.component-name--modifier`
- States: `.component-name.is-active`
- Utility prefixes: `.stack`, `.wrapper`, `.reveal`

### Figma Component Names
- Prefix with component type: `Button/Primary`, `Card/Featured`
- Use forward slashes for hierarchy
- Variant names: `[Default]`, `[Hover]`, `[Disabled]`

### Astro Component Names
- PascalCase: `HeroSection.astro`, `ProjectCard.astro`
- Match Figma hierarchy when possible
- Group related components in folders

---

## Sync Checklist Template

```markdown
## Design Sync [DATE]

### New Components
- [ ] Component A - Status
- [ ] Component B - Status

### Updated Tokens
- [ ] Colors - checked
- [ ] Typography - checked
- [ ] Spacing - checked

### Pages Updated
- [ ] Page A
- [ ] Page B

### QA Status
- [ ] Visual comparison done
- [ ] Responsive tested
- [ ] Dark mode verified
- [ ] Accessibility audited

### Deployed
- [ ] Commit pushed
- [ ] Live on production
```

---

## Resources & References

- **Figma File**: [Link to team Figma]
- **Design Tokens**: `src/styles/tokens.css`
- **Component Library**: `src/components/`
- **Astro Docs**: https://docs.astro.build
- **Design System**: Warm Editorial Minimalism spec

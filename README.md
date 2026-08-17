

# Technical Assessment — Pillar 1: Design Implementation

Pixel-accurate, fully responsive Next.js application converting Figma design specifications into a state-of-the-art interface. Built as part of the **React Frontend Engineer (Junior – Mid Level)** UI challenge (Pillar 1: 50% Evaluation Weight).

---

## 🚀 Live Demo & Repository Links

- **Live Demo**: [https://pillar1-design.gausalmunir.site](https://pillar1-design.gausalmunir.site)
- **Pillar 1 (Design)**: `technical-assessment-design-pillar1`
- **Pillar 2 (Functional)**: `technical-assessment-functional-pillar2`

---

## 🛠️ Tech Stack & Key Requirements

| Domain | Technology / Tool | Specification |
|---|---|---|
| **Framework** | Next.js 15+ | App Router architecture (`/src/app`) |
| **Language** | TypeScript | Strict mode enabled (`strict: true`), zero `any` types |
| **Styling** | Tailwind CSS v4 | CSS design tokens, custom `@theme` properties |
| **Typography** | Next Font | `Urbanist` (Google Font) with CSS variable `--font-urbanist` |
| **Icons & Assets** | SVG & PNG | Exported directly from Figma design assets |
| **SEO & Access** | Semantic HTML5 | OpenGraph, Twitter Cards, Schema.org JSON-LD, Skip-links |

---

## 💻 Getting Started & Local Setup

### Prerequisites

Ensure you have Node.js 18.x or later installed.

### Installation

1. **Navigate to the Pillar 1 directory:**
   ```bash
   cd technical-assessment-design-pillar1
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   # or npm install / yarn install
   ```

3. **Start the local development server:**
   ```bash
   pnpm dev
   # or npm run dev / yarn dev
   ```

4. Open `http://localhost:3000` in your browser.

5. **Build for production verification:**
   ```bash
   pnpm build
   ```

---

## 🎨 Component Architecture & Design System

The application is structured into modular, accessible, and reusable React components:

```
src/
├── app/
│   ├── globals.css          # Tailwind CSS v4 import, design tokens & radial mask utilities
│   ├── layout.tsx           # Urbanist font, SEO metadata, JSON-LD Schema & skip navigation
│   └── page.tsx             # Main entry assembling Navbar, HeroSection & ServicesSection
├── components/
│   ├── Navbar.tsx           # Floating rounded header, active tab state & mobile trigger
│   ├── MobileMenu.tsx       # Slide-down mobile drawer with backdrop blur
│   ├── HeroSection.tsx      # Pop-out portrait hero, greeting pill badge & decorative scribbles
│   ├── GreetingBadge.tsx    # "Hello!" badge with accent scribble vector
│   ├── Testimonial.tsx      # Quote mark icon and testimonial snippet
│   ├── RatingExperience.tsx # 5-star rating graphic & 10 years experience counter
│   ├── ServicesSection.tsx  # Dark theme container, layered background textures & slider controls
│   ├── ServiceCard.tsx      # Stacked card cards with CSS mask cutout & interactive action button
│   ├── SliderIndicators.tsx # Custom active/inactive slider dots
│   └── icons/               # Inline SVG icon components (JcLogo, ArrowDiagonalIcon, QuoteIcon, StarRating)
```

---

## 📐 Figma Accuracy & Technical Highlights

### 1. Responsive Breakpoint Optimization
- Designed for **Desktop (1440px)** and **Mobile (375px)** design frames with smooth fluid scaling across intermediate screen sizes (`sm`, `md`, `lg`, `xl`).
- Mobile layout automatically transforms the desktop 3-card grid into an touch-friendly horizontal snap-carousel (`overflow-x-auto snap-x snap-mandatory`).

### 2. Custom CSS Masking (`service-card-cutout`)
- The bottom-right circular cutout on `ServiceCard` mockups is rendered using pure CSS radial gradient masks (`mask-image: radial-gradient(...)`) rather than static PNG overlays. This keeps the design fluid, crisp, and high-performance across all display resolutions.

### 3. Layered Hero & Pop-Out Character Architecture
- **Arch Backdrop (`#FEB273`)**: Positioned at the bottom of the hero center grid.
- **Jenny's Portrait (`hero-person.png`)**: Scaled and aligned to pop out cleanly over the top edge of the background arch and under/over text headings, strictly matching Figma visual proportions.
- **Decorative Scribbles (`vector-1`, `vector-2`)**: Pixel-aligned relative positioning under the letter "P" in "Product Designer" and above the "Hello!" pill badge.

### 4. Layered Background Blending (Services Section)
- Combines a dark surface (`#0D0D0D`) with a dark vector pattern texture (`services-pattern-bg.jpg`) and a high-vibrancy abstract fluid overlay (`services-bg.png`) set to `mix-blend-screen` with `opacity-90`.

---

## ♿ Accessibility & SEO

- **Semantic Landmark Tags**: Built with `<header>`, `<nav>`, `<main>`, `<section>`, and `<h1-h3>` hierarchy.
- **Keyboard Navigation**: Focus indicators (`focus-visible:ring-2 focus-visible:ring-accent-orange`) on all interactive controls and links.
- **Skip Navigation**: "Skip to main content" link for screen readers and keyboard users.
- **Structured Data**: JSON-LD Schema.org `Person` and `WebSite` meta embedded into document `<head>`.
- **Search Engine Optimization**: Complete metadata configuration including `openGraph`, `twitter`, canonical URL, and descriptive meta tag summaries.

---

## 🔍 Bonus Features & Extra Polish

1. **Accessibility Standards**: Keyboard bypass links, standard ARIA labels (`aria-expanded`, `aria-controls`, `aria-labelledby`).
2. **Performance Optimizations**: Native Next.js `Image` with optimal sizing (`sizes="..."`, `priority` loading for above-the-fold assets).
3. **Smooth Scroll & Micro-interactions**: Hover lifts on service cards (`hover:-translate-y-2`), diagonal arrow translation (`group-hover:translate-x-0.5 group-hover:-translate-y-0.5`), and active tab styling.

---

## 📝 Known Limitations

- **Navigation Links**: Header items (`#home`, `#about`, `#services`, `#resume`, `#project`, `#contact`) link to page anchor IDs; additional secondary sub-pages (e.g. detailed resume/projects) are beyond the UI challenge scope.
- **Slider Automation**: Mobile card slider supports manual swipe and indicator dots; full touch swipe drag sync to indicator dot state can be extended using Swiper/Embla if required in production.

---

## 📄 License & Attribution

Submitted for **React Frontend Engineer Technical Assessment 2026**. Confidential and proprietary.
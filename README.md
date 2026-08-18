# Technical Assessment — Pillar 1: Design Implementation

A pixel-accurate, fully responsive Next.js application converting Figma design specifications into a modern web interface. Built for the React Frontend Engineer UI challenge.

## Live Demo

- [Live Demo Link](https://pillar1-design.gausalmunir.site)

## Figma Design

- Implementation based on provided Figma design specifications.

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4
- **Typography**: Next Font (Urbanist)
- **Slider**: Swiper JS

## Technical Decisions

- **App Router**: Used for modern routing and server component benefits.
- **Tailwind CSS v4**: Utilized for efficient, utility-first styling and custom design tokens.
- **Swiper JS**: Implemented for a smooth mobile slider experience.

## Getting Started

### Prerequisites

- Node.js 18.x or later

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open `http://localhost:3000` in your browser.

### Production Build

```bash
pnpm build
pnpm start
```

## Component Architecture

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── MobileMenu.tsx
│   ├── HeroSection.tsx
│   ├── GreetingBadge.tsx
│   ├── Testimonial.tsx
│   ├── RatingExperience.tsx
│   ├── ServicesSection.tsx
│   ├── ServiceCard.tsx
│   ├── SliderIndicators.tsx
│   └── icons/
```

## Figma Accuracy & Design Implementation

### Visual Accuracy

- Strict adherence to spacing, typography, and color tokens defined in the Figma file.

### Responsive Design

- Optimized for Desktop (1440px) and Mobile (375px) with fluid scaling across intermediate sizes. Mobile layout features a touch-friendly Swiper slider.

### Asset Implementation

- SVGs and PNGs exported directly from Figma. High-vibrancy background textures blended using `mix-blend-screen`.

### Hero Composition

- Layered architecture with an arch backdrop, pop-out portrait, and pixel-aligned decorative scribbles.

### Service Card Cutout

- The bottom-right circular cutout is rendered using pure CSS radial gradient masks (`mask-image`) instead of static images for a crisp, high-performance finish.

## Design Notes & Figma Deviations

- **Navigation**: Header links point to page anchors (`#home`, `#services`, etc.).
- **Mobile Slider**: Swiper JS was integrated to provide a more robust touch slider experience on mobile devices.

## Accessibility & SEO

- **Semantic HTML**: Proper `<header>`, `<nav>`, `<main>`, and `<section>` tags.
- **Keyboard Access**: Focus indicators and bypass skip-links are included.
- **SEO**: Comprehensive metadata including OpenGraph, Twitter Cards, and JSON-LD structured data.

## Performance

| Desktop | Mobile |
| :---: | :---: |
| ![Desktop Performance](./docs/desktop.png) | ![Mobile Performance](./docs/mobile.png) |

- Optimized asset loading with Next.js `Image` component.

## Additional Polish

- Interactive hover effects (card lifts, diagonal arrow translation).
- Smooth scrolling for internal anchor links.
- ARIA attributes ensuring a fully accessible user experience.

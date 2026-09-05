# ACE INTERNATIONAL | Production Web Application

[![B2B Pharmaceutical Machinery](https://img.shields.io/badge/Industry-Pharmaceutical_Machinery-0066cc.svg)](https://github.com/UziarAhmed/ACE-International)
[![Architecture](https://img.shields.io/badge/Architecture-Modular_ES6_Components-0b1a30.svg)](https://github.com/UziarAhmed/ACE-International)
[![Accessibility](https://img.shields.io/badge/WCAG-2.1_AA_Compliant-10b981.svg)](https://github.com/UziarAhmed/ACE-International)
[![Security](https://img.shields.io/badge/Security-Strict_CSP_&_NoOpener-2563eb.svg)](https://github.com/UziarAhmed/ACE-International)

High-performance, accessible, and responsive B2B digital platform for **ACE INTERNATIONAL** (Established 1987), premier manufacturer and exporter of pharmaceutical machinery, tablet compression tooling, and cGMP replacement spare parts based in Mumbai, India.

---

## 🏛️ System Architecture

This codebase is built using a clean, framework-independent **Vanilla Modern Web Architecture**:
- **HTML5 Semantic Structure**: Descriptive headings, ARIA landmarks, and accessibility affordances.
- **Modular ES6 JavaScript**: Decoupled, single-responsibility modules coordinated by `app.js`.
- **Vanilla CSS Design System**: Custom property tokens (`--primary`, `--navy`, shadows, spacing) without heavy third-party CSS overhead.

```text
ace-international/
├── index.html                    # Semantic, accessible HTML5 production entrypoint
├── css/
│   └── style.css                 # Industrial design system, responsive breakpoints & tokens
├── js/
│   ├── app.js                    # Application orchestrator & lifecycle initializer
│   ├── data/
│   │   └── products.js           # Technical specifications, tooling specs & client directory
│   └── modules/
│       ├── carousel.js           # Expanding background equipment carousel (drag/touch/keyboard)
│       ├── coverage.js           # Product coverage gallery with live search & tab slider
│       ├── modal.js              # WCAG 2.1 AA dialog controller (focus trap & Escape handling)
│       ├── client-swap.js        # 48-partner client & OEM logo cloud switcher
│       ├── navigation.js         # Header elevation, smooth anchor scroll & mobile drawer
│       └── brochure.js           # Technical catalogue generator & printable document engine
├── assets/
│   ├── images/                   # Optimized machinery & compression tooling photography
│   │   ├── clients/              # Verified pharmaceutical client & OEM corporate marks
│   │   └── products/             # Product photography
│   └── hardcopy_sources/         # 431 extracted official hardcopy reference catalogue pages
├── tools/
│   └── data-extraction/          # Preserved PDF extraction, OCR & data compilation scripts
└── .gitignore                    # Production deployment ignores
```

---

## 🚀 Key Features & Interactive Components

1. **Expanding Machinery Carousel (`#categories`)**:
   - Motion-driven cards with dynamic track centering and boundary clamping.
   - Synchronized slide counter (`01 / 08`), interactive dots, and keyboard navigation (`ArrowLeft` / `ArrowRight`).
   - Touch swipe for mobile and mouse drag for desktop.

2. **Our Product Coverage & Solutions Gallery (`#coverage`)**:
   - Filterable pill tabs (`Machinery` vs `Spares & Tooling`) with an animated sliding indicator.
   - Debounced live search filtering through machinery, tooling, and OEM compatibility.
   - Real-time dynamic showcase preview with Quick Specs modal triggers.

3. **Accessible Technical Specification Modals**:
   - Comprehensive engineering parameters (station counts, output up to 2,16,000 tabs/hr, tooling types, metallurgy).
   - Trapped keyboard focus and automatic focus restoration.
   - `Escape` key and backdrop dismissal.

4. **Client & OEM Logo Cloud (`#clients`)**:
   - 48 verified partners categorized by Pharmaceutical Manufacturers and Machinery OEMs.
   - 3D batch-swap animation with pause-on-hover auto-rotation.

5. **Direct Quotation & Communication**:
   - One-click WhatsApp technical inquiry pre-filled with specific equipment models.
   - Email quotation hooks and downloadable official corporate brochure engine.

---

## 🔒 Security Hardening

- **Content Security Policy (CSP)**: Strict policy allowing only self-hosted resources, inline safety hashes, and Google Fonts.
- **Link Isolation**: All external outbound links include `rel="noopener noreferrer"` to prevent tab-nabbing and window manipulation.
- **Input Sanitization**: Dynamic DOM injections are sanitized through `textContent` and HTML escaping.

---

## ♿ Accessibility (WCAG 2.1 AA)

- **Keyboard Navigable**: All interactive components are accessible via `Tab`, `Shift+Tab`, `Enter`, `Space`, and Arrow keys.
- **Skip Link**: Top-level `<a href="#mainContent" class="skip-link">Skip to main content</a>` for screen readers and keyboard power users.
- **ARIA Semantics**: Proper `aria-expanded`, `aria-selected`, `aria-controls`, `aria-hidden`, and `role="tablist"` throughout.
- **Screen Reader Support**: `.sr-only` utility classes provide descriptive labels for icon-only buttons.
- **Visible Focus States**: Dedicated `:focus-visible` styling with high-contrast outlines.

---

## ⚡ Performance Optimization

- **Zero Heavy Dependencies**: Pure browser-native ES modules—no bloated bundles, virtual DOM overhead, or node runtime required in production.
- **Asset Loading**: `loading="lazy"` and `decoding="async"` across non-critical imagery; `loading="eager"` on the hero image.
- **Debounced Handlers**: Window resize and search input listeners are debounced using `requestAnimationFrame` to maintain smooth 60 FPS performance.

---

## 💻 Local Development

Run with any static web server:

```bash
# Using Python
python -m http.server 3000

# Using Node (npx)
npx serve . -p 3000
```

Open `http://localhost:3000` in your web browser.

---

## 📄 License & Ownership

© 2026 ACE INTERNATIONAL. All rights reserved. Trade Name: ACE PHARMA SOLUTIONS.
Regd. Office: Andheri (E), Mumbai - 400059 | Works: Kurla, Mumbai - 400072, India.

# Lumina – Responsive Landing Page

A modern, fully responsive landing page built with vanilla HTML, CSS, and JavaScript. Features glassmorphism aesthetics, smooth scroll animations, and a complete multi-section layout.

## ✨ Features

- **Glassmorphism design** — frosted-glass nav, cards, and footer with animated blur blobs
- **Fully responsive** — mobile (≤ 420px), tablet (≤ 768px), and desktop layouts
- **Hamburger menu** — animated 3-bar → X toggle with full-screen mobile overlay
- **Scroll animations** — IntersectionObserver-powered reveal on every section
- **Navbar scroll-shrink** — navbar compacts after 50px of scroll
- **Mouse parallax** — background blobs subtly follow the cursor
- **Font Awesome 6 icons** — consistent iconography throughout
- **Google Fonts (Inter)** — premium typography

## 🗂️ Project Structure

```
Responsive_Landing_Page/
├── index.html        # Full semantic HTML structure
├── css/
│   └── style.css     # Complete design system + responsive CSS
├── js/
│   └── index.js      # All interactivity (hamburger, scroll, parallax)
└── images/
    └── logo.svg      # Gradient hexagon SVG logo
```

## 🚀 Sections

| Section | Description |
|---|---|
| **Nav** | Fixed, glassmorphic navbar with scroll-shrink |
| **Hero** | Headline, CTA buttons, mock code card with stats |
| **Features** | 6-card grid (bolt, palette, mobile, lock, link, chart) |
| **About** | Split layout with testimonial card and orbit ring |
| **CTA Banner** | Full-width call-to-action panel |
| **Footer** | Brand, links (Product / Company / Legal), and social icons |

## 🛠️ Getting Started

No build tools required — open directly in a browser or use Live Server.

```bash
# With VS Code Live Server
# Right-click index.html → Open with Live Server

# Or just open the file
start index.html
```

## 🎨 Design Tokens

| Token | Value |
|---|---|
| Primary | `#6c63ff` (violet) |
| Accent | `#00fdea` (cyan) |
| Background | `#f0f0f8` |
| Font | Inter (Google Fonts) |
| Card radius | `20px` |
| Button radius | `50px` |

## 📄 License

MIT © [Rajjit Laishram](https://github.com/rajjitlai)

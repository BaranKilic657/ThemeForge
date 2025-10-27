# 🎨 ThemeForge

> **A dynamic React/Next.js design system playground for testing and experimenting with themes, headers, footers, and page layouts in real-time.**

ThemeForge is an interactive component showcase that lets designers and developers instantly preview different design combinations without touching a single line of code. Switch between 37+ themes, 15+ header styles, and multiple footer variations with the click of a button.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

---

## ✨ Features

### 🎭 **37+ Beautiful Themes**
Switch between carefully crafted light and dark theme pairs:
- **Modern** - Clean, professional design
- **Pastel** - Soft, lifestyle-oriented
- **Tech** - Futuristic, developer-focused
- **Organic** - Natural, eco-friendly
- **Editorial** - Typography-heavy, bold
- **Cosmic** - Space-themed, imaginative
- **Aqua** - Clean, water-inspired
- **Velvet** - Luxurious, elegant
- **Dawn** - Warm, welcoming
- **Cobalt** - Professional, tech-focused
- **Terminal** - Developer, coding-oriented
- **Sakura** - Delicate, beauty-focused
- **Magma** - Bold, energetic
- **Miami** - Vibrant, trendy
- **Cafe** - Cozy, inviting
- And many more...

### 🧩 **20+ Header Styles**
Instantly swap between different header designs:
- Classic - Traditional navigation
- Center Nav - Centered links
- Center Reveal - Center reveal effect
- Compact Icons - Icon-based compact design
- Diagonal Split - Diagonal split design
- Dual Layer - Parallax layered effect
- Elevated Card - Floating card style
- Floating Nav - Floating navigation bar
- Glass Nav - Glassmorphism design
- Gradient Hero - Gradient backgrounds
- Interactive - Animation-rich
- Minimal Bar - Ultra-minimal
- Pulse - Pulsing accent effects
- Reveal Slide - Slide animations
- Scroll Shrink - Shrinking header on scroll
- Segmented - Segmented controls
- Split Accent - Split design patterns
- Timeline - Scroll progress timeline
- Underline Nav - Underlined active states
- Wave Bar - Wavy animated header

### 📐 **20+ Footer Variations**
Choose from different footer layouts:
- Accent Bar - Pulsing accent strip
- Aurora - Moving gradient background
- Center Logo - Centered brand focus
- Classic Grid - Traditional column layout
- Compact Bar - Minimalist single line
- Diagonal Split - Angular split design
- Divider Accent - Accent line separator
- Dual Layer - Layered depth effect
- Floating CTA - Elevated call-to-action
- Glass Panel - Glassmorphism effect
- Gradient Wave - Wavy gradient overlay
- Interactive Links - Animated hover links
- Minimal Centered - Simple centered layout
- Mosaic Grid - Creative grid pattern
- Newsletter CTA - Email signup focus
- Scroll Progress - Progress indicator bar
- Showcase Grid - Rich content grid
- Split Accent - Split color sections
- Stacked Info - Vertically stacked layout
- Tagline Bar - Tagline with gradient

### 🎯 **Dynamic Component Switching**
- **Live Preview** - See changes instantly
- **No Code Changes** - Switch components via UI
- **Persistent Settings** - Preferences saved to localStorage
- **Floating Switchers** - Easy access to all options

### 🎨 **Comprehensive Design System**
- CSS custom properties for easy theming
- Consistent color palettes across all themes
- Reusable utility classes
- Smooth transitions and animations
- Responsive design patterns

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/themeforge.git
   cd themeforge
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🎮 How to Use

### Switching Themes
1. Click the **🎨 Theme button** in the bottom-right corner
2. Browse through 37+ theme options
3. Click any theme to apply it instantly
4. Your selection is automatically saved

### Switching Headers
1. Click the **📐 Header button** on the right side (third from bottom)
2. Choose from 20+ header styles
3. See the header change in real-time
4. Selection persists across page refreshes

### Switching Footers
1. Click the **🦶 Footer button** in the bottom-right corner
2. Browse through 20+ footer styles
3. Footer updates instantly
4. Your preference is automatically saved

---

## 🏗️ Project Structure

```
themeforge/
├── app/
│   ├── globals.css          # Theme definitions & design system
│   ├── layout.tsx            # Root layout with dynamic components
│   └── page.tsx              # Showcase page
├── components/
│   ├── themeswitcher.tsx     # Theme switching UI
│   ├── headerswitcher.tsx    # Header switching UI
│   ├── footerswitcher.tsx    # Footer switching UI
│   ├── dynamicheader.tsx     # Dynamic header loader
│   └── dynamicfooter.tsx     # Dynamic footer loader
├── headers/
│   ├── header_classic.tsx
│   ├── header_centernav.tsx
│   ├── header_duallayer.tsx
│   └── ...                   # 20+ header variations
├── footers/
│   ├── footer_classicgrid.tsx
│   ├── footer_accentbar.tsx
│   ├── footer_taglinebar.tsx
│   └── ...                   # 20+ footer variations
└── public/
    └── logo/
```

---

## 🎨 Design System

### CSS Variables
All themes use consistent CSS custom properties:

```css
--color-bg              /* Background color */
--color-surface         /* Surface/card color */
--color-surface-alt     /* Alternative surface */
--color-text            /* Primary text */
--color-text-muted      /* Secondary text */
--color-accent          /* Primary accent */
--color-accent-hover    /* Accent hover state */
--color-border          /* Border color */
--gradient-bg           /* Background gradient */
```

### Utility Classes
Reusable classes for consistent styling:

**Backgrounds**
- `.bg-surface` - Primary surface
- `.bg-surface-alt` - Alternative surface
- `.bg-surface-gradient` - Gradient surface

**Text**
- `.text-main` - Primary text color
- `.text-muted` - Secondary text
- `.text-accent` - Accent color
- `.text-accent-hover` - Hover-enabled accent text

**Buttons**
- `.accent` - Solid accent button
- `.accent-outline` - Outlined button
- `.btn-gradient` - Gradient button
- `.btn-gradient-secondary` - Secondary gradient

**Effects**
- `.shadow-surface` - Subtle shadow
- `.shadow-accent` - Accent-colored shadow
- `.hover-lift` - Lift on hover
- `.fade-in` - Fade in animation
- `.pulse-accent` - Pulsing accent animation

---

## 🛠️ Adding New Components

### Adding a New Theme
1. Open `app/globals.css`
2. Add theme definition:
   ```css
   [data-theme='mytheme-light'] {
     --color-bg: #ffffff;
     --color-accent: #3b82f6;
     /* ... other variables */
   }
   ```
3. Update `components/themeswitcher.tsx` themes array

### Adding a New Header
1. Create `headers/header_myheader.tsx`
2. Export default function
3. Add to `components/dynamicheader.tsx` import map
4. Add to `components/headerswitcher.tsx` headers array

### Adding a New Footer
1. Create `footers/footer_myfooter.tsx`
2. Export default function component
3. Add to `components/dynamicfooter.tsx` import map
4. Add to `components/footerswitcher.tsx` footers array

---

## 🔮 Roadmap

- [x] Theme switcher with 37+ themes
- [x] Header switcher with 20+ styles
- [x] Footer switcher with 20+ variations
- [x] Dynamic component loading
- [x] LocalStorage persistence
- [ ] Page layout templates
- [ ] Main body/content section variations
- [ ] Export selected combination as code
- [ ] Combination presets (save favorite combos)
- [ ] Copy CSS variables functionality
- [ ] Color palette customizer
- [ ] Component preview grid view
- [ ] Dark mode auto-detect
- [ ] Keyboard shortcuts for switchers

---

## 💡 Use Cases

- **Rapid Prototyping** - Test different design directions quickly
- **Client Presentations** - Show multiple design options in real-time
- **Design System Development** - Build and test component libraries
- **Learning Resource** - Study different design patterns
- **Portfolio Showcase** - Demonstrate design versatility
- **Template Library** - Reusable components for projects

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Ideas for Contributions
- New theme variations
- Additional header/footer designs
- Animation improvements
- Accessibility enhancements
- Documentation improvements

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [Next.js 15](https://nextjs.org/)
- Styled with CSS custom properties
- Fonts by [Google Fonts](https://fonts.google.com/) (Geist Sans & Mono)
- Icons: Emoji-based for universal support

---

## 📧 Contact

**Project Maintainer**: Baran Kilic

- GitHub: [@BaranKilic657](https://github.com/BaranKilic657)

---

<div align="center">

**[⭐ Star this repo](https://github.com/yourusername/themeforge)** if you find it useful!

Made with ❤️ for designers and developers

</div>

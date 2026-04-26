# Verbalify — Conceptual AI Language Learning Product SaaS Microsite 🌎🗣

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-EF008F?style=flat&logo=framer)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?style=flat&logo=reactrouter)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7-EC5990?style=flat&logo=reacthookform)

> A conceptual SaaS product multi-page microsite for an AI-powered language learning platform. Built as a frontend portfolio project to demonstrate real-world React skills, modern UI/UX patterns, and production-level component architecture.

---

## 🔗 Live Demo

**🌐[View Live Site](https://verbalify-jega1312.vercel.app)**

---

## 📸 Preview

### Desktop View 🖥
![Homepage](./screenshots/home.png)
![Features Page](./screenshots/features.png)
![Contact Page](./screenshots/contact.png)

### Mobile View 📱
![Mobile View](./screenshots/mobile.png)

---

## 💡 About The Project
 
Verbalify is a **fictional language learning SaaS microsite** designed to mirror the quality and structure of real-world product marketing sites. The project showcases a complete multi-page experience with seamless navigation, scroll-triggered animations, and responsive design across all device sizes.
 
**Brand Identity:**
- **Tagline:** "Language learning, beautifully simplified"
- **Mission:** Breaking language barriers, one conversation at a time

---

## ⚙️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | Component-based UI |
| Vite | 6 | Build tool & dev server |
| Tailwind CSS | 4 | Utility-first styling |
| Framer Motion | 12 | Scroll & entrance animations |
| React Router DOM | 6 | Multi-page routing |
| React Hook Form | 7 | Form state & validation |
| Swiper.js | 11 | Testimonials carousel |
| Random User API | — | Testimonial and teams profile pictures |
| React International Phone | 3 | Phone input with dial codes |
| React Icons | 5 | Icon library |

---

## ✨ Key Features
 
- **Multi-Page Architecture** — 6 full pages with React Router DOM navigation (including 404)
- **Scroll-Triggered Animations** — Entrance animations on scroll using Framer Motion's `useInView`
- **Fully Responsive** — Mobile-first design across all screen sizes
- **Active Navigation State** — Navbar highlights current page using React Router's `useLocation`
- **Testimonials Carousel** — Auto-playing carousel with custom navigation & pagination using Swiper.js
- **Live API Integration** — Fetches real profile pictures from Random User API for team members
- **Stagger Animations** — Card entrance animations with controlled delays
- **Consistent Brand System** — Green-based color palette with cohesive typography
- **Mobile Hamburger Menu** — Animated hamburger with full-screen overlay
- **Smooth Page Transitions** — Seamless navigation between pages
- **Scroll to Top** — Auto-scroll to top on route changes

---

## 🧠 React Concepts Demonstrated

| Concept | Where Used |
|---|---|
| `useState` | All components |
| `useEffect` | API fetch for team profiles, Swiper initialization |
| `useRef` + `useInView` | Scroll-triggered animations |
| React Router DOM | Multi-page navigation |
| `useLocation` | Active nav state detection |
| `useNavigate` | Programmatic navigation (404 redirect) |
| Container/Item Variants | Stagger animations pattern |
| Third-Party Integration | Swiper.js, Random User API |
| Component Reusability | Custom carousel controls, mapped content arrays |
| Responsive Design | Mobile-first Tailwind classes |
| Custom Font Integration | DM Sans, Sora fonts |
| Route-based Scroll Reset | ScrollToTop component pattern |

---

## 📁 Project Structure

```
src/
├── assets/
│   └── components/
│       ├── Navbar.jsx                    # Fixed navbar with active page detection
│       ├── Footer.jsx                    # Links and social icons
│       ├── CarouselNavButtons.jsx        # Custom Swiper navigation buttons
│       ├── CarouselPaginationDots.jsx    # Custom Swiper pagination dots
│       └── ScrollToTop.jsx               # Scroll to top on page navigation
├── pages/
│   ├── Home.jsx                  # Landing page with hero section
│   ├── About.jsx                 # Mission, values, team section
│   ├── Features.jsx              # Product features showcase
│   ├── Pricing.jsx               # Pricing plans
│   ├── Contact.jsx               # Contact form
│   └── NotFound.jsx              # 404 error page
├── App.jsx                        # Route configuration
├── main.jsx                       # App entry point
└── index.css                      # Global styles & Tailwind imports
public/
└── screenshots/                   # Project preview images
node_modules/
package.json                       # Dependencies and scripts
index.html                         # SEO meta tags
vite.config.js                     # Vite configuration
vercel.json                        # Vercel deployment config
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/jega1312/verbalify.git

# Navigate into the project
cd verbalify

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 📦 NPM Packages Used

```bash
npm install tailwindcss @tailwindcss/vite
npm install react-router-dom
npm install react-hook-form
npm install swiper
npm install react-international-phone
npm install react-icons
npm install motion
```
> **Note:** React, ReactDOM, and Vite are scaffolded automatically via `npm create vite@latest` and do not require separate installation.
---

## 🎨 Design Decisions

### Color Palette
- **Primary:** Green-based gradient (`green-200`, `green-500` accents)
- **Backgrounds:** White, `slate-50`, `slate-950` for depth
- **Text:** `slate-950` (headings), `slate-600` (body), white on dark sections
### Typography
- **DM Sans** — Bold, semibold weights for headings
- **Sora** — Regular, medium, bold weights for body text and UI elements
### Animation Strategy
- **Stagger Animations** — Cards appear sequentially with 0.4s delay between items
- **Scroll Triggers** — Animations fire once when element enters viewport (`once: true`)
- **Consistent Timing** — 1.0s duration with `easeOut` easing across all animations
### Layout Patterns
- **Grid-Based Sections** — Responsive grids (1 col mobile → 2-4 cols desktop)
- **Fixed Navbar** — Persistent navigation with active state indication
- **Section Spacing** — Consistent `py-20` vertical padding for all sections

---
 
## 🎯 Pages Overview
 
### 1. Home (`/`)
- Hero section with brand messaging
- Key statistics and features
- CTA buttons for navigation

### 2. About (`/about`)
- **Mission Statement** — Core values and principles
- **Statistics Section** — Practice hours, fluency rates, AI support
- **Our Mission Cards** — 4 value propositions with hover effects
- **Team Section** — 4 team members with Random User API profiles
- **CTA Section** — Call-to-action linking to Contact page

### 3. Features (`/features`)
- Comprehensive feature showcase
- Interactive feature cards
- Use case demonstrations

### 4. Pricing (`/pricing`)
- Pricing tiers and plans
- Feature comparison
- Plan selection flow

### 5. Contact (`/contact`)
- Contact form
- Support information
- Social links

### 6. Not Found (`*`)
- 404 error page
- Navigation back to home

---
 
## 🔄 Animation Implementation
 
### Container/Item Pattern
```javascript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};
 
const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.0, ease: "easeOut" },
  },
};
```
 
### Scroll-Triggered Animation
```javascript
const ref = useRef(null);
const inView = useInView(ref, { once: true, amount: 0.1 });
 
<motion.div
  ref={ref}
  variants={containerVariants}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
>
  {/* Content */}
</motion.div>
```
 
---
 
## 🌐 API Integration
 
### Random User API
```javascript
useEffect(() => {
  fetch("https://randomuser.me/api/?results=4&seed=verbalify")
    .then((response) => response.json())
    .then((data) => setUsers(data.results))
    .catch((error) => console.error("Failed to fetch users:", error));
}, []);
```
 
**Purpose:** Generate consistent team member profile pictures  
**Seed:** `verbalify` ensures same profiles on every load
 
---
 
## 🎠 Swiper.js Custom Components
 
### Architecture Pattern
Instead of using Swiper's default navigation/pagination, Verbalify implements **custom reusable components** for better design control:
 
#### CarouselNavButtons.jsx
- Custom prev/next navigation buttons
- Integrates with Swiper's `useSwiper` hook
- Styled to match brand design system
#### CarouselPaginationDots.jsx
- Custom pagination indicator
- Active state synchronization
- Click-to-slide functionality
**Benefits:**
- Full design control over carousel UI
- Reusable across different carousel instances
- Consistent with Verbalify brand aesthetics
- No default Swiper CSS conflicts

---
 
## 📱 Responsive Breakpoints
 
| Breakpoint | Width | Usage |
|---|---|---|
| Mobile | < 768px | 1-column layouts |
| Tablet | 768px - 1024px | 2-column layouts |
| Desktop | > 1024px | 3-4 column layouts |

---

## 👨‍💻 Author

**Jegathiswaran Thiaghu**

[![GitHub](https://img.shields.io/badge/GitHub-jega1312-181717?style=flat&logo=github)](https://github.com/jega1312)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-jegathiswaran--thiaghu-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/jegathiswaran-thiaghu/)
[![Portfolio](https://img.shields.io/badge/Portfolio-jega1312.github.io-0A66C2?style=flat)](https://jega1312.github.io/portfolio/)

---

## 📝 License

This project is open source and available under the MIT License ⚖.

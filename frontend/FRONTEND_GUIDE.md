# PolicyNav Frontend - Modern, Accessible, Trust-First UI

## 🎨 Design Philosophy

PolicyNav's frontend is built with **trust, accessibility, and modern aesthetics** in mind:

- **Trust-First Design**: Clean, transparent interfaces that build confidence
- **Accessibility**: WCAG 2.1 AA compliant with high contrast mode support
- **Dark & Light Modes**: Full theme support for user preference
- **Government Platform Aesthetic**: Professional look inspired by official portals
- **Hackathon-Ready**: Modern animations, gradients, and React Icons for visual appeal

## 🏗️ Architecture

```
src/
├── App.jsx                 # Main app with routing & theme provider
├── pages/                  # Page components
│   ├── Home.jsx           # Hero & problem statement
│   ├── WhatIsUdyara.jsx   # About PolicyNav
│   ├── Features.jsx        # Core capabilities showcase
│   ├── HowItWorks.jsx     # Technical pipeline explanation
│   ├── WhyUdyara.jsx      # Trust principles & comparison
│   ├── Policies.jsx        # Expandable policy list
│   ├── Roadmap.jsx        # Timeline & future vision
│   └── ChatBot.jsx        # Interactive agent interface
├── components/
│   ├── Navbar.jsx         # Sticky header with theme toggle
│   └── Footer.jsx         # Comprehensive footer
├── context/
│   └── ThemeContext.jsx   # Global dark/light mode state
├── services/
│   └── api.js             # Backend API calls
├── index.css              # Global styles & animations
└── main.jsx               # React entry point
```

## ✨ Key Features

### 1. **Dark & Light Mode**
- Toggle button in navbar
- Persisted user preference (localStorage)
- Smooth transitions between themes
- High contrast for accessibility

### 2. **Modern Animations**
- Fade-in on page load
- Slide-in from edges
- Hover animations on cards
- Loading states with animated dots
- Smooth scroll behavior

### 3. **Responsive Design**
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Mobile menu for navigation
- Touch-friendly buttons & spacing

### 4. **Component Library**
- React Icons (5.0.1) for beautiful SVG icons
- Tailwind CSS 4 for styling
- Custom animations & transitions
- Reusable pattern components

## 🎯 Page Overview

### Home
- Hero section with gradient text
- Problem statement with 3-column cards
- Solution preview
- Call-to-action buttons

### What is Udyara
- Mission & definition
- Problem we address
- Current policy coverage
- Trust principles

### Features
- 4 core capabilities with icons
- Feature workflow diagram
- Real-world use cases
- Interactive examples

### How It Works
- 5-step pipeline visualization
- Why this approach matters
- Technical components breakdown
- Trust & transparency explanation

### Why Udyara
- PolicyNav vs Generic Chatbots comparison table
- Trust principles breakdown
- Why accuracy matters
- Built for real users

### Policies
- Expandable policy cards
- Benefits & eligibility lists
- Status indicators (Active/Coming Soon)
- Policy details modal

### Roadmap
- Timeline with status (Completed/In Progress/Upcoming)
- Phase-based breakdown
- Long-term vision statement
- Impact metrics

### ChatBot
- Message interface with timestamps
- Suggested query buttons
- Loading states
- Message history
- Dark/light mode support

## 🛠️ Setup & Installation

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm lint
```

## 🎨 Styling & Customization

### Color Palette
- **Primary**: Indigo (indigo-600)
- **Secondary**: Purple (purple-600)
- **Accent**: Pink (pink-600)
- **Light Mode**: White & Gray
- **Dark Mode**: Slate-950 & Slate-900

### Typography
- **Headings**: Bold, up to 6xl
- **Body**: Regular, optimized for readability
- **Small**: Gray text for secondary information

### Animations
```css
.fade-in { animation: fade-in 0.5s ease-out; }
.slide-in-from-left-4 { animation: slide-in-from-left 0.5s ease-out; }
.slide-in-from-right-4 { animation: slide-in-from-right 0.5s ease-out; }
.slide-in-from-top-2 { animation: slide-in-from-top 0.3s ease-out; }
.slide-in-from-bottom-2 { animation: slide-in-from-bottom 0.3s ease-out; }
```

## 🌐 API Integration

The frontend expects these backend endpoints:

```javascript
// Policy list
GET /api/policies

// Policy details
GET /api/policies/:id

// Eligibility check
POST /api/eligibility
{ userId: string, policyId: string, data: object }

// Chat/Query
POST /api/chat
{ message: string, context: object }

// Policy search
GET /api/search?q=query
```

See [services/api.js](./src/services/api.js) for implementation.

## 📱 Responsive Breakpoints

| Device      | Width    | Usage        |
|------------|----------|--------------|
| Mobile     | < 640px  | Full width   |
| Tablet     | 640-1024 | 2 columns    |
| Desktop    | > 1024px | 3-4 columns  |

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- High contrast mode support
- Screen reader friendly
- Color contrast ratio 4.5:1+

## 🚀 Performance

- Code splitting with React Router
- Image optimization
- CSS minification
- Fast refresh during development
- Optimized animations (using CSS, not JS)

## 📦 Dependencies

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router-dom": "^7.12.0",
  "react-icons": "^5.0.1",
  "axios": "^1.13.2"
}
```

Dev dependencies include Vite, Tailwind CSS, ESLint, and PostCSS.

## 🔄 Theme Implementation

### Using Theme in Components

```jsx
import { useTheme } from '../context/ThemeContext';

function MyComponent() {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <div className={isDark ? 'bg-slate-950' : 'bg-white'}>
      {/* Content */}
    </div>
  );
}
```

### Default Tailwind Dark Mode Classes

```jsx
<div className="bg-white dark:bg-slate-950 text-gray-900 dark:text-white">
  Automatic dark mode switching
</div>
```

## 🎯 Best Practices

1. **Always use `dark:` prefixes** for dark mode styling
2. **Keep animations subtle** - don't overdo it
3. **Mobile-first approach** - design for small screens first
4. **Semantic HTML** - use proper heading hierarchy
5. **Accessibility first** - test with keyboard & screen readers
6. **Component reuse** - create shared patterns
7. **Keep CSS in Tailwind** - avoid custom CSS when possible

## 📝 Component Guidelines

### Creating a New Page

```jsx
import { HiIconName } from 'react-icons/hi2';

export default function NewPage() {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Content */}
      </section>
    </div>
  );
}
```

## 🐛 Troubleshooting

### Dark mode not working
- Check if ThemeProvider wraps App in main.jsx
- Verify localStorage permissions
- Check browser console for errors

### Animations not smooth
- Use CSS animations instead of JS when possible
- Check for conflicting will-change properties
- Profile with browser DevTools

### Mobile menu not responsive
- Check viewport meta tag in index.html
- Test with actual mobile device
- Check CSS media queries

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com)
- [React Router Docs](https://reactrouter.com)
- [React Icons](https://react-icons.github.io/react-icons)
- [Vite Docs](https://vitejs.dev)

## 🎉 Ready for Production

The frontend is:
- ✅ Fully responsive
- ✅ Dark mode enabled
- ✅ Accessible
- ✅ Animated & modern
- ✅ SEO-friendly structure
- ✅ Performance optimized
- ✅ Ready for backend integration

Deploy to Vercel, Netlify, or any static hosting with:
```bash
npm run build
# Upload `dist/` folder
```

---

**Built with ❤️ for PolicyNav - Empowering Citizens Through Transparent Governance**

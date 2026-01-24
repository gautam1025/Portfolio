# Gautam Gupta Portfolio

A modern, responsive personal portfolio website showcasing development skills, projects, and experience. Built with cutting-edge web technologies featuring smooth animations, interactive elements, and a gaming-inspired design aesthetic.

## 🚀 Live Demo

[View Live Portfolio](https://gautam4300.vercel.app/)

## 🛠️ Tech Stack

- **Frontend Framework:** React 18 with Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Deployment:** Vercel

## ✨ Features

- **🎮 Animated Hero Section** - Dynamic text animations and call-to-action buttons
- **🎯 Interactive Skills Cards** - 3D tilt hover effects with smooth transitions
- **📁 Projects Showcase** - Featured and regular project cards with hover animations
- **📈 Experience Timeline** - Professional experience displayed in interactive cards
- **🏆 Certifications Section** - Achievements and certifications grid layout
- **📧 Contact Form** - Functional contact form with validation
- **📄 Resume Download** - Direct download button for resume PDF
- **✨ Particle Background** - Animated particle system for visual appeal
- **🌟 Parallax Effects** - Mouse-following glow and spotlight animations
- **📱 Fully Responsive** - Optimized for all device sizes
- **🎨 Modern UI** - Gaming-inspired design with dark theme

## 📸 Screenshots

### Desktop View
![Portfolio Desktop](https://via.placeholder.com/800x600/0b0f19/ffffff?text=Portfolio+Desktop+Screenshot)

### Mobile View
![Portfolio Mobile](https://via.placeholder.com/400x600/0b0f19/ffffff?text=Portfolio+Mobile+Screenshot)

## 📁 Project Structure

```
gautam-gupta-portfolio/
├── public/
│   ├── icons/
│   ├── projects/
│   ├── noise.png
│   ├── preview.png
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── achievements/
│   │   │   └── AchievementCard.jsx
│   │   ├── contact/
│   │   │   ├── ContactForm.jsx
│   │   │   └── ContactInfo.jsx
│   │   ├── effects/
│   │   │   ├── BackgroundEffects.jsx
│   │   │   └── ParticlesBackground.jsx
│   │   ├── experience/
│   │   │   └── ExperienceCard.jsx
│   │   ├── projects/
│   │   │   └── ProjectCard.jsx
│   │   ├── skills/
│   │   │   └── SkillCard.jsx
│   │   ├── ui/
│   │   │   ├── BaseCard.jsx
│   │   │   └── TiltCard.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   ├── achievements.js
│   │   ├── experience.js
│   │   └── projects.js
│   ├── hooks/
│   │   └── useParallax.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gautam1025/Portfolio.git
   cd gautam-gupta-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` to view the portfolio.

## 🏗️ Build for Production

1. **Create production build:**
   ```bash
   npm run build
   ```

2. **Preview the build:**
   ```bash
   npm run preview
   ```

The built files will be in the `dist/` directory, ready for deployment.

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository:**
   - Import your project on [Vercel](https://vercel.com)
   - Connect your GitHub repository

2. **Configure build settings:**
   - **Framework Preset:** Vite
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

3. **Deploy:**
   - Vercel will automatically deploy on every push to main branch

### Netlify

1. **Connect repository:**
   - Import project on [Netlify](https://netlify.com)
   - Link your GitHub repository

2. **Build settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

3. **Deploy:**
   - Netlify will build and deploy automatically

## 🎨 Customization Guide

### Personal Information

1. **Update hero section:**
   - Edit `src/components/Hero.jsx`
   - Change name, role, and description

2. **Modify contact information:**
   - Update `src/components/contact/ContactInfo.jsx`
   - Add your email, social links, and contact details

### Content Updates

1. **Skills section:**
   - Edit `src/data/skills.js` for skills data
   - Modify `src/components/Skills.jsx` for layout

2. **Projects:**
   - Update `src/data/projects.js` with your projects
   - Add project images to `public/projects/`

3. **Experience:**
   - Modify `src/data/experience.js`
   - Update timeline data

4. **Achievements:**
   - Edit `src/data/achievements.js`
   - Add certification images

### Styling Customization

1. **Color scheme:**
   - Update Tailwind classes in components
   - Modify CSS variables in `src/index.css`

2. **Animations:**
   - Adjust Framer Motion settings in components
   - Modify animation variants and transitions

### Adding New Sections

1. **Create new component:**
   - Add JSX file in `src/components/`
   - Import and render in `src/App.jsx`

2. **Add data file:**
   - Create JS file in `src/data/`
   - Export data array for the component

## 🔮 Future Improvements

- [ ] Add dark/light theme toggle
- [ ] Implement blog section with MDX
- [ ] Add project filtering and search
- [ ] Integrate with headless CMS
- [ ] Add loading animations
- [ ] Implement contact form backend
- [ ] Add analytics tracking
- [ ] Optimize for Core Web Vitals
- [ ] Add internationalization (i18n)

## 👨‍💻 Author

**Gautam Gupta**

- Portfolio: [gautam4300.vercel.app](https://gautam4300.vercel.app/)
- LinkedIn: [linkedin.com/in/gautam-gupta](https://linkedin.com/in/gautam-gupta)
- GitHub: [github.com/gautam1025](https://github.com/gautam1025)
- Email: [your.email@example.com](mailto:your.email@example.com)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion

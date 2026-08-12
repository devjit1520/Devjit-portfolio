<div align="center">

<img src="./docs/portfolio-cover.svg" width="100%" alt="Devjit Mondal — Frontend Developer Portfolio" />

<br/>

# Devjit Mondal — Developer Portfolio

### Frontend Developer Portfolio built with React

A modern, responsive and animated portfolio showcasing frontend projects, technical skills, experience and contact information through a polished single-page interface.

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Portfolio-111111?style=for-the-badge&logo=vercel&logoColor=ffffff)](https://portfolio-devjit.vercel.app/)
[![React](https://img.shields.io/badge/React-19-111111?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-111111?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4)](https://tailwindcss.com/)
[![EmailJS](https://img.shields.io/badge/EmailJS-Contact_Form-111111?style=for-the-badge&logo=gmail&logoColor=EA4335)](https://www.emailjs.com/)

</div>

---

## Overview

This portfolio is the central showcase for my work as a **Frontend Developer**.

It is designed as more than a static profile page: the application combines responsive layouts, reusable React components, animated interactions, project filtering, a professional contact workflow and a consistent visual system to present my frontend skills and real-world projects clearly.

The site is built as a client-side React application and deployed on Vercel.

---

## Live Portfolio

**Production:** https://portfolio-devjit.vercel.app/

---

## Portfolio Highlights

- Premium responsive single-page interface
- Animated loading experience
- Fixed responsive navigation
- Scroll progress indicator
- Back-to-top interaction
- Hero section with strong developer branding
- About and skills presentation
- Filterable project showcase
- Experience section
- EmailJS-powered contact form
- Client-side form validation
- Honeypot spam protection
- Loading, success and error states for form submission
- Social and professional contact links
- Resume access
- Responsive support across mobile, tablet and desktop
- Motion-driven interactions with Framer Motion
- Vercel deployment

---

## Main Sections

### Hero

Introduces my role, frontend focus and primary calls to action through a visually prominent landing section.

### About

Presents my background, development focus and approach to building modern web interfaces.

### Skills

Organizes frontend technologies and development tools into an easy-to-scan skills experience.

### Projects

Showcases selected work with project previews, technology tags, feature lists, source-code links and live demos.

The project section also supports filtering by technology category.

### Experience

Presents my development journey and relevant experience in a structured timeline-style section.

### Contact

Provides a complete recruiter/client contact flow with validation, loading states and EmailJS submission.

---

## Featured Projects

### FinTrack Pro

Personal finance application for managing transactions, budgets, goals and financial analytics.

**Stack:** React, JavaScript, Tailwind CSS, Framer Motion, Recharts

- Repository: https://github.com/devjit1520/fintrack
- Live: https://fintrack-devjit.vercel.app/

### TaskBloom

Responsive task-management application with CRUD operations, priorities, deadlines, filtering, drag-and-drop sorting and LocalStorage persistence.

**Stack:** HTML, CSS, JavaScript, Tailwind CSS, SortableJS, LocalStorage

- Repository: https://github.com/devjit1520/Todo_Manager

### QuizMaster

Gamified frontend quiz platform with configurable quizzes, XP progression, achievements, daily challenges, analytics and persistent progress.

**Stack:** React, JavaScript, Tailwind CSS, Framer Motion, LocalStorage

- Repository: https://github.com/devjit1520/quiz_application
- Live: https://quiz-application-lyart-two.vercel.app/

---

## Contact Form Architecture

The contact form uses **EmailJS** so visitors can send messages directly from the portfolio without a custom backend server.

The contact workflow includes:

- Required-field validation
- Email-format validation
- Minimum and maximum message-length checks
- Submission loading state
- Success feedback
- Error feedback
- Honeypot field for basic bot/spam protection
- Environment-based EmailJS configuration

The EmailJS integration is isolated inside:

```text
src/services/emailService.js
```

This keeps external service configuration separate from UI components.

---

## Tech Stack

| Area | Technology |
|---|---|
| UI Library | React 19 |
| Language | JavaScript ES6+ |
| Styling | Tailwind CSS 4 |
| Build Tool | Vite 8 |
| Animation | Framer Motion |
| Contact | EmailJS Browser SDK |
| Icons | React Icons |
| Deployment | Vercel |

Additional frontend libraries in the project include React CountUp, React Scroll, React Type Animation and tsParticles.

---

## Application Architecture

The portfolio is organized by responsibility rather than placing all UI logic inside a single component.

```text
App
│
├── Common UI
│   ├── Loading Screen
│   ├── Scroll Progress
│   └── Back To Top
│
├── Layout
│   └── Navbar
│
└── Sections
    ├── Hero
    ├── About
    ├── Skills
    ├── Projects
    ├── Experience
    └── Contact
```

The root `App.jsx` coordinates the main page structure and loading state, while each major portfolio area remains separated into reusable components.

---

## Project Structure

```text
Devjit-portfolio/
│
├── public/
│   ├── projects/
│   ├── Devjit_Mondal.pdf
│   └── favicon.svg
│
├── docs/
│   └── portfolio-cover.svg
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   └── sections/
│   ├── data/
│   ├── hooks/
│   ├── services/
│   │   └── emailService.js
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/devjit1520/Devjit-portfolio.git
cd Devjit-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure EmailJS

Create a local `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

Do not commit your real `.env` file.

### 4. Start development

```bash
npm run dev
```

### 5. Create a production build

```bash
npm run build
```

### 6. Preview the production build

```bash
npm run preview
```

---

## Available Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

---

## Engineering Highlights

### Component Separation

Major portfolio sections are split into dedicated React components, helping keep the application easier to maintain and extend.

### Service Layer

EmailJS logic is isolated from the Contact UI in a dedicated service module rather than being embedded directly inside the section component.

### Form Reliability

The contact form validates input before submission and exposes user-friendly loading, success and error states.

### Responsive UI

The layout is designed to remain usable across phone, tablet and desktop viewport sizes.

### Motion & Interaction

Framer Motion is used to add transitions and viewport-triggered interactions without turning the portfolio into an animation-heavy demo.

---

## What I Practiced

Building this portfolio helped strengthen my understanding of:

- React component architecture
- Responsive UI development
- Tailwind CSS design systems
- Animation with Framer Motion
- Form state and validation
- Third-party service integration
- Environment-variable configuration
- Project presentation for recruiters and clients
- Frontend deployment with Vercel

---

## Future Improvements

- Add richer SEO metadata and social preview metadata
- Add more production projects as they are completed
- Improve automated accessibility testing
- Add project case-study pages
- Add automated UI tests
- Continue improving performance and Core Web Vitals

---

## Author

**Devjit Mondal**  
Frontend Developer

- Portfolio: https://portfolio-devjit.vercel.app/
- GitHub: https://github.com/devjit1520
- LinkedIn: https://www.linkedin.com/in/devjit-mondal-b68947233/

---

<div align="center">

### `design → build → refine → ship`

Built with React, JavaScript, Tailwind CSS, Framer Motion and EmailJS.

</div>

Devjit Mondal — Frontend Developer Portfolio

A modern, responsive, and animated developer portfolio built to showcase my frontend skills, featured projects, experience, and contact information.

The portfolio uses a premium dark interface with blue, cyan, and violet accents, neumorphism-inspired cards, smooth motion effects, responsive layouts, and an EmailJS-powered contact form.

Also, Get Help with ChatGPT

Live Demo

Portfolio: https://portfolio-devjit.vercel.app/

Preview

Add your portfolio screenshots inside:

public/screenshots/
├── portfolio-home.png
├── portfolio-projects.png
└── portfolio-contact.png

Then use them here:

![Portfolio Home](public/screenshots/portfolio-home.png)
![Projects Section](public/screenshots/portfolio-projects.png)
![Contact Section](public/screenshots/portfolio-contact.png)

Features

Premium responsive portfolio interface

Animated HUD loading screen

Fixed responsive navigation bar

Modern hero section

Premium About section

Skills showcase with technology categories

Featured project Bento layout

Experience section

EmailJS-powered contact form

Contact form validation

Loading, success, and error states

Spam honeypot protection

Downloadable resume

Social profile links

Smooth section navigation

Mobile, tablet, laptop, and desktop support

Framer Motion animations

Vercel deployment support

Sections

Home

About

Skills

Projects

Experience

Contact

Footer

Featured Projects

FinTrack Pro

A personal finance management application for tracking income, expenses, budgets, savings goals, and financial analytics.

Technologies: React, JavaScript, Tailwind CSS, Framer Motion, Recharts, React Router, Local Storage

Modern Todo Application

A responsive task management application with priorities, categories, due dates, filtering, drag-and-drop sorting, and local storage persistence.

Technologies: HTML5, CSS3, JavaScript, SortableJS, Local Storage, Vite

Quiz Application

An interactive quiz application with timed questions, score tracking, instant results, responsive layouts, and animated feedback.

Technologies: React, JavaScript, Tailwind CSS, Vite, Framer Motion

Tech Stack

Frontend

React

JavaScript

Vite

Tailwind CSS

Framer Motion

React Icons

Contact Form

EmailJS Browser SDK

Client-side validation

Environment variables

Honeypot spam protection

Deployment

GitHub

Vercel

Project Structure

my-portfolio/
├── public/
│   ├── projects/
│   │   ├── fintrack-pro.png
│   │   ├── todo-app.png
│   │   └── quiz-app.png
│   ├── screenshots/
│   ├── Devjit_Mondal.pdf
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   │   └── devjit.png
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── BackToTop.jsx
│   │   │   ├── LoadingScreen.jsx
│   │   │   ├── ScrollProgress.jsx
│   │   │   ├── SectionReveal.jsx
│   │   │   └── SkipToContent.jsx
│   │   │
│   │   ├── layout/
│   │   │   └── Navbar.jsx
│   │   │
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── Skills.jsx
│   │       ├── Projects.jsx
│   │       ├── Experience.jsx
│   │       └── Contact.jsx
│   │
│   ├── services/
│   │   └── emailService.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .env.example
├── .gitignore
├── package.json
├── vite.config.js
└── README.md

Getting Started

1. Clone the repository

git clone https://github.com/devjit1520/Devjit-portfolio.git
cd Devjit-portfolio

2. Install dependencies

npm install

3. Create the environment file

Create a .env file in the project root:

VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key

Do not commit the real .env file.

4. Start the development server

npm run dev

5. Create a production build

npm run build

6. Preview the production build

npm run preview

EmailJS Template Variables

The EmailJS template should use these exact variables:

{{from_name}}
{{from_email}}
{{subject}}
{{message}}
{{reply_to}}
{{submitted_at}}

Recommended template settings:

Subject: New Portfolio Message: {{subject}}
From Name: Devjit Portfolio
Reply To: {{reply_to}}

Environment Variables on Vercel

Add the following variables in:

Vercel Dashboard
→ Project
→ Settings
→ Environment Variables

Required variables:

VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY

After adding or changing them, redeploy the project.

Deployment

This project is configured for deployment on Vercel.

Push the project to GitHub.

Import the repository into Vercel.

Add the EmailJS environment variables.

Click Deploy.

Redeploy whenever environment variables change.

Scripts

npm run dev
npm run build
npm run preview
npm run lint

Contact

Devjit MondalFrontend DeveloperWest Bengal, India

Email: devjit1682002@gmail.com

GitHub: github.com/devjit1520

LinkedIn: https://www.linkedin.com/in/devjit-mondal-b68947233/

Instagram: @iamdevjit_15

License

This project is available for portfolio and educational reference. Please do not copy the complete design, content, or personal branding and present it as your own work.

Built with React, Tailwind CSS, Framer Motion, and EmailJS.
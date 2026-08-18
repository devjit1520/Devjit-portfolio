import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiCode,
  FiExternalLink,
  FiFilter,
  FiGithub,
} from "react-icons/fi";
import { LuListTodo } from "react-icons/lu";
import { MdQuiz } from "react-icons/md";
import { IoIosWallet } from "react-icons/io";
import { HiOutlineCloud } from "react-icons/hi2";
import { RiLayoutMasonryLine } from "react-icons/ri";

const projects = [
  {
    id: 1,
    number: "01",
    title: "FinTrack Pro",
    category: "React",
    featured: true,
    status: "Featured Project",
    image: "/projects/fintrack-pro.png",
    imageAlt: "FinTrack Pro personal finance dashboard",
    description:
      "A modern personal finance application for tracking income, expenses, budgets, savings goals, and financial analytics.",
    icon: IoIosWallet,
    iconColor: "text-amber-400",
    iconBox: "border-amber-500/25 bg-amber-500/10",
    features: [
      "Interactive Dashboard",
      "Income & Expense Tracking",
      "Budget Management",
      "Savings Goals",
      "Analytics & Charts",
      "Responsive Design",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Recharts",
      "Supabase",
    ],
    github: "https://github.com/devjit1520/fintrack",
    demo: "https://fintrack-devjit.vercel.app/",
  },
  {
    id: 2,
    number: "02",
    title: "TaskBloom - Modern Todo Application",
    category: "JavaScript",
    status: "Live",
    image: "/projects/todo-app.png",
    imageAlt: "TaskBloom modern todo application dashboard",
    description:
      "A productivity app with complete task CRUD, priorities, deadlines, filters, drag-and-drop sorting, statistics, dark mode, and Local Storage.",
    icon: LuListTodo,
    iconColor: "text-emerald-400",
    iconBox: "border-emerald-500/25 bg-emerald-500/10",
    features: [
      "Task creation, editing, deletion, and completion",
      "Task categories and priority levels",
      "Due dates and overdue tracking",
      "Drag-and-drop task sorting",
      "All, active, completed, and overdue filters",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "SortableJS",
      "Tailwind CSS",
      "Local Storage",
    ],
    github: "https://github.com/devjit1520/Todo_Manager",
    demo: "https://taskbloom-todo-app.vercel.app/",
  },
  {
    id: 3,
    number: "03",
    title: "QuizMaster - Modern Quiz Application",
    category: "React",
    status: "Live",
    image: "/projects/quiz-app.png",
    imageAlt: "QuizMaster React quiz application interface",
    description:
      "A gamified React quiz platform with XP progression, achievements, analytics, difficulty levels, shuffled questions, and responsive UI.",
    icon: MdQuiz,
    iconColor: "text-pink-400",
    iconBox: "border-pink-500/25 bg-pink-500/10",
    features: [
      "Interactive Quiz System",
      "Multiple Difficulty Levels",
      "Question & Option Shuffle",
      "XP Progression System",
      "Achievements and Analytics",
    ],
    technologies: [
      "React",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
    ],
    github: "https://github.com/devjit1520/quiz_application",
    demo: "https://quiz-application-lyart-two.vercel.app/",
  },
  {
    id: 4,
    number: "04",
    title: "DevCraft - Web Development Services",
    category: "React",
    status: "Live",
    image: "/projects/devcraft.svg",
    imageAlt: "DevCraft web development services website",
    description:
      "A conversion-focused React service website presenting web design, frontend development, redesign, responsive UI, maintenance, and enquiry flows.",
    icon: RiLayoutMasonryLine,
    iconColor: "text-cyan-400",
    iconBox: "border-cyan-500/25 bg-cyan-500/10",
    features: [
      "Responsive service website",
      "React component architecture",
      "EmailJS enquiry form",
      "SEO and JSON-LD foundation",
      "Lazy-loaded sections with Suspense",
      "Conversion-focused CTA flows",
    ],
    technologies: [
      "React 19",
      "JavaScript ES6+",
      "Tailwind CSS 4",
      "Framer Motion",
      "EmailJS",
      "Vite",
    ],
    github: "https://github.com/devjit1520/devcraft",
    demo: "https://devcraft-services.vercel.app/",
  },
  {
    id: 5,
    number: "05",
    title: "WeatherNow - Real-time Weather Dashboard",
    category: "JavaScript",
    status: "Live",
    image: "/projects/weathernow.svg",
    imageAlt: "WeatherNow real-time weather dashboard",
    description:
      "A real-time weather dashboard using Open-Meteo with city autocomplete, geolocation, hourly and weekly forecasts, favorites, recent searches, and persistent preferences.",
    icon: HiOutlineCloud,
    iconColor: "text-sky-400",
    iconBox: "border-sky-500/25 bg-sky-500/10",
    features: [
      "Live Open-Meteo API integration",
      "Smart city autocomplete",
      "Browser geolocation support",
      "Hourly and seven-day forecasts",
      "Favorites and recent searches",
      "Theme and temperature preferences",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "Fetch API",
      "Open-Meteo API",
      "Local Storage",
    ],
    github: "https://github.com/devjit1520/weathernow-weather-dashboard",
    demo: "https://weathernow-weather-dashboard.vercel.app/",
  },
];

const filters = ["All", "React", "JavaScript"];

function ProjectImage({ project, featured }) {
  const [imageFailed, setImageFailed] = useState(false);
  const Icon = project.icon;

  return (
    <div
      className={`relative overflow-hidden ${
        featured
          ? "h-[300px] sm:h-[380px] lg:h-[430px]"
          : "h-[250px] sm:h-[285px] lg:h-[300px]"
      }`}
    >
      {!imageFailed && project.image ? (
        <motion.img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          onError={() => setImageFailed(true)}
          whileHover={{ scale: 1.035 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover object-top opacity-90 transition-opacity duration-500 group-hover:opacity-100"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[#020b1f]">
          <div className={`flex h-24 w-24 items-center justify-center rounded-[26px] border ${project.iconBox}`}>
            <Icon className={`text-5xl ${project.iconColor}`} />
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#020817]/5 via-[#020817]/15 to-[#091426]" />
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(96,165,250,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,.35)_1px,transparent_1px)] [background-size:42px_42px]" />

      {project.featured && (
        <div className="absolute left-6 top-6 z-20 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-[#091426]/85 px-4 py-2 text-xs font-bold text-amber-400 backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,.8)]" />
          Featured Project
        </div>
      )}

      <span className="absolute right-6 top-4 z-10 select-none text-6xl font-black tracking-tight text-white/[0.06] transition-colors duration-500 group-hover:text-blue-400/[0.10]">
        {String(project.id).padStart(2, "0")}
      </span>

      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 rounded-full border border-emerald-400/20 bg-[#071526]/85 px-4 py-2 text-xs font-semibold text-emerald-400 backdrop-blur-xl">
        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.9)]" />
        {project.status === "Featured Project" ? "Featured" : "Live"}
      </div>

      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title}`}
          className="absolute left-1/2 top-1/2 z-30 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 scale-90 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 hover:border-blue-400 hover:bg-blue-500"
        >
          <FiArrowUpRight className="text-2xl" />
        </a>
      )}
    </div>
  );
}

function ProjectCard({ project, index }) {
  const featured = Boolean(project.featured);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      whileHover={{ y: -5 }}
      className={`group relative min-w-0 rounded-[28px] border border-white/[0.09] bg-[#091426]/80 shadow-[0_20px_70px_rgba(0,0,0,.25)] backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_25px_80px_rgba(37,99,235,.12)] ${featured ? "lg:col-span-2" : ""}`}
    >
      <ProjectImage project={project} featured={featured} />

      <div className="relative p-6 sm:p-7 lg:p-8">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/[0.08] px-3 py-1.5 text-xs font-semibold text-blue-400">
            <FiCode />
            {project.category}
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub repository for ${project.title}`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400"
          >
            <FiGithub className="text-lg" />
          </a>
        </div>

        <div className="flex items-start justify-between gap-4">
          <h3 className={`${featured ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"} min-w-0 font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-blue-400`}>
            {project.title}
          </h3>
          <FiArrowUpRight className="mt-1 shrink-0 text-2xl text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400" />
        </div>

        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400 sm:text-base">
          {project.description}
        </p>

        <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {project.features.map((feature) => (
            <div key={feature} className="flex items-start gap-2 text-xs font-medium leading-5 text-slate-300 sm:text-sm">
              <FiCheckCircle className="mt-0.5 shrink-0 text-blue-400" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span key={technology} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-400 transition-colors duration-300 group-hover:border-blue-500/20 group-hover:text-slate-300">
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(37,99,235,.35)]"
          >
            Live Demo
            <FiExternalLink />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white"
          >
            <FiGithub />
            GitHub
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 ring-1 ring-blue-400/30 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.article>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="relative overflow-hidden bg-[#020817] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(96,165,250,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,.8)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute left-1/2 top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute right-[-150px] top-[900px] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1380px]">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-2 text-xl font-semibold uppercase tracking-[0.22em] text-blue-400">
              <FiCode />
              Featured Work
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            A selection of projects demonstrating frontend development, problem-solving, UI design, API integration, responsive architecture, and React skills.
          </p>
          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 shadow-[0_0_20px_rgba(59,130,246,.6)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 flex w-fit items-center gap-1 rounded-2xl border border-white/10 bg-[#0b1629]/80 p-1.5 shadow-[0_15px_50px_rgba(0,0,0,.25)] backdrop-blur-xl"
        >
          <div className="hidden px-3 text-slate-500 sm:block"><FiFilter /></div>
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`relative rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${activeFilter === filter ? "text-white" : "text-slate-400 hover:text-white"}`}
            >
              {activeFilter === filter && (
                <motion.span layoutId="activeProjectFilter" className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 shadow-[0_8px_25px_rgba(37,99,235,.35)]" />
              )}
              <span className="relative z-10">{filter}</span>
            </button>
          ))}
        </motion.div>

        <div className="mb-5 flex items-center justify-between text-sm">
          <span className="text-slate-500">
            Showing <span className="font-semibold text-blue-400">{filteredProjects.length}</span> projects
          </span>
          <span className="hidden items-center gap-2 text-slate-500 sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" />
            Continuously building
          </span>
        </div>

        {/* Important: no fixed grid rows or row-spans here. Every card grows with its content, so details can never be clipped. */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-white/10 bg-white/[0.03] p-12 text-center">
            <FiCode className="mx-auto mb-4 text-4xl text-blue-400" />
            <h3 className="text-xl font-bold text-white">No projects found</h3>
            <p className="mt-2 text-slate-400">Try selecting another category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Projects;

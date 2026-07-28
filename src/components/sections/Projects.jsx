import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaGithub,
  FaLaptopCode,
} from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { LuListTodo } from "react-icons/lu";
import { MdQuiz } from "react-icons/md";
import { IoIosWallet } from "react-icons/io";

const filters = ["All", "React", "JavaScript"];

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
    statusStyle:
      "border-amber-500/25 bg-amber-500/10 text-amber-400",
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
      "Local Storage",
    ],
    github: "https://github.com/devjit1520/fintrack",
    demo: "https://fintrack-devjit.vercel.app/",
  },
  {
    id: 2,
    number: "02",
    title: "TaskBloom - Modern Todo Application",
    category: "JavaScript",
    featured: false,
    status: "Open Source",
    image: "/projects/todo-app.png",
    imageAlt: "Modern Todo Application dashboard",
    description:
      "A modern productivity app with task CRUD, priorities, deadlines, filters, drag-and-drop sorting, statistics, dark mode, and Local Storage.",
    icon: LuListTodo,
    iconColor: "text-emerald-400",
    iconBox: "border-emerald-500/25 bg-emerald-500/10",
    statusStyle:
      "border-blue-500/25 bg-blue-500/10 text-blue-400",
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
    github: "https://github.com/devjit1520",
    demo: "https://taskbloom-todo-app.vercel.app/",
  },
  {
    id: 3,
    number: "03",
    title: "QuizMaster - Modern Quiz Application",
    category: "React",
    featured: false,
    status: "Live",
    image: "/projects/quiz-app.png",
    imageAlt: "Quiz Application interface",
    description:
      "Modern React quiz platform with XP, achievements, analytics, and responsive UI.",
    icon: MdQuiz,
    iconColor: "text-pink-400",
    iconBox: "border-pink-500/25 bg-pink-500/10",
    statusStyle:
      "border-emerald-500/25 bg-emerald-500/10 text-emerald-400",
    features: [
      "Interactive Quiz System",
      "Multiple Difficulty Levels",
      "Question & Option Shuffle",
      "XP Progression System",
      "Modern Terminal Noir Design",
      
    ],
    technologies: [
      "React",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
      
    ],
    github: "https://github.com/devjit1520",
    demo: "https://quizmaster-application.vercel.app/",
  },
];

function Preview({ project, featured = false }) {
  const [failed, setFailed] = useState(false);
  const Icon = project.icon;
  const showImage = project.image && !failed;

  return (
    <div className="overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#071128]">
      <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <div className="h-6 w-24 rounded-full bg-white/5 sm:w-36" />
        <span className="text-xs text-slate-500">Live</span>
      </div>

      <div className={`relative ${featured ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
        {showImage ? (
          <motion.img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            onError={() => setFailed(true)}
            whileHover={{ scale: 1.035 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[#020b1f]">
            <div className={`flex h-24 w-24 items-center justify-center rounded-[26px] border ${project.iconBox}`}>
              <Icon className={`text-5xl ${project.iconColor}`} />
            </div>
          </div>
        )}

        <div className="absolute right-3 top-3 rounded-xl border border-white/10 bg-[#071128]/90 px-3 py-2 text-[11px] text-white backdrop-blur-xl">
          Vercel
        </div>
      </div>
    </div>
  );
}

function ProjectActions({ project }) {
  return (
    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
      <motion.a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-[#0d1829] px-5 text-sm font-semibold text-white hover:border-blue-500/30 hover:text-blue-300"
      >
        <FaGithub />
        Source Code
      </motion.a>

      <motion.a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="group inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,.25)] hover:bg-blue-500"
      >
        <FaExternalLinkAlt />
        Live Demo
        <FaArrowRight className="transition-transform group-hover:translate-x-1" />
      </motion.a>
    </div>
  );
}

function ProjectContent({ project, featured = false }) {
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${project.statusStyle}`}>
          <span className="h-2 w-2 rounded-full bg-current" />
          {project.status}
        </span>
        <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-400">
          {project.category}
        </span>
      </div>

      <h3 className={`${featured ? "text-3xl sm:text-4xl" : "text-2xl"} mt-5 font-black text-white`}>
        {project.title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
        {project.description}
      </p>

      <div className={`mt-5 grid gap-3 ${featured ? "sm:grid-cols-2" : ""}`}>
        {project.features.map((feature) => (
          <div key={feature} className="flex items-center gap-2.5 text-sm text-slate-300">
            <FaCheckCircle className={`shrink-0 ${project.iconColor}`} />
            {feature}
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-white/[0.07] bg-[#0d1829] px-3 py-1.5 text-xs text-slate-300"
          >
            {technology}
          </span>
        ))}
      </div>

      <ProjectActions project={project} />
    </div>
  );
}

function FeaturedCard({ project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#101b2e]/92 p-5 shadow-[14px_14px_36px_rgba(0,0,0,.38),-8px_-8px_24px_rgba(59,130,246,.025)] backdrop-blur-2xl sm:p-7"
    >
      <span className="pointer-events-none absolute right-6 top-2 text-8xl font-black text-white/[0.035]">
        {project.number}
      </span>

      <div className="relative z-10 grid gap-7 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <Preview project={project} featured />
        <ProjectContent project={project} featured />
      </div>
    </motion.article>
  );
}

function SmallCard({ project, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#101b2e]/92 p-4 shadow-[10px_10px_26px_rgba(0,0,0,.30),-7px_-7px_20px_rgba(59,130,246,.025)] backdrop-blur-2xl transition hover:border-blue-500/25 sm:p-5"
    >
      <span className="pointer-events-none absolute right-5 top-2 text-6xl font-black text-white/[0.035]">
        {project.number}
      </span>

      <div className="relative z-10">
        <Preview project={project} />
        <div className="pt-5">
          <ProjectContent project={project} />
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter]
  );

  const featured =
    filteredProjects.find((project) => project.featured) ||
    filteredProjects[0];

  const others = filteredProjects.filter(
    (project) => project.id !== featured?.id
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#010817] py-10 sm:py-10"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-52 top-24 h-[480px] w-[480px] rounded-full bg-blue-600/10 blur-[160px]" />
        <div className="absolute -right-48 bottom-16 h-[480px] w-[480px] rounded-full bg-cyan-500/10 blur-[160px]" />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            className="
              mt-5
              text-3xl
              font-black
              tracking-tight
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
           <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-500/25
              bg-blue-500/10
              px-4
              py-2
              text-xl
              font-semibold
              uppercase
              tracking-[0.22em]
              text-blue-400
              
            "
          >
            

            <FaLaptopCode />
            Featured Work
          </span>
          </h2>

          

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Responsive applications that demonstrate my frontend development,
            problem-solving, UI design, and React skills.
          </p>
                    <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 110,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.25,
              duration: 0.6,
            }}
            className="
              mx-auto
              mt-7
              h-1
              rounded-full
              bg-blue-500
              shadow-[0_0_20px_rgba(59,130,246,0.65)]
            "
          />
        </motion.div>

        <div className="mx-auto mt-10 flex w-fit max-w-full flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/[0.08] bg-[#101b2e]/90 p-2 backdrop-blur-xl">
          <span className="hidden h-10 w-10 items-center justify-center text-slate-500 sm:flex">
            <FiFilter />
          </span>

          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "bg-blue-600 text-white shadow-[0_8px_25px_rgba(37,99,235,.3)]"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6">
          <AnimatePresence mode="popLayout">
            {featured && (
              <FeaturedCard key={`featured-${featured.id}`} project={featured} />
            )}

            {others.length > 0 && (
              <motion.div layout className="grid gap-6 lg:grid-cols-2">
                {others.map((project, index) => (
                  <SmallCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[28px] border border-white/[0.08] bg-[#101b2e]/92 px-6 py-6 sm:flex-row sm:px-8">
          <div>
            <h3 className="text-xl font-black text-white">
              More projects are coming
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              I continuously build new applications to improve my development
              skills and solve real-world problems.
            </p>
          </div>

          <a
            href="https://github.com/devjit1520"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-3 rounded-xl border border-blue-500/25 bg-[#0d1829] px-5 py-3 text-sm font-semibold text-white transition hover:border-blue-400/35 hover:text-blue-300"
          >
            <FaGithub />
            View GitHub Profile
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaArrowRight,
  FaCheckCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";

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
    github: "https://github.com/devjit1520/Todo_Manager",
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
    github: "https://github.com/devjit1520/quiz_application",
    demo: "https://quiz-application-lyart-two.vercel.app/",
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

  const filters = ["All", "React", "JavaScript"];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-[#020817]
        px-4
        py-8
        text-white
        sm:px-6
        lg:px-8
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.055]
            [background-image:linear-gradient(rgba(96,165,250,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,.8)_1px,transparent_1px)]
            [background-size:72px_72px]
          "
        />

        {/* Blue glow */}
        <div
          className="
            absolute
            left-1/2
            top-20
            h-[500px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-blue-600/10
            blur-[140px]
          "
        />

        {/* Cyan glow */}
        <div
          className="
            absolute
            right-[-150px]
            top-[650px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-cyan-500/10
            blur-[120px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[1380px]">

        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >

      

          {/* Heading */}

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
                                  <FiCode />

            FEATURED WORK
                    </span>
                    </h2>



          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-8
              text-slate-400
              sm:text-lg
            "
          >
            A selection of projects demonstrating my frontend development,
            problem-solving, UI design, API integration, and React skills.
          </p>

          {/* Accent */}

          <div
            className="
              mx-auto
              mt-8
              h-1
              w-24
              rounded-full
              bg-gradient-to-r
              from-blue-500
              via-cyan-400
              to-blue-500
              shadow-[0_0_20px_rgba(59,130,246,.6)]
            "
          />
        </motion.div>

        {/* ===================================================
            FILTER
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mx-auto
            mb-12
            flex
            w-fit
            items-center
            gap-1
            rounded-2xl
            border
            border-white/10
            bg-[#0b1629]/80
            p-1.5
            shadow-[0_15px_50px_rgba(0,0,0,.25)]
            backdrop-blur-xl
          "
        >
          <div className="hidden px-3 text-slate-500 sm:block">
            <FiFilter />
          </div>

          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`
                relative
                rounded-xl
                px-5
                py-2.5
                text-sm
                font-semibold
                transition-all
                duration-300
                ${
                  activeFilter === filter
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }
              `}
            >
              {activeFilter === filter && (
                <motion.span
                  layoutId="activeProjectFilter"
                  className="
                    absolute
                    inset-0
                    rounded-xl
                    bg-gradient-to-r
                    from-blue-600
                    to-blue-500
                    shadow-[0_8px_25px_rgba(37,99,235,.35)]
                  "
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}

              <span className="relative z-10">
                {filter}
              </span>
            </button>
          ))}
        </motion.div>

        {/* ===================================================
            PROJECT COUNT
        =================================================== */}

        <div
          className="
            mb-5
            flex
            items-center
            justify-between
            text-sm
          "
        >
          <span className="text-slate-500">
            Showing{" "}
            <span className="font-semibold text-blue-400">
              {filteredProjects.length}
            </span>{" "}
            projects
          </span>

          <span className="hidden items-center gap-2 text-slate-500 sm:flex">
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-emerald-400
                shadow-[0_0_12px_rgba(52,211,153,.8)]
              "
            />

            Continuously building
          </span>
        </div>

        {/* ===================================================
            BENTO GRID
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            lg:grid-cols-4
            lg:auto-rows-[280px]
          "
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isFeatured =
                project.featured && activeFilter === "All";

              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  featured={isFeatured}
                />
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

/* ===========================================================
   PROJECT CARD
=========================================================== */

function ProjectCard({
  project,
  index,
  featured = false,
}) {
  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.96,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      whileHover={{
        y: -5,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/[0.09]
        bg-[#091426]/80
        shadow-[0_20px_70px_rgba(0,0,0,.25)]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-blue-500/40
        hover:shadow-[0_25px_80px_rgba(37,99,235,.12)]
        ${
          featured
            ? "md:col-span-2 lg:col-span-4 lg:row-span-2"
            : "md:col-span-1 lg:col-span-2 lg:row-span-2"
        }
      `}
    >
      {/* =====================================================
          IMAGE AREA
      ===================================================== */}

      <div
        className={`
          relative
          overflow-hidden
          ${
            featured
              ? "h-[330px] sm:h-[400px] lg:h-[440px]"
              : "h-[260px] sm:h-[300px] lg:h-[310px]"
          }
        `}
      >
        {/* Project image */}

        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-top
            opacity-90
            transition-all
            duration-700
            group-hover:scale-[1.04]
            group-hover:opacity-100
          "
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        {/* Dark gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#020817]/20
            via-[#020817]/20
            to-[#091426]
          "
        />

        {/* Grid overlay */}

        <div
          className="
            absolute
            inset-0
            opacity-30
            [background-image:linear-gradient(rgba(96,165,250,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,.35)_1px,transparent_1px)]
            [background-size:42px_42px]
          "
        />

        {/* Featured badge */}

        {project.featured && (
          <div
            className="
              absolute
              left-6
              top-6
              z-20
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-amber-400/30
              bg-[#091426]/80
              px-4
              py-2
              text-xs
              font-bold
              text-amber-400
              shadow-[0_0_25px_rgba(251,191,36,.08)]
              backdrop-blur-xl
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-amber-400
                shadow-[0_0_10px_rgba(251,191,36,.8)]
              "
            />

            Featured Project
          </div>
        )}

        {/* Number */}

        <span
          className="
            absolute
            right-6
            top-4
            z-10
            select-none
            text-6xl
            font-black
            tracking-tight
            text-white/[0.06]
            transition-colors
            duration-500
            group-hover:text-blue-400/[0.10]
          "
        >
          {String(project.id).padStart(2, "0")}
        </span>

        {/* Live badge */}

        <div
          className="
            absolute
            bottom-6
            right-6
            z-20
            flex
            items-center
            gap-2
            rounded-full
            border
            border-emerald-400/20
            bg-[#071526]/80
            px-4
            py-2
            text-xs
            font-semibold
            text-emerald-400
            backdrop-blur-xl
          "
        >
          <span
            className="
              h-2
              w-2
              rounded-full
              bg-emerald-400
              shadow-[0_0_12px_rgba(52,211,153,.9)]
            "
          />

          Live
        </div>

        {/* Preview button */}

        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="
            absolute
            left-1/2
            top-1/2
            z-30
            flex
            h-16
            w-16
            -translate-x-1/2
            -translate-y-1/2
            scale-90
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/10
            text-white
            opacity-0
            backdrop-blur-xl
            transition-all
            duration-300
            group-hover:scale-100
            group-hover:opacity-100
            hover:bg-blue-500
            hover:border-blue-400
          "
          aria-label={`Open ${project.title}`}
        >
          <FiArrowUpRight className="text-2xl" />
        </a>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          p-6
          sm:p-7
        "
      >
        {/* Category + GitHub */}

        <div className="mb-4 flex items-center justify-between gap-4">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-500/25
              bg-blue-500/[0.08]
              px-3
              py-1.5
              text-xs
              font-semibold
              text-blue-400
            "
          >
            <FiCode />

            {project.category}
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`GitHub repository for ${project.title}`}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]
              text-slate-400
              transition-all
              duration-300
              hover:border-blue-500/40
              hover:bg-blue-500/10
              hover:text-blue-400
            "
          >
            <FiGithub className="text-lg" />
          </a>
        </div>

        {/* Title */}

        <div className="flex items-start justify-between gap-4">
          <h3
            className="
              text-2xl
              font-bold
              tracking-tight
              text-white
              transition-colors
              duration-300
              group-hover:text-blue-400
              sm:text-3xl
            "
          >
            {project.title}
          </h3>

          <FiArrowUpRight
            className="
              mt-1
              shrink-0
              text-2xl
              text-slate-600
              transition-all
              duration-300
              group-hover:-translate-y-1
              group-hover:translate-x-1
              group-hover:text-blue-400
            "
          />
        </div>

        {/* Description */}

        <p
          className="
            mt-4
            max-w-3xl
            text-sm
            leading-7
            text-slate-400
            sm:text-base
          "
        >
          {project.description}
        </p>

        {/* Highlights */}

        {project.highlights?.length > 0 && (
          <div
            className="
              mt-5
              grid
              grid-cols-1
              gap-2
              sm:grid-cols-2
            "
          >
            {project.highlights
              .slice(0, featured ? 4 : 3)
              .map((highlight) => (
                <div
                  key={highlight}
                  className="
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-medium
                    text-slate-300
                    sm:text-sm
                  "
                >
                  <FiCheckCircle className="shrink-0 text-blue-400" />

                  {highlight}
                </div>
              ))}
          </div>
        )}

        {/* Tech */}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((technology) => (
            <span
              key={technology}
              className="
                rounded-lg
                border
                border-white/10
                bg-white/[0.03]
                px-3
                py-1.5
                text-xs
                font-medium
                text-slate-400
                transition-colors
                duration-300
                group-hover:border-blue-500/20
                group-hover:text-slate-300
              "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div
          className="
            mt-7
            flex
            flex-wrap
            gap-3
          "
        >
          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-[0_10px_30px_rgba(37,99,235,.2)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_15px_40px_rgba(37,99,235,.35)]
              "
            >
              Live Demo

              <FiExternalLink />
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]
              px-5
              py-2.5
              text-sm
              font-semibold
              text-slate-300
              transition-all
              duration-300
              hover:border-blue-500/30
              hover:bg-blue-500/10
              hover:text-white
            "
          >
            <FiGithub />

            GitHub
          </a>
        </div>
      </div>

      {/* =====================================================
          CARD GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[28px]
          opacity-0
          ring-1
          ring-blue-400/30
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-20
          left-1/2
          h-40
          w-2/3
          -translate-x-1/2
          rounded-full
          bg-blue-500/10
          opacity-0
          blur-[70px]
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />
    </motion.article>
  );
}

export default Projects;
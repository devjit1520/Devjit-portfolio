import { useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  FaArrowRight,
  FaCheckCircle,
  FaCode,
  FaExternalLinkAlt,
  FaGithub,
  FaLaptopCode,
  FaReact,
} from "react-icons/fa";

import {
  FiBarChart2,
  FiFilter,
  FiSmartphone,
} from "react-icons/fi";

import { LuListTodo } from "react-icons/lu";
import { MdQuiz } from "react-icons/md";
import { IoIosWallet } from "react-icons/io";

/* =========================================================
   FILTER OPTIONS
========================================================= */

const filterOptions = [
  "All",
  "React",
  "JavaScript",
];

/* =========================================================
   PROJECT DATA
========================================================= */

const projectsData = [
  {
    id: 1,
    number: "01",
    title: "FinTrack Pro",
    category: "React",
    featured: true,
    status: "Featured Project",
    image: "/projects/fintrack-pro.png",
    imageAlt:
      "FinTrack Pro personal finance dashboard",
    description:
      "A modern personal finance management application that helps users track income, expenses, budgets, savings goals, and financial performance through an intuitive dashboard.",
    icon: IoIosWallet,
    iconColor: "text-amber-400",
    glowColor: "rgba(251,191,36,0.18)",
    previewBackground: "bg-[#020b1f]",
    iconBackground:
      "bg-amber-500/10 border-amber-500/25",
    statusStyle:
      "bg-amber-500/10 border-amber-500/25 text-amber-400",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
      "Recharts",
      "React Router",
      "Local Storage",
    ],
    features: [
      "Interactive Dashboard",
      "Income & Expense Tracking",
      "Budget Management",
      "Savings Goals",
      "Analytics & Charts",
      "Responsive Design",
    ],
    deployment: "Vercel",
    github:
      "https://github.com/devjit1520/fintrack",
    demo:
      "https://fintrack-devjit.vercel.app/",
  },

  {
    id: 2,
    number: "02",
    title: "Modern Todo Application",
    category: "JavaScript",
    featured: false,
    status: "Open Source",
        image: "/public/projects/todo-app.png",
    imageAlt:
      "Modern Todo Application",
    description:
      "A responsive task management application featuring task priorities, due dates, categories, editing, filtering, statistics, drag-and-drop sorting, and local storage persistence.",
    icon: LuListTodo,
    iconColor: "text-emerald-400",
    glowColor: "rgba(52,211,153,0.18)",
    previewBackground:
      "bg-gradient-to-br from-emerald-500/20 via-green-500/10 to-transparent",
    iconBackground:
      "bg-emerald-500/10 border-emerald-500/25",
    statusStyle:
      "bg-blue-500/10 border-blue-500/25 text-blue-400",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "SortableJS",
      "Local Storage",
      "Vite",
    ],
    features: [
      "Task Categories",
      "Priority Levels",
      "Due Dates",
      "Drag & Drop",
    ],
    deployment: "Vercel",
    github:
      "https://github.com/devjit1520",
    demo:
      "https://todo-managerrrr.vercel.app/",
  },
  {
    id: 3,
    number: "03",
    title: "Quiz Application",
    category: "React",
    featured: false,
    status: "Live",
        image: "/public/projects/quiz-app.png",
    imageAlt:
      "FinTrack Pro personal finance dashboard",
    description:
      "An interactive quiz application featuring multiple questions, timed challenges, score tracking, instant results, responsive layouts, and animated completion feedback.",
    icon: MdQuiz,
    iconColor: "text-pink-400",
    glowColor: "rgba(244,114,182,0.18)",
    previewBackground:
      "bg-gradient-to-br from-pink-500/20 via-violet-500/10 to-transparent",
    iconBackground:
      "bg-pink-500/10 border-pink-500/25",
    statusStyle:
      "bg-emerald-500/10 border-emerald-500/25 text-emerald-400",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
    ],
    features: [
      "Quiz Timer",
      "Score Tracking",
      "Instant Results",
      "Responsive UI",
    ],
    deployment: "Vercel",
    github:
      "https://github.com/devjit1520",
    demo:
      "https://quiz-application-lyart-two.vercel.app/",
  },
];

/* =========================================================
   PROJECT PREVIEW
========================================================= */

function ProjectPreview({ project }) {
  const [imageFailed, setImageFailed] =
    useState(false);

  const ProjectIcon = project.icon;

  const hasProjectImage =
    Boolean(project.image) && !imageFailed;

  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-white/10
        ${project.previewBackground}
      `}
    >
      {/* Browser header */}
      <div
        className="
          relative
          z-30
          flex
          items-center
          justify-between
          border-b
          border-white/10
          bg-[#071128]/95
          px-4
          py-3
          backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>

        <div
          className="
            h-7
            w-32
            rounded-full
            border
            border-white/10
            bg-white/5
            sm:w-44
          "
        />

        <FaCode className="text-slate-500" />
      </div>

      {/* Project screenshot or fallback icon */}
      <div
        className={`
          relative
          z-10
          overflow-hidden
          bg-[#020b1f]
          ${
            hasProjectImage
              ? "aspect-[4/3]"
              : project.featured
                ? "min-h-[300px] lg:min-h-[345px]"
                : "min-h-[230px]"
          }
        `}
      >
        {hasProjectImage ? (
          <>
            <motion.img
              src={project.image}
              alt={
                project.imageAlt ||
                `${project.title} project preview`
              }
              loading="lazy"
              onError={() =>
                setImageFailed(true)
              }
              whileHover={{
                scale: 1.025,
              }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
              }}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-top
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-[#071128]/25
                via-transparent
                to-transparent
              "
            />
          </>
        ) : (
          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.05]
                [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
                [background-size:30px_30px]
              "
            />

            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                h-40
                w-40
                rounded-full
                bg-blue-500/20
                blur-[60px]
              "
            />

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-40
                w-40
                rounded-full
                border
                border-dashed
                border-white/20
              "
            />

            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: 4,
              }}
              className={`
                relative
                flex
                h-28
                w-28
                items-center
                justify-center
                rounded-[30px]
                border
                backdrop-blur-xl
                ${project.iconBackground}
              `}
            >
              <ProjectIcon
                className={`
                  text-6xl
                  ${project.iconColor}
                `}
              />
            </motion.div>
          </div>
        )}

        {/* Deployment badge */}
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-4
            top-4
            z-30
            rounded-xl
            border
            border-white/10
            bg-[#071128]/90
            px-3
            py-2
            shadow-lg
            backdrop-blur-xl
          "
        >
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-medium text-white">
              {project.deployment}
            </span>
          </div>
        </motion.div>

        {/* Production badge */}
        <motion.div
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 3.5,
            delay: 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-4
            left-4
            z-30
            rounded-xl
            border
            border-white/10
            bg-[#071128]/90
            px-3
            py-2
            shadow-lg
            backdrop-blur-xl
          "
        >
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-emerald-400" />
            <span className="text-xs font-medium text-white">
              Production Ready
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, index }) {
  const [mousePosition, setMousePosition] =
    useState({ x: 0, y: 0 });

  const [spotlightVisible, setSpotlightVisible] =
    useState(false);

  const handleMouseMove = (event) => {
    const card =
      event.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: event.clientX - card.left,
      y: event.clientY - card.top,
    });
  };

  return (
    <motion.article
      layout
      onMouseMove={handleMouseMove}
      onMouseEnter={() =>
        setSpotlightVisible(true)
      }
      onMouseLeave={() =>
        setSpotlightVisible(false)
      }
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: 20,
        scale: 0.97,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -6,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        bg-white/[0.035]
        shadow-[0_25px_80px_rgba(0,0,0,.28)]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-blue-500/35
        hover:shadow-[0_25px_90px_rgba(37,99,235,.14)]
        ${
          project.featured
            ? "lg:col-span-2"
            : ""
        }
      `}
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          transition-opacity
          duration-300
        "
        style={{
          opacity: spotlightVisible ? 1 : 0,
          background: `
            radial-gradient(
              420px circle at
              ${mousePosition.x}px
              ${mousePosition.y}px,
              ${project.glowColor},
              transparent 68%
            )
          `,
        }}
      />

      <span
        className="
          pointer-events-none
          absolute
          right-6
          top-3
          text-7xl
          font-black
          text-white/[0.035]
          sm:text-8xl
        "
      >
        {project.number}
      </span>

      <div
        className={`
          relative
          z-10
          grid
          gap-0
          ${
            project.featured
              ? "lg:grid-cols-[0.95fr_1.05fr]"
              : ""
          }
        `}
      >
        <div
          className={`
            p-5
            sm:p-6
            ${
              project.featured
                ? "lg:pr-0"
                : "pb-0"
            }
          `}
        >
          <ProjectPreview project={project} />
        </div>

        <div
          className="
            flex
            h-full
            flex-col
            p-6
            sm:p-7
            lg:p-8
          "
        >
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                px-3.5
                py-1.5
                text-xs
                font-semibold
                ${project.statusStyle}
              `}
            >
              <span className="h-2 w-2 rounded-full bg-current" />
              {project.status}
            </span>

            <span
              className="
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/10
                px-3.5
                py-1.5
                text-xs
                font-semibold
                text-blue-400
              "
            >
              {project.category}
            </span>
          </div>

          <h3
            className="
              mt-6
              text-2xl
              font-black
              tracking-tight
              text-white
              transition
              group-hover:text-blue-400
              sm:text-3xl
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-4
              text-sm
              leading-7
              text-slate-400
              sm:text-base
            "
          >
            {project.description}
          </p>

          <div
            className={`
              mt-6
              grid
              grid-cols-1
              gap-3
              ${
                project.featured
                  ? "sm:grid-cols-2"
                  : ""
              }
            `}
          >
            {project.features
              .slice(
                0,
                project.featured ? 6 : 4
              )
              .map((feature) => (
                <div
                  key={feature}
                  className="
                    flex
                    items-center
                    gap-2.5
                    text-sm
                    text-slate-300
                  "
                >
                  <FaCheckCircle
                    className={`
                      shrink-0
                      ${project.iconColor}
                    `}
                  />
                  {feature}
                </div>
              ))}
          </div>

          <div
            className="
              mt-6
              flex
              flex-wrap
              gap-3
              border-y
              border-white/10
              py-4
            "
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-400">
              <FiSmartphone className="text-blue-400" />
              Fully Responsive
            </span>

            <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-400">
              <FiBarChart2 className="text-emerald-400" />
              Modern UI
            </span>

            <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-400">
              <FaLaptopCode className="text-violet-400" />
              {project.deployment}
            </span>
          </div>

          <div className="mt-6">
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-slate-500
              "
            >
              Technology Stack
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map(
                (technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-slate-900/70
                      px-3
                      py-1.5
                      text-xs
                      font-medium
                      text-slate-300
                      transition
                      hover:border-blue-500/30
                      hover:bg-blue-500/10
                      hover:text-blue-400
                    "
                  >
                    {technology}
                  </span>
                )
              )}
            </div>
          </div>

          <div
            className="
              mt-auto
              flex
              flex-col
              gap-3
              pt-7
              sm:flex-row
            "
          >
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                inline-flex
                min-h-12
                flex-1
                items-center
                justify-center
                gap-2.5
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:border-white/20
                hover:bg-white/10
              "
            >
              <FaGithub className="text-lg" />
              Source Code
            </motion.a>

            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                group/button
                inline-flex
                min-h-12
                flex-1
                items-center
                justify-center
                gap-2.5
                rounded-xl
                bg-blue-600
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                shadow-[0_12px_35px_rgba(37,99,235,.25)]
                transition
                hover:bg-blue-500
              "
            >
              <FaExternalLinkAlt />
              Live Demo
              <FaArrowRight className="transition-transform group-hover/button:translate-x-1" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   PROJECTS COMPONENT
========================================================= */

function Projects() {
  const [activeFilter, setActiveFilter] =
    useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter(
          (project) =>
            project.category === activeFilter
        );

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-[#010817]
  
        sm:py-8
      "
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-52
            top-24
            h-[480px]
            w-[480px]
            rounded-full
            bg-blue-600/10
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            -right-48
            bottom-16
            h-[480px]
            w-[480px]
            rounded-full
            bg-cyan-500/10
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_20%,#010817_88%)]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-3xl text-center"
        >


          <h2
            className="
              mt-6
              text-4xl
              font-black
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
          <div
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
              font-bold
              uppercase
              tracking-[0.22em]
              text-blue-400
            "
          >
            <FaLaptopCode />
            Featured Work
          </div>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-slate-400
              sm:text-lg
            "
          >
            A collection of responsive web applications
            that demonstrate my frontend development,
            problem-solving, UI design, and React skills.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="
              mx-auto
              mt-7
              h-1
              rounded-full
              bg-gradient-to-r
              from-blue-600
              to-cyan-400
              shadow-[0_0_18px_rgba(59,130,246,.7)]
            "
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.55,
            delay: 0.15,
          }}
          className="
            mx-auto
            mt-10
            flex
            w-fit
            max-w-full
            flex-wrap
            items-center
            justify-center
            gap-2
            rounded-2xl
            border
            border-white/10
            bg-white/[0.035]
            p-2
            backdrop-blur-xl
          "
        >
          <div
            className="
              hidden
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              text-slate-500
              sm:flex
            "
          >
            <FiFilter />
          </div>

          {filterOptions.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() =>
                setActiveFilter(filter)
              }
              className={`
                rounded-xl
                px-5
                py-2.5
                text-sm
                font-semibold
                transition-all
                duration-300
                ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white shadow-[0_8px_25px_rgba(37,99,235,.3)]"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="
            mt-12
            grid
            grid-cols-1
            gap-7
            lg:grid-cols-2
          "
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(
              (project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              )
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-between
            gap-5
            rounded-3xl
            border
            border-blue-500/20
            bg-gradient-to-r
            from-blue-500/10
            via-cyan-500/5
            to-violet-500/10
            px-6
            py-6
            backdrop-blur-xl
            sm:flex-row
            sm:px-8
          "
        >
          <div>
            <h3 className="text-xl font-bold text-white">
              More projects are coming
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              I continuously build new applications to
              improve my development skills and solve
              real-world problems.
            </p>
          </div>

          <a
            href="https://github.com/devjit1520"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-3
              rounded-xl
              border
              border-blue-500/30
              bg-blue-600
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              shadow-[0_10px_30px_rgba(37,99,235,.25)]
              transition
              hover:bg-blue-500
            "
          >
            <FaGithub className="text-lg" />
            View GitHub Profile
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
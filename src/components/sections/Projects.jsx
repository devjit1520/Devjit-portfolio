import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { AiOutlineJavaScript } from "react-icons/ai";
import { MdHtml , MdCss , MdOutlineSdStorage , MdQuiz  } from "react-icons/md";
import { SiVite } from "react-icons/si";
import { LuListTodo } from "react-icons/lu";

import {
  FaReact,
  FaGithub,
  FaExternalLinkAlt,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

function Projects() {
  const [filter, setFilter] = useState("All");

  const filters = [];

  const projects = [
    {
      id: 1,
      title: "Portfolio Web Sites",
      category: "",
      featured: true,
      status: "Live",

      description:
        "A modern and responsive developer portfolio website built with React and Tailwind CSS, featuring smooth animations, project showcases, and a contact form integration.",

      icon: FaReact,
      iconColor: "text-cyan-400",
      glow: "rgba(34,211,238,0.18)",

      tech: [
        {
          name: "React",
          icon: FaReact,
        },
        {
          name: "Tailwind",
          icon: SiTailwindcss,
        },
        // {
        //   name: "Firebase",
        //   icon: SiFirebase,
        // },
      ],

      performance: 98,
      deployment: "Vercel",
      responsive: true,

      github: "https://github.com/devjit1520",
      demo: "#",
    },

    {
      id: 2,
      title: "Todo Apllication",
      // category: "Full Stack",
      status: "Open Source",

      description:
        "A modern task management application , task priorities, due dates, categories, statistics dashboard, and local storage support.",

      icon: LuListTodo,
      iconColor: "text-green-500",
      glow: "rgba(34,197,94,0.18)",

      tech: [
        {
          name: "React",
          icon: FaReact,
        },
        {
          name: "JavaScript ",
          icon: AiOutlineJavaScript,
        },
        {
          name: "HTML5",
          icon: MdHtml,
        },
         {
          name: "CSS3",
          icon: MdCss ,
        },
         {
          name: "SortableJS",
          icon: AiOutlineJavaScript,
        },
         {
          name: "Local Storage",
          icon: MdOutlineSdStorage,
        },
         {
          name: "Vite",
          icon: SiVite ,
        },
      ],

      performance: 95,
      deployment: "Render",
      responsive: true,

      github: "https://github.com/devjit1520",
      demo: "#",
    },

    {
      id: 3,
      title: "Quiz Application",
      category: "",
      status: "Featured",

      description:
        "An interactive quiz application with multiple categories, timer, score tracking, instant results, and a fully responsive modern interface.",

      icon: MdQuiz ,
      iconColor: "text-pink-500",
      glow: "rgba(236,72,153,0.18)",

      tech: [
        {
          name: "JavaScript",
          icon: AiOutlineJavaScript,
        },
        {
          name: "React",
          icon: FaReact,
        },
        {
          name: "Tailwind",
          icon: SiTailwindcss,
        },
        {
          name: "Vite",
          icon: SiVite,
        },
      ],

      performance: 99,
      deployment: "Vercel",
      responsive: true,

      github: "https://github.com/devjit1520",
      demo: "#",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === filter
        );

  return (
    <section
      id="projects"
      className="py-10 bg-slate-950 relative overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/10 blur-[120px]" />

      <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            My Projects
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            A collection of projects that showcase
            my passion for building beautiful and
            modern web experiences.
          </p>

           <div className="w-24 h-1 bg-blue-500 mx-auto mb-12 mt-5"></div>

        </div>

        {/* Filters */}

        <div className="flex justify-center flex-wrap gap-4">

          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-6 py-3 rounded-full transition border backdrop-blur-xl
              
              ${
                filter === item
                  ? "bg-blue-600 border-blue-600"
                  : "bg-white/5 border-white/10 hover:border-blue-500"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

        {/* Cards */}

        <AnimatePresence mode="wait">

          <div className="grid lg:grid-cols-3 gap-8 mb-10">

            {filteredProjects.map(
              (project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              )
            )}

          </div>

        </AnimatePresence>

      </div>
    </section>
  );
}

/* =====================================
   PROJECT CARD
===================================== */

function ProjectCard({
  project,
  index,
}) {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const Icon = project.icon;

  const handleMouseMove = (e) => {
    const rect =
      e.currentTarget.getBoundingClientRect();

    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className={`relative overflow-hidden rounded-3xl
      border border-white/10
      bg-white/5
      backdrop-blur-xl
      hover:border-blue-500/50
      hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]
      transition-all duration-500
      
      ${
        project.featured
          ? "lg:col-span-2"
          : ""
      }`}
    >
      {/* Mouse Spotlight */}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
          radial-gradient(
            300px circle at
            ${mouse.x}px ${mouse.y}px,
            ${project.glow},
            transparent 70%
          )
          `,
        }}
      />

      {/* Number */}

      <span
        className="absolute top-6 right-6
        text-8xl font-bold text-white/5"
      >
        0{project.id}
      </span>

      {/* Status */}

      <div className="absolute top-6 left-6 z-20">

        <span
          className="
          px-4 py-1
          rounded-full
          text-xs
          bg-green-500/20
          text-green-400
          border
          border-green-500/30
          "
        >
          {project.status}
        </span>

      </div>

      <div className="relative z-10 p-8">

        {/* Icon */}

        <div className="flex justify-center py-10">

          <Icon
            className={`text-8xl ${project.iconColor}`}
          />

        </div>

        {/* Category */}

        <span className="text-blue-400 text-sm">
          {project.category}
        </span>

        {/* Title */}

        <h3 className="text-3xl font-bold mt-3">
          {project.title}
        </h3>

        {/* Description */}

        <p className="text-slate-400 mt-4 leading-7">
          {project.description}
        </p>

        {/* Stats */}

        <div className="flex flex-wrap gap-5 mt-6 text-sm text-slate-300">

          <span>
            ⚡ {project.performance}
            % Performance
          </span>

          <span>
            📱 Responsive
          </span>

          <span>
            🚀 {project.deployment}
          </span>

        </div>

        {/* Tech Stack */}

        <div className="flex flex-wrap gap-3 mt-8">

          {project.tech.map((item) => {

            const TechIcon = item.icon;

            return (
              <span
                key={item.name}
                className="
                flex items-center gap-2
                px-4 py-2
                rounded-full
                bg-slate-800/80
                border border-white/10
                hover:border-blue-500/30
                transition
                "
              >
                <TechIcon />

                {item.name}
              </span>
            );
          })}

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-8">

          <a
            href={project.github}
            className="
            flex items-center gap-2
            px-5 py-3
            rounded-xl
            bg-slate-800
            hover:bg-slate-700
            transition
            "
          >
            <FaGithub />

            GitHub
          </a>

          <a
            href={project.demo}
            className="
            flex items-center gap-2
            px-5 py-3
            rounded-xl
            bg-blue-600
            hover:bg-blue-700
            transition
            "
          >
            <FaExternalLinkAlt />

            Live Demo
          </a>

        </div>

      </div>

    </motion.div>
  );
}

export default Projects;
import { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import {
  FaReact,
  FaGitAlt,
  FaCode,
} from "react-icons/fa";

const skillsData = [
  {
    title: "Frontend Development",
    icon: FaReact,
    iconColor: "text-cyan-400",
    percentage: 90,
    glowColor: "rgba(34,211,238,0.25)",
    description:
      "Building responsive and interactive user interfaces with modern frontend technologies.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "BootStrap",
      "WordPress",
      
    ],
  },

  {
    title: "Tools & Platforms",
    icon: FaGitAlt,
    iconColor: "text-orange-500",
    percentage: 85,
    glowColor: "rgba(249,115,22,0.25)",
    description:
      "Using professional tools for development, version control, and UI design workflows.",
    skills: ["Git", "GitHub", "VS Code", "Adobe Photoshop","Adobe illustrator"],
  },

  {
    title: "Backend & Learning",
    icon: FaCode,
    iconColor: "text-yellow-400",
    percentage: 65,
    glowColor: "rgba(250,204,21,0.25)",
    description:
      "Learning backend technologies and expanding into full-stack development.",
    skills: [ "Next.js", "Node.js"],
  },
];

function SpotlightCard({ item, index }) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const Icon = item.icon;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        transition-all
        duration-300
        hover:border-blue-500/40
        hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]
      "
    >
      {/* Mouse Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              250px circle at
              ${mousePosition.x}px ${mousePosition.y}px,
              ${item.glowColor},
              transparent 70%
            )
          `,
        }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          whileHover={{
            rotate: 10,
            scale: 1.1,
          }}
          className="mb-6"
        >
          {/* {item.percentage} */}
          {/* {item.percentage} */}
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4">
          {item.title}
        </h3>

        {/* Counter */}
        <div className="mb-6">
          <div className="text-5xl font-bold text-blue-500">
            {item.percentage}
            %
          </div>

          <p className="text-slate-400 mt-2">
            Confidence Level
          </p>
        </div>

        {/* Progress Bar */}
        <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{
              width: `${item.percentage}%`,
            }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-blue-500
              to-cyan-400
            "
          />
        </div>

        {/* Description */}
        <p className="text-slate-400 mt-8 leading-7">
          {item.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-3 mt-8">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className="
                px-4
                py-2
                rounded-full
                bg-slate-800/80
                border
                border-white/10
                text-sm
                transition
                hover:border-blue-500/30
                hover:bg-blue-500/10
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="py-10 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold">
           
            My Skill
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-lg text-slate-400">
            Technologies and tools I use to build
            modern, scalable, and beautiful web
            applications.
          </p>

           <div className="w-24 h-1 bg-blue-500 mx-auto mb-12 mt-5"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((item, index) => (
            <SpotlightCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
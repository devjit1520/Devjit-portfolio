import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
  FaStar,
  FaTrophy,
} from "react-icons/fa";

const journeyData = [
  {
    year: "2023",
    title: "Started Web Development",
    company: "Self Learning Journey",
    description:
      "Started learning HTML, CSS, JavaScript, and responsive web design.",

    icon: FaGraduationCap,
    iconColor: "text-yellow-400",
    glow: "rgba(250,204,21,0.2)",

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
    ],

    achievements: [
      
    ],
  },

  {
    year: "2024",
    title: "Build Personal Projects",
    company: "Web Designer",

    description:
      "Created multiple projects using HTML, CSS , JS , BootStrap  and Wordpress while improving UI/UX skills.",

    icon: FaLaptopCode,
    iconColor: "text-cyan-400",
    glow: "rgba(34,211,238,0.2)",

    technologies: [
      "React",
      "Tailwind CSS",
      "GitHub",
    ],

    achievements: [
      
    ],
  },

  {
    year: "2025",
    title: "Frontend Development",
    company: "Personal Portfolio & Freelance",

    description:
      "Building modern, scalable, and interactive web applications with React ecosystem tools.",

    icon: FaRocket,
    iconColor: "text-blue-500",
    glow: "rgba(59,130,246,0.25)",

    technologies: [
      "React JS",
      "Tailwind CSS",
     
    ],

    achievements: [
      
    ],
  },

  {
    year: "2026",
    title: "Future Goal",
    company: "Frontend Developer",

    description:
      "Learning backend technologies.",

    icon: FaStar,
    iconColor: "text-pink-500",
    glow: "rgba(236,72,153,0.25)",

    technologies: [
      "Node.js",
      "MongoDB",
      "Docker",
    ],

    achievements: [
      
    ],
  },
];

function JourneyCard({ item, index }) {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const Icon = item.icon;

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
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      whileHover={{
        y: -8,
      }}
      className="relative overflow-hidden"
    >
      {/* Timeline Dot */}

      <div
        className="
        absolute
        left-0
        top-8
        z-20
        w-5
        h-5
        rounded-full
        bg-blue-500
        shadow-[0_0_20px_rgba(59,130,246,0.8)]
        "
      />

      {/* Year */}

      <div
        className="
        absolute
        left-10
        top-4
        text-blue-400
        text-3xl
        font-bold
        "
      >
        {item.year}
      </div>

      {/* Card */}

      <div
        className="
        ml-32
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        hover:border-blue-500/40
        hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]
        transition-all
        duration-500
        "
      >
        {/* Mouse Spotlight */}

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(
              300px circle at
              ${mouse.x}px ${mouse.y}px,
              ${item.glow},
              transparent 70%
            )`,
          }}
        />

        {/* Big Year Background */}

        <div
          className="
          absolute
          right-8
          top-4
          text-[120px]
          font-bold
          text-white/5
          "
        >
          {item.year}
        </div>

        <div className="relative z-10">
          {/* Header */}

          <div className="flex items-center gap-5">
            <div
              className="
              w-16
              h-16
              rounded-2xl
              bg-white/5
              flex
              items-center
              justify-center
              "
            >
              <Icon
                className={`text-3xl ${item.iconColor}`}
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold">
                {item.title}
              </h3>

              <p className="text-slate-400 mt-1">
                {item.company}
              </p>
            </div>
          </div>

          {/* Description */}

          <p
            className="
            text-slate-300
            leading-8
            mt-8
            "
          >
            {item.description}
          </p>

          {/* Technologies */}

          <div className="flex flex-wrap gap-3 mt-8">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="
                px-4
                py-2
                rounded-full
                bg-slate-800/80
                border
                border-white/10
                hover:border-blue-500/30
                transition
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Achievements */}

          {/* <div className="mt-8">
            <h4
              className="
              flex
              items-center
              gap-2
              font-semibold
              text-lg
              "
            >
              <FaTrophy className="text-yellow-400" />

              Achievements
            </h4>

            <div className="flex flex-wrap gap-3 mt-4">
              {item.achievements.map((achievement) => (
                <span
                  key={achievement}
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-blue-500/10
                  border
                  border-blue-500/20
                  text-blue-300
                  text-sm
                  "
                >
                  🏆 {achievement}
                </span>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="
      py-10
      bg-[#020B2D]
      relative
      overflow-hidden
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        top-20
        left-0
        w-96
        h-96
        bg-blue-500/10
        blur-[150px]
        "
      />

      <div
        className="
        absolute
        bottom-20
        right-0
        w-96
        h-96
        bg-cyan-500/10
        blur-[150px]
        "
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}

        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold">
            My Developer Journey
          </h2>

          

          <p
            className="
            text-slate-400
            max-w-3xl
            mx-auto
            mt-8
            text-lg
            "
          >
            Learning, building, growing, and
            continuously improving my skills
            to become a modern Full Stack
            Developer.
          </p>

          <div
            className="
            w-28
            h-1
            bg-blue-500
            mx-auto
            mt-5
            rounded-full
            "
          />
        </div>

        {/* Timeline */}

        <div className="relative">
          {/* Vertical Line */}

          <div
            className="
            absolute
            left-2
            top-0
            bottom-0
            w-1
            bg-gradient-to-b
            from-blue-500
            to-cyan-400
            rounded-full
            "
          />

          <div className="space-y-20">
            {journeyData.map(
              (item, index) => (
                <JourneyCard
                  key={item.year}
                  item={item}
                  index={index}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
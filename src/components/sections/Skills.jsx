import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaBootstrap,
  FaCode,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaImage,
  FaLaptopCode,
  FaNodeJs,
  FaPenNib,
  FaReact,
  FaTools,
  FaWordpress,
} from "react-icons/fa";

import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

import {
  FiArrowUpRight,
  FiBookOpen,
  FiCheckCircle,
} from "react-icons/fi";

/* =========================================================
   SKILLS DATA
========================================================= */

const skillsData = [
  {
    title: "Frontend Development",
    subtitle: "Core Development",
    description:
      "Building modern, responsive, accessible, and interactive user interfaces for web applications.",

    icon: FaLaptopCode,

    percentage: 90,

    accentText: "text-cyan-400",
    accentBackground: "bg-cyan-500/10",
    accentBorder: "border-cyan-500/20",

    hoverBorder: "hover:border-cyan-500/40",

    glowColor: "rgba(34,211,238,0.22)",

    progressGradient:
      "bg-gradient-to-r from-blue-500 via-cyan-500 to-cyan-300",

    skills: [
      {
        name: "HTML5",
        level: 95,
        icon: FaHtml5,
        color: "text-orange-500",
      },
      {
        name: "CSS3",
        level: 92,
        icon: FaCss3Alt,
        color: "text-blue-500",
      },
      {
        name: "JavaScript",
        level: 85,
        icon: SiJavascript,
        color: "text-yellow-400",
      },
      {
        name: "React.js",
        level: 88,
        icon: FaReact,
        color: "text-cyan-400",
      },
      {
        name: "Tailwind CSS",
        level: 92,
        icon: SiTailwindcss,
        color: "text-sky-400",
      },
      {
        name: "Bootstrap",
        level: 84,
        icon: FaBootstrap,
        color: "text-violet-500",
      },
      {
        name: "WordPress",
        level: 80,
        icon: FaWordpress,
        color: "text-blue-400",
      },
    ],
  },

  {
    title: "Tools & Platforms",
    subtitle: "Development Workflow",
    description:
      "Using professional tools for coding, version control, project building, and visual design workflows.",

    icon: FaTools,

    percentage: 85,

    accentText: "text-orange-400",
    accentBackground: "bg-orange-500/10",
    accentBorder: "border-orange-500/20",

    hoverBorder: "hover:border-orange-500/40",

    glowColor: "rgba(249,115,22,0.22)",

    progressGradient:
      "bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300",

    skills: [
      {
        name: "Git",
        level: 82,
        icon: FaGitAlt,
        color: "text-orange-500",
      },
      {
        name: "GitHub",
        level: 86,
        icon: FaGithub,
        color: "text-white",
      },
      {
        name: "VS Code",
        level: 92,
        icon: VscCode,
        color: "text-blue-400",
      },
      {
        name: "Vite",
        level: 88,
        icon: SiVite,
        color: "text-violet-400",
      },
      {
        name: "Photoshop",
        level: 75,
        icon: FaImage,
        color: "text-blue-500",
      },
      {
        name: "Illustrator",
        level: 72,
        icon: FaPenNib,
        color: "text-orange-500",
      },
    ],
  },

  {
    title: "Currently Learning",
    subtitle: "Expanding My Skills",
    description:
      "Learning modern full-stack technologies to build more complete, scalable, and production-ready applications.",

    icon: FiBookOpen,

    percentage: 60,

    accentText: "text-violet-400",
    accentBackground: "bg-violet-500/10",
    accentBorder: "border-violet-500/20",

    hoverBorder: "hover:border-violet-500/40",

    glowColor: "rgba(139,92,246,0.22)",

    progressGradient:
      "bg-gradient-to-r from-violet-600 via-purple-500 to-pink-400",

    skills: [
      {
        name: "Next.js",
        level: 62,
        icon: SiNextdotjs,
        color: "text-white",
      },
      {
        name: "Node.js",
        level: 55,
        icon: FaNodeJs,
        color: "text-green-500",
      },
      {
        name: "Advanced React",
        level: 68,
        icon: FaReact,
        color: "text-cyan-400",
      },
      {
        name: "Backend Logic",
        level: 48,
        icon: FaCode,
        color: "text-yellow-400",
      },
    ],
  },
];

/* =========================================================
   OVERVIEW DATA
========================================================= */

const overviewData = [
  {
    value: "15+",
    label: "Technologies & Tools",
  },
  {
    value: "100%",
    label: "Responsive Design",
  },
  {
    value: "Modern",
    label: "Development Workflow",
  },
];

/* =========================================================
   SPOTLIGHT CARD
========================================================= */

function SpotlightCard({ item, index }) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [spotlightVisible, setSpotlightVisible] =
    useState(false);

  const CategoryIcon = item.icon;

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
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setSpotlightVisible(true)}
      onMouseLeave={() => setSpotlightVisible(false)}
      initial={{
        opacity: 0,
        y: 45,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -8,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.035]
        p-6
        shadow-[0_22px_70px_rgba(0,0,0,0.25)]
        backdrop-blur-xl
        transition-all
        duration-500
        sm:p-7
        ${item.hoverBorder}
      `}
    >
      {/* Mouse spotlight */}

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
              320px circle at
              ${mousePosition.x}px
              ${mousePosition.y}px,
              ${item.glowColor},
              transparent 68%
            )
          `,
        }}
      />

      {/* Card background design */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-52
          w-52
          rounded-full
          bg-blue-500/5
          blur-[70px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />

      <div className="relative z-10">
        {/* Card header */}

        <div className="flex items-start justify-between gap-5">
          <div
            className={`
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-2xl
              border
              text-2xl
              ${item.accentText}
              ${item.accentBackground}
              ${item.accentBorder}
            `}
          >
            <CategoryIcon />
          </div>

          <div
            className={`
              rounded-full
              border
              px-3
              py-1.5
              text-xs
              font-semibold
              ${item.accentText}
              ${item.accentBackground}
              ${item.accentBorder}
            `}
          >
            {item.subtitle}
          </div>
        </div>

        {/* Title */}

        <h3
          className="
            mt-6
            text-2xl
            font-bold
            text-white
            sm:text-[26px]
          "
        >
          {item.title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-3
            min-h-[72px]
            text-sm
            leading-6
            text-slate-400
            sm:text-[15px]
          "
        >
          {item.description}
        </p>

        {/* Overall progress */}

        <div className="mt-6">
          <div className="mb-3 flex items-end justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Current Level
              </p>

              <p
                className={`
                  mt-1
                  text-3xl
                  font-black
                  ${item.accentText}
                `}
              >
                {item.percentage}%
              </p>
            </div>

            <FiCheckCircle
              className={`
                text-2xl
                ${item.accentText}
              `}
            />
          </div>

          <div
            className="
              h-2.5
              overflow-hidden
              rounded-full
              bg-slate-800/80
            "
          >
            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: `${item.percentage}%`,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.3,
                delay: 0.25 + index * 0.1,
                ease: "easeOut",
              }}
              className={`
                h-full
                rounded-full
                ${item.progressGradient}
              `}
            />
          </div>
        </div>

        {/* Divider */}

        <div className="my-7 h-px bg-white/10" />

        {/* Skills list */}

        <div className="space-y-5">
          {item.skills.map((skill, skillIndex) => {
            const SkillIcon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay:
                    index * 0.08 +
                    skillIndex * 0.05,
                }}
              >
                <div className="mb-2 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/10
                        bg-white/5
                      "
                    >
                      <SkillIcon
                        className={`
                          text-lg
                          ${skill.color}
                        `}
                      />
                    </div>

                    <span className="text-sm font-medium text-slate-200">
                      {skill.name}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-slate-500">
                    {skill.level}%
                  </span>
                </div>

                <div
                  className="
                    ml-12
                    h-1.5
                    overflow-hidden
                    rounded-full
                    bg-slate-800
                  "
                >
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: `${skill.level}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1,
                      delay:
                        0.25 +
                        index * 0.08 +
                        skillIndex * 0.05,
                    }}
                    className={`
                      h-full
                      rounded-full
                      ${item.progressGradient}
                    `}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   SKILLS COMPONENT
========================================================= */

function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[#010817]
        py-20
        sm:py-24
        lg:py-8
      "
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-52
            top-20
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
            bottom-10
            h-[450px]
            w-[450px]
            rounded-full
            bg-violet-500/10
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

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

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
        {/* =================================================
            SECTION HEADING
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.65,
          }}
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
            <FaCode />

            My Expertise
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
            Technologies and tools I use to design and build
            responsive, modern, and user-friendly web
            applications.
          </p>

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 120,
            }}
            viewport={{
              once: true,
            }}
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
              shadow-[0_0_18px_rgba(59,130,246,0.7)]
            "
          />
        </motion.div>

        {/* =================================================
            OVERVIEW BAR
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="
            mx-auto
            mt-12
            grid
            max-w-4xl
            grid-cols-1
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-white/[0.035]
            backdrop-blur-xl
            sm:grid-cols-3
          "
        >
          {overviewData.map((item, index) => (
            <div
              key={item.label}
              className={`
                px-6
                py-5
                text-center
                ${
                  index < overviewData.length - 1
                    ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                    : ""
                }
              `}
            >
              <p className="text-xl font-black text-white">
                {item.value}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* =================================================
            SKILL CARDS
        ================================================== */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-7
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {skillsData.map((item, index) => (
            <SpotlightCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>

        {/* =================================================
            BOTTOM MESSAGE
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
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
              Always learning and improving
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              I continuously explore modern technologies,
              improve my coding logic, and build real-world
              projects.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
            }}
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
              shadow-[0_10px_30px_rgba(37,99,235,0.25)]
              transition
              hover:bg-blue-500
            "
          >
            View My Projects

            <FiArrowUpRight
              className="
                text-lg
                transition-transform
                duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
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
  FiCpu,
  FiLayers,
  FiTrendingUp,
} from "react-icons/fi";

/* =========================================================
   SKILLS DATA
========================================================= */

const skillsData = [
  {
    id: "frontend",
    title: "Frontend Development",
    subtitle: "Core Expertise",
    description:
      "Building responsive, accessible, and interactive user interfaces with modern frontend technologies.",

    icon: FaLaptopCode,

    accentText: "text-cyan-400",
    accentBackground: "bg-cyan-500/10",
    accentBorder: "border-cyan-500/20",

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
    id: "tools",
    title: "Tools & Platforms",
    subtitle: "Development Workflow",
    description:
      "Professional tools and platforms that support coding, version control, design, and deployment.",

    icon: FaTools,

    accentText: "text-emerald-400",
    accentBackground: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/20",

    progressGradient:
      "bg-gradient-to-r from-emerald-500 via-green-400 to-cyan-300",

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
    id: "learning",
    title: "Currently Learning",
    subtitle: "Future Skills",
    description:
      "Expanding into modern full-stack development to create more complete and scalable applications.",

    icon: FiBookOpen,

    accentText: "text-violet-400",
    accentBackground: "bg-violet-500/10",
    accentBorder: "border-violet-500/20",

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
   SUMMARY DATA
========================================================= */

const summaryData = [
  {
    value: "15+",
    label: "Technologies",
    icon: FiCpu,
    color: "text-blue-400",
    background: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    value: "100%",
    label: "Responsive Focus",
    icon: FiLayers,
    color: "text-amber-400",
    background: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    value: "Modern",
    label: "Development",
    icon: FiTrendingUp,
    color: "text-violet-400",
    background: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
];

/* =========================================================
   REUSABLE SKILL ROW
========================================================= */

function SkillRow({
  skill,
  gradient,
  compact = false,
}) {
  const SkillIcon = skill.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -12,
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
      }}
      className="
        rounded-2xl
        border
        border-white/[0.06]
        bg-[#0d1829]
        p-3
        shadow-[inset_3px_3px_8px_rgba(0,0,0,.28),inset_-3px_-3px_8px_rgba(255,255,255,.01)]
      "
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className={`
              flex
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-white/[0.06]
              bg-[#101b2e]
              ${compact ? "h-9 w-9" : "h-10 w-10"}
            `}
          >
            <SkillIcon
              className={`
                ${compact ? "text-base" : "text-lg"}
                ${skill.color}
              `}
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-3">
              <p
                className={`
                  truncate
                  font-semibold
                  text-slate-200
                  ${compact ? "text-xs" : "text-sm"}
                `}
              >
                {skill.name}
              </p>

              <span
                className="
                  shrink-0
                  text-[11px]
                  font-bold
                  text-slate-500
                "
              >
                {skill.level}%
              </span>
            </div>

            <div
              className="
                mt-2
                h-1.5
                
                overflow-hidden
                rounded-full
                bg-slate-900
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
                  duration: 0.9,
                  ease: "easeOut",
                }}
                className={`
                  h-full
                  rounded-full
                  ${gradient}
                `}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   SKILLS SECTION
========================================================= */

function Skills() {
  const frontend = skillsData[0];
  const tools = skillsData[1];
  const learning = skillsData[2];

  const FrontendIcon = frontend.icon;
  const ToolsIcon = tools.icon;
  const LearningIcon = learning.icon;

  const scrollToProjects = () => {
    const section =
      document.getElementById("projects");

    if (!section) return;

    const navbarOffset = 110;

    const target =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[#010817]
        py-8
        sm:py-10
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

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
            bottom-20
            h-[460px]
            w-[460px]
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
            HEADING
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
 <FaCode />
              My Expertise
          </span>
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
            Technologies, tools, and workflows I use to
            create responsive, modern, and user-friendly web
            applications.
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

        {/* =================================================
            BENTO GRID
        ================================================== */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-5
            lg:grid-cols-12
          "
        >
          {/* ===============================================
              FRONTEND — LARGE FEATURED CARD
          ================================================ */}

          <motion.article
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-white/[0.08]
              bg-[#101b2e]/92
              p-5
              shadow-[12px_12px_30px_rgba(0,0,0,.34),-8px_-8px_24px_rgba(59,130,246,.03)]
              backdrop-blur-2xl
              sm:p-6
              lg:col-span-7
            "
          >
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

            <div className="relative z-10 grid gap-6 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-cyan-500/20
                    bg-cyan-500/10
                    text-2xl
                    text-cyan-400
                    shadow-[inset_4px_4px_10px_rgba(0,0,0,.28),inset_-4px_-4px_10px_rgba(255,255,255,.015)]
                  "
                >
                  <FrontendIcon />
                </div>

                <h3
                  className="
                    mt-5
                    text-2xl
                    font-black
                    text-white
                  "
                >
                  {frontend.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-slate-400
                  "
                >
                  {frontend.description}
                </p>

                <div
                  className="
                    mt-5
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-cyan-500/20
                    bg-cyan-500/10
                    px-3
                    py-1.5
                    text-xs
                    font-semibold
                    text-cyan-400
                  "
                >
                  <FiCheckCircle />

                  {frontend.subtitle}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {frontend.skills.map((skill) => (
                  <SkillRow
                    key={skill.name}
                    skill={skill}
                    gradient={
                      frontend.progressGradient
                    }
                    compact
                  />
                ))}
              </div>
            </div>
          </motion.article>

          {/* ===============================================
              TOOLS CARD
          ================================================ */}

          <motion.article
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
              delay: 0.08,
            }}
            className="
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-white/[0.08]
              bg-[#101b2e]/92
              p-5
              shadow-[12px_12px_30px_rgba(0,0,0,.34),-8px_-8px_24px_rgba(59,130,246,.03)]
              backdrop-blur-2xl
              sm:p-6
              lg:col-span-5
            "
          >
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-emerald-500/20
                    bg-emerald-500/10
                    text-2xl
                    text-emerald-400
                  "
                >
                  <ToolsIcon />
                </div>

                <span
                  className="
                    rounded-full
                    border
                    border-emerald-500/20
                    bg-emerald-500/10
                    px-3
                    py-1.5
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-emerald-400
                  "
                >
                  {tools.subtitle}
                </span>
              </div>

              <h3
                className="
                  mt-5
                  text-2xl
                  font-black
                  text-white
                "
              >
                {tools.title}
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-7
                  text-slate-400
                "
              >
                {tools.description}
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {tools.skills.map((skill) => (
                  <SkillRow
                    key={skill.name}
                    skill={skill}
                    gradient={
                      tools.progressGradient
                    }
                    compact
                  />
                ))}
              </div>
            </div>
          </motion.article>

          {/* ===============================================
              TECHNOLOGY STACK — WIDE CARD
          ================================================ */}

          <motion.article
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
              delay: 0.12,
            }}
            className="
              rounded-[30px]
              border
              border-white/[0.08]
              bg-[#101b2e]/92
              p-5
              shadow-[12px_12px_30px_rgba(0,0,0,.34),-8px_-8px_24px_rgba(59,130,246,.03)]
              backdrop-blur-2xl
              sm:p-6
              lg:col-span-7
            "
          >
            <div className="flex items-start gap-4">
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-blue-500/20
                  bg-blue-500/10
                  text-blue-400
                "
              >
                <FiLayers />
              </div>

              <div>
                <h3 className="text-xl font-black text-white">
                  Technology Stack
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Technologies I work with regularly.
                </p>
              </div>
            </div>

            <div
              className="
                mt-5
                grid
                grid-cols-4
                gap-3
                sm:grid-cols-6
                lg:grid-cols-7
              "
            >
              {[
                ...frontend.skills,
                ...tools.skills,
              ].map((skill) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={`stack-${skill.name}`}
                    whileHover={{
                      y: -4,
                      scale: 1.04,
                    }}
                    className="
                      flex
                      aspect-square
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/[0.06]
                      bg-[#0d1829]
                      shadow-[inset_3px_3px_8px_rgba(0,0,0,.28),inset_-3px_-3px_8px_rgba(255,255,255,.01)]
                    "
                    title={skill.name}
                  >
                    <Icon
                      className={`
                        text-2xl
                        ${skill.color}
                      `}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.article>

          {/* ===============================================
              CURRENTLY LEARNING
          ================================================ */}

          <motion.article
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
              delay: 0.16,
            }}
            className="
              rounded-[30px]
              border
              border-white/[0.08]
              bg-[#101b2e]/92
              p-5
              shadow-[12px_12px_30px_rgba(0,0,0,.34),-8px_-8px_24px_rgba(59,130,246,.03)]
              backdrop-blur-2xl
              sm:p-6
              lg:col-span-5
            "
          >
            <div className="flex items-start justify-between gap-4">
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-violet-500/20
                  bg-violet-500/10
                  text-2xl
                  text-violet-400
                "
              >
                <LearningIcon />
              </div>

              <span
                className="
                  rounded-full
                  border
                  border-violet-500/20
                  bg-violet-500/10
                  px-3
                  py-1.5
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-violet-400
                "
              >
                {learning.subtitle}
              </span>
            </div>

            <h3
              className="
                mt-5
                text-2xl
                font-black
                text-white
              "
            >
              {learning.title}
            </h3>

            <p
              className="
                mt-3
                text-sm
                leading-7
                text-slate-400
              "
            >
              {learning.description}
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {learning.skills.map((skill) => (
                <SkillRow
                  key={skill.name}
                  skill={skill}
                  gradient={
                    learning.progressGradient
                  }
                  compact
                />
              ))}
            </div>
          </motion.article>

          {/* ===============================================
              SKILL SUMMARY
          ================================================ */}

          <motion.article
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
              delay: 0.2,
            }}
            className="
              rounded-[30px]
              border
              border-white/[0.08]
              bg-[#101b2e]/92
              p-5
              shadow-[12px_12px_30px_rgba(0,0,0,.34),-8px_-8px_24px_rgba(59,130,246,.03)]
              backdrop-blur-2xl
              sm:p-6
              lg:col-span-12
            "
          >
            <div
              className="
                flex
                flex-col
                gap-5
                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >
              <div>
                <h3 className="text-xl font-black text-white">
                  Skill Summary
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  A quick overview of my current frontend
                  development profile.
                </p>
              </div>

              <div
                className="
                  grid
                  flex-1
                  grid-cols-1
                  gap-3
                  sm:grid-cols-3
                  lg:max-w-3xl
                "
              >
                {summaryData.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-white/[0.06]
                        bg-[#0d1829]
                        p-4
                      "
                    >
                      <div
                        className={`
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          ${item.color}
                          ${item.background}
                          ${item.border}
                        `}
                      >
                        <Icon />
                      </div>

                      <div>
                        <p className="text-lg font-black text-white">
                          {item.value}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.article>
        </div>

        {/* =================================================
            BOTTOM CTA
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
            duration: 0.55,
          }}
          className="
            mt-8
            flex
            flex-col
            items-center
            justify-between
            gap-5
            rounded-[28px]
            border
            border-white/[0.08]
            bg-[#101b2e]/92
            px-6
            py-6
            shadow-[10px_10px_26px_rgba(0,0,0,.30),-7px_-7px_20px_rgba(59,130,246,.025)]
            backdrop-blur-2xl
            sm:flex-row
            sm:px-8
          "
        >
          <div>
            <h3 className="text-xl font-black text-white">
              Always learning and improving
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              I continuously explore modern technologies,
              improve my coding logic, and build real-world
              projects.
            </p>
          </div>

          <motion.button
            type="button"
            onClick={scrollToProjects}
            whileHover={{
              y: -2,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-3
              rounded-2xl
              border
              border-blue-500/20
              bg-[#0f1a2d]
              px-5
              py-3
              text-sm
              font-bold
              text-white
              shadow-[7px_7px_16px_rgba(0,0,0,.30),-5px_-5px_14px_rgba(59,130,246,.04)]
              transition
              hover:border-blue-400/35
              hover:text-blue-300
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
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
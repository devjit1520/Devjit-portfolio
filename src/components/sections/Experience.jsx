import { motion } from "framer-motion";

import {
  FaCode,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLaptopCode,
  FaReact,
  FaRocket,
} from "react-icons/fa";

import {
  SiFramer,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

import {
  FiArrowUpRight,
  FiBookOpen,
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";

/* =========================================================
   DEVELOPER JOURNEY DATA
========================================================= */

const journeyData = [
  {
    id: 1,
    year: "2023",
    title: "Jr. Website Designer",
    subtitle: "Started My Development Journey At WYD Creative In Kolkata",

    description:
      "I began learning the core technologies of web development and built a strong foundation in responsive layouts, styling, and JavaScript fundamentals.",

    icon: FaCode,

    accentText: "text-orange-400",
    accentBackground: "bg-orange-500/10",
    accentBorder: "border-orange-500/25",
    glow: "rgba(249,115,22,0.18)",

    skills: [
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "text-orange-500",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "text-blue-500",
      },
      {
        name: "JavaScript",
        icon: FaJs,
        color: "text-yellow-400",
      },
    ],

    highlights: [
      "Learned semantic HTML structure",
      "Built responsive layouts with CSS",
      "Practiced JavaScript fundamentals",
      "Created small frontend projects",
    ],
  },

  {
    id: 2,
    year: "2024",
    title: "React & Modern UI",
    subtitle: "Moved Into Component-Based Development",

    description:
      "I started learning React and modern frontend workflows, focusing on reusable components, state management, responsive interfaces, and clean project structure.",

    icon: FaReact,

    accentText: "text-cyan-400",
    accentBackground: "bg-cyan-500/10",
    accentBorder: "border-cyan-500/25",
    glow: "rgba(34,211,238,0.18)",

    skills: [
      {
        name: "React",
        icon: FaReact,
        color: "text-cyan-400",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-sky-400",
      },
      {
        name: "Vite",
        icon: SiVite,
        color: "text-violet-400",
      },
    ],

    highlights: [
      "Learned React components and props",
      "Practiced state and event handling",
      "Created reusable UI components",
      "Built responsive Tailwind layouts",
    ],
  },

  {
    id: 3,
    year: "2025",
    title: "Real-World Projects",
    subtitle: "Turned Knowledge Into Applications",

    description:
      "I focused on building complete projects that improved my problem-solving ability, JavaScript logic, UI design skills, and understanding of real application workflows.",

    icon: FaLaptopCode,

    accentText: "text-violet-400",
    accentBackground: "bg-violet-500/10",
    accentBorder: "border-violet-500/25",
    glow: "rgba(139,92,246,0.18)",

    skills: [
      {
        name: "React",
        icon: FaReact,
        color: "text-cyan-400",
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
        color: "text-pink-400",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "text-white",
      },
    ],

    highlights: [
      "Built Todo and Quiz applications",
      "Added Local Storage persistence",
      "Implemented filters and search",
      "Deployed projects on Vercel",
    ],
  },

  {
    id: 4,
    year: "2026",
    title: "Advanced Frontend Development",
    subtitle: "Building Production-Style Applications",

    description:
      "I built FinTrack Pro and continued improving my React architecture, reusable components, Context API, data visualization, application routing, and deployment workflow.",

    icon: FaRocket,

    accentText: "text-blue-400",
    accentBackground: "bg-blue-500/10",
    accentBorder: "border-blue-500/25",
    glow: "rgba(59,130,246,0.2)",

    skills: [
      {
        name: "React",
        icon: FaReact,
        color: "text-cyan-400",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-sky-400",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "text-white",
      },
    ],

    highlights: [
      "Built the FinTrack Pro application",
      "Used Context API for global state",
      "Created analytics and chart features",
      "Improved deployment and debugging skills",
    ],
  },
];

/* =========================================================
   OVERVIEW DATA
========================================================= */

const overviewData = [
  {
    value: "2023",
    label: "Journey Started",
    icon: FiCalendar,
    iconColor: "text-orange-400",
    iconBackground: "bg-orange-500/10",
  },
  {
    value: "4+",
    label: "Complete Projects",
    icon: FiBriefcase,
    iconColor: "text-violet-400",
    iconBackground: "bg-violet-500/10",
  },
  {
    value: "15+",
    label: "Tools & Technologies",
    icon: FiTrendingUp,
    iconColor: "text-cyan-400",
    iconBackground: "bg-cyan-500/10",
  },
  {
    value: "Frontend",
    label: "Career Focus",
    icon: FiTarget,
    iconColor: "text-blue-400",
    iconBackground: "bg-blue-500/10",
  },
];

/* =========================================================
   TIMELINE CARD
========================================================= */

function TimelineCard({ item, index }) {
  const MainIcon = item.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -45 : 45,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -6,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.035]
        p-6
        shadow-[0_25px_75px_rgba(0,0,0,0.25)]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-blue-500/30
        sm:p-7
      "
    >
      {/* Card glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-64
          w-64
          rounded-full
          blur-[90px]
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        style={{
          background: item.glow,
          opacity: 0.55,
        }}
      />

      {/* Grid */}

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
        {/* Header */}

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
            <MainIcon />
          </div>

          <span
            className={`
              rounded-full
              border
              px-4
              py-2
              text-sm
              font-bold
              ${item.accentText}
              ${item.accentBackground}
              ${item.accentBorder}
            `}
          >
            {item.year}
          </span>
        </div>

        {/* Titles */}

        <h3
          className="
            mt-6
            text-2xl
            font-black
            tracking-tight
            text-white
            sm:text-3xl
          "
        >
          {item.title}
        </h3>

        <p
          className={`
            mt-2
            text-sm
            font-semibold
            ${item.accentText}
          `}
        >
          {item.subtitle}
        </p>

        {/* Description */}

        <p
          className="
            mt-5
            text-sm
            leading-7
            text-slate-400
            sm:text-base
          "
        >
          {item.description}
        </p>

        {/* Skills */}

        <div className="mt-6 flex flex-wrap gap-3">
          {item.skills.map((skill) => {
            const SkillIcon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-slate-900/70
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-slate-300
                  transition
                  hover:border-blue-500/30
                "
              >
                <SkillIcon
                  className={`
                    text-base
                    ${skill.color}
                  `}
                />

                {skill.name}
              </motion.div>
            );
          })}
        </div>

        {/* Divider */}

        <div className="my-6 h-px bg-white/10" />

        {/* Highlights */}

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {item.highlights.map((highlight) => (
            <div
              key={highlight}
              className="
                flex
                items-start
                gap-3
                text-sm
                leading-6
                text-slate-300
              "
            >
              <FiCheckCircle
                className={`
                  mt-1
                  shrink-0
                  ${item.accentText}
                `}
              />

              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   EXPERIENCE COMPONENT
========================================================= */

function Experience() {
  const scrollToContact = () => {
    const contactSection =
      document.getElementById("contact");

    if (!contactSection) return;

    const navbarHeight = 90;

    const top =
      contactSection.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        bg-[#010817]
  
        sm:py-8
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
            top-32
            h-[500px]
            w-[500px]
            rounded-full
            bg-violet-500/10
            blur-[170px]
          "
        />

        <div
          className="
            absolute
            -right-52
            bottom-20
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-500/10
            blur-[170px]
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
          CONTAINER
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
            HEADING
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
            <FiBookOpen />

            My Journey
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
            A timeline of how I progressed from learning
            frontend fundamentals to building complete,
            responsive React applications.
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
              shadow-[0_0_18px_rgba(59,130,246,.7)]
            "
          />
        </motion.div>

        {/* =================================================
            OVERVIEW STATISTICS
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
            mt-12
            grid
            grid-cols-2
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/[0.035]
            backdrop-blur-xl
            lg:grid-cols-4
          "
        >
          {overviewData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`
                  flex
                  min-h-[110px]
                  items-center
                  gap-4
                  p-5
                  sm:p-6
                  ${
                    index % 2 === 0
                      ? "border-r border-white/10"
                      : ""
                  }
                  ${
                    index < 2
                      ? "border-b border-white/10 lg:border-b-0"
                      : ""
                  }
                  ${
                    index < 3
                      ? "lg:border-r lg:border-white/10"
                      : ""
                  }
                `}
              >
                <div
                  className={`
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    text-xl
                    ${item.iconColor}
                    ${item.iconBackground}
                  `}
                >
                  <Icon />
                </div>

                <div>
                  <h3 className="text-xl font-black text-white sm:text-2xl">
                    {item.value}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* =================================================
            JOURNEY TIMELINE
        ================================================== */}

        <div className="relative mt-16">
          {/* Desktop center line */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-1/2
              top-0
              hidden
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-blue-500/10
              via-blue-500/60
              to-violet-500/10
              lg:block
            "
          />

          {/* Mobile line */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-[19px]
              top-0
              w-px
              bg-gradient-to-b
              from-blue-500/10
              via-blue-500/60
              to-violet-500/10
              lg:hidden
            "
          />

          <div className="space-y-10 lg:space-y-14">
            {journeyData.map((item, index) => (
              <div
                key={item.id}
                className="
                  relative
                  grid
                  grid-cols-[40px_1fr]
                  gap-5
                  lg:grid-cols-[1fr_72px_1fr]
                  lg:gap-8
                "
              >
                {/* Desktop left content */}

                {index % 2 === 0 ? (
                  <div className="hidden lg:block">
                    <TimelineCard
                      item={item}
                      index={index}
                    />
                  </div>
                ) : (
                  <div className="hidden lg:block" />
                )}

                {/* Timeline marker */}

                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                  }}
                  className="
                    relative
                    z-20
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-blue-500/40
                    bg-[#071128]
                    shadow-[0_0_25px_rgba(59,130,246,.35)]
                    lg:mx-auto
                    lg:mt-8
                    lg:h-14
                    lg:w-14
                  "
                >
                  <span
                    className="
                      h-3
                      w-3
                      rounded-full
                      bg-blue-500
                      shadow-[0_0_15px_rgba(59,130,246,.9)]
                    "
                  />
                </motion.div>

                {/* Mobile card / desktop right */}

                <div>
                  <div className="lg:hidden">
                    <TimelineCard
                      item={item}
                      index={index}
                    />
                  </div>

                  {index % 2 !== 0 && (
                    <div className="hidden lg:block">
                      <TimelineCard
                        item={item}
                        index={index}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =================================================
            CAREER CTA
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
            mt-16
            flex
            flex-col
            items-center
            justify-between
            gap-6
            rounded-3xl
            border
            border-blue-500/20
            bg-gradient-to-r
            from-blue-500/10
            via-cyan-500/5
            to-violet-500/10
            px-6
            py-7
            backdrop-blur-xl
            sm:flex-row
            sm:px-8
          "
        >
          <div>
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-blue-400
              "
            >
              My Next Goal
            </p>

            <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              Ready to contribute as a Frontend Developer
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              I am looking for opportunities where I can
              apply my frontend skills, learn from an
              experienced team, and build meaningful products.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToContact}
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-3
              rounded-xl
              bg-blue-600
              px-6
              py-3.5
              text-sm
              font-semibold
              text-white
              shadow-[0_12px_35px_rgba(37,99,235,.3)]
              transition
              hover:bg-blue-500
            "
          >
            Contact Me

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

export default Experience;
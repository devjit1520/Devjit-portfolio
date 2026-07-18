import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaArrowRight,
  FaCode,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaReact,
  FaWordpress,
} from "react-icons/fa";

import {
  SiGit,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import {
  FiBriefcase,
  FiClock,
  FiLayers,
  FiStar,
} from "react-icons/fi";

import {
  HiCheckCircle,
  HiLightningBolt,
} from "react-icons/hi";

import profile from "../../assets/devjit.png";

/* =========================================================
   TECHNOLOGIES
========================================================= */

const technologies = [
  {
    name: "React",
    icon: FaReact,
    textColor: "text-cyan-400",
    background: "bg-cyan-500/10",
    border: "border-cyan-500/25",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    textColor: "text-sky-400",
    background: "bg-sky-500/10",
    border: "border-sky-500/25",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    textColor: "text-yellow-400",
    background: "bg-yellow-500/10",
    border: "border-yellow-500/25",
  },
  {
    name: "WordPress",
    icon: FaWordpress,
    textColor: "text-orange-400",
    background: "bg-orange-500/10",
    border: "border-orange-500/25",
  },
];

/* =========================================================
   SOCIAL LINKS
========================================================= */

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/devjit1520",
    hover:
      "hover:border-slate-300/50 hover:text-white hover:shadow-[0_0_25px_rgba(148,163,184,0.25)]",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/devjit-mondal-b68947233/",
    hover:
      "hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/iamdevjit_15",
    hover:
      "hover:border-pink-500/50 hover:text-pink-400 hover:shadow-[0_0_25px_rgba(236,72,153,0.3)]",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    href: "mailto:devjit1682002@gmail.com",
    hover:
      "hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]",
  },
];

/* =========================================================
   HERO STATISTICS
========================================================= */

const statistics = [
  {
    value: "5+",
    label: "Projects Completed",
    icon: FiLayers,
    iconColor: "text-violet-400",
    iconBackground: "bg-violet-500/10",
  },
  {
    value: "10+",
    label: "Technologies",
    icon: FiStar,
    iconColor: "text-emerald-400",
    iconBackground: "bg-emerald-500/10",
  },
  {
    value: "1+",
    label: "Years Learning",
    icon: FiBriefcase,
    iconColor: "text-yellow-400",
    iconBackground: "bg-yellow-500/10",
  },
  {
    value: "Open",
    label: "Freelance Available",
    icon: FiClock,
    iconColor: "text-pink-400",
    iconBackground: "bg-pink-500/10",
  },
];

/* =========================================================
   REUSABLE FLOATING CARD
========================================================= */

function FloatingCard({
  children,
  className = "",
  delay = 0,
  distance = 8,
}) {
  return (
    <motion.div
      animate={{
        y: [0, -distance, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute
        z-30
        rounded-2xl
        border
        border-white/10
        bg-[#08142f]/90
        px-4
        py-3
        shadow-[0_18px_50px_rgba(0,0,0,0.4)]
        backdrop-blur-xl
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   ORBIT TECHNOLOGY ICON
========================================================= */

function OrbitIcon({
  icon: Icon,
  className = "",
  iconColor = "text-blue-400",
  delay = 0,
}) {
  return (
    <motion.div
      animate={{
        y: [0, -7, 0],
        rotate: [0, 5, 0, -5, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute
        z-20
        hidden
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        border
        border-white/10
        bg-[#07142d]/90
        text-xl
        shadow-xl
        backdrop-blur-xl
        xl:flex
        ${className}
      `}
    >
      <Icon className={iconColor} />
    </motion.div>
  );
}

/* =========================================================
   HERO COMPONENT
========================================================= */

function Hero() {
  const [spotlight, setSpotlight] = useState({
    x: 50,
    y: 50,
  });

  const handleMouseMove = (event) => {
    const bounds =
      event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - bounds.left) /
        bounds.width) *
      100;

    const y =
      ((event.clientY - bounds.top) /
        bounds.height) *
      100;

    setSpotlight({ x, y });
  };

  const scrollToProjects = () => {
    const projectsSection =
      document.getElementById("projects");

    if (!projectsSection) return;

    const navbarHeight = 90;

    const targetPosition =
      projectsSection.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#010817]
        pt-24
        pb-6
        lg:h-screen
        lg:min-h-[760px]
        lg:pt-24
      "
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Mouse-follow spotlight */}

        <div
          className="
            absolute
            inset-0
            hidden
            opacity-60
            transition-[background]
            duration-200
            lg:block
          "
          style={{
            background: `
              radial-gradient(
                650px circle at
                ${spotlight.x}% ${spotlight.y}%,
                rgba(37, 99, 235, 0.13),
                transparent 60%
              )
            `,
          }}
        />

        {/* Gradient glows */}

        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-10
            h-[460px]
            w-[460px]
            rounded-full
            bg-blue-600/15
            blur-[155px]
          "
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-0
            top-10
            h-[520px]
            w-[520px]
            rounded-full
            bg-cyan-500/10
            blur-[175px]
          "
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-0
            left-1/3
            h-[340px]
            w-[340px]
            rounded-full
            bg-violet-500/10
            blur-[150px]
          "
        />

        {/* Grid pattern */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
            [background-size:46px_46px]
          "
        />

        {/* Edge vignette */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_15%,#010817_84%)]
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
          flex
          h-full
          max-w-7xl
          flex-col
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* =================================================
            MAIN HERO GRID
        ================================================== */}

        <div
          className="
            grid
            flex-1
            grid-cols-1
            items-center
            gap-8
            lg:min-h-0
            lg:grid-cols-2
            lg:gap-12
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -45,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.75,
            }}
            className="order-2 lg:order-1"
          >
            {/* Availability badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: -16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
              }}
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-emerald-500/25
                bg-emerald-500/5
                px-4
                py-2.5
                text-sm
                text-slate-200
                shadow-[0_0_30px_rgba(16,185,129,0.06)]
                backdrop-blur-xl
                sm:text-base
              "
            >
              <span className="relative flex h-3 w-3">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-emerald-400
                    opacity-60
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-3
                    w-3
                    rounded-full
                    bg-emerald-500
                  "
                />
              </span>

              Available for Work & Freelance
            </motion.div>

            {/* Greeting */}

            <p
              className="
                mt-5
                text-xl
                font-medium
                text-blue-500
                sm:text-2xl
              "
            >
              Hey, I&apos;m
            </p>

            {/* Main name */}

            <h1
              className="
                mt-2
                text-5xl
                font-black
                leading-none
                tracking-tight
                text-white
                sm:text-6xl
                lg:text-7xl
              "
            >
              Devjit Mondal
            </h1>

            {/* Typewriter role */}

            <div
              className="
                mt-3
                min-h-[42px]
                text-2xl
                font-bold
                text-blue-400
                sm:text-3xl
              "
            >
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  1800,
                  "React Developer",
                  1800,
                  "Web Designer",
                  1800,
                  "UI/UX Designer",
                  1800,
                  "Freelancer",
                  1800,
                ]}
                speed={45}
                repeat={Infinity}
              />
            </div>

            {/* Description */}

            <p
              className="
                mt-4
                max-w-xl
                text-base
                leading-7
                text-slate-400
                lg:text-lg
              "
            >
              I create modern, responsive, and
              high-performance web applications using
              React, Tailwind CSS, JavaScript, and other
              frontend technologies.
            </p>

            {/* CTA buttons */}

            <div
              className="
                mt-6
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >
              <motion.button
                type="button"
                onClick={scrollToProjects}
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  relative
                  inline-flex
                  min-h-14
                  overflow-hidden
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-blue-600
                  px-7
                  py-4
                  font-semibold
                  text-white
                  shadow-[0_12px_35px_rgba(37,99,235,0.3)]
                  transition
                  hover:bg-blue-500
                "
              >
                <span
                  className="
                    absolute
                    inset-y-0
                    -left-20
                    w-16
                    rotate-12
                    bg-white/20
                    blur-md
                    transition-all
                    duration-700
                    group-hover:left-[120%]
                  "
                />

                <span className="relative">
                  View My Work
                </span>

                <FaArrowRight
                  className="
                    relative
                    transition-transform
                    duration-300
                    group-hover:translate-x-1.5
                  "
                />
              </motion.button>

              <motion.a
                href="/Devjit_Mondal.pdf"
                download
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  inline-flex
                  min-h-14
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/15
                  bg-white/[0.035]
                  px-7
                  py-4
                  font-semibold
                  text-white
                  backdrop-blur-xl
                  transition
                  hover:border-blue-500/40
                  hover:bg-blue-500/10
                  hover:shadow-[0_0_25px_rgba(59,130,246,0.13)]
                "
              >
                <FaDownload />

                Download Resume
              </motion.a>
            </div>

            {/* Social media links */}

            <div
              className="
                mt-5
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;

                const isExternal =
                  social.name !== "Email";

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={
                      isExternal
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      isExternal
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.name}
                    title={social.name}
                    whileHover={{
                      y: -4,
                      scale: 1.07,
                    }}
                    whileTap={{
                      scale: 0.94,
                    }}
                    className={`
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.035]
                      text-xl
                      text-slate-300
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      ${social.hover}
                    `}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>

{/* Technology Pills */}

<div
  className="
    mt-4
    grid
    grid-cols-2
    gap-2
    sm:grid-cols-4
  "
>
  {technologies.map((technology) => {
    const Icon = technology.icon;

    return (
      <motion.div
        key={technology.name}
        whileHover={{
          y: -3,
          scale: 1.03,
        }}
        className={`
          flex
          min-w-0
          items-center
          justify-center
          gap-2
          whitespace-nowrap
          rounded-full
          border
          px-3
          py-2
          text-xs
          font-semibold
          backdrop-blur-xl
          lg:text-sm
          ${technology.background}
          ${technology.border}
          ${technology.textColor}
        `}
      >
        <Icon className="shrink-0 text-base" />

        <span className="truncate">
          {technology.name}
        </span>
      </motion.div>
    );
  })}
</div>
          </motion.div>

          {/* =================================================
              RIGHT PROFILE PANEL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 45,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.75,
              delay: 0.08,
            }}
            className="order-1 lg:order-2"
          >
            <div
              className="
                relative
                mx-auto
                min-h-[390px]
                w-full
                max-w-[600px]
                overflow-hidden
                rounded-[34px]
                border
                border-white/10
                bg-gradient-to-br
                from-slate-900/85
                via-[#07142d]/90
                to-[#0c203a]/75
                p-5
                shadow-[0_25px_80px_rgba(0,0,0,0.45)]
                backdrop-blur-2xl
                sm:min-h-[460px]
                lg:h-[480px]
                lg:min-h-0
              "
            >
              {/* Inner gradient */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.14),transparent_58%)]
                "
              />

              {/* Inner border */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[1px]
                  rounded-[33px]
                  border
                  border-blue-400/5
                "
              />

              {/* Decorative dots */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-10
                  top-10
                  grid
                  grid-cols-6
                  gap-3
                  opacity-25
                "
              >
                {Array.from({
                  length: 24,
                }).map((_, index) => (
                  <span
                    key={index}
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-blue-300
                    "
                  />
                ))}
              </div>

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-14
                  left-10
                  grid
                  grid-cols-5
                  gap-3
                  opacity-15
                "
              >
                {Array.from({
                  length: 15,
                }).map((_, index) => (
                  <span
                    key={index}
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-cyan-300
                    "
                  />
                ))}
              </div>

              {/* Decorative SVG paths */}

              <svg
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  hidden
                  h-full
                  w-full
                  opacity-50
                  sm:block
                "
                viewBox="0 0 620 520"
                fill="none"
              >
                <motion.path
                  d="M82 120 C25 155 130 195 60 255 C15 300 120 330 75 400"
                  stroke="rgba(59,130,246,.35)"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                  initial={{
                    pathLength: 0,
                  }}
                  animate={{
                    pathLength: 1,
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.6,
                  }}
                />

                <motion.path
                  d="M545 235 C600 280 520 315 565 365 C600 405 540 440 555 485"
                  stroke="rgba(34,211,238,.45)"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                  initial={{
                    pathLength: 0,
                  }}
                  animate={{
                    pathLength: 1,
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.8,
                  }}
                />
              </svg>

              {/* Profile photo area */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  z-10
                  flex
                  -translate-x-1/2
                  -translate-y-[41%]
                  items-center
                  justify-center
                "
              >
                {/* Blue glow */}

                <motion.div
                  animate={{
                    scale: [1, 1.04, 1],
                    opacity: [0.5, 0.75, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    h-[255px]
                    w-[255px]
                    rounded-full
                    bg-blue-500/25
                    blur-[65px]
                    sm:h-[330px]
                    sm:w-[330px]
                  "
                />

                {/* Outer rotating ring */}

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    h-[260px]
                    w-[260px]
                    rounded-full
                    border
                    border-dashed
                    border-blue-400/45
                    sm:h-[335px]
                    sm:w-[335px]
                    lg:h-[350px]
                    lg:w-[350px]
                  "
                />

                {/* Inner rotating ring */}

                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    h-[275px]
                    w-[275px]
                    rounded-full
                    border
                    border-cyan-400/15
                    sm:h-[350px]
                    sm:w-[350px]
                    lg:h-[365px]
                    lg:w-[365px]
                  "
                />

                <img
                  src={profile}
                  alt="Devjit Mondal"
                  className="
                    relative
                    h-[230px]
                    w-[230px]
                    rounded-full
                    border-[4px]
                    border-blue-500
                    object-cover
                    shadow-[0_0_55px_rgba(37,99,235,0.45)]
                    sm:h-[300px]
                    sm:w-[300px]
                    lg:h-[315px]
                    lg:w-[315px]
                  "
                />

                {/* Orbit icons */}

                <OrbitIcon
                  icon={FaReact}
                  iconColor="text-cyan-400"
                  className="-left-20 top-5"
                  delay={0}
                />

                <OrbitIcon
                  icon={SiJavascript}
                  iconColor="text-yellow-400"
                  className="-right-20 top-14"
                  delay={0.4}
                />

                <OrbitIcon
                  icon={SiTailwindcss}
                  iconColor="text-sky-400"
                  className="-left-16 bottom-0"
                  delay={0.8}
                />

                <OrbitIcon
                  icon={SiGit}
                  iconColor="text-orange-400"
                  className="-right-16 bottom-4"
                  delay={1.2}
                />
              </div>

              {/* Frontend developer card */}

              <FloatingCard
                className="
                  left-4
                  top-5
                  sm:left-7
                  sm:top-7
                "
              >
                <div className="flex items-center gap-3">
                  <HiCheckCircle
                    className="
                      text-xl
                      text-emerald-400
                    "
                  />

                  <div>
                    <h3
                      className="
                        text-sm
                        font-bold
                        text-white
                        sm:text-base
                      "
                    >
                      Frontend Developer
                    </h3>

                    <p
                      className="
                        mt-0.5
                        hidden
                        text-xs
                        text-slate-400
                        sm:block
                      "
                    >
                      Building amazing UI
                    </p>
                  </div>
                </div>
              </FloatingCard>

              {/* Performance card */}

              <FloatingCard
                className="
                  right-2
                  top-[42%]
                  sm:right-3
                "
                delay={0.5}
                distance={12}
              >
                <div className="flex items-center gap-3">
                  <HiLightningBolt
                    className="
                      text-2xl
                      text-yellow-400
                    "
                  />

                  <div>
                    <h3
                      className="
                        text-sm
                        font-bold
                        text-white
                        sm:text-base
                      "
                    >
                      Fast & Responsive
                    </h3>

                    <p
                      className="
                        mt-0.5
                        hidden
                        text-xs
                        text-slate-400
                        sm:block
                      "
                    >
                      Performance First
                    </p>
                  </div>
                </div>
              </FloatingCard>

              {/* React card */}

              <FloatingCard
                className="
                  bottom-10
                  left-2
                  sm:bottom-20
                  sm:left-5
                "
                delay={1}
                distance={10}
              >
                <div className="flex items-center gap-3">
                  <FaReact
                    className="
                      text-2xl
                      text-cyan-400
                    "
                  />

                  <div>
                    <h3
                      className="
                        text-sm
                        font-bold
                        text-white
                        sm:text-base
                      "
                    >
                      React
                    </h3>

                    <p
                      className="
                        mt-0.5
                        hidden
                        text-xs
                        text-slate-400
                        sm:block
                      "
                    >
                      Modern UI Library
                    </p>
                  </div>
                </div>
              </FloatingCard>

              {/* Clean code card */}

              <FloatingCard
                className="
                  bottom-5
                  right-3
                  hidden
                  sm:block
                "
                delay={1.4}
              >
                <div className="flex items-center gap-3">
                  <FaCode
                    className="
                      text-xl
                      text-cyan-400
                    "
                  />

                  <div>
                    <h3 className="font-bold text-white">
                      Clean Code
                    </h3>

                    <p className="mt-0.5 text-xs text-slate-400">
                      Maintainable & Scalable
                    </p>
                  </div>
                </div>
              </FloatingCard>
            </div>
          </motion.div>
        </div>

        {/* =================================================
            COMPACT STATISTICS BAR
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.75,
            delay: 0.3,
          }}
          className="
            mt-3
            grid
            grid-cols-2
            // overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-[#071020]/90
            shadow-[0_18px_60px_rgba(0,0,0,0.25)]
            backdrop-blur-xl
            lg:grid-cols-4
            
          "
        >
          {statistics.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                whileHover={{
                  backgroundColor:
                    "rgba(59,130,246,0.07)",
                }}
className={`
  flex
  min-h-[74px]
  items-center
  gap-3
  p-4
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
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    ${stat.iconBackground}
                    ${stat.iconColor}
                  `}
                >
                  <Icon />
                </div>

                <div>
                  <h3
                    className="
                      text-xl
                      font-black
                      text-white
                      lg:text-2xl
                    "
                  >
                    {stat.value}
                  </h3>

                  <p
                    className="
                      text-xs
                      text-slate-400
                      lg:text-sm
                    "
                  >
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
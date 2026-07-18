import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaCode,
  FaLaptopCode,
  FaReact,
  FaRocket,
} from "react-icons/fa";

import {
  HiOutlineDeviceMobile,
  HiOutlineLightBulb,
  HiOutlineLightningBolt,
  HiOutlineSparkles,
} from "react-icons/hi";

/* =========================================================
   ABOUT STATISTICS
========================================================= */

const statistics = [
  {
    value: "5+",
    label: "Projects Built",
    icon: FaLaptopCode,
    iconColor: "text-violet-400",
    iconBackground: "bg-violet-500/10",
  },
  {
    value: "10+",
    label: "Technologies",
    icon: FaCode,
    iconColor: "text-cyan-400",
    iconBackground: "bg-cyan-500/10",
  },
  {
    value: "1+",
    label: "Years Learning",
    icon: FaRocket,
    iconColor: "text-yellow-400",
    iconBackground: "bg-yellow-500/10",
  },
  {
    value: "100%",
    label: "Responsive Design",
    icon: HiOutlineDeviceMobile,
    iconColor: "text-emerald-400",
    iconBackground: "bg-emerald-500/10",
  },
];

/* =========================================================
   DEVELOPMENT SERVICES
========================================================= */

const services = [
  {
    title: "Frontend Development",
    description:
      "Building clean, modern and interactive user interfaces using React and JavaScript.",
    icon: FaReact,
    iconColor: "text-cyan-400",
    iconBackground: "bg-cyan-500/10",
  },
  {
    title: "Responsive Design",
    description:
      "Creating layouts that work smoothly across mobile, tablet, laptop and desktop screens.",
    icon: HiOutlineDeviceMobile,
    iconColor: "text-blue-400",
    iconBackground: "bg-blue-500/10",
  },
  {
    title: "UI/UX Implementation",
    description:
      "Turning design ideas into polished, accessible and user-friendly web experiences.",
    icon: HiOutlineSparkles,
    iconColor: "text-pink-400",
    iconBackground: "bg-pink-500/10",
  },
  {
    title: "Performance Focus",
    description:
      "Writing reusable code and improving loading speed, structure and user experience.",
    icon: HiOutlineLightningBolt,
    iconColor: "text-yellow-400",
    iconBackground: "bg-yellow-500/10",
  },
];

/* =========================================================
   CURRENT DEVELOPMENT FOCUS
========================================================= */

const currentFocus = [
  "Advanced React patterns",
  "JavaScript problem solving",
  "Reusable component architecture",
  "Performance optimization",
  "Modern UI animations",
  "Clean and scalable code",
];

/* =========================================================
   REUSABLE SPOTLIGHT CARD

   This component creates the mouse spotlight effect.
========================================================= */

function SpotlightCard({
  children,
  className = "",
  delay = 0,
}) {
  const [mousePosition, setMousePosition] =
    useState({
      x: 0,
      y: 0,
    });

  const handleMouseMove = (event) => {
    const card =
      event.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: event.clientX - card.left,
      y: event.clientY - card.top,
    });
  };

  return (
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{
        y: -5,
      }}
      onMouseMove={handleMouseMove}
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.035]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-blue-500/35
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        ${className}
      `}
    >
      {/* Mouse spotlight */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        style={{
          background: `
            radial-gradient(
              350px circle at
              ${mousePosition.x}px ${mousePosition.y}px,
              rgba(59, 130, 246, 0.16),
              transparent 65%
            )
          `,
        }}
      />

      {/* Top border glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-8
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-blue-400/50
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}

/* =========================================================
   ABOUT COMPONENT
========================================================= */

function About() {
  const scrollToSection = (sectionId) => {
    const section =
      document.getElementById(sectionId);

    if (!section) return;

    const navbarHeight = 90;

    const targetPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="about"
      className="
        relative
        
        overflow-hidden
        bg-[#020B2D]
        py-20
        sm:py-24
        lg:py-10
      "
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-40
            top-28
            h-[420px]
            w-[420px]
            rounded-full
            bg-blue-600/10
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-20
            h-[460px]
            w-[460px]
            rounded-full
            bg-cyan-500/10
            blur-[160px]
          "
        />

        {/* Grid pattern */}

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
            bg-[radial-gradient(circle_at_center,transparent_20%,#020B2D_88%)]
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
          className="mx-auto mb-14 max-w-3xl text-center"
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
            <HiOutlineSparkles />

            About Me
          </span>
          </h2>

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
            I enjoy transforming ideas into
            modern, responsive and meaningful
            digital experiences.
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
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-12
          "
        >
          {/* ===============================================
              MAIN INTRODUCTION CARD
          ================================================ */}

          <SpotlightCard
            className="
              p-6
              sm:p-8
              lg:col-span-7
              lg:p-10
            "
          >
            <div
              className="
                flex
                h-full
                flex-col
                justify-between
              "
            >
              <div>
                <div
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-blue-500/20
                      bg-blue-500/10
                      text-2xl
                      text-blue-400
                    "
                  >
                    <HiOutlineLightBulb />
                  </div>

                  <div>
                    <p
                      className="
                        text-sm
                        font-medium
                        uppercase
                        tracking-[0.18em]
                        text-blue-400
                      "
                    >
                      My Introduction
                    </p>

                    <h3
                      className="
                        mt-1
                        text-2xl
                        font-bold
                        text-white
                        sm:text-3xl
                      "
                    >
                      Frontend Developer Who Loves
                      Building Modern Interfaces
                    </h3>
                  </div>
                </div>

                <div
                  className="
                    mt-8
                    space-y-5
                    text-base
                    leading-8
                    text-slate-400
                    sm:text-lg
                  "
                >
                  <p>
                    Hello! I&apos;m{" "}
                    <span className="font-semibold text-white">
                      Devjit Mondal
                    </span>
                    , a frontend developer focused on
                    building responsive, interactive and
                    user-friendly websites.
                  </p>

                  <p>
                    I work mainly with{" "}
                    <span className="font-medium text-cyan-400">
                      React
                    </span>
                    ,{" "}
                    <span className="font-medium text-sky-400">
                      Tailwind CSS
                    </span>{" "}
                    and{" "}
                    <span className="font-medium text-yellow-400">
                      JavaScript
                    </span>
                    . I enjoy learning how interfaces work,
                    solving layout problems and turning
                    designs into real applications.
                  </p>

                  <p>
                    My current goal is to strengthen my
                    JavaScript and React problem-solving
                    skills while building professional
                    projects that provide real value.
                  </p>
                </div>
              </div>

              {/* Action buttons */}

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                "
              >
                <motion.button
                  type="button"
                  onClick={() =>
                    scrollToSection("projects")
                  }
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-blue-600
                    px-6
                    py-3.5
                    font-semibold
                    text-white
                    shadow-[0_12px_30px_rgba(37,99,235,0.25)]
                    transition
                    hover:bg-blue-500
                  "
                >
                  View My Projects

                  <FaRocket />
                </motion.button>

                <motion.button
                  type="button"
                  onClick={() =>
                    scrollToSection("contact")
                  }
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-6
                    py-3.5
                    font-semibold
                    text-white
                    transition
                    hover:border-blue-500/30
                    hover:bg-blue-500/10
                  "
                >
                  Let&apos;s Connect
                </motion.button>
              </div>
            </div>
          </SpotlightCard>

          {/* ===============================================
              STATISTICS CARD
          ================================================ */}

          <SpotlightCard
            delay={0.08}
            className="
              p-6
              sm:p-8
              lg:col-span-5
            "
          >
            <div>
              <p
                className="
                  text-sm
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-blue-400
                "
              >
                My Progress
              </p>

              <h3
                className="
                  mt-2
                  text-2xl
                  font-bold
                  text-white
                  sm:text-3xl
                "
              >
                Learning Through Building
              </h3>
            </div>

            <div
              className="
                mt-7
                grid
                grid-cols-2
                gap-4
              "
            >
              {statistics.map((stat) => {
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={stat.label}
                    whileHover={{
                      y: -4,
                    }}
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-slate-900/45
                      p-4
                      transition
                      hover:border-blue-500/25
                    "
                  >
                    <div
                      className={`
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        text-xl
                        ${stat.iconBackground}
                        ${stat.iconColor}
                      `}
                    >
                      <Icon />
                    </div>

                    <h4
                      className="
                        mt-4
                        text-2xl
                        font-black
                        text-white
                        sm:text-3xl
                      "
                    >
                      {stat.value}
                    </h4>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-5
                        text-slate-400
                        sm:text-sm
                      "
                    >
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </SpotlightCard>

          {/* ===============================================
              SERVICES
          ================================================ */}

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <SpotlightCard
                key={service.title}
                delay={0.12 + index * 0.06}
                className="
                  p-6
                  sm:p-7
                  lg:col-span-3
                "
              >
                <div
                  className={`
                    flex
                    h-13
                    w-13
                    items-center
                    justify-center
                    rounded-2xl
                    text-2xl
                    ${service.iconBackground}
                    ${service.iconColor}
                  `}
                >
                  <Icon />
                </div>

                <h3
                  className="
                    mt-5
                    text-xl
                    font-bold
                    text-white
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-slate-400
                  "
                >
                  {service.description}
                </p>
              </SpotlightCard>
            );
          })}

{/* ===============================================
    CURRENT FOCUS CARD
=============================================== */}

      <SpotlightCard
        delay={0.25}
        className="
          p-5
          sm:p-7
          lg:col-span-7
          lg:p-8
        "
      >
        <div
          className="
            grid
            min-w-0
            grid-cols-1
            gap-8
            lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]
            lg:items-center
          "
        >
          {/* =========================================
              LEFT CONTENT
          ========================================== */}

          <div className="min-w-0">
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-violet-500/25
                bg-violet-500/10
                text-2xl
                text-violet-400
                shadow-[0_0_25px_rgba(139,92,246,0.12)]
              "
            >
              <FaRocket />
            </div>

            <p
              className="
                mt-5
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-violet-400
                sm:text-sm
              "
            >
              Current Focus
            </p>

            <h3
              className="
                mt-2
                max-w-lg
                text-2xl
                font-bold
                leading-tight
                text-white
                sm:text-3xl
              "
            >
              Improving My Development Skills Every Day
            </h3>

            <p
              className="
                mt-4
                max-w-lg
                text-sm
                leading-7
                text-slate-400
                sm:text-base
              "
            >
              I am continuously practising JavaScript logic,
              React architecture, reusable components and
              professional frontend development.
            </p>

            {/* Learning status */}

            <div
              className="
                mt-6
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-emerald-500/20
                bg-emerald-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-emerald-400
              "
            >
              <span className="relative flex h-2.5 w-2.5">
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
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-emerald-500
                  "
                />
              </span>

              Currently learning and building
            </div>
          </div>

          {/* =========================================
              RIGHT FOCUS ITEMS
          ========================================== */}

          <div
            className="
              grid
              min-w-0
              grid-cols-1
              gap-3
              sm:grid-cols-2
            "
          >
            {currentFocus.map((focusItem, index) => (
              <motion.div
                key={focusItem}
                initial={{
                  opacity: 0,
                  x: 20,
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
                  delay: index * 0.06,
                }}
                whileHover={{
                  x: 4,
                  scale: 1.01,
                }}
                className="
                  group
                  relative
                  flex
                  min-w-0
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-slate-900/50
                  px-4
                  py-4
                  transition-all
                  duration-300
                  hover:border-blue-500/30
                  hover:bg-blue-500/[0.07]
                  hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]
                "
              >
                {/* Number */}

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-blue-500/20
                    bg-blue-500/10
                    text-xs
                    font-bold
                    text-blue-400
                    transition
                    group-hover:border-blue-400/40
                    group-hover:bg-blue-500/20
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Focus text */}

                <p
                  className="
                    min-w-0
                    text-sm
                    font-medium
                    leading-5
                    text-slate-300
                    transition-colors
                    group-hover:text-white
                  "
                >
                  {focusItem}
                </p>

                {/* Hover glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-8
                    -top-8
                    h-20
                    w-20
                    rounded-full
                    bg-blue-500/10
                    blur-2xl
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />
              </motion.div>
            ))}
          </div>
        </div>
      </SpotlightCard>

          {/* ===============================================
              PERSONAL PHILOSOPHY CARD
          ================================================ */}

          <SpotlightCard
            delay={0.32}
            className="
              p-6
              sm:p-8
              lg:col-span-5
            "
          >
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-yellow-500/20
                bg-yellow-500/10
                text-2xl
                text-yellow-400
              "
            >
              <HiOutlineLightBulb />
            </div>

            <p
              className="
                mt-5
                text-sm
                font-medium
                uppercase
                tracking-[0.18em]
                text-yellow-400
              "
            >
              My Philosophy
            </p>

            <blockquote
              className="
                mt-4
                text-xl
                font-semibold
                leading-9
                text-white
                sm:text-2xl
              "
            >
              “Great interfaces should not only
              look beautiful—they should feel simple,
              fast and useful.”
            </blockquote>

            <p
              className="
                mt-5
                leading-7
                text-slate-400
              "
            >
              I believe clean design, thoughtful
              interaction and maintainable code are
              equally important when creating a
              successful website.
            </p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}

export default About;
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCode,
  FiLayers,
  FiMousePointer,
} from "react-icons/fi";

function BrandBanner() {
  return (
    <section
      id="brand-banner"
      className="
        relative
        isolate
        overflow-hidden
        border-y
        border-white/[0.06]
        bg-[#010817]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-30
          [background-image:linear-gradient(rgba(59,130,246,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.055)_1px,transparent_1px)]
          [background-size:56px_56px]
          [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
        "
      />

      {/* =====================================================
          TOP BLUE GLOW
      ====================================================== */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-190px]
          h-[420px]
          w-[720px]
          -translate-x-1/2
          rounded-full
          bg-blue-600/10
          blur-[125px]
        "
        animate={{
          opacity: [0.3, 0.55, 0.3],
          scale: [0.96, 1.04, 0.96],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          SIDE GLOWS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-190px]
          top-1/2
          h-[420px]
          w-[420px]
          -translate-y-1/2
          rounded-full
          bg-cyan-500/[0.055]
          blur-[115px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-190px]
          left-[-190px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-indigo-600/[0.06]
          blur-[115px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* ===================================================
            TOP META ROW
        ==================================================== */}

        <div
          className="
            mb-7
            flex
            flex-col
            gap-4
            sm:mb-9
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Personal brand */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              flex
              items-center
              gap-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-slate-500
              sm:text-xs
              sm:tracking-[0.18em]
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
                  bg-cyan-400/50
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_12px_rgba(34,211,238,.65)]
                "
              />
            </span>

            <span>Personal Brand</span>
          </motion.div>

          {/* Tech stack */}

          <motion.div
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-white/[0.07]
              bg-white/[0.025]
              px-3.5
              py-2
              text-[10px]
              font-medium
              uppercase
              tracking-[0.12em]
              text-slate-500
              backdrop-blur-xl
              sm:px-4
              sm:text-xs
            "
          >
            <FiCode className="text-blue-400" />

            <span>React</span>

            <span className="text-slate-700">•</span>

            <span>Tailwind</span>

            <span className="text-slate-700">•</span>

            <span>UI</span>
          </motion.div>
        </div>

        {/* ===================================================
            BRAND AREA
        ==================================================== */}

        <div className="relative">
          {/* Giant watermark */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              pointer-events-none
              select-none
              overflow-hidden
            "
          >
            <motion.h2
              initial={{
                x: -35,
              }}
              whileInView={{
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
              className="
                whitespace-nowrap
                text-[23vw]
                font-black
                leading-[0.72]
                tracking-[-0.08em]
                text-white/[0.028]
                sm:text-[20vw]
                lg:text-[17vw]
              "
            >
              DEVJIT
              <span className="text-blue-500/[0.15]">.</span>
            </motion.h2>
          </motion.div>

          {/* =================================================
              FRONT CONTENT
          ================================================== */}

          <div
            className="
              relative
              z-10
              -mt-[1vw]
              flex
              flex-col
              gap-7
              lg:-mt-[0.5vw]
              lg:flex-row
              lg:items-end
              lg:justify-between
              lg:gap-10
            "
          >
            {/* Left */}

            <div>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                  mb-4
                  flex
                  items-center
                  gap-3
                  sm:mb-5
                "
              >
                <span
                  className="
                    h-px
                    w-8
                    bg-gradient-to-r
                    from-blue-500
                    to-cyan-400
                    sm:w-10
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-slate-500
                    sm:text-xs
                    sm:tracking-[0.28em]
                  "
                >
                  Building digital experiences
                </span>
              </motion.div>

              {/* Main brand */}

              <motion.h3
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
                  duration: 0.65,
                  delay: 0.1,
                }}
                className="
                  text-5xl
                  font-black
                  tracking-[-0.055em]
                  text-white
                  sm:text-6xl
                  md:text-7xl
                  lg:text-8xl
                  xl:text-9xl
                "
              >
                Devjit
                <span
                  className="
                    bg-gradient-to-r
                    from-blue-400
                    via-cyan-400
                    to-blue-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  .
                </span>
              </motion.h3>
            </div>

            {/* Right description */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
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
                max-w-lg
                lg:pb-3
              "
            >
              <p
                className="
                  text-sm
                  leading-7
                  text-slate-400
                  sm:text-base
                  sm:leading-8
                "
              >
                Frontend developer focused on creating
                modern, responsive, and meaningful digital
                experiences with clean code and thoughtful UI.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ===================================================
            DIVIDER
        ==================================================== */}

        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          whileInView={{
            scaleX: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            my-8
            h-px
            origin-left
            bg-gradient-to-r
            from-blue-500/35
            via-white/[0.07]
            to-transparent
            sm:my-10
          "
        />

        {/* ===================================================
            BOTTOM INFORMATION
        ==================================================== */}

        <div
          className="
            flex
            flex-col
            gap-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Role badges */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              flex
              flex-wrap
              items-center
              gap-2
            "
          >
            {/* Frontend */}

            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-400/20
                bg-blue-500/[0.07]
                px-3.5
                py-2
                text-[11px]
                font-medium
                text-blue-300
                sm:px-4
                sm:text-xs
              "
            >
              <FiLayers />

              Frontend Development
            </span>

            {/* React */}

            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-500/[0.06]
                px-3.5
                py-2
                text-[11px]
                font-medium
                text-cyan-300
                sm:px-4
                sm:text-xs
              "
            >
              <FiCode />

              React & JavaScript
            </span>

            {/* UI */}

            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.025]
                px-3.5
                py-2
                text-[11px]
                font-medium
                text-slate-300
                sm:px-4
                sm:text-xs
              "
            >
              <FiMousePointer />

              UI Engineering
            </span>
          </motion.div>

          {/* Explore */}

          <motion.a
            href="#projects"
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
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-3
              rounded-full
              border
              border-blue-500/25
              bg-blue-500/[0.07]
              px-5
              py-3
              text-sm
              font-semibold
              text-blue-300
              shadow-[0_0_30px_rgba(37,99,235,0.07)]
              transition-all
              duration-300
              hover:border-blue-400/50
              hover:bg-blue-500/[0.12]
              hover:text-white
              hover:shadow-[0_0_35px_rgba(37,99,235,0.16)]
            "
          >
            Explore My Work

            <FiArrowUpRight
              className="
                text-lg
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </motion.a>
        </div>
      </div>

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-16
          bg-gradient-to-t
          from-[#020617]/60
          to-transparent
        "
      />
    </section>
  );
}

export default BrandBanner;
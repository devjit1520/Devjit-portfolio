import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const progressInterval = setInterval(() => {
      setProgress((currentProgress) => {
        if (currentProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }

        return Math.min(
          currentProgress + 2,
          100
        );
      });
    }, 38);

    const loadingTimer = setTimeout(() => {
      onComplete();
    }, 2300);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(loadingTimer);

      document.body.style.overflow =
        previousOverflow;
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.03,
      }}
      transition={{
        duration: 0.55,
        ease: "easeInOut",
      }}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#010817]
        px-5
      "
    >
      {/* Background effects */}

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-600/20
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
            [background-size:42px_42px]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_15%,#010817_78%)]
          "
        />
      </div>

      {/* Main loader */}

      <div className="relative z-10 w-full max-w-sm text-center">
        {/* Logo animation */}

        <div className="relative mx-auto h-28 w-28">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              inset-0
              rounded-[30px]
              border
              border-dashed
              border-blue-400/50
            "
          />

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              inset-3
              flex
              items-center
              justify-center
              overflow-hidden
              rounded-[24px]
              border
              border-blue-500/30
              bg-gradient-to-br
              from-blue-600
              to-cyan-500
              text-3xl
              font-black
              text-white
              shadow-[0_0_45px_rgba(37,99,235,.5)]
            "
          >
            DM

            <motion.span
              animate={{
                x: ["-150%", "180%"],
              }}
              transition={{
                duration: 1.7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                inset-y-0
                w-10
                rotate-12
                bg-white/25
                blur-md
              "
            />
          </motion.div>
        </div>

        {/* Brand */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-8"
        >
          <h1
            className="
              text-3xl
              font-black
              tracking-tight
              text-white
              sm:text-4xl
            "
          >
            <span className="text-blue-500">
              Devjit
            </span>

            <span className="text-white">
              {" "}
              Portfolio
            </span>
          </h1>

          <p
            className="
              mt-3
              text-xs
              font-bold
              uppercase
              tracking-[0.28em]
              text-slate-500
            "
          >
            Frontend Developer
          </p>
        </motion.div>

        {/* Loading text */}

        <div className="mt-10 flex items-center justify-between">
          <p className="text-sm font-medium text-slate-400">
            Preparing experience
          </p>

          <p className="text-sm font-bold text-blue-400">
            {progress}%
          </p>
        </div>

        {/* Progress bar */}

        <div
          className="
            mt-3
            h-2
            overflow-hidden
            rounded-full
            border
            border-white/5
            bg-slate-900
          "
        >
          <motion.div
            animate={{
              width: `${progress}%`,
            }}
            transition={{
              duration: 0.12,
              ease: "linear",
            }}
            className="
              relative
              h-full
              rounded-full
              bg-gradient-to-r
              from-blue-600
              via-blue-400
              to-cyan-400
              shadow-[0_0_18px_rgba(59,130,246,.8)]
            "
          >
            <span
              className="
                absolute
                right-0
                top-1/2
                h-3
                w-3
                -translate-y-1/2
                rounded-full
                bg-white
                shadow-[0_0_14px_rgba(255,255,255,.9)]
              "
            />
          </motion.div>
        </div>

        {/* Animated dots */}

        <div className="mt-6 flex justify-center gap-2">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              animate={{
                y: [0, -7, 0],
                opacity: [0.35, 1, 0.35],
              }}
              transition={{
                duration: 0.9,
                delay: dot * 0.14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-2
                w-2
                rounded-full
                bg-blue-400
              "
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;
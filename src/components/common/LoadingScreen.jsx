import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  FaCode,
} from "react-icons/fa";

/* =========================================================
   HUD RING SEGMENTS
========================================================= */

const ringSegments = Array.from(
  { length: 36 },
  (_, index) => index
);

/* =========================================================
   LOADING SCREEN
========================================================= */

function LoadingScreen({
  minimumDuration = 2500,
  onComplete,
}) {
  const [progress, setProgress] =
    useState(0);

  const [visible, setVisible] =
    useState(true);

  const statusText = useMemo(() => {
    if (progress < 25) {
      return "Initializing interface";
    }

    if (progress < 50) {
      return "Loading components";
    }

    if (progress < 75) {
      return "Preparing experience";
    }

    if (progress < 100) {
      return "Almost ready";
    }

    return "Welcome";
  }, [progress]);

  useEffect(() => {
    const startedAt = Date.now();

    const updateProgress = () => {
      const elapsed =
        Date.now() - startedAt;

      const calculatedProgress =
        Math.min(
          100,
          Math.round(
            (elapsed / minimumDuration) * 100
          )
        );

      setProgress(calculatedProgress);

      if (calculatedProgress >= 100) {
        window.clearInterval(
          progressInterval
        );

        window.setTimeout(() => {
          setVisible(false);

          window.setTimeout(() => {
            onComplete?.();
          }, 450);
        }, 250);
      }
    };

    const progressInterval =
      window.setInterval(
        updateProgress,
        32
      );

    updateProgress();

    return () => {
      window.clearInterval(
        progressInterval
      );
    };
  }, [
    minimumDuration,
    onComplete,
  ]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.45,
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
          role="status"
          aria-live="polite"
          aria-label={`Loading portfolio ${progress}%`}
        >
          {/* =================================================
              BACKGROUND EFFECTS
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
            "
          >
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[520px]
                w-[520px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-blue-600/10
                blur-[150px]
              "
            />

            <div
              className="
                absolute
                left-[18%]
                top-[18%]
                h-56
                w-56
                rounded-full
                bg-cyan-500/10
                blur-[110px]
              "
            />

            <div
              className="
                absolute
                bottom-[16%]
                right-[15%]
                h-64
                w-64
                rounded-full
                bg-violet-500/10
                blur-[120px]
              "
            />

            <div
              className="
                absolute
                inset-0
                opacity-[0.025]
                [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
                [background-size:46px_46px]
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_center,transparent_10%,#010817_82%)]
              "
            />
          </div>

          {/* =================================================
              HUD LOADER
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-10
              flex
              w-full
              max-w-xl
              flex-col
              items-center
            "
          >
            {/* Main HUD circle */}

            <div
              className="
                relative
                flex
                h-[290px]
                w-[290px]
                items-center
                justify-center
                sm:h-[340px]
                sm:w-[340px]
              "
            >
              {/* Outer glow */}

              <motion.div
                animate={{
                  scale: [1, 1.035, 1],
                  opacity: [0.35, 0.7, 0.35],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  inset-7
                  rounded-full
                  bg-blue-500/10
                  blur-[42px]
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
                  inset-0
                  rounded-full
                  border
                  border-dashed
                  border-blue-400/20
                "
              />

              {/* Counter-rotating ring */}

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-5
                  rounded-full
                  border
                  border-violet-400/20
                "
              >
                <span
                  className="
                    absolute
                    left-1/2
                    top-[-5px]
                    h-2.5
                    w-2.5
                    -translate-x-1/2
                    rounded-full
                    bg-cyan-400
                    shadow-[0_0_18px_rgba(34,211,238,.95)]
                  "
                />

                <span
                  className="
                    absolute
                    bottom-[-5px]
                    left-1/2
                    h-2.5
                    w-2.5
                    -translate-x-1/2
                    rounded-full
                    bg-violet-400
                    shadow-[0_0_18px_rgba(167,139,250,.95)]
                  "
                />
              </motion.div>

              {/* Segment marks */}

              <div
                className="
                  absolute
                  inset-4
                  rounded-full
                "
              >
                {ringSegments.map(
                  (segment) => {
                    const segmentProgress =
                      (segment /
                        ringSegments.length) *
                      100;

                    const active =
                      segmentProgress <=
                      progress;

                    return (
                      <span
                        key={segment}
                        className="
                          absolute
                          left-1/2
                          top-0
                          h-3
                          w-[3px]
                          origin-[50%_151px]
                          rounded-full
                          sm:origin-[50%_171px]
                        "
                        style={{
                          transform: `
                            translateX(-50%)
                            rotate(${
                              segment * 10
                            }deg)
                          `,
                          background: active
                            ? segment % 3 === 0
                              ? "#22d3ee"
                              : "#3b82f6"
                            : "rgba(148,163,184,.15)",
                          boxShadow: active
                            ? "0 0 12px rgba(59,130,246,.7)"
                            : "none",
                        }}
                      />
                    );
                  }
                )}
              </div>

              {/* Progress SVG */}

              <svg
                viewBox="0 0 260 260"
                className="
                  absolute
                  inset-[32px]
                  -rotate-90
                "
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="hudProgressGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#2563eb"
                    />

                    <stop
                      offset="55%"
                      stopColor="#22d3ee"
                    />

                    <stop
                      offset="100%"
                      stopColor="#8b5cf6"
                    />
                  </linearGradient>
                </defs>

                <circle
                  cx="130"
                  cy="130"
                  r="110"
                  fill="none"
                  stroke="rgba(148,163,184,.10)"
                  strokeWidth="4"
                />

                <motion.circle
                  cx="130"
                  cy="130"
                  r="110"
                  fill="none"
                  stroke="url(#hudProgressGradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  pathLength="100"
                  initial={{
                    strokeDasharray: "0 100",
                  }}
                  animate={{
                    strokeDasharray: `${progress} 100`,
                  }}
                  transition={{
                    duration: 0.08,
                    ease: "linear",
                  }}
                  className="
                    drop-shadow-[0_0_8px_rgba(34,211,238,.55)]
                  "
                />
              </svg>

              {/* Inner glass circle */}

              <div
                className="
                  relative
                  flex
                  h-[185px]
                  w-[185px]
                  flex-col
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-[#0a1324]/90
                  shadow-[inset_8px_8px_22px_rgba(0,0,0,.38),inset_-6px_-6px_18px_rgba(59,130,246,.04),0_18px_50px_rgba(0,0,0,.35)]
                  backdrop-blur-2xl
                  sm:h-[220px]
                  sm:w-[220px]
                "
              >
                <motion.div
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-blue-500/20
                    bg-blue-500/10
                    text-xl
                    text-blue-400
                    shadow-[0_0_24px_rgba(59,130,246,.18)]
                  "
                >
                  <FaCode />
                </motion.div>

                <p
                  className="
                    mt-5
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.32em]
                    text-slate-500
                    sm:text-xs
                  "
                >
                  Devjit Portfolio
                </p>

                <motion.p
                  key={progress}
                  initial={{
                    opacity: 0.5,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="
                    mt-2
                    text-4xl
                    font-black
                    tracking-tight
                    text-white
                    sm:text-5xl
                  "
                >
                  {progress}
                  <span
                    className="
                      ml-1
                      text-lg
                      font-semibold
                      text-blue-400
                      sm:text-xl
                    "
                  >
                    %
                  </span>
                </motion.p>

                <p
                  className="
                    mt-2
                    px-3
                    text-center
                    text-xs
                    font-medium
                    text-slate-400
                    sm:text-sm
                  "
                >
                  {statusText}
                </p>
              </div>
            </div>

            {/* Bottom loading information */}

            <div
              className="
                mt-7
                w-full
                max-w-md
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-slate-500
                  "
                >
                  System loading
                </p>

                <p
                  className="
                    text-xs
                    font-bold
                    text-blue-400
                  "
                >
                  {progress}/100
                </p>
              </div>

              <div
                className="
                  mt-3
                  h-1.5
                  overflow-hidden
                  rounded-full
                  bg-white/[0.06]
                "
              >
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: `${progress}%`,
                  }}
                  transition={{
                    duration: 0.08,
                    ease: "linear",
                  }}
                  className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-blue-600
                    via-cyan-400
                    to-violet-500
                    shadow-[0_0_18px_rgba(34,211,238,.65)]
                  "
                />
              </div>

              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                {[0, 1, 2].map(
                  (dot) => (
                    <motion.span
                      key={dot}
                      animate={{
                        opacity: [
                          0.25,
                          1,
                          0.25,
                        ],
                        scale: [
                          0.85,
                          1.15,
                          0.85,
                        ],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: dot * 0.18,
                      }}
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-blue-400
                      "
                    />
                  )
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
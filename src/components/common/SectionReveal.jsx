import {
  motion,
  useReducedMotion,
} from "framer-motion";

const directionVariants = {
  up: {
    x: 0,
    y: 45,
  },

  down: {
    x: 0,
    y: -45,
  },

  left: {
    x: -45,
    y: 0,
  },

  right: {
    x: 45,
    y: 0,
  },

  none: {
    x: 0,
    y: 0,
  },
};

function SectionReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.65,
  amount = 0.15,
  once = true,
}) {
  const reduceMotion =
    useReducedMotion();

  const movement =
    directionVariants[direction] ||
    directionVariants.up;

  const hiddenState = reduceMotion
    ? {
        opacity: 1,
        x: 0,
        y: 0,
      }
    : {
        opacity: 0,
        x: movement.x,
        y: movement.y,
      };

  const visibleState = {
    opacity: 1,
    x: 0,
    y: 0,
  };

  return (
    <motion.div
      initial={hiddenState}
      whileInView={visibleState}
      viewport={{
        once,
        amount,
      }}
      transition={{
        duration: reduceMotion
          ? 0
          : duration,
        delay: reduceMotion
          ? 0
          : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default SectionReveal;
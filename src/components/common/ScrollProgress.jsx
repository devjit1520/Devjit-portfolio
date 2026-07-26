import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const progressScale = useSpring(
    scrollYProgress,
    {
      stiffness: 150,
      damping: 30,
      restDelta: 0.001,
    }
  );

  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX: progressScale,
      }}
      className="
        fixed
        left-0
        top-0
        z-[200]
        h-[3px]
        w-full
        origin-left
        bg-gradient-to-r
        from-blue-600
        via-cyan-400
        to-violet-500
        shadow-[0_0_14px_rgba(59,130,246,.85)]
      "
    />
  );
}

export default ScrollProgress;
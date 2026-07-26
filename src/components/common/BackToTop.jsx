import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { FiArrowUp } from "react-icons/fi";

function BackToTop() {
  const [visible, setVisible] =
    useState(false);

  /* =======================================================
     SHOW BUTTON AFTER SCROLLING
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 550);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =======================================================
     SCROLL TO PAGE TOP
  ======================================================= */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
          initial={{
            opacity: 0,
            scale: 0.75,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.75,
            y: 20,
          }}
          whileHover={{
            y: -4,
            scale: 1.07,
          }}
          whileTap={{
            scale: 0.92,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            group
            fixed
            bottom-5
            right-4
            z-[90]
            flex
            h-12
            w-12
            items-center
            justify-center
            overflow-hidden
            rounded-2xl
            border
            border-blue-500/30
            bg-[#07142d]/90
            text-blue-400
            shadow-[0_15px_45px_rgba(37,99,235,.25)]
            backdrop-blur-xl
            transition-colors
            duration-300
            hover:border-cyan-400/50
            hover:text-white
            sm:bottom-7
            sm:right-7
            sm:h-14
            sm:w-14
          "
        >
          {/* Gradient hover background */}

          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              translate-y-full
              bg-gradient-to-br
              from-blue-600
              via-blue-500
              to-cyan-500
              transition-transform
              duration-300
              group-hover:translate-y-0
            "
          />

          {/* Glow */}

          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-1
              rounded-xl
              bg-blue-500/10
              blur-md
            "
          />

          {/* Arrow */}

          <FiArrowUp
            className="
              relative
              z-10
              text-xl
              transition-transform
              duration-300
              group-hover:-translate-y-1
              sm:text-2xl
            "
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;
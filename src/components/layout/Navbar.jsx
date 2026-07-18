import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaDownload,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // ===============================
  // Navbar Background on Scroll
  // ===============================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // ===============================
  // Active Section Highlight
  // ===============================

useEffect(() => {
  const handleScroll = () => {
    const scrollPosition =
      window.scrollY + window.innerHeight * 0.35;

    let currentSection = "home";

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);

      if (
        section &&
        section.offsetTop <= scrollPosition
      ) {
        currentSection = link.id;
      }
    });

    const reachedBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 5;

    if (reachedBottom) {
      currentSection = "contact";
    }

    setActiveSection(currentSection);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  return () => {
    window.removeEventListener(
      "scroll",
      handleScroll
    );
  };
}, []);

  // ===============================
  // Smooth Scroll
  // ===============================

  const handleNavClick = (id) => {
    setMenuOpen(false);

   

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

    return (
    <nav className="fixed top-0 left-0 w-full  backdrop-blur-md z-50 shadow-lg bg-slate-950/60
backdrop-blur-2xl
border-b
border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          {/* <a
            href="#home"
            className="text-3xl font-bold text-white"
          >
            <span className="text-blue-500">Devjit</span>Portfolio
          </a> */}

            <a href="#home">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold whitespace-nowrap">
            <span className="text-blue-400">Devjit </span>
            <span className="text-blue-500">.</span>
            <span className="text-blue-200"> Portfolio</span>
          </h1>
          </a>

          {/* Desktop Menu */}
         <ul className="hidden lg:flex items-center gap-8">

          {navLinks.map((link) => (

            <li key={link.id} className="relative">

              <button
                onClick={() => handleNavClick(link.id)}
                className={`

                 hover:scale-105
                hover:-translate-y-0.5
                hover:text-blue-400
                drop-shadow-[0_0_10px_rgba(59,130,246,.9)]

                  ${
                    activeSection === link.id
                      ? "text-blue-400"
                      : "text-slate-300 hover:text-white"
                  }

                `}
              >

                {link.name}

                {/* Hover Underline */}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-2
                    h-[2px]
                    w-0
                    rounded-full
                    bg-blue-500
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />

                {/* Active Underline */}

                {activeSection === link.id && (

                  <motion.span
                    layoutId="navbarUnderline"
                    className="
                      absolute
                      left-0
                      -bottom-2
                      h-[3px]
                      w-full
                      rounded-full
                      bg-blue-500
                      shadow-[0_0_20px_rgba(59,130,246,.9)]
                    "
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />

                )}

              </button>

            </li>

          ))}

        </ul>
          <motion.a
  href="/Devjit_Mondal.pdf"
  download="Devjit_Mondal_Resume.pdf"
  whileHover={{
    y: -2,
    scale: 1.03,
  }}
  whileTap={{
    scale: 0.97,
  }}
  aria-label="Download Devjit Mondal resume"
  className="
    group
    relative
    hidden
    min-h-[48px]
    shrink-0
    items-center
    gap-3
    overflow-hidden
    rounded-2xl
    border
    border-blue-500/25
    bg-gradient-to-r
    from-blue-500/10
    to-cyan-500/5
    px-3
    py-2
    text-white
    shadow-[0_10px_30px_rgba(37,99,235,.15)]
    backdrop-blur-xl
    transition-all
    duration-300
    hover:border-blue-400/50
    hover:shadow-[0_12px_35px_rgba(37,99,235,.28)]
    lg:flex
  "
>
  {/* Animated hover background */}

  <span
    className="
      pointer-events-none
      absolute
      inset-0
      -translate-x-full
      bg-gradient-to-r
      from-blue-600
      via-blue-500
      to-cyan-500
      transition-transform
      duration-500
      ease-out
      group-hover:translate-x-0
    "
  />

  {/* Download icon */}

  <span
    className="
      relative
      z-10
      flex
      h-9
      w-9
      shrink-0
      items-center
      justify-center
      rounded-xl
      border
      border-blue-500/25
      bg-blue-500/15
      text-blue-400
      transition-all
      duration-300
      group-hover:border-white/20
      group-hover:bg-white/15
      group-hover:text-white
    "
  >
    <FaDownload className="text-sm" />
  </span>

  {/* Button text */}

  <span className="relative z-10 text-left leading-none">
    <span
      className="
        block
        text-[9px]
        font-bold
        uppercase
        tracking-[0.18em]
        text-slate-500
        transition
        group-hover:text-blue-100
      "
    >
      Download
    </span>

    <span
      className="
        mt-1
        block
        text-sm
        font-bold
        text-white
      "
    >
      My Resume
    </span>
  </span>

  {/* CV badge */}

  <span
    className="
      relative
      z-10
      rounded-lg
      border
      border-white/10
      bg-white/5
      px-2
      py-1
      text-[10px]
      font-black
      tracking-wider
      text-blue-400
      transition
      group-hover:border-white/20
      group-hover:bg-white/15
      group-hover:text-white
    "
  >
    CV
  </span>
</motion.a>

          {/* Mobile Button */}
<motion.a
  href="/Devjit_Mondal.pdf"
  download="Devjit_Mondal_Resume.pdf"
  onClick={() => setMenuOpen(false)}
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  className="
    mt-4
    flex
    w-full
    items-center
    justify-center
    gap-3
    rounded-xl
    bg-blue-600
    px-5
    py-3.5
    text-sm
    font-semibold
    text-white
    shadow-[0_12px_30px_rgba(37,99,235,.28)]
    transition
    hover:bg-blue-500
    lg:hidden
  "
>
  <FaDownload />
  Download Resume
</motion.a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
       <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 px-6 py-6">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                {/* <a
                  href={`#${link.id}`}
                  // onClick={() => setMenuOpen(false)}
                  // className="text-slate-300 hover:text-blue-500 transition"
                   onClick={() => setMenuOpen(!menuOpen)}
                   className="lg:hidden text-white text-3xl"
                >
                  {link.name}
                </a> */}
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}

                className="block py-3 text-lg text-slate-300 hover:text-blue-400 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
{/* 
            <div className="hidden lg:flex">
  <a
    href="/resume.pdf"
    download
    className="bg-blue-600 px-6 py-3 rounded-xl"
  >
    Resume
  </a>
</div> */}



          <div className="mt-6">
            <a
              href="/Devjit_Mondal.pdf"
              download
              className="flex items-center justify-center gap-2 bg-blue-600 py-3 rounded-xl text-white font-semibold hover:bg-blue-700 transition"
            >
              <FaDownload />
              Resume
            </a>
          </div>


          </ul>
        </div>
      )}
    </nav>
  );}
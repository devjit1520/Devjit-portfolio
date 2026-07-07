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
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-35% 0px -35% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
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
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md z-50 shadow-lg">
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
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold whitespace-nowrap">
            <span className="text-blue-500">Devjit</span>
            <span className="text-white">Portfolio</span>
          </h1>
          </a>

          {/* Desktop Menu */}
         <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-slate-300 hover:bg-blue-500 rounded-2xl  p-2.5 transition duration-500 "
                >
                  {link.name}
                </a>
              </li>
            ))}

            {/* <ThemeToggle /> */}

            
          </ul>
          <a
              href="/Devjit_Mondal.pdf"
              download
              className=" hidden lg:flex items-center gap-3 px-6 py-3 rounded-2xl
              bg-blue-600
              text-white
              font-semibold
              hover:scale-105
              transition-all duration-300"
                      >
              <FaDownload className="text-xl" /> Resume
            </a>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
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
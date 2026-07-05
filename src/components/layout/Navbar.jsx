import { useState } from "react";
import { FaBars, FaTimes , FaDownload  } from "react-icons/fa";

// import ThemeToggle from "../ThemeToggle";



function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a
            href="#home"
            className="text-3xl font-bold text-white"
          >
            <span className="text-blue-500">Devjit</span>Portfolio
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
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
              href="public/Devjit_Mondal.pdf"
              download
              className=" inline-flex
              items-center
              gap-3
              px-6
              py-3
              rounded-2xl
              bg-blue-600/90
              backdrop-blur-xl
              border border-blue-400/30
              text-white
              font-semibold
              shadow-lg
              hover:scale-110
              hover:shadow-blue-400/40
              transition-all
              duration-300"
                      >
              <FaDownload className="text-xl" /> Resume
            </a>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 px-6 py-6">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-300 hover:text-blue-500 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}

            <a
              href="#"
              download
              className="inline-flex
    items-center
    gap-3
    px-8
    py-4
    rounded-2xl
    bg-blue-600/90
    backdrop-blur-xl
    border border-blue-400/30
    text-white
    font-semibold
    shadow-lg
    hover:scale-105
    hover:shadow-blue-500/30
    transition-all
    duration-300"
            >
            <FaDownload /> Resume
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
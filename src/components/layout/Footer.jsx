import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
  FaHeart,
  
} from "react-icons/fa";

import { MdOutlinePhoneIphone } from "react-icons/md";

import {
  MdEmail,
  MdLocationOn,
} from "react-icons/md";

function SpotlightCard({
  children,
  className = "",
}) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    const rect =
      e.currentTarget.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
    
      onMouseMove={handleMouseMove}
      whileHover={{
        y: -5,
      }}
      className={`
        
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        hover:border-blue-500/40
        transition-all
        duration-500
        ${className}
      `}
    >
      {/* Mouse Spotlight */}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
          radial-gradient(
            250px circle at
            ${position.x}px ${position.y}px,
            rgba(59,130,246,0.18),
            transparent 70%
          )
          `,
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

function Footer() {
  const techStack = [
    "React",
    "Tailwind",
    "JavaScript",
    "Figma",
    "HTML",
    "CSS",
    "BootStrap",
    "Wordpress",
  ];

  const socials = [
    {
      name: "GitHub",
      icon: FaGithub,
      link: "https://github.com/devjit1520",
      description: "View My Projects",
    },

    {
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/devjit-mondal-b68947233/",
      description: "Let's Connect",
    },

    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/iamdevjit_15?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      description: "Follow Me",
    },

    {
      name: "Email",
      icon: MdEmail,
      link: "https://mail.google.com/",
      description: "Send Message",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
    id="contact"
      className="
      relative
      py-25
      overflow-hidden
      bg-[#020B2D]
      "
    >

      <h2 className="text-4xl font-bold text-center mb-4">
          Contact Me
        </h2>

        <div className="w-24 h-1 bg-blue-500 mx-auto mb-12 mt-5"></div>
      {/* Background Glow */}

      <div
        className="
        absolute
        top-0
        left-0
        w-96
        h-96
        bg-blue-500/10
        blur-[150px]
        "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        w-96
        h-96
        bg-cyan-500/10
        blur-[150px]
        "
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Main Bento Grid */}

        <div
          className="
          grid
          lg:grid-cols-4
          gap-6
          "
        >
          {/* Brand Card */}

          <SpotlightCard className="p-8 lg:col-span-2">

            <span
              className="
              px-4
              py-2
              rounded-full
              bg-green-500/10
              border
              border-green-500/20
              text-green-400
              text-sm
              "
            >
              🟢 Open To Opportunities
            </span>

            <h2
              className="
              text-4xl
              font-bold
              mt-6
              "
            >
              Devjit Mondal
            </h2>

            <p
              className="
              text-blue-400
              text-xl
              mt-2
              "
            >
              Frontend Developer
            </p>

            <p
              className="
              text-slate-400
              leading-8
              mt-6
              max-w-xl
              "
            >
              Building beautiful, modern,
              and responsive web experiences
              using React, Tailwind CSS,
              and JavaScript.
            </p>

            <div
              className="
              flex
              items-center
              gap-2
              mt-6
              text-slate-400
              "
            >
              <MdLocationOn />

              Gurgaon , Haryana , India
            </div>

             <div
              className="
              flex
              items-center
              gap-2
              mt-6
              text-slate-400
              "
            >
              <MdOutlinePhoneIphone />

              +91 8515016686
            </div>

            

          </SpotlightCard>

          {/* Navigation */}

          <SpotlightCard className="p-8">

            <h3
              className="
              text-xl
              font-bold
              mb-6
              "
            >
              Development Focus
            </h3>

            <div className="space-y-4">

              {/* {[
                "About",
                "Skills",
                "Projects",
                "Experience",
                
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="
                  block
                  text-slate-400
                  hover:text-blue-400
                  transition
                  "
                >
                  {item}
                </a>
              ))} */}

            <div
              className="
              flex
              items-center
              gap-2
              mt-6
              text-slate-400
              "
            >
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>

              Frontend Development
            </div>

            <div
              className="
              flex
              items-center
              gap-2
              mt-6
              text-slate-400
              "
            >
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>

              React.js Applications
            </div>

            <div
              className="
              flex
              items-center
              gap-2
              mt-6
              text-slate-400
              "
            >
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>

              Modern UI/UX Design
            </div>

            <div
              className="
              flex
              items-center
              gap-2
              mt-6
              text-slate-400
              "
            >
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>

             Responsive Web Design
            </div>

            <div
              className="
              flex
              items-center
              gap-2
              mt-6
              text-slate-400
              "
            >
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>

              Performance Optimization
            </div>

            <div
              className="
              flex
              items-center
              gap-2
              mt-6
              text-slate-400
              "
            >
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>

              Clean & Scalable Code
            </div>

            </div>

          </SpotlightCard>

          {/* Tech Stack */}

          <SpotlightCard className="p-8">

            <h3
              className="
              text-xl
              font-bold
              mb-6
              "
            >
              Tech Stack
            </h3>

            <div
              className="
              flex
              flex-wrap
              gap-3
              "
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-slate-800
                  border
                  border-white/10
                  text-sm
                  hover:border-blue-500/40
                  transition
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

          </SpotlightCard>
        </div>

        {/* Social Cards */}

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
          mt-6
          "
        >
          {socials.map((social, index) => {
            const Icon = social.icon;

            return (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
              >
                <SpotlightCard className="p-6 h-full">

                  <div
                    className="
                    flex
                    items-center
                    gap-4
                    "
                  >
                    <div
                      className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-blue-500/10
                      flex
                      items-center
                      justify-center
                      "
                    >
                      <Icon
                        className="
                        text-2xl
                        text-blue-400
                        "
                      />
                    </div>

                    <div>

                      <h4
                        className="
                        font-semibold
                        "
                      >
                        {social.name}
                      </h4>

                      <p
                        className="
                        text-sm
                        text-slate-400
                        "
                      >
                        {social.description}
                      </p>

                    </div>

                  </div>

                </SpotlightCard>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom Area */}

        <div
          className="
          mt-12
          pt-8
          border-t
          border-white/10
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
          "
        >
          <p
            className="
            text-slate-400
            flex
            items-center
            gap-2
            "
          >
            © 2026 Devjit Mondal

            <FaHeart className="text-red-500" />

            Built with React & Tailwind CSS
          </p>

          <button
            onClick={scrollToTop}
            className="
            flex
            items-center
            gap-3
            px-6
            py-3
            rounded-full
            bg-blue-600
            hover:bg-blue-700
            transition
            hover:-translate-y-1
            "
          >
            <FaArrowUp />

            Back To Top
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
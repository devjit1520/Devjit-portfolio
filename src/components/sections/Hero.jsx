import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
  FaDownload,
  FaReact,
  FaWordpress,
  

} from "react-icons/fa";

import {
  HiCheckCircle,
  HiLightningBolt,
} from "react-icons/hi";

import {
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

// import {
//   HiCheckCircle,
//   HiLightningBolt,
// } from "react-icons/hi";

import profile from "../../assets/devjit.png";


function Hero() {
  return (
    <section
      id="home"
      className="pt-28 lg:pt-28"
      // className="relative min-h-screen bg-[#020B2D] overflow-hidden pt-28"
    >
      {/* BACKGROUND GLOW */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[85vh]">

          {/* ================= LEFT SIDE ================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* TOP BADGE */}

            {/* <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-medium mb-8">
              <HiCheckCircle />

              Open To Internships & Freelance
            </div> */}

                  <div className="inline-flex items-center gap-2 mb-8 bg-green-100/10 border border-green-200/20 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span >
                    Available for Work & Freelance
                  </span>
                  </div>

            {/* TITLE */}

            <h3 className="text-blue-500 text-xl mb-4">
              Hey ,  I'm
            </h3>

            {/* <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Devjit Mondal

              
            </h1> */}

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ">
                  Devjit Mondal
                </h1>

            {/* <h2>
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Frontend Develope
              </span>
            </h2> */}

            {/* TYPING EFFECT */}

            <div className="text-2xl md:text-3xl font-semibold mb-8 pt-4">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "Web Designer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Freelancer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            {/* DESCRIPTION */}

            <p className="text-slate-400 text-lg leading-9 max-w-2xl mb-10">
              {/* Hi, I'm{" "}
              <span className="text-white font-semibold">
                Devjit Mondal
              </span>
              . */}

              I create modern, responsive, and
              high-performance web applications
              using React, Tailwind CSS, JavaScript,
              and other frontend technologies.
            </p>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-5 mb-10">

              <a
                href="#projects"
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition hover:scale-105 font-semibold shadow-lg shadow-blue-600/30"
              >
                View Projects

                <FaArrowRight />
              </a>

              <a
                href="public/Devjit_Mondal.pdf"
                download
                className="flex items-center gap-3 px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition font-semibold"
              >
                <FaDownload />

                Resume
              </a>
            </div>

            {/* SOCIAL LINKS */}

            {/* <div className="flex items-center gap-6">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-slate-400 hover:text-blue-400 transition hover:-translate-y-1"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-slate-400 hover:text-blue-400 transition hover:-translate-y-1"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-slate-400 hover:text-pink-400 transition hover:-translate-y-1"
              >
                <FaInstagram />
              </a>
            </div> */}

            {/* STATS */}

           <div className="mt-8
            flex flex-wrap
            lg:flex-nowrap
            justify-center
            gap-4 mb-5">
              {[
                {
                  icon: <FaReact />,
                  name: "React",
                  color: "text-cyan-400",
                  bg: "bg-cyan-500/10",
                  border: "border-cyan-500/30",
                },
                {
                  icon: <SiTailwindcss />,
                  name: "Tailwind",
                  color: "text-sky-400",
                  bg: "bg-sky-500/10",
                  border: "border-sky-500/30",
                },
                {
                  icon: <SiJavascript />,
                  name: "JavaScript",
                  color: "text-yellow-400",
                  bg: "bg-yellow-500/10",
                  border: "border-yellow-500/30",
                },
                {
                  icon: <FaWordpress />,
                  name: "WordPress",
                  color: "text-orange-400",
                  bg: "bg-orange-500/10",
                  border: "border-orange-500/30",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className={`
                    inline-flex
                    items-center
                    gap-3
                    px-5
                    py-3
                    rounded-full
                    ${item.bg}
                    ${item.border}
                    border
                    backdrop-blur-xl
                    hover:scale-110
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    cursor-default
                  `}
                >
                  <span className={`text-1xl ${item.color}`}>
                    {item.icon}
                  </span>

                  <span className={`font-semibold ${item.color}`}>
                    {item.name}
                  </span>
                </div>
              ))}

            </div>

            {/* <div className="mt-14 mb-15 grid grid-cols-3 gap-5">

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-5">
                <h2 className="text-3xl font-bold text-blue-400">
                  5+
                </h2>

                <p className="text-slate-400">
                  Projects
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-5">
                <h2 className="text-3xl font-bold text-cyan-400">
                  10+
                </h2>

                <p className="text-slate-400">
                  Technologies
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-5">
                <h2 className="text-3xl font-bold text-green-400">
                  1+
                </h2>

                <p className="text-slate-400">
                  Years Learning
                </p>
              </div>

            </div> */}
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative mb-15"
          >
            {/* MAIN CARD */}

            <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[60px] p-10 overflow-hidden">

              {/* TOP FLOATING BADGE */}

              <div className="absolute top-8 left-8 bg-white text-black px-5 py-3 rounded-2xl flex items-center gap-3 shadow-xl">
                <HiCheckCircle className="text-green-500 text-xl" />

                <span className="font-semibold">
                  Frontend Developer
                </span>
              </div>

              {/* PROFILE IMAGE */}

              <div className="flex justify-center mt-20">
                <div className="relative">

                  <div className="absolute inset-0 bg-blue-400 blur-[90px] opacity-40 rounded-full" />

                  <img
                    src={profile}
                    alt="Devjit"
                    className="relative w-[315px] h-[315px] object-cover rounded-full border-4 border-blue-500 shadow-2xl"
                  />

                


                </div>
              </div>

              {/* FLOATING REACT BADGE */}

              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute bottom-10 left-0 bg-[#0F172A] border border-white/10 px-4 py-4 rounded-2xl flex items-center gap-2 shadow-x2"
              >
                <FaReact className="text-cyan-700 text-3xl" />

                <div>
                  <h3 className="font-bold">
                    React
                  </h3>

                  <p className="text-sm text-slate-400">
                    Modern UI Development
                  </p>
                </div>
              </motion.div>

              {/* FLOATING SPEED BADGE */}

              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute top-30 right-0 bg-[#0F172A] border border-white/10 px-4 py-4 rounded-2xl flex items-center gap-2 shadow-x2"
              >
                <HiLightningBolt className="text-yellow-300 text-3xl" />

                <div>
                  <h3 className="font-bold">
                    Fast & Responsive
                  </h3>

                  <p className="text-sm text-slate-400">
                    Performance First
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
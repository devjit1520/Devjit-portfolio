import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";



const footerLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];



export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#020B2D] pt-3"
    >
      {/* ================= Background Glow ================= */}

      <div className="absolute -top-40 -left-40 w-[450px] h-[450px] rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Grid Pattern */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:45px_45px]
        "
      />

      {/* ================= Container ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* ================= Heading ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* Small Heading */}

          

          {/* <h1
            className="
              inline-block
              px-5
              py-2
              rounded-full
              border
              border-blue-500/30
              bg-blue-500/10
              text-blue-400
              text-sm
              font-semibold
              tracking-widest
              uppercase
            "
          >
            Contact Me
          </h1> */}

          {/* Main Heading */}

          <h2
            className="
              mt-6
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-extrabold
              text-white
            "
          >
            Contact Me
          </h2>

          {/* Subtitle */}

          <p
            className="
              mt-6
              max-w-2xl
              mx-auto
              text-slate-400
              text-lg
              leading-8
            "
          >
            Have an idea, freelance project, internship opportunity,
            or just want to say hello? I'd love to hear from you.
            Let's build something amazing together.
          </p>

          {/* Blue Underline */}

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="
              h-1
              rounded-full
              bg-blue-500
              mx-auto
              mt-8
              shadow-[0_0_20px_rgba(59,130,246,.8)]
            "
          />
        </motion.div>

        {/* ================= Main Grid ================= */}

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

  {/* ================= Left Profile Card ================= */}

  <motion.div
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="
      lg:col-span-6
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      hover:border-blue-500/40
      hover:shadow-[0_0_40px_rgba(59,130,246,.18)]
      transition-all
      duration-500
      relative
      overflow-hidden
    "
  >

    {/* Background Glow */}

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,.15),transparent_60%)]" />

    <div className="relative z-10">

      {/* Badge */}

      <span
        className="
          inline-flex
          items-center
          gap-2
          px-5
          py-2
          rounded-full
          bg-green-500/10
          border
          border-green-500/20
          text-green-400
          font-medium
        "
      >
        <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>

        Open To Opportunities
      </span>

      {/* Name */}

      <h3 className="mt-8 text-4xl font-bold text-white">
        Devjit Mondal
      </h3>

      {/* Job */}

      <p className="mt-2 text-2xl text-blue-400 font-semibold">
        Frontend Developer
      </p>

      {/* Description */}

      <p className="mt-8 text-slate-400 leading-9 text-lg">
        Building beautiful, modern and high-performance
        web applications using React.js, Tailwind CSS,
        JavaScript and responsive UI design.
      </p>

      {/* Contact Details */}

      <div className="mt-10 space-y-5">

        <div className="flex items-center gap-4">

          <div
            className="
              w-12
              h-12
              rounded-xl
              bg-blue-500/10
              flex
              items-center
              justify-center
            "
          >
            📍
          </div>

          <div>

            <p className="text-sm text-slate-500">
              Location
            </p>

            <p className="text-white">
              West Bengal, India
            </p>

          </div>

        </div>

        <div className="flex items-center gap-4">

          <div
            className="
              w-12
              h-12
              rounded-xl
              bg-blue-500/10
              flex
              items-center
              justify-center
            "
          >
            📞
          </div>

          <div>

            <p className="text-sm text-slate-500">
              Phone
            </p>

            <p className="text-white">
              +91 8515016686
            </p>

          </div>

        </div>

        <div className="flex items-center gap-4">

          <div
            className="
              w-12
              h-12
              rounded-xl
              bg-blue-500/10
              flex
              items-center
              justify-center
            "
          >
            📧
          </div>

          <div>

            <p className="text-sm text-slate-500">
              Email
            </p>

            <p className="text-white break-all">
              devjit1682002@gmail.com
            </p>

          </div>

        </div>

      </div>

    </div>

  </motion.div>

{/* ================= Right Side ================= */}

<div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-8">

  {/* ================= Development Focus ================= */}

  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    whileHover={{ y: -6 }}
    className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      hover:border-blue-500/40
      hover:shadow-[0_0_35px_rgba(59,130,246,.2)]
      transition-all
      duration-500
    "
  >
    <h5 className="text-2xl font-bold text-white mb-8">
      Development Focus
    </h5>

    <div className="space-y-6">

      {[
        "Frontend Development",
        "React.js Applications",
        "Modern UI/UX Design",
        "Responsive Web Design",
        "Performance Optimization",
        "Clean & Scalable Code",
      ].map((item) => (
        <div
          key={item}
          className="flex items-center gap-4"
        >
          <span className="w-3 h-3 rounded-full bg-blue-500"></span>

          <p className="text-slate-300">
            {item}
          </p>
        </div>
      ))}

    </div>

  </motion.div>

  {/* ================= Tech Stack ================= */}

  <motion.div
    initial={{ opacity: 0, x: 80 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.7,
      delay: 0.15,
    }}
    whileHover={{ y: -6 }}
    className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      hover:border-blue-500/40
      hover:shadow-[0_0_35px_rgba(59,130,246,.2)]
      transition-all
      duration-500
    "
  >
    <h5 className="text-2xl font-bold text-white mb-8">
      Tech Stack
    </h5>

    <div className="flex flex-wrap gap-4">

      {[
        "React",
        "Tailwind",
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "WordPress",
        "Git",
      ].map((tech) => (
        <motion.span
          key={tech}
          whileHover={{
            scale: 1.08,
          }}
          className="
            px-5
            py-3
            rounded-full
            bg-slate-800/80
            border
            border-white/10
            text-white
            hover:border-blue-500
            hover:text-blue-400
            transition-all
            cursor-default
          "
        >
          {tech}
        </motion.span>
      ))}

    </div>

  </motion.div>


  

</div>



</div>

{/* ================= Social Cards ================= */}

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
>

  {/* GitHub */}

  <a
    href="https://github.com/YOUR_USERNAME"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group
      rounded-3xl
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      p-7
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-blue-500/40
      hover:shadow-[0_0_35px_rgba(59,130,246,.25)]
    "
  >
    <FaGithub className="text-4xl text-white mb-6 transition group-hover:text-blue-400" />

    <h3 className="text-2xl font-bold text-white">
      GitHub
    </h3>

    {/* <p className="text-slate-400 mt-3">
      View my projects and open-source work.
    </p> */}

    <div className="flex items-center gap-2 text-blue-400 mt-8 group-hover:gap-4 transition-all">
      Explore
      <FaArrowRight />
    </div>
  </a>

  {/* LinkedIn */}

  <a
    href="https://linkedin.com/in/YOUR_USERNAME"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group
      rounded-3xl
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      p-7
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-blue-500/40
      hover:shadow-[0_0_35px_rgba(59,130,246,.25)]
    "
  >
    <FaLinkedin className="text-4xl text-[#0A66C2] mb-6" />

    <h3 className="text-2xl font-bold text-white">
      LinkedIn
    </h3>
{/* 
    <p className="text-slate-400 mt-3">
      Connect with me professionally.
    </p> */}

    <div className="flex items-center gap-2 text-blue-400 mt-8 group-hover:gap-4 transition-all">
      Connect
      <FaArrowRight />
    </div>
  </a>

  {/* Instagram */}

  <a
    href="https://instagram.com/YOUR_USERNAME"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group
      rounded-3xl
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      p-7
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-pink-500/40
      hover:shadow-[0_0_35px_rgba(236,72,153,.25)]
    "
  >
    <FaInstagram className="text-4xl text-pink-500 mb-6" />

    <h3 className="text-2xl font-bold text-white">
      Instagram
    </h3>

    {/* <p className="text-slate-400 mt-3">
      Follow my creative journey.
    </p> */}

    <div className="flex items-center gap-2 text-pink-400 mt-8 group-hover:gap-4 transition-all">
      Follow
      <FaArrowRight />
    </div>
  </a>

  {/* Email */}

  <a
    href="mailto:devjit1682002@gmail.com"
    className="
      group
      rounded-3xl
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      p-7
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-cyan-500/40
      hover:shadow-[0_0_35px_rgba(34,211,238,.25)]
    "
  >
    <FaEnvelope className="text-4xl text-cyan-400 mb-6" />

    <h3 className="text-2xl font-bold text-white">
      Email
    </h3>

    {/* <p className="text-slate-400 mt-3">
      Let's discuss your next project.
    </p> */}

    <div className="flex items-center gap-2 text-cyan-400 mt-8 group-hover:gap-4 transition-all">
      Send Mail
      <FaArrowRight />
    </div>
  </a>

</motion.div>


      </div>

      {/* ================= Footer ================= */}
<footer>

  
  {/* ================= Bottom Footer ================= */}

<div className="border-t border-white/10 mt-14 p-10">

  <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

    {/* Copyright */}

    <p className="text-slate-400 text-center lg:text-left">
      © {new Date().getFullYear()}{" "}
      <span className="text-white font-semibold">
        Devjit Mondal
      </span>
      . All Rights Reserved.
    </p>

    {/* Built With */}

    <p className="text-slate-400 text-center">
      Built with ❤️ using{" "}
      <span className="text-blue-400 font-semibold">
        React.js
      </span>{" "}
      &{" "}
      <span className="text-cyan-400 font-semibold">
        Tailwind CSS
      </span>
    </p>

    {/* Back To Top */}

<button
className="relative z-50 flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition hover:scale-105 font-semibold shadow-lg shadow-blue-600/30"
  type="button"
  onClick={() => {
    const home = document.getElementById("home");
    // console.log(home);

    if (home) {
      home.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      alert("Home section not found");
    }
  }}
>
  Back To Top
</button>
  </div>

</div>

</footer>






    </section>

    
  );
}
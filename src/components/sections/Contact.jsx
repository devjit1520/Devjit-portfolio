import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
  FaReact,
} from "react-icons/fa";

import {
  FiArrowUpRight,
  FiCheckCircle,
  FiClock,
  FiMessageSquare,
} from "react-icons/fi";

/* =========================================================
   FOOTER LINKS
========================================================= */

const footerLinks = [
  {
    name: "Home",
    id: "home",
  },
  {
    name: "About",
    id: "about",
  },
  {
    name: "Skills",
    id: "skills",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Experience",
    id: "experience",
  },
  {
    name: "Contact",
    id: "contact",
  },
];

/* =========================================================
   CONTACT DETAILS
========================================================= */

const contactDetails = [
  {
    title: "Email",
    value: "devjit1682002@gmail.com",
    href: "mailto:devjit1682002@gmail.com",
    icon: FaEnvelope,
    iconColor: "text-cyan-400",
    iconBackground: "bg-cyan-500/10",
    iconBorder: "border-cyan-500/20",
  },
  {
    title: "Phone",
    value: "+91 8515016686",
    href: "tel:+918515016686",
    icon: FaPhoneAlt,
    iconColor: "text-emerald-400",
    iconBackground: "bg-emerald-500/10",
    iconBorder: "border-emerald-500/20",
  },
  {
    title: "Location",
    value: "West Bengal, India",
    href: "https://www.google.com/maps/search/West+Bengal+India",
    icon: FaMapMarkerAlt,
    iconColor: "text-pink-400",
    iconBackground: "bg-pink-500/10",
    iconBorder: "border-pink-500/20",
  },
];

/* =========================================================
   SOCIAL LINKS
========================================================= */

const socialLinks = [
  {
    name: "GitHub",
    label: "View my code",
    href: "https://github.com/devjit1520",
    icon: FaGithub,
    iconColor: "text-white",
    hover:
      "hover:border-slate-400/40 hover:shadow-[0_0_30px_rgba(148,163,184,.16)]",
  },
  {
    name: "LinkedIn",
    label: "Professional profile",
    href: "https://www.linkedin.com/in/devjit-mondal-b68947233/",
    icon: FaLinkedin,
    iconColor: "text-blue-400",
    hover:
      "hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,.18)]",
  },
  {
    name: "Instagram",
    label: "Creative journey",
    href: "https://www.instagram.com/iamdevjit_15",
    icon: FaInstagram,
    iconColor: "text-pink-400",
    hover:
      "hover:border-pink-500/40 hover:shadow-[0_0_30px_rgba(236,72,153,.18)]",
  },
];

/* =========================================================
   CONTACT COMPONENT
========================================================= */

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailSubject = encodeURIComponent(
      formData.subject ||
        `Portfolio enquiry from ${formData.name}`
    );

    const emailBody = encodeURIComponent(
      `Hello Devjit,

My name is ${formData.name}.

Email: ${formData.email}

Message:
${formData.message}

Regards,
${formData.name}`
    );

    window.location.href =
      `mailto:devjit1682002@gmail.com` +
      `?subject=${emailSubject}` +
      `&body=${emailBody}`;
  };

  const scrollToSection = (sectionId) => {
    const section =
      document.getElementById(sectionId);

    if (!section) return;

    const navbarHeight = 90;

    const top =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#010817]
        sm:pt-8
      "
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-52
            top-24
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-600/10
            blur-[170px]
          "
        />

        <div
          className="
            absolute
            -right-52
            bottom-24
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-500/10
            blur-[170px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_20%,#010817_88%)]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* =================================================
            SECTION HEADING
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.65,
          }}
          className="mx-auto max-w-3xl text-center"
        >


          <h2
            className="
              mt-6
              text-4xl
              font-black
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-500/25
              bg-blue-500/10
              px-4
              py-2
              text-xl
              font-bold
              uppercase
              tracking-[0.22em]
              text-blue-400
            "
          >
            <FiMessageSquare />

            Contact Me
          </div>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-slate-400
              sm:text-lg
            "
          >
            Have a project, internship opportunity, freelance
            work, or frontend role? Send me a message and
            let&apos;s discuss how I can contribute.
          </p>

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 120,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="
              mx-auto
              mt-7
              h-1
              rounded-full
              bg-gradient-to-r
              from-blue-600
              to-cyan-400
              shadow-[0_0_18px_rgba(59,130,246,.7)]
            "
          />
        </motion.div>

        {/* =================================================
            CONTACT GRID
        ================================================== */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-12
          "
        >
          {/* ===============================================
              LEFT INFORMATION
          ================================================ */}

          <motion.div
            initial={{
              opacity: 0,
              x: -45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
            }}
            className="
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-white/10
              bg-white/[0.035]
              p-6
              shadow-[0_25px_80px_rgba(0,0,0,.28)]
              backdrop-blur-xl
              sm:p-8
              lg:col-span-5
            "
          >
            {/* Card background */}

            <div
              className="
                pointer-events-none
                absolute
                -right-28
                -top-28
                h-72
                w-72
                rounded-full
                bg-blue-500/10
                blur-[100px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.025]
                [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
                [background-size:32px_32px]
              "
            />

            <div className="relative z-10">
              {/* Availability */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-emerald-500/25
                  bg-emerald-500/10
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-emerald-400
                "
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-emerald-400
                      opacity-60
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-emerald-500
                    "
                  />
                </span>

                Available for Opportunities
              </div>

              <h3
                className="
                  mt-7
                  text-3xl
                  font-black
                  text-white
                  sm:text-4xl
                "
              >
                Get in touch
              </h3>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-slate-400
                  sm:text-base
                "
              >
                I am currently open to frontend developer
                opportunities, internships, freelance projects,
                and professional collaborations.
              </p>

              {/* Response information */}

              <div
                className="
                  mt-7
                  grid
                  grid-cols-1
                  gap-3
                  sm:grid-cols-2
                "
              >
                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-4
                  "
                >
                  <FiClock className="text-xl text-blue-400" />

                  <p className="mt-3 text-sm font-semibold text-white">
                    Response Time
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Usually within 24 hours
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-4
                  "
                >
                  <FiCheckCircle className="text-xl text-emerald-400" />

                  <p className="mt-3 text-sm font-semibold text-white">
                    Work Status
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Available for new work
                  </p>
                </div>
              </div>

              {/* Contact information */}

              <div className="mt-8 space-y-4">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;

                  return (
                    <motion.a
                      key={detail.title}
                      href={detail.href}
                      target={
                        detail.title === "Location"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        detail.title === "Location"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      whileHover={{
                        x: 5,
                      }}
                      className="
                        group
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-white/10
                        bg-slate-950/45
                        p-4
                        transition
                        hover:border-blue-500/25
                        hover:bg-blue-500/5
                      "
                    >
                      <div
                        className={`
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          ${detail.iconColor}
                          ${detail.iconBackground}
                          ${detail.iconBorder}
                        `}
                      >
                        <Icon />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs text-slate-500">
                          {detail.title}
                        </p>

                        <p
                          className="
                            mt-1
                            truncate
                            text-sm
                            font-semibold
                            text-slate-200
                            transition
                            group-hover:text-blue-400
                          "
                        >
                          {detail.value}
                        </p>
                      </div>

                      <FiArrowUpRight
                        className="
                          ml-auto
                          shrink-0
                          text-slate-600
                          transition
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                          group-hover:text-blue-400
                        "
                      />
                    </motion.a>
                  );
                })}
              </div>

              {/* Social profiles */}

              <div className="mt-8">
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-slate-500
                  "
                >
                  Connect with me
                </p>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                          y: -4,
                        }}
                        whileTap={{
                          scale: 0.96,
                        }}
                        className={`
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/5
                          p-4
                          transition-all
                          duration-300
                          ${social.hover}
                        `}
                      >
                        <Icon
                          className={`
                            text-2xl
                            ${social.iconColor}
                          `}
                        />

                        <p className="mt-3 text-sm font-semibold text-white">
                          {social.name}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {social.label}
                        </p>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===============================================
              RIGHT CONTACT FORM
          ================================================ */}

          <motion.div
            initial={{
              opacity: 0,
              x: 45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
              delay: 0.1,
            }}
            className="
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-white/10
              bg-white/[0.035]
              p-6
              shadow-[0_25px_80px_rgba(0,0,0,.28)]
              backdrop-blur-xl
              sm:p-8
              lg:col-span-7
            "
          >
            {/* Form background */}

            <div
              className="
                pointer-events-none
                absolute
                -bottom-32
                -right-32
                h-80
                w-80
                rounded-full
                bg-cyan-500/10
                blur-[110px]
              "
            />

            <div className="relative z-10">
              <div
                className="
                  flex
                  flex-col
                  gap-4
                  sm:flex-row
                  sm:items-start
                  sm:justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-blue-400
                    "
                  >
                    Send a message
                  </p>

                  <h3
                    className="
                      mt-2
                      text-2xl
                      font-black
                      text-white
                      sm:text-3xl
                    "
                  >
                    Tell me about your project
                  </h3>
                </div>

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-blue-500/20
                    bg-blue-500/10
                    text-xl
                    text-blue-400
                  "
                >
                  <FaPaperPlane />
                </div>
              </div>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-7
                  text-slate-400
                "
              >
                Complete the form below. Clicking the send
                button will open your email application with
                the message prepared automatically.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >
                {/* Name and email */}

                <div
                  className="
                    grid
                    grid-cols-1
                    gap-5
                    sm:grid-cols-2
                  "
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="
                        mb-2
                        block
                        text-sm
                        font-medium
                        text-slate-300
                      "
                    >
                      Your Name
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      required
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-white/10
                        bg-slate-950/55
                        px-5
                        py-4
                        text-sm
                        text-white
                        outline-none
                        transition
                        placeholder:text-slate-600
                        focus:border-blue-500/50
                        focus:bg-blue-500/5
                        focus:shadow-[0_0_25px_rgba(59,130,246,.12)]
                      "
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="
                        mb-2
                        block
                        text-sm
                        font-medium
                        text-slate-300
                      "
                    >
                      Email Address
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-white/10
                        bg-slate-950/55
                        px-5
                        py-4
                        text-sm
                        text-white
                        outline-none
                        transition
                        placeholder:text-slate-600
                        focus:border-blue-500/50
                        focus:bg-blue-500/5
                        focus:shadow-[0_0_25px_rgba(59,130,246,.12)]
                      "
                    />
                  </div>
                </div>

                {/* Subject */}

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-slate-300
                    "
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project, opportunity or collaboration"
                    required
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-slate-950/55
                      px-5
                      py-4
                      text-sm
                      text-white
                      outline-none
                      transition
                      placeholder:text-slate-600
                      focus:border-blue-500/50
                      focus:bg-blue-500/5
                      focus:shadow-[0_0_25px_rgba(59,130,246,.12)]
                    "
                  />
                </div>

                {/* Message */}

                <div>
                  <label
                    htmlFor="contact-message"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-slate-300
                    "
                  >
                    Your Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, requirements or opportunity..."
                    required
                    rows={6}
                    className="
                      w-full
                      resize-none
                      rounded-2xl
                      border
                      border-white/10
                      bg-slate-950/55
                      px-5
                      py-4
                      text-sm
                      leading-7
                      text-white
                      outline-none
                      transition
                      placeholder:text-slate-600
                      focus:border-blue-500/50
                      focus:bg-blue-500/5
                      focus:shadow-[0_0_25px_rgba(59,130,246,.12)]
                    "
                  />
                </div>

                {/* Submit */}

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    group
                    inline-flex
                    min-h-14
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    bg-blue-600
                    px-7
                    py-4
                    font-semibold
                    text-white
                    shadow-[0_14px_38px_rgba(37,99,235,.3)]
                    transition
                    hover:bg-blue-500
                  "
                >
                  Send Message

                  <FaArrowRight
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1.5
                    "
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer
        className="
          relative
          z-10
          mt-20
          border-t
          border-white/10
          bg-slate-950/40
          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            py-12
            sm:px-8
            lg:px-10
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-12
              lg:grid-cols-3
            "
          >
            {/* Brand */}

            <div>
              <button
                type="button"
                onClick={() =>
                  scrollToSection("home")
                }
                className="
                  text-left
                  text-3xl
                  font-black
                  tracking-tight
                "
              >
                <span className="text-blue-500">
                  Devjit
                </span>

                <span className="text-white">
                  {" "}
                  Portfolio
                </span>
              </button>

              <p
                className="
                  mt-5
                  max-w-md
                  text-sm
                  leading-7
                  text-slate-400
                "
              >
                Frontend Developer focused on building
                responsive, modern, accessible, and
                user-friendly web applications.
              </p>

              <div
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-emerald-500/20
                  bg-emerald-500/10
                  px-4
                  py-2
                  text-xs
                  font-medium
                  text-emerald-400
                "
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400" />

                Open to frontend opportunities
              </div>
            </div>

            {/* Quick links */}

            <div>
              <h3 className="text-lg font-bold text-white">
                Quick Links
              </h3>

              <div
                className="
                  mt-6
                  grid
                  grid-cols-2
                  gap-x-8
                  gap-y-4
                "
              >
                {footerLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() =>
                      scrollToSection(link.id)
                    }
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      text-left
                      text-sm
                      text-slate-400
                      transition
                      hover:text-blue-400
                    "
                  >
                    <span
                      className="
                        h-px
                        w-0
                        bg-blue-500
                        transition-all
                        duration-300
                        group-hover:w-4
                      "
                    />

                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Social links */}

            <div>
              <h3 className="text-lg font-bold text-white">
                Connect
              </h3>

              <p
                className="
                  mt-4
                  max-w-sm
                  text-sm
                  leading-7
                  text-slate-400
                "
              >
                Follow my development journey or contact me
                directly for projects and opportunities.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      whileHover={{
                        y: -4,
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className={`
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/10
                        bg-white/5
                        text-xl
                        transition-all
                        ${social.iconColor}
                        ${social.hover}
                      `}
                    >
                      <Icon />
                    </motion.a>
                  );
                })}

                <motion.a
                  href="mailto:devjit1682002@gmail.com"
                  aria-label="Email"
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    text-xl
                    text-cyan-400
                    transition-all
                    hover:border-cyan-500/40
                    hover:shadow-[0_0_30px_rgba(34,211,238,.18)]
                  "
                >
                  <FaEnvelope />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Bottom footer */}

          <div
            className="
              mt-10
              flex
              flex-col
              items-center
              justify-between
              gap-5
              border-t
              border-white/10
              pt-7
              lg:flex-row
            "
          >
            <p
              className="
                text-center
                text-sm
                text-slate-500
                lg:text-left
              "
            >
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-slate-300">
                Devjit Mondal
              </span>
              . All rights reserved.
            </p>

            <p
              className="
                flex
                items-center
                gap-2
                text-center
                text-sm
                text-slate-500
              "
            >
              Built with

              <FaReact className="text-cyan-400" />

              React and Tailwind CSS
            </p>

            <button
              type="button"
              onClick={() =>
                scrollToSection("home")
              }
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-xl
                border
                border-blue-500/25
                bg-blue-500/10
                px-5
                py-3
                text-sm
                font-semibold
                text-blue-400
                transition
                hover:bg-blue-600
                hover:text-white
              "
            >
              Back to Top

              <FiArrowUpRight
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Contact;
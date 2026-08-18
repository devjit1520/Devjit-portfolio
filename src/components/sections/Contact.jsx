import { useRef, useState } from "react";
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
  FiAlertCircle,
  FiArrowUpRight,
  FiCheckCircle,
  FiClock,
  FiMessageSquare,
} from "react-icons/fi";

import { sendContactEmail } from "../../services/emailService";

import BrandBanner from "./BrandBanner";

const footerLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

const contactDetails = [
  {
    title: "Email",
    value: "devjit1682002@gmail.com",
    href: "mailto:devjit1682002@gmail.com",
    icon: FaEnvelope,
    style: "border-cyan-500/20 bg-cyan-500/10 text-cyan-400",
  },
  {
    title: "Phone",
    value: "+91 8515016686",
    href: "tel:+918515016686",
    icon: FaPhoneAlt,
    style: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  },
  {
    title: "Location",
    value: "West Bengal, India",
    href: "https://www.google.com/maps/search/West+Bengal+India",
    icon: FaMapMarkerAlt,
    style: "border-pink-500/20 bg-pink-500/10 text-pink-400",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/devjit1520",
    icon: FaGithub,
    iconColor: "text-slate-300",
    hover:
      "hover:border-white/30 hover:bg-white/10 hover:text-white hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/devjit-mondal-b68947233/",
    icon: FaLinkedin,
    iconColor: "text-blue-400",
    hover:
      "hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.18)]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/iamdevjit_15",
    icon: FaInstagram,
    iconColor: "text-pink-400",
    hover:
      "hover:border-pink-400/40 hover:bg-pink-500/10 hover:text-pink-300 hover:shadow-[0_0_25px_rgba(236,72,153,0.18)]",
  },
];

const initialFormData = {
  from_name: "",
  from_email: "",
  subject: "",
  message: "",
  company_website: "",
};

function validateForm(data) {
  const errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (data.from_name.trim().length < 2) {
    errors.from_name = "Please enter at least 2 characters.";
  }

  if (!emailPattern.test(data.from_email.trim())) {
    errors.from_email = "Please enter a valid email address.";
  }

  if (data.subject.trim().length < 3) {
    errors.subject = "Please enter a clear subject.";
  }

  if (data.message.trim().length < 10) {
    errors.message = "Message must contain at least 10 characters.";
  } else if (data.message.length > 1000) {
    errors.message = "Message must not exceed 1000 characters.";
  }

  return errors;
}

function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const nextErrors = validateForm(formData);

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setStatus({
        type: "error",
        message: "Please correct the highlighted fields.",
      });
      return;
    }

    if (formData.company_website.trim()) {
      setFormData(initialFormData);
      setStatus({ type: "success", message: "Message received." });
      return;
    }

    try {
      setIsSubmitting(true);
      await sendContactEmail(formRef.current);
      setFormData(initialFormData);
      formRef.current?.reset();
      setStatus({
        type: "success",
        message: "Message sent successfully! I will get back to you soon.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error?.message || "Unable to send your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    window.scrollTo({
      top: section.getBoundingClientRect().top + window.scrollY - 90,
      behavior: "smooth",
    });
  };

  const inputClass = (error) =>
    `w-full rounded-2xl border bg-[#0d1829] px-5 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 ${
      error
        ? "border-red-500/40 focus:border-red-400 focus:ring-4 focus:ring-red-500/10"
        : "border-white/[0.08] focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10"
    }`;

  return (
    <section id="contact" className="relative overflow-hidden bg-[#010817] py-10 sm:py-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-52 top-24 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[170px]" />
        <div className="absolute -right-52 bottom-24 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[170px]" />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
<h2
            className="
              mt-5
              text-3xl
              font-black
              tracking-tight
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
           <span
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
              font-semibold
              uppercase
              tracking-[0.22em]
              text-blue-400
              
            "
          >
           <FiMessageSquare /> Contact Me
          </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Have a project, internship opportunity, freelance work, or frontend
            role? Send me a message and let&apos;s discuss how I can contribute.
          </p>

                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: 110,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.25,
                        duration: 0.6,
                      }}
                      className="
                        mx-auto
                        mt-7
                        h-1
                        rounded-full
                        bg-blue-500
                        shadow-[0_0_20px_rgba(59,130,246,0.65)]
                      "
                    />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#101b2e]/92 p-6 shadow-[12px_12px_30px_rgba(0,0,0,.34),-8px_-8px_24px_rgba(59,130,246,.03)] backdrop-blur-2xl sm:p-8 lg:col-span-5"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Available for Opportunities
            </div>

            <h3 className="mt-7 text-3xl font-black text-white sm:text-4xl">
              Get in touch
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              I am open to frontend opportunities, internships, freelance
              projects, and professional collaborations.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/[0.08] bg-[#0d1829] p-4">
                <FiClock className="text-xl text-blue-400" />
                <p className="mt-3 text-sm font-semibold text-white">Response Time</p>
                <p className="mt-1 text-xs text-slate-500">Usually within 24 hours</p>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-[#0d1829] p-4">
                <FiCheckCircle className="text-xl text-emerald-400" />
                <p className="mt-3 text-sm font-semibold text-white">Work Status</p>
                <p className="mt-1 text-xs text-slate-500">Available for new work</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                const external = detail.title === "Location";

                return (
                  <motion.a
                    key={detail.title}
                    href={detail.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#0d1829] p-4 transition hover:border-blue-500/25"
                  >
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${detail.style}`}>
                      <Icon />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-500">{detail.title}</p>
                      <p className="mt-1 truncate text-sm font-semibold text-slate-200 group-hover:text-blue-400">
                        {detail.value}
                      </p>
                    </div>
                    <FiArrowUpRight className="ml-auto text-slate-600 group-hover:text-blue-400" />
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    whileHover={{ y: -4 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-[#0d1829] text-xl text-slate-300 hover:border-blue-500/30 hover:text-blue-400"
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#101b2e]/92 p-6 shadow-[12px_12px_30px_rgba(0,0,0,.34),-8px_-8px_24px_rgba(59,130,246,.03)] backdrop-blur-2xl sm:p-8 lg:col-span-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">Send a message</p>
                <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">Tell me about your project</h3>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-xl text-blue-400">
                <FaPaperPlane />
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Your message will be delivered directly through EmailJS.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
              <input type="hidden" name="reply_to" value={formData.from_email} />
              <input type="hidden" name="submitted_at" value={new Date().toLocaleString()} />

              <div className="absolute -left-[9999px] h-px w-px overflow-hidden opacity-0" aria-hidden="true">
                <label htmlFor="company-website">Company website</label>
                <input
                  id="company-website"
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.company_website}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-300">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    autoComplete="name"
                    className={inputClass(errors.from_name)}
                  />
                  {errors.from_name && <p className="mt-2 text-xs text-red-400">{errors.from_name}</p>}
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-300">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    autoComplete="email"
                    className={inputClass(errors.from_email)}
                  />
                  {errors.from_email && <p className="mt-2 text-xs text-red-400">{errors.from_email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-slate-300">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project, opportunity, or collaboration"
                  className={inputClass(errors.subject)}
                />
                {errors.subject && <p className="mt-2 text-xs text-red-400">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-300">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, requirements, or opportunity..."
                  rows={6}
                  className={`${inputClass(errors.message)} resize-none leading-7`}
                />
                <div className="mt-2 flex items-start justify-between gap-3">
                  {errors.message ? <p className="text-xs text-red-400">{errors.message}</p> : <span />}
                  <p className={`text-xs ${formData.message.length > 1000 ? "text-red-400" : "text-slate-600"}`}>
                    {formData.message.length}/1000
                  </p>
                </div>
              </div>

              {status.message && (
                <div className={`flex items-start gap-3 rounded-2xl border p-4 text-sm ${
                  status.type === "success"
                    ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                    : "border-red-500/20 bg-red-500/10 text-red-400"
                }`}>
                  {status.type === "success" ? <FiCheckCircle className="mt-0.5 shrink-0 text-lg" /> : <FiAlertCircle className="mt-0.5 shrink-0 text-lg" />}
                  <p>{status.message}</p>
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting || formData.message.length > 1000}
                whileHover={!isSubmitting ? { y: -2, scale: 1.01 } : undefined}
                whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
                className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-[0_14px_38px_rgba(37,99,235,.3)] transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message <FaPaperPlane />
                   
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Brand banner */}

<BrandBanner />

<footer
        className="
          relative
          z-10
         
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


          </div>
        </div>
      </footer>
    </section>
  );
}

export default Contact;
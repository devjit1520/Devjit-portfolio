import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccess("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        setSuccess("Failed to send message.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="#" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <h2 className="text-4xl font-bold text-center mb-4">
          Contact Me
        </h2>

        <div className="w-24 h-1 bg-blue-500 mx-auto mb-12"></div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Let's Work Together
            </h3>

            <p className="text-slate-400 mb-8">
              Feel free to contact me for freelance projects,
              internships, or full-time opportunities.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-500 text-2xl" />
                <span>devjit1682002@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-blue-500 text-2xl" />
                <span>+91 8515016686</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-500 text-2xl" />
                <span>West Bengal, India</span>
              </div>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-blue-500"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-blue-500"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-400">
                {success}
              </p>
            )}
          </motion.form>

        </div>
      </div>
    </section>
  );
}

export default Contact;
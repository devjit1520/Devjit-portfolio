import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaCoffee,
} from "react-icons/fa";

function About() {
  const techStack = [
    "React",
    "Tailwind",
    "JavaScript",
    "Git",
  ];

  const learning = [
    "React.js",
    "JavaScript",
    "Node.js",
    "UI/UX Design",
  ];

  const funFacts = [
    "☕ Coffee Lover",
    "🌍 Open To Remote Work",
    "🚀 Available For Work",
    "💻 Open Source Enthusiast",
  ];

  const cardStyle =
    "bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-300";

  return (
    <section
      id="about"
      className="py-10 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            <span >
            About Me 
            </span>
          </h2>
          

          <p className="text-slate-400 mt-4">
            Get to know me better
          </p>

           <div className="w-24 h-1 bg-blue-500 mx-auto mb-12 mt-5"></div>
        </div>

        

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`${cardStyle} lg:col-span-2`}
          >
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              👨‍💻 About Me
            </h3>

            <p className="text-slate-300 leading-9 text-lg">
              My journey into web development started
              with curiosity about how beautiful websites
              are built.

              Today, I focus on creating modern,
              responsive, and user-friendly applications
              using React.js and Tailwind CSS while
              continuously improving my skills and
              learning new technologies.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{
              y: -10,
              rotateX: 5,
            }}
            className={cardStyle}
          >
            <FaRocket className="text-5xl text-blue-500 mb-6" />

            <h3 className="text-2xl font-bold">
              Experience
            </h3>

            <h2 className="text-5xl font-bold text-blue-500 mt-4">
              1+
            </h2>

            <p className="text-slate-400 mt-2">
              Years Learning & Building
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className={cardStyle}
          >
            <FaCode className="text-4xl text-blue-500 mb-5" />

            <h3 className="text-2xl font-bold mb-6">
              Tech Stack
            </h3>

            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="
                  px-4 py-2
                  rounded-full
                  bg-blue-500/10
                  text-blue-400
                  border
                  border-blue-500/20
                  text-sm
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`${cardStyle} lg:col-span-2`}
          >
            <FaLaptopCode className="text-4xl text-green-400 mb-5" />

            <h3 className="text-2xl font-bold mb-6">
              Currently Learning 🚀
            </h3>

            <div className="flex flex-wrap gap-4">
              {learning.map((item) => (
                <span
                  key={item}
                  className="
                  px-4 py-2
                  rounded-full
                  bg-green-500/10
                  text-green-400
                  border
                  border-green-500/20
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`${cardStyle} lg:col-span-3`}
          >
            <FaCoffee className="text-4xl text-yellow-400 mb-6" />

            <h3 className="text-2xl font-bold mb-8">
              Open To Work & Fun Facts
            </h3>

            <div className="flex flex-wrap gap-4">
              {funFacts.map((fact) => (
                <div
                  key={fact}
                  className="
                  px-5 py-3
                  rounded-2xl
                  bg-slate-800
                  text-slate-300
                  "
                >
                  {fact}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;
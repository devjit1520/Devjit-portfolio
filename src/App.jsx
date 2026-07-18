import {
  useCallback,
  useState,
} from "react";

import { AnimatePresence } from "framer-motion";

import Navbar from "./components/layout/Navbar";

import LoadingScreen from "./components/common/LoadingScreen";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

function App() {
  const [loading, setLoading] =
    useState(true);

  const finishLoading = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen
            key="portfolio-loader"
            onComplete={finishLoading}
          />
        )}
      </AnimatePresence>

      <main className="min-h-screen bg-[#010817] text-white">
        <Navbar />

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

export default App;
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
import ScrollProgress from "./components/common/ScrollProgress";
import BackToTop from "./components/common/BackToTop";



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
        <ScrollProgress />
     

        <Navbar />
      <main className="min-h-screen bg-[#010817] text-white">
        

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

        <BackToTop />
    </>
  );
}

export default App;
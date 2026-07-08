import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
// import Footer from "./components/layout/Footer";
import Experience from "./components/sections/Experience";

function App() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />
       <Hero />
       <About />
       <Skills />
       <Projects />
       <Experience />
       <Contact />
       {/* <Footer /> */}
    </main>
  );
}

export default App;
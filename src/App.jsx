import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";
import BackgroundEffects from "./components/effects/BackgroundEffects";

const App = () => {
  return (
    <div className="relative bg-transparent text-white">

      <BackgroundEffects />

      <Navbar />

      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>

        <section id="skills" className="min-h-screen">
          <Skills />
        </section>

        <section id="projects" className="min-h-screen">
          <Projects />
        </section>

        <section id="experience" className="min-h-screen">
          <Experience />
        </section>

        <section id="achievements" className="min-h-screen">
          <Achievements />
        </section>

        <section id="contact" className="min-h-screen">
          <Contact />
        </section>

        <Footer />
        
      </main>
    </div>
  );
};

export default App;

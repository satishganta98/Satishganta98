import React from "react";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="App bg-[#1a1c1b] min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

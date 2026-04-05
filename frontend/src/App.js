import React, { Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

const AboutSection = lazy(() => import("./components/AboutSection"));
const SkillsSection = lazy(() => import("./components/SkillsSection"));
const ExperienceSection = lazy(() => import("./components/ExperienceSection"));
const EducationSection = lazy(() => import("./components/EducationSection"));
const ProjectsSection = lazy(() => import("./components/ProjectsSection"));
const ImpactSection = lazy(() => import("./components/ImpactSection"));
const CertificationsSection = lazy(() => import("./components/CertificationsSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));
const Footer = lazy(() => import("./components/Footer"));

const SectionLoader = () => (
  <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
    <div className="h-24 rounded-xl bg-[#302f2c] border border-[#3f4816]/50 animate-pulse" />
  </div>
);

function App() {
  return (
    <div className="App bg-[#1a1c1b] min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <ImpactSection />
          <CertificationsSection />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

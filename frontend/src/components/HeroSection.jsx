import React from 'react';
import { MapPin, Mail, ArrowDown, Shield, Terminal, Download, TrendingUp, Linkedin } from 'lucide-react';
import { profileData } from '../data/mock';

const HeroSection = () => {
  const publicUrl = process.env.PUBLIC_URL || '';

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-[#ffffff] flex items-center overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#3b82f6] rounded-full blur-[120px] opacity-10 animate-pulse" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#10b981] rounded-full blur-[100px] opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur-md border border-[#3b82f6]/20 rounded-full shadow-lg hover:shadow-xl transition-all">
              <span className="w-2 h-2 bg-[#3b82f6] rounded-full animate-pulse" />
              <span className="text-[#1f40af] text-sm font-medium">Available for opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#111827] leading-[0.85] tracking-tight">
                {profileData.name.split(' ')[0]}
                <br />
                <span className="text-[#3b82f6]">{profileData.name.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#4b5563] font-medium">
                {profileData.title}
              </p>
            </div>

            {/* Tagline */}
            <p className="text-lg text-[#4b5563] max-w-lg leading-relaxed">
              {profileData.tagline}
            </p>

            {/* Location & Email */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-[#4b5563]">
                <MapPin className="w-5 h-5 text-[#3b82f6]" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-2 text-[#4b5563]">
                <Mail className="w-5 h-5 text-[#3b82f6]" />
                <span>{profileData.email}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-[#3b82f6] text-white rounded-full font-bold text-sm uppercase tracking-wider hover:bg-[#1f40af] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
              
              {/* CV Download Buttons */}
              <a
                href={`${publicUrl}/cv.pdf`}
                download="Satish_Kumar_Ganta_CV.pdf"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#3b82f6] text-[#3b82f6] rounded-full font-bold text-sm uppercase tracking-wider hover:bg-[#3b82f6] hover:text-white transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Professional CV
              </a>

              <a
                href={`${publicUrl}/cv-ats.txt`}
                download="Satish_Kumar_Ganta_CV_ATS.txt"
                className="inline-flex items-center gap-2 px-6 py-4 border border-[#d1d5db] text-[#4b5563] rounded-full font-bold text-sm uppercase tracking-wider hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all duration-300"
                title="ATS-formatted CV for job applications"
              >
                <Download className="w-4 h-4" />
                ATS CV
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#0077b5] text-[#0077b5] rounded-full font-bold text-sm uppercase tracking-wider hover:bg-[#0077b5] hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-[#d1d5db]">
              {profileData.stats.map((stat, index) => (
                <div key={index} className="pt-6">
                  <div className="text-2xl md:text-3xl font-black text-[#3b82f6]">{stat.value}</div>
                  <div className="text-xs md:text-sm text-[#4b5563] mt-2 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Key Achievements */}
            <div className="mt-12 grid md:grid-cols-2 gap-4">
              {profileData.achievements.map((achievement, index) => (
                <div key={index} className="flex gap-3 p-4 bg-[#f3f4f6]/50 rounded-lg border border-[#d1d5db]/50">
                  <TrendingUp className="w-5 h-5 text-[#3b82f6] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#111827] text-sm">{achievement.title}</div>
                    <div className="text-[#4b5563] text-xs mt-1">{achievement.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Decorative Ring */}
              <div className="w-80 h-80 border-2 border-[#dbeafe] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="w-96 h-96 border border-[#e5e7eb] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              
              {/* Center Icon */}
              <div className="relative w-64 h-64 bg-[#f3f4f6] rounded-full flex items-center justify-center border border-[#dbeafe] shadow-lg">
                <Shield className="w-24 h-24 text-[#3b82f6]" />
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-4 right-8 p-4 bg-white rounded-xl border border-[#dbeafe] animate-bounce shadow-md" style={{ animationDuration: '3s' }}>
                <Terminal className="w-8 h-8 text-[#3b82f6]" />
              </div>
              <div className="absolute bottom-8 -left-4 p-3 bg-[#3b82f6] rounded-xl shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-[#6b7280] hover:text-[#3b82f6] transition-colors cursor-pointer"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

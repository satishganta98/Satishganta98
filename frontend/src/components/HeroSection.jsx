import React from 'react';
import { MapPin, Mail, ArrowDown, Shield, Terminal, Download } from 'lucide-react';
import { profileData } from '../data/mock';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-[#1a1c1b] flex items-center overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#d9fb06 1px, transparent 1px), linear-gradient(90deg, #d9fb06 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#3f4816] rounded-full blur-[120px] opacity-30 animate-pulse" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#d9fb06] rounded-full blur-[100px] opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#302f2c] border border-[#3f4816] rounded-full">
              <span className="w-2 h-2 bg-[#d9fb06] rounded-full animate-pulse" />
              <span className="text-[#888680] text-sm font-medium">Available for opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.85] tracking-tight">
                {profileData.name.split(' ')[0]}
                <br />
                <span className="text-[#d9fb06]">{profileData.name.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#888680] font-medium">
                {profileData.title}
              </p>
            </div>

            {/* Tagline */}
            <p className="text-lg text-[#888680] max-w-lg leading-relaxed">
              {profileData.tagline}
            </p>

            {/* Location & Email */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-[#888680]">
                <MapPin className="w-5 h-5 text-[#d9fb06]" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-2 text-[#888680]">
                <Mail className="w-5 h-5 text-[#d9fb06]" />
                <span>{profileData.email}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-[#d9fb06] text-[#1a1c1b] rounded-full font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform duration-300"
              >
                Get In Touch
              </a>
              <a
                href="/cv.pdf"
                download="Satish_Kumar_Ganta_CV.pdf"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#d9fb06] text-[#d9fb06] rounded-full font-bold text-sm uppercase tracking-wider hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Decorative Ring */}
              <div className="w-80 h-80 border-2 border-[#3f4816] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="w-96 h-96 border border-[#3f4816]/50 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              
              {/* Center Icon */}
              <div className="relative w-64 h-64 bg-[#302f2c] rounded-full flex items-center justify-center border border-[#3f4816]">
                <Shield className="w-24 h-24 text-[#d9fb06]" />
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-4 right-8 p-4 bg-[#302f2c] rounded-xl border border-[#3f4816] animate-bounce" style={{ animationDuration: '3s' }}>
                <Terminal className="w-8 h-8 text-[#d9fb06]" />
              </div>
              <div className="absolute bottom-8 -left-4 p-3 bg-[#d9fb06] rounded-xl">
                <Shield className="w-6 h-6 text-[#1a1c1b]" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-[#888680] hover:text-[#d9fb06] transition-colors cursor-pointer"
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

import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Github } from 'lucide-react';
import { profileData } from '../data/mock';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Impact', href: '#impact' },
    { name: 'SOC Dashboard', href: '#soc-dashboard' },
    { name: 'Threat Map', href: '#threat-map' },
    { name: 'Trust', href: '#trust-signals' },
    { name: 'Certificates', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md border-b border-[#d1d5db]/50 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#3b82f6] group-hover:border-[#1f40af] transition-all duration-300 group-hover:scale-105">
              <img 
                src={`${process.env.PUBLIC_URL}/assets/profile.jpg`} 
                alt="Satish Kumar Ganta"
                className="w-full h-full object-cover"
                width="40"
                height="40"
                fetchPriority="high"
                decoding="async"
                style={{ objectPosition: '50% 20%' }}
              />
            </div>
            <span className="text-[#111827] font-bold text-lg tracking-tight hidden sm:block">Satish<span className="text-[#3b82f6]">.</span></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-4 py-2 text-[#4b5563] hover:text-[#3b82f6] transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* GitHub Link & CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-[#4b5563] hover:text-[#3b82f6] transition-colors"
              title="Visit GitHub"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </a>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="inline-flex items-center px-6 py-2.5 bg-[#3b82f6] text-white rounded-full font-semibold text-sm hover:bg-[#1f40af] transition-colors duration-300 shadow-md"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#3b82f6] hover:bg-[#f3f4f6] rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white/98 backdrop-blur-md border-b border-[#d1d5db]/50 shadow-lg">
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block px-4 py-3 text-[#4b5563] hover:text-[#3b82f6] hover:bg-[#f3f4f6] rounded-lg transition-all duration-300 font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-[#4b5563] hover:text-[#3b82f6] hover:bg-[#f3f4f6] rounded-lg transition-all duration-300 font-medium"
              >
                GitHub
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="block mt-4 px-4 py-3 bg-[#3b82f6] text-white rounded-full font-semibold text-center hover:bg-[#1f40af] transition-colors duration-300"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Github, Moon, Sun } from 'lucide-react';
import { profileData } from '../data/mock';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme, colors } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
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
        scrolled ? 'bg-[#1a1c1b]/95 backdrop-blur-md border-b border-[#3f4816]/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#d9fb06] group-hover:border-[#d9fb06]/80 transition-all duration-300 group-hover:scale-105">
              <img 
                src="https://customer-assets.emergentagent.com/job_career-profile-436/artifacts/e3jsphtd_IMG_9529.jpeg" 
                alt="Satish Kumar Ganta"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 20%' }}
              />
            </div>
            <span className="text-white font-bold text-lg tracking-tight hidden sm:block">Satish<span className="text-[#d9fb06]">.</span></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-4 py-2 text-[#888680] hover:text-[#d9fb06] transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* GitHub Link & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-[#888680] hover:text-[#d9fb06] transition-colors"
              title="Visit GitHub"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors bg-[#302f2c] hover:bg-[#3d3c38] text-[#d9fb06]"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="inline-flex items-center px-6 py-2.5 bg-[#d9fb06] text-[#1a1c1b] rounded-full font-semibold text-sm hover:scale-105 transition-transform duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors bg-[#302f2c] hover:bg-[#3d3c38] text-[#d9fb06]"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#d9fb06] hover:bg-[#302f2c] rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-[#1a1c1b]/98 backdrop-blur-md border-b border-[#3f4816]/50">
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block px-4 py-3 text-[#888680] hover:text-[#d9fb06] hover:bg-[#302f2c] rounded-lg transition-all duration-300 font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-[#888680] hover:text-[#d9fb06] hover:bg-[#302f2c] rounded-lg transition-all duration-300 font-medium"
              >
                GitHub
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="block mt-4 px-4 py-3 bg-[#d9fb06] text-[#1a1c1b] rounded-full font-semibold text-center hover:scale-105 transition-transform duration-300"
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

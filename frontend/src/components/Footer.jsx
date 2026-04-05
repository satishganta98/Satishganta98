import React from 'react';
import { Linkedin, Mail, ArrowUp, Github } from 'lucide-react';
import { profileData } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#ffffff] border-t border-[#d1d5db]/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#3b82f6]">
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/profile.jpg`} 
                  alt="Satish Kumar Ganta"
                  className="w-full h-full object-cover"
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: '50% 20%' }}
                />
              </div>
              <span className="text-[#111827] font-bold text-xl">Satish Kumar Ganta</span>
            </div>
            <p className="text-[#4b5563] leading-relaxed">
              Cybersecurity Professional dedicated to protecting digital assets and hunting threats.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-[#111827] font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Achievements', 'Skills', 'Experience', 'Education', 'Projects', 'Impact', 'SOC Dashboard', 'Trust Signals', 'Certifications', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-[#4b5563] hover:text-[#3b82f6] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-[#111827] font-semibold">Connect</h4>
            <div className="flex gap-4">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#f3f4f6] rounded-lg flex items-center justify-center hover:bg-[#3b82f6] group transition-colors duration-300 border border-[#d1d5db]"
              >
                <Github className="w-5 h-5 text-[#3b82f6] group-hover:text-white transition-colors" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#f3f4f6] rounded-lg flex items-center justify-center hover:bg-[#3b82f6] group transition-colors duration-300 border border-[#d1d5db]"
              >
                <Linkedin className="w-5 h-5 text-[#3b82f6] group-hover:text-white transition-colors" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="w-12 h-12 bg-[#f3f4f6] rounded-lg flex items-center justify-center hover:bg-[#3b82f6] group transition-colors duration-300 border border-[#d1d5db]"
              >
                <Mail className="w-5 h-5 text-[#3b82f6] group-hover:text-white transition-colors" />
              </a>
            </div>
            <p className="text-[#4b5563] text-sm">
              {profileData.location}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#d1d5db]/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6b7280] text-sm">
            © {currentYear} Satish Kumar Ganta. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#4b5563] hover:text-[#3b82f6] transition-colors group"
          >
            <span className="text-sm">Back to top</span>
            <div className="w-8 h-8 bg-[#f3f4f6] rounded-full flex items-center justify-center group-hover:bg-[#3b82f6] transition-colors border border-[#d1d5db]">
              <ArrowUp className="w-4 h-4 text-[#3b82f6] group-hover:text-white transition-colors" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Linkedin, Mail, ArrowUp, Github } from 'lucide-react';
import { profileData } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1c1b] border-t border-[#3f4816]/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#d9fb06]">
                <img 
                  src="https://customer-assets.emergentagent.com/job_career-profile-436/artifacts/e3jsphtd_IMG_9529.jpeg" 
                  alt="Satish Kumar Ganta"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 20%' }}
                />
              </div>
              <span className="text-white font-bold text-xl">Satish Kumar Ganta</span>
            </div>
            <p className="text-[#888680] leading-relaxed">
              Cybersecurity Professional dedicated to protecting digital assets and hunting threats.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Skills', 'Experience', 'Education', 'Certifications', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-[#888680] hover:text-[#d9fb06] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Connect</h4>
            <div className="flex gap-4">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#302f2c] rounded-lg flex items-center justify-center hover:bg-[#d9fb06] group transition-colors duration-300"
              >
                <Github className="w-5 h-5 text-[#d9fb06] group-hover:text-[#1a1c1b] transition-colors" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#302f2c] rounded-lg flex items-center justify-center hover:bg-[#d9fb06] group transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5 text-[#d9fb06] group-hover:text-[#1a1c1b] transition-colors" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="w-12 h-12 bg-[#302f2c] rounded-lg flex items-center justify-center hover:bg-[#d9fb06] group transition-colors duration-300"
              >
                <Mail className="w-5 h-5 text-[#d9fb06] group-hover:text-[#1a1c1b] transition-colors" />
              </a>
            </div>
            <p className="text-[#888680] text-sm">
              {profileData.location}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#3f4816]/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#888680] text-sm">
            © {currentYear} Satish Kumar Ganta. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#888680] hover:text-[#d9fb06] transition-colors group"
          >
            <span className="text-sm">Back to top</span>
            <div className="w-8 h-8 bg-[#302f2c] rounded-full flex items-center justify-center group-hover:bg-[#d9fb06] transition-colors">
              <ArrowUp className="w-4 h-4 text-[#d9fb06] group-hover:text-[#1a1c1b] transition-colors" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

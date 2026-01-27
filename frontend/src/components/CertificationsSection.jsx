import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { profileData } from '../data/mock';

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 bg-[#1a1c1b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-[#d9fb06] text-sm font-semibold uppercase tracking-widest">Credentials</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4">
            Professional <span className="text-[#888680]">Certifications</span>
          </h2>
          <p className="text-[#888680] mt-4 max-w-2xl">
            Industry-recognized certifications validating expertise in cybersecurity, networking, and cloud technologies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profileData.certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="group p-6 bg-[#302f2c] rounded-xl border border-[#3f4816]/50 hover:border-[#d9fb06] transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-[#3f4816] rounded-lg flex items-center justify-center group-hover:bg-[#d9fb06] transition-colors duration-300">
                  <Award className="w-6 h-6 text-[#d9fb06] group-hover:text-[#1a1c1b] transition-colors duration-300" />
                </div>
                <ExternalLink className="w-5 h-5 text-[#888680] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="text-white font-semibold mb-2 group-hover:text-[#d9fb06] transition-colors">
                {cert.name}
              </h3>

              <p className="text-[#d9fb06] text-sm font-medium mb-3">
                {cert.issuer}
              </p>

              <div className="flex items-center gap-2 text-[#888680] text-sm">
                <Calendar className="w-4 h-4" />
                <span>{cert.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Banner */}
        <div className="mt-16 p-8 bg-gradient-to-r from-[#3f4816] to-[#302f2c] rounded-2xl border border-[#3f4816]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">CompTIA Triple Certified</h3>
              <p className="text-[#888680]">Security+, Network+, and CySA+ certified professional</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center px-6 py-3 bg-[#1a1c1b] rounded-xl">
                <div className="text-3xl font-black text-[#d9fb06]">7</div>
                <div className="text-xs text-[#888680] uppercase tracking-wider">Certifications</div>
              </div>
              <div className="text-center px-6 py-3 bg-[#1a1c1b] rounded-xl">
                <div className="text-3xl font-black text-[#d9fb06]">4</div>
                <div className="text-xs text-[#888680] uppercase tracking-wider">Issuers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

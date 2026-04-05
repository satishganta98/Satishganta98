import React from 'react';
import { Building2, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { profileData } from '../data/mock';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-[#3b82f6] text-sm font-semibold uppercase tracking-widest">Career Path</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111827] mt-4">
            Work <span className="text-[#4b5563]">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#d1d5db] transform md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {profileData.experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[#3b82f6] rounded-full transform md:-translate-x-1/2 border-4 border-[#ffffff] z-10" />

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="p-6 bg-[#f3f4f6] rounded-2xl border border-[#d1d5db]/50 hover:border-[#3b82f6]/50 transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#111827] group-hover:text-[#3b82f6] transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-[#3b82f6] mt-1">
                          <Building2 className="w-4 h-4" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-[#4b5563]">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[#4b5563] text-sm leading-relaxed">
                          <ChevronRight className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

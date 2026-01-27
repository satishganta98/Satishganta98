import React from 'react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { profileData } from '../data/mock';

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-[#302f2c]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#d9fb06] text-sm font-semibold uppercase tracking-widest">Academic Background</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4">
            Education & <span className="text-[#888680]">Learning</span>
          </h2>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {profileData.education.map((edu) => (
            <div
              key={edu.id}
              className="group p-8 bg-[#1a1c1b] rounded-2xl border border-[#3f4816]/50 hover:border-[#d9fb06] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-[#3f4816] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#d9fb06] transition-colors duration-300">
                <GraduationCap className="w-7 h-7 text-[#d9fb06] group-hover:text-[#1a1c1b] transition-colors duration-300" />
              </div>

              {/* Degree */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#d9fb06] transition-colors">
                {edu.degree}
              </h3>

              {/* Institution */}
              <p className="text-[#d9fb06] font-semibold mb-4">{edu.institution}</p>

              {/* Duration */}
              <div className="flex items-center gap-2 text-[#888680] mb-6">
                <Calendar className="w-4 h-4" />
                <span>{edu.duration}</span>
              </div>

              {/* Coursework */}
              <div className="pt-6 border-t border-[#3f4816]">
                <div className="flex items-center gap-2 text-[#888680] text-sm mb-3">
                  <BookOpen className="w-4 h-4 text-[#d9fb06]" />
                  <span className="font-semibold uppercase tracking-wider">Relevant Coursework</span>
                </div>
                <p className="text-[#888680] text-sm leading-relaxed">
                  {edu.coursework}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

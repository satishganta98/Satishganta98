import React from 'react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { profileData } from '../data/mock';

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-[#f3f4f6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#3b82f6] text-sm font-semibold uppercase tracking-widest">Academic Background</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111827] mt-4">
            Education & <span className="text-[#4b5563]">Learning</span>
          </h2>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {profileData.education.map((edu) => (
            <div
              key={edu.id}
              className="group p-8 bg-[#ffffff] rounded-2xl border border-[#d1d5db]/50 hover:border-[#3b82f6] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-[#d1d5db] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3b82f6] transition-colors duration-300">
                <GraduationCap className="w-7 h-7 text-[#3b82f6] group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Degree */}
              <h3 className="text-xl font-bold text-[#111827] mb-2 group-hover:text-[#3b82f6] transition-colors">
                {edu.degree}
              </h3>

              {/* Institution */}
              <p className="text-[#3b82f6] font-semibold mb-4">{edu.institution}</p>

              {/* Duration */}
              <div className="flex items-center gap-2 text-[#4b5563] mb-6">
                <Calendar className="w-4 h-4" />
                <span>{edu.duration}</span>
              </div>

              {/* Coursework */}
              <div className="pt-6 border-t border-[#d1d5db]">
                <div className="flex items-center gap-2 text-[#4b5563] text-sm mb-3">
                  <BookOpen className="w-4 h-4 text-[#3b82f6]" />
                  <span className="font-semibold uppercase tracking-wider">Relevant Coursework</span>
                </div>
                <p className="text-[#4b5563] text-sm leading-relaxed">
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

import React, { useState } from 'react';
import { Code, Wrench, Users } from 'lucide-react';
import { profileData } from '../data/mock';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('technical');

  const tabs = [
    { id: 'technical', label: 'Technical Skills', icon: Code },
    { id: 'tools', label: 'Tools & Software', icon: Wrench },
    { id: 'professional', label: 'Professional Skills', icon: Users }
  ];

  const getSkills = () => {
    switch (activeTab) {
      case 'technical':
        return profileData.skills.technical;
      case 'tools':
        return profileData.skills.tools;
      case 'professional':
        return profileData.skills.professional;
      default:
        return [];
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#f3f4f6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#3b82f6] text-sm font-semibold uppercase tracking-widest">Expertise</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111827] mt-4">
            Skills & <span className="text-[#4b5563]">Capabilities</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#3b82f6] text-white'
                  : 'bg-[#ffffff] text-[#4b5563] border border-[#d1d5db] hover:border-[#3b82f6] hover:text-[#3b82f6]'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {getSkills().map((skill, index) => (
            <div
              key={index}
              className="group p-4 bg-[#ffffff] rounded-xl border border-[#d1d5db]/50 hover:border-[#3b82f6] transition-all duration-300 cursor-default"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#3b82f6] rounded-full group-hover:scale-150 transition-transform duration-300" />
                <span className="text-[#111827] font-medium group-hover:text-[#3b82f6] transition-colors duration-300">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Highlight */}
        <div className="mt-16 p-8 bg-[#ffffff] rounded-2xl border border-[#d1d5db]">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-[#3b82f6] mb-2">SIEM</div>
              <div className="text-[#4b5563]">Splunk Enterprise Expert</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#3b82f6] mb-2">SOC</div>
              <div className="text-[#4b5563]">Blue Team Operations</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#3b82f6] mb-2">ML</div>
              <div className="text-[#4b5563]">Predictive Analytics</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

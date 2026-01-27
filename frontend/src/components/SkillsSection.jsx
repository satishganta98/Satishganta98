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
    <section id="skills" className="py-24 bg-[#302f2c]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#d9fb06] text-sm font-semibold uppercase tracking-widest">Expertise</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4">
            Skills & <span className="text-[#888680]">Capabilities</span>
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
                  ? 'bg-[#d9fb06] text-[#1a1c1b]'
                  : 'bg-[#1a1c1b] text-[#888680] border border-[#3f4816] hover:border-[#d9fb06] hover:text-[#d9fb06]'
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
              className="group p-4 bg-[#1a1c1b] rounded-xl border border-[#3f4816]/50 hover:border-[#d9fb06] transition-all duration-300 cursor-default"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#d9fb06] rounded-full group-hover:scale-150 transition-transform duration-300" />
                <span className="text-white font-medium group-hover:text-[#d9fb06] transition-colors duration-300">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Highlight */}
        <div className="mt-16 p-8 bg-[#1a1c1b] rounded-2xl border border-[#3f4816]">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-[#d9fb06] mb-2">SIEM</div>
              <div className="text-[#888680]">Splunk Enterprise Expert</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#d9fb06] mb-2">SOC</div>
              <div className="text-[#888680]">Blue Team Operations</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#d9fb06] mb-2">ML</div>
              <div className="text-[#888680]">Predictive Analytics</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

import React, { useState } from 'react';
import { Code, Wrench, Users } from 'lucide-react';
import { profileData } from '../data/mock';

const brandMeta = {
  'Splunk Enterprise': { logo: 'https://cdn.simpleicons.org/splunk/65A637', ring: 'ring-[#65A637]/30', glow: 'shadow-[#65A637]/30' },
  'Splunk': { logo: 'https://cdn.simpleicons.org/splunk/65A637', ring: 'ring-[#65A637]/30', glow: 'shadow-[#65A637]/30' },
  'Python': { logo: 'https://cdn.simpleicons.org/python/3776AB', ring: 'ring-[#3776AB]/30', glow: 'shadow-[#3776AB]/30' },
  'Power BI': { logo: 'https://cdn.simpleicons.org/powerbi/F2C811', ring: 'ring-[#F2C811]/40', glow: 'shadow-[#F2C811]/25' },
  'Tableau': { logo: 'https://cdn.simpleicons.org/tableau/E97627', ring: 'ring-[#E97627]/30', glow: 'shadow-[#E97627]/25' },
  'MS Excel': { logo: 'https://cdn.simpleicons.org/microsoftexcel/217346', ring: 'ring-[#217346]/30', glow: 'shadow-[#217346]/25' },
  'Docker': { logo: 'https://cdn.simpleicons.org/docker/2496ED', ring: 'ring-[#2496ED]/30', glow: 'shadow-[#2496ED]/30' },
  'Scikit-learn': { logo: 'https://cdn.simpleicons.org/scikitlearn/F7931E', ring: 'ring-[#F7931E]/30', glow: 'shadow-[#F7931E]/30' },
  'Pandas': { logo: 'https://cdn.simpleicons.org/pandas/150458', ring: 'ring-[#150458]/30', glow: 'shadow-[#150458]/30' },
  'NumPy': { logo: 'https://cdn.simpleicons.org/numpy/013243', ring: 'ring-[#013243]/30', glow: 'shadow-[#013243]/30' },
  'Cloud Security (Azure/AWS)': { logo: 'https://cdn.simpleicons.org/amazonaws/FF9900', ring: 'ring-[#FF9900]/30', glow: 'shadow-[#FF9900]/30' }
};

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
              className="group p-4 bg-white/70 backdrop-blur-md rounded-xl border border-[#3b82f6]/15 hover:border-[#3b82f6]/45 hover:shadow-xl transition-all duration-300 cursor-default"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-3">
                {brandMeta[skill]?.logo ? (
                  <div className={`w-9 h-9 rounded-lg bg-white ring-1 ${brandMeta[skill].ring} flex items-center justify-center shadow-md ${brandMeta[skill].glow} group-hover:scale-105 transition-transform duration-300`}>
                    <img
                      src={brandMeta[skill].logo}
                      alt={`${skill} logo`}
                      className="w-5 h-5 object-contain"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#dbeafe] to-[#bfdbfe] ring-1 ring-[#3b82f6]/25 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <span className="text-[#1f40af] text-xs font-bold">
                      {skill.split(' ').map((word) => word[0]).join('').slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                )}
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

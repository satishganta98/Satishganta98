import React from 'react';
import { Shield, Database, Brain, Users } from 'lucide-react';
import { profileData } from '../data/mock';

const AboutSection = () => {
  const highlights = [
    {
      icon: Shield,
      title: 'Security Operations',
      description: 'Expert in SOC operations, threat detection, and incident response'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Masters in Data Analytics with expertise in visualization and insights'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Building predictive models and implementing ML solutions'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Strong communicator with executive reporting experience'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#1a1c1b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-[#d9fb06] text-sm font-semibold uppercase tracking-widest">About Me</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4 leading-tight">
            Securing Digital
            <br />
            <span className="text-[#888680]">Landscapes</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - About Text */}
          <div className="space-y-6">
            <p className="text-lg text-[#888680] leading-relaxed">
              {profileData.about}
            </p>
            <p className="text-lg text-[#888680] leading-relaxed">
              With hands-on experience in threat hunting, log analysis, and security assessments, I help organizations stay ahead of cyber threats. My unique combination of data analytics and cybersecurity expertise enables me to approach security challenges with a data-driven mindset.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center p-4 bg-[#302f2c] rounded-xl border border-[#3f4816]/50">
                <div className="text-3xl font-black text-[#d9fb06]">7+</div>
                <div className="text-sm text-[#888680] mt-1">Certifications</div>
              </div>
              <div className="text-center p-4 bg-[#302f2c] rounded-xl border border-[#3f4816]/50">
                <div className="text-3xl font-black text-[#d9fb06]">15%</div>
                <div className="text-sm text-[#888680] mt-1">Threat Reduction</div>
              </div>
              <div className="text-center p-4 bg-[#302f2c] rounded-xl border border-[#3f4816]/50">
                <div className="text-3xl font-black text-[#d9fb06]">10+</div>
                <div className="text-sm text-[#888680] mt-1">Weekly Incidents</div>
              </div>
            </div>
          </div>

          {/* Right - Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-[#302f2c] rounded-xl border border-[#3f4816]/50 hover:border-[#d9fb06]/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#3f4816] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#d9fb06] transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-[#d9fb06] group-hover:text-[#1a1c1b] transition-colors duration-300" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-[#888680] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

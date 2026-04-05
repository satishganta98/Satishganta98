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
    <section id="about" className="py-24 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-[#3b82f6] text-sm font-semibold uppercase tracking-widest">About Me</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111827] mt-4 leading-tight">
            Securing Digital
            <br />
            <span className="text-[#4b5563]">Landscapes</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - About Text */}
          <div className="space-y-6">
            <p className="text-lg text-[#4b5563] leading-relaxed">
              {profileData.about}
            </p>
            <p className="text-lg text-[#4b5563] leading-relaxed">
              With hands-on experience in threat hunting, log analysis, and security assessments, I help organizations stay ahead of cyber threats. My unique combination of data analytics and cybersecurity expertise enables me to approach security challenges with a data-driven mindset.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center p-4 bg-white/60 backdrop-blur-md rounded-xl border border-[#3b82f6]/15 shadow-lg">
                <div className="text-3xl font-black text-[#3b82f6]">7+</div>
                <div className="text-sm text-[#4b5563] mt-1">Certifications</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-md rounded-xl border border-[#3b82f6]/15 shadow-lg">
                <div className="text-3xl font-black text-[#3b82f6]">15%</div>
                <div className="text-sm text-[#4b5563] mt-1">Threat Reduction</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-md rounded-xl border border-[#3b82f6]/15 shadow-lg">
                <div className="text-3xl font-black text-[#3b82f6]">10+</div>
                <div className="text-sm text-[#4b5563] mt-1">Weekly Incidents</div>
              </div>
            </div>
          </div>

          {/* Right - Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white/60 backdrop-blur-md rounded-xl border border-[#3b82f6]/15 hover:border-[#3b82f6]/40 transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-[#d1d5db] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#3b82f6] transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-[#3b82f6] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-[#111827] font-semibold mb-2">{item.title}</h3>
                <p className="text-[#4b5563] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

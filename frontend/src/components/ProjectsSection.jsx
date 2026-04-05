import React, { useState } from 'react';
import { Github, ExternalLink, Code2, Shield, Activity, Cloud, Mail, Network } from 'lucide-react';
import { profileData } from '../data/mock';

const techBrandMeta = {
  'Splunk Enterprise': { logo: 'https://cdn.simpleicons.org/splunk/65A637', bg: 'bg-[#65A637]/10', text: 'text-[#3f7f2b]', border: 'border-[#65A637]/35' },
  'Splunk': { logo: 'https://cdn.simpleicons.org/splunk/65A637', bg: 'bg-[#65A637]/10', text: 'text-[#3f7f2b]', border: 'border-[#65A637]/35' },
  'Python': { logo: 'https://cdn.simpleicons.org/python/3776AB', bg: 'bg-[#3776AB]/10', text: 'text-[#285e8c]', border: 'border-[#3776AB]/35' },
  'Power BI': { logo: 'https://cdn.simpleicons.org/powerbi/F2C811', bg: 'bg-[#F2C811]/15', text: 'text-[#8d7300]', border: 'border-[#F2C811]/40' },
  'Tableau': { logo: 'https://cdn.simpleicons.org/tableau/E97627', bg: 'bg-[#E97627]/10', text: 'text-[#a85117]', border: 'border-[#E97627]/35' },
  'Scikit-learn': { logo: 'https://cdn.simpleicons.org/scikitlearn/F7931E', bg: 'bg-[#F7931E]/10', text: 'text-[#a75b07]', border: 'border-[#F7931E]/35' },
  'Pandas': { logo: 'https://cdn.simpleicons.org/pandas/150458', bg: 'bg-[#150458]/10', text: 'text-[#2b1b77]', border: 'border-[#150458]/35' },
  'Docker': { logo: 'https://cdn.simpleicons.org/docker/2496ED', bg: 'bg-[#2496ED]/10', text: 'text-[#1f6db3]', border: 'border-[#2496ED]/35' },
  'NLTK': { logo: 'https://cdn.simpleicons.org/python/3776AB', bg: 'bg-[#3776AB]/10', text: 'text-[#285e8c]', border: 'border-[#3776AB]/35' }
};

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'SIEM & Automation', 'Incident Response', 'Email Security', 'Network Security'];

  const categoryIcons = {
    'SIEM & Automation': Code2,
    'Threat Hunting': Activity,
    'Incident Response': Shield,
    'Cloud Security': Cloud,
    'Email Security': Mail,
    'Network Security': Network
  };

  const filteredProjects = selectedCategory === 'All' 
    ? profileData.projects 
    : profileData.projects.filter(project => project.category === selectedCategory);

  const getCategoryIcon = (category) => {
    const IconComponent = categoryIcons[category] || Code2;
    return <IconComponent className="w-5 h-5" />;
  };

  return (
    <section id="projects" className="py-20 bg-[#ffffff]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#111827] mb-4">
            SOC Projects & <span className="text-[#3b82f6]">Security Solutions</span>
          </h2>
          <p className="text-[#6b7280] max-w-2xl mx-auto">
            Hands-on cybersecurity projects demonstrating expertise in threat detection, incident response, and security automation
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-[#3b82f6] text-white'
                  : 'bg-[#f3f4f6] text-[#9ca3af] hover:bg-[#e5e7eb]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/60 backdrop-blur-md rounded-xl p-6 hover:shadow-2xl hover:shadow-[#3b82f6]/15 transition-all duration-300 border border-[#3b82f6]/15 hover:border-[#3b82f6]/40 group"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#3b82f6]/10 rounded-lg text-[#3b82f6]">
                    {getCategoryIcon(project.category)}
                  </div>
                  <div>
                    <span className="text-xs text-[#3b82f6] font-medium">{project.category}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs px-2 py-1 rounded ${
                        project.status === 'Production' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold text-[#111827] mb-3 group-hover:text-[#3b82f6] transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[#6b7280] text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 4).map((tech, index) => (
                  <span
                    key={index}
                    className={`text-xs px-3 py-1.5 rounded-full border inline-flex items-center gap-1.5 font-medium ${
                      techBrandMeta[tech]
                        ? `${techBrandMeta[tech].bg} ${techBrandMeta[tech].text} ${techBrandMeta[tech].border}`
                        : 'bg-[#dbeafe]/60 text-[#1f40af] border-[#93c5fd]/40'
                    }`}
                  >
                    {techBrandMeta[tech]?.logo && (
                      <img
                        src={techBrandMeta[tech].logo}
                        alt={`${tech} logo`}
                        className="w-3.5 h-3.5 object-contain"
                        loading="lazy"
                      />
                    )}
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-xs px-3 py-1.5 bg-white border border-[#d1d5db] text-[#6b7280] rounded-full">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-[#e5e7eb]">
                {Object.entries(project.metrics).slice(0, 2).map(([key, value], index) => (
                  <div key={index} className="text-center">
                    <div className="text-[#3b82f6] font-bold text-sm">{value}</div>
                    <div className="text-[#6b7280] text-xs capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="mb-4">
                <ul className="space-y-2">
                  {project.highlights.slice(0, 2).map((highlight, index) => (
                    <li key={index} className="text-xs text-[#6b7280] flex items-start gap-2">
                      <span className="text-[#3b82f6] mt-1">•</span>
                      <span className="line-clamp-2">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#3b82f6] text-white rounded-lg font-medium hover:bg-[#2563eb] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">View Code</span>
                </a>
                <button className="p-2 bg-[#ffffff] text-[#3b82f6] rounded-lg hover:bg-[#f3f4f6] transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#6b7280]">No projects found in this category.</p>
          </div>
        )}

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-[#f3f4f6] rounded-xl border border-[#e5e7eb]">
            <div className="text-3xl font-bold text-[#3b82f6] mb-2">{profileData.projects.length}</div>
            <div className="text-[#6b7280] text-sm">Total Projects</div>
          </div>
          <div className="text-center p-6 bg-[#f3f4f6] rounded-xl border border-[#e5e7eb]">
            <div className="text-3xl font-bold text-[#3b82f6] mb-2">
              {profileData.projects.filter(p => p.status === 'Production').length}
            </div>
            <div className="text-[#6b7280] text-sm">In Production</div>
          </div>
          <div className="text-center p-6 bg-[#f3f4f6] rounded-xl border border-[#e5e7eb]">
            <div className="text-3xl font-bold text-[#3b82f6] mb-2">
              {new Set(profileData.projects.flatMap(p => p.technologies)).size}
            </div>
            <div className="text-[#6b7280] text-sm">Technologies Used</div>
          </div>
          <div className="text-center p-6 bg-[#f3f4f6] rounded-xl border border-[#e5e7eb]">
            <div className="text-3xl font-bold text-[#3b82f6] mb-2">4</div>
            <div className="text-[#6b7280] text-sm">Security Domains</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

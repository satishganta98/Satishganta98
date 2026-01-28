import React, { useState } from 'react';
import { Github, ExternalLink, Code2, Shield, Activity, Cloud, Mail, Network } from 'lucide-react';
import { profileData } from '../data/mock';

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
    <section id="projects" className="py-20 bg-[#1a1c1b]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            SOC Projects & <span className="text-[#d9fb06]">Security Solutions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
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
                  ? 'bg-[#d9fb06] text-[#1a1c1b]'
                  : 'bg-[#302f2c] text-gray-300 hover:bg-[#3d3c38]'
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
              className="bg-[#302f2c] rounded-xl p-6 hover:shadow-xl hover:shadow-[#d9fb06]/10 transition-all duration-300 border border-[#3d3c38] hover:border-[#d9fb06]/30 group"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#d9fb06]/10 rounded-lg text-[#d9fb06]">
                    {getCategoryIcon(project.category)}
                  </div>
                  <div>
                    <span className="text-xs text-[#d9fb06] font-medium">{project.category}</span>
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
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#d9fb06] transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 4).map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 bg-[#1a1c1b] text-gray-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-xs px-3 py-1 bg-[#1a1c1b] text-gray-400 rounded-full">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-[#3d3c38]">
                {Object.entries(project.metrics).slice(0, 2).map(([key, value], index) => (
                  <div key={index} className="text-center">
                    <div className="text-[#d9fb06] font-bold text-sm">{value}</div>
                    <div className="text-gray-500 text-xs capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="mb-4">
                <ul className="space-y-2">
                  {project.highlights.slice(0, 2).map((highlight, index) => (
                    <li key={index} className="text-xs text-gray-400 flex items-start gap-2">
                      <span className="text-[#d9fb06] mt-1">•</span>
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
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#d9fb06] text-[#1a1c1b] rounded-lg font-medium hover:bg-[#c8ea05] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">View Code</span>
                </a>
                <button className="p-2 bg-[#1a1c1b] text-[#d9fb06] rounded-lg hover:bg-[#252624] transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No projects found in this category.</p>
          </div>
        )}

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-[#302f2c] rounded-xl border border-[#3d3c38]">
            <div className="text-3xl font-bold text-[#d9fb06] mb-2">{profileData.projects.length}</div>
            <div className="text-gray-400 text-sm">Total Projects</div>
          </div>
          <div className="text-center p-6 bg-[#302f2c] rounded-xl border border-[#3d3c38]">
            <div className="text-3xl font-bold text-[#d9fb06] mb-2">
              {profileData.projects.filter(p => p.status === 'Production').length}
            </div>
            <div className="text-gray-400 text-sm">In Production</div>
          </div>
          <div className="text-center p-6 bg-[#302f2c] rounded-xl border border-[#3d3c38]">
            <div className="text-3xl font-bold text-[#d9fb06] mb-2">
              {new Set(profileData.projects.flatMap(p => p.technologies)).size}
            </div>
            <div className="text-gray-400 text-sm">Technologies Used</div>
          </div>
          <div className="text-center p-6 bg-[#302f2c] rounded-xl border border-[#3d3c38]">
            <div className="text-3xl font-bold text-[#d9fb06] mb-2">4</div>
            <div className="text-gray-400 text-sm">Security Domains</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

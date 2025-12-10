import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ExternalLink, Github, X, ArrowUpRight, Zap, Code2, Cpu } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="py-24 bg-[#f6f8fa] dark:bg-[#0d1117] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[#24292f] dark:text-[#c9d1d9] mb-6 tracking-tight">
            Selected Works
          </h2>
          <div className="h-1 w-20 bg-[#0969da] dark:bg-[#1f6feb]"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              onClick={() => openProject(project)}
              className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              {/* Content Content - Bottom Aligned */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 transform transition-transform duration-500">
                {/* Vibe Tags */}
                <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                   {project.tags.slice(0, 3).map(tag => (
                     <span key={tag} className="text-xs font-bold uppercase tracking-wider text-white border border-white/30 px-2 py-1 rounded-full backdrop-blur-md">
                       {tag}
                     </span>
                   ))}
                </div>

                <div className="mb-2">
                   <h3 className="text-3xl font-bold text-white mb-1 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                     {project.title}
                   </h3>
                   <p className="text-sm font-medium text-gray-300 uppercase tracking-widest mb-4">
                     {project.subtitle}
                   </p>
                </div>

                <p className="text-gray-300 text-lg font-light leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                  {project.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-white font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-300">
                  <span>View Case Study</span>
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Decorative Overlay for "Vibe" */}
              <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 {project.id === 'memory-echoes' && <Zap className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" size={32} />}
                 {project.id === 'lumina' && <Cpu className="text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]" size={32} />}
                 {project.id === 'aetheria' && <Code2 className="text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]" size={32} />}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
            onClick={closeProject}
          />
          
          <div className="relative w-full max-w-5xl h-full md:h-auto md:max-h-[90vh] bg-white dark:bg-[#0d1117] md:rounded-2xl shadow-2xl overflow-y-auto flex flex-col md:flex-row">
            
            {/* Modal Close Button */}
            <button 
              onClick={closeProject}
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-colors"
            >
              <X size={24} />
            </button>

            {/* Left Column: Visuals */}
            <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-gray-900">
              <img 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] to-transparent md:bg-gradient-to-r" />
              
              <div className="absolute bottom-8 left-8 z-10">
                <h2 className="text-4xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <p className="text-gray-300 font-medium mb-6">{selectedProject.subtitle}</p>
                <div className="flex gap-3">
                  {selectedProject.demoUrl && (
                    <a href={selectedProject.demoUrl} className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition-colors">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                  {selectedProject.repoUrl && (
                    <a href={selectedProject.repoUrl} className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white border border-white/20 rounded-lg font-bold hover:bg-white/20 transition-colors">
                      <Github size={18} /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Case Study Content */}
            <div className="w-full md:w-3/5 p-8 md:p-12 text-[#24292f] dark:text-[#c9d1d9]">
              <div className="mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0969da] dark:text-[#58a6ff] mb-2 block">
                  Thinking Process
                </span>
                <h3 className="text-2xl font-bold mb-6">Engineering Soul into Silicon</h3>
                
                <div className="space-y-8">
                  <div className="relative pl-6 border-l-2 border-[#d0d7de] dark:border-[#30363d]">
                    <h4 className="text-lg font-bold mb-2">The Challenge</h4>
                    <p className="text-[#57606a] dark:text-[#8b949e] leading-relaxed">
                      {selectedProject.caseStudy?.problem || selectedProject.description}
                    </p>
                  </div>

                  <div className="relative pl-6 border-l-2 border-[#0969da] dark:border-[#1f6feb]">
                    <h4 className="text-lg font-bold mb-2 text-[#0969da] dark:text-[#58a6ff]">The Solution Architecture</h4>
                    <p className="text-[#57606a] dark:text-[#8b949e] leading-relaxed">
                      {selectedProject.caseStudy?.process}
                    </p>
                  </div>

                  <div className="relative pl-6 border-l-2 border-[#d0d7de] dark:border-[#30363d]">
                    <h4 className="text-lg font-bold mb-2">Impact & Metrics</h4>
                    <p className="text-[#57606a] dark:text-[#8b949e] leading-relaxed">
                      {selectedProject.caseStudy?.outcome}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#57606a] dark:text-[#8b949e] mb-4">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-[#f6f8fa] dark:bg-[#21262d] border border-[#d0d7de] dark:border-[#30363d] rounded text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
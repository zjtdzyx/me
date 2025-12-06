import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'ai' | 'fullstack'>('all');

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-[#f6f8fa] dark:bg-[#0d1117] border-t border-[#d0d7de] dark:border-[#30363d] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#24292f] dark:text-[#c9d1d9] mb-4">精选作品集</h2>
          <p className="text-[#57606a] dark:text-[#8b949e] mb-8">展示我从Web前端到AI智能应用的开发成果。</p>
          
          <div className="inline-flex bg-white dark:bg-[#161b22] p-1 rounded-md border border-[#d0d7de] dark:border-[#30363d] shadow-sm">
            {['all', 'web', 'ai', 'fullstack'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-4 py-2 rounded text-sm font-semibold transition-colors capitalize ${
                  filter === f 
                    ? 'bg-[#0969da] dark:bg-[#1f6feb] text-white shadow-sm' 
                    : 'text-[#57606a] dark:text-[#8b949e] hover:text-[#24292f] dark:hover:text-[#c9d1d9] hover:bg-[#f3f4f6] dark:hover:bg-[#21262d]'
                }`}
              >
                {f === 'all' ? 'All' : f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white dark:bg-[#161b22] rounded-lg overflow-hidden border border-[#d0d7de] dark:border-[#30363d] hover:border-[#0969da] dark:hover:border-[#58a6ff] transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden bg-[#eaeef2] dark:bg-[#30363d]">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-2 right-2 bg-white/90 dark:bg-[#0d1117]/90 backdrop-blur text-xs px-2 py-1 rounded text-[#24292f] dark:text-[#c9d1d9] font-bold border border-[#d0d7de] dark:border-[#30363d] shadow-sm uppercase tracking-wider">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#24292f] dark:text-[#c9d1d9] mb-2 group-hover:text-[#0969da] dark:group-hover:text-[#58a6ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#57606a] dark:text-[#8b949e] text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-[#0969da] dark:text-[#58a6ff] bg-blue-50 dark:bg-[#1f6feb]/10 px-2 py-1 rounded border border-blue-100 dark:border-[#1f6feb]/20">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-[#d0d7de] dark:border-[#30363d] pt-4">
                  <a href={project.repoUrl} className="flex items-center text-[#57606a] dark:text-[#8b949e] hover:text-[#24292f] dark:hover:text-[#c9d1d9] text-sm font-semibold transition-colors">
                    <Github size={16} className="mr-1" /> Code
                  </a>
                  <a href={project.demoUrl} className="flex items-center text-[#0969da] dark:text-[#58a6ff] hover:text-[#0a53be] dark:hover:text-[#79c0ff] text-sm font-semibold transition-colors">
                    Live Demo <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
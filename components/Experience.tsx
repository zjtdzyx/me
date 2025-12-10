import React from 'react';
import { EXPERIENCE } from '../constants';
import { Calendar, Building2, Zap } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-[#0d1117] transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Decorative Mesh */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-[0.02] pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[#24292f] dark:text-[#c9d1d9] mb-4 tracking-tight">
            Professional Journey
          </h2>
          <p className="text-[#57606a] dark:text-[#8b949e] text-lg max-w-2xl mx-auto">
            Connecting the dots between engineering, product strategy, and impact.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line - Gradient Flow */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#0969da]/0 via-[#0969da] to-[#0969da]/0 dark:via-[#1f6feb]"></div>

          <div className="space-y-16">
            {EXPERIENCE.map((exp, index) => (
              <div key={exp.id} className={`flex flex-col md:flex-row gap-8 items-center group ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Node - The "Aetheria" Glowing Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 items-center justify-center z-10">
                   {/* Outer Glow */}
                   <div className="absolute w-full h-full bg-[#0969da] dark:bg-[#1f6feb] rounded-full opacity-20 group-hover:opacity-50 group-hover:scale-150 transition-all duration-500 blur-sm"></div>
                   {/* Inner Core */}
                   <div className="relative w-3 h-3 bg-[#0969da] dark:bg-[#1f6feb] rounded-full border border-white dark:border-[#0d1117] shadow-[0_0_15px_2px_rgba(9,105,218,0.5)] dark:shadow-[0_0_15px_2px_rgba(31,111,235,0.6)]"></div>
                </div>

                {/* Content Card */}
                <div className="flex-1 w-full md:w-1/2">
                   <div className={`relative bg-[#f6f8fa] dark:bg-[#161b22] p-8 rounded-2xl border border-[#d0d7de] dark:border-[#30363d] transition-all duration-300 hover:shadow-2xl hover:border-[#0969da]/30 dark:hover:border-[#1f6feb]/30 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                      
                      {/* The Hidden Skill Badge */}
                      <div className="absolute -top-4 right-8 bg-gradient-to-r from-[#0969da] to-purple-600 dark:from-[#1f6feb] dark:to-purple-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transform group-hover:scale-105 transition-transform">
                        <Zap size={12} fill="currentColor" />
                        {exp.highlight}
                      </div>

                      <div className="flex flex-col mb-6">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                            <h3 className="text-2xl font-bold text-[#24292f] dark:text-[#c9d1d9]">{exp.role}</h3>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                            <div className="flex items-center text-[#0969da] dark:text-[#58a6ff]">
                                <Building2 size={16} className="mr-1.5" />
                                {exp.company}
                            </div>
                            <div className="flex items-center text-[#57606a] dark:text-[#8b949e]">
                                <Calendar size={16} className="mr-1.5" />
                                {exp.period}
                            </div>
                        </div>
                      </div>

                      <ul className="space-y-4 mb-8">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start text-[#24292f] dark:text-[#c9d1d9] text-[15px] leading-relaxed">
                             <span className="mt-1.5 mr-3 w-1.5 h-1.5 rounded-full bg-[#d0d7de] dark:bg-[#30363d] flex-shrink-0 group-hover:bg-[#0969da] dark:group-hover:bg-[#1f6feb] transition-colors"></span>
                             {desc}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-[#d0d7de]/50 dark:border-[#30363d]/50">
                        {exp.technologies.map(tech => (
                          <span key={tech} className="px-3 py-1 bg-white dark:bg-[#0d1117] text-[#57606a] dark:text-[#8b949e] text-xs font-semibold rounded-md border border-[#d0d7de] dark:border-[#30363d]">
                            {tech}
                          </span>
                        ))}
                      </div>
                   </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
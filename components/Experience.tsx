import React from 'react';
import { EXPERIENCE } from '../constants';
import { Calendar, Building2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-[#0d1117] border-t border-[#d0d7de] dark:border-[#30363d] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#24292f] dark:text-[#c9d1d9] mb-4">工作经历</h2>
          <p className="text-[#57606a] dark:text-[#8b949e]">我的职业成长路径与关键里程碑。</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#d0d7de] dark:bg-[#30363d]"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <div key={exp.id} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white dark:bg-[#0d1117] border-4 border-[#0969da] dark:border-[#1f6feb] rounded-full z-10 items-center justify-center shadow-sm">
                  <div className="w-2 h-2 bg-[#0969da] dark:bg-[#1f6feb] rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className="flex-1 w-full md:w-1/2">
                   <div className={`bg-white dark:bg-[#161b22] p-6 rounded-lg border border-[#d0d7de] dark:border-[#30363d] hover:border-[#0969da] dark:hover:border-[#58a6ff] shadow-sm hover:shadow-md transition-all ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-[#24292f] dark:text-[#c9d1d9]">{exp.role}</h3>
                        <div className="flex items-center text-[#57606a] dark:text-[#8b949e] text-sm mt-1 sm:mt-0 font-medium">
                          <Calendar size={14} className="mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-[#0969da] dark:text-[#58a6ff] font-semibold mb-4">
                        <Building2 size={16} className="mr-2" />
                        {exp.company}
                      </div>

                      <ul className="list-disc list-inside space-y-2 mb-6 text-[#24292f] dark:text-[#c9d1d9] text-sm leading-relaxed">
                        {exp.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map(tech => (
                          <span key={tech} className="px-2.5 py-1 bg-[#f6f8fa] dark:bg-[#21262d] text-[#24292f] dark:text-[#c9d1d9] text-xs font-semibold rounded-full border border-[#d0d7de] dark:border-[#30363d]">
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
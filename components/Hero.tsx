import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { USER_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-white dark:bg-[#0d1117] transition-colors duration-300">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#8b949e 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center px-3 py-1 mb-6 text-xs font-semibold tracking-wide text-[#0969da] dark:text-[#58a6ff] uppercase bg-blue-50 dark:bg-[#1f6feb]/10 border border-[#0969da]/30 dark:border-[#1f6feb]/30 rounded-full shadow-sm">
             <span className="w-2 h-2 mr-2 bg-[#0969da] dark:bg-[#1f6feb] rounded-full animate-pulse"></span>
             Available for hire
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#24292f] dark:text-[#c9d1d9] mb-6 leading-tight tracking-tight">
            你好，我是 <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#24292f] to-[#57606a] dark:from-[#c9d1d9] dark:to-[#8b949e]">{USER_INFO.name.split(' ')[0]}</span>
            <span className="block text-2xl md:text-3xl text-[#57606a] dark:text-[#8b949e] font-normal mt-4 border-l-4 border-[#0969da] dark:border-[#1f6feb] pl-4">{USER_INFO.title}</span>
          </h1>
          <p className="text-lg text-[#57606a] dark:text-[#8b949e] mb-8 max-w-2xl leading-relaxed">
            {USER_INFO.about}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a href="#projects" className="px-8 py-3 rounded-md bg-[#0969da] dark:bg-[#1f6feb] text-white font-bold hover:bg-[#0a53be] dark:hover:bg-[#388bfd] transition-all shadow-sm hover:shadow-md flex items-center gap-2">
              查看作品集 <ArrowRight size={20} />
            </a>
            <a href="#resume" className="px-8 py-3 rounded-md bg-[#f6f8fa] dark:bg-[#21262d] text-[#24292f] dark:text-[#c9d1d9] font-semibold border border-[#d0d7de] dark:border-[#30363d] hover:bg-[#eaeef2] dark:hover:bg-[#30363d] transition-all">
              我的简历
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 justify-center md:justify-start">
            <a href={USER_INFO.github} target="_blank" rel="noreferrer" className="text-[#57606a] hover:text-[#24292f] dark:text-[#8b949e] dark:hover:text-[#c9d1d9] transition-colors">
              <Github size={28} />
            </a>
            <a href={USER_INFO.linkedin} target="_blank" rel="noreferrer" className="text-[#57606a] hover:text-[#0a66c2] dark:text-[#8b949e] dark:hover:text-[#58a6ff] transition-colors">
              <Linkedin size={28} />
            </a>
            <a href={`mailto:${USER_INFO.email}`} className="text-[#57606a] hover:text-[#ea4335] dark:text-[#8b949e] dark:hover:text-[#ea4335] transition-colors">
              <Mail size={28} />
            </a>
          </div>
        </div>

        <div className="flex-1 relative flex justify-center">
           <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-[#f6f8fa] dark:bg-[#161b22] border-2 border-dashed border-[#d0d7de] dark:border-[#30363d] animate-spin-slow" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-4 rounded-full bg-white dark:bg-[#0d1117] border border-[#d0d7de] dark:border-[#30363d] shadow-2xl overflow-hidden">
                 <img 
                    src="https://picsum.photos/800/800?grayscale" 
                    alt="Zhang Yuxiang" 
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                 />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
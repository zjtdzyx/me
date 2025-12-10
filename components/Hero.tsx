import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Atom, Brain, Database, Sparkles } from 'lucide-react';
import { USER_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-[#0d1117] transition-colors duration-300">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent dark:from-[#1f6feb]/10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent dark:from-[#0d1117] z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: High Contrast Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-bold tracking-widest text-[#0969da] dark:text-[#58a6ff] uppercase bg-blue-50 dark:bg-[#1f6feb]/10 border border-[#0969da]/20 dark:border-[#1f6feb]/20 rounded-full">
               <span className="w-2 h-2 bg-[#0969da] dark:bg-[#1f6feb] rounded-full animate-pulse"></span>
               Available for hire
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#24292f] dark:text-[#c9d1d9] mb-6 leading-[1.1] tracking-tight">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0969da] to-purple-600 dark:from-[#58a6ff] dark:to-purple-400">
                Soul into Silicon.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#57606a] dark:text-[#8b949e] mb-10 font-light max-w-2xl mx-auto lg:mx-0">
              Full-stack Engineer crafting emotional AI experiences & high-performance architecture.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
              <a href="#projects" className="group px-8 py-4 rounded-lg bg-[#24292f] dark:bg-white text-white dark:text-[#0d1117] font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                See My Products 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#resume" className="px-8 py-4 rounded-lg bg-transparent border-2 border-[#d0d7de] dark:border-[#30363d] text-[#24292f] dark:text-[#c9d1d9] font-bold text-lg hover:bg-[#f6f8fa] dark:hover:bg-[#161b22] hover:border-[#24292f] dark:hover:border-[#c9d1d9] transition-all">
                Resume
              </a>
            </div>

            <div className="flex items-center gap-8 justify-center lg:justify-start opacity-80 hover:opacity-100 transition-opacity">
              <a href={USER_INFO.github} target="_blank" rel="noreferrer" className="text-[#57606a] hover:text-[#24292f] dark:text-[#8b949e] dark:hover:text-[#c9d1d9] transition-transform hover:scale-110">
                <Github size={24} />
              </a>
              <a href={USER_INFO.linkedin} target="_blank" rel="noreferrer" className="text-[#57606a] hover:text-[#0a66c2] dark:text-[#8b949e] dark:hover:text-[#58a6ff] transition-transform hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${USER_INFO.email}`} className="text-[#57606a] hover:text-[#ea4335] dark:text-[#8b949e] dark:hover:text-[#ea4335] transition-transform hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Column: Tech Stack as Art */}
          <div className="flex-1 w-full max-w-[500px] relative perspective-1000">
             {/* Glow Effect */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-[80px]"></div>

             {/* Main Image Container */}
             <div className="relative z-10 mx-auto w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-white/20 dark:border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10"></div>
                <img 
                  src="https://picsum.photos/800/800?grayscale" 
                  alt="Zhang Yuxiang" 
                  className="w-full h-full object-cover"
                />
             </div>

             {/* Floating Tech Elements */}
             {/* Element 1: React / Frontend */}
             <div className="absolute -top-6 -left-4 md:-left-12 p-3 bg-white/80 dark:bg-[#161b22]/80 backdrop-blur-md border border-white/40 dark:border-[#30363d] rounded-xl shadow-lg flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-[#0969da] dark:text-[#58a6ff]">
                   <Atom size={24} />
                </div>
                <div>
                   <p className="text-xs font-bold text-[#57606a] dark:text-[#8b949e]">Modern UI</p>
                   <p className="text-sm font-bold text-[#24292f] dark:text-[#c9d1d9]">React & Next.js</p>
                </div>
             </div>

             {/* Element 2: AI / Brain */}
             <div className="absolute top-10 -right-8 md:-right-16 p-3 bg-white/80 dark:bg-[#161b22]/80 backdrop-blur-md border border-white/40 dark:border-[#30363d] rounded-xl shadow-lg flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                   <Brain size={24} />
                </div>
                <div>
                   <p className="text-xs font-bold text-[#57606a] dark:text-[#8b949e]">GenAI Core</p>
                   <p className="text-sm font-bold text-[#24292f] dark:text-[#c9d1d9]">LLM Integration</p>
                </div>
             </div>

             {/* Element 3: Backend / Architecture */}
             <div className="absolute -bottom-8 left-8 md:left-12 p-3 bg-white/80 dark:bg-[#161b22]/80 backdrop-blur-md border border-white/40 dark:border-[#30363d] rounded-xl shadow-lg flex items-center gap-3 animate-bounce" style={{ animationDuration: '5s', animationDelay: '0.5s' }}>
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400">
                   <Database size={24} />
                </div>
                <div>
                   <p className="text-xs font-bold text-[#57606a] dark:text-[#8b949e]">Robust Arch</p>
                   <p className="text-sm font-bold text-[#24292f] dark:text-[#c9d1d9]">Scalable Backend</p>
                </div>
             </div>
             
             {/* Element 4: Sparkle */}
             <div className="absolute -bottom-4 -right-2 text-yellow-400 dark:text-yellow-300 animate-pulse">
                <Sparkles size={48} />
             </div>

          </div>
        </div>
      </div>
    </section>
  );
};
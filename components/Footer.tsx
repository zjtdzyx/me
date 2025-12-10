import React from 'react';
import { USER_INFO } from '../constants';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#0d1117] border-t border-[#d0d7de] dark:border-[#30363d] py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left: Copyright */}
        <div className="text-center md:text-left">
           <h3 className="text-[#24292f] dark:text-[#c9d1d9] font-bold text-lg">{USER_INFO.name.split('(')[0]}</h3>
           <p className="text-[#57606a] dark:text-[#8b949e] text-sm mt-1">
             &copy; {new Date().getFullYear()} All rights reserved.
           </p>
        </div>

        {/* Center: Building in Public */}
        <a 
            href={USER_INFO.twitter} 
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center gap-3 px-5 py-2.5 bg-[#f6f8fa] dark:bg-[#161b22] border border-[#d0d7de] dark:border-[#30363d] rounded-full hover:border-[#0969da] dark:hover:border-[#58a6ff] transition-all"
        >
            <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm font-semibold text-[#57606a] dark:text-[#8b949e] group-hover:text-[#24292f] dark:group-hover:text-[#c9d1d9] transition-colors">
                Building in Public
            </span>
        </a>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-6">
           <a href={USER_INFO.github} target="_blank" rel="noreferrer" className="text-[#57606a] dark:text-[#8b949e] hover:text-[#24292f] dark:hover:text-white transition-colors">
              <Github size={20} />
           </a>
           <a href={USER_INFO.twitter} target="_blank" rel="noreferrer" className="text-[#57606a] dark:text-[#8b949e] hover:text-[#24292f] dark:hover:text-white transition-colors">
              <Twitter size={20} />
           </a>
           <a href={USER_INFO.linkedin} target="_blank" rel="noreferrer" className="text-[#57606a] dark:text-[#8b949e] hover:text-[#0a66c2] dark:hover:text-[#58a6ff] transition-colors">
              <Linkedin size={20} />
           </a>
           <a href={`mailto:${USER_INFO.email}`} className="text-[#57606a] dark:text-[#8b949e] hover:text-[#ea4335] dark:hover:text-[#ea4335] transition-colors">
              <Mail size={20} />
           </a>
        </div>
      </div>
    </footer>
  );
};
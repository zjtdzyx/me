import React, { useState } from 'react';
import { Menu, X, Code2, User, Briefcase, FileText, Cpu, Github, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: '关于我', href: '#about', icon: <User size={18} /> },
    { name: '技术栈', href: '#skills', icon: <Code2 size={18} /> },
    { name: '工作经历', href: '#experience', icon: <Briefcase size={18} /> },
    { name: '作品集', href: '#projects', icon: <Cpu size={18} /> },
    { name: '简历', href: '#resume', icon: <FileText size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#24292f] dark:bg-[#161b22] text-white border-b border-gray-200 dark:border-[#30363d] shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Github className="text-white" size={32} />
            <span className="font-bold text-xl tracking-tight">ZHANG.DEV</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-baseline space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
            </div>
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          
          <div className="-mr-2 flex md:hidden items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#24292f] dark:bg-[#161b22] border-b border-gray-700 dark:border-[#30363d]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
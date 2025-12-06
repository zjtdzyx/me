import React from 'react';
import { USER_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#0d1117] border-t border-[#d0d7de] dark:border-[#30363d] py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-[#24292f] dark:text-[#c9d1d9] font-semibold mb-2">
          &copy; {new Date().getFullYear()} {USER_INFO.name}. All rights reserved.
        </p>
        <p className="text-[#57606a] dark:text-[#8b949e] text-sm">
          Built with React, Tailwind CSS, and powered by Google Gemini.
        </p>
      </div>
    </footer>
  );
};
import React, { useState } from 'react';
import { Globe, Printer, FileText, QrCode, ShieldCheck, Download } from 'lucide-react';
import { USER_INFO, EXPERIENCE, SKILLS } from '../constants';

export const ResumeViewer: React.FC = () => {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [isOpen, setIsOpen] = useState(false);

  const handlePrint = () => {
    const printContent = document.getElementById('printable-resume');
    if (printContent) {
        const originalContent = document.body.innerHTML;
        document.body.innerHTML = printContent.innerHTML;
        window.print();
        document.body.innerHTML = originalContent;
        window.location.reload(); 
    }
  };

  if (!isOpen) {
    return (
      <section id="resume" className="py-32 bg-[#f6f8fa] dark:bg-[#0d1117] relative overflow-hidden flex flex-col items-center justify-center transition-colors duration-300">
        
        {/* Background Grid - Aetheria Vibe */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#f6f8fa] via-transparent to-transparent dark:from-[#0d1117] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-[#24292f] dark:text-[#c9d1d9] mb-12 tracking-tight">
              Ready to build the future together?
            </h2>

            {/* The Access Card */}
            <div
                onClick={() => setIsOpen(true)}
                className="group relative w-full max-w-md mx-auto perspective-1000 cursor-pointer"
            >
                {/* Glow Effect behind the card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff88] to-[#0969da] rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>

                <div className="relative bg-[#0d1117] border border-[#30363d] p-1 rounded-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:-rotate-1">
                    
                    {/* Inner Card Container */}
                    <div className="bg-[#161b22] rounded-xl overflow-hidden relative">
                         
                        {/* Scanning Line Animation */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-[#00ff88] shadow-[0_0_15px_#00ff88] opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_linear_infinite]"></div>

                        {/* Top Bar (HUD Style) */}
                        <div className="flex justify-between items-center px-6 py-4 border-b border-[#30363d] bg-[#0d1117]/50">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse shadow-[0_0_8px_#00ff88]"></div>
                                <span className="text-[10px] font-mono font-bold text-[#00ff88] tracking-[0.2em] uppercase">
                                    Access_Level: Recruiter
                                </span>
                            </div>
                            <QrCode size={20} className="text-[#30363d] group-hover:text-[#00ff88] transition-colors duration-300" />
                        </div>

                        {/* Main Body */}
                        <div className="p-8 flex items-center gap-6">
                            <div className="relative">
                                <div className="w-16 h-16 bg-[#21262d] rounded-lg flex items-center justify-center border border-[#30363d] group-hover:border-[#00ff88]/50 transition-colors">
                                    <ShieldCheck className="text-[#8b949e] group-hover:text-[#00ff88] transition-colors" size={32} />
                                </div>
                                {/* Corner Accents */}
                                <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-[#30363d] group-hover:border-[#00ff88] transition-colors"></div>
                                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-[#30363d] group-hover:border-[#00ff88] transition-colors"></div>
                            </div>
                            
                            <div className="text-left">
                                <h3 className="text-xl font-bold text-white font-mono mb-1 group-hover:text-[#00ff88] transition-colors">
                                    FULL_DOSSIER.PDF
                                </h3>
                                <div className="flex items-center gap-2 text-xs text-[#8b949e] font-mono">
                                    <span>SIZE: 2.4MB</span>
                                    <span className="text-[#30363d]">|</span>
                                    <span>ENCRYPTED</span>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Action Bar */}
                        <div className="bg-[#0d1117]/80 px-6 py-3 flex justify-between items-center border-t border-[#30363d]">
                            <div className="text-[10px] text-[#57606a] font-mono leading-tight">
                                ID: ZYX-2025-V2<br/>
                                LOC: SHANGHAI_NODE
                            </div>
                            <div className="flex items-center gap-2 text-[#00ff88] text-xs font-bold font-mono uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                                <Download size={14} />
                                Initialize
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <p className="mt-8 text-[#57606a] dark:text-[#8b949e] text-xs font-mono tracking-wide">
               * Tap card to decrypt holographic credentials
            </p>
        </div>

        <style>{`
          @keyframes scan {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
        `}</style>
      </section>
    );
  }

  return (
    <div className="fixed inset-0 z-[60] bg-[#0d1117]/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white text-[#24292f] w-full max-w-4xl min-h-[80vh] rounded-lg shadow-2xl flex flex-col max-h-[95vh] border border-[#d0d7de]">
        
        {/* Toolbar */}
        <div className="flex items-center justify-between p-4 border-b border-[#d0d7de] bg-[#f6f8fa] rounded-t-lg no-print">
          <div className="flex items-center gap-4">
            <h3 className="font-bold text-lg text-[#24292f]">简历预览</h3>
            <div className="flex bg-[#eaeef2] rounded p-1">
              <button 
                onClick={() => setLang('zh')}
                className={`px-3 py-1 text-xs font-bold rounded ${lang === 'zh' ? 'bg-white shadow-sm text-black' : 'text-[#57606a] hover:text-[#24292f]'}`}
              >
                中文
              </button>
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1 text-xs font-bold rounded ${lang === 'en' ? 'bg-white shadow-sm text-black' : 'text-[#57606a] hover:text-[#24292f]'}`}
              >
                English
              </button>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={handlePrint} className="p-2 text-[#57606a] hover:text-[#0969da] hover:bg-blue-50 rounded transition-colors" title="Print / Save as PDF">
              <Printer size={20} />
            </button>
            <button onClick={() => setIsOpen(false)} className="px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded transition-colors">
              Close
            </button>
          </div>
        </div>

        {/* Resume Document Content - Always kept Light for readablity */}
        <div id="printable-resume" className="flex-1 overflow-y-auto p-8 md:p-12 bg-white text-[#24292f]">
          {/* Header */}
          <div className="border-b-2 border-[#24292f] pb-6 mb-8 flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-extrabold text-[#24292f] mb-2">{lang === 'zh' ? USER_INFO.name.split('(')[0] : 'Yuxiang Zhang'}</h1>
              <p className="text-xl text-[#57606a] font-medium">{lang === 'zh' ? USER_INFO.title : 'Senior Software Engineer'}</p>
            </div>
            <div className="text-right text-sm text-[#57606a] leading-relaxed font-mono">
              <p>{USER_INFO.email}</p>
              <p>{USER_INFO.github}</p>
              <p>{USER_INFO.location}</p>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-8">
            <h2 className="text-lg font-bold uppercase tracking-wider text-[#24292f] border-b border-[#d0d7de] pb-1 mb-4">
              {lang === 'zh' ? '个人简介' : 'Professional Summary'}
            </h2>
            <p className="text-[#24292f] leading-relaxed">
              {lang === 'zh' ? USER_INFO.about : USER_INFO.resumeEn.summary}
            </p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h2 className="text-lg font-bold uppercase tracking-wider text-[#24292f] border-b border-[#d0d7de] pb-1 mb-4">
              {lang === 'zh' ? '技术技能' : 'Technical Skills'}
            </h2>
            <div className="grid grid-cols-2 gap-y-3 gap-x-8 text-sm">
                {SKILLS.map(skill => (
                    <div key={skill.name} className="flex items-center justify-between">
                        <span className="font-semibold text-[#24292f]">{skill.name}</span>
                        <div className="w-32 bg-[#eaeef2] h-2 rounded-full overflow-hidden print:border print:border-[#d0d7de]">
                             <div className="bg-[#24292f] h-full print:bg-black" style={{ width: `${skill.level}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h2 className="text-lg font-bold uppercase tracking-wider text-[#24292f] border-b border-[#d0d7de] pb-1 mb-4">
              {lang === 'zh' ? '工作经历' : 'Work Experience'}
            </h2>
            <div className="space-y-8">
                {EXPERIENCE.map(exp => (
                    <div key={exp.id}>
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold text-[#24292f] text-lg">{exp.role}</h3>
                            <span className="text-sm font-semibold text-[#57606a]">{exp.period}</span>
                        </div>
                        <p className="text-[#0969da] font-bold text-sm mb-2">{exp.company}</p>
                        <ul className="list-disc list-inside text-[#24292f] space-y-1 text-sm">
                            {exp.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
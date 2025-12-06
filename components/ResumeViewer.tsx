import React, { useState } from 'react';
import { Globe, Printer, FileText } from 'lucide-react';
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
      <section id="resume" className="py-20 bg-white dark:bg-[#0d1117] border-t border-[#d0d7de] dark:border-[#30363d] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#24292f] dark:text-[#c9d1d9] mb-8">我的简历</h2>
            <div className="bg-[#f6f8fa] dark:bg-[#161b22] p-10 rounded-xl border border-[#d0d7de] dark:border-[#30363d] border-dashed flex flex-col items-center group hover:border-[#0969da] dark:hover:border-[#58a6ff] transition-colors">
                <FileText size={64} className="text-[#8b949e] mb-4 group-hover:text-[#0969da] dark:group-hover:text-[#58a6ff] transition-colors" />
                <p className="text-[#57606a] dark:text-[#8b949e] mb-6 font-medium">查看详细的 PDF 版简历，支持中英文切换与下载。</p>
                <button 
                    onClick={() => setIsOpen(true)}
                    className="px-6 py-3 bg-[#24292f] dark:bg-[#21262d] hover:bg-[#0969da] dark:hover:bg-[#30363d] text-white dark:text-[#c9d1d9] border border-transparent dark:border-[#30363d] rounded-md font-semibold transition-colors flex items-center gap-2 shadow-sm"
                >
                    预览简历 <Globe size={18} />
                </button>
            </div>
        </div>
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
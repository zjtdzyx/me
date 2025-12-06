import React from 'react';
import { SKILLS } from '../constants';
import { Code, Server, Brain, Wrench } from 'lucide-react';

const SkillBar: React.FC<{ name: string; level: number }> = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-semibold text-[#24292f] dark:text-[#c9d1d9]">{name}</span>
      <span className="text-xs font-mono text-[#57606a] dark:text-[#8b949e]">{level}%</span>
    </div>
    <div className="w-full bg-[#eaeef2] dark:bg-[#30363d] rounded-full h-2">
      <div 
        className="bg-[#0969da] dark:bg-[#1f6feb] h-2 rounded-full transition-all duration-1000 ease-out shadow-sm" 
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

export const Skills: React.FC = () => {
  const categories = [
    { id: 'frontend', title: 'Frontend Development', icon: <Code className="text-[#24292f] dark:text-[#c9d1d9]" /> },
    { id: 'backend', title: 'Backend Development', icon: <Server className="text-[#24292f] dark:text-[#c9d1d9]" /> },
    { id: 'ai', title: 'AI & LLM Application', icon: <Brain className="text-purple-600 dark:text-purple-400" /> },
    { id: 'tools', title: 'DevOps & Tools', icon: <Wrench className="text-orange-600 dark:text-orange-400" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-[#f6f8fa] dark:bg-[#0d1117] border-t border-[#d0d7de] dark:border-[#30363d] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#24292f] dark:text-[#c9d1d9] mb-4">技术能力栈</h2>
          <p className="text-[#57606a] dark:text-[#8b949e] max-w-2xl mx-auto">
            从构建响应式前端界面到设计可扩展的后端架构，再到集成前沿的AI模型，我不断拓展自己的技术边界。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-white dark:bg-[#161b22] p-6 rounded-lg border border-[#d0d7de] dark:border-[#30363d] shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#d0d7de] dark:border-[#30363d]">
                <div className="p-2 bg-[#f6f8fa] dark:bg-[#21262d] rounded-md border border-[#d0d7de] dark:border-[#30363d]">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-[#24292f] dark:text-[#c9d1d9]">{cat.title}</h3>
              </div>
              
              <div>
                {SKILLS.filter(s => s.category === cat.id).map(skill => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
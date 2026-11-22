import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Layout, 
  Brain, 
  Sparkles, 
  Database, 
  Wrench, 
  CheckCircle2, 
  LineChart,
  ShieldCheck
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const TechnicalExpertise: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'genai', label: 'Generative AI & LLMs' },
    { id: 'backend', label: 'Python & Backend' },
    { id: 'aiml', label: 'AI & Machine Learning' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'datascience', label: 'Data Science' },
    { id: 'tools', label: 'Databases & Tools' },
  ];

  const displayedCategories = SKILL_CATEGORIES.filter((category) => {
    if (activeCategory === 'all') return true;
    return category.categoryKey === activeCategory;
  });

  return (
    <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-white/5 bg-dark-950/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/40 text-xs font-mono text-indigo-300">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>VERIFIED RESUME COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Strictly verified proficiencies grounded in Python development, RAG systems, and full-stack software delivery.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                  : 'bg-dark-900 text-slate-400 border border-white/10 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.categoryKey}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    {category.title}
                  </h3>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800/30">
                    {category.skills.length} skills
                  </span>
                </div>

                <div className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-xl bg-dark-950/80 border border-white/5 hover:border-cyan-500/20 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-[9px] font-mono text-cyan-300 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Resume-Verified</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Hands-on Project Applied
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

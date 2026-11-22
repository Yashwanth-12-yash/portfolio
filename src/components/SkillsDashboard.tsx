import React, { useState } from 'react';
import { 
  Code, 
  Server, 
  Layout, 
  Brain, 
  Sparkles, 
  Database, 
  Wrench, 
  LineChart,
  Check,
  Search
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsDashboard: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { id: 'all', label: 'All Technologies', icon: <Code className="w-3.5 h-3.5" /> },
    { id: 'genai', label: 'Generative AI & LLMs', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'aiml', label: 'AI, ML & Deep Learning', icon: <Brain className="w-3.5 h-3.5" /> },
    { id: 'backend', label: 'Python & Backend', icon: <Server className="w-3.5 h-3.5" /> },
    { id: 'frontend', label: 'Frontend', icon: <Layout className="w-3.5 h-3.5" /> },
    { id: 'datascience', label: 'Data Science', icon: <LineChart className="w-3.5 h-3.5" /> },
    { id: 'tools', label: 'Tools & IDEs', icon: <Wrench className="w-3.5 h-3.5" /> },
  ];

  const displayedCategories = SKILL_CATEGORIES.filter((category) => {
    if (activeCategory !== 'all' && category.categoryKey !== activeCategory) {
      return false;
    }
    return true;
  }).map((cat) => {
    if (!searchQuery.trim()) return cat;
    const query = searchQuery.toLowerCase();
    const filteredSkills = cat.skills.filter(
      (s) => s.name.toLowerCase().includes(query) || s.description.toLowerCase().includes(query)
    );
    return { ...cat, skills: filteredSkills };
  }).filter((cat) => cat.skills.length > 0);

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'advanced':
        return 'bg-cyan-950/80 text-cyan-300 border-cyan-700/50';
      case 'proficient':
        return 'bg-indigo-950/80 text-indigo-300 border-indigo-700/50';
      default:
        return 'bg-slate-800/80 text-slate-300 border-slate-700/50';
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-white/5 bg-dark-950/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/40 text-xs font-mono text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills <span className="text-gradient">Dashboard</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Every listed skill is verified directly from my resume and grounded in hands-on application development.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-dark-900/80 border border-white/10 max-w-full overflow-x-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. FAISS, FastAPI)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-dark-900/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-all"
            />
          </div>

        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.categoryKey}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span>{category.title}</span>
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                    {category.skills.length} skills
                  </span>
                </div>
                
                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-xl bg-dark-950/70 border border-white/5 hover:border-cyan-500/20 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-snug">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Badge */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 text-slate-400">
                  <Check className="w-3 h-3 text-cyan-400" />
                  Production Ready
                </span>
                <span className="font-mono text-[10px] text-indigo-400">Palle Tech / Academic</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-4 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-dark-900 to-violet-950/30 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3 text-slate-300 text-center sm:text-left">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <Code className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-white">Full-Stack AI Integration Capability:</span>
              <span className="text-slate-400 ml-1">From designing database schemas in MySQL to vector similarity in FAISS and responsive UI in React.js.</span>
            </div>
          </div>
          <a
            href="#projects"
            className="shrink-0 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium transition-colors"
          >
            See Skills in Action &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};

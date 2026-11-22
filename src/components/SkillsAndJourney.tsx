import React, { useState } from 'react';
import { 
  Sparkles, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  GitBranch, 
  CheckCircle2, 
  Search, 
  ExternalLink, 
  Calendar, 
  MapPin, 
  Award,
  Layers,
  Cpu,
  Server
} from 'lucide-react';
import { SKILL_CATEGORIES, EXPERIENCE_EDUCATION, GITHUB_DATA } from '../data/portfolioData';

export const SkillsAndJourney: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'journey' | 'github'>('skills');
  const [skillCategory, setSkillCategory] = useState<string>('all');
  const [githubSearch, setGithubSearch] = useState<string>('');

  const displayedSkillCats = SKILL_CATEGORIES.filter(
    (c) => skillCategory === 'all' || c.categoryKey === skillCategory
  );

  const filteredRepos = GITHUB_DATA.allRepos.filter((r) => {
    if (!githubSearch.trim()) return true;
    const q = githubSearch.toLowerCase();
    return r.name.toLowerCase().includes(q) || r.description?.toLowerCase().includes(q);
  });

  return (
    <section id="skills-journey" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-white/5 bg-dark-950/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/40 text-xs font-mono text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>CREDENTIALS & EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills, Experience & <span className="text-gradient">Activity</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Everything verified directly from Yashwanth's resume and active GitHub repositories.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-dark-900 border border-white/10 shadow-lg">
            <button
              onClick={() => setActiveTab('skills')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'skills'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Skills</span>
            </button>

            <button
              onClick={() => setActiveTab('journey')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'journey'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Experience & Education</span>
            </button>

            <button
              onClick={() => setActiveTab('github')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'github'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>GitHub Repos ({GITHUB_DATA.allRepos.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Technical Skills */}
        {activeTab === 'skills' && (
          <div className="space-y-6">
            {/* Category filter pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5">
              <button
                onClick={() => setSkillCategory('all')}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  skillCategory === 'all' ? 'bg-cyan-500 text-dark-950 font-bold' : 'bg-dark-900 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                All Domains
              </button>
              {SKILL_CATEGORIES.map((c) => (
                <button
                  key={c.categoryKey}
                  onClick={() => setSkillCategory(c.categoryKey)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    skillCategory === c.categoryKey ? 'bg-cyan-500 text-dark-950 font-bold' : 'bg-dark-900 text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  {c.title}
                </button>
              ))}
            </div>

            {/* Compact Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayedSkillCats.map((cat) => (
                <div key={cat.categoryKey} className="glass-card rounded-2xl p-5 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">{cat.title}</h3>
                    <span className="text-[10px] font-mono text-cyan-400">{cat.skills.length} skills</span>
                  </div>

                  <div className="space-y-2">
                    {cat.skills.map((s, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-dark-950/70 border border-white/5 flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-200">{s.name}</span>
                        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/30">
                          {s.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: Experience & Education Timeline */}
        {activeTab === 'journey' && (
          <div className="max-w-3xl mx-auto space-y-4">
            {EXPERIENCE_EDUCATION.map((item) => (
              <div key={item.id} className="glass-card rounded-2xl p-6 border border-white/10 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {item.type === 'education' ? (
                      <GraduationCap className="w-5 h-5 text-cyan-400" />
                    ) : (
                      <Briefcase className="w-5 h-5 text-indigo-400" />
                    )}
                    <div>
                      <h3 className="text-sm font-bold text-white">{item.role}</h3>
                      <div className="text-xs text-slate-400">{item.organization} • {item.location}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.cgpaOrScore && (
                      <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800/40">
                        {item.cgpaOrScore}
                      </span>
                    )}
                    <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                      {item.duration}
                    </span>
                  </div>
                </div>

                <div className="space-y-1 pt-1 text-xs text-slate-300">
                  {item.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.technologies.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-950 border border-white/5 text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: GitHub Repositories */}
        {activeTab === 'github' && (
          <div className="space-y-4">
            {/* Quick search and stats */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="text-white font-semibold">Language Breakdown:</span>
                <span className="text-cyan-400">Python 64%</span> • <span className="text-indigo-400">TypeScript 22%</span> • <span className="text-amber-400">Jupyter 9%</span>
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter repositories..."
                  value={githubSearch}
                  onChange={(e) => setGithubSearch(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-dark-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            {/* Repositories 2-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {filteredRepos.map((r, idx) => (
                <div key={idx} className="glass-card rounded-xl p-4 border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col justify-between gap-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-white hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                      >
                        <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{r.name}</span>
                        <ExternalLink className="w-3 h-3 text-slate-500" />
                      </a>
                      <span className="text-[9px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded">
                        {r.category}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-2">
                      {r.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-white/5">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: r.languageColor }} />
                      <span>{r.language}</span>
                    </span>
                    <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                      GitHub Source &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

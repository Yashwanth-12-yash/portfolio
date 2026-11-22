import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Code2, 
  GitBranch, 
  Flame, 
  CheckCircle2, 
  Search,
  FolderGit2
} from 'lucide-react';
import { GITHUB_DATA } from '../data/portfolioData';

export const GitHubSection: React.FC = () => {
  const [repoFilter, setRepoFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterOptions = [
    { id: 'all', label: `All Repositories (${GITHUB_DATA.allRepos.length})` },
    { id: 'Generative AI', label: 'GenAI & RAG' },
    { id: 'Full-Stack & AI', label: 'Full-Stack & Systems' },
    { id: 'Web & E-Commerce', label: 'E-Commerce' },
    { id: 'Machine Learning', label: 'Machine Learning' },
    { id: 'Computer Vision & Tools', label: 'CV & Tools' },
  ];

  const filteredRepos = GITHUB_DATA.allRepos.filter((repo) => {
    if (repoFilter !== 'all' && repo.category !== repoFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = repo.name.toLowerCase().includes(q);
      const matchDesc = repo.description?.toLowerCase().includes(q) || false;
      const matchTopic = repo.topics.some(t => t.toLowerCase().includes(q));
      return matchName || matchDesc || matchTopic;
    }
    return true;
  });

  return (
    <section id="github" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5 bg-dark-950/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-white/10 text-xs font-mono text-slate-300">
            <Github className="w-3.5 h-3.5 text-white" />
            <span>OPEN SOURCE & CODE REPOSITORIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            GitHub <span className="text-gradient">Activity & Codebase</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Direct access to all my repositories, production architectures, and open-source software engineering code.
          </p>
        </div>

        {/* GitHub Profile Card & Repositories */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Profile Summary & Language Breakdown */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* User Profile Card */}
            <div className="glass-card rounded-2xl p-6 space-y-5 border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-violet-600 p-[1px] shadow-lg shadow-cyan-500/20">
                  <div className="w-full h-full bg-dark-950 rounded-2xl flex items-center justify-center">
                    <Github className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {GITHUB_DATA.username}
                  </h3>
                  <a
                    href={GITHUB_DATA.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <span>github.com/{GITHUB_DATA.username}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {GITHUB_DATA.bio}
              </p>

              {/* Direct GitHub Profile Button */}
              <a
                href={GITHUB_DATA.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Visit GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* Language Breakdown */}
            <div className="glass-card rounded-2xl p-6 space-y-4 border-white/10">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>Primary Language Distribution</span>
              </h4>

              {/* Multi-segment Progress Bar */}
              <div className="w-full h-3 rounded-full bg-dark-950 flex overflow-hidden p-0.5 border border-white/10">
                {GITHUB_DATA.languages.map((lang, idx) => (
                  <div
                    key={idx}
                    style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                    className="h-full first:rounded-l-full last:rounded-r-full transition-all"
                    title={`${lang.name}: ${lang.percent}%`}
                  />
                ))}
              </div>

              {/* Legend */}
              <div className="space-y-2 pt-2">
                {GITHUB_DATA.languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                      <span className="text-slate-300 font-medium">{lang.name}</span>
                    </div>
                    <span className="font-mono text-slate-400">{lang.percent}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Standard Note */}
            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/30 text-xs text-slate-300 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Repositories adhere to clean code principles, modular package structures, and detailed documentation.</span>
            </div>

          </div>

          {/* Right Column: Repository Cards with search & filters */}
          <div className="lg:col-span-8 space-y-5">
            
            {/* Filter and Search Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
                {filterOptions.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setRepoFilter(f.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      repoFilter === f.id
                        ? 'bg-cyan-500 text-dark-950 font-bold shadow-md shadow-cyan-500/20'
                        : 'bg-dark-900/80 text-slate-400 border border-white/10 hover:text-white'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-56">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter repos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-dark-900/90 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
                />
              </div>
            </div>

            {/* Repo Cards Grid */}
            <div className="space-y-4">
              {filteredRepos.map((repo, idx) => (
                <div
                  key={idx}
                  className="glass-card-interactive rounded-2xl p-6 space-y-4 border border-white/10 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <GitBranch className="w-4 h-4 text-cyan-400" />
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                      >
                        <span>{repo.name}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-300" />
                      </a>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/40">
                        {repo.category}
                      </span>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-dark-950 border border-white/10 text-slate-400 w-fit">
                        Public
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {repo.description}
                  </p>

                  {/* Repository Topics */}
                  {repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {repo.topics.map((topic) => (
                        <span
                          key={topic}
                          className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/5"
                        >
                          #{topic}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Repo Metadata & Direct Link */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.languageColor }} />
                      <span className="text-slate-300 font-mono text-[11px]">{repo.language}</span>
                    </div>

                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
                    >
                      <FolderGit2 className="w-3.5 h-3.5" />
                      <span>Inspect Code on GitHub</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}

              {filteredRepos.length === 0 && (
                <div className="p-8 text-center glass-card rounded-2xl text-slate-400 text-xs">
                  No repositories match your filter query.
                </div>
              )}
            </div>

            {/* Contribution Banner */}
            <div className="p-4 rounded-2xl bg-dark-900/80 border border-white/10 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>Actively developing AI pipelines, testing RAG optimizations, and writing modular Python.</span>
              </div>
              <a
                href={GITHUB_DATA.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-medium shrink-0 ml-2"
              >
                Follow on GitHub &rarr;
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  Server, 
  Database, 
  ArrowRight, 
  Play, 
  Bot,
  HelpCircle,
  FileCode,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { RagSimulatorModal } from './RagSimulatorModal';
import { ProjectExplainerModal } from './ProjectExplainerModal';

export const FeaturedProjects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [showAll, setShowAll] = useState(false);
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [selectedExplainerProject, setSelectedExplainerProject] = useState<Project | null>(null);

  const filterOptions = [
    { id: 'all', label: `All Case Studies (${PROJECTS.length})` },
    { id: 'Generative AI', label: 'Generative AI & RAG' },
    { id: 'Full-Stack & AI', label: 'Full-Stack & Systems' },
    { id: 'Machine Learning', label: 'Machine Learning' },
    { id: 'Web & E-Commerce', label: 'E-Commerce' },
  ];

  const filtered = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  const displayedProjects = (activeFilter === 'all' && !showAll)
    ? filtered.slice(0, 4)
    : filtered;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>ENGINEERING CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">AI & Full-Stack</span> Projects
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Case studies representing production architectures, hybrid retrieval, and full-stack software delivery.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => {
                setActiveFilter(opt.id);
                setShowAll(true);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeFilter === opt.id
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                  : 'bg-dark-900 text-slate-400 border border-white/10 hover:text-white'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedProjects.map((project: Project) => {
            const isRAG = project.id === 'enterprise-rag-chatbot';

            return (
              <div
                key={project.id}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between gap-5 relative group"
              >
                <div className="space-y-4">
                  
                  {/* Card Header: Badges & Title */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-800/40">
                        {project.category}
                      </span>
                      {project.highlightBadge && (
                        <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/90 px-2 py-0.5 rounded border border-cyan-800/40 flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
                          {project.highlightBadge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-cyan-400 font-medium font-mono">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Problem & Solution Case Study Blocks */}
                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-xl bg-dark-950/80 border border-white/5 space-y-1">
                      <span className="text-[10px] font-mono text-rose-400 uppercase font-bold block">
                        Problem Statement:
                      </span>
                      <p className="text-slate-300 leading-relaxed line-clamp-2">
                        {project.problemStatement}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/30 space-y-1">
                      <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block">
                        Engineering Solution:
                      </span>
                      <p className="text-slate-300 leading-relaxed line-clamp-2">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-1.5 pt-1 text-xs text-slate-300">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">
                      Key Highlights:
                    </span>
                    {project.keyFeatures.slice(0, 3).map((f, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-dark-950 border border-white/5 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Card Bottom Actions */}
                <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs">
                  
                  <div className="flex items-center gap-2">
                    {/* AI Architecture Explainer Button */}
                    <button
                      onClick={() => setSelectedExplainerProject(project)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-dark-950 hover:bg-dark-800 text-slate-200 border border-white/10 hover:border-cyan-500/30 transition-colors"
                      title="Explore Technical Implementation Details"
                    >
                      <Bot className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Explain Architecture</span>
                    </button>

                    {isRAG && (
                      <button
                        onClick={() => setIsSimulatorOpen(true)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/40 transition-colors"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Simulate RAG</span>
                      </button>
                    )}
                  </div>

                  {/* GitHub Repo Button */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
                  >
                    <FolderGit2 className="w-3.5 h-3.5 text-slate-300" />
                    <span>GitHub Code</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>

                </div>

              </div>
            );
          })}
        </div>

        {/* View All Toggle */}
        {activeFilter === 'all' && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-dark-900 hover:bg-dark-800 text-slate-300 border border-white/10 hover:border-cyan-500/40 transition-all"
            >
              <span>{showAll ? "Show Top 4 Case Studies" : `View All ${PROJECTS.length} Engineered Projects`}</span>
              {showAll ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        )}

      </div>

      {/* RAG Pipeline Simulator Modal */}
      <RagSimulatorModal
        isOpen={isSimulatorOpen}
        onClose={() => setIsSimulatorOpen(false)}
      />

      {/* AI Project Explainer Modal */}
      <ProjectExplainerModal
        project={selectedExplainerProject}
        isOpen={!!selectedExplainerProject}
        onClose={() => setSelectedExplainerProject(null)}
      />
    </section>
  );
};

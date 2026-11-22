import React, { useState } from 'react';
import { 
  X, 
  Bot, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ExternalLink, 
  FolderGit2, 
  Cpu, 
  Server,
  ArrowRight
} from 'lucide-react';
import { Project } from '../types';

interface ProjectExplainerModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectExplainerModal: React.FC<ProjectExplainerModalProps> = ({
  project,
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'decisions' | 'qa'>('architecture');

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-dark-900 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                  AI Engineering Case Study Explainer
                </span>
                <span className="text-xs font-mono text-slate-400">Yashwanth K</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                {project.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 border-b border-white/5 pb-2 text-xs">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeTab === 'architecture'
                ? 'bg-cyan-500 text-dark-950'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            System Architecture
          </button>
          <button
            onClick={() => setActiveTab('decisions')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeTab === 'decisions'
                ? 'bg-cyan-500 text-dark-950'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Engineering Decisions & Rationale
          </button>
          <button
            onClick={() => setActiveTab('qa')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeTab === 'qa'
                ? 'bg-cyan-500 text-dark-950'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Key Capabilities
          </button>
        </div>

        {/* Tab 1: Architecture Breakdown */}
        {activeTab === 'architecture' && (
          <div className="space-y-4 text-xs leading-relaxed">
            <div className="p-3.5 rounded-xl bg-dark-950 border border-white/10 font-mono text-cyan-300">
              <span className="text-slate-400 block text-[10px] uppercase mb-1">Pipeline Blueprint:</span>
              {project.architectureOverview}
            </div>

            {project.architectureSteps && (
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider block">
                  Step-by-Step Data Flow:
                </span>
                {project.architectureSteps.map((step, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-dark-950/80 border border-white/5 space-y-1">
                    <div className="flex items-center justify-between text-slate-200">
                      <span className="font-semibold text-white">{step.step}</span>
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/30">
                        {step.tech}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400">{step.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Engineering Decisions */}
        {activeTab === 'decisions' && (
          <div className="space-y-4 text-xs leading-relaxed text-slate-300">
            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 space-y-2">
              <span className="font-bold text-white text-xs block">Why this architecture was built:</span>
              <p className="text-slate-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-dark-950/80 border border-white/5 space-y-2">
              <span className="font-bold text-white text-xs block">Technical Solution & Innovation:</span>
              <p className="text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-dark-950 border border-white/5 text-[11px] text-slate-400">
              <strong className="text-white">Technologies:</strong> {project.technologies.join(', ')}
            </div>
          </div>
        )}

        {/* Tab 3: Key Features */}
        {activeTab === 'qa' && (
          <div className="space-y-3 text-xs text-slate-300">
            <span className="font-bold text-white text-xs block">Implemented Capabilities:</span>
            <div className="space-y-2">
              {project.keyFeatures.map((f, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-dark-950/80 border border-white/5 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal Footer with Direct Source Link */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] font-mono text-slate-400">
            Source Code on GitHub
          </span>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-all"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Open Repository</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

      </div>
    </div>
  );
};

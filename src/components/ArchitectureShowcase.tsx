import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  Database, 
  ArrowRight, 
  Code, 
  Sparkles, 
  Search, 
  CheckCircle2, 
  ShieldAlert, 
  Zap, 
  Bot,
  Layout,
  Server
} from 'lucide-react';
import { ARCHITECTURE_PIPELINE } from '../data/portfolioData';

export const ArchitectureShowcase: React.FC = () => {
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(0);

  const activeNode = ARCHITECTURE_PIPELINE[selectedNodeIndex];

  const nodeIcons = [
    <Layout className="w-4 h-4" />,
    <Server className="w-4 h-4" />,
    <Layers className="w-4 h-4" />,
    <Database className="w-4 h-4" />,
    <Search className="w-4 h-4" />,
    <Bot className="w-4 h-4" />
  ];

  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5 bg-dark-950/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/70 border border-violet-800/40 text-xs font-mono text-violet-300">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>PRODUCTION ENGINEERING BLUEPRINT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How I Build <span className="text-gradient">AI Systems</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A comprehensive, interactive deep dive into my production-grade RAG and LLM architecture—from 
            asynchronous document ingestion to hybrid vector retrieval and grounded generation.
          </p>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className="mb-12">
          <div className="p-6 rounded-3xl glass-card border border-white/10 relative overflow-hidden">
            
            <div className="text-xs font-mono text-slate-400 mb-4 flex items-center justify-between">
              <span>INTERACTIVE PIPELINE GRAPH (CLICK ANY STAGE TO INSPECT CODE & SPEC)</span>
              <span className="text-cyan-400">Step {selectedNodeIndex + 1} of {ARCHITECTURE_PIPELINE.length}</span>
            </div>

            {/* Pipeline Stage Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {ARCHITECTURE_PIPELINE.map((node, idx) => {
                const isSelected = selectedNodeIndex === idx;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeIndex(idx)}
                    className={`relative p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between gap-3 ${
                      isSelected
                        ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-500/50'
                        : 'bg-dark-950/80 border-white/10 text-slate-400 hover:text-white hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className={`p-2 rounded-xl ${isSelected ? 'bg-cyan-500 text-dark-950' : 'bg-white/5 text-slate-300'}`}>
                        {nodeIcons[idx] || <Cpu className="w-4 h-4" />}
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-400">0{idx + 1}</span>
                    </div>

                    <div>
                      <div className="text-xs font-bold leading-snug line-clamp-1">{node.title.replace(/^\d+\.\s*/, '')}</div>
                      <div className="text-[10px] font-mono text-cyan-400 truncate">{node.subtitle}</div>
                    </div>

                    {/* Active Indicator Arrow */}
                    {isSelected && (
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-cyan-400 rounded-b-full shadow-sm shadow-cyan-400" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Visual Arrow Strip on Desktop */}
            <div className="hidden lg:flex items-center justify-between px-8 pt-6 pb-2 text-slate-600 font-mono text-xs">
              <span>Frontend Query</span>
              <ArrowRight className="w-4 h-4 text-cyan-500/50 animate-pulse" />
              <span>FastAPI Gateway</span>
              <ArrowRight className="w-4 h-4 text-cyan-500/50 animate-pulse" />
              <span>Text Chunking</span>
              <ArrowRight className="w-4 h-4 text-cyan-500/50 animate-pulse" />
              <span>FAISS + BM25</span>
              <ArrowRight className="w-4 h-4 text-cyan-500/50 animate-pulse" />
              <span>Hybrid Fusion</span>
              <ArrowRight className="w-4 h-4 text-cyan-500/50 animate-pulse" />
              <span>Gemini LLM Output</span>
            </div>

          </div>
        </div>

        {/* Detailed Node Inspector: Rationale, Implementation & Code Snippet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Stage Deep Dive */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Stage Deep Dive
              </div>
              <h3 className="text-2xl font-bold text-white">
                {activeNode.title}
              </h3>
              <p className="text-sm font-semibold text-violet-300 font-mono">
                Component: {activeNode.subtitle}
              </p>
            </div>

            {/* Stage Architectural Details */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Key Engineering Responsibilities:
              </div>
              <div className="space-y-2.5">
                {activeNode.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why This Matters for Production */}
            <div className="p-4 rounded-xl bg-dark-950/80 border border-white/5 space-y-1.5 text-xs">
              <span className="font-bold text-white flex items-center gap-1.5 text-cyan-300">
                <Sparkles className="w-3.5 h-3.5" />
                Production Rationale
              </span>
              <p className="text-slate-400 leading-relaxed">
                By decoupling the vector search from LLM generation and employing hybrid ranking, 
                the architecture prevents hallucinations, supports strict domain jargon, and keeps 
                token costs under tight control.
              </p>
            </div>

            {/* Navigation buttons to previous/next step */}
            <div className="flex items-center justify-between pt-2">
              <button
                disabled={selectedNodeIndex === 0}
                onClick={() => setSelectedNodeIndex(Math.max(0, selectedNodeIndex - 1))}
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-slate-300 transition-colors"
              >
                &larr; Previous Stage
              </button>
              <button
                disabled={selectedNodeIndex === ARCHITECTURE_PIPELINE.length - 1}
                onClick={() => setSelectedNodeIndex(Math.min(ARCHITECTURE_PIPELINE.length - 1, selectedNodeIndex + 1))}
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                Next Stage &rarr;
              </button>
            </div>

          </div>

          {/* Right Column: Code Snippet & Implementation */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-semibold text-white">
                  Implementation Code ({activeNode.subtitle.includes('React') ? 'TypeScript / React' : 'Python 3.11'})
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                Grounded Implementation
              </span>
            </div>

            {/* Code Block */}
            <div className="p-4 rounded-xl bg-slate-950/95 border border-white/10 font-mono text-xs text-slate-200 overflow-x-auto">
              <pre className="leading-relaxed">
                <code>{activeNode.codeSnippet}</code>
              </pre>
            </div>

            {/* Defensive Architecture Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-dark-950/60 border border-white/5">
                <span className="font-semibold text-white block mb-1">Latency Optimization:</span>
                <span className="text-slate-400 text-[11px]">Async FastAPI coroutines process document chunking and vector indexing concurrently.</span>
              </div>
              <div className="p-3 rounded-xl bg-dark-950/60 border border-white/5">
                <span className="font-semibold text-white block mb-1">Fault Isolation:</span>
                <span className="text-slate-400 text-[11px]">Fallback to BM25 sparse search ensures continuity even if dense embeddings encounter rate limits.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

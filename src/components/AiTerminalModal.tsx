import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, Minimize2, Maximize2, Sparkles, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';

interface AiTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const AiTerminalModal: React.FC<AiTerminalModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'init',
      output: (
        <div className="space-y-1 text-slate-300">
          <div className="text-cyan-400 font-bold">Yashwanth K // AI Engineer Interactive Terminal v2.6</div>
          <div className="text-slate-400 text-[11px]">Type <span className="text-white font-bold">help</span> to view available terminal commands.</div>
        </div>
      )
    }
  ]);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-slate-300 text-[11px]">
            <div>Available commands:</div>
            <div>• <span className="text-cyan-400 font-bold">skills</span> - List verified AI & full-stack proficiencies</div>
            <div>• <span className="text-cyan-400 font-bold">projects</span> - View all 11 engineered repositories</div>
            <div>• <span className="text-cyan-400 font-bold">rag</span> - Simulate hybrid RAG retrieval pipeline</div>
            <div>• <span className="text-cyan-400 font-bold">bio</span> - Read candidate background & 8.1 CGPA standing</div>
            <div>• <span className="text-cyan-400 font-bold">contact</span> - Show direct email, phone & LinkedIn</div>
            <div>• <span className="text-cyan-400 font-bold">resume</span> - Download official resume PDF</div>
            <div>• <span className="text-cyan-400 font-bold">clear</span> - Clear terminal session history</div>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-[11px] text-slate-300">
            <div className="text-cyan-400 font-bold">VERIFIED TECHNICAL SKILLS:</div>
            {SKILL_CATEGORIES.map(c => (
              <div key={c.categoryKey}>
                <span className="text-violet-400 font-semibold">{c.title}: </span>
                <span className="text-slate-400">{c.skills.map(s => s.name).join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-1 text-[11px] text-slate-300">
            <div className="text-cyan-400 font-bold">ENGINEERED PROJECTS ({PROJECTS.length}):</div>
            {PROJECTS.map(p => (
              <div key={p.id} className="flex items-center justify-between">
                <span className="text-white font-medium">{p.title}</span>
                <span className="text-cyan-400 font-mono text-[10px]">{p.category}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'rag':
        output = (
          <div className="space-y-1 text-[11px] text-slate-300 bg-cyan-950/40 p-2.5 rounded-lg border border-cyan-800/40">
            <div className="text-cyan-300 font-bold">RAG HYBRID RETRIEVAL SIMULATION:</div>
            <div>1. Ingest: PDF parsed via LangChain RecursiveCharacterTextSplitter (500 tokens)</div>
            <div>2. Encode: Gemini dense embeddings generated & stored in FAISS</div>
            <div>3. Search: FAISS (Cosine 0.94) + BM25 (Lexical 0.91) fused ensemble</div>
            <div>4. Generate: Gemini 1.5 synthesized grounded response with zero hallucinations.</div>
            <div className="text-emerald-400 font-semibold">[SUCCESS] Latency: 124ms</div>
          </div>
        );
        break;

      case 'bio':
        output = (
          <div className="space-y-1 text-[11px] text-slate-300">
            <div><strong className="text-white">Name:</strong> {PERSONAL_INFO.name}</div>
            <div><strong className="text-white">Degree:</strong> BE in Information Science & Engg, Ghousia College (VTU)</div>
            <div><strong className="text-white">CGPA:</strong> 8.1 / 10</div>
            <div><strong className="text-white">Internships:</strong> Palle Technologies (Data Science & Python Full-Stack)</div>
            <div><strong className="text-white">Target Roles:</strong> AI Engineer, Generative AI Developer, Python Developer</div>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-[11px] text-slate-300">
            <div><strong className="text-white">Email:</strong> {PERSONAL_INFO.email}</div>
            <div><strong className="text-white">Phone:</strong> {PERSONAL_INFO.phone}</div>
            <div><strong className="text-white">Location:</strong> {PERSONAL_INFO.location}</div>
            <div><strong className="text-white">GitHub:</strong> {PERSONAL_INFO.github}</div>
            <div><strong className="text-white">LinkedIn:</strong> {PERSONAL_INFO.linkedin}</div>
          </div>
        );
        break;

      case 'resume':
        window.open(PERSONAL_INFO.resumePath, '_blank');
        output = <div className="text-emerald-400 text-xs">Downloading Yashwanth_K_Resume.pdf...</div>;
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        output = (
          <div className="text-rose-400 text-xs">
            Unknown command: "{cmd}". Type <span className="text-white font-bold underline">help</span> for available commands.
          </div>
        );
    }

    setHistory(prev => [...prev, { command: input, output }]);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <div 
        className="w-full max-w-2xl bg-slate-950 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden font-mono flex flex-col h-[520px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Window Header */}
        <div className="bg-dark-900 px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs text-slate-400 ml-2">yashwanth@ai-core:~$</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/40">
              TERMINAL MODE
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Console Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
          {history.map((h, i) => (
            <div key={i} className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="text-slate-500">&gt;</span>
                <span className="font-semibold">{h.command}</span>
              </div>
              <div className="pl-4">{h.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Field */}
        <form onSubmit={handleCommand} className="p-3 border-t border-white/10 bg-dark-950 flex items-center gap-2">
          <span className="text-cyan-400 text-sm font-bold">&gt;</span>
          <input
            type="text"
            autoFocus
            placeholder="Type command ('help', 'rag', 'skills', 'projects', 'resume')..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent text-xs text-white placeholder-slate-600 focus:outline-none"
          />
          <button
            type="submit"
            className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 text-xs hover:bg-cyan-500/30 transition-colors"
          >
            Run
          </button>
        </form>
      </div>
    </div>
  );
};

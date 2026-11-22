import React, { useState } from 'react';
import { 
  X, 
  Send, 
  FileText, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Bot, 
  RefreshCw 
} from 'lucide-react';

interface RagSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SimulatedQuery {
  query: string;
  category: string;
  faissScore: number;
  bm25Score: number;
  fusedScore: number;
  retrievedChunk: string;
  sourceDoc: string;
  response: string;
}

export const RagSimulatorModal: React.FC<RagSimulatorModalProps> = ({ isOpen, onClose }) => {
  const sampleQueries: SimulatedQuery[] = [
    {
      query: "How does the hybrid search mechanism combine FAISS and BM25?",
      category: "Architecture & Retrieval",
      faissScore: 0.92,
      bm25Score: 0.88,
      fusedScore: 0.904,
      retrievedChunk: "Section 3.2: Hybrid Retrieval Ensemble. The query is dispatched concurrently to FAISS (utilizing Google Gemini dense vector embeddings for semantic similarity) and a BM25 sparse keyword retriever. Scores are normalized and fused using a reciprocal rank / linear weighted ensemble (alpha=0.6 semantic, 0.4 lexical), ensuring both conceptual nuance and exact technical token matching.",
      sourceDoc: "enterprise_architecture_whitepaper.pdf [Page 4, Chunk #12]",
      response: "The system executes hybrid retrieval by querying FAISS for dense semantic embeddings (weight 0.6) and BM25 for sparse lexical token matches (weight 0.4) concurrently. This ensemble approach prevents the blindspots of pure vector search—ensuring exact identifiers, technical terms, and semantic intent are both captured accurately."
    },
    {
      query: "What chunking strategy is used to prevent context loss across boundaries?",
      category: "Document Processing",
      faissScore: 0.89,
      bm25Score: 0.94,
      fusedScore: 0.91,
      retrievedChunk: "Section 2.1: Text Extraction & Chunking. Ingested PDF streams are processed using LangChain's RecursiveCharacterTextSplitter with chunk_size=500 characters and chunk_overlap=50 characters. The overlap preserves sentence continuity and contextual cross-references across boundaries before indexing into the FAISS vector database.",
      sourceDoc: "document_ingestion_specs.pdf [Page 2, Chunk #6]",
      response: "The pipeline uses LangChain's RecursiveCharacterTextSplitter configured with a 500-character chunk size and a 50-character sliding overlap. The 50-character overlap prevents sentences and technical definitions from being severed at chunk borders, maintaining semantic coherence."
    },
    {
      query: "How does the system ensure Gemini API responses are strictly grounded?",
      category: "LLM Guardrails",
      faissScore: 0.94,
      bm25Score: 0.82,
      fusedScore: 0.892,
      retrievedChunk: "Section 4.1: Prompt Engineering & Grounding Guardrails. The system prompt injects retrieved passages with explicit negative constraints: 'You are an enterprise document intelligence assistant. Answer strictly based on the provided context passages. If the answer cannot be verified from the text, state that the document does not contain this information.'",
      sourceDoc: "security_and_guardrails.pdf [Page 7, Chunk #24]",
      response: "The system enforces grounding through strict prompt engineering templates fed into Google Gemini API. It sets explicit system guardrails requiring the model to cite the retrieved document chunks and decline answering if the context lacks the required information, effectively eliminating hallucinations."
    }
  ];

  const [selectedQueryIndex, setSelectedQueryIndex] = useState(0);
  const [customInput, setCustomInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [activePipelineStep, setActivePipelineStep] = useState<number>(4);

  const activeData = sampleQueries[selectedQueryIndex];

  const handleSimulate = (index: number) => {
    setIsProcessing(true);
    setActivePipelineStep(1);
    setSelectedQueryIndex(index);

    setTimeout(() => setActivePipelineStep(2), 250);
    setTimeout(() => setActivePipelineStep(3), 500);
    setTimeout(() => {
      setActivePipelineStep(4);
      setIsProcessing(false);
    }, 850);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto glass-card rounded-2xl border border-cyan-500/30 p-6 sm:p-8 shadow-2xl bg-dark-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Enterprise RAG Pipeline Simulator</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                  Interactive Demo
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Experience Yashwanth's hybrid retrieval (FAISS + BM25) and Gemini API synthesis flow.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Query Selector Tabs */}
        <div className="space-y-2 mb-6">
          <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            Select a sample enterprise query to run through the pipeline:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {sampleQueries.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSimulate(idx)}
                className={`p-3 rounded-xl text-left border transition-all text-xs flex flex-col justify-between gap-1.5 ${
                  selectedQueryIndex === idx
                    ? 'bg-cyan-950/60 border-cyan-500/50 text-white shadow-md shadow-cyan-500/10'
                    : 'bg-dark-950/60 border-white/5 text-slate-300 hover:border-white/20'
                }`}
              >
                <span className="font-semibold text-slate-200 line-clamp-2">"{q.query}"</span>
                <span className="text-[10px] font-mono text-cyan-400">{q.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Pipeline Execution Flow Status */}
        <div className="p-4 rounded-xl bg-dark-950/90 border border-white/10 mb-6 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">PIPELINE EXECUTION TRACE:</span>
            {isProcessing ? (
              <span className="flex items-center gap-1.5 text-cyan-400 animate-pulse">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                Processing Query...
              </span>
            ) : (
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Query Resolved in 142ms
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
            <div className={`p-2 rounded-lg border text-center ${activePipelineStep >= 1 ? 'border-cyan-500/40 bg-cyan-950/40 text-cyan-300' : 'border-white/5 bg-slate-900 text-slate-500'}`}>
              <div className="text-[10px]">1. Query Encoding</div>
              <div className="font-bold text-[11px]">Gemini Embeddings</div>
            </div>
            <div className={`p-2 rounded-lg border text-center ${activePipelineStep >= 2 ? 'border-indigo-500/40 bg-indigo-950/40 text-indigo-300' : 'border-white/5 bg-slate-900 text-slate-500'}`}>
              <div className="text-[10px]">2. Dual Retrieval</div>
              <div className="font-bold text-[11px]">FAISS + BM25</div>
            </div>
            <div className={`p-2 rounded-lg border text-center ${activePipelineStep >= 3 ? 'border-violet-500/40 bg-violet-950/40 text-violet-300' : 'border-white/5 bg-slate-900 text-slate-500'}`}>
              <div className="text-[10px]">3. Score Fusion</div>
              <div className="font-bold text-[11px]">Hybrid Ensemble</div>
            </div>
            <div className={`p-2 rounded-lg border text-center ${activePipelineStep >= 4 ? 'border-emerald-500/40 bg-emerald-950/40 text-emerald-300' : 'border-white/5 bg-slate-900 text-slate-500'}`}>
              <div className="text-[10px]">4. LLM Generation</div>
              <div className="font-bold text-[11px]">Gemini 1.5 Grounded</div>
            </div>
          </div>
        </div>

        {/* Live Search Scores & Retrieved Chunk Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Retrieved Source Passage */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                Retrieved Context Passage
              </span>
              <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                Confidence: {(activeData.fusedScore * 100).toFixed(1)}%
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-dark-950/80 border border-cyan-500/20 text-xs text-slate-300 space-y-2">
              <div className="text-[10px] font-mono text-cyan-400">
                Source: {activeData.sourceDoc}
              </div>
              <p className="italic leading-relaxed text-slate-300 bg-black/40 p-2.5 rounded-lg border border-white/5">
                "{activeData.retrievedChunk}"
              </p>
              
              {/* Score Badges */}
              <div className="flex items-center gap-2 pt-1 font-mono text-[10px]">
                <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                  FAISS Sim: {activeData.faissScore}
                </span>
                <span className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/40">
                  BM25 Lexical: {activeData.bm25Score}
                </span>
                <span className="px-2 py-0.5 rounded bg-violet-950 text-violet-300 border border-violet-800/40">
                  Fused: {activeData.fusedScore}
                </span>
              </div>
            </div>
          </div>

          {/* Gemini Grounded Answer */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                Gemini API Synthesized Answer
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/30">
                Zero Hallucinations
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-dark-950/80 border border-violet-500/20 text-xs text-slate-200 space-y-2 flex flex-col justify-between h-[calc(100%-2rem)]">
              <p className="leading-relaxed">
                {activeData.response}
              </p>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>Model: Google Gemini API</span>
                <span>FastAPI Service</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer Note */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <span>This simulation mirrors Yashwanth's actual Enterprise RAG Chatbot architecture.</span>
          <a
            href="https://github.com/Yashwanth-12-yash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1"
          >
            Inspect GitHub Repository &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Sparkles, 
  Terminal, 
  Bot, 
  Award, 
  BrainCircuit, 
  CheckCircle2, 
  Layers
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenAiAssistant?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAiAssistant }) => {
  const [currentSpecializationIndex, setCurrentSpecializationIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTarget = PERSONAL_INFO.specializations[currentSpecializationIndex];
    const typingSpeed = isDeleting ? 25 : 55;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentTarget.slice(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentTarget.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayedText(currentTarget.slice(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentSpecializationIndex((prev) => (prev + 1) % PERSONAL_INFO.specializations.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentSpecializationIndex]);

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center pt-24 pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-tr from-cyan-600/20 via-indigo-600/20 to-violet-600/20 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Core Identity & CTAs */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-sm shadow-cyan-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Available for AI Engineer & Full-Stack Roles</span>
            </div>

            {/* Candidate Name & Title */}
            <div className="space-y-1.5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-gradient">{PERSONAL_INFO.name}</span>
              </h1>
              
              <p className="text-lg sm:text-xl font-semibold text-slate-200">
                AI Engineer <span className="text-cyan-400">|</span> Generative AI Developer <span className="text-violet-400">|</span> Python Full Stack Developer
              </p>
            </div>

            {/* Dynamic Typewriter Specialization */}
            <div className="h-9 flex items-center">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono bg-dark-900/80 border border-white/10 px-3.5 py-1.5 rounded-lg text-slate-300 w-full max-w-lg">
                <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="text-slate-400 text-xs">Focus:</span>
                <span className="text-cyan-300 font-semibold truncate">{displayedText}</span>
                <span className="w-1.5 h-3.5 bg-cyan-400 animate-pulse inline-block" />
              </div>
            </div>

            {/* Concise, punchy recruiter summary */}
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
              Information Science graduate (<span className="text-cyan-300 font-semibold">8.1 CGPA</span>) specializing in 
              <strong className="text-white"> Enterprise RAG pipelines</strong>, hybrid retrieval (<span className="text-cyan-300 font-mono text-xs">FAISS + BM25</span>), 
              asynchronous <strong className="text-white">FastAPI microservices</strong>, and production full-stack systems with 
              <strong className="text-white"> Django & React.js</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:opacity-95 text-white shadow-lg shadow-cyan-500/20 transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Yashwanth_K_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-dark-900 hover:bg-dark-800 text-slate-200 border border-white/15 hover:border-cyan-400/40 transition-all"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Resume PDF</span>
              </a>

              {/* Ask AI Copilot button */}
              <button
                onClick={onOpenAiAssistant}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-cyan-950/70 hover:bg-cyan-900/80 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20 transition-all"
              >
                <Bot className="w-3.5 h-3.5 text-cyan-400" />
                <span>Ask AI Copilot</span>
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-900 hover:bg-dark-800 border border-white/10 text-slate-300 hover:text-white transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-900 hover:bg-dark-800 border border-white/10 text-slate-300 hover:text-white transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-white/10">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-dark-900/70 border border-white/5">
                  <div className="text-lg font-bold font-mono text-gradient">{stat.value}</div>
                  <div className="text-[11px] font-medium text-slate-300">{stat.label}</div>
                  <div className="text-[9px] text-slate-500">{stat.detail}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Yashwanth's Photo Portrait with Futuristic AI Laser & Orbital Rings */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
              
              {/* Outer Rotating Orbital Tech Rings */}
              <div className="absolute -inset-6 rounded-full border border-dashed border-cyan-500/25 animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-10 rounded-full border border-dotted border-violet-500/20 animate-spin-reverse-slow pointer-events-none" />
              
              {/* Glowing decorative ambient halo */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-violet-600 opacity-45 blur-2xl animate-pulse-slow" />
              
              {/* Photo Frame Container */}
              <div className="relative rounded-3xl bg-dark-900/95 border border-cyan-500/30 p-3.5 shadow-2xl backdrop-blur-xl">
                
                {/* HUD Corner Brackets */}
                <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-cyan-400 rounded-tl" />
                <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-cyan-400 rounded-tr" />
                <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-cyan-400 rounded-bl" />
                <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-cyan-400 rounded-br" />

                {/* Photo Image with Laser Scanning Line */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-inner group">
                  <img
                    src="/yashwanth.jpg"
                    alt="Yashwanth K - AI Engineer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* High-Tech Animated Laser Scanline */}
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#38bdf8] animate-scanline pointer-events-none z-20" />

                  {/* Top Telemetry Overlay */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-dark-950/80 backdrop-blur-md border border-cyan-500/30 text-[9px] font-mono text-cyan-300 flex items-center gap-1 z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>NEURAL_ID: YK-2026</span>
                  </div>

                  {/* Top-Right Active Status */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-dark-950/80 backdrop-blur-md border border-emerald-500/40 text-[10px] font-mono text-emerald-300 flex items-center gap-1.5 z-10">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Open to Roles</span>
                  </div>

                  {/* Bottom Gradient Overlay with Badges */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-dark-950 via-dark-950/85 to-transparent p-4 pt-12 space-y-1 z-10">
                    <div className="text-white font-bold text-sm flex items-center justify-between">
                      <span>{PERSONAL_INFO.name}</span>
                      <span className="text-[10px] font-mono text-cyan-400">BE ISE (8.1 CGPA)</span>
                    </div>
                    <div className="text-[11px] text-slate-300 flex items-center gap-1.5">
                      <BrainCircuit className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                      <span>RAG & Generative AI Specialist</span>
                    </div>
                  </div>
                </div>

                {/* Micro Telemetry Bar Below Photo */}
                <div className="grid grid-cols-3 gap-1.5 pt-3 text-[10px] font-mono text-center">
                  <div className="p-1.5 rounded-lg bg-dark-950/80 border border-white/5 text-slate-300 hover:border-cyan-500/30 transition-colors">
                    <span className="text-cyan-400 block font-bold">FastAPI</span>
                    Sub-100ms API
                  </div>
                  <div className="p-1.5 rounded-lg bg-dark-950/80 border border-white/5 text-slate-300 hover:border-indigo-500/30 transition-colors">
                    <span className="text-indigo-400 block font-bold">FAISS</span>
                    Vector Search
                  </div>
                  <div className="p-1.5 rounded-lg bg-dark-950/80 border border-white/5 text-slate-300 hover:border-violet-500/30 transition-colors">
                    <span className="text-violet-400 block font-bold">Gemini</span>
                    LLM Synthesis
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { 
  Download, 
  FileText, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  Eye, 
  Sparkles 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ResumeDownloadSection: React.FC = () => {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl glass-card border border-cyan-500/30 p-8 sm:p-12 overflow-hidden shadow-2xl bg-gradient-to-br from-dark-900 via-dark-950 to-indigo-950/40">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-xs font-mono text-cyan-300">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>OFFICIAL VERIFIED CURRICULUM VITAE</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Download Yashwanth K's <span className="text-gradient">Resume</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Review complete academic credentials (BE Information Science, 8.1 CGPA), professional 
                experience at Palle Technologies, and technical project implementations in RAG, 
                FastAPI, Django, and Machine Learning.
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>BE Information Science (8.1 CGPA)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Palle Technologies Intern Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Enterprise RAG & Hybrid Retrieval</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Immediate Availability for Employment</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href={PERSONAL_INFO.resumePath}
                  download="Yashwanth_K_Resume.pdf"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 hover:opacity-95 text-white shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>

                <a
                  href={PERSONAL_INFO.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-all"
                >
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>View in Browser</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Card: Document Snapshot */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-xs p-5 rounded-2xl bg-dark-950/90 border border-white/15 shadow-2xl space-y-3 font-mono text-[11px] text-slate-300">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-cyan-400" />
                    <span className="font-bold text-white text-xs">Yashwanth_K_Resume.pdf</span>
                  </div>
                  <span className="text-[10px] text-emerald-400">54 KB</span>
                </div>

                <div className="space-y-1 text-slate-400 text-[10px]">
                  <div>Candidate: <span className="text-white">Yashwanth K</span></div>
                  <div>Role: <span className="text-cyan-300">AI / Python Full Stack Engineer</span></div>
                  <div>Education: <span className="text-white">Ghousia College (VTU)</span></div>
                  <div>Format: <span className="text-white">Standard ATS-Compliant PDF</span></div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
                  <span>Status: Ready to Download</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

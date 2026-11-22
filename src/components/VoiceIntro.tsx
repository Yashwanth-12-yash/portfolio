import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, ChevronDown, ChevronUp, Sparkles, UserCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const VoiceIntro: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  const introText = `Hello! I am Yashwanth K, an AI Engineer and Python Full Stack Developer based in Karnataka, India. I specialize in building production-grade Generative AI and RAG architectures using LangChain, FAISS, and Google Gemini API, along with scalable backend microservices in FastAPI and Django. I graduated with a Bachelor of Engineering in Information Science with an 8.1 CGPA, and I have completed intensive industry training in Data Science and Python Full-Stack engineering at Palle Technologies. I am actively looking for opportunities where I can build intelligent, reliable, and high-impact software solutions. Thank you for visiting my portfolio.`;

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setIsSupported(false);
    }

    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleToggleVoice = () => {
    if (!isSupported) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(introText);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    // Pick an English voice if available
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.includes('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Neural') || v.name.includes('Samantha')));
    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="rounded-2xl p-4 bg-dark-900/90 border border-white/10 shadow-xl backdrop-blur-md space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        
        {/* Left: Indicator & Description */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
            {isPlaying ? (
              <Volume2 className="w-4 h-4 animate-pulse text-cyan-300" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </div>
          <div>
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>Candidate Voice Introduction</span>
              {isPlaying && (
                <span className="flex items-center gap-0.5 ml-1">
                  <span className="w-1 h-3 bg-cyan-400 animate-pulse rounded-full" />
                  <span className="w-1 h-4 bg-indigo-400 animate-pulse rounded-full delay-75" />
                  <span className="w-1 h-2 bg-violet-400 animate-pulse rounded-full delay-150" />
                </span>
              )}
            </div>
            <div className="text-[11px] text-slate-400">
              Listen to Yashwanth's verified 45-second professional brief
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {isSupported && (
            <button
              onClick={handleToggleVoice}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                isPlaying
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30'
                  : 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 hover:opacity-95'
              }`}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>Pause Audio</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Play Intro</span>
                </>
              )}
            </button>
          )}

          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-medium bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
          >
            <span>{showTranscript ? "Hide Text" : "Read Text"}</span>
            {showTranscript ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>

      </div>

      {/* Transcript Text Drawer */}
      {showTranscript && (
        <div className="pt-2 border-t border-white/5 text-xs text-slate-300 leading-relaxed font-mono bg-dark-950/60 p-3 rounded-xl border border-white/5 space-y-2">
          <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1">
            <UserCheck className="w-3 h-3" />
            <span>Verified Audio Transcript:</span>
          </div>
          <p className="italic text-slate-300">
            "{introText}"
          </p>
        </div>
      )}
    </div>
  );
};

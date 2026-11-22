import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin, Sparkles, Bot, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenAiAssistant?: () => void;
  onOpenTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAiAssistant, onOpenTerminal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Projects', href: '#projects' },
    { label: 'AI Blueprint', href: '#architecture' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/85 backdrop-blur-md border-b border-white/10 py-2.5 shadow-lg shadow-black/40'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with Candidate Photo Avatar */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Yashwanth K Portfolio Home"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-400/60 p-0.5 shadow-md shadow-cyan-500/20 group-hover:border-cyan-300 transition-all">
                <img 
                  src="/yashwanth.jpg" 
                  alt="Yashwanth K" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-dark-950 animate-pulse" title="Available for opportunities" />
            </div>

            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors text-sm sm:text-base">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] font-mono text-cyan-400">AI / Full-Stack Engineer</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-dark-900/70 border border-white/10 rounded-full px-4 py-1 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-white/[0.04] rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs: AI Copilot Button + Resume */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Ask AI Copilot Button */}
            <button
              onClick={onOpenAiAssistant}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-950/70 hover:bg-cyan-900/80 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20 transition-all hover:scale-105"
              title="Ask Yashwanth's AI Copilot"
            >
              <Bot className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Ask AI</span>
              <span className="px-1.5 py-0.2 rounded-full bg-cyan-400/20 text-[9px] font-mono">COPILOT</span>
            </button>

            {/* Terminal CLI Button */}
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-dark-900 hover:bg-dark-800 text-slate-300 border border-white/10 hover:border-cyan-500/30 transition-all font-mono"
              title="Launch AI Engineer Interactive Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>CLI</span>
            </button>

            {/* Resume Download CTA */}
            <a
              href={PERSONAL_INFO.resumePath}
              download="Yashwanth_K_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all"
              title="Download Yashwanth K's Verified Resume PDF"
            >
              <Download className="w-3 h-3 text-cyan-400" />
              <span>CV</span>
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu & AI Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenAiAssistant}
              className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs flex items-center gap-1"
            >
              <Bot className="w-4 h-4" />
              <span>AI</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-900/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 mt-2 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAiAssistant?.();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-950 border border-cyan-500/40 text-cyan-300"
            >
              <Bot className="w-4 h-4 text-cyan-400" />
              Ask Yashwanth's AI Copilot
            </button>
            <a
              href={PERSONAL_INFO.resumePath}
              download="Yashwanth_K_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 text-white border border-white/10"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              Download Resume (PDF)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

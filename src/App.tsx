import React, { useState } from 'react';
import { NetworkBackground } from './components/NetworkBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechnicalExpertise } from './components/TechnicalExpertise';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ArchitectureShowcase } from './components/ArchitectureShowcase';
import { ProfessionalJourney } from './components/ProfessionalJourney';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AiAssistantDrawer } from './components/AiAssistantDrawer';
import { AiTerminalModal } from './components/AiTerminalModal';
import { Bot, Sparkles, Terminal } from 'lucide-react';

export function App() {
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-dark-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Reactive Neural Particles & Pulses */}
      <NetworkBackground />

      {/* Persistent Glassmorphic Header with Photo Avatar, AI Copilot & CLI */}
      <Navbar 
        onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Content Sections: Personal AI Engineer Portfolio */}
      <main className="relative z-10">
        <Hero onOpenAiAssistant={() => setIsAiAssistantOpen(true)} />
        <About />
        <TechnicalExpertise />
        <FeaturedProjects />
        <ArchitectureShowcase />
        <ProfessionalJourney />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Controls (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        {/* Quick CLI Button */}
        <button
          onClick={() => setIsTerminalOpen(true)}
          className="p-3 rounded-full bg-dark-900/90 text-cyan-300 border border-cyan-500/40 shadow-lg shadow-black/50 hover:bg-dark-800 hover:scale-105 transition-all"
          title="Open AI Engineer Terminal (CLI)"
        >
          <Terminal className="w-4 h-4" />
        </button>

        {/* Floating "Ask AI" Copilot Button */}
        <button
          onClick={() => setIsAiAssistantOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 text-white font-semibold text-xs shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all group border border-white/20"
          title="Ask Yashwanth's AI Copilot"
        >
          <div className="relative">
            <Bot className="w-4 h-4 text-white" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>
          <span>Ask AI Copilot</span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
        </button>
      </div>

      {/* Interactive AI Recruiter Assistant Drawer */}
      <AiAssistantDrawer
        isOpen={isAiAssistantOpen}
        onClose={() => setIsAiAssistantOpen(false)}
      />

      {/* Interactive AI Terminal Modal */}
      <AiTerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}

export default App;

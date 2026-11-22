import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  User, 
  CornerDownLeft, 
  CheckCircle2, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface Message {
  role: 'assistant' | 'user';
  text: string;
  links?: { label: string; href: string }[];
}

export const AiAssistantDrawer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: `Hello! I am Yashwanth's AI Assistant. Ask me anything about his technical background, Generative AI projects, Python experience, or why he's a great fit for your engineering team!`
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const quickPrompts = [
    "What is his experience with RAG & LLMs?",
    "What are his core backend & Python skills?",
    "Tell me about the Enterprise RAG Chatbot",
    "Why hire Yashwanth for an AI role?"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    // Add user message
    const newMessages: Message[] = [...messages, { role: 'user', text: query }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const q = query.toLowerCase();
      let replyText = "";
      let links: { label: string; href: string }[] | undefined = undefined;

      if (q.includes('rag') || q.includes('llm') || q.includes('generative ai') || q.includes('gemini')) {
        replyText = `Yashwanth specializes in production RAG systems. His flagship project is the Enterprise RAG Chatbot which pairs FAISS dense vector search with BM25 sparse keyword retrieval for hybrid search. He uses LangChain for recursive text chunking and Google Gemini API for grounded synthesis with strict anti-hallucination guardrails.`;
        links = [
          { label: "View RAG Chatbot Repo", href: "https://github.com/Yashwanth-12-yash/-Enterprise-RAG-Chatbot" },
          { label: "See Architecture Blueprint", href: "#architecture" }
        ];
      } else if (q.includes('backend') || q.includes('python') || q.includes('django') || q.includes('fastapi')) {
        replyText = `Yashwanth is a proficient Python developer experienced in building asynchronous REST APIs with FastAPI and full-stack systems with Django & Django REST Framework. He has integrated MySQL relational databases, implemented Role-Based Access Control (RBAC), and designed clean OOP architectures.`;
        links = [
          { label: "View HelpDesk IT System", href: "https://github.com/Yashwanth-12-yash/helpdesk-it-support-system" }
        ];
      } else if (q.includes('hire') || q.includes('fit') || q.includes('role') || q.includes('summary')) {
        replyText = `Yashwanth holds a BE in Information Science & Engineering with an 8.1 CGPA. He has completed 2 intensive internships/training programs at Palle Technologies (Bengaluru) in Data Science & Full-Stack Python. He bridges the gap between AI intelligence (RAG/ML) and production backend APIs, making him immediately productive on day one.`;
        links = [
          { label: "Download Verified Resume", href: "/Yashwanth_K_Resume.pdf" },
          { label: "Contact Yashwanth", href: "#contact" }
        ];
      } else if (q.includes('education') || q.includes('college') || q.includes('cgpa')) {
        replyText = `Yashwanth graduated in Information Science & Engineering from Ghousia College of Engineering (VTU) with a strong CGPA of 8.1 / 10 (2022–2026), focusing on Data Structures, OOP, DBMS, Machine Learning, and Software Engineering.`;
      } else if (q.includes('project') || q.includes('repo')) {
        replyText = `Yashwanth has 11+ repositories on GitHub covering Generative AI (Enterprise RAG, TCS RAG), Full-Stack Systems (HelpDesk IT, NexTrade, EduLead CRM), Machine Learning (Diabetes Prediction, Iris Classification), and Computer Vision (Color Detection OpenCV).`;
        links = [
          { label: "Explore Projects Section", href: "#projects" },
          { label: "Visit GitHub Profile", href: "https://github.com/Yashwanth-12-yash" }
        ];
      } else {
        replyText = `Yashwanth K is an AI Engineer and Python Full Stack Developer based in Mandya/Bengaluru, India. He builds production-grade RAG systems, FastAPI microservices, and machine learning models. Feel free to download his resume or reach out directly at yashwanthk2004k@gmail.com!`;
        links = [
          { label: "Get in Touch", href: "#contact" },
          { label: "Download Resume", href: "/Yashwanth_K_Resume.pdf" }
        ];
      }

      setMessages([...newMessages, { role: 'assistant', text: replyText, links }]);
      setIsTyping(false);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-md h-full bg-dark-900 border-l border-white/10 flex flex-col justify-between shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-dark-950/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>Yashwanth AI Copilot</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="text-[10px] font-mono text-cyan-400">Grounded in Candidate Resume</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs leading-relaxed">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.role === 'assistant' && (
                <div className="w-6 h-6 rounded-md bg-cyan-950 border border-cyan-800/40 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              )}
              
              <div className={`max-w-[85%] p-3 rounded-2xl ${
                m.role === 'user'
                  ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white font-medium rounded-tr-none'
                  : 'bg-dark-950/80 border border-white/10 text-slate-200 rounded-tl-none'
              }`}>
                <p>{m.text}</p>
                
                {m.links && (
                  <div className="mt-2.5 pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
                    {m.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        onClick={() => {
                          if (!link.href.startsWith('http')) onClose();
                        }}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-cyan-950/80 text-cyan-300 border border-cyan-800/40 text-[10px] font-mono hover:bg-cyan-900 transition-colors"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {m.role === 'user' && (
                <div className="w-6 h-6 rounded-md bg-indigo-950 border border-indigo-800/40 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-slate-400 text-[11px] font-mono">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
              <span>Copilot is reasoning...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts Strip */}
        <div className="px-4 py-2 border-t border-white/5 bg-dark-950/40 space-y-1.5">
          <div className="text-[10px] font-mono text-slate-500">SUGGESTED QUESTIONS:</div>
          <div className="flex flex-wrap gap-1">
            {quickPrompts.map((p, pIdx) => (
              <button
                key={pIdx}
                onClick={() => handleSend(p)}
                className="text-[10px] px-2.5 py-1 rounded-full bg-white/[0.04] text-slate-300 hover:text-cyan-300 hover:bg-white/10 border border-white/5 transition-all truncate max-w-full"
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-3 border-t border-white/10 bg-dark-950 flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask about skills, projects, or background..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 px-3 py-2 rounded-xl bg-dark-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim()}
            className="p-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-dark-950 transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};

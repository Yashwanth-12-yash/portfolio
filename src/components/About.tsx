import React from 'react';
import { 
  BrainCircuit, 
  Server, 
  Cpu, 
  Workflow, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  ExternalLink, 
  CheckCircle, 
  ShieldCheck,
  UserCheck 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { VoiceIntro } from './VoiceIntro';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <BrainCircuit className="w-5 h-5 text-cyan-400" />,
      title: "Generative AI & RAG Systems",
      description: "Specialized in production-grade Retrieval-Augmented Generation (RAG). Proficient in semantic chunking strategies, FAISS dense vector search, BM25 keyword retrieval, and grounding Google Gemini API responses with zero hallucinations."
    },
    {
      icon: <Server className="w-5 h-5 text-indigo-400" />,
      title: "Python Backend Engineering",
      description: "Hands-on experience developing asynchronous REST APIs with FastAPI and full-stack web applications with Django & Django REST Framework. Skilled in relational data modeling with MySQL and clean OOP architectures."
    },
    {
      icon: <Cpu className="w-5 h-5 text-violet-400" />,
      title: "Machine Learning & Predictive Modeling",
      description: "Practical modeling experience with Scikit-learn, Pandas, NumPy, and TensorFlow. Experienced in exploratory data analysis (EDA), biological zero-value imputation, feature scaling, and multi-algorithm evaluation."
    },
    {
      icon: <Workflow className="w-5 h-5 text-emerald-400" />,
      title: "Full-Stack Software Delivery",
      description: "Dedicated to building tangible, reliable software solutions—from automated IT ticket triage with Google Gemini AI to responsive React storefronts with persistent state and transactional integrity."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-white/5 bg-dark-950/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300">
            <UserCheck className="w-3.5 h-3.5" />
            <span>PERSONAL PROFILE & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">{PERSONAL_INFO.name}</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Engineering background, technical development journey, and dedication to building real-world AI applications.
          </p>
        </div>

        {/* Profile Card & Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Left Bio Card */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-lg font-bold text-white">
                Engineering Foundation & AI Journey
              </h3>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/40">
                BE ISE • 8.1 CGPA
              </span>
            </div>

            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              I am an <strong className="text-white">Information Science and Engineering graduate</strong> from 
              Ghousia College of Engineering (VTU) with a cumulative CGPA of <strong className="text-cyan-400 font-mono">8.1</strong>. 
              My engineering foundation is built on rigorous computational principles—data structures, relational database design, 
              and object-oriented programming—which I apply directly to modern AI and full-stack software development.
            </p>

            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              I approach Artificial Intelligence as an <strong className="text-white">engineering discipline</strong>: 
              designing high-throughput, low-latency API layers with <span className="text-cyan-300 font-mono text-xs">FastAPI</span> and <span className="text-cyan-300 font-mono text-xs">Django</span>, 
              solving pure vector search limitations via <strong className="text-indigo-300">Hybrid Retrieval (FAISS + BM25)</strong>, 
              and interfacing responsive <span className="text-violet-300 font-mono text-xs">React.js</span> interfaces with 
              state-of-the-art LLMs (<span className="text-violet-300 font-mono text-xs">Google Gemini API</span>).
            </p>

            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              Through intensive training in Data Science and Python Full-Stack development at 
              <strong className="text-white"> Palle Technologies (Bengaluru)</strong>, I have developed end-to-end workflows 
              spanning exploratory data analysis, machine learning model evaluation, and complete web application lifecycles.
            </p>

            {/* Quick Contact & Location Tags */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Mandya, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Ghousia College of Engineering (VTU)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-violet-400 shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cyan-300 transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Voice Intro & Recruiter Snapshot */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Functional Voice Introduction Component */}
            <VoiceIntro />

            {/* Quick Recruiter Snapshot */}
            <div className="glass-card rounded-2xl p-5 space-y-3.5 border-cyan-500/20 text-xs">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="font-bold uppercase tracking-wider text-slate-400">Recruiter Quick Facts</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">Verified Resume</span>
              </div>

              <div className="space-y-2.5 text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Target Roles:</span> AI Engineer, Generative AI Developer, Python Backend Developer, ML Engineer.
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Core Technologies:</span> Python, FastAPI, Django, LangChain, FAISS, Gemini API, React.js, Scikit-learn, MySQL.
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Availability:</span> Immediately available for entry-level and junior engineering opportunities.
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Download CV PDF:</span>
                <a
                  href={PERSONAL_INFO.resumePath}
                  download="Yashwanth_K_Resume.pdf"
                  className="font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  <span>Yashwanth_K_Resume.pdf</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="glass-card-interactive rounded-2xl p-5 space-y-2.5 relative group"
            >
              <div className="p-2.5 rounded-xl bg-white/[0.04] w-fit border border-white/10 group-hover:border-cyan-500/40 transition-colors">
                {pillar.icon}
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                {pillar.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

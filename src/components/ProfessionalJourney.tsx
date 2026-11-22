import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award,
  Sparkles
} from 'lucide-react';
import { EXPERIENCE_EDUCATION } from '../data/portfolioData';

export const ProfessionalJourney: React.FC = () => {
  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER & ACADEMIC MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Formal engineering education and hands-on industry internship training in Bengaluru.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/30 space-y-10">
          {EXPERIENCE_EDUCATION.map((item, idx) => {
            const isEducation = item.type === 'education';

            return (
              <div key={item.id} className="relative group">
                
                {/* Node icon */}
                <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-8 h-8 rounded-full bg-dark-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                  {isEducation ? (
                    <GraduationCap className="w-4 h-4" />
                  ) : (
                    <Briefcase className="w-4 h-4 text-indigo-400" />
                  )}
                </div>

                {/* Card Container */}
                <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-cyan-500/30 transition-all space-y-3">
                  
                  {/* Top Meta Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-2.5">
                    <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.duration}
                    </span>

                    <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                      isEducation
                        ? 'bg-emerald-950/80 text-emerald-300 border-emerald-800/40'
                        : 'bg-indigo-950/80 text-indigo-300 border-indigo-800/40'
                    }`}>
                      {isEducation ? "Academic Degree" : "Industry Internship / Training"}
                    </span>
                  </div>

                  {/* Role & Org */}
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {item.role}
                    </h3>
                    <div className="text-xs font-medium text-slate-300 mt-0.5 flex items-center gap-2">
                      <span className="text-white font-semibold">{item.organization}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Academic Score Badge */}
                  {item.cgpaOrScore && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-950/60 border border-emerald-800/40 text-xs font-mono text-emerald-300">
                      <Award className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Cumulative Standing: <strong>{item.cgpaOrScore}</strong></span>
                    </div>
                  )}

                  {/* Responsibilities */}
                  <div className="space-y-1.5 pt-1 text-xs text-slate-300 leading-relaxed">
                    {item.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.technologies.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-dark-950 border border-white/5 text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Sparkles,
  Layers
} from 'lucide-react';
import { EXPERIENCE_EDUCATION } from '../data/portfolioData';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/40 text-xs font-mono text-cyan-300">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>CAREER MILESTONES & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on internships and rigorous academic training forming a solid foundation in Python, 
            Data Science, Machine Learning, and Information Science.
          </p>
        </div>

        {/* Timeline Stream */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical central timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-violet-600 opacity-30" />

          <div className="space-y-12">
            {EXPERIENCE_EDUCATION.map((item, index) => {
              const isEven = index % 2 === 0;
              const isEducation = item.type === 'education';

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Icon in center */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-dark-950 border-2 border-cyan-400 flex items-center justify-center z-10 shadow-lg shadow-cyan-500/30">
                    {isEducation ? (
                      <GraduationCap className="w-4 h-4 text-cyan-400" />
                    ) : (
                      <Briefcase className="w-4 h-4 text-indigo-400" />
                    )}
                  </div>

                  {/* Empty Spacer Column for Desktop Alternate Layout */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Timeline Card */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${isEven ? 'sm:pr-10' : 'sm:pl-10'}`}>
                    <div className="glass-card rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 space-y-4">
                      
                      {/* Top Meta: Duration & Type Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>

                        <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                          isEducation
                            ? 'bg-emerald-950/80 text-emerald-300 border-emerald-800/40'
                            : 'bg-indigo-950/80 text-indigo-300 border-indigo-800/40'
                        }`}>
                          {isEducation ? 'Academic Degree' : 'Hands-on Experience'}
                        </span>
                      </div>

                      {/* Role & Organization */}
                      <div className="space-y-1">
                        <h3 className="text-lg font-bold text-white">
                          {item.role}
                        </h3>
                        <div className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                          <span>{item.organization}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Academic Score if Education */}
                      {item.cgpaOrScore && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-emerald-950/50 border border-emerald-800/40 text-xs font-mono text-emerald-300">
                          <Award className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Academic Standing: {item.cgpaOrScore}</span>
                        </div>
                      )}

                      {/* Responsibilities */}
                      <div className="space-y-2">
                        <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                          Key Contributions:
                        </div>
                        <div className="space-y-1.5">
                          {item.responsibilities.map((resp, rIdx) => (
                            <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Outcome Banner */}
                      <div className="p-3 rounded-xl bg-dark-950/70 border border-white/5 text-[11px] text-slate-300">
                        <span className="font-semibold text-cyan-300">Impact / Outcome: </span>
                        {item.keyOutcome}
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

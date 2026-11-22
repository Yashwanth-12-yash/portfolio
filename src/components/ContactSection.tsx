import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  CheckCircle2, 
  Copy, 
  ExternalLink, 
  MessageSquare, 
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCopied, setIsCopied] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(key);
    setTimeout(() => setIsCopied(null), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) errs.message = 'Please include a message or inquiry.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Construct genuine mailto link with encoded parameters
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Yashwanth,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent via your AI Portfolio Website`
    );

    // Open user's default email client
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setFormStatus('success');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5 bg-dark-950/70">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/40 text-xs font-mono text-cyan-300">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build <span className="text-gradient">Something Intelligent</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I am actively interviewing for AI Engineer, Generative AI Developer, and Python Full Stack roles. 
            Reach out directly or send an inquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Contact Information</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </h3>

              <div className="space-y-4">
                
                {/* Email Item */}
                <div className="p-3.5 rounded-xl bg-dark-950/80 border border-white/5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Email Address</div>
                      <a 
                        href={`mailto:${PERSONAL_INFO.email}`} 
                        className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 transition-colors truncate block"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors shrink-0"
                    title="Copy Email Address"
                  >
                    {isCopied === 'email' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-3.5 rounded-xl bg-dark-950/80 border border-white/5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Phone & WhatsApp</div>
                      <a 
                        href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} 
                        className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors shrink-0"
                    title="Copy Phone Number"
                  >
                    {isCopied === 'phone' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-3.5 rounded-xl bg-dark-950/80 border border-white/5 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Professional Networks:
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-dark-950/80 hover:bg-indigo-950/40 border border-white/10 hover:border-indigo-500/40 text-slate-300 hover:text-white text-xs font-semibold transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-indigo-400" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 ml-auto text-slate-500" />
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-dark-950/80 hover:bg-cyan-950/40 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white text-xs font-semibold transition-all"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 ml-auto text-slate-500" />
                  </a>
                </div>
              </div>

            </div>

            {/* Direct Resume Download Box */}
            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-white block">Official Resume (PDF)</span>
                <span className="text-[11px] text-slate-400">Verified BE ISE • 8.1 CGPA</span>
              </div>
              <a
                href={PERSONAL_INFO.resumePath}
                download="Yashwanth_K_Resume.pdf"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:opacity-95 text-white shadow-md shadow-cyan-500/20 transition-all flex items-center gap-1.5"
              >
                <span>Download CV</span>
              </a>
            </div>

            {/* Recruiter Guarantee Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-indigo-950/40 border border-cyan-800/30 text-xs text-slate-300 space-y-1">
              <span className="font-semibold text-white flex items-center gap-1.5 text-cyan-300">
                <Sparkles className="w-3.5 h-3.5" />
                Prompt Response Guarantee
              </span>
              <p className="text-slate-400 leading-relaxed">
                I respond to all professional recruiter inquiries, interview schedules, and engineering discussions within 24 hours.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Fill out the form below to initiate an email directly to Yashwanth K.
              </p>
            </div>

            {formStatus === 'success' && (
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800/50 text-xs text-emerald-300 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Email client dispatched!</span> If your default mail client didn't open automatically, you can always write to <strong className="text-white underline">{PERSONAL_INFO.email}</strong> directly.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1 text-left">
                  <label className="text-xs font-medium text-slate-300">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sarah Connor / Tech Recruiter"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950/90 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                  {errors.name && <span className="text-[11px] text-rose-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="space-y-1 text-left">
                  <label className="text-xs font-medium text-slate-300">
                    Your Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950/90 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                  {errors.email && <span className="text-[11px] text-rose-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1 text-left">
                <label className="text-xs font-medium text-slate-300">
                  Subject / Role Opening <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. AI Engineer Opportunity / Generative AI Role"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950/90 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
                {errors.subject && <span className="text-[11px] text-rose-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.subject}</span>}
              </div>

              {/* Message */}
              <div className="space-y-1 text-left">
                <label className="text-xs font-medium text-slate-300">
                  Message Details <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your team, tech stack, or the project you'd like to collaborate on..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950/90 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                />
                {errors.message && <span className="text-[11px] text-rose-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 hover:opacity-95 text-white shadow-xl shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Send Message Directly</span>
              </button>

              <div className="text-[11px] text-slate-500 text-center font-mono">
                Dispatches via your default email application directly to yashwanthk2004k@gmail.com
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

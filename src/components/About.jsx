import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { usePortfolio } from '../context/PortfolioContext';
import { Quote, Sparkles, Compass, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const { portfolioData } = usePortfolio();
  const about = portfolioData.about || {};
  const theme = portfolioData.theme || {};
  const primaryColor = theme.primaryColor || "#4F46E5";
  const secondaryColor = theme.secondaryColor || "#9333EA";

  const aboutConfig = portfolioData.sections?.find(s => s.id === 'about') || {};
  const preset = aboutConfig.preset || "preset1";

  /* =========================================================================
     PRESET 1: Clean Editorial Center (Original)
     ========================================================================= */
  if (preset === 'preset1') {
    return (
      <section id="about" className="py-16 sm:py-24">
        <SectionWrapper sectionId="about" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <span 
            className="font-medium text-xs sm:text-sm tracking-wide uppercase mb-2 block"
            style={{ color: primaryColor }}
          >
            {about.badge || "Get to know me"}
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
            {about.title || "About Me"}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
            {about.content}
          </p>

          {about.quote && (
            <div className="pt-6 border-t border-slate-100 max-w-xl mx-auto">
              <blockquote className="italic text-slate-400 text-sm">
                "{about.quote}"
              </blockquote>
            </div>
          )}
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 2: Split Story & Highlight Card
     ========================================================================= */
  if (preset === 'preset2') {
    return (
      <section id="about" className="py-16 sm:py-24">
        <SectionWrapper sectionId="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span 
                className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-block"
                style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
              >
                {about.badge || "Get to know me"}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                {about.title || "About Me"}
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                {about.content}
              </p>
            </div>

            <div className="lg:col-span-5 bg-white p-8 rounded-3xl shadow-lg border border-slate-100 space-y-6">
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white"
                style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
              >
                <Quote className="w-6 h-6" />
              </div>
              <p className="text-slate-800 text-base font-medium leading-relaxed italic">
                "{about.quote || "Design is not just what it looks like and feels like. Design is how it works."}"
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-slate-700">Kesavan</span>
                <span>UI/UX Specialist</span>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 3: 3-Stage Design Methodology Journey
     ========================================================================= */
  if (preset === 'preset3') {
    const pillars = [
      { icon: Compass, title: "01. Research & Empathy", desc: "Uncovering user pain points, mapping journey flows, and defining product requirements." },
      { icon: Lightbulb, title: "02. Wireframe & Prototype", desc: "Iterative low to high-fidelity wireframing and clickable Figma prototypes." },
      { icon: Target, title: "03. Design System & Delivery", desc: "Pixel-perfect components, tokens, and developer-friendly design handoffs." }
    ];

    return (
      <section id="about" className="py-16 sm:py-24 bg-slate-50/50">
        <SectionWrapper sectionId="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-bold text-xs uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
              {about.badge || "Get to know me"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
              {about.title || "About Me & Design Thinking"}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {about.content}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                    style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900">{p.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 4: Dark Studio Spotlight
     ========================================================================= */
  if (preset === 'preset4') {
    return (
      <section id="about" className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden">
        <div 
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-[140px] opacity-25 pointer-events-none"
          style={{ backgroundColor: primaryColor }}
        />
        <SectionWrapper sectionId="about" className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/80 border border-indigo-800 px-3.5 py-1.5 rounded-full inline-block mb-6">
            {about.badge || "GET TO KNOW ME"}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mb-8 tracking-tight">
            {about.title || "About Me"}
          </h2>
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-10 font-normal">
            {about.content}
          </p>
          {about.quote && (
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 max-w-xl mx-auto text-sm text-slate-300 italic">
              "{about.quote}"
            </div>
          )}
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 5: Modern Bento Profile Matrix
     ========================================================================= */
  return (
    <section id="about" className="py-16 sm:py-24">
      <SectionWrapper sectionId="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
                {about.badge || "Get to know me"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">
                {about.title || "About Me"}
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                {about.content}
              </p>
            </div>
          </div>

          <div 
            className="p-8 sm:p-10 rounded-3xl text-white shadow-xl flex flex-col justify-between"
            style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
          >
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-white/70 mb-2">Philosophy</div>
              <p className="text-lg font-bold leading-relaxed italic">
                "{about.quote || "Design is not just what it looks like and feels like. Design is how it works."}"
              </p>
            </div>
            <div className="pt-6 border-t border-white/20 text-xs text-white/80">
              User-First Mindset
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default About;

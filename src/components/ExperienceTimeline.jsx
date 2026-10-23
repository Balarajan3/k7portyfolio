import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { usePortfolio } from '../context/PortfolioContext';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline = () => {
  const { portfolioData } = usePortfolio();
  const experience = portfolioData.experience || {};
  const theme = portfolioData.theme || {};
  const primaryColor = theme.primaryColor || "#4F46E5";
  const secondaryColor = theme.secondaryColor || "#9333EA";

  const config = portfolioData.sections?.find(s => s.id === 'experience') || {};
  const preset = config.preset || "preset1";

  const items = experience.items || [];

  /* =========================================================================
     PRESET 1: Vertical Connected Timeline (Classic Resume)
     ========================================================================= */
  if (preset === 'preset1') {
    return (
      <section id="experience" className="py-16 sm:py-24">
        <SectionWrapper sectionId="experience" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="font-bold text-xs uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
              {experience.badge || "Career Journey"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              {experience.title || "Work Experience"}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              {experience.subtitle}
            </p>
          </div>

          <div className="relative border-l-2 border-indigo-100 ml-4 sm:ml-32 space-y-12">
            {items.map((item, idx) => (
              <div key={item.id || idx} className="relative pl-8 sm:pl-12 group">
                {/* Node circle */}
                <div 
                  className="w-5 h-5 rounded-full absolute -left-[11px] top-1.5 border-4 border-white transition-transform group-hover:scale-125"
                  style={{ backgroundColor: primaryColor }}
                />

                {/* Period on mobile/tablet or absolute on desktop */}
                <span className="sm:absolute sm:-left-36 sm:top-1 font-mono text-xs font-bold text-slate-400 block mb-2 sm:mb-0">
                  {item.period}
                </span>

                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 mb-3">
                    <h3 className="text-xl font-bold text-slate-900">{item.role}</h3>
                    <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{item.company}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {(item.skills || []).map((sk, sIdx) => (
                      <span key={sIdx} className="px-2.5 py-1 rounded-md bg-slate-50 text-[11px] font-medium text-slate-600 border border-slate-100">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 2: Clean Split Cards
     ========================================================================= */
  if (preset === 'preset2') {
    return (
      <section id="experience" className="py-16 sm:py-24 bg-slate-50/50">
        <SectionWrapper sectionId="experience" className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-14 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
                {experience.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{experience.title}</h2>
            </div>
            <span className="text-xs text-slate-400 font-mono">3+ Years of Proven Impact</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item, idx) => (
              <div key={item.id || idx} className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-600 block w-max mb-4">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{item.role}</h3>
                  <div className="text-xs font-semibold text-indigo-600 mb-4">{item.company}</div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">{item.description}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {(item.skills || []).map((sk, sIdx) => (
                    <span key={sIdx} className="text-[10px] bg-slate-50 px-2 py-0.5 rounded text-slate-700">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 3: Bento Company Badges
     ========================================================================= */
  if (preset === 'preset3') {
    return (
      <section id="experience" className="py-16 sm:py-24">
        <SectionWrapper sectionId="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
              {experience.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{experience.title}</h2>
          </div>

          <div className="space-y-4">
            {items.map((item, idx) => (
              <div key={item.id || idx} className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-slate-200 transition-all">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-slate-900">{item.role}</h3>
                    <span className="text-xs font-semibold px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full">{item.company}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
                <div className="flex-shrink-0 text-left md:text-right">
                  <div className="font-mono text-sm font-bold text-slate-800">{item.period}</div>
                  <span className="text-xs text-slate-400">{item.location || "Remote"}</span>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 4: Minimalist Compact Table
     ========================================================================= */
  if (preset === 'preset4') {
    return (
      <section id="experience" className="py-20 sm:py-28 border-y border-slate-100">
        <SectionWrapper sectionId="experience" className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-xl mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-2">{experience.badge}</span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">{experience.title}</h2>
          </div>

          <div className="divide-y divide-slate-200">
            {items.map((item, idx) => (
              <div key={item.id || idx} className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-3 font-mono text-xs font-bold text-slate-400">
                  {item.period}
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-lg font-bold text-slate-900">{item.role}</h3>
                  <div className="text-xs font-semibold text-indigo-600">{item.company}</div>
                </div>
                <div className="md:col-span-5 text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 5: Dual Column Milestone Cards
     ========================================================================= */
  return (
    <section id="experience" className="py-16 sm:py-24">
      <SectionWrapper sectionId="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
            {experience.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{experience.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <div key={item.id || idx} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-indigo-600">{item.period}</span>
                  <span className="text-xs text-slate-400">{item.company}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.role}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{item.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                {(item.skills || []).map((sk, sIdx) => (
                  <span key={sIdx} className="px-2.5 py-1 bg-slate-50 text-[11px] font-medium text-slate-600 rounded">
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default ExperienceTimeline;

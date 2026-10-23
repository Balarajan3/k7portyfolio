import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { usePortfolio } from '../context/PortfolioContext';
import { Award, Trophy, Medal, Sparkles, CheckCircle2 } from 'lucide-react';

export const Awards = () => {
  const { portfolioData } = usePortfolio();
  const awards = portfolioData.awards || {};
  const theme = portfolioData.theme || {};
  const primaryColor = theme.primaryColor || "#4F46E5";
  const secondaryColor = theme.secondaryColor || "#9333EA";

  const config = portfolioData.sections?.find(s => s.id === 'awards') || {};
  const preset = config.preset || "preset1";

  const items = awards.items || [];

  /* =========================================================================
     PRESET 1: Minimal Award Row List (Original)
     ========================================================================= */
  if (preset === 'preset1') {
    return (
      <section id="awards" className="py-16 sm:py-24 border-t border-slate-100">
        <SectionWrapper sectionId="awards" className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="font-bold text-xs uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
              {awards.badge || "Recognition & Honors"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              {awards.title || "Awards & Certifications"}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              {awards.subtitle}
            </p>
          </div>

          <div className="divide-y divide-slate-100 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm">
            {items.map((item, idx) => (
              <div key={idx} className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                <div className="flex items-start sm:items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                  >
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{item.organization} • {item.description}</p>
                  </div>
                </div>
                <div className="font-mono text-xs sm:text-sm font-bold text-slate-400 sm:text-right pl-16 sm:pl-0">
                  {item.year}
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 2: Trophy Showcase Badges
     ========================================================================= */
  if (preset === 'preset2') {
    return (
      <section id="awards" className="py-16 sm:py-24 bg-slate-50/50">
        <SectionWrapper sectionId="awards" className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>{awards.badge}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{awards.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm text-center flex flex-col items-center justify-between">
                <div>
                  <div 
                    className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-white shadow-md"
                    style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
                  >
                    <Award className="w-8 h-8" />
                  </div>
                  <span className="font-mono text-xs font-bold text-indigo-600 block mb-2">{item.year}</span>
                  <h4 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h4>
                  <div className="text-xs font-semibold text-slate-400 mb-4">{item.organization}</div>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 3: Timeline of Recognition
     ========================================================================= */
  if (preset === 'preset3') {
    return (
      <section id="awards" className="py-16 sm:py-24">
        <SectionWrapper sectionId="awards" className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>{awards.badge}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{awards.title}</h2>
          </div>

          <div className="relative border-l-2 border-indigo-100 ml-6 sm:ml-24 space-y-8">
            {items.map((item, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10">
                <div className="w-4 h-4 rounded-full bg-indigo-600 absolute -left-[9px] top-1.5 border-2 border-white" />
                <span className="sm:absolute sm:-left-24 sm:top-1 font-mono text-xs font-bold text-slate-400 block mb-1 sm:mb-0">{item.year}</span>
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-base text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">{item.organization} — {item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 4: Dark Studio Honors
     ========================================================================= */
  if (preset === 'preset4') {
    return (
      <section id="awards" className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden">
        <SectionWrapper sectionId="awards" className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/80 border border-indigo-800 px-3 py-1 rounded-full inline-block mb-4">
            {awards.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mb-14 tracking-tight">{awards.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {items.map((item, idx) => (
              <div key={idx} className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
                <div>
                  <Medal className="w-8 h-8 text-indigo-400 mb-4" />
                  <span className="font-mono text-xs text-slate-400">{item.year}</span>
                  <h4 className="font-bold text-base text-white mt-1 mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 5: Bento Credentials Matrix
     ========================================================================= */
  return (
    <section id="awards" className="py-16 sm:py-24">
      <SectionWrapper sectionId="awards" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>{awards.badge}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{awards.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="p-7 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-slate-50 text-xs font-mono font-bold text-slate-600">{item.year}</span>
                  <Trophy className="w-5 h-5 text-amber-500" />
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h4>
                <div className="text-xs font-semibold text-indigo-600 mb-3">{item.organization}</div>
                <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Awards;

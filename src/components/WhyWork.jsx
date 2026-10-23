import React from 'react';
import { Check, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
import { usePortfolio } from '../context/PortfolioContext';

const WhyWork = () => {
  const { portfolioData } = usePortfolio();
  const whyWork = portfolioData.whyWork || {};
  const theme = portfolioData.theme || {};
  const primaryColor = theme.primaryColor || "#4F46E5";
  const secondaryColor = theme.secondaryColor || "#9333EA";

  const whyWorkConfig = portfolioData.sections?.find(s => s.id === 'whywork') || {};
  const preset = whyWorkConfig.preset || "preset1";

  const reasons = whyWork.reasons || [
    "User-first design mindset",
    "Experience handling projects end-to-end",
    "Strong understanding of real product constraints",
    "Clean, consistent, and developer-friendly designs",
    "Clear communication and ownership"
  ];

  /* =========================================================================
     PRESET 1: Checkmark 2-Column Grid (Original)
     ========================================================================= */
  if (preset === 'preset1') {
    return (
      <section className="py-16 sm:py-24">
        <SectionWrapper sectionId="whywork" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <span 
            className="font-medium text-xs sm:text-sm tracking-wide uppercase mb-2 block"
            style={{ color: primaryColor }}
          >
            {whyWork.badge || "The advantage"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
            {whyWork.title || "Why Work With Me"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className={`bg-[#F8FAFC] p-5 sm:p-6 rounded-2xl flex items-center gap-4 text-left transition-all hover:shadow-sm border border-slate-50 ${
                  index === reasons.length - 1 ? 'md:col-span-2 md:w-2/3 md:mx-auto' : ''
                }`}
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                >
                  <Check className="w-5 h-5" strokeWidth={3} />
                </div>
                <span className="text-slate-700 font-medium text-base sm:text-lg">{reason}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 2: Numbered Value Pillars
     ========================================================================= */
  if (preset === 'preset2') {
    return (
      <section className="py-16 sm:py-24 bg-slate-50/50">
        <SectionWrapper sectionId="whywork" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
              {whyWork.badge || "The advantage"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              {whyWork.title || "Why Work With Me"}
            </h2>
          </div>

          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 flex items-center justify-between gap-4 hover:border-indigo-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="font-mono text-sm sm:text-base font-bold text-slate-300 group-hover:text-indigo-600 transition-colors">
                    0{index + 1}
                  </span>
                  <span className="text-slate-800 font-bold text-base sm:text-lg">{reason}</span>
                </div>
                <ShieldCheck className="w-5 h-5 text-slate-300 group-hover:text-emerald-500 transition-colors flex-shrink-0" />
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 3: Split Showcase with Highlight Callout
     ========================================================================= */
  if (preset === 'preset3') {
    return (
      <section className="py-16 sm:py-24">
        <SectionWrapper sectionId="whywork" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
                {whyWork.badge || "The advantage"}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                {whyWork.title || "Why Work With Me"}
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Combining high aesthetic sensibilities with structured engineering empathy to build high-converting, scalable digital products.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {reasons.map((reason, index) => (
                <div key={index} className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center gap-4">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-xs"
                    style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
                  >
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-slate-800 font-semibold text-sm sm:text-base">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 4: Dark Glass Luminous Banners
     ========================================================================= */
  if (preset === 'preset4') {
    return (
      <section className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden">
        <SectionWrapper sectionId="whywork" className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/80 border border-indigo-800 px-3 py-1 rounded-full inline-block mb-4">
            {whyWork.badge || "VALUE PROPOSITIONS"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mb-12 tracking-tight">
            {whyWork.title || "Why Work With Me"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-4 text-left"
              >
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}
                >
                  <Zap className="w-5 h-5 text-indigo-400" />
                </div>
                <span className="font-semibold text-slate-200 text-sm sm:text-base">{reason}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 5: Bento Advantage Matrix
     ========================================================================= */
  return (
    <section className="py-16 sm:py-24">
      <SectionWrapper sectionId="whywork" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
            {whyWork.badge || "The advantage"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {whyWork.title || "Why Work With Me"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className={`p-7 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between ${
                index === 0 ? 'md:col-span-2 bg-gradient-to-r from-slate-50 to-white' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-slate-400">Pillar #0{index + 1}</span>
                <Check className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">{reason}</h3>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default WhyWork;

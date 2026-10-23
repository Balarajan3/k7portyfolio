import React, { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { usePortfolio } from '../context/PortfolioContext';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const FAQ = () => {
  const { portfolioData } = usePortfolio();
  const faq = portfolioData.faq || {};
  const theme = portfolioData.theme || {};
  const primaryColor = theme.primaryColor || "#4F46E5";

  const config = portfolioData.sections?.find(s => s.id === 'faq') || {};
  const preset = config.preset || "preset1";

  const items = faq.items || [];
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  /* =========================================================================
     PRESET 1: Clean Accordion (Original)
     ========================================================================= */
  if (preset === 'preset1') {
    return (
      <section id="faq" className="py-16 sm:py-24 bg-slate-50/50">
        <SectionWrapper sectionId="faq" className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="font-bold text-xs uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
              {faq.badge || "Got Questions?"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              {faq.title || "Frequently Asked Questions"}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {faq.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {items.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden transition-all shadow-sm">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-slate-900 hover:text-indigo-600 transition-colors"
                  >
                    <span>{item.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-indigo-600' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 2: 2-Column Grid FAQ
     ========================================================================= */
  if (preset === 'preset2') {
    return (
      <section id="faq" className="py-16 sm:py-24">
        <SectionWrapper sectionId="faq" className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
              {faq.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{faq.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, idx) => (
              <div key={idx} className="p-7 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-3">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <h4 className="font-bold text-base text-slate-900">{item.q}</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">{item.a}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 3: Glassmorphic Q&A Cards
     ========================================================================= */
  if (preset === 'preset3') {
    return (
      <section id="faq" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
        <SectionWrapper sectionId="faq" className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>{faq.badge}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{faq.title}</h2>
          </div>

          <div className="space-y-4">
            {items.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-sm space-y-2">
                <h4 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 text-xs flex items-center justify-center font-mono">Q</span>
                  <span>{item.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">{item.a}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 4: Dark Studio FAQ
     ========================================================================= */
  if (preset === 'preset4') {
    return (
      <section id="faq" className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden">
        <SectionWrapper sectionId="faq" className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/80 border border-indigo-800 px-3 py-1 rounded-full inline-block mb-4">
            {faq.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mb-14 tracking-tight">{faq.title}</h2>

          <div className="space-y-4 text-left">
            {items.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white text-base"
                  >
                    <span>{item.q}</span>
                    <ChevronDown className={`w-5 h-5 text-indigo-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-4">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 5: Bento FAQ Layout
     ========================================================================= */
  return (
    <section id="faq" className="py-16 sm:py-24">
      <SectionWrapper sectionId="faq" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>{faq.badge}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{faq.title}</h2>
            <p className="text-slate-600 text-sm leading-relaxed">{faq.subtitle}</p>
            <div className="p-6 rounded-3xl bg-indigo-50 border border-indigo-100 space-y-2 mt-6">
              <MessageCircle className="w-6 h-6 text-indigo-600" />
              <h4 className="font-bold text-sm text-slate-900">Have a custom question?</h4>
              <p className="text-xs text-slate-600">Reach out directly via email or the contact section below.</p>
            </div>
          </div>

          <div className="md:col-span-7 space-y-3">
            {items.map((item, idx) => (
              <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-2">
                <h4 className="font-bold text-sm text-slate-900">{item.q}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default FAQ;

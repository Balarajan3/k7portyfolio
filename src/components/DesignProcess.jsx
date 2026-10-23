import React, { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { usePortfolio } from '../context/PortfolioContext';
import { Check, ArrowRight, Sparkles, Layers, Target, Eye, Wrench } from 'lucide-react';

export const DesignProcess = () => {
  const { portfolioData } = usePortfolio();
  const process = portfolioData.process || {};
  const theme = portfolioData.theme || {};
  const primaryColor = theme.primaryColor || "#4F46E5";
  const secondaryColor = theme.secondaryColor || "#9333EA";

  const config = portfolioData.sections?.find(s => s.id === 'process') || {};
  const preset = config.preset || "preset1";

  const steps = process.steps || [];
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  /* =========================================================================
     PRESET 1: Step-by-Step Stepper Cards (Connected flow)
     ========================================================================= */
  if (preset === 'preset1') {
    return (
      <section id="process" className="py-16 sm:py-24">
        <SectionWrapper sectionId="process" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="font-bold text-xs uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
              {process.badge || "How I Work"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              {process.title || "My 4-Step Design Methodology"}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {process.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div 
                key={idx}
                className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span 
                      className="font-mono text-2xl font-black bg-clip-text text-transparent"
                      style={{ backgroundImage: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
                    >
                      {st.step}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-xs text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {st.title}
                  </h3>

                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">Key Deliverables</span>
                  <div className="flex flex-wrap gap-1.5">
                    {(st.deliverables || []).map((del, dIdx) => (
                      <span key={dIdx} className="text-[11px] px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 font-medium border border-slate-100">
                        {del}
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
     PRESET 2: 4-Card Bento Workflow Grid
     ========================================================================= */
  if (preset === 'preset2') {
    return (
      <section id="process" className="py-16 sm:py-24 bg-slate-50/50">
        <SectionWrapper sectionId="process" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
              {process.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              {process.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((st, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-slate-100 font-mono text-xs font-bold text-slate-800">Phase {st.step}</span>
                    <h3 className="font-extrabold text-xl text-slate-900">{st.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{st.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                  {(st.deliverables || []).map((del, dIdx) => (
                    <span key={dIdx} className="text-xs px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg font-semibold">
                      ✓ {del}
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
     PRESET 3: Numbered Minimalist Grid
     ========================================================================= */
  if (preset === 'preset3') {
    return (
      <section id="process" className="py-20 sm:py-28 border-b border-slate-100">
        <SectionWrapper sectionId="process" className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-2">{process.badge}</span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">{process.title}</h2>
          </div>

          <div className="divide-y divide-slate-200">
            {steps.map((st, idx) => (
              <div key={idx} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-2 font-mono text-3xl font-bold text-slate-300">
                  {st.step}
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-xl font-bold text-slate-900">{st.title}</h3>
                </div>
                <div className="md:col-span-6 space-y-3">
                  <p className="text-slate-600 text-sm leading-relaxed">{st.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {(st.deliverables || []).map((d, dIdx) => (
                      <span key={dIdx} className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        #{d}
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
     PRESET 4: Interactive Tab Process
     ========================================================================= */
  if (preset === 'preset4') {
    const activeStep = steps[activeTabIdx] || steps[0];

    return (
      <section id="process" className="py-16 sm:py-24 bg-white">
        <SectionWrapper sectionId="process" className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
              {process.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{process.title}</h2>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {steps.map((st, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTabIdx(idx)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  activeTabIdx === idx
                    ? 'border-indigo-600 bg-indigo-50/70 shadow-sm'
                    : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100'
                }`}
              >
                <div className="font-mono text-xs font-bold text-slate-400 mb-1">Step {st.step}</div>
                <div className="font-bold text-xs sm:text-sm text-slate-900 truncate">{st.title}</div>
              </button>
            ))}
          </div>

          {/* Active Detail Display */}
          {activeStep && (
            <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200/80 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <span className="font-mono text-sm font-bold text-indigo-600">Phase {activeStep.step}</span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">{activeStep.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed">{activeStep.desc}</p>
              </div>
              <div className="md:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Deliverables</span>
                {(activeStep.deliverables || []).map((d, dIdx) => (
                  <div key={dIdx} className="text-xs font-semibold text-slate-800 flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 5: Circular Flow Graphic
     ========================================================================= */
  return (
    <section id="process" className="py-16 sm:py-24">
      <SectionWrapper sectionId="process" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
            {process.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {process.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm text-center flex flex-col items-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center font-mono font-black text-xl text-white mb-6 shadow-md"
                style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
              >
                {st.step}
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">{st.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">{st.desc}</p>
              <div className="mt-auto w-full pt-4 border-t border-slate-100 flex flex-wrap justify-center gap-1">
                {(st.deliverables || []).map((d, dIdx) => (
                  <span key={dIdx} className="text-[10px] bg-slate-50 px-2 py-0.5 rounded text-slate-600">
                    {d}
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

export default DesignProcess;

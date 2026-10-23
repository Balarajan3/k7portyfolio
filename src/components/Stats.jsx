import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { usePortfolio } from '../context/PortfolioContext';
import DynamicIcon from './DynamicIcon';

const Stats = () => {
  const { portfolioData } = usePortfolio();
  const stats = portfolioData.stats || [];
  const theme = portfolioData.theme || {};
  const primaryColor = theme.primaryColor || "#4F46E5";
  const secondaryColor = theme.secondaryColor || "#9333EA";

  const statsConfig = portfolioData.sections?.find(s => s.id === 'stats') || {};
  const preset = statsConfig.preset || "preset1";

  if (!stats || stats.length === 0) return null;

  /* =========================================================================
     PRESET 1: Minimal 3 Elevated Cards
     ========================================================================= */
  if (preset === 'preset1') {
    return (
      <section className="py-14 sm:py-20">
        <SectionWrapper sectionId="stats" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.id || index} 
                className="bg-white p-7 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center border border-slate-50"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform hover:scale-105"
                  style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                >
                  <DynamicIcon name={stat.icon} className="w-6 h-6" style={{ color: primaryColor }} />
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl sm:text-4xl font-bold text-slate-900">{stat.value}</span>
                  <span className="text-base sm:text-lg font-medium text-slate-600">{stat.label}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 2: Horizontal Sleek Glass Strip
     ========================================================================= */
  if (preset === 'preset2') {
    return (
      <section className="py-12 sm:py-16">
        <SectionWrapper sectionId="stats" className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200/80 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {stats.map((stat, index) => (
              <div key={stat.id || index} className="p-4 sm:p-6 flex items-center gap-5 justify-center sm:justify-start">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                >
                  <DynamicIcon name={stat.icon} className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                    {stat.value} <span className="text-sm font-semibold text-slate-500">{stat.label}</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">{stat.sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 3: Gradient Glowing Ring Metrics
     ========================================================================= */
  if (preset === 'preset3') {
    return (
      <section className="py-16 sm:py-20">
        <SectionWrapper sectionId="stats" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.id || index} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
                <div 
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center p-1 transition-transform group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
                >
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                    <DynamicIcon name={stat.icon} className="w-7 h-7" style={{ color: primaryColor }} />
                  </div>
                </div>
                <div className="text-center">
                  <div 
                    className="text-4xl font-extrabold bg-clip-text text-transparent mb-1"
                    style={{ backgroundImage: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-bold text-slate-800 text-base mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-400">{stat.sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 4: Dark High-Impact Counter Bar
     ========================================================================= */
  if (preset === 'preset4') {
    return (
      <section className="py-14 sm:py-18">
        <SectionWrapper sectionId="stats" className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {stats.map((stat, index) => (
              <div key={stat.id || index} className="pt-6 md:pt-0">
                <div className="text-xs uppercase font-mono tracking-widest text-slate-400 mb-2">
                  {stat.sublabel}
                </div>
                <div 
                  className="text-4xl sm:text-5xl font-black mb-1 bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 5: Bento Micro-Metrics
     ========================================================================= */
  return (
    <section className="py-14 sm:py-20">
      <SectionWrapper sectionId="stats" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((stat, index) => (
            <div 
              key={stat.id || index}
              className="p-6 rounded-2xl bg-white border border-slate-200/70 shadow-sm flex items-start justify-between gap-4 transition-all hover:border-slate-300"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Metric #{index + 1}
                </span>
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-3xl font-black text-slate-900">{stat.value}</span>
                  <span className="text-sm font-bold text-slate-700">{stat.label}</span>
                </div>
                <p className="text-xs text-slate-500">{stat.sublabel}</p>
              </div>

              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
              >
                <DynamicIcon name={stat.icon} className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Stats;

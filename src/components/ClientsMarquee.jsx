import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { usePortfolio } from '../context/PortfolioContext';
import DynamicIcon from './DynamicIcon';
import { Sparkles } from 'lucide-react';

export const ClientsMarquee = () => {
  const { portfolioData } = usePortfolio();
  const clients = portfolioData.clients || {};
  const theme = portfolioData.theme || {};
  const primaryColor = theme.primaryColor || "#4F46E5";

  const config = portfolioData.sections?.find(s => s.id === 'clients') || {};
  const preset = config.preset || "preset1";

  const logos = clients.logos || [];

  /* =========================================================================
     PRESET 1: Smooth Infinite Scrolling Marquee
     ========================================================================= */
  if (preset === 'preset1') {
    return (
      <section className="py-12 sm:py-16 border-y border-slate-100 bg-white overflow-hidden">
        <SectionWrapper sectionId="clients" className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 text-center">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
            {clients.badge || "Trusted By High-Growth Teams & Startups"}
          </span>
        </SectionWrapper>

        {/* Marquee Track */}
        <div className="relative w-full flex overflow-x-hidden">
          <div className="flex items-center gap-10 sm:gap-16 animate-marquee whitespace-nowrap py-2">
            {[...logos, ...logos, ...logos].map((logo, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-200 group-hover:border-indigo-300">
                  <DynamicIcon name={logo.icon} className="w-4 h-4 text-slate-700 group-hover:text-indigo-600" />
                </div>
                <span className="font-extrabold text-sm sm:text-base text-slate-800 tracking-tight">{logo.name}</span>
                <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">({logo.role})</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* =========================================================================
     PRESET 2: Clean Static Grid
     ========================================================================= */
  if (preset === 'preset2') {
    return (
      <section className="py-14 sm:py-18 bg-slate-50/50">
        <SectionWrapper sectionId="clients" className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
            {clients.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-10">
            {clients.title}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {logos.map((logo, idx) => (
              <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-center justify-center gap-2 hover:border-indigo-400 hover:shadow-md transition-all">
                <DynamicIcon name={logo.icon} className="w-6 h-6 text-slate-700" />
                <span className="font-bold text-sm text-slate-900">{logo.name}</span>
                <span className="text-[11px] text-slate-400 font-medium">{logo.role}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 3: Glass Floating Badges
     ========================================================================= */
  if (preset === 'preset3') {
    return (
      <section className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
        <SectionWrapper sectionId="clients" className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white shadow-sm border border-slate-200 text-xs font-semibold text-slate-700 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>{clients.badge}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {logos.map((logo, idx) => (
              <div key={idx} className="px-5 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-sm flex items-center gap-3 hover:scale-105 transition-transform">
                <DynamicIcon name={logo.icon} className="w-4 h-4 text-indigo-600" />
                <span className="font-bold text-xs sm:text-sm text-slate-800">{logo.name}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 4: Dark Monochromatic Ribbon
     ========================================================================= */
  if (preset === 'preset4') {
    return (
      <section className="py-14 sm:py-18 bg-slate-950 text-white border-y border-slate-800">
        <SectionWrapper sectionId="clients" className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-6">
            {clients.badge}
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
            {logos.map((logo, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <DynamicIcon name={logo.icon} className="w-6 h-6" />
                <span className="text-xs font-semibold">{logo.name}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 5: Bento Partner Tiles
     ========================================================================= */
  return (
    <section className="py-14 sm:py-20">
      <SectionWrapper sectionId="clients" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 block mb-1">{clients.badge}</span>
              <h3 className="text-xl font-bold text-slate-900">{clients.title}</h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">Fintech • SaaS • HealthTech</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {logos.map((logo, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center gap-3">
                <DynamicIcon name={logo.icon} className="w-5 h-5 text-indigo-600" />
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-slate-800 truncate">{logo.name}</div>
                  <div className="text-[10px] text-slate-400 truncate">{logo.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default ClientsMarquee;

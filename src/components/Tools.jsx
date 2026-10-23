import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { usePortfolio } from '../context/PortfolioContext';
import DynamicIcon from './DynamicIcon';
import { Wrench } from 'lucide-react';

const Tools = () => {
  const { portfolioData } = usePortfolio();
  const toolsSection = portfolioData.tools || {};
  const theme = portfolioData.theme || {};
  const primaryColor = theme.primaryColor || "#4F46E5";
  const secondaryColor = theme.secondaryColor || "#9333EA";

  const toolsConfig = portfolioData.sections?.find(s => s.id === 'tools') || {};
  const preset = toolsConfig.preset || "preset1";

  const categories = toolsSection.categories || [];
  const allTools = categories.flatMap(c => c.tools || []);

  /* =========================================================================
     PRESET 1: Categorized Card Grid (Original)
     ========================================================================= */
  if (preset === 'preset1') {
    return (
      <section className="py-16 sm:py-24">
        <SectionWrapper sectionId="tools" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <span 
            className="font-medium text-xs sm:text-sm tracking-wide uppercase mb-2 block"
            style={{ color: primaryColor }}
          >
            {toolsSection.badge || "My toolkit"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-16">
            {toolsSection.title || "Tools I Use"}
          </h2>

          <div className="space-y-16">
            {categories.map((category, idx) => (
              <div key={category.id || idx}>
                <h3 className="text-base sm:text-lg font-semibold text-slate-700 mb-8">{category.title}</h3>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
                  {(category.tools || []).map((tool, index) => (
                    <div key={index} className="flex flex-col items-center gap-3 group">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center border border-slate-100 group-hover:scale-105">
                        <DynamicIcon 
                          name={tool.icon || tool.name} 
                          className="w-7 h-7 sm:w-8 sm:h-8"
                          style={{ color: tool.color || primaryColor }}
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-600">{tool.name}</span>
                    </div>
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
     PRESET 2: Unified Interactive Badge Cloud
     ========================================================================= */
  if (preset === 'preset2') {
    return (
      <section className="py-16 sm:py-24 bg-slate-50/50">
        <SectionWrapper sectionId="tools" className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
            {toolsSection.badge || "My toolkit"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
            {toolsSection.title || "Tools & Software Stack"}
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto mb-12">
            The core creative suite, artificial intelligence frameworks, and collaboration tooling powering my workflow.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {allTools.map((tool, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 px-5 py-3.5 bg-white rounded-2xl shadow-sm border border-slate-200/80 hover:border-indigo-400 hover:shadow-md transition-all group"
              >
                <div className="transition-transform group-hover:scale-110">
                  <DynamicIcon name={tool.icon || tool.name} className="w-5 h-5" style={{ color: tool.color || primaryColor }} />
                </div>
                <span className="font-semibold text-xs sm:text-sm text-slate-800">{tool.name}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 3: Minimalist Chip Matrix
     ========================================================================= */
  if (preset === 'preset3') {
    return (
      <section className="py-16 sm:py-24 border-b border-slate-100">
        <SectionWrapper sectionId="tools" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: primaryColor }}>
                {toolsSection.badge || "My toolkit"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
                {toolsSection.title || "Tools I Use"}
              </h2>
            </div>
            <span className="text-xs text-slate-400 font-mono">Modern Design & AI Stack</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {allTools.map((tool, idx) => (
              <div key={idx} className="p-4 bg-white rounded-xl border border-slate-200 text-center flex flex-col items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
                <DynamicIcon name={tool.icon || tool.name} className="w-6 h-6" style={{ color: tool.color || primaryColor }} />
                <span className="text-xs font-bold text-slate-700 truncate w-full">{tool.name}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 4: Dark Neon Studio Matrix
     ========================================================================= */
  if (preset === 'preset4') {
    return (
      <section className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden">
        <SectionWrapper sectionId="tools" className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/80 border border-indigo-800 px-3 py-1 rounded-full inline-block mb-4">
            {toolsSection.badge || "TECH ARSENAL"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mb-14 tracking-tight">
            {toolsSection.title || "Tools I Use"}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {allTools.map((tool, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 transition-all flex flex-col items-center gap-3">
                <DynamicIcon name={tool.icon || tool.name} className="w-8 h-8" style={{ color: tool.color || primaryColor }} />
                <span className="text-xs font-bold text-slate-300">{tool.name}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 5: Bento Toolkit Showcase
     ========================================================================= */
  return (
    <section className="py-16 sm:py-24">
      <SectionWrapper sectionId="tools" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
            {toolsSection.badge || "My toolkit"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {toolsSection.title || "Tools I Use"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
                  <h3 className="font-bold text-slate-900 text-base">{cat.title}</h3>
                  <span className="text-xs text-slate-400 font-mono">{(cat.tools || []).length} tools</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {(cat.tools || []).map((t, tIdx) => (
                    <div key={tIdx} className="p-3 rounded-xl bg-slate-50 flex items-center gap-2.5">
                      <DynamicIcon name={t.icon || t.name} className="w-5 h-5 flex-shrink-0" style={{ color: t.color || primaryColor }} />
                      <span className="text-xs font-semibold text-slate-700 truncate">{t.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Tools;

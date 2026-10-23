import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { usePortfolio } from '../context/PortfolioContext';
import { Star, Quote, Sparkles } from 'lucide-react';

export const Testimonials = () => {
  const { portfolioData } = usePortfolio();
  const testimonials = portfolioData.testimonials || {};
  const theme = portfolioData.theme || {};
  const primaryColor = theme.primaryColor || "#4F46E5";
  const secondaryColor = theme.secondaryColor || "#9333EA";

  const config = portfolioData.sections?.find(s => s.id === 'testimonials') || {};
  const preset = config.preset || "preset1";

  const items = testimonials.items || [];

  /* =========================================================================
     PRESET 1: 3-Column Review Cards (Original)
     ========================================================================= */
  if (preset === 'preset1') {
    return (
      <section id="testimonials" className="py-16 sm:py-24 bg-slate-50/50">
        <SectionWrapper sectionId="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="font-bold text-xs uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
              {testimonials.badge || "Social Proof"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              {testimonials.title || "What Clients & Teams Say"}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {items.map((item, idx) => (
              <div 
                key={item.id || idx}
                className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed mb-6 italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <img src={item.avatar} alt={item.name} className="w-11 h-11 rounded-full object-cover border border-slate-200" />
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{item.name}</h4>
                    <p className="text-[11px] text-slate-400">{item.role}, {item.company}</p>
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
     PRESET 2: Full-Width Flagship Endorsement
     ========================================================================= */
  if (preset === 'preset2') {
    const featured = items[0] || {};
    return (
      <section id="testimonials" className="py-20 sm:py-28 relative overflow-hidden bg-white">
        <SectionWrapper sectionId="testimonials" className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Quote className="w-12 h-12 text-indigo-300 mx-auto mb-8" />
          <p className="text-2xl sm:text-3xl font-medium text-slate-800 leading-relaxed mb-8">
            "{featured.quote}"
          </p>
          <div className="flex items-center justify-center gap-3">
            <img src={featured.avatar} alt={featured.name} className="w-12 h-12 rounded-full object-cover shadow-md" />
            <div className="text-left">
              <h4 className="font-bold text-base text-slate-900">{featured.name}</h4>
              <p className="text-xs text-slate-500">{featured.role} • {featured.company}</p>
            </div>
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 3: Masonry Wall of Love
     ========================================================================= */
  if (preset === 'preset3') {
    return (
      <section id="testimonials" className="py-16 sm:py-24">
        <SectionWrapper sectionId="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
              {testimonials.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{testimonials.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, idx) => (
              <div key={item.id || idx} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">{item.name}</h4>
                    <span className="text-[10px] text-slate-400">{item.company}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">"{item.quote}"</p>
              </div>
            ))}
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
      <section id="testimonials" className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden">
        <SectionWrapper sectionId="testimonials" className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/80 border border-indigo-800 px-3 py-1 rounded-full inline-block mb-6">
            {testimonials.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mb-14 tracking-tight">{testimonials.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {items.map((item, idx) => (
              <div key={item.id || idx} className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">"{item.quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-xs text-white">{item.name}</h4>
                    <p className="text-[10px] text-slate-400">{item.role}</p>
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
     PRESET 5: Bento Review Matrix
     ========================================================================= */
  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <SectionWrapper sectionId="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
            {testimonials.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{testimonials.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div 
              key={item.id || idx} 
              className={`p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between ${
                idx === 0 ? 'md:col-span-2 bg-gradient-to-br from-white to-indigo-50/30' : ''
              }`}
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img src={item.avatar} alt={item.name} className="w-11 h-11 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-400">{item.role} • {item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Testimonials;

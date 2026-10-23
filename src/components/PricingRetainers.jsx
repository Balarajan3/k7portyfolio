import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { usePortfolio } from '../context/PortfolioContext';
import { Check, Sparkles, Zap, ArrowRight } from 'lucide-react';
import DynamicButton from './DynamicButton';

export const PricingRetainers = () => {
  const { portfolioData } = usePortfolio();
  const pricing = portfolioData.pricing || {};
  const theme = portfolioData.theme || {};
  const primaryColor = theme.primaryColor || "#4F46E5";
  const secondaryColor = theme.secondaryColor || "#9333EA";

  const config = portfolioData.sections?.find(s => s.id === 'pricing') || {};
  const preset = config.preset || "preset1";

  const plans = pricing.plans || [];

  /* =========================================================================
     PRESET 1: 3-Tier Modern Cards with Popular Glow
     ========================================================================= */
  if (preset === 'preset1') {
    return (
      <section id="pricing" className="py-16 sm:py-24">
        <SectionWrapper sectionId="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="font-bold text-xs uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
              {pricing.badge || "Investment & Retainers"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              {pricing.title || "Transparent Design Packages"}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {pricing.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, idx) => (
              <div 
                key={plan.id || idx}
                className={`rounded-[2.5rem] p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'bg-white border-2 shadow-2xl scale-105 z-10'
                    : 'bg-white border border-slate-200/90 shadow-sm hover:shadow-lg'
                }`}
                style={plan.popular ? { borderColor: primaryColor } : {}}
              >
                {plan.popular && (
                  <div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-xs font-bold shadow-md flex items-center gap-1.5"
                    style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
                  >
                    <Sparkles className="w-3.5 h-3.5" /> Most Popular
                  </div>
                )}

                <div>
                  <h3 className="font-extrabold text-xl text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">{plan.description}</p>
                  
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl sm:text-5xl font-black text-slate-900">{plan.price}</span>
                    <span className="text-xs font-semibold text-slate-400">/{plan.period}</span>
                  </div>

                  <div className="space-y-3 mb-8">
                    {(plan.features || []).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <DynamicButton
                  label={plan.cta || "Get Started"}
                  route="#contact"
                  type="route"
                  variant={plan.popular ? "primary" : "outline"}
                  icon="ArrowRight"
                  iconPosition="suffix"
                  className="w-full py-3.5 text-sm"
                />
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 2: Minimal Toggle Cards
     ========================================================================= */
  if (preset === 'preset2') {
    return (
      <section id="pricing" className="py-16 sm:py-24 bg-slate-50/50">
        <SectionWrapper sectionId="pricing" className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
              {pricing.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{pricing.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((p, idx) => (
              <div key={idx} className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-lg text-slate-900">{p.name}</h4>
                  <div className="text-3xl font-black text-slate-900 my-4">{p.price}</div>
                  <p className="text-xs text-slate-500 mb-6">{p.description}</p>
                  <div className="space-y-2 mb-6">
                    {(p.features || []).map((f, fIdx) => (
                      <div key={fIdx} className="text-xs text-slate-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <DynamicButton label={p.cta || "Choose Plan"} route="#contact" type="route" variant="outline" className="w-full py-2.5 text-xs" />
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 3: Bento Pricing Tiles
     ========================================================================= */
  if (preset === 'preset3') {
    return (
      <section id="pricing" className="py-16 sm:py-24">
        <SectionWrapper sectionId="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
              {pricing.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{pricing.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((p, idx) => (
              <div key={idx} className={`p-8 rounded-3xl border transition-all flex flex-col justify-between ${idx === 1 ? 'md:col-span-1 bg-gradient-to-b from-indigo-50/50 to-white border-indigo-300 shadow-md' : 'bg-white border-slate-100 shadow-sm'}`}>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Option 0{idx + 1}</span>
                  <h3 className="text-2xl font-black text-slate-900 mt-1 mb-2">{p.name}</h3>
                  <div className="text-4xl font-black text-indigo-600 mb-4">{p.price}</div>
                  <p className="text-xs text-slate-500 mb-6">{p.description}</p>
                </div>
                <DynamicButton label={p.cta || "Select Package"} route="#contact" type="route" variant="primary" className="w-full py-3 text-xs" />
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 4: Dark Studio Retainer Cards
     ========================================================================= */
  if (preset === 'preset4') {
    return (
      <section id="pricing" className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden">
        <SectionWrapper sectionId="pricing" className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/80 border border-indigo-800 px-3 py-1 rounded-full inline-block mb-4">
            {pricing.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mb-14 tracking-tight">{pricing.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {plans.map((p, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{p.name}</h3>
                  <div className="text-3xl font-black text-indigo-400 mb-4">{p.price}</div>
                  <p className="text-xs text-slate-400 mb-6">{p.description}</p>
                </div>
                <DynamicButton label={p.cta || "Inquire"} route="#contact" type="route" variant="primary" className="w-full py-3 text-xs" />
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 5: Single All-Inclusive Retainer Spotlight
     ========================================================================= */
  const heroPlan = plans[1] || plans[0] || {};
  return (
    <section id="pricing" className="py-16 sm:py-24">
      <SectionWrapper sectionId="pricing" className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-14 rounded-[3rem] bg-white border border-slate-200/90 shadow-2xl text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-600 inline-block">
            {pricing.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{heroPlan.name}</h2>
          <div className="text-5xl sm:text-6xl font-black text-slate-900">
            {heroPlan.price} <span className="text-sm font-semibold text-slate-400">/{heroPlan.period}</span>
          </div>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">{heroPlan.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto text-left pt-4">
            {(heroPlan.features || []).map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>{f}</span>
              </div>
            ))}
          </div>
          <div className="pt-6">
            <DynamicButton label={heroPlan.cta || "Book Project"} route="#contact" type="route" variant="primary" className="px-10 py-4 text-base" />
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default PricingRetainers;

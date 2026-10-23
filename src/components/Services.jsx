import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { usePortfolio } from '../context/PortfolioContext';
import DynamicIcon from './DynamicIcon';
import { ArrowUpRight } from 'lucide-react';

const Services = () => {
  const { portfolioData } = usePortfolio();
  const services = portfolioData.services || {};
  const theme = portfolioData.theme || {};
  const primaryColor = theme.primaryColor || "#4F46E5";
  const secondaryColor = theme.secondaryColor || "#9333EA";

  const servicesConfig = portfolioData.sections?.find(s => s.id === 'services') || {};
  const preset = servicesConfig.preset || "preset1";

  const list = services.list || [];

  /* =========================================================================
     PRESET 1: Clean 3-Card Grid (Original)
     ========================================================================= */
  if (preset === 'preset1') {
    return (
      <section id="services" className="py-16 sm:py-24">
        <SectionWrapper sectionId="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <span 
              className="font-medium text-xs sm:text-sm tracking-wide uppercase mb-2 block"
              style={{ color: primaryColor }}
            >
              {services.badge || "My expertise"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              {services.title || "What I Do"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {list.map((service, index) => (
              <div 
                key={service.id || index} 
                className="bg-white p-7 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                  >
                    <DynamicIcon name={service.icon} className="w-6 h-6" style={{ color: primaryColor }} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-6">
                    {service.title}
                  </h3>

                  <ul className="space-y-3">
                    {(service.items || []).map((item, idx) => (
                      <li key={idx} className="flex items-center text-slate-600 text-sm sm:text-[15px]">
                        <span 
                          className="w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0"
                          style={{ backgroundColor: primaryColor }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 2: Interactive Focus Cards with Action Arrows
     ========================================================================= */
  if (preset === 'preset2') {
    return (
      <section id="services" className="py-16 sm:py-24 bg-slate-50/50">
        <SectionWrapper sectionId="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-14 gap-4">
            <div>
              <span className="font-bold text-xs uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
                {services.badge || "My expertise"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                {services.title || "What I Do"}
              </h2>
            </div>
            <p className="text-slate-500 text-sm max-w-md">
              End-to-end design solutions from initial user research through high-fidelity interactive prototypes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {list.map((service, index) => (
              <div 
                key={service.id || index}
                className="bg-white p-8 rounded-3xl border border-slate-200/80 hover:border-indigo-400 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                    >
                      <DynamicIcon name={service.icon} className="w-6 h-6" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-600 transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {(service.items || []).map((item, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-50 rounded-lg text-xs font-medium text-slate-600 border border-slate-100">
                        {item}
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
     PRESET 3: Horizontal Numbered Rows (Agency Style)
     ========================================================================= */
  if (preset === 'preset3') {
    return (
      <section id="services" className="py-20 sm:py-28 border-y border-slate-100">
        <SectionWrapper sectionId="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-2">
              {services.badge || "Capabilities"}
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              {services.title || "What I Do"}
            </h2>
          </div>

          <div className="divide-y divide-slate-200">
            {list.map((service, index) => (
              <div key={service.id || index} className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group">
                <div className="md:col-span-2 font-mono text-2xl font-bold text-slate-300 group-hover:text-indigo-600 transition-colors">
                  0{index + 1}
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                </div>
                <div className="md:col-span-6 flex flex-wrap gap-2.5">
                  {(service.items || []).map((item, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                      {item}
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
     PRESET 4: Luminous Gradient Glass Cards
     ========================================================================= */
  if (preset === 'preset4') {
    return (
      <section id="services" className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
        <SectionWrapper sectionId="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
              {services.badge || "My expertise"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              {services.title || "What I Do"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {list.map((service, index) => (
              <div 
                key={service.id || index}
                className="p-8 rounded-3xl bg-white/80 backdrop-blur-xl shadow-lg border border-slate-100 relative group overflow-hidden"
              >
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})` }}
                />

                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white shadow-md"
                  style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
                >
                  <DynamicIcon name={service.icon} className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-6">{service.title}</h3>

                <ul className="space-y-3">
                  {(service.items || []).map((item, idx) => (
                    <li key={idx} className="flex items-center text-slate-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full mr-3" style={{ backgroundColor: secondaryColor }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 5: Modern Bento Service Matrix
     ========================================================================= */
  return (
    <section id="services" className="py-16 sm:py-24">
      <SectionWrapper sectionId="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
            {services.badge || "My expertise"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {services.title || "What I Do"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {list.map((service, index) => (
            <div 
              key={service.id || index}
              className={`p-8 rounded-3xl border transition-all ${
                index === 0 
                  ? 'md:col-span-2 bg-gradient-to-br from-white to-slate-50 border-slate-200 shadow-md' 
                  : 'bg-white border-slate-100 shadow-sm'
              }`}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
              >
                <DynamicIcon name={service.icon} className="w-6 h-6" style={{ color: primaryColor }} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(service.items || []).map((item, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-xl border border-slate-100 text-xs font-semibold text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Services;

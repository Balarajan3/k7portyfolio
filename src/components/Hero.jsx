import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import DynamicButton from './DynamicButton';
import SectionWrapper from './SectionWrapper';
import { Sparkles, ArrowDown, MapPin, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const { portfolioData } = usePortfolio();
  const hero = portfolioData.hero || {};
  const theme = portfolioData.theme || {};
  const primaryColor = theme.primaryColor || "#4F46E5";
  const secondaryColor = theme.secondaryColor || "#9333EA";

  const heroSectionConfig = portfolioData.sections?.find(s => s.id === 'hero') || {};
  const preset = heroSectionConfig.preset || "preset1";

  const buttons = hero.buttons || [];

  /* =========================================================================
     PRESET 1: Modern Split (Original clean split layout)
     ========================================================================= */
  if (preset === 'preset1') {
    return (
      <section className="relative w-full py-16 sm:py-20 lg:py-24 flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-12">
        {/* Ambient Glows */}
        <div 
          className="absolute top-0 right-0 w-[50%] h-[50%] blur-[130px] opacity-25 -z-10 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${secondaryColor} 0%, transparent 70%)` }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[40%] h-[40%] blur-[140px] opacity-20 -z-10 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)` }}
        />

        <SectionWrapper sectionId="hero" className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start text-left">
            {hero.topTitle && (
              <span 
                className="font-semibold text-sm sm:text-base mb-3 px-3 py-1 rounded-full inline-block"
                style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
              >
                {hero.topTitle}
              </span>
            )}

            <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-bold tracking-tight text-slate-900 leading-[1.1] mb-5">
              {hero.titlePrefix || "Hello, I'm"}{" "}
              <br />
              <span 
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
              >
                {hero.highlightName || "Kesavan"}
              </span>
            </h1>

            {hero.subtitle && (
              <h2 className="text-lg sm:text-xl md:text-2xl text-slate-600 font-medium max-w-lg leading-snug mb-6">
                {hero.subtitle}
              </h2>
            )}

            {hero.content && (
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
                {hero.content}
              </p>
            )}

            {/* Dynamic Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {buttons.map((btn) => (
                <DynamicButton
                  key={btn.id}
                  label={btn.label}
                  type={btn.type}
                  route={btn.route}
                  fileUrl={btn.fileUrl}
                  fileName={btn.fileName || "Kesavan_Resume.pdf"}
                  icon={btn.icon}
                  iconPosition={btn.iconPosition}
                  variant={btn.variant || "primary"}
                  className="px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base w-full sm:w-auto"
                />
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[500px] aspect-square">
              <div className="relative w-full h-full rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden shadow-2xl bg-slate-50 border border-slate-100">
                <img
                  src={hero.image}
                  alt={hero.highlightName || "Portrait"}
                  className="w-full h-full object-cover object-center"
                />
                <div 
                  className="absolute inset-0 mix-blend-overlay opacity-15 pointer-events-none"
                  style={{ backgroundColor: primaryColor }}
                />
              </div>
            </div>
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 2: Centered Creative Spotlight
     ========================================================================= */
  if (preset === 'preset2') {
    return (
      <section className="relative w-full py-16 sm:py-24 text-center overflow-hidden px-4 sm:px-6">
        <div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] blur-[150px] opacity-25 -z-10 pointer-events-none rounded-full"
          style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
        />

        <SectionWrapper sectionId="hero" className="max-w-4xl mx-auto flex flex-col items-center">
          {hero.topTitle && (
            <div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 shadow-sm"
              style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
            >
              <Sparkles className="w-4 h-4" />
              <span>{hero.topTitle}</span>
            </div>
          )}

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
            {hero.titlePrefix || "Hello, I'm"}{" "}
            <span 
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
            >
              {hero.highlightName || "Kesavan"}
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-slate-700 font-medium max-w-2xl leading-relaxed mb-6">
            {hero.subtitle}
          </p>

          <p className="text-slate-500 text-sm sm:text-base max-w-2xl leading-relaxed mb-10">
            {hero.content}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-14 w-full">
            {buttons.map((btn) => (
              <DynamicButton
                key={btn.id}
                label={btn.label}
                type={btn.type}
                route={btn.route}
                fileUrl={btn.fileUrl}
                fileName={btn.fileName || "Kesavan_Resume.pdf"}
                icon={btn.icon}
                iconPosition={btn.iconPosition}
                variant={btn.variant || "primary"}
                className="px-8 py-4 text-base"
              />
            ))}
          </div>

          {/* Centered Floating Mockup Image */}
          <div className="w-full max-w-2xl aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 relative">
            <img src={hero.image} alt="Hero Showcase" className="w-full h-full object-cover" />
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 3: Editorial Typography Minimalist
     ========================================================================= */
  if (preset === 'preset3') {
    return (
      <section className="relative w-full py-20 lg:py-28 overflow-hidden px-4 sm:px-8 lg:px-16 border-b border-slate-100">
        <SectionWrapper sectionId="hero" className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-10 h-0.5" style={{ backgroundColor: primaryColor }} />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500">{hero.topTitle}</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight leading-[1.05]">
              {hero.highlightName}
              <span className="text-xl sm:text-2xl font-light text-slate-400 block mt-2 font-mono">
                {hero.titlePrefix} UI/UX Product Designer
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 leading-snug font-medium max-w-xl">
              {hero.subtitle}
            </p>

            <p className="text-slate-500 text-sm leading-relaxed max-w-lg">
              {hero.content}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              {buttons.map((btn) => (
                <DynamicButton
                  key={btn.id}
                  label={btn.label}
                  type={btn.type}
                  route={btn.route}
                  fileUrl={btn.fileUrl}
                  fileName={btn.fileName}
                  icon={btn.icon}
                  iconPosition={btn.iconPosition}
                  variant={btn.variant || "primary"}
                  className="px-7 py-3.5 text-sm"
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="p-3 bg-white rounded-3xl shadow-xl border border-slate-100">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 relative">
                <img src={hero.image} alt="Portrait" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-white/50 text-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-semibold text-slate-800">Open to Projects</span>
                  </div>
                  <span className="text-slate-400 font-mono">Available Q1/Q2</span>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 4: Glassmorphic Floating Card
     ========================================================================= */
  if (preset === 'preset4') {
    return (
      <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div 
          className="absolute -top-10 -left-10 w-96 h-96 rounded-full blur-[140px] opacity-30 pointer-events-none"
          style={{ backgroundColor: primaryColor }}
        />
        <div 
          className="absolute -bottom-10 -right-10 w-96 h-96 rounded-full blur-[140px] opacity-30 pointer-events-none"
          style={{ backgroundColor: secondaryColor }}
        />

        <SectionWrapper sectionId="hero" className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl p-8 sm:p-14 rounded-[2.5rem] shadow-2xl border border-white/70">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span 
                className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-block"
                style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
              >
                {hero.topTitle}
              </span>

              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                {hero.titlePrefix}{" "}
                <span 
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
                >
                  {hero.highlightName}
                </span>
              </h1>

              <p className="text-lg text-slate-700 font-medium">
                {hero.subtitle}
              </p>

              <p className="text-slate-500 text-sm leading-relaxed">
                {hero.content}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                {buttons.map((btn) => (
                  <DynamicButton
                    key={btn.id}
                    label={btn.label}
                    type={btn.type}
                    route={btn.route}
                    fileUrl={btn.fileUrl}
                    fileName={btn.fileName}
                    icon={btn.icon}
                    iconPosition={btn.iconPosition}
                    variant={btn.variant || "primary"}
                    className="px-7 py-3.5 text-sm"
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[340px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img src={hero.image} alt="Portrait" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 5: Modern Designer Bento Hero
     ========================================================================= */
  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
      <SectionWrapper sectionId="hero" className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
          {/* Main Greeting Tile */}
          <div className="md:col-span-2 lg:col-span-2 bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <span 
                className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md inline-block mb-4"
                style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
              >
                {hero.topTitle}
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                {hero.titlePrefix}{" "}
                <span 
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
                >
                  {hero.highlightName}
                </span>
              </h1>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                {hero.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
              {buttons.map((btn) => (
                <DynamicButton
                  key={btn.id}
                  label={btn.label}
                  type={btn.type}
                  route={btn.route}
                  fileUrl={btn.fileUrl}
                  fileName={btn.fileName}
                  icon={btn.icon}
                  iconPosition={btn.iconPosition}
                  variant={btn.variant || "primary"}
                  className="px-6 py-3 text-sm"
                />
              ))}
            </div>
          </div>

          {/* Portrait Tile */}
          <div className="md:col-span-1 lg:col-span-1 rounded-3xl overflow-hidden shadow-sm border border-slate-100 relative min-h-[300px]">
            <img src={hero.image} alt="Portrait" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-5">
              <span className="text-white text-xs font-semibold">UI/UX Craft & Strategy</span>
            </div>
          </div>

          {/* Live Status & Bio Tile */}
          <div className="md:col-span-3 lg:col-span-1 bg-white p-7 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Available Now
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Design Philosophy</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {hero.content}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-400 font-mono">
              Crafting simple, usable & scalable products.
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Hero;

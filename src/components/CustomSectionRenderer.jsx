import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import DynamicButton from './DynamicButton';
import DynamicIcon from './DynamicIcon';
import SectionWrapper from './SectionWrapper';
import { 
  Terminal, 
  Copy, 
  Check, 
  ExternalLink, 
  Download, 
  Sparkles, 
  Code2, 
  GitCommit, 
  GitPullRequest, 
  Cpu, 
  Zap, 
  Layers, 
  ArrowRight 
} from 'lucide-react';

export const CustomSectionRenderer = ({ sectionId, defaultSectionName }) => {
  const { portfolioData } = usePortfolio();
  const customDesigns = portfolioData.customDesigns || {};
  const sectionConfig = customDesigns[sectionId] || customDesigns['hero'] || {};
  const bg = sectionConfig.background || {};
  const elements = sectionConfig.elements || [];

  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const handleCopyCode = (id, codeText) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // Determine section background style
  const getBackgroundStyles = () => {
    switch (bg.type) {
      case 'solid':
        return { backgroundColor: bg.solidColor || '#0b0f19' };
      case 'linear-gradient':
        return {
          background: `linear-gradient(${bg.gradientDirection === 'to-r' ? '90deg' : bg.gradientDirection === 'to-b' ? '180deg' : '135deg'}, ${bg.gradientStart || '#0b0f19'}, ${bg.gradientEnd || '#1e1b4b'})`
        };
      case 'radial-glow':
        return {
          background: `radial-gradient(circle at 50% 20%, ${bg.glowAccent || '#6366f1'}33 0%, ${bg.solidColor || '#0b0f19'} 70%)`
        };
      case 'coding-grid':
      case 'dark-terminal':
        return {
          backgroundColor: bg.solidColor || '#080c14'
        };
      case 'glassmorphic':
        return {
          backgroundColor: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(16px)'
        };
      default:
        return {
          background: `linear-gradient(135deg, ${bg.gradientStart || '#080c14'}, ${bg.gradientEnd || '#1e1b4b'})`
        };
    }
  };

  const isCodingBg = bg.type === 'coding-grid' || bg.type === 'dark-terminal';

  return (
    <SectionWrapper 
      id={sectionId} 
      className={`relative overflow-hidden ${bg.paddingTop || 'py-20'} ${bg.paddingBottom || 'py-20'} transition-all`}
    >
      {/* Background Container */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-500" 
        style={getBackgroundStyles()}
      />

      {/* Optional Cyber / Coding Grid Overlay */}
      {isCodingBg && (
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `radial-gradient(${bg.glowAccent || '#6366f1'} 1px, transparent 1px)`,
            backgroundSize: '28px 28px'
          }}
        />
      )}

      {/* Cyber Ambient Glow Orbs */}
      {isCodingBg && (
        <>
          <div 
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ backgroundColor: bg.glowAccent || '#6366f1' }}
          />
          <div 
            className="absolute bottom-10 right-10 w-72 h-72 rounded-full blur-3xl opacity-15 pointer-events-none"
            style={{ backgroundColor: '#38bdf8' }}
          />
        </>
      )}

      {/* Main Content Container */}
      <div className={`relative z-10 mx-auto px-4 sm:px-6 lg:px-8 ${bg.containerWidth || 'max-w-7xl'} space-y-8`}>
        {elements.map((element, idx) => {
          return (
            <div key={element.id || `elem-${idx}`} className="transition-all">
              {renderElement(element, copiedCodeId, handleCopyCode)}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

// Render Individual Element
const renderElement = (elem, copiedCodeId, onCopyCode) => {
  switch (elem.type) {
    case 'heading': {
      const Tag = elem.tag || 'h2';
      const isGradient = elem.isGradient;
      const gradientStyle = isGradient ? {
        backgroundImage: `linear-gradient(to right, ${elem.gradientFrom || '#38bdf8'}, ${elem.gradientTo || '#818cf8'})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      } : { color: elem.color || '#FFFFFF' };

      return (
        <div className={`text-${elem.align || 'left'}`}>
          <Tag 
            className={`${elem.size || 'text-4xl'} ${elem.weight || 'font-bold'} tracking-tight leading-tight`}
            style={gradientStyle}
          >
            {elem.text || "Heading Text"}
          </Tag>
        </div>
      );
    }

    case 'badge': {
      const colorMap = {
        indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30 shadow-indigo-500/20',
        emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-emerald-500/20',
        cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 shadow-cyan-500/20',
        purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30 shadow-purple-500/20',
        amber: 'bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-amber-500/20',
        rose: 'bg-rose-500/10 text-rose-400 border-rose-500/30 shadow-rose-500/20',
      };
      const badgeClass = colorMap[elem.color] || colorMap.indigo;

      return (
        <div className="inline-flex items-center">
          <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase border shadow-sm ${badgeClass}`}>
            {elem.style === 'glowing-pill' && (
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            )}
            {elem.icon && <DynamicIcon name={elem.icon} className="w-3.5 h-3.5" />}
            <span>{elem.text || "Badge Title"}</span>
          </span>
        </div>
      );
    }

    case 'paragraph': {
      return (
        <div className={`text-${elem.align || 'left'}`}>
          <p 
            className={`${elem.size || 'text-base'} leading-relaxed max-w-3xl ${elem.align === 'center' ? 'mx-auto' : ''}`}
            style={{ color: elem.color || '#94a3b8' }}
          >
            {elem.text}
          </p>
        </div>
      );
    }

    case 'buttonGroup': {
      const buttons = elem.buttons || [];
      return (
        <div className={`flex flex-wrap items-center gap-4 ${elem.align === 'center' ? 'justify-center' : elem.align === 'right' ? 'justify-end' : 'justify-start'}`}>
          {buttons.map((btn) => (
            <DynamicButton
              key={btn.id}
              label={btn.label}
              type={btn.type}
              route={btn.route}
              fileUrl={btn.fileUrl}
              icon={btn.icon}
              iconPosition={btn.iconPosition}
              variant={btn.variant}
              className="shadow-lg"
            />
          ))}
        </div>
      );
    }

    case 'terminal': {
      return (
        <div className="rounded-2xl overflow-hidden border border-slate-700/80 bg-[#0d1117] shadow-2xl font-mono text-xs max-w-4xl">
          {/* Terminal Window Header */}
          <div className="bg-[#161b22] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block shadow-sm"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block shadow-sm"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block shadow-sm"></span>
              <span className="ml-3 text-slate-400 text-xs font-semibold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                <span>{elem.filename || "DeveloperConfig.ts"}</span>
              </span>
            </div>

            {elem.showCopy && (
              <button
                type="button"
                onClick={() => onCopyCode(elem.id, elem.code)}
                className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-white px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 transition-colors"
                title="Copy Code"
              >
                {copiedCodeId === elem.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            )}
          </div>

          {/* Code Content with Line Numbers */}
          <div className="p-4 sm:p-6 overflow-x-auto text-slate-200 leading-relaxed font-mono">
            <pre className="text-xs sm:text-sm">
              <code>{elem.code}</code>
            </pre>
          </div>

          {/* Terminal Status Bar */}
          <div className="bg-[#161b22] px-4 py-1.5 border-t border-slate-800 text-[10px] text-slate-500 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span>● Git: main*</span>
              <span>UTF-8</span>
              <span>TypeScript 5.3</span>
            </div>
            <span className="text-emerald-400 font-medium">Ready</span>
          </div>
        </div>
      );
    }

    case 'devStats': {
      const items = elem.items || [];
      return (
        <div className="space-y-3">
          {elem.title && (
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              {elem.title}
            </h4>
          )}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {items.map((stat, i) => (
              <div 
                key={stat.id || i}
                className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-indigo-500/40 transition-all group shadow-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-slate-400">{stat.label}</span>
                  {stat.icon && (
                    <div className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <DynamicIcon name={stat.icon} className="w-4 h-4" />
                    </div>
                  )}
                </div>
                <div className="text-2xl sm:text-3xl font-mono font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                {stat.subtext && (
                  <p className="text-[11px] text-slate-500 mt-1 font-sans">{stat.subtext}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }

    case 'techStack': {
      const skills = elem.skills || [];
      return (
        <div className="space-y-4">
          {elem.title && (
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-indigo-400" />
              <span>{elem.title}</span>
            </h4>
          )}
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill, i) => (
              <div 
                key={i}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all shadow-md group"
              >
                {skill.icon && (
                  <DynamicIcon name={skill.icon} className="w-4 h-4" style={{ color: skill.color || '#38bdf8' }} />
                )}
                <span className="text-xs font-medium text-slate-200">{skill.name}</span>
                {skill.level && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 group-hover:text-indigo-300 transition-colors">
                    {skill.level}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }

    case 'cards': {
      const cards = elem.items || [];
      const cols = elem.columns || 3;
      const colClass = cols === 1 ? 'grid-cols-1' : cols === 2 ? 'grid-cols-1 md:grid-cols-2' : cols === 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-3';

      return (
        <div className={`grid ${colClass} gap-6`}>
          {cards.map((card, i) => (
            <div 
              key={card.id || i}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-md hover:border-indigo-500/50 hover:shadow-indigo-500/10 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {card.icon && (
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                      <DynamicIcon name={card.icon} className="w-5 h-5" />
                    </div>
                  )}
                  {card.tag && (
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {card.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white mb-2">{card.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{card.desc}</p>
              </div>

              {card.metric && (
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-indigo-400 font-mono">
                  <span>Track Record</span>
                  <span className="font-bold">{card.metric}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }

    case 'image': {
      return (
        <div className={`overflow-hidden ${elem.width || 'max-w-xl'} ${elem.rounded || 'rounded-2xl'} ${elem.shadow || 'shadow-2xl'} border border-slate-800`}>
          <img 
            src={elem.url || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"} 
            alt={elem.alt || "Custom Media"} 
            className="w-full h-auto object-cover"
          />
        </div>
      );
    }

    case 'divider': {
      const height = elem.height || 40;
      if (elem.style === 'laser') {
        return (
          <div className="w-full flex items-center justify-center py-4" style={{ height: `${height}px` }}>
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-60"></div>
          </div>
        );
      }
      if (elem.style === 'dots') {
        return (
          <div className="flex justify-center items-center gap-2 py-4" style={{ height: `${height}px` }}>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
          </div>
        );
      }
      return <div style={{ height: `${height}px` }} />;
    }

    case 'columns': {
      const leftElements = elem.leftElements || [];
      const rightElements = elem.rightElements || [];
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            {leftElements.map((subElem, idx) => (
              <div key={subElem.id || idx}>
                {renderElement(subElem, copiedCodeId, onCopyCode)}
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {rightElements.map((subElem, idx) => (
              <div key={subElem.id || idx}>
                {renderElement(subElem, copiedCodeId, onCopyCode)}
              </div>
            ))}
          </div>
        </div>
      );
    }

    default:
      return null;
  }
};

export default CustomSectionRenderer;

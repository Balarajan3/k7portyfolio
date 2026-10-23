import React, { useState } from 'react';
import { Maximize2, Minimize2, ExternalLink, RefreshCw, Eye, Sparkles } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { SectionWrapper } from './SectionWrapper';

export const FigmaViewer = () => {
  const { portfolioData } = usePortfolio();
  const { figmaShowcase = {}, theme = {} } = portfolioData;
  const { primaryColor = "#4F46E5", secondaryColor = "#9333EA" } = theme;

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState('embed'); // 'embed' | 'info'

  // Construct official Figma embed URL
  const rawUrl = figmaShowcase.figmaUrl || "https://www.figma.com/community/file/1182258948197775960";
  const embedUrl = rawUrl.includes("figma.com/embed")
    ? rawUrl
    : `https://www.figma.com/embed?embed_host=astra&url=${encodeURIComponent(rawUrl)}`;

  return (
    <section id="figma-viewer" className="py-20 lg:py-24 bg-slate-50/50 relative overflow-hidden">
      <SectionWrapper className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span 
            className="font-medium text-sm tracking-wide uppercase mb-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50"
            style={{ color: primaryColor }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            {figmaShowcase.badge || "Interactive Prototype"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {figmaShowcase.title || "Live Figma Workspace"}
          </h2>
          <p className="text-slate-600 text-lg">
            {figmaShowcase.subtitle || "Interact directly with design files, user flows, and responsive UI components without leaving this portfolio."}
          </p>
        </div>

        {/* Figma Viewer Window Container */}
        <div 
          className={`bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden transition-all duration-300 ${
            isFullscreen ? 'fixed inset-4 z-50 rounded-2xl flex flex-col shadow-2xl' : 'relative'
          }`}
        >
          {/* Top Browser / Canvas Toolbar */}
          <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              <div className="hidden sm:flex items-center gap-2 ml-4 px-3 py-1 bg-slate-800/80 rounded-lg text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                Figma Live Canvas • Embedded Mode
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen View"}
              >
                {isFullscreen ? (
                  <>
                    <Minimize2 className="w-3.5 h-3.5" />
                    <span>Exit Fullscreen</span>
                  </>
                ) : (
                  <>
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Fullscreen</span>
                  </>
                )}
              </button>

              <a
                href={rawUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 px-2 py-1 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Open in Figma</span>
              </a>
            </div>
          </div>

          {/* Iframe Viewport */}
          <div className={`w-full bg-[#1e1e1e] relative ${isFullscreen ? 'flex-grow h-full' : 'h-[540px] md:h-[650px]'}`}>
            <iframe
              title="Figma Live Prototype"
              className="w-full h-full border-0"
              src={embedUrl}
              allowFullScreen
            />
          </div>

          {/* Bottom Bar Info */}
          <div className="bg-white px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-indigo-600" />
              <span>Interactive Figma sandbox active — zoom, click through frames, and test user journeys directly.</span>
            </div>
            {figmaShowcase.uploadedFileUrl && (
              <a 
                href={figmaShowcase.uploadedFileUrl} 
                download={figmaShowcase.fileName || "figma_design.fig"}
                className="font-medium text-indigo-600 hover:underline"
              >
                Download Attached Design File ({figmaShowcase.fileName || "Design.fig"})
              </a>
            )}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default FigmaViewer;

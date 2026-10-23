import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Layers, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import ImageUploader from './ImageUploader';

export const TabFigma = () => {
  const { portfolioData, updatePortfolioData } = usePortfolio();
  const figmaShowcase = portfolioData.figmaShowcase || {};

  const handleChange = (field, val) => {
    updatePortfolioData((prev) => ({
      ...prev,
      figmaShowcase: {
        ...prev.figmaShowcase,
        [field]: val
      }
    }));
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-600" />
          <span>Interactive Figma Live Workspace</span>
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Allows recruiters and design clients to interact with your Figma prototypes directly within the portfolio without redirecting to Figma.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Badge</label>
            <input
              type="text"
              value={figmaShowcase.badge || ""}
              onChange={(e) => handleChange('badge', e.target.value)}
              placeholder="e.g. Interactive Prototype"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Heading</label>
            <input
              type="text"
              value={figmaShowcase.title || ""}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="e.g. Live Figma Workspace"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-bold"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Subtitle</label>
          <input
            type="text"
            value={figmaShowcase.subtitle || ""}
            onChange={(e) => handleChange('subtitle', e.target.value)}
            placeholder="e.g. Explore interactive Figma prototypes and design components right inside the portfolio..."
            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
          />
        </div>

        {/* Figma URL */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <label className="block text-xs font-bold text-slate-800 uppercase">
            Figma Share / Embed URL
          </label>
          <input
            type="text"
            value={figmaShowcase.figmaUrl || ""}
            onChange={(e) => handleChange('figmaUrl', e.target.value)}
            placeholder="e.g. https://www.figma.com/design/... or https://www.figma.com/community/file/..."
            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white font-mono text-xs"
          />
          <div className="text-[11px] text-slate-500">
            Tip: In Figma, click <strong>Share</strong> &rarr; <strong>Copy link</strong> (or <strong>Get embed code</strong>), then paste the URL here. The website will automatically render the interactive in-page canvas!
          </div>
        </div>

        {/* Upload Figma File / Design Asset */}
        <ImageUploader
          label="Optional: Attach Downloadable .FIG File or Prototype Archive"
          currentValue={figmaShowcase.uploadedFileUrl}
          onUploadComplete={(url, name) => {
            handleChange('uploadedFileUrl', url);
            if (name) handleChange('fileName', name);
          }}
          accept=".fig,.pdf,.zip"
          helperText="Visitors can download the actual .fig file directly from the interactive showcase bar."
        />
      </div>
    </div>
  );
};

export default TabFigma;

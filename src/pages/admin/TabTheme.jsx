import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Palette, Check, Sparkles } from 'lucide-react';
import DynamicButton from '../../components/DynamicButton';

export const TabTheme = () => {
  const { portfolioData, updatePortfolioData } = usePortfolio();
  const theme = portfolioData.theme || {};

  const handleColorChange = (key, value) => {
    updatePortfolioData((prev) => ({
      ...prev,
      theme: {
        ...prev.theme,
        [key]: value
      }
    }));
  };

  const presetThemes = [
    { name: "01. Indigo & Royal Purple (Default)", primary: "#4F46E5", secondary: "#9333EA", bg: "#FCFDFF", text: "#0F172A" },
    { name: "02. Neon Cyberpunk Dark", primary: "#06B6D4", secondary: "#F43F5E", bg: "#0B0F19", text: "#F8FAFC" },
    { name: "03. Nordic Slate & Frost", primary: "#3B82F6", secondary: "#60A5FA", bg: "#F8FAFC", text: "#1E293B" },
    { name: "04. Emerald Clean Tech", primary: "#059669", secondary: "#10B981", bg: "#F0FDF4", text: "#064E3B" },
    { name: "05. Sunset Amber & Coral", primary: "#EA580C", secondary: "#F59E0B", bg: "#FFFBEB", text: "#451A03" },
    { name: "06. Rose & Royal Violet", primary: "#E11D48", secondary: "#7C3AED", bg: "#FFF1F2", text: "#1E1B4B" },
    { name: "07. Midnight Tokyo Violet", primary: "#8B5CF6", secondary: "#EC4899", bg: "#090D16", text: "#EDE9FE" },
    { name: "08. Minimal Monochrome Luxury", primary: "#18181B", secondary: "#52525B", bg: "#FAFAFA", text: "#09090B" },
    { name: "09. Ocean Breeze & Teal", primary: "#0D9488", secondary: "#0284C7", bg: "#F0FDFA", text: "#134E4A" },
    { name: "10. Warm Sand & Terracotta", primary: "#C2410C", secondary: "#B45309", bg: "#FAF5EE", text: "#292524" }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Palette className="w-5 h-5 text-indigo-600" />
          <span>Global Colors & 10 Designer Theme Presets</span>
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Choose from 10 curated designer themes or customize your primary & secondary palette. Changes propagate in real time across the entire site.
        </p>
      </div>

      {/* 10 Preset Themes Palette */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Curated Theme Presets (10 Themes)</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3.5">
          {presetThemes.map((p, idx) => {
            const isSelected = theme.primaryColor === p.primary && theme.secondaryColor === p.secondary;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  updatePortfolioData((prev) => ({
                    ...prev,
                    theme: {
                      ...prev.theme,
                      primaryColor: p.primary,
                      secondaryColor: p.secondary,
                      bgColor: p.bg,
                      textColor: p.text
                    }
                  }));
                }}
                className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all ${
                  isSelected 
                    ? 'border-indigo-600 bg-indigo-50/70 shadow-sm' 
                    : 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-slate-50'
                }`}
              >
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-800">{p.name}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-5 h-5 rounded-full inline-block shadow-sm" style={{ backgroundColor: p.primary }} />
                    <span className="w-5 h-5 rounded-full inline-block shadow-sm" style={{ backgroundColor: p.secondary }} />
                    <span className="w-5 h-5 rounded-full inline-block border border-slate-300" style={{ backgroundColor: p.bg }} />
                    <span className="text-[10px] text-slate-400 font-mono ml-1">{p.primary}</span>
                  </div>
                </div>
                {isSelected && (
                  <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Custom Color Pickers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <div>
          <label className="block text-xs font-bold uppercase text-slate-600 mb-2">Primary Color</label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={theme.primaryColor || "#4F46E5"}
              onChange={(e) => handleColorChange('primaryColor', e.target.value)}
              className="w-12 h-12 rounded-xl cursor-pointer border border-slate-200 p-1"
            />
            <input
              type="text"
              value={theme.primaryColor || "#4F46E5"}
              onChange={(e) => handleColorChange('primaryColor', e.target.value)}
              className="w-28 px-3 py-2 border border-slate-200 rounded-lg text-sm uppercase font-mono"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-slate-600 mb-2">Secondary Color</label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={theme.secondaryColor || "#9333EA"}
              onChange={(e) => handleColorChange('secondaryColor', e.target.value)}
              className="w-12 h-12 rounded-xl cursor-pointer border border-slate-200 p-1"
            />
            <input
              type="text"
              value={theme.secondaryColor || "#9333EA"}
              onChange={(e) => handleColorChange('secondaryColor', e.target.value)}
              className="w-28 px-3 py-2 border border-slate-200 rounded-lg text-sm uppercase font-mono"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-slate-600 mb-2">Background Color</label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={theme.bgColor || "#FCFDFF"}
              onChange={(e) => handleColorChange('bgColor', e.target.value)}
              className="w-12 h-12 rounded-xl cursor-pointer border border-slate-200 p-1"
            />
            <input
              type="text"
              value={theme.bgColor || "#FCFDFF"}
              onChange={(e) => handleColorChange('bgColor', e.target.value)}
              className="w-28 px-3 py-2 border border-slate-200 rounded-lg text-sm uppercase font-mono"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-slate-600 mb-2">Text Color</label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={theme.textColor || "#0F172A"}
              onChange={(e) => handleColorChange('textColor', e.target.value)}
              className="w-12 h-12 rounded-xl cursor-pointer border border-slate-200 p-1"
            />
            <input
              type="text"
              value={theme.textColor || "#0F172A"}
              onChange={(e) => handleColorChange('textColor', e.target.value)}
              className="w-28 px-3 py-2 border border-slate-200 rounded-lg text-sm uppercase font-mono"
            />
          </div>
        </div>
      </div>

      {/* Button Corner Radius */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <label className="block text-xs font-bold uppercase text-slate-600 mb-3">Button Border Radius</label>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Square (0px)", val: "rounded-none" },
            { label: "Slight (6px)", val: "rounded-md" },
            { label: "Modern (10px)", val: "rounded-lg" },
            { label: "Soft (16px)", val: "rounded-2xl" },
            { label: "Pill Full", val: "rounded-full" }
          ].map((r) => (
            <button
              key={r.val}
              type="button"
              onClick={() => handleColorChange('buttonRadius', r.val)}
              className={`px-4 py-2 text-sm font-medium border transition-all ${
                theme.buttonRadius === r.val
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-700 shadow-sm'
                  : 'border-slate-200 text-slate-600 hover:bg-slate-50'
              } ${r.val}`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* Live Preview Widget */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
        <div className="text-xs font-bold uppercase text-slate-400">Live Component Preview</div>
        <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 
              className="text-2xl font-bold bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`
              }}
            >
              Kesavan Portfolio Theme
            </h4>
            <p className="text-sm text-slate-500 mt-1">This is how your dynamic gradient and buttons will look to visitors.</p>
          </div>

          <div className="flex items-center gap-3">
            <DynamicButton
              label="Primary Action"
              icon="Download"
              iconPosition="prefix"
              variant="primary"
              className="px-5 py-2.5 text-sm"
            />
            <DynamicButton
              label="Secondary Action"
              icon="ArrowRight"
              iconPosition="suffix"
              variant="outline"
              className="px-5 py-2.5 text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabTheme;

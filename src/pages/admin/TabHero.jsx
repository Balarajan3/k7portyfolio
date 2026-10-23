import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Sparkles, Plus, Trash2, Download, ArrowRight } from 'lucide-react';
import ImageUploader from './ImageUploader';
import IconPicker from './IconPicker';

export const TabHero = () => {
  const { portfolioData, updatePortfolioData } = usePortfolio();
  const hero = portfolioData.hero || {};
  const buttons = hero.buttons || [];

  const handleHeroChange = (field, val) => {
    updatePortfolioData((prev) => ({
      ...prev,
      hero: {
        ...prev.hero,
        [field]: val
      }
    }));
  };

  const handleButtonChange = (index, field, val) => {
    const updatedButtons = [...buttons];
    updatedButtons[index] = {
      ...updatedButtons[index],
      [field]: val
    };
    handleHeroChange('buttons', updatedButtons);
  };

  const addButton = () => {
    const newBtn = {
      id: `btn-${Date.now()}`,
      label: "New Button",
      type: "route",
      route: "#portfolio",
      fileUrl: "",
      fileName: "document.pdf",
      icon: "ArrowRight",
      iconPosition: "suffix",
      variant: "outline"
    };
    handleHeroChange('buttons', [...buttons, newBtn]);
  };

  const removeButton = (index) => {
    const updated = buttons.filter((_, i) => i !== index);
    handleHeroChange('buttons', updated);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-600" />
          <span>Hero Section Contents & Call-To-Actions</span>
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Customize welcome badge, headings, intro bio, dynamic buttons (route or file download with prefix/suffix icons), and portrait image.
        </p>
      </div>

      {/* Main Text Content */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Top Badge / Title
            </label>
            <input
              type="text"
              value={hero.topTitle || ""}
              onChange={(e) => handleHeroChange('topTitle', e.target.value)}
              placeholder="e.g. Welcome to my portfolio"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Title Prefix
            </label>
            <input
              type="text"
              value={hero.titlePrefix || ""}
              onChange={(e) => handleHeroChange('titlePrefix', e.target.value)}
              placeholder="e.g. Hello, I'm"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Highlight Name (Gradient text)
            </label>
            <input
              type="text"
              value={hero.highlightName || ""}
              onChange={(e) => handleHeroChange('highlightName', e.target.value)}
              placeholder="e.g. Kesavan"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500 font-bold text-indigo-600"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Subtitle / Headline
          </label>
          <input
            type="text"
            value={hero.subtitle || ""}
            onChange={(e) => handleHeroChange('subtitle', e.target.value)}
            placeholder="e.g. UI/UX Designer crafting simple, usable, and scalable digital experiences"
            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
            Bio Content Paragraph
          </label>
          <textarea
            rows="4"
            value={hero.content || ""}
            onChange={(e) => handleHeroChange('content', e.target.value)}
            placeholder="Introduce your experience, design focus, and background..."
            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500 resize-none leading-relaxed"
          />
        </div>
      </div>

      {/* Hero Side Image */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-800">Hero Side Image (Cloudinary / URL)</h3>
        <ImageUploader
          label="Portrait Image"
          currentValue={hero.image}
          onUploadComplete={(url) => handleHeroChange('image', url)}
          helperText="Upload your portrait or hero banner. Direct Cloudinary upload is enabled."
        />
      </div>

      {/* Dynamic Action Buttons Manager */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-800">Dynamic Hero Action Buttons</h3>
            <p className="text-xs text-slate-500">
              Configure button actions: Route (navigate page/section) or File (download CV/resume), icon, prefix/suffix.
            </p>
          </div>
          <button
            type="button"
            onClick={addButton}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-xs font-semibold transition-colors"
          >
            <Plus className="w-4 h-4" /> Add Button
          </button>
        </div>

        <div className="space-y-5">
          {buttons.map((btn, index) => (
            <div key={btn.id || index} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-600">
                  Button #{index + 1}: {btn.label}
                </span>
                <button
                  type="button"
                  onClick={() => removeButton(index)}
                  className="text-rose-500 hover:text-rose-700 p-1 rounded-lg hover:bg-rose-50"
                  title="Delete Button"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Button Label */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Button Name</label>
                  <input
                    type="text"
                    value={btn.label}
                    onChange={(e) => handleButtonChange(index, 'label', e.target.value)}
                    placeholder="e.g. See My Resume CV"
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white"
                  />
                </div>

                {/* Option: Route or File */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Action Type</label>
                  <select
                    value={btn.type || "route"}
                    onChange={(e) => handleButtonChange(index, 'type', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white"
                  >
                    <option value="route">Route / Navigation (URL or #Section)</option>
                    <option value="file">File Download (CV / PDF / File)</option>
                  </select>
                </div>

                {/* Style Variant */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Variant Style</label>
                  <select
                    value={btn.variant || "primary"}
                    onChange={(e) => handleButtonChange(index, 'variant', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white"
                  >
                    <option value="primary">Primary Gradient (Theme Colors)</option>
                    <option value="secondary">Secondary Accent</option>
                    <option value="outline">Clean Outline Card</option>
                    <option value="ghost">Ghost Minimal</option>
                  </select>
                </div>
              </div>

              {/* Conditional Target Input based on Type */}
              {btn.type === 'file' ? (
                <div className="space-y-3 bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xs font-bold text-slate-700 uppercase">File Download Configuration</div>
                  <ImageUploader
                    label="Attach File for Download"
                    currentValue={btn.fileUrl}
                    onUploadComplete={(url, name) => {
                      handleButtonChange(index, 'fileUrl', url);
                      if (name) handleButtonChange(index, 'fileName', name);
                    }}
                    accept="*/*"
                    helperText="When visitors click this button, the browser automatically downloads this file."
                  />
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Download File Name</label>
                    <input
                      type="text"
                      value={btn.fileName || ""}
                      onChange={(e) => handleButtonChange(index, 'fileName', e.target.value)}
                      placeholder="e.g. Kesavan_Resume_CV.pdf"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Route Destination (Page, Anchor #, or Web Link)
                  </label>
                  <input
                    type="text"
                    value={btn.route || ""}
                    onChange={(e) => handleButtonChange(index, 'route', e.target.value)}
                    placeholder="e.g. #portfolio, /project/analytics-dashboard, /p/case-study, or https://..."
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white"
                  />
                </div>
              )}

              {/* Icon & Position Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <IconPicker
                  label="Button Icon"
                  value={btn.icon || "Sparkles"}
                  onChange={(iconName) => handleButtonChange(index, 'icon', iconName)}
                />

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Icon Position</label>
                  <div className="flex gap-4 pt-2">
                    <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                      <input
                        type="radio"
                        name={`pos-${btn.id}`}
                        value="prefix"
                        checked={btn.iconPosition === 'prefix'}
                        onChange={() => handleButtonChange(index, 'iconPosition', 'prefix')}
                        className="text-indigo-600"
                      />
                      <span>Prefix (Before text)</span>
                    </label>
                    <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                      <input
                        type="radio"
                        name={`pos-${btn.id}`}
                        value="suffix"
                        checked={btn.iconPosition === 'suffix'}
                        onChange={() => handleButtonChange(index, 'iconPosition', 'suffix')}
                        className="text-indigo-600"
                      />
                      <span>Suffix (After text)</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabHero;

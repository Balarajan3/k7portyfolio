import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Compass, Plus, Trash2, ArrowUp, ArrowDown } from 'lucide-react';
import IconPicker from './IconPicker';

export const TabNavbar = () => {
  const { portfolioData, updatePortfolioData } = usePortfolio();
  const navbar = portfolioData.navbar || {};
  const site = portfolioData.site || {};
  const links = navbar.links || [];
  const cta = navbar.ctaButton || {};

  const handleSiteChange = (field, val) => {
    updatePortfolioData((prev) => ({
      ...prev,
      site: {
        ...prev.site,
        [field]: val
      }
    }));
  };

  const handleNavbarChange = (field, val) => {
    updatePortfolioData((prev) => ({
      ...prev,
      navbar: {
        ...prev.navbar,
        [field]: val
      }
    }));
  };

  const handleLinkChange = (index, field, val) => {
    const updated = [...links];
    updated[index] = { ...updated[index], [field]: val };
    handleNavbarChange('links', updated);
  };

  const addLink = () => {
    const newLink = {
      id: `nav-${Date.now()}`,
      label: "New Link",
      target: "#about",
      type: "scroll",
      enabled: true
    };
    handleNavbarChange('links', [...links, newLink]);
  };

  const removeLink = (index) => {
    const updated = links.filter((_, i) => i !== index);
    handleNavbarChange('links', updated);
  };

  const moveLink = (index, dir) => {
    const target = dir === 'up' ? index - 1 : index + 1;
    if (target < 0 || target >= links.length) return;
    const updated = [...links];
    const temp = updated[index];
    updated[index] = updated[target];
    updated[target] = temp;
    handleNavbarChange('links', updated);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Compass className="w-5 h-5 text-indigo-600" />
          <span>Top Navigation Menu & Brand Title</span>
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Manage header logo, navigation items, page routes or scroll positions (#section), and the header action button.
        </p>
      </div>

      {/* Brand & Titles */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-800">Branding & Identity</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Navbar Logo Text</label>
            <input
              type="text"
              value={navbar.logo || site.logoText || ""}
              onChange={(e) => {
                handleNavbarChange('logo', e.target.value);
                handleSiteChange('logoText', e.target.value);
              }}
              placeholder="e.g. Kesavan"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Site Meta Title</label>
            <input
              type="text"
              value={site.title || ""}
              onChange={(e) => handleSiteChange('title', e.target.value)}
              placeholder="e.g. Kesavan | UI/UX Designer Portfolio"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
            />
          </div>
        </div>
      </div>

      {/* Navigation Links Manager */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-800">Top Menu Items</h3>
            <p className="text-xs text-slate-500">
              Set target to an anchor (e.g. #about, #portfolio) to smooth scroll, or a page route (e.g. /p/case-study).
            </p>
          </div>
          <button
            type="button"
            onClick={addLink}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-xs font-semibold"
          >
            <Plus className="w-4 h-4" /> Add Menu Item
          </button>
        </div>

        <div className="space-y-3">
          {links.map((link, index) => (
            <div key={link.id || index} className="flex flex-col sm:flex-row items-center gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 text-xs font-bold flex items-center justify-center flex-shrink-0">
                {index + 1}
              </span>

              {/* Label */}
              <div className="w-full sm:w-1/3">
                <input
                  type="text"
                  value={link.label}
                  onChange={(e) => handleLinkChange(index, 'label', e.target.value)}
                  placeholder="Link Label (e.g. About)"
                  className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-sm bg-white"
                />
              </div>

              {/* Target / Route */}
              <div className="w-full sm:w-1/2">
                <input
                  type="text"
                  value={link.target}
                  onChange={(e) => handleLinkChange(index, 'target', e.target.value)}
                  placeholder="Target (e.g. #about, #services, #portfolio, or /p/hire)"
                  className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-sm bg-white font-mono text-xs"
                />
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => moveLink(index, 'up')}
                  disabled={index === 0}
                  className="p-1 rounded text-slate-400 hover:text-indigo-600 disabled:opacity-30"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => moveLink(index, 'down')}
                  disabled={index === links.length - 1}
                  className="p-1 rounded text-slate-400 hover:text-indigo-600 disabled:opacity-30"
                >
                  <ArrowDown className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => removeLink(index)}
                  className="p-1 rounded text-rose-500 hover:text-rose-700"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Header CTA Button */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-800">Navbar CTA Button ("Hire Me")</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Button Label</label>
            <input
              type="text"
              value={cta.label || ""}
              onChange={(e) => handleNavbarChange('ctaButton', { ...cta, label: e.target.value })}
              placeholder="e.g. Hire Me"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Target Destination</label>
            <input
              type="text"
              value={cta.target || ""}
              onChange={(e) => handleNavbarChange('ctaButton', { ...cta, target: e.target.value })}
              placeholder="e.g. #contact or /p/hire"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
            />
          </div>

          <IconPicker
            label="Button Icon"
            value={cta.icon || "Mail"}
            onChange={(icon) => handleNavbarChange('ctaButton', { ...cta, icon })}
          />
        </div>
      </div>
    </div>
  );
};

export default TabNavbar;

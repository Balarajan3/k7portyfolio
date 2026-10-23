import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { FileText, Plus, Trash2, Edit3, ExternalLink, Link2 } from 'lucide-react';

export const TabPages = () => {
  const { portfolioData, updatePortfolioData } = usePortfolio();
  const pages = portfolioData.pages || [];

  const [activePageId, setActivePageId] = useState(pages[0]?.id || null);

  const activePage = pages.find(p => p.id === activePageId) || pages[0];

  const handlePageChange = (id, field, val) => {
    const updated = pages.map(p => p.id === id ? { ...p, [field]: val } : p);
    updatePortfolioData((prev) => ({
      ...prev,
      pages: updated
    }));
  };

  const addPage = () => {
    const id = `page-${Date.now()}`;
    const slug = `new-page-${pages.length + 1}`;
    const newPage = {
      id,
      slug,
      title: "New Custom Page",
      badge: "Special Feature",
      description: "Brief summary or introduction of this dedicated page.",
      content: "Write your custom page narrative, project deep dive, services breakdown, or hiring proposal here.",
      figmaUrl: "",
      ctaButton: {
        label: "Get In Touch",
        target: "/#contact",
        type: "route",
        icon: "Mail",
        iconPosition: "suffix"
      }
    };
    updatePortfolioData((prev) => ({
      ...prev,
      pages: [...pages, newPage]
    }));
    setActivePageId(id);
  };

  const deletePage = (id) => {
    const updated = pages.filter(p => p.id !== id);
    updatePortfolioData((prev) => ({
      ...prev,
      pages: updated
    }));
    if (activePageId === id) {
      setActivePageId(updated[0]?.id || null);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <FileText className="w-5 h-5 text-indigo-600" />
          <span>Dynamic Pages Engine (WordPress / Wix Style)</span>
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Create unlimited custom pages with unique URL routes, embedded Figma prototypes, and action buttons. You can link any hero button or top menu item directly to these routes!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Pages List */}
        <div className="lg:col-span-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="font-bold text-xs uppercase tracking-wider text-slate-600">Created Pages ({pages.length})</span>
            <button
              type="button"
              onClick={addPage}
              className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100"
            >
              <Plus className="w-3.5 h-3.5" /> Create Page
            </button>
          </div>

          <div className="space-y-2 max-h-[500px] overflow-y-auto">
            {pages.map((p) => {
              const isActive = p.id === activePage?.id;
              return (
                <div
                  key={p.id}
                  onClick={() => setActivePageId(p.id)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isActive 
                      ? 'border-indigo-600 bg-indigo-50/60 shadow-sm' 
                      : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                  }`}
                >
                  <div className="overflow-hidden">
                    <h4 className="font-bold text-xs text-slate-800 truncate">{p.title}</h4>
                    <span className="text-[11px] text-indigo-600 font-mono block truncate">/p/{p.slug}</span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      deletePage(p.id);
                    }}
                    className="text-slate-400 hover:text-rose-600 p-1"
                    title="Delete Page"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Page Content Editor */}
        {activePage && (
          <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-indigo-600" />
                <span>Editing: {activePage.title}</span>
              </h3>
              <a
                href={`/p/${activePage.slug}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-indigo-600 font-semibold flex items-center gap-1 hover:underline"
              >
                <ExternalLink className="w-3.5 h-3.5" /> View Live Page
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Page Title</label>
                <input
                  type="text"
                  value={activePage.title}
                  onChange={(e) => handlePageChange(activePage.id, 'title', e.target.value)}
                  placeholder="e.g. My Design Process"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  URL Route Slug (/p/your-slug)
                </label>
                <input
                  type="text"
                  value={activePage.slug}
                  onChange={(e) => handlePageChange(activePage.id, 'slug', e.target.value.toLowerCase().replace(/[^a-z0-9-_]/g, ''))}
                  placeholder="e.g. my-design-process"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-mono text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Badge</label>
                <input
                  type="text"
                  value={activePage.badge || ""}
                  onChange={(e) => handlePageChange(activePage.id, 'badge', e.target.value)}
                  placeholder="e.g. In-Depth Case Study"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Description / Subtitle</label>
                <input
                  type="text"
                  value={activePage.description || ""}
                  onChange={(e) => handlePageChange(activePage.id, 'description', e.target.value)}
                  placeholder="Summary intro shown under title..."
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Page Rich Content</label>
              <textarea
                rows="6"
                value={activePage.content || ""}
                onChange={(e) => handlePageChange(activePage.id, 'content', e.target.value)}
                placeholder="Write the full page story, client testimonials, methodologies..."
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm leading-relaxed"
              />
            </div>

            {/* In-page Figma embed */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <label className="block text-xs font-bold text-slate-800 uppercase">
                Optional Embedded Figma Prototype URL
              </label>
              <input
                type="text"
                value={activePage.figmaUrl || ""}
                onChange={(e) => handlePageChange(activePage.id, 'figmaUrl', e.target.value)}
                placeholder="Paste Figma prototype or community link..."
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white font-mono text-xs"
              />
              <p className="text-[11px] text-slate-500">
                If provided, an interactive Figma frame will be automatically embedded on this custom page!
              </p>
            </div>

            {/* Page Call to Action */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Call-To-Action Button Label</label>
                <input
                  type="text"
                  value={activePage.ctaButton?.label || ""}
                  onChange={(e) => handlePageChange(activePage.id, 'ctaButton', { ...activePage.ctaButton, label: e.target.value })}
                  placeholder="e.g. Schedule Interview"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Button Route Target</label>
                <input
                  type="text"
                  value={activePage.ctaButton?.target || ""}
                  onChange={(e) => handlePageChange(activePage.id, 'ctaButton', { ...activePage.ctaButton, target: e.target.value })}
                  placeholder="e.g. /#contact or https://..."
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-mono text-xs"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabPages;

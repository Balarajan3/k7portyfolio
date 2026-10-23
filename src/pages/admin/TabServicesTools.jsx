import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Wrench, Plus, Trash2 } from 'lucide-react';
import IconPicker from './IconPicker';

export const TabServicesTools = () => {
  const { portfolioData, updatePortfolioData } = usePortfolio();
  const services = portfolioData.services || {};
  const tools = portfolioData.tools || {};

  const serviceList = services.list || [];
  const toolCategories = tools.categories || [];

  // Services handlers
  const handleServiceChange = (index, field, val) => {
    const updated = [...serviceList];
    updated[index] = { ...updated[index], [field]: val };
    updatePortfolioData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        list: updated
      }
    }));
  };

  const handleServiceItemsChange = (index, text) => {
    const items = text.split('\n').filter(Boolean);
    handleServiceChange(index, 'items', items);
  };

  const addService = () => {
    const newService = {
      id: `srv-${Date.now()}`,
      icon: "Sparkles",
      title: "New Service",
      items: ["Capability 1", "Capability 2", "Capability 3"]
    };
    updatePortfolioData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        list: [...serviceList, newService]
      }
    }));
  };

  const removeService = (index) => {
    const updated = serviceList.filter((_, i) => i !== index);
    updatePortfolioData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        list: updated
      }
    }));
  };

  // Tool categories handlers
  const handleToolCategoryChange = (catIdx, field, val) => {
    const updated = [...toolCategories];
    updated[catIdx] = { ...updated[catIdx], [field]: val };
    updatePortfolioData((prev) => ({
      ...prev,
      tools: {
        ...prev.tools,
        categories: updated
      }
    }));
  };

  const addToolToCategory = (catIdx) => {
    const updated = [...toolCategories];
    const cat = updated[catIdx];
    cat.tools = [...(cat.tools || []), { name: "New Tool", icon: "Sparkles", color: "#4F46E5" }];
    updatePortfolioData((prev) => ({
      ...prev,
      tools: {
        ...prev.tools,
        categories: updated
      }
    }));
  };

  const removeToolFromCategory = (catIdx, toolIdx) => {
    const updated = [...toolCategories];
    const cat = updated[catIdx];
    cat.tools = cat.tools.filter((_, i) => i !== toolIdx);
    updatePortfolioData((prev) => ({
      ...prev,
      tools: {
        ...prev.tools,
        categories: updated
      }
    }));
  };

  const handleToolItemChange = (catIdx, toolIdx, field, val) => {
    const updated = [...toolCategories];
    const cat = updated[catIdx];
    cat.tools[toolIdx] = { ...cat.tools[toolIdx], [field]: val };
    updatePortfolioData((prev) => ({
      ...prev,
      tools: {
        ...prev.tools,
        categories: updated
      }
    }));
  };

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Wrench className="w-5 h-5 text-indigo-600" />
          <span>Services & Toolkits</span>
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Manage services offerings (What I Do) and your software toolkit (Design, AI, and Collaboration tools).
        </p>
      </div>

      {/* Services List */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-800">What I Do (Services)</h3>
            <p className="text-xs text-slate-500">Each service card displays an icon, title, and bullet capabilities.</p>
          </div>
          <button
            type="button"
            onClick={addService}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-xs font-semibold"
          >
            <Plus className="w-4 h-4" /> Add Service Card
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceList.map((service, index) => (
            <div key={service.id || index} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-4 relative">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-400">
                  Service #{index + 1}
                </span>
                <button
                  type="button"
                  onClick={() => removeService(index)}
                  className="text-rose-500 hover:text-rose-700 p-1"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <IconPicker
                label="Service Icon"
                value={service.icon}
                onChange={(icon) => handleServiceChange(index, 'icon', icon)}
              />

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Service Title</label>
                <input
                  type="text"
                  value={service.title}
                  onChange={(e) => handleServiceChange(index, 'title', e.target.value)}
                  placeholder="e.g. UI Design"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Bullet Points (One per line)
                </label>
                <textarea
                  rows="4"
                  value={(service.items || []).join('\n')}
                  onChange={(e) => handleServiceItemsChange(index, e.target.value)}
                  placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white font-mono text-xs"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Toolkit Categories */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
        <div>
          <h3 className="text-base font-bold text-slate-800">Tools I Use (Toolkit)</h3>
          <p className="text-xs text-slate-500">Add or edit software tools, logos, and accent brand colors.</p>
        </div>

        <div className="space-y-6">
          {toolCategories.map((cat, catIdx) => (
            <div key={cat.id || catIdx} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-4">
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  value={cat.title}
                  onChange={(e) => handleToolCategoryChange(catIdx, 'title', e.target.value)}
                  placeholder="Category Name (e.g. Design Tools)"
                  className="font-bold text-sm text-slate-800 bg-transparent border-b border-slate-300 pb-1 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => addToolToCategory(catIdx)}
                  className="inline-flex items-center gap-1 text-xs text-indigo-600 font-semibold px-2 py-1 bg-indigo-50 rounded"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Tool
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {(cat.tools || []).map((t, toolIdx) => (
                  <div key={toolIdx} className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <input
                      type="color"
                      value={t.color || "#4F46E5"}
                      onChange={(e) => handleToolItemChange(catIdx, toolIdx, 'color', e.target.value)}
                      className="w-7 h-7 rounded border border-slate-200 cursor-pointer p-0.5"
                    />
                    <input
                      type="text"
                      value={t.name}
                      onChange={(e) => handleToolItemChange(catIdx, toolIdx, 'name', e.target.value)}
                      placeholder="Tool Name"
                      className="w-full text-xs font-semibold text-slate-700 border-0 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => removeToolFromCategory(catIdx, toolIdx)}
                      className="text-slate-400 hover:text-rose-500 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabServicesTools;

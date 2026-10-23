import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Briefcase, Plus, Trash2 } from 'lucide-react';
import IconPicker from './IconPicker';

export const TabStats = () => {
  const { portfolioData, updatePortfolioData } = usePortfolio();
  const stats = portfolioData.stats || [];

  const handleStatChange = (index, field, val) => {
    const updated = [...stats];
    updated[index] = { ...updated[index], [field]: val };
    updatePortfolioData((prev) => ({
      ...prev,
      stats: updated
    }));
  };

  const addStat = () => {
    const newStat = {
      id: `stat-${Date.now()}`,
      icon: "Sparkles",
      value: "50+",
      label: "Designs",
      sublabel: "Created & Shipped"
    };
    updatePortfolioData((prev) => ({
      ...prev,
      stats: [...stats, newStat]
    }));
  };

  const removeStat = (index) => {
    const updated = stats.filter((_, i) => i !== index);
    updatePortfolioData((prev) => ({
      ...prev,
      stats: updated
    }));
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-indigo-600" />
            <span>Experience, Projects & Companies Stats</span>
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Configure the metrics highlight cards (Years Experience, Projects Completed, Companies Worked).
          </p>
        </div>
        <button
          type="button"
          onClick={addStat}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-xs font-semibold"
        >
          <Plus className="w-4 h-4" /> Add Metric Card
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={stat.id || index} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 relative">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs uppercase tracking-wider text-slate-400">
                Card #{index + 1}
              </span>
              <button
                type="button"
                onClick={() => removeStat(index)}
                className="text-rose-400 hover:text-rose-600 p-1"
                title="Remove Stat"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <IconPicker
              label="Card Icon"
              value={stat.icon}
              onChange={(icon) => handleStatChange(index, 'icon', icon)}
            />

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Value (Big Text)</label>
                <input
                  type="text"
                  value={stat.value}
                  onChange={(e) => handleStatChange(index, 'value', e.target.value)}
                  placeholder="e.g. 3+"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Label</label>
                <input
                  type="text"
                  value={stat.label}
                  onChange={(e) => handleStatChange(index, 'label', e.target.value)}
                  placeholder="e.g. Years"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Sublabel Description</label>
              <input
                type="text"
                value={stat.sublabel}
                onChange={(e) => handleStatChange(index, 'sublabel', e.target.value)}
                placeholder="e.g. Professional Experience"
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabStats;

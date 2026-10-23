import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { UserCheck, Plus, Trash2 } from 'lucide-react';

export const TabAbout = () => {
  const { portfolioData, updatePortfolioData } = usePortfolio();
  const about = portfolioData.about || {};
  const whyWork = portfolioData.whyWork || {};
  const reasons = whyWork.reasons || [];

  const handleAboutChange = (field, val) => {
    updatePortfolioData((prev) => ({
      ...prev,
      about: {
        ...prev.about,
        [field]: val
      }
    }));
  };

  const handleWhyWorkChange = (field, val) => {
    updatePortfolioData((prev) => ({
      ...prev,
      whyWork: {
        ...prev.whyWork,
        [field]: val
      }
    }));
  };

  const handleReasonChange = (index, val) => {
    const updated = [...reasons];
    updated[index] = val;
    handleWhyWorkChange('reasons', updated);
  };

  const addReason = () => {
    handleWhyWorkChange('reasons', [...reasons, "New reason to collaborate"]);
  };

  const removeReason = (index) => {
    const updated = reasons.filter((_, i) => i !== index);
    handleWhyWorkChange('reasons', updated);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <UserCheck className="w-5 h-5 text-indigo-600" />
          <span>About Me & Value Propositions</span>
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Customize your biography narrative and the "Why Work With Me" advantages list.
        </p>
      </div>

      {/* About Me Section */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-800">About Me</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Badge</label>
            <input
              type="text"
              value={about.badge || ""}
              onChange={(e) => handleAboutChange('badge', e.target.value)}
              placeholder="e.g. Get to know me"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Main Heading</label>
            <input
              type="text"
              value={about.title || ""}
              onChange={(e) => handleAboutChange('title', e.target.value)}
              placeholder="e.g. About Me"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Biography Content</label>
          <textarea
            rows="5"
            value={about.content || ""}
            onChange={(e) => handleAboutChange('content', e.target.value)}
            placeholder="Write your story and design philosophy..."
            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm leading-relaxed resize-none"
          />
        </div>
      </div>

      {/* Why Work With Me Section */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-800">Why Work With Me (Advantages)</h3>
            <p className="text-xs text-slate-500">Key reasons and value propositions clients gain by hiring you.</p>
          </div>
          <button
            type="button"
            onClick={addReason}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-xs font-semibold"
          >
            <Plus className="w-4 h-4" /> Add Reason
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Badge</label>
            <input
              type="text"
              value={whyWork.badge || ""}
              onChange={(e) => handleWhyWorkChange('badge', e.target.value)}
              placeholder="e.g. The advantage"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Heading</label>
            <input
              type="text"
              value={whyWork.title || ""}
              onChange={(e) => handleWhyWorkChange('title', e.target.value)}
              placeholder="e.g. Why Work With Me"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
            />
          </div>
        </div>

        <div className="space-y-2.5">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center flex-shrink-0">
                {index + 1}
              </span>
              <input
                type="text"
                value={reason}
                onChange={(e) => handleReasonChange(index, e.target.value)}
                placeholder="e.g. User-first design mindset"
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
              />
              <button
                type="button"
                onClick={() => removeReason(index)}
                className="p-1.5 text-rose-500 hover:text-rose-700"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabAbout;

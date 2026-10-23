import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { 
  Briefcase, 
  MessageSquareQuote, 
  HelpCircle, 
  Layers, 
  DollarSign, 
  Trophy, 
  Plus, 
  Trash2, 
  Star,
  Sparkles
} from 'lucide-react';
import ImageUploader from './ImageUploader';

export const TabAdditionalSections = () => {
  const { portfolioData, updatePortfolioData } = usePortfolio();
  const [subTab, setSubTab] = useState('experience');

  const experience = portfolioData.experience || {};
  const testimonials = portfolioData.testimonials || {};
  const process = portfolioData.process || {};
  const pricing = portfolioData.pricing || {};
  const faq = portfolioData.faq || {};
  const awards = portfolioData.awards || {};

  // Generic updater
  const updateSub = (key, data) => {
    updatePortfolioData((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        ...data
      }
    }));
  };

  /* =========================================================================
     1. WORK EXPERIENCE (TIMELINE)
     ========================================================================= */
  const expItems = experience.items || [];
  const handleExpChange = (idx, field, val) => {
    const updated = [...expItems];
    updated[idx] = { ...updated[idx], [field]: val };
    updateSub('experience', { items: updated });
  };
  const addExp = () => {
    const newItem = {
      id: `exp-${Date.now()}`,
      role: "Senior UI/UX Designer",
      company: "Company Name",
      period: "2024 - Present",
      location: "Remote",
      description: "Led core product UX, designed design systems, and ran usability studies.",
      skills: ["Figma", "Design Systems"]
    };
    updateSub('experience', { items: [...expItems, newItem] });
  };
  const removeExp = (idx) => {
    updateSub('experience', { items: expItems.filter((_, i) => i !== idx) });
  };

  /* =========================================================================
     2. TESTIMONIALS (REVIEWS)
     ========================================================================= */
  const testItems = testimonials.items || [];
  const handleTestChange = (idx, field, val) => {
    const updated = [...testItems];
    updated[idx] = { ...updated[idx], [field]: val };
    updateSub('testimonials', { items: updated });
  };
  const addTest = () => {
    const newItem = {
      id: `test-${Date.now()}`,
      name: "New Client",
      role: "Founder & CEO",
      company: "Startup X",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop",
      rating: 5,
      quote: "Kesavan delivered outstanding design quality that exceeded our expectations."
    };
    updateSub('testimonials', { items: [...testItems, newItem] });
  };
  const removeTest = (idx) => {
    updateSub('testimonials', { items: testItems.filter((_, i) => i !== idx) });
  };

  /* =========================================================================
     3. PRICING PACKAGES
     ========================================================================= */
  const pricingPlans = pricing.plans || [];
  const handlePlanChange = (idx, field, val) => {
    const updated = [...pricingPlans];
    updated[idx] = { ...updated[idx], [field]: val };
    updateSub('pricing', { plans: updated });
  };

  /* =========================================================================
     4. FAQ
     ========================================================================= */
  const faqItems = faq.items || [];
  const handleFaqChange = (idx, field, val) => {
    const updated = [...faqItems];
    updated[idx] = { ...updated[idx], [field]: val };
    updateSub('faq', { items: updated });
  };
  const addFaq = () => {
    updateSub('faq', { items: [...faqItems, { q: "New Question?", a: "Helpful answer here." }] });
  };
  const removeFaq = (idx) => {
    updateSub('faq', { items: faqItems.filter((_, i) => i !== idx) });
  };

  return (
    <div className="space-y-8 font-sans">
      <div>
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-600" />
          <span>Advanced Portfolio Modules & Sections</span>
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Customize content for Career Timeline, Testimonials, Design Process, Pricing Packages, and FAQs.
        </p>
      </div>

      {/* Sub-Navigation Pills */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-200">
        {[
          { id: 'experience', label: 'Career Timeline', icon: Briefcase },
          { id: 'testimonials', label: 'Testimonials (Social Proof)', icon: MessageSquareQuote },
          { id: 'process', label: 'Design Process', icon: Layers },
          { id: 'pricing', label: 'Pricing & Retainers', icon: DollarSign },
          { id: 'faq', label: 'FAQ Accordion', icon: HelpCircle }
        ].map((t) => {
          const Icon = t.icon;
          const active = subTab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setSubTab(t.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                active 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Subtab 1: Experience Timeline */}
      {subTab === 'experience' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-slate-800">Career Experience Items</h3>
            <button
              type="button"
              onClick={addExp}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-semibold"
            >
              <Plus className="w-4 h-4" /> Add Role
            </button>
          </div>

          <div className="space-y-4">
            {expItems.map((item, idx) => (
              <div key={item.id || idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs uppercase text-slate-400">Position #{idx + 1}</span>
                  <button type="button" onClick={() => removeExp(idx)} className="text-rose-500 hover:text-rose-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    value={item.role}
                    onChange={(e) => handleExpChange(idx, 'role', e.target.value)}
                    placeholder="Role (e.g. Lead UI/UX Designer)"
                    className="px-3 py-2 border rounded-lg text-xs font-bold"
                  />
                  <input
                    type="text"
                    value={item.company}
                    onChange={(e) => handleExpChange(idx, 'company', e.target.value)}
                    placeholder="Company Name"
                    className="px-3 py-2 border rounded-lg text-xs"
                  />
                  <input
                    type="text"
                    value={item.period}
                    onChange={(e) => handleExpChange(idx, 'period', e.target.value)}
                    placeholder="Period (e.g. 2023 - Present)"
                    className="px-3 py-2 border rounded-lg text-xs font-mono"
                  />
                </div>
                <textarea
                  rows="2"
                  value={item.description}
                  onChange={(e) => handleExpChange(idx, 'description', e.target.value)}
                  placeholder="Responsibilities & achievements..."
                  className="w-full px-3 py-2 border rounded-lg text-xs resize-none"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Subtab 2: Testimonials */}
      {subTab === 'testimonials' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-slate-800">Client Reviews</h3>
            <button
              type="button"
              onClick={addTest}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-semibold"
            >
              <Plus className="w-4 h-4" /> Add Testimonial
            </button>
          </div>

          <div className="space-y-4">
            {testItems.map((item, idx) => (
              <div key={item.id || idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs uppercase text-slate-400">Reviewer #{idx + 1}</span>
                  <button type="button" onClick={() => removeTest(idx)} className="text-rose-500 hover:text-rose-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => handleTestChange(idx, 'name', e.target.value)}
                    placeholder="Client Name"
                    className="px-3 py-2 border rounded-lg text-xs font-bold"
                  />
                  <input
                    type="text"
                    value={item.role}
                    onChange={(e) => handleTestChange(idx, 'role', e.target.value)}
                    placeholder="Role (e.g. VP of Product)"
                    className="px-3 py-2 border rounded-lg text-xs"
                  />
                  <input
                    type="text"
                    value={item.company}
                    onChange={(e) => handleTestChange(idx, 'company', e.target.value)}
                    placeholder="Company"
                    className="px-3 py-2 border rounded-lg text-xs"
                  />
                </div>
                <ImageUploader
                  label="Reviewer Avatar"
                  currentValue={item.avatar}
                  onUploadComplete={(url) => handleTestChange(idx, 'avatar', url)}
                />
                <textarea
                  rows="3"
                  value={item.quote}
                  onChange={(e) => handleTestChange(idx, 'quote', e.target.value)}
                  placeholder="Quote narrative..."
                  className="w-full px-3 py-2 border rounded-lg text-xs italic resize-none"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Subtab 3: Design Process */}
      {subTab === 'process' && (
        <div className="space-y-6">
          <h3 className="font-bold text-base text-slate-800">4-Step Design Methodology</h3>
          <div className="space-y-4">
            {(process.steps || []).map((st, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-indigo-600 text-sm">Step {st.step}</span>
                  <input
                    type="text"
                    value={st.title}
                    onChange={(e) => {
                      const updated = [...process.steps];
                      updated[idx].title = e.target.value;
                      updateSub('process', { steps: updated });
                    }}
                    className="font-bold text-sm text-slate-900 border-b pb-1 focus:outline-none flex-grow"
                  />
                </div>
                <textarea
                  rows="2"
                  value={st.desc}
                  onChange={(e) => {
                    const updated = [...process.steps];
                    updated[idx].desc = e.target.value;
                    updateSub('process', { steps: updated });
                  }}
                  className="w-full px-3 py-2 border rounded-lg text-xs resize-none"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Subtab 4: Pricing Packages */}
      {subTab === 'pricing' && (
        <div className="space-y-6">
          <h3 className="font-bold text-base text-slate-800">Pricing Packages & Retainers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pricingPlans.map((plan, idx) => (
              <div key={plan.id || idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                <input
                  type="text"
                  value={plan.name}
                  onChange={(e) => handlePlanChange(idx, 'name', e.target.value)}
                  className="font-bold text-sm border-b pb-1 w-full"
                />
                <input
                  type="text"
                  value={plan.price}
                  onChange={(e) => handlePlanChange(idx, 'price', e.target.value)}
                  className="text-2xl font-black text-indigo-600 w-full"
                />
                <textarea
                  rows="2"
                  value={plan.description}
                  onChange={(e) => handlePlanChange(idx, 'description', e.target.value)}
                  className="w-full px-2 py-1 border rounded text-xs resize-none"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Subtab 5: FAQ */}
      {subTab === 'faq' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-slate-800">Frequently Asked Questions</h3>
            <button
              type="button"
              onClick={addFaq}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-semibold"
            >
              <Plus className="w-4 h-4" /> Add Question
            </button>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <input
                    type="text"
                    value={item.q}
                    onChange={(e) => handleFaqChange(idx, 'q', e.target.value)}
                    placeholder="Question?"
                    className="font-bold text-xs text-slate-900 w-full border-b pb-1"
                  />
                  <button type="button" onClick={() => removeFaq(idx)} className="text-rose-500 hover:text-rose-700">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <textarea
                  rows="2"
                  value={item.a}
                  onChange={(e) => handleFaqChange(idx, 'a', e.target.value)}
                  placeholder="Answer..."
                  className="w-full text-xs text-slate-600 border rounded p-2 resize-none"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TabAdditionalSections;

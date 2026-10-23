import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { 
  GripVertical, 
  Eye, 
  EyeOff, 
  ArrowUp, 
  ArrowDown, 
  Layout, 
  Sparkles,
  Layers,
  Zap,
  CheckCircle2
} from 'lucide-react';

export const TabSections = () => {
  const { 
    portfolioData, 
    updatePortfolioData, 
    reorderSections,
    updateSectionPreset,
    updateSectionAnimation 
  } = usePortfolio();

  const sections = portfolioData.sections || [];
  const contact = portfolioData.contact || {};

  const [draggedIndex, setDraggedIndex] = useState(null);

  // Toggle Section Visibility
  const toggleVisibility = (id) => {
    const updated = sections.map((sec) => 
      sec.id === id ? { ...sec, enabled: sec.enabled === false ? true : false } : sec
    );
    reorderSections(updated);
  };

  // Move Section Up
  const moveUp = (index) => {
    if (index === 0) return;
    const newSections = [...sections];
    const temp = newSections[index - 1];
    newSections[index - 1] = newSections[index];
    newSections[index] = temp;
    reorderSections(newSections);
  };

  // Move Section Down
  const moveDown = (index) => {
    if (index === sections.length - 1) return;
    const newSections = [...sections];
    const temp = newSections[index + 1];
    newSections[index + 1] = newSections[index];
    newSections[index] = temp;
    reorderSections(newSections);
  };

  // Drag and Drop
  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;
    const newSections = [...sections];
    const draggedItem = newSections[draggedIndex];
    newSections.splice(draggedIndex, 1);
    newSections.splice(index, 0, draggedItem);
    setDraggedIndex(index);
    reorderSections(newSections);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const animationOptions = [
    { label: "Fade Up (Smooth)", val: "fade-up" },
    { label: "Fade Down", val: "fade-down" },
    { label: "Fade Left", val: "fade-left" },
    { label: "Fade Right", val: "fade-right" },
    { label: "Zoom In (Pop)", val: "zoom-in" },
    { label: "Zoom Out (Reveal)", val: "zoom-out" },
    { label: "Bounce Spring", val: "bounce" },
    { label: "3D Flip", val: "flip" },
    { label: "Subtle Fade", val: "fade-in" },
    { label: "None (Static)", val: "none" }
  ];

  const presetDescriptions = {
    hero: [
      { id: "preset1", name: "Preset 1: Modern Split (Classic portrait + copy)" },
      { id: "preset2", name: "Preset 2: Centered Creative Spotlight (Big banner)" },
      { id: "preset3", name: "Preset 3: Editorial Typography Minimalist" },
      { id: "preset4", name: "Preset 4: Glassmorphic Floating Card" },
      { id: "preset5", name: "Preset 5: Modern Designer Bento Hero" }
    ],
    stats: [
      { id: "preset1", name: "Preset 1: Minimal 3 Elevated Cards" },
      { id: "preset2", name: "Preset 2: Horizontal Sleek Glass Strip" },
      { id: "preset3", name: "Preset 3: Gradient Glowing Ring Metrics" },
      { id: "preset4", name: "Preset 4: Dark High-Impact Counter Bar" },
      { id: "preset5", name: "Preset 5: Bento Micro-Metrics" }
    ],
    about: [
      { id: "preset1", name: "Preset 1: Clean Editorial Center" },
      { id: "preset2", name: "Preset 2: Split Story & Highlight Card" },
      { id: "preset3", name: "Preset 3: 3-Stage Design Methodology Journey" },
      { id: "preset4", name: "Preset 4: Dark Studio Spotlight" },
      { id: "preset5", name: "Preset 5: Modern Bento Profile Matrix" }
    ],
    services: [
      { id: "preset1", name: "Preset 1: Clean 3-Card Grid" },
      { id: "preset2", name: "Preset 2: Interactive Focus Cards" },
      { id: "preset3", name: "Preset 3: Horizontal Numbered Rows (01, 02, 03)" },
      { id: "preset4", name: "Preset 4: Luminous Gradient Glass Cards" },
      { id: "preset5", name: "Preset 5: Modern Bento Service Matrix" }
    ],
    tools: [
      { id: "preset1", name: "Preset 1: Categorized Card Grid" },
      { id: "preset2", name: "Preset 2: Unified Interactive Badge Cloud" },
      { id: "preset3", name: "Preset 3: Minimalist Chip Matrix" },
      { id: "preset4", name: "Preset 4: Dark Neon Studio Matrix" },
      { id: "preset5", name: "Preset 5: Bento Toolkit Showcase" }
    ],
    whywork: [
      { id: "preset1", name: "Preset 1: Checkmark 2-Column Grid" },
      { id: "preset2", name: "Preset 2: Numbered Value Pillars" },
      { id: "preset3", name: "Preset 3: Split Showcase with Highlight Callout" },
      { id: "preset4", name: "Preset 4: Dark Glass Luminous Banners" },
      { id: "preset5", name: "Preset 5: Bento Advantage Matrix" }
    ],
    selectedworks: [
      { id: "preset1", name: "Preset 1: 2-Column Classic Showcase" },
      { id: "preset2", name: "Preset 2: Interactive Category Filter Tabs" },
      { id: "preset3", name: "Preset 3: Flagship Featured Project + Grid" },
      { id: "preset4", name: "Preset 4: High-End Minimalist Studio Row List" },
      { id: "preset5", name: "Preset 5: Modern Bento Project Mosaic" }
    ],
    contact: [
      { id: "preset1", name: "Preset 1: Modern Split (Info cards + form)" },
      { id: "preset2", name: "Preset 2: Floating Glass Card" },
      { id: "preset3", name: "Preset 3: Minimal Centered Compact" },
      { id: "preset4", name: "Preset 4: Dark Studio Gradient" },
      { id: "preset5", name: "Preset 5: Bento Grid Creative" }
    ],
    clients: [
      { id: "preset1", name: "Preset 1: Smooth Infinite Scrolling Marquee" },
      { id: "preset2", name: "Preset 2: Clean Static Brand Grid" },
      { id: "preset3", name: "Preset 3: Glass Floating Badges" },
      { id: "preset4", name: "Preset 4: Dark Monochromatic Ribbon" },
      { id: "preset5", name: "Preset 5: Bento Partner Tiles" }
    ],
    process: [
      { id: "preset1", name: "Preset 1: Step-by-Step Stepper Cards" },
      { id: "preset2", name: "Preset 2: 4-Card Bento Workflow Grid" },
      { id: "preset3", name: "Preset 3: Numbered Minimalist Grid" },
      { id: "preset4", name: "Preset 4: Interactive Tab Process" },
      { id: "preset5", name: "Preset 5: Circular Flow Graphic" }
    ],
    experience: [
      { id: "preset1", name: "Preset 1: Vertical Connected Timeline (Classic)" },
      { id: "preset2", name: "Preset 2: Clean Split Cards" },
      { id: "preset3", name: "Preset 3: Bento Company Badges" },
      { id: "preset4", name: "Preset 4: Minimalist Compact Table" },
      { id: "preset5", name: "Preset 5: Dual Column Milestone Cards" }
    ],
    testimonials: [
      { id: "preset1", name: "Preset 1: 3-Column Review Cards" },
      { id: "preset2", name: "Preset 2: Full-Width Flagship Endorsement" },
      { id: "preset3", name: "Preset 3: Masonry Wall of Love" },
      { id: "preset4", name: "Preset 4: Dark Studio Spotlight" },
      { id: "preset5", name: "Preset 5: Bento Review Matrix" }
    ],
    pricing: [
      { id: "preset1", name: "Preset 1: 3-Tier Modern Cards with Popular Glow" },
      { id: "preset2", name: "Preset 2: Minimal Toggle Cards" },
      { id: "preset3", name: "Preset 3: Bento Pricing Tiles" },
      { id: "preset4", name: "Preset 4: Dark Studio Retainer Cards" },
      { id: "preset5", name: "Preset 5: Single All-Inclusive Retainer Spotlight" }
    ],
    faq: [
      { id: "preset1", name: "Preset 1: Clean Accordion (Original)" },
      { id: "preset2", name: "Preset 2: 2-Column Grid FAQ" },
      { id: "preset3", name: "Preset 3: Glassmorphic Q&A Cards" },
      { id: "preset4", name: "Preset 4: Dark Studio FAQ" },
      { id: "preset5", name: "Preset 5: Bento FAQ Layout" }
    ],
    awards: [
      { id: "preset1", name: "Preset 1: Minimal Award Row List" },
      { id: "preset2", name: "Preset 2: Trophy Showcase Badges" },
      { id: "preset3", name: "Preset 3: Timeline of Recognition" },
      { id: "preset4", name: "Preset 4: Dark Studio Honors" },
      { id: "preset5", name: "Preset 5: Bento Credentials Matrix" }
    ],
    figmaViewer: [
      { id: "preset1", name: "Preset 1: Full-Width Live Figma Canvas" },
      { id: "preset2", name: "Preset 2: Centered Framed Canvas with Inspection" }
    ]
  };

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-600" />
          <span>Dynamic Drag & Drop Layout, 5 Presets & Animations</span>
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Every section has <strong>5 distinct design presets</strong> and <strong>dynamic scroll animations</strong>. Drag and drop rows or use arrows to rearrange your portfolio in seconds!
        </p>
      </div>

      {/* Sections List */}
      <div className="space-y-4">
        {sections.map((section, index) => {
          const presetsList = presetDescriptions[section.id] || [
            { id: "preset1", name: "Preset 1: Default Design" },
            { id: "preset2", name: "Preset 2: Alternative Design" }
          ];

          return (
            <div
              key={section.id}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragEnd={handleDragEnd}
              className={`p-5 bg-white rounded-2xl border transition-all select-none space-y-4 ${
                draggedIndex === index 
                  ? 'opacity-40 border-indigo-500 bg-indigo-50/50 scale-[0.99]' 
                  : 'border-slate-200/90 shadow-sm hover:shadow-md'
              } ${section.enabled === false ? 'bg-slate-50 opacity-60' : ''}`}
            >
              {/* Top Row: Reorder Handle, Title & Visibility Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-slate-400 hover:text-indigo-600 cursor-grab p-1">
                    <GripVertical className="w-5 h-5" />
                  </div>
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{section.name}</h4>
                    <span className="text-[11px] text-slate-400 font-mono">#{section.id}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => moveUp(index)}
                    disabled={index === 0}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-slate-100 disabled:opacity-30"
                    title="Move Up"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => moveDown(index)}
                    disabled={index === sections.length - 1}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-slate-100 disabled:opacity-30"
                    title="Move Down"
                  >
                    <ArrowDown className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleVisibility(section.id)}
                    className={`p-2 rounded-xl transition-colors ${
                      section.enabled !== false 
                        ? 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100' 
                        : 'bg-rose-50 text-rose-500 hover:bg-rose-100'
                    }`}
                    title={section.enabled !== false ? "Visible" : "Hidden"}
                  >
                    {section.enabled !== false ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Bottom Controls: 5 Preset Selector & Animation Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-100">
                {/* 5 Preset Selector */}
                <div>
                  <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                    <span>Design Preset (5 Layout Options)</span>
                  </label>
                  <select
                    value={section.preset || "preset1"}
                    onChange={(e) => {
                      updateSectionPreset(section.id, e.target.value);
                      if (section.id === 'contact') {
                        updatePortfolioData((prev) => ({
                          ...prev,
                          contact: { ...prev.contact, preset: e.target.value }
                        }));
                      }
                    }}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 bg-slate-50 focus:bg-white focus:outline-none focus:border-indigo-500"
                  >
                    {presetsList.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                    <option value="custom" className="font-bold text-indigo-600">
                      🎨 Custom Design (WordPress Drag & Drop Canvas)
                    </option>
                  </select>
                  {section.preset === 'custom' && (
                    <div className="mt-2 flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200/80">
                      <span className="text-xs text-indigo-700 font-bold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                        Custom Drag-and-Drop Active
                      </span>
                      <span className="text-[11px] text-purple-700 font-semibold">
                        Edit in Builder Tab →
                      </span>
                    </div>
                  )}
                </div>

                {/* Animation Type & Duration */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Scroll Animation</span>
                    </label>
                    <select
                      value={section.animation || "fade-up"}
                      onChange={(e) => updateSectionAnimation(section.id, { animation: e.target.value })}
                      className="w-full px-2.5 py-2 border border-slate-200 rounded-lg text-xs text-slate-800 bg-slate-50 focus:bg-white"
                    >
                      {animationOptions.map((opt) => (
                        <option key={opt.val} value={opt.val}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1">
                      Duration (Sec)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="0.2"
                      max="2.5"
                      value={section.animDuration || 0.8}
                      onChange={(e) => updateSectionAnimation(section.id, { animDuration: parseFloat(e.target.value) || 0.8 })}
                      className="w-full px-2.5 py-2 border border-slate-200 rounded-lg text-xs text-slate-800 bg-slate-50"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabSections;

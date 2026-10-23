import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import DynamicIcon from '../../components/DynamicIcon';
import DynamicButton from '../../components/DynamicButton';
import { 
  CODING_PORTFOLIO_HERO, 
  CODING_PORTFOLIO_SKILLS, 
  UI_UX_PORTFOLIO_HERO 
} from '../../data/defaultCustomDesigns';
import { 
  GripVertical, 
  Plus, 
  Trash2, 
  Copy, 
  ArrowUp, 
  ArrowDown, 
  Palette, 
  Type, 
  Square, 
  Terminal, 
  Code2, 
  GitCommit, 
  Cpu, 
  Sparkles, 
  Image as ImageIcon, 
  Columns, 
  Sliders, 
  CheckCircle2, 
  Check, 
  Layers, 
  LayoutTemplate,
  Monitor,
  Flame,
  Zap,
  RotateCcw
} from 'lucide-react';

export const CustomSectionBuilder = () => {
  const { 
    portfolioData, 
    updatePortfolioData, 
    updateCustomDesign, 
    addCustomSection, 
    deleteCustomSection,
    updateSectionPreset 
  } = usePortfolio();

  const sections = portfolioData.sections || [];
  const customDesigns = portfolioData.customDesigns || {};

  // Active Section being edited
  const [selectedSectionId, setSelectedSectionId] = useState(sections[0]?.id || 'hero');
  const [selectedElementId, setSelectedElementId] = useState(null);
  const [activeInspectorTab, setActiveInspectorTab] = useState('element'); // 'element' or 'background'
  const [draggedElementIndex, setDraggedElementIndex] = useState(null);
  const [savedNotice, setSavedNotice] = useState(false);

  // Active section data
  const currentSection = sections.find((s) => s.id === selectedSectionId) || sections[0] || {};
  const currentDesign = customDesigns[selectedSectionId] || customDesigns['hero'] || CODING_PORTFOLIO_HERO;
  const elements = currentDesign.elements || [];
  const background = currentDesign.background || {};

  // Active selected element
  const selectedElement = elements.find((e) => e.id === selectedElementId) || elements[0] || null;

  const triggerSaveNotice = () => {
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2000);
  };

  // Switch preset of current section to custom if not already
  const ensureCustomPreset = () => {
    if (currentSection.preset !== 'custom') {
      updateSectionPreset(selectedSectionId, 'custom');
      triggerSaveNotice();
    }
  };

  // Load Pre-built Template into current section
  const handleLoadTemplate = (templateData, templateName) => {
    if (window.confirm(`Load the "${templateName}" template into this section? This will replace current custom blocks in this section.`)) {
      ensureCustomPreset();
      updateCustomDesign(selectedSectionId, JSON.parse(JSON.stringify(templateData)));
      triggerSaveNotice();
    }
  };

  // Background Updater
  const handleUpdateBackground = (field, value) => {
    ensureCustomPreset();
    updateCustomDesign(selectedSectionId, (prev) => ({
      ...prev,
      background: {
        ...(prev.background || {}),
        [field]: value
      }
    }));
    triggerSaveNotice();
  };

  // Element Property Updater
  const handleUpdateElement = (elemId, field, value) => {
    ensureCustomPreset();
    updateCustomDesign(selectedSectionId, (prev) => {
      const updatedElements = (prev.elements || []).map((elem) => {
        if (elem.id === elemId) {
          return { ...elem, [field]: value };
        }
        return elem;
      });
      return {
        ...prev,
        elements: updatedElements
      };
    });
    triggerSaveNotice();
  };

  // Add New Element to Section
  const handleAddElement = (type) => {
    ensureCustomPreset();
    const newId = `elem_${type}_${Date.now()}`;
    let newElem = { id: newId, type };

    switch (type) {
      case 'heading':
        newElem = {
          ...newElem,
          text: "Engineered for Extreme Scalability",
          tag: "h2",
          size: "text-4xl sm:text-5xl",
          align: "left",
          isGradient: true,
          gradientFrom: "#38bdf8",
          gradientTo: "#818cf8",
          color: "#FFFFFF",
          weight: "font-extrabold"
        };
        break;

      case 'badge':
        newElem = {
          ...newElem,
          text: "⚡ VERIFIED FULL-STACK ARCHITECT",
          style: "glowing-pill",
          icon: "Terminal",
          color: "emerald"
        };
        break;

      case 'paragraph':
        newElem = {
          ...newElem,
          text: "Specializing in high-throughput distributed systems, real-time reactive frontends, and developer-centric design libraries.",
          size: "text-base",
          align: "left",
          color: "#94a3b8"
        };
        break;

      case 'buttonGroup':
        newElem = {
          ...newElem,
          align: "left",
          buttons: [
            {
              id: `btn_1_${Date.now()}`,
              label: "Explore Live Projects",
              type: "route",
              route: "#portfolio",
              icon: "Code2",
              iconPosition: "prefix",
              variant: "primary"
            },
            {
              id: `btn_2_${Date.now()}`,
              label: "Download Architecture PDF",
              type: "file",
              fileUrl: "",
              icon: "Download",
              iconPosition: "suffix",
              variant: "outline"
            }
          ]
        };
        break;

      case 'terminal':
        newElem = {
          ...newElem,
          filename: "system.config.ts",
          language: "typescript",
          code: `export const techMatrix = {
  stack: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind', 'GraphQL'],
  architecture: 'Serverless Edge Microservices',
  reliability: '99.99% Uptime',
  codeStyle: 'Strict TypeScript & Clean Architecture'
};`,
          theme: "cyberpunk",
          showLineNumbers: true,
          showCopy: true
        };
        break;

      case 'devStats':
        newElem = {
          ...newElem,
          title: "Engineering Track Record",
          items: [
            { id: "s1", label: "Git Commits", value: "3,200+", icon: "GitCommit", subtext: "100% test-driven" },
            { id: "s2", label: "PRs Reviewed & Merged", value: "180+", icon: "GitPullRequest", subtext: "Zero critical bugs" },
            { id: "s3", label: "Cloud Services Deployed", value: "30+", icon: "Cpu", subtext: "Docker & Kubernetes" },
            { id: "s4", label: "PageSpeed Index", value: "99/100", icon: "Zap", subtext: "Core Web Vitals" }
          ]
        };
        break;

      case 'techStack':
        newElem = {
          ...newElem,
          title: "Production Stack & Frameworks",
          skills: [
            { name: "React 19", icon: "Atom", level: "98%", color: "#38bdf8" },
            { name: "TypeScript", icon: "Code2", level: "95%", color: "#60a5fa" },
            { name: "Next.js", icon: "Layers", level: "92%", color: "#f8fafc" },
            { name: "Tailwind CSS", icon: "Palette", level: "99%", color: "#2dd4bf" },
            { name: "Node.js", icon: "Server", level: "88%", color: "#4ade80" },
            { name: "PostgreSQL", icon: "Database", level: "85%", color: "#818cf8" }
          ]
        };
        break;

      case 'cards':
        newElem = {
          ...newElem,
          columns: 3,
          items: [
            {
              id: "c1",
              title: "Cloud Infrastructure",
              desc: "Building highly-available serverless services with low-latency caching.",
              icon: "Server",
              tag: "Cloud",
              metric: "Sub-40ms"
            },
            {
              id: "c2",
              title: "Reactive UI Systems",
              desc: "Accessible and modular component design systems in Figma and React.",
              icon: "Layout",
              tag: "Frontend",
              metric: "100% A11y"
            },
            {
              id: "c3",
              title: "High-Performance APIs",
              desc: "Fast, typed GraphQL and REST endpoints with rigorous automated tests.",
              icon: "Zap",
              tag: "API Architecture",
              metric: "Type Safe"
            }
          ]
        };
        break;

      case 'image':
        newElem = {
          ...newElem,
          url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
          alt: "Code Architecture",
          width: "max-w-xl",
          rounded: "rounded-2xl",
          shadow: "shadow-2xl"
        };
        break;

      case 'divider':
        newElem = {
          ...newElem,
          style: "laser",
          height: 40
        };
        break;

      default:
        break;
    }

    updateCustomDesign(selectedSectionId, (prev) => ({
      ...prev,
      elements: [...(prev.elements || []), newElem]
    }));

    setSelectedElementId(newId);
    setActiveInspectorTab('element');
    triggerSaveNotice();
  };

  // Reorder Elements via Drag & Drop
  const handleDragStart = (e, index) => {
    setDraggedElementIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedElementIndex === null || draggedElementIndex === index) return;
    const newElements = [...elements];
    const draggedItem = newElements[draggedElementIndex];
    newElements.splice(draggedElementIndex, 1);
    newElements.splice(index, 0, draggedItem);
    setDraggedElementIndex(index);

    updateCustomDesign(selectedSectionId, (prev) => ({
      ...prev,
      elements: newElements
    }));
  };

  const handleDragEnd = () => {
    setDraggedElementIndex(null);
    triggerSaveNotice();
  };

  // Move Element Up/Down
  const moveElement = (index, direction) => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= elements.length) return;
    const newElements = [...elements];
    const temp = newElements[targetIndex];
    newElements[targetIndex] = newElements[index];
    newElements[index] = temp;

    updateCustomDesign(selectedSectionId, (prev) => ({
      ...prev,
      elements: newElements
    }));
    triggerSaveNotice();
  };

  // Duplicate Element
  const duplicateElement = (elem) => {
    const clone = JSON.parse(JSON.stringify(elem));
    clone.id = `elem_${clone.type}_${Date.now()}`;
    const index = elements.findIndex((e) => e.id === elem.id);
    const newElements = [...elements];
    newElements.splice(index + 1, 0, clone);

    updateCustomDesign(selectedSectionId, (prev) => ({
      ...prev,
      elements: newElements
    }));
    setSelectedElementId(clone.id);
    triggerSaveNotice();
  };

  // Delete Element
  const deleteElement = (elemId) => {
    const newElements = elements.filter((e) => e.id !== elemId);
    updateCustomDesign(selectedSectionId, (prev) => ({
      ...prev,
      elements: newElements
    }));
    if (selectedElementId === elemId) {
      setSelectedElementId(newElements[0]?.id || null);
    }
    triggerSaveNotice();
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Section Selector */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center font-bold shadow-md shadow-indigo-600/20">
              <LayoutTemplate className="w-4 h-4" />
            </span>
            <h2 className="text-lg font-bold text-slate-900">
              WordPress Drag-and-Drop Visual Builder
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Build custom layouts, drag-and-drop buttons, code terminals, tech stacks, titles, and cyber backgrounds.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Target Section Selector */}
          <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
            <span className="text-xs font-semibold text-slate-600">Editing Section:</span>
            <select
              value={selectedSectionId}
              onChange={(e) => {
                setSelectedSectionId(e.target.value);
                setSelectedElementId(null);
              }}
              className="bg-transparent text-xs font-bold text-indigo-700 outline-none cursor-pointer"
            >
              {sections.map((sec) => (
                <option key={sec.id} value={sec.id}>
                  {sec.name} {sec.preset === 'custom' ? '(🎨 Custom Design)' : `(${sec.preset})`}
                </option>
              ))}
            </select>
          </div>

          {/* Preset vs Custom Status */}
          {currentSection.preset === 'custom' ? (
            <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg border border-emerald-200 inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Custom Active on Site</span>
            </span>
          ) : (
            <button
              type="button"
              onClick={ensureCustomPreset}
              className="px-3 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
            >
              Activate Custom Design on Site
            </button>
          )}

          {/* Add Brand New Section */}
          <button
            type="button"
            onClick={() => {
              const name = prompt("Enter a name for the new custom section:", "Special Projects & Tech");
              if (name) addCustomSection(name);
            }}
            className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg inline-flex items-center gap-1.5 transition-colors"
          >
            <Plus className="w-3.5 h-3.5 text-slate-600" />
            <span>New Custom Section</span>
          </button>
        </div>
      </div>

      {/* Quick Load Coding / Designer Templates Bar */}
      <div className="bg-slate-900 text-white p-4 rounded-2xl border border-slate-800 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono font-bold tracking-wider text-slate-200">
            QUICK LOAD CODING & DESIGN TEMPLATES:
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => handleLoadTemplate(CODING_PORTFOLIO_HERO, "Full-Stack Coding Portfolio Hero")}
            className="px-3 py-1.5 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/30 text-xs font-semibold transition-all inline-flex items-center gap-1.5"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Coding Portfolio Hero</span>
          </button>

          <button
            type="button"
            onClick={() => handleLoadTemplate(CODING_PORTFOLIO_SKILLS, "Developer Skills & Terminal Matrix")}
            className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-all inline-flex items-center gap-1.5"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Developer Skills Matrix</span>
          </button>

          <button
            type="button"
            onClick={() => handleLoadTemplate(UI_UX_PORTFOLIO_HERO, "UI/UX Designer Showcase")}
            className="px-3 py-1.5 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/30 text-xs font-semibold transition-all inline-flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>UI/UX Designer Hero</span>
          </button>
        </div>
      </div>

      {/* 3-Column Studio Workspace: Left Palette | Center Canvas | Right Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT PALETTE: Drag & Drop Element Blocks (3 Columns) */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3 sticky top-20">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Element Palette
              </span>
              <span className="text-[11px] text-slate-400">Click to Add</span>
            </div>

            {/* Typography */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Typography</span>
              <div className="grid grid-cols-1 gap-1.5">
                <button
                  type="button"
                  onClick={() => handleAddElement('heading')}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-700 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-700 border border-slate-200/60 transition-all text-left"
                >
                  <Type className="w-4 h-4 text-indigo-500" />
                  <span>Title / Heading</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleAddElement('badge')}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-700 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-700 border border-slate-200/60 transition-all text-left"
                >
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                  <span>Subtitle / Glowing Badge</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleAddElement('paragraph')}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-700 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-700 border border-slate-200/60 transition-all text-left"
                >
                  <Square className="w-4 h-4 text-slate-500" />
                  <span>Paragraph / Text</span>
                </button>
              </div>
            </div>

            {/* Actions & Media */}
            <div className="space-y-1.5 pt-2 border-t border-slate-100">
              <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Actions & Media</span>
              <div className="grid grid-cols-1 gap-1.5">
                <button
                  type="button"
                  onClick={() => handleAddElement('buttonGroup')}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-700 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-700 border border-slate-200/60 transition-all text-left"
                >
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>Button Group (Action/File)</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleAddElement('image')}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-700 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-700 border border-slate-200/60 transition-all text-left"
                >
                  <ImageIcon className="w-4 h-4 text-purple-500" />
                  <span>Image / Media Asset</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleAddElement('divider')}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-700 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-700 border border-slate-200/60 transition-all text-left"
                >
                  <Sliders className="w-4 h-4 text-slate-400" />
                  <span>Divider / Laser Line</span>
                </button>
              </div>
            </div>

            {/* Coding Portfolio Special Blocks */}
            <div className="space-y-1.5 pt-2 border-t border-slate-100">
              <span className="text-[10px] font-bold uppercase text-indigo-600 tracking-wider flex items-center gap-1">
                <Code2 className="w-3.5 h-3.5" /> Coding Portfolio Blocks
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                <button
                  type="button"
                  onClick={() => handleAddElement('terminal')}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 bg-indigo-50/60 hover:bg-indigo-100/70 border border-indigo-200 transition-all text-left"
                >
                  <Terminal className="w-4 h-4 text-indigo-600" />
                  <span>Code Terminal Window</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleAddElement('techStack')}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 bg-indigo-50/60 hover:bg-indigo-100/70 border border-indigo-200 transition-all text-left"
                >
                  <Cpu className="w-4 h-4 text-cyan-600" />
                  <span>Tech Stack Skills Grid</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleAddElement('devStats')}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 bg-indigo-50/60 hover:bg-indigo-100/70 border border-indigo-200 transition-all text-left"
                >
                  <GitCommit className="w-4 h-4 text-emerald-600" />
                  <span>Git Stats & Dev Metrics</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleAddElement('cards')}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 bg-indigo-50/60 hover:bg-indigo-100/70 border border-indigo-200 transition-all text-left"
                >
                  <Layers className="w-4 h-4 text-purple-600" />
                  <span>Bento Cards & Metrics</span>
                </button>
              </div>
            </div>

            {/* Quick Background Settings Trigger */}
            <div className="pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setActiveInspectorTab('background')}
                className={`w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeInspectorTab === 'background'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Palette className="w-3.5 h-3.5" />
                <span>Section Background & Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* CENTER: Live Interactive Visual Canvas (5 Columns) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-xl min-h-[600px] flex flex-col justify-between">
            {/* Canvas Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-mono font-bold text-slate-300">
                  SECTION CANVAS ({elements.length} BLOCKS)
                </span>
              </div>
              <span className="text-[11px] text-slate-400">
                Drag handles to reorder blocks
              </span>
            </div>

            {/* Element List Drop Zone */}
            <div className="space-y-3 flex-grow">
              {elements.length === 0 ? (
                <div className="py-16 text-center text-slate-500 border-2 border-dashed border-slate-800 rounded-2xl">
                  <p className="text-sm font-semibold">No elements in this custom section yet.</p>
                  <p className="text-xs mt-1">Click any element from the left palette to add it.</p>
                </div>
              ) : (
                elements.map((elem, idx) => {
                  const isSelected = selectedElementId === elem.id;

                  return (
                    <div
                      key={elem.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, idx)}
                      onDragOver={(e) => handleDragOver(e, idx)}
                      onDragEnd={handleDragEnd}
                      onClick={() => {
                        setSelectedElementId(elem.id);
                        setActiveInspectorTab('element');
                      }}
                      className={`group relative rounded-2xl p-4 transition-all cursor-pointer border ${
                        isSelected
                          ? 'border-indigo-500 bg-slate-800/90 ring-2 ring-indigo-500/20 shadow-lg'
                          : 'border-slate-800/80 bg-slate-800/40 hover:border-slate-700 hover:bg-slate-800/60'
                      }`}
                    >
                      {/* Top Bar for Each Element: Drag handle, Type Badge, Controls */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="cursor-grab text-slate-500 hover:text-white" title="Drag to reorder">
                            <GripVertical className="w-4 h-4" />
                          </span>
                          <span className="px-2 py-0.5 rounded bg-slate-700/60 text-[10px] font-mono uppercase text-indigo-300 font-bold">
                            {elem.type}
                          </span>
                        </div>

                        {/* Element Actions */}
                        <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              moveElement(idx, 'up');
                            }}
                            disabled={idx === 0}
                            className="p-1 text-slate-400 hover:text-white disabled:opacity-30"
                            title="Move Up"
                          >
                            <ArrowUp className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              moveElement(idx, 'down');
                            }}
                            disabled={idx === elements.length - 1}
                            className="p-1 text-slate-400 hover:text-white disabled:opacity-30"
                            title="Move Down"
                          >
                            <ArrowDown className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              duplicateElement(elem);
                            }}
                            className="p-1 text-slate-400 hover:text-indigo-400"
                            title="Duplicate"
                          >
                            <Copy className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteElement(elem.id);
                            }}
                            className="p-1 text-slate-400 hover:text-rose-400"
                            title="Delete"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Element Snippet Preview */}
                      <div className="text-xs text-slate-200">
                        {elem.type === 'heading' && (
                          <div className={`font-bold ${elem.isGradient ? 'text-indigo-300' : ''}`}>
                            {elem.text}
                          </div>
                        )}
                        {elem.type === 'badge' && (
                          <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[11px] font-mono">
                            {elem.text}
                          </span>
                        )}
                        {elem.type === 'paragraph' && (
                          <p className="text-slate-400 line-clamp-2">{elem.text}</p>
                        )}
                        {elem.type === 'buttonGroup' && (
                          <div className="flex gap-2">
                            {(elem.buttons || []).map((b) => (
                              <span key={b.id} className="px-2 py-1 bg-indigo-600 text-white rounded text-[11px] font-semibold">
                                {b.label}
                              </span>
                            ))}
                          </div>
                        )}
                        {elem.type === 'terminal' && (
                          <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-700/60 font-mono text-[11px] text-cyan-300">
                            💻 Terminal: {elem.filename} ({elem.language})
                          </div>
                        )}
                        {elem.type === 'devStats' && (
                          <div className="grid grid-cols-2 gap-2 text-[11px]">
                            {(elem.items || []).slice(0, 2).map((s, i) => (
                              <div key={i} className="bg-slate-900/80 p-1.5 rounded border border-slate-700">
                                {s.label}: <strong className="text-white">{s.value}</strong>
                              </div>
                            ))}
                          </div>
                        )}
                        {elem.type === 'techStack' && (
                          <div className="flex flex-wrap gap-1 text-[10px]">
                            {(elem.skills || []).map((sk, i) => (
                              <span key={i} className="px-1.5 py-0.5 bg-slate-700 rounded text-slate-300">
                                {sk.name}
                              </span>
                            ))}
                          </div>
                        )}
                        {elem.type === 'cards' && (
                          <div className="text-[11px] text-slate-400">
                            Cards Grid: {(elem.items || []).length} cards in {elem.columns || 3} columns
                          </div>
                        )}
                        {elem.type === 'image' && (
                          <div className="text-[11px] text-slate-400 truncate">
                            🖼️ Image: {elem.url}
                          </div>
                        )}
                        {elem.type === 'divider' && (
                          <div className="text-[11px] text-slate-500">
                            ── {elem.style} divider ({elem.height || 40}px) ──
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Bottom Status */}
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
              <span>{savedNotice ? "✓ Changes Saved to Store" : "Changes are auto-persisted"}</span>
              <span className="font-mono text-indigo-400">Custom Section Mode</span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Element Inspector & Background Settings (4 Columns) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm sticky top-20">
            {/* Inspector Tab Switcher */}
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-4">
              <button
                type="button"
                onClick={() => setActiveInspectorTab('element')}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors ${
                  activeInspectorTab === 'element'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Block Inspector
              </button>
              <button
                type="button"
                onClick={() => setActiveInspectorTab('background')}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors ${
                  activeInspectorTab === 'background'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Background & Styling
              </button>
            </div>

            {/* TAB 1: ELEMENT INSPECTOR */}
            {activeInspectorTab === 'element' && (
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-1">
                {!selectedElement ? (
                  <p className="text-xs text-slate-400">Select any block from the canvas to edit its properties.</p>
                ) : (
                  <>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <span className="text-xs font-bold text-slate-800 uppercase font-mono">
                        {selectedElement.type} Block
                      </span>
                      <span className="text-[10px] text-slate-400">ID: {selectedElement.id.slice(-6)}</span>
                    </div>

                    {/* Heading Inspector */}
                    {selectedElement.type === 'heading' && (
                      <div className="space-y-3">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                            Heading Text
                          </label>
                          <textarea
                            rows={3}
                            value={selectedElement.text || ""}
                            onChange={(e) => handleUpdateElement(selectedElement.id, 'text', e.target.value)}
                            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                              Tag
                            </label>
                            <select
                              value={selectedElement.tag || "h2"}
                              onChange={(e) => handleUpdateElement(selectedElement.id, 'tag', e.target.value)}
                              className="w-full px-2 py-1.5 border border-slate-200 rounded-lg text-xs font-mono"
                            >
                              <option value="h1">H1 (Hero Main)</option>
                              <option value="h2">H2 (Section Heading)</option>
                              <option value="h3">H3 (Sub-heading)</option>
                              <option value="h4">H4 (Card Title)</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                              Text Align
                            </label>
                            <select
                              value={selectedElement.align || "left"}
                              onChange={(e) => handleUpdateElement(selectedElement.id, 'align', e.target.value)}
                              className="w-full px-2 py-1.5 border border-slate-200 rounded-lg text-xs"
                            >
                              <option value="left">Left</option>
                              <option value="center">Center</option>
                              <option value="right">Right</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={selectedElement.isGradient || false}
                              onChange={(e) => handleUpdateElement(selectedElement.id, 'isGradient', e.target.checked)}
                              className="rounded text-indigo-600"
                            />
                            <span>Enable Gradient Text (Cyber Look)</span>
                          </label>
                        </div>

                        {selectedElement.isGradient && (
                          <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                            <div>
                              <span className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Gradient Start</span>
                              <input
                                type="color"
                                value={selectedElement.gradientFrom || "#38bdf8"}
                                onChange={(e) => handleUpdateElement(selectedElement.id, 'gradientFrom', e.target.value)}
                                className="w-full h-8 rounded border p-0 cursor-pointer"
                              />
                            </div>
                            <div>
                              <span className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Gradient End</span>
                              <input
                                type="color"
                                value={selectedElement.gradientTo || "#818cf8"}
                                onChange={(e) => handleUpdateElement(selectedElement.id, 'gradientTo', e.target.value)}
                                className="w-full h-8 rounded border p-0 cursor-pointer"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Badge Inspector */}
                    {selectedElement.type === 'badge' && (
                      <div className="space-y-3">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                            Badge Text
                          </label>
                          <input
                            type="text"
                            value={selectedElement.text || ""}
                            onChange={(e) => handleUpdateElement(selectedElement.id, 'text', e.target.value)}
                            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                              Style
                            </label>
                            <select
                              value={selectedElement.style || "glowing-pill"}
                              onChange={(e) => handleUpdateElement(selectedElement.id, 'style', e.target.value)}
                              className="w-full px-2 py-1.5 border border-slate-200 rounded-lg text-xs"
                            >
                              <option value="glowing-pill">Glowing Live Pill</option>
                              <option value="dot">Dot Indicator</option>
                              <option value="glass-chip">Glass Chip</option>
                              <option value="border">Clean Border</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                              Color Theme
                            </label>
                            <select
                              value={selectedElement.color || "emerald"}
                              onChange={(e) => handleUpdateElement(selectedElement.id, 'color', e.target.value)}
                              className="w-full px-2 py-1.5 border border-slate-200 rounded-lg text-xs"
                            >
                              <option value="emerald">Emerald (Available)</option>
                              <option value="cyan">Cyber Cyan</option>
                              <option value="indigo">Indigo Tech</option>
                              <option value="purple">Purple Modern</option>
                              <option value="amber">Amber Warm</option>
                              <option value="rose">Rose Bold</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Paragraph Inspector */}
                    {selectedElement.type === 'paragraph' && (
                      <div className="space-y-3">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                            Paragraph Content
                          </label>
                          <textarea
                            rows={4}
                            value={selectedElement.text || ""}
                            onChange={(e) => handleUpdateElement(selectedElement.id, 'text', e.target.value)}
                            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                              Size
                            </label>
                            <select
                              value={selectedElement.size || "text-base"}
                              onChange={(e) => handleUpdateElement(selectedElement.id, 'size', e.target.value)}
                              className="w-full px-2 py-1.5 border border-slate-200 rounded-lg text-xs"
                            >
                              <option value="text-sm">Small (text-sm)</option>
                              <option value="text-base">Regular (text-base)</option>
                              <option value="text-lg">Large (text-lg)</option>
                              <option value="text-xl">Lead (text-xl)</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                              Align
                            </label>
                            <select
                              value={selectedElement.align || "left"}
                              onChange={(e) => handleUpdateElement(selectedElement.id, 'align', e.target.value)}
                              className="w-full px-2 py-1.5 border border-slate-200 rounded-lg text-xs"
                            >
                              <option value="left">Left</option>
                              <option value="center">Center</option>
                              <option value="right">Right</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Code Terminal Inspector */}
                    {selectedElement.type === 'terminal' && (
                      <div className="space-y-3">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                            Tab Filename
                          </label>
                          <input
                            type="text"
                            value={selectedElement.filename || ""}
                            onChange={(e) => handleUpdateElement(selectedElement.id, 'filename', e.target.value)}
                            placeholder="e.g. DeveloperProfile.ts"
                            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-mono"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                            Code Editor Content
                          </label>
                          <textarea
                            rows={8}
                            value={selectedElement.code || ""}
                            onChange={(e) => handleUpdateElement(selectedElement.id, 'code', e.target.value)}
                            className="w-full px-3 py-2 bg-slate-900 text-emerald-400 font-mono text-xs rounded-lg border border-slate-800"
                          />
                        </div>

                        <div className="flex items-center gap-4">
                          <label className="flex items-center gap-1.5 text-xs font-medium text-slate-700 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={selectedElement.showCopy !== false}
                              onChange={(e) => handleUpdateElement(selectedElement.id, 'showCopy', e.target.checked)}
                              className="rounded text-indigo-600"
                            />
                            <span>Show Copy Code Button</span>
                          </label>
                        </div>
                      </div>
                    )}

                    {/* Dev Stats Inspector */}
                    {selectedElement.type === 'devStats' && (
                      <div className="space-y-3">
                        <label className="block text-[11px] font-semibold text-slate-700 uppercase">
                          Developer Metric Cards
                        </label>
                        {(selectedElement.items || []).map((stat, i) => (
                          <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <span className="text-[10px] text-slate-400 font-semibold uppercase">Label</span>
                                <input
                                  type="text"
                                  value={stat.label || ""}
                                  onChange={(e) => {
                                    const newItems = [...selectedElement.items];
                                    newItems[i].label = e.target.value;
                                    handleUpdateElement(selectedElement.id, 'items', newItems);
                                  }}
                                  className="w-full px-2 py-1 text-xs border rounded"
                                />
                              </div>
                              <div>
                                <span className="text-[10px] text-slate-400 font-semibold uppercase">Value</span>
                                <input
                                  type="text"
                                  value={stat.value || ""}
                                  onChange={(e) => {
                                    const newItems = [...selectedElement.items];
                                    newItems[i].value = e.target.value;
                                    handleUpdateElement(selectedElement.id, 'items', newItems);
                                  }}
                                  className="w-full px-2 py-1 text-xs border rounded font-mono font-bold"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Button Group Inspector */}
                    {selectedElement.type === 'buttonGroup' && (
                      <div className="space-y-3">
                        <label className="block text-[11px] font-semibold text-slate-700 uppercase">
                          Action Buttons
                        </label>
                        {(selectedElement.buttons || []).map((btn, i) => (
                          <div key={btn.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <span className="text-[10px] text-slate-400 font-semibold uppercase">Button Label</span>
                                <input
                                  type="text"
                                  value={btn.label || ""}
                                  onChange={(e) => {
                                    const newButtons = [...selectedElement.buttons];
                                    newButtons[i].label = e.target.value;
                                    handleUpdateElement(selectedElement.id, 'buttons', newButtons);
                                  }}
                                  className="w-full px-2 py-1 text-xs border rounded"
                                />
                              </div>
                              <div>
                                <span className="text-[10px] text-slate-400 font-semibold uppercase">Action Type</span>
                                <select
                                  value={btn.type || "route"}
                                  onChange={(e) => {
                                    const newButtons = [...selectedElement.buttons];
                                    newButtons[i].type = e.target.value;
                                    handleUpdateElement(selectedElement.id, 'buttons', newButtons);
                                  }}
                                  className="w-full px-2 py-1 text-xs border rounded"
                                >
                                  <option value="route">Route Navigation</option>
                                  <option value="file">File Download</option>
                                </select>
                              </div>
                            </div>

                            <div>
                              <span className="text-[10px] text-slate-400 font-semibold uppercase">Target Route or File URL</span>
                              <input
                                type="text"
                                value={btn.type === 'file' ? btn.fileUrl || "" : btn.route || ""}
                                onChange={(e) => {
                                  const newButtons = [...selectedElement.buttons];
                                  if (btn.type === 'file') {
                                    newButtons[i].fileUrl = e.target.value;
                                  } else {
                                    newButtons[i].route = e.target.value;
                                  }
                                  handleUpdateElement(selectedElement.id, 'buttons', newButtons);
                                }}
                                placeholder={btn.type === 'file' ? "https://... or /resume.pdf" : "#portfolio or /projects"}
                                className="w-full px-2 py-1 text-xs border rounded font-mono"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            {/* TAB 2: BACKGROUND & SECTION STYLING */}
            {activeInspectorTab === 'background' && (
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-1">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                    Background Type
                  </label>
                  <select
                    value={background.type || "coding-grid"}
                    onChange={(e) => handleUpdateBackground('type', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-semibold"
                  >
                    <option value="coding-grid">💻 Coding Grid & Glowing Orbs</option>
                    <option value="dark-terminal">⚡ Dark Cyber Terminal Matrix</option>
                    <option value="linear-gradient">🎨 Linear Gradient (Dual Tone)</option>
                    <option value="radial-glow">✨ Radial Ambient Glow</option>
                    <option value="solid">⬛ Solid Minimal Color</option>
                    <option value="glassmorphic">🧊 Glassmorphic Backdrop</option>
                  </select>
                </div>

                {/* Colors based on type */}
                <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div>
                    <span className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Base / Solid Color</span>
                    <input
                      type="color"
                      value={background.solidColor || "#080c14"}
                      onChange={(e) => handleUpdateBackground('solidColor', e.target.value)}
                      className="w-full h-8 rounded border p-0 cursor-pointer"
                    />
                  </div>

                  <div>
                    <span className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Cyber Glow Accent</span>
                    <input
                      type="color"
                      value={background.glowAccent || "#6366f1"}
                      onChange={(e) => handleUpdateBackground('glowAccent', e.target.value)}
                      className="w-full h-8 rounded border p-0 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                      Padding Top
                    </label>
                    <select
                      value={background.paddingTop || "py-24"}
                      onChange={(e) => handleUpdateBackground('paddingTop', e.target.value)}
                      className="w-full px-2 py-1.5 border border-slate-200 rounded-lg text-xs font-mono"
                    >
                      <option value="py-12">py-12 (Compact)</option>
                      <option value="py-20">py-20 (Standard)</option>
                      <option value="py-24">py-24 (Spacious)</option>
                      <option value="py-32">py-32 (Hero Ultra)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                      Container Width
                    </label>
                    <select
                      value={background.containerWidth || "max-w-7xl"}
                      onChange={(e) => handleUpdateBackground('containerWidth', e.target.value)}
                      className="w-full px-2 py-1.5 border border-slate-200 rounded-lg text-xs font-mono"
                    >
                      <option value="max-w-5xl">max-w-5xl (Focused)</option>
                      <option value="max-w-6xl">max-w-6xl (Balanced)</option>
                      <option value="max-w-7xl">max-w-7xl (Wide Display)</option>
                      <option value="max-w-full">max-w-full (Full Screen)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSectionBuilder;

import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { FolderGit2, Plus, Trash2, Edit3, ExternalLink, Eye } from 'lucide-react';
import ImageUploader from './ImageUploader';

export const TabProjects = () => {
  const { portfolioData, updatePortfolioData } = usePortfolio();
  const selectedWorks = portfolioData.selectedWorks || {};
  const projects = selectedWorks.projects || [];

  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id || null);

  const activeProject = projects.find(p => p.id === activeProjectId) || projects[0];

  const handleWorksHeaderChange = (field, val) => {
    updatePortfolioData((prev) => ({
      ...prev,
      selectedWorks: {
        ...prev.selectedWorks,
        [field]: val
      }
    }));
  };

  const handleProjectChange = (id, field, val) => {
    const updated = projects.map(p => p.id === id ? { ...p, [field]: val } : p);
    updatePortfolioData((prev) => ({
      ...prev,
      selectedWorks: {
        ...prev.selectedWorks,
        projects: updated
      }
    }));
  };

  const addProject = () => {
    const id = `project-${Date.now()}`;
    const newProj = {
      id,
      title: "New Project Showcase",
      category: "UI/UX Design",
      description: "Brief summary of key user problems solved and interface highlights.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2600&auto=format&fit=crop",
      tools: ["Figma", "Design System"],
      liveUrl: "",
      figmaUrl: "https://www.figma.com/embed?embed_host=astra&url=https%3A%2F%2Fwww.figma.com%2Fcommunity%2Ffile%2F1182258948197775960",
      details: "Detailed case study description of the problem space, target users, interactive prototyping iterations, and design deliverables.",
      images: [
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2600&auto=format&fit=crop"
      ]
    };
    updatePortfolioData((prev) => ({
      ...prev,
      selectedWorks: {
        ...prev.selectedWorks,
        projects: [...projects, newProj]
      }
    }));
    setActiveProjectId(id);
  };

  const deleteProject = (id) => {
    if (projects.length <= 1) {
      alert("You need at least one project showcase.");
      return;
    }
    const updated = projects.filter(p => p.id !== id);
    updatePortfolioData((prev) => ({
      ...prev,
      selectedWorks: {
        ...prev.selectedWorks,
        projects: updated
      }
    }));
    if (activeProjectId === id) {
      setActiveProjectId(updated[0]?.id || null);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <FolderGit2 className="w-5 h-5 text-indigo-600" />
          <span>Selected Works & Projects Showcase</span>
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Manage project cards, cover images, case study descriptions, interactive Figma prototype URLs, and live site links.
        </p>
      </div>

      {/* Header section texts */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-800">Section Header</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Badge</label>
            <input
              type="text"
              value={selectedWorks.badge || ""}
              onChange={(e) => handleWorksHeaderChange('badge', e.target.value)}
              placeholder="e.g. My work"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Heading</label>
            <input
              type="text"
              value={selectedWorks.title || ""}
              onChange={(e) => handleWorksHeaderChange('title', e.target.value)}
              placeholder="e.g. Selected Works"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Subtitle</label>
          <input
            type="text"
            value={selectedWorks.subtitle || ""}
            onChange={(e) => handleWorksHeaderChange('subtitle', e.target.value)}
            placeholder="A curated selection of recent UI/UX projects..."
            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
          />
        </div>
      </div>

      {/* Projects Management Layout (Master - Detail) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Project Cards List */}
        <div className="lg:col-span-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="font-bold text-xs uppercase tracking-wider text-slate-600">Projects ({projects.length})</span>
            <button
              type="button"
              onClick={addProject}
              className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100"
            >
              <Plus className="w-3.5 h-3.5" /> Add Project
            </button>
          </div>

          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
            {projects.map((proj) => {
              const isActive = proj.id === (activeProject?.id);
              return (
                <div
                  key={proj.id}
                  onClick={() => setActiveProjectId(proj.id)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isActive 
                      ? 'border-indigo-600 bg-indigo-50/60 shadow-sm' 
                      : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-10 h-10 rounded-lg object-cover flex-shrink-0 border border-slate-200"
                    />
                    <div className="overflow-hidden">
                      <h4 className="font-bold text-xs text-slate-800 truncate">{proj.title}</h4>
                      <span className="text-[10px] text-slate-400 font-medium block truncate">{proj.category}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteProject(proj.id);
                    }}
                    className="text-slate-400 hover:text-rose-600 p-1 rounded"
                    title="Delete Project"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Active Project Editor */}
        {activeProject && (
          <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-indigo-600" />
                <span>Editing: {activeProject.title}</span>
              </h3>
              <a
                href={`/project/${activeProject.id}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-indigo-600 font-semibold flex items-center gap-1 hover:underline"
              >
                <Eye className="w-3.5 h-3.5" /> View Project Page
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Project Title</label>
                <input
                  type="text"
                  value={activeProject.title}
                  onChange={(e) => handleProjectChange(activeProject.id, 'title', e.target.value)}
                  placeholder="e.g. Analytics Dashboard"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Category</label>
                <input
                  type="text"
                  value={activeProject.category}
                  onChange={(e) => handleProjectChange(activeProject.id, 'category', e.target.value)}
                  placeholder="e.g. SaaS Dashboard, Mobile App Design"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Short Card Description</label>
              <textarea
                rows="2"
                value={activeProject.description}
                onChange={(e) => handleProjectChange(activeProject.id, 'description', e.target.value)}
                placeholder="Brief summary displayed on the card..."
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Full Case Study Narrative</label>
              <textarea
                rows="4"
                value={activeProject.details || ""}
                onChange={(e) => handleProjectChange(activeProject.id, 'details', e.target.value)}
                placeholder="In-depth explanation of problem definition, process, and outcome..."
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm leading-relaxed"
              />
            </div>

            {/* Cloudinary Cover Image */}
            <ImageUploader
              label="Project Cover Image (Cloudinary / URL)"
              currentValue={activeProject.image}
              onUploadComplete={(url) => handleProjectChange(activeProject.id, 'image', url)}
              helperText="Upload or paste image URL for the showcase card."
            />

            {/* Interactive Figma URL */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <label className="block text-xs font-bold text-slate-800 uppercase flex items-center gap-1.5">
                <span>Figma Prototype Embed URL (In-Page Viewer)</span>
              </label>
              <input
                type="text"
                value={activeProject.figmaUrl || ""}
                onChange={(e) => handleProjectChange(activeProject.id, 'figmaUrl', e.target.value)}
                placeholder="e.g. https://www.figma.com/design/... or https://www.figma.com/embed?embed_host=astra&url=..."
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white font-mono text-xs"
              />
              <p className="text-[11px] text-slate-500">
                Paste any Figma file or prototype URL here. Visitors can interact with it on the project page without leaving your website!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Live Site Link</label>
                <input
                  type="text"
                  value={activeProject.liveUrl || ""}
                  onChange={(e) => handleProjectChange(activeProject.id, 'liveUrl', e.target.value)}
                  placeholder="https://..."
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Tools Tags (Comma-separated)</label>
                <input
                  type="text"
                  value={(activeProject.tools || []).join(', ')}
                  onChange={(e) => {
                    const toolsArr = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                    handleProjectChange(activeProject.id, 'tools', toolsArr);
                  }}
                  placeholder="Figma, React, Prototyping"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabProjects;

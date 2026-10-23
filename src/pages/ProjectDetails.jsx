import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Sparkles, Layers } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const { portfolioData } = usePortfolio();
  const theme = portfolioData.theme || {};
  const primaryColor = theme.primaryColor || "#4F46E5";
  const secondaryColor = theme.secondaryColor || "#9333EA";

  const projects = portfolioData.selectedWorks?.projects || [];
  const project = projects.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FCFDFF] px-6">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Project Not Found</h2>
          <p className="text-slate-500 mb-6">The project you are looking for does not exist or has been modified in the admin dashboard.</p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-medium shadow-md"
            style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Figma embed URL format if present
  const figmaEmbedUrl = project.figmaUrl 
    ? (project.figmaUrl.includes("figma.com/embed") 
        ? project.figmaUrl 
        : `https://www.figma.com/embed?embed_host=astra&url=${encodeURIComponent(project.figmaUrl)}`)
    : null;

  return (
    <div className="min-h-screen bg-[#FCFDFF]">
      {/* Header / Nav Area */}
      <header className="p-6 lg:px-12 flex justify-between items-center border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-medium transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Portfolio</span>
        </Link>
        <div className="flex gap-4">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Site</span>
            </a>
          )}
          {project.figmaUrl && (
            <a 
              href="#figma-preview-pane"
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              style={{
                backgroundColor: `${primaryColor}15`,
                color: primaryColor
              }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Interactive Prototype</span>
            </a>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        {/* Title Section */}
        <div className="max-w-3xl mb-16">
          <span 
            className="inline-block px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-md mb-4"
            style={{
              backgroundColor: `${primaryColor}15`,
              color: primaryColor
            }}
          >
            {project.category}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            {project.details || project.description}
          </p>

          {project.tools && project.tools.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-8">
              {project.tools.map((tool, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-600 text-sm font-medium shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Embedded Interactive Figma Viewer right inside the project page */}
        {figmaEmbedUrl && (
          <div id="figma-preview-pane" className="mb-20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Layers className="w-6 h-6" style={{ color: primaryColor }} />
                <span>Interactive Figma Prototype (In-Page)</span>
              </h3>
              <a 
                href={project.figmaUrl} 
                target="_blank" 
                rel="noreferrer"
                className="text-xs text-indigo-600 hover:underline flex items-center gap-1 font-medium"
              >
                External Link <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="w-full h-[550px] md:h-[650px] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <iframe
                title={`${project.title} Figma Embed`}
                className="w-full h-full border-0"
                src={figmaEmbedUrl}
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* Project Gallery - "Figma Design" Mockups */}
        <div className="space-y-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Design UI & Mockups</h3>
          <div className="grid grid-cols-1 gap-12">
            {/* Main Cover Image */}
            <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50">
              <img 
                src={project.image || (project.images && project.images[0])} 
                alt="Project Cover" 
                className="w-full h-auto object-cover" 
              />
            </div>

            {/* Secondary Images Grid */}
            {project.images && project.images.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.images.slice(1).map((img, index) => (
                  <div key={index} className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50 relative group">
                    <img 
                      src={img} 
                      alt={`Detail ${index + 1}`} 
                      className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500" 
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Simple footer for this page */}
      <footer className="py-12 border-t border-slate-100 mt-12 text-center text-slate-500 text-sm">
        {portfolioData.site?.copyright || "© 2026 Kesavan. All rights reserved."}
      </footer>
    </div>
  );
};

export default ProjectDetails;

import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Sparkles, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionWrapper } from './SectionWrapper';
import { usePortfolio } from '../context/PortfolioContext';

const SelectedWorks = () => {
  const { portfolioData } = usePortfolio();
  const selectedWorks = portfolioData.selectedWorks || {};
  const theme = portfolioData.theme || {};
  const primaryColor = theme.primaryColor || "#4F46E5";
  const secondaryColor = theme.secondaryColor || "#9333EA";

  const worksConfig = portfolioData.sections?.find(s => s.id === 'selectedworks') || {};
  const preset = worksConfig.preset || "preset1";

  const projects = selectedWorks.projects || [];

  // Filter state for Preset 2 & 5
  const [selectedFilter, setSelectedFilter] = useState("All");

  const categories = ["All", ...new Set(projects.map(p => p.category).filter(Boolean))];
  const filteredProjects = selectedFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  /* =========================================================================
     PRESET 1: 2-Column Classic Showcase (Original)
     ========================================================================= */
  if (preset === 'preset1') {
    return (
      <section id="portfolio" className="py-16 sm:py-24">
        <SectionWrapper sectionId="selectedworks" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span 
              className="font-medium text-xs sm:text-sm tracking-wide uppercase mb-2 block"
              style={{ color: primaryColor }}
            >
              {selectedWorks.badge || "My work"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              {selectedWorks.title || "Selected Works"}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              {selectedWorks.subtitle}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
            {projects.map((project, index) => (
              <Link 
                to={`/project/${project.id}`} 
                key={project.id || index} 
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col block"
              >
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <button 
                    className="absolute bottom-4 right-4 bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-slate-50 cursor-pointer"
                    style={{ color: primaryColor }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span 
                      className="inline-block px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-md"
                      style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-[15px]">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/project/analytics-dashboard"
              className="inline-flex items-center gap-2 text-white px-8 py-3.5 rounded-lg font-medium shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 2: Interactive Category Filter Tabs
     ========================================================================= */
  if (preset === 'preset2') {
    return (
      <section id="portfolio" className="py-16 sm:py-24 bg-slate-50/50">
        <SectionWrapper sectionId="selectedworks" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="font-bold text-xs uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
              {selectedWorks.badge || "Portfolio"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              {selectedWorks.title || "Selected Works"}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {selectedWorks.subtitle}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedFilter === cat
                    ? 'text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
                style={selectedFilter === cat ? {
                  background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`
                } : {}}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {filteredProjects.map((project, index) => (
              <Link 
                to={`/project/${project.id}`} 
                key={project.id || index}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">{project.category}</span>
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">{project.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 3: Large Flagship Featured Project + Grid
     ========================================================================= */
  if (preset === 'preset3') {
    const featured = projects[0];
    const others = projects.slice(1);

    return (
      <section id="portfolio" className="py-16 sm:py-24">
        <SectionWrapper sectionId="selectedworks" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
              {selectedWorks.badge || "My work"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              {selectedWorks.title || "Selected Works"}
            </h2>
          </div>

          {featured && (
            <Link 
              to={`/project/${featured.id}`}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0 mb-10 group block"
            >
              <div className="lg:col-span-7 h-72 sm:h-96 lg:h-auto overflow-hidden">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase mb-4">
                    <Sparkles className="w-3.5 h-3.5" /> Flagship Case Study
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                    {featured.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {featured.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-indigo-600">
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((p, idx) => (
              <Link to={`/project/${p.id}`} key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all group block">
                <div className="h-48 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{p.category}</span>
                  <h4 className="font-bold text-base text-slate-900 mt-1">{p.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 4: High-End Minimalist Studio Row List
     ========================================================================= */
  if (preset === 'preset4') {
    return (
      <section id="portfolio" className="py-20 sm:py-28 border-t border-slate-100">
        <SectionWrapper sectionId="selectedworks" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-2">Selected Projects</span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              {selectedWorks.title || "Case Studies"}
            </h2>
          </div>

          <div className="divide-y divide-slate-200">
            {projects.map((project, idx) => (
              <Link 
                to={`/project/${project.id}`}
                key={idx}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-slate-50/50 px-4 rounded-2xl transition-all"
              >
                <div className="md:col-span-1 font-mono text-slate-300 font-bold text-sm">
                  0{idx + 1}
                </div>
                <div className="md:col-span-5">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-slate-400 mt-1 block">{project.category}</span>
                </div>
                <div className="md:col-span-4 text-xs text-slate-500 leading-relaxed line-clamp-2">
                  {project.description}
                </div>
                <div className="md:col-span-2 flex justify-start md:justify-end">
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-indigo-600 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </SectionWrapper>
      </section>
    );
  }

  /* =========================================================================
     PRESET 5: Modern Bento Project Mosaic
     ========================================================================= */
  return (
    <section id="portfolio" className="py-16 sm:py-24">
      <SectionWrapper sectionId="selectedworks" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: primaryColor }}>
            {selectedWorks.badge || "My work"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {selectedWorks.title || "Selected Works"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Link 
              to={`/project/${project.id}`} 
              key={idx}
              className={`rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col group bg-white ${
                idx === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="h-64 overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-slate-800">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">{project.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default SelectedWorks;

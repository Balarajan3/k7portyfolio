import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Sparkles, Layers } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DynamicButton from '../components/DynamicButton';
import { usePortfolio } from '../context/PortfolioContext';

const CustomDynamicPage = () => {
  const { slug } = useParams();
  const { portfolioData } = usePortfolio();
  const theme = portfolioData.theme || {};
  const primaryColor = theme.primaryColor || "#4F46E5";
  const secondaryColor = theme.secondaryColor || "#9333EA";

  const pages = portfolioData.pages || [];
  const page = pages.find(p => p.slug === slug || `/${p.slug}` === `/${slug}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!page) {
    return (
      <div className="min-h-screen flex flex-col justify-between bg-[#FCFDFF]">
        <Navbar />
        <div className="max-w-md mx-auto text-center py-24 px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h2>
          <p className="text-slate-500 mb-8">
            The dynamic page <code className="text-indigo-600 bg-indigo-50 px-2 py-1 rounded">/{slug}</code> does not exist or has been removed in the admin.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-medium shadow-md"
            style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
          >
            <ArrowLeft className="w-4 h-4" /> Return to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const figmaEmbedUrl = page.figmaUrl 
    ? (page.figmaUrl.includes("figma.com/embed") 
        ? page.figmaUrl 
        : `https://www.figma.com/embed?embed_host=astra&url=${encodeURIComponent(page.figmaUrl)}`)
    : null;

  return (
    <div 
      className="min-h-screen flex flex-col justify-between"
      style={{
        backgroundColor: theme.bgColor || "#FCFDFF",
        color: theme.textColor || "#0F172A",
        fontFamily: theme.fontFamily || "Outfit, sans-serif"
      }}
    >
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto px-6 lg:px-12 py-16 lg:py-24 w-full">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Page Header */}
        <div className="mb-12">
          {page.badge && (
            <span 
              className="px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider mb-4 inline-block"
              style={{
                backgroundColor: `${primaryColor}15`,
                color: primaryColor
              }}
            >
              {page.badge}
            </span>
          )}
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            {page.title}
          </h1>
          {page.description && (
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
              {page.description}
            </p>
          )}
        </div>

        {/* Rich Content */}
        {page.content && (
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-12">
            <div className="prose prose-slate max-w-none text-slate-700 text-lg leading-relaxed whitespace-pre-line">
              {page.content}
            </div>
          </div>
        )}

        {/* In-Page Interactive Figma Preview (if attached) */}
        {figmaEmbedUrl && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Layers className="w-6 h-6" style={{ color: primaryColor }} />
                <span>Embedded Figma Canvas</span>
              </h3>
              <a 
                href={page.figmaUrl} 
                target="_blank" 
                rel="noreferrer"
                className="text-xs text-indigo-600 hover:underline flex items-center gap-1 font-medium"
              >
                Open in Figma <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="w-full h-[550px] md:h-[650px] bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <iframe
                title={`${page.title} Figma Preview`}
                className="w-full h-full border-0"
                src={figmaEmbedUrl}
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* CTA Button */}
        {page.ctaButton && page.ctaButton.label && (
          <div className="pt-4">
            <DynamicButton
              label={page.ctaButton.label}
              type={page.ctaButton.type || "route"}
              route={page.ctaButton.target}
              fileUrl={page.ctaButton.fileUrl}
              icon={page.ctaButton.icon}
              iconPosition={page.ctaButton.iconPosition || "suffix"}
              variant="primary"
              className="px-8 py-4 text-base"
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CustomDynamicPage;

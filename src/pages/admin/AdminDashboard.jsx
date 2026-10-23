import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { usePortfolio } from '../../context/PortfolioContext';
import { 
  Palette, 
  Layers, 
  Sparkles, 
  Compass, 
  Briefcase, 
  UserCheck, 
  Wrench, 
  FolderGit2, 
  Mail, 
  FileText, 
  Cloud, 
  LogOut, 
  ExternalLink, 
  Save, 
  RotateCcw,
  CheckCircle2,
  Loader2,
  Menu,
  X,
  Award,
  LayoutTemplate
} from 'lucide-react';
import TabTheme from './TabTheme';
import TabSections from './TabSections';
import TabHero from './TabHero';
import TabNavbar from './TabNavbar';
import TabStats from './TabStats';
import TabAbout from './TabAbout';
import TabServicesTools from './TabServicesTools';
import TabProjects from './TabProjects';
import TabFigma from './TabFigma';
import TabContact from './TabContact';
import TabPages from './TabPages';
import TabSettings from './TabSettings';
import TabAdditionalSections from './TabAdditionalSections';
import CustomSectionBuilder from './CustomSectionBuilder';
import LivePreviewModal from './LivePreviewModal';
import { Smartphone } from 'lucide-react';

export const AdminDashboard = () => {
  const { user, logout, isLocalAdmin } = useAuth();
  const { portfolioData, updatePortfolioData, resetToDefaults, isSyncing, lastSyncTime } = usePortfolio();

  const [activeTab, setActiveTab] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [savedAlert, setSavedAlert] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const tabs = [
    { id: 'hero', label: 'Hero & CTA Buttons', icon: Sparkles },
    { id: 'sections', label: 'Drag & Drop Layout', icon: Layers },
    { id: 'builder', label: '🎨 WordPress Drag & Drop Builder', icon: LayoutTemplate },
    { id: 'theme', label: 'Theme & Colors', icon: Palette },
    { id: 'navbar', label: 'Top Navigation Menu', icon: Compass },
    { id: 'stats', label: 'Stats Counter', icon: Briefcase },
    { id: 'about', label: 'About & Advantages', icon: UserCheck },
    { id: 'services', label: 'Services & Toolkit', icon: Wrench },
    { id: 'projects', label: 'Selected Works', icon: FolderGit2 },
    { id: 'additional', label: 'Timeline, Process & FAQs', icon: Award },
    { id: 'figma', label: 'Figma Live Canvas', icon: Layers },
    { id: 'contact', label: 'Contact (5 Presets)', icon: Mail },
    { id: 'pages', label: 'Dynamic Pages (CMS)', icon: FileText },
    { id: 'settings', label: 'Cloudinary & Firebase', icon: Cloud }
  ];

  const handleManualSave = async () => {
    await updatePortfolioData(portfolioData);
    setSavedAlert(true);
    setTimeout(() => setSavedAlert(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 px-4 lg:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-indigo-600/20">
              K7
            </div>
            <div>
              <h1 className="font-bold text-base text-slate-900 leading-tight">Admin Studio</h1>
              <span className="text-[11px] text-slate-400">Dynamic CMS & Builder</span>
            </div>
          </div>
        </div>

        {/* Sync Status & Action Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden md:flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
            {isSyncing ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin text-indigo-600" />
                <span>Syncing Cloud...</span>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Cloud & Local Synced</span>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={() => setShowPreviewModal(true)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 bg-gradient-to-r from-purple-50 to-indigo-50 hover:from-purple-100 hover:to-indigo-100 text-indigo-700 border border-indigo-200 rounded-lg transition-all shadow-sm"
          >
            <Smartphone className="w-3.5 h-3.5 text-indigo-600" />
            <span className="hidden sm:inline">Responsive Simulator</span>
            <span className="sm:hidden">Preview</span>
          </button>

          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>View Live Site</span>
          </a>

          <button
            type="button"
            onClick={handleManualSave}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm transition-all cursor-pointer"
          >
            <Save className="w-3.5 h-3.5" />
            <span>{savedAlert ? "Saved!" : "Save Changes"}</span>
          </button>

          <button
            type="button"
            onClick={logout}
            className="p-2 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-100 transition-colors"
            title="Log Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Container with Sidebar Navigation */}
      <div className="flex-grow flex flex-col lg:flex-row max-w-[1600px] w-full mx-auto">
        {/* Sidebar Tabs */}
        <aside
          className={`lg:w-64 bg-white border-r border-slate-200 p-4 space-y-1.5 lg:block flex-shrink-0 ${
            mobileMenuOpen ? 'block fixed inset-0 top-[61px] z-50 overflow-y-auto' : 'hidden'
          }`}
        >
          <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Portfolio Modules
          </div>

          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(tab.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all text-left ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}

          <div className="pt-6 mt-6 border-t border-slate-100 px-3 text-xs text-slate-400">
            <div className="truncate">Signed in as:</div>
            <div className="font-semibold text-slate-700 truncate">{user?.email || "Admin"}</div>
            {isLocalAdmin && (
              <span className="inline-block mt-1 px-2 py-0.5 bg-amber-50 text-amber-600 text-[10px] font-bold rounded">
                Admin Mode
              </span>
            )}
          </div>
        </aside>

        {/* Tab Content Area */}
        <main className={`flex-grow p-6 lg:p-10 ${activeTab === 'builder' ? 'max-w-[1500px] w-full' : 'max-w-5xl'}`}>
          {activeTab === 'hero' && <TabHero />}
          {activeTab === 'sections' && <TabSections />}
          {activeTab === 'builder' && <CustomSectionBuilder />}
          {activeTab === 'theme' && <TabTheme />}
          {activeTab === 'navbar' && <TabNavbar />}
          {activeTab === 'stats' && <TabStats />}
          {activeTab === 'about' && <TabAbout />}
          {activeTab === 'services' && <TabServicesTools />}
          {activeTab === 'projects' && <TabProjects />}
          {activeTab === 'additional' && <TabAdditionalSections />}
          {activeTab === 'figma' && <TabFigma />}
          {activeTab === 'contact' && <TabContact />}
          {activeTab === 'pages' && <TabPages />}
          {activeTab === 'settings' && <TabSettings />}
        </main>
      </div>

      {/* Responsive Viewport Simulator Modal */}
      <LivePreviewModal
        isOpen={showPreviewModal}
        onClose={() => setShowPreviewModal(false)}
      />
    </div>
  );
};

export default AdminDashboard;

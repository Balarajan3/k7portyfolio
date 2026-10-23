import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ClientsMarquee from '../components/ClientsMarquee';
import Stats from '../components/Stats';
import About from '../components/About';
import DesignProcess from '../components/DesignProcess';
import Services from '../components/Services';
import ExperienceTimeline from '../components/ExperienceTimeline';
import Tools from '../components/Tools';
import WhyWork from '../components/WhyWork';
import FigmaViewer from '../components/FigmaViewer';
import SelectedWorks from '../components/SelectedWorks';
import Testimonials from '../components/Testimonials';
import PricingRetainers from '../components/PricingRetainers';
import FAQ from '../components/FAQ';
import Awards from '../components/Awards';
import Contact from '../components/Contact';
import CustomSectionRenderer from '../components/CustomSectionRenderer';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { usePortfolio } from '../context/PortfolioContext';

function Home() {
  const { portfolioData } = usePortfolio();
  const sections = portfolioData.sections || [];
  const theme = portfolioData.theme || {};

  // Component lookup map by section id
  const sectionComponents = {
    hero: <Hero key="hero" />,
    clients: <ClientsMarquee key="clients" />,
    stats: <Stats key="stats" />,
    about: <About key="about" />,
    process: <DesignProcess key="process" />,
    services: <Services key="services" />,
    experience: <ExperienceTimeline key="experience" />,
    tools: <Tools key="tools" />,
    whywork: <WhyWork key="whywork" />,
    figmaViewer: <FigmaViewer key="figmaViewer" />,
    selectedworks: <SelectedWorks key="selectedworks" />,
    testimonials: <Testimonials key="testimonials" />,
    pricing: <PricingRetainers key="pricing" />,
    faq: <FAQ key="faq" />,
    awards: <Awards key="awards" />,
    contact: <Contact key="contact" />
  };

  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: theme.bgColor || "#FCFDFF",
        color: theme.textColor || "#0F172A",
        fontFamily: theme.fontFamily || "Outfit, sans-serif"
      }}
    >
      <Navbar />

      {/* Render sections dynamically in the order specified in portfolioData.sections */}
      <main>
        {sections.map((section) => {
          if (section.enabled === false) return null;

          // If section is configured with Custom Drag & Drop Design
          if (section.preset === 'custom' || !sectionComponents[section.id]) {
            return (
              <CustomSectionRenderer 
                key={section.id} 
                sectionId={section.id} 
                defaultSectionName={section.name} 
              />
            );
          }

          return sectionComponents[section.id] || null;
        })}
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Home;

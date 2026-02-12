import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const projectData = {
    'analytics-dashboard': {
        title: "Analytics Dashboard",
        category: "SaaS Dashboard",
        description: "A comprehensive data visualization platform designed for enterprise analytics. Features real-time data sync, customizable widget layouts, and advanced reporting capabilities.",
        tools: ["Figma", "React", "Chart.js"],
        images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1543286386-713df548e9cc?q=80&w=2670&auto=format&fit=crop"
        ]
    },
    'fintech-mobile-app': {
        title: "FinTech Mobile App",
        category: "Mobile App Design",
        description: "A secure banking application focused on user trust and simplicity. Includes features for peer-to-peer payments, budget tracking, and investment portfolio management.",
        tools: ["Figma", "iOS Design System", "Prototyping"],
        images: [
            "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1616077168712-fc6c788cd4ee?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2670&auto=format&fit=crop"
        ]
    },
    'ecommerce-platform': {
        title: "E-Commerce Platform",
        category: "Web Design",
        description: "Modern e-commerce redesign focusing on conversion optimization and seamless checkout flows. Implemented a design system for scalability.",
        tools: ["Adobe XD", "Webflow", "Stripe API"],
        images: [
            "https://images.unsplash.com/photo-1493723843684-a63bc8304ddf?q=80&w=2608&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1472851294608-415522f96319?q=80&w=2670&auto=format&fit=crop", // Placeholder
            "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2574&auto=format&fit=crop"
        ]
    },
    'healthcare-app': {
        title: "Healthcare App",
        category: "Mobile App Design",
        description: "Telemedicine app connecting patients with doctors. Key flows include appointment booking, video consultations, and digital prescriptions.",
        tools: ["Figma", "User Research", "Wireframing"],
        images: [
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2832&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2670&auto=format&fit=crop"
        ]
    }
};

const ProjectDetails = () => {
    const { projectId } = useParams();
    const project = projectData[projectId];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FCFDFF]">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Project Not Found</h2>
                    <Link to="/" className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center justify-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FCFDFF]">
            {/* Header / Nav Area */}
            <header className="p-6 lg:px-12 flex justify-between items-center border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
                <Link to="/" className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-medium transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back to Portfolio</span>
                </Link>
                <div className="flex gap-4">
                    <button className="hidden sm:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        View Live Site
                    </button>
                    {/* Placeholder action */}
                    <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-600 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
                        Figma File
                    </button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
                {/* Title Section */}
                <div className="max-w-3xl mb-16">
                    <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold tracking-wide uppercase rounded-md mb-4">
                        {project.category}
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-8">
                        {project.tools.map((tool, idx) => (
                            <span key={idx} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-600 text-sm font-medium shadow-sm">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Project Gallery - "Figma Design" Mockups */}
                <div className="space-y-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8">Design UI & Mockups</h3>
                    <div className="grid grid-cols-1 gap-12">
                        {/* Main Cover Image */}
                        <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50">
                            <img src={project.images[0]} alt="Project Cover" className="w-full h-auto object-cover" />
                        </div>

                        {/* Secondary Images Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {project.images.slice(1).map((img, index) => (
                                <div key={index} className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50 relative group">
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
                                    <img src={img} alt={`Detail ${index + 1}`} className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* Simple footer for this page */}
            <footer className="py-12 border-t border-slate-100 mt-12 text-center text-slate-500 text-sm">
                &copy; 2026 Kesavan. All rights reserved.
            </footer>
        </div>
    );
};

export default ProjectDetails;

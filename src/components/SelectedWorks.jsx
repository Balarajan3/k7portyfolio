import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionWrapper } from './SectionWrapper';

const SelectedWorks = () => {
    const projects = [
        {
            id: 'analytics-dashboard',
            title: "Analytics Dashboard",
            category: "SaaS Dashboard",
            description: "Data visualization platform with real-time analytics and reporting features",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop", // Placeholder for Dashboard
        },
        {
            id: 'fintech-mobile-app',
            title: "FinTech Mobile App",
            category: "Mobile App Design",
            description: "Banking and payment app with intuitive user flows and secure transactions",
            image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2670&auto=format&fit=crop", // Placeholder for App
        },
        {
            id: 'ecommerce-platform',
            title: "E-Commerce Platform",
            category: "Web Design",
            description: "Modern shopping experience with seamless checkout and product discovery",
            image: "https://images.unsplash.com/photo-1493723843684-a63bc8304ddf?q=80&w=2608&auto=format&fit=crop", // Placeholder for E-commerce
        },
        {
            id: 'healthcare-app',
            title: "Healthcare App",
            category: "Mobile App Design",
            description: "Telemedicine platform for appointments, prescriptions, and patient care",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop", // Placeholder for Healthcare
        }
    ];

    return (
        <section id="portfolio" className="py-20 lg:py-24">
            <SectionWrapper className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-indigo-600 font-medium text-sm tracking-wide uppercase mb-2 block">
                        My work
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Selected Works
                    </h2>
                    <p className="text-slate-600 text-lg">
                        A curated selection of recent UI/UX projects showcasing problem-solving skills, layout structure, and user-centered design decisions.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {projects.map((project, index) => (
                        <Link to={`/project/${project.id}`} key={index} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col block">
                            {/* Image Container */}
                            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-slate-50 cursor-pointer">
                                    <ExternalLink className="w-5 h-5 text-indigo-600" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold tracking-wide uppercase rounded-md">
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-[15px]">
                                    {project.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <button className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3.5 rounded-lg font-medium shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5" style={{ cursor: 'pointer' }}>
                        <span>View All Projects</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </SectionWrapper>
        </section>
    );
};

export default SelectedWorks;

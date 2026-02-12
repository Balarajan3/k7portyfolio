import React from 'react';
import { Palette, Users, PenTool } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

const Services = () => {
    const services = [
        {
            icon: <Palette className="w-6 h-6 text-indigo-600" />,
            title: "UI Design",
            items: [
                "Web & Mobile UI Design",
                "SaaS Dashboard Design",
                "Design Systems & Components",
                "Responsive Layouts"
            ]
        },
        {
            icon: <Users className="w-6 h-6 text-indigo-600" />,
            title: "UX Design",
            items: [
                "User Research & Analysis",
                "Wireframing & Prototyping",
                "User Flow & Journey Mapping",
                "Usability Improvements"
            ]
        },
        {
            icon: <PenTool className="w-6 h-6 text-indigo-600" />,
            title: "Graphic Design",
            items: [
                "Brand Identity Design",
                "Marketing Collaterals",
                "Social Media Graphics",
                "Illustrations & Icons"
            ]
        }
    ];

    return (
        <section id="services" className="py-20 lg:py-24">
            <SectionWrapper className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <span className="text-indigo-600 font-medium text-sm tracking-wide uppercase mb-2 block">
                        My expertise
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        What I Do
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-6">
                                {service.title}
                            </h3>

                            <ul className="space-y-3">
                                {service.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center text-slate-600 text-[15px]">
                                        <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3 flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </section>
    );
};

export default Services;

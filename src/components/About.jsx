import React from 'react';
import { SectionWrapper } from './SectionWrapper';

const About = () => {
    return (
        <section id="about" className="py-20 lg:py-24">
            <SectionWrapper className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
                <span className="text-indigo-600 font-medium text-sm tracking-wide uppercase mb-2 block">
                    Get to know me
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                    About Me
                </h2>

                <p className="text-slate-600 text-lg leading-relaxed">
                    I'm passionate about creating meaningful digital experiences that solve real user problems. I have worked on SaaS platforms, dashboards, and mobile applications, handling projects from concept to final delivery. I focus strongly on usability, consistency, scalability, and accessibility, ensuring designs work seamlessly across devices and align with business objectives.
                </p>
            </SectionWrapper>
        </section>
    );
};

export default About;

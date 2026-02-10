import React from "react";

const services = [
    {
        title: "User Experience (UX)",
        description: "I design products that are more than safe. I create them to be easy to use and beautiful.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#9929fb]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.85 6.361a15.995 15.995 0 0 0-4.647 4.763m0 0c-.37.37-.668.803-.9 1.2381.25.1.53.15.81.15.28 0 .56-.05.81-.15Z" />
            </svg>
        ),
    },
    {
        title: "Web Development",
        description: "I build websites that are fast, secure, and easy to manage using modern technologies.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#9929fb]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 18" />
            </svg>
        ),
    },
    {
        title: "App Development",
        description: "I create mobile apps that provide a seamless user experience across all devices.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#9929fb]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
        ),
    },
    {
        title: "Product Design",
        description: "I help you turn your idea into a successful product with a solid design strategy.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#9929fb]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
        ),
    },
];

const Services = () => {
    return (
        <section className="bg-[#fafafa] py-20 px-6 md:px-12 lg:px-[120px]">
            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">What I do?</h2>
                <p className="text-gray-500 max-w-2xl text-lg">
                    I help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall sales.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white p-10 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer border border-gray-100/50"
                    >
                        <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mb-8 group-hover:bg-[#9929fb] transition-colors duration-300">
                            <div className="group-hover:text-white transition-colors duration-300">
                                {/* Clone the element to apply classes if needed, or rely on parent control. 
                     SVG standard currentColor works best here. 
                     The icon code above already has text-[#9929fb], we want to override it on hover.
                     Instead of complex cloning, let's just use CSS class logic or specific icon component.
                     Simpler: Remove text color from SVG and let parent control it.
                  */}
                                {React.cloneElement(service.icon, { className: "w-8 h-8 text-[#9929fb] group-hover:text-white transition-colors" })}
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-lg">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;

import React from "react";

const projects = [
    {
        category: "UX Design",
        title: "Mobile App Redesign",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
    },
    {
        category: "Web Development",
        title: "E-commerce Platform",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    },
    {
        category: "Branding",
        title: "Corporate Identity",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    },
    {
        category: "Product Design",
        title: "Smart Home Dashboard",
        image: "https://images.unsplash.com/photo-1555421689-492a1880deb5?q=80&w=2000&auto=format&fit=crop",
    },
    {
        category: "Web Design",
        title: "Travel Agency Website",
        image: "https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?q=80&w=2000&auto=format&fit=crop",
    },
    {
        category: "Marketing",
        title: "Social Media Campaign",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    },
];

const Portfolio = () => {
    return (
        <section className="bg-[#fafafa] py-20 px-6 md:px-12 lg:px-[120px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">My Works</h2>
                    <p className="text-gray-500 max-w-xl text-lg">
                        A collection of my recent projects showing my expertise in design and development.
                    </p>
                </div>
                <button className="text-[#9929fb] font-semibold text-lg hover:underline underline-offset-4 decoration-2">
                    View All Projects &rarr;
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-2xl cursor-pointer">
                        <div className="aspect-[4/3] w-full bg-gray-200">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                            <span className="text-[#9929fb] font-medium mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                {project.category}
                            </span>
                            <h3 className="text-white text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                {project.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;

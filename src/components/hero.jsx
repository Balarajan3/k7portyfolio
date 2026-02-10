const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#fafafa]">
      {/* Gradient Blurs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="relative w-full px-6 md:px-12 lg:px-[120px] py-16 md:py-32 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-black leading-[1.1] tracking-tight">
            Hello, I’m <br />
            <span className="block text-[#9929fb]">Brooklyn Gilbert</span>
          </h1>

          <p className="mt-8 text-xl text-gray-500 leading-relaxed font-normal">
            I'm a Freelance UI/UX Designer and Developer based in London, England.
            I strive to build immersive and beautiful web applications through carefully crafted code and user-centric design.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="bg-[#9929fb] text-white px-9 py-4 rounded font-medium text-lg shadow-xl shadow-purple-200 hover:bg-purple-700 transition hover:-translate-y-1">
              Say Hello!
            </button>
            <button className="bg-transparent text-black border border-gray-200 px-9 py-4 rounded font-medium text-lg hover:border-[#9929fb] hover:text-[#9929fb] transition">
              My Works
            </button>
          </div>

          <div className="mt-16 flex items-center gap-8 text-gray-400">
            {/* Social placeholders if needed, currently kept minimal */}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end relative">
          {/* Decorative element behind image */}
          <div className="absolute inset-0 bg-[#9929fb] rotate-6 rounded-[3rem] opacity-5 scale-95 z-0" />

          <img
            src="/hero.jpg"
            alt="Brooklyn Gilbert"
            className="relative z-10 w-[380px] lg:w-[480px] rounded-[3rem] shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

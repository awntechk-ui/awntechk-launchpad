import React from "react";

const AwntechkIntro: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#0b1f3a] via-[#123a6f] to-[#0b1f3a] overflow-hidden">
      {/* subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-28 text-center">
        {/* badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/10 border border-white/20 text-sm text-white/90 backdrop-blur">
          <span>⚡</span>
          <span className="font-medium tracking-wide">
            Innovation Meets Excellence
          </span>
        </div>

        {/* heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
          We Build Digital{" "}
          <span className="block">
            <span className="text-white/90">Future-Proof</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9fe8d7] to-[#63d4ff]">
              Products.
            </span>
          </span>
        </h1>

        {/* description */}
        <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-white/70 leading-relaxed">
          We design and develop modern applications and AI-enabled solutions
          that transform complex ideas into reliable, scalable reality.
        </p>

        {/* buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-5">
          <button className="px-8 py-3.5 rounded-full bg-white text-[#0b1f3a] font-semibold shadow-lg hover:scale-[1.02] transition">
            Start Your Journey
          </button>

          <button className="px-8 py-3.5 rounded-full bg-white/10 text-white border border-white/30 font-semibold backdrop-blur hover:bg-white/15 transition">
            Explore Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default AwntechkIntro;

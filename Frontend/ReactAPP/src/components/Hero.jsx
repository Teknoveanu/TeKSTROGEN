import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/assets/images/hero-background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text">
            TeKSTROGEN
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            The hormone of underground electronic music. Experience the pulse of
            free party culture, 24/7 beats, and the spirit of tekno community.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-black font-bold px-8 py-3 !rounded-button glow-button whitespace-nowrap">
              <i className="ri-headphone-fill ri-lg mr-2"></i> Listen Now
            </button>
            <button className="bg-transparent border-2 border-white hover:border-primary text-white hover:text-primary px-8 py-3 !rounded-button whitespace-nowrap">
              <i className="ri-calendar-event-fill ri-lg mr-2"></i> Upcoming
              Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

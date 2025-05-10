import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About TeKSTROGEN
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              TeKSTROGEN is an underground electronic music radio and community
              hub, born from the free party movement and dedicated to the raw,
              uncompromising sounds of tekno in all its forms.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              We broadcast 24/7, featuring live DJ sets, curated playlists, and
              community-sourced content from sound systems and artists around
              the world. Our platform is built on the principles of DIY culture,
              artistic freedom, and sonic exploration.
            </p>
            <div className="flex items-center">
              <div className="mr-8">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-gray-400">BROADCASTING</div>
              </div>
              <div className="mr-8">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-gray-400">DJs & ARTISTS</div>
              </div>
              <div>
                <div className="flex items-center text-3xl font-bold text-primary">
                  <span id="listener-count">1,420</span>
                </div>
                <div className="text-sm text-gray-400">LIVE LISTENERS</div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative rounded-lg overflow-hidden h-80 md:h-96">
              <img
                src="/assets/images/free-party-culture.jpg"
                alt="TeKSTROGEN Free Party"
                className="absolute w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="bg-primary bg-opacity-20 text-primary text-xs px-2 py-1 rounded-full mb-2 inline-block">
                  FREE PARTY CULTURE
                </span>
                <h3 className="text-xl font-bold">The Spirit of Underground</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

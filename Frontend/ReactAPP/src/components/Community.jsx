import React from "react";

const Community = () => {
  const testimonials = [
    {
      id: 1,
      name: "DJ Spiral",
      role: "Sound System Operator",
      image:
        "/assets/images/avatars/dj-avatar-1.jpg",
      quote:
        "TeKSTROGEN has been vital for connecting our sound system with the global tribe. It's more than radio, it's the pulse of the free party movement.",
    },
    {
      id: 2,
      name: "Alex T",
      role: "Long-time Listener",
      image:
        "/assets/images/avatars/dj-avatar-2.jpg",
      quote:
        "I discovered TeKSTROGEN three years ago and it completely changed how I experience tekno culture. The community here understands the true spirit of underground music.",
    },
    {
      id: 3,
      name: "Hardtek Crew",
      role: "Artist Collective",
      image:
        "/assets/images/avatars/dj-avatar-3.jpg",
      quote:
        "Having our first live set broadcast on TeKSTROGEN was a turning point for our collective. The platform gives voice to artists who stay true to the underground.",
    },
  ];

  const stats = [
    { label: "ACTIVE USERS", value: "14K+" },
    { label: "COUNTRIES", value: "32" },
    { label: "SOUND SYSTEMS", value: "47" },
    { label: "MONTHLY LISTENERS", value: "220K" },
  ];

  return (
    <section id="community" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Global Community
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            TeKSTROGEN unites sound systems, artists, and ravers across borders.
            We're more than just listeners – we're a movement dedicated to free
            expression, DIY culture, and the authentic underground spirit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Collaborative Network</h3>
              <p className="text-gray-400 mb-6">
                Our platform connects sound systems, DJs, visual artists, and
                party organizers around the world. Share knowledge, equipment,
                and opportunities within our growing network.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary bg-opacity-20 hover:bg-opacity-30 text-primary px-6 py-2 !rounded-button whitespace-nowrap">
                  <i className="ri-team-line mr-2"></i> Join Community
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 px-6 py-2 !rounded-button whitespace-nowrap">
                  <i className="ri-question-line mr-2"></i> Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Community Forum</h3>
              <p className="text-gray-400 mb-6">
                Engage in discussions about sound system culture, production
                techniques, event organizing, and all aspects of the underground
                scene. Knowledge sharing is at the core of our community.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-gray-800 text-xs px-2 py-1 rounded-full text-gray-300">
                  <i className="ri-fire-line mr-1"></i> Sound Systems
                </span>
                <span className="bg-gray-800 text-xs px-2 py-1 rounded-full text-gray-300">
                  <i className="ri-discuss-line mr-1"></i> Event Planning
                </span>
                <span className="bg-gray-800 text-xs px-2 py-1 rounded-full text-gray-300">
                  <i className="ri-rhythm-line mr-1"></i> Production
                </span>
                <span className="bg-gray-800 text-xs px-2 py-1 rounded-full text-gray-300">
                  <i className="ri-group-line mr-1"></i> Crew Connect
                </span>
              </div>
              <button className="w-full bg-gray-800 hover:bg-gray-700 py-3 !rounded-button">
                <i className="ri-discuss-line mr-2"></i> Visit Forum
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg border border-gray-800 p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Community Voices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-900 rounded-lg border border-gray-800 p-6"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-gray-700"
                  />
                  <div className="ml-4">
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="italic text-gray-300">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 !rounded-button">
            <i className="ri-group-line mr-2"></i> Explore Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default Community;

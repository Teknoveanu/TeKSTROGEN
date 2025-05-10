import React from "react";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "NEUROTIK SOUNDSYSTEM",
      date: "28 MAY 2025",
      time: "22:00 - 08:00",
      location: "SECRET LOCATION • PARIS",
      description:
        "Acid-driven warehouse party with massive sound system setup and visual projections.",
      genres: ["Acid Tekno", "Tribe", "Mental"],
    },
    {
      id: 2,
      title: "Underground Resistance",
      date: "5 JUNE 2025",
      time: "23:00 - 09:00",
      location: "ABANDONED FACTORY • BERLIN",
      description:
        "Raw, uncompromising tekno in an industrial setting. Expect darkness and proper sound.",
      genres: ["Hard Tekno", "Industrial", "Spiral"],
    },
    {
      id: 3,
      title: "FREE23 COLLECTIVE",
      date: "19 JUNE 2025",
      time: "22:00 - 12:00",
      location: "FOREST CLEARING • CZECH REPUBLIC",
      description:
        "Outdoor free party with multiple sound systems and a focus on community.",
      genres: ["Tribe", "Hardtek", "Subtek"],
    },
  ];

  return (
    <section id="events" className="py-24 bg-black bg-opacity-95">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Upcoming Free Parties
          </h2>
          <button className="text-primary hover:underline">
            View All Events <i className="ri-arrow-right-line align-middle"></i>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="bg-primary bg-opacity-20 text-primary text-xs px-2 py-1 rounded-full mb-2 inline-block">
                      {event.date}
                    </span>
                    <h3 className="text-xl font-bold">{event.title}</h3>
                  </div>
                  <button className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center">
                    <i className="ri-share-line"></i>
                  </button>
                </div>

                <div className="flex items-center mb-4 text-gray-400 text-sm">
                  <i className="ri-time-line mr-2"></i>
                  <span>{event.time}</span>
                </div>

                <div className="flex items-center mb-4 text-gray-400 text-sm">
                  <i className="ri-map-pin-line mr-2"></i>
                  <span>{event.location}</span>
                </div>

                <p className="text-gray-400 mb-5">{event.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {event.genres.map((genre, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-xs px-2 py-1 rounded-full text-gray-300"
                    >
                      {genre}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-gray-800 hover:bg-gray-700 py-3 rounded-button">
                  <i className="ri-map-pin-fill mr-2"></i> Get Location
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;

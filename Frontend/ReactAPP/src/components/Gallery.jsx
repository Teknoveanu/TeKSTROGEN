import React, { useState } from "react";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("photos");

  const galleryItems = {
    photos: [
      {
        image: "/assets/images/gallery/party-1.jpg",
        title: "Forest Tekno 2024",
        description: "Summer solstice celebration in the deep forest",
      },
      {
        image: "/assets/images/gallery/party-2.jpg",
        title: "Warehouse Teknival",
        description: "Abandoned factory transformation",
      },
      {
        image: "/assets/images/gallery/party-3.jpg",
        title: "Underground Bunker",
        description: "23 hour journey into sound",
      },
      {
        image: "/assets/images/gallery/party-4.jpg",
        title: "Mountain Spiral",
        description: "Sunrise session at 2000m altitude",
      },
      {
        image: "/assets/images/gallery/party-5.jpg",
        title: "Beach Transmission",
        description: "Sand, sea and heavy soundwaves",
      },
      {
        image: "/assets/images/gallery/party-6.jpg",
        title: "City Resistance",
        description: "Urban reclaiming space",
      },
    ],
    videos: [
      {
        image: "/assets/images/videos/video-1.jpg",
        title: "System Showcase 2024",
        description: "Walk-through of our latest sound system build",
        duration: "12:43",
      },
      {
        image: "/assets/images/videos/video-2.jpg",
        title: "Forest Connection Live Set",
        description: "Full recording from our forest gathering",
        duration: "1:23:17",
      },
      {
        image: "/assets/images/videos/video-3.jpg",
        title: "TeKSTROGEN: The Documentary",
        description: "The story of our sound system collective",
        duration: "45:22",
      },
      {
        image: "/assets/images/videos/video-4.jpg",
        title: "Acid Core Masterclass",
        description: "Technical session on acid patterns and synthesis",
        duration: "32:18",
      },
    ],
    soundsystems: [
      {
        image: "/assets/images/soundsystems/system-1.jpg",
        title: "Apocalypse Rig",
        description: "45kW system with custom bass bins",
      },
      {
        image: "/assets/images/soundsystems/system-2.jpg",
        title: "Warehouse Destroyer",
        description: "Industrial space optimization setup",
      },
      {
        image: "/assets/images/soundsystems/system-3.jpg",
        title: "Forest Penetrator",
        description: "Outdoor system with weather protection",
      },
      {
        image: "/assets/images/soundsystems/system-4.jpg",
        title: "Nomad System",
        description: "Modular build for quick mobility",
      },
    ],
    collections: [
      {
        image: "/assets/images/collections/vinyl-1.jpg",
        title: "Vinyl Archives",
        description: "Rare pressings from 1995-2005",
      },
      {
        image: "/assets/images/collections/art-1.jpg",
        title: "Flyer Art Collection",
        description: "20 years of underground party artwork",
      },
      {
        image: "/assets/images/collections/history-1.jpg",
        title: "System Evolution",
        description: "From speakers to full rigs - our journey",
      },
      {
        image: "/assets/images/collections/workshop-1.jpg",
        title: "DIY Workshop Archive",
        description: "Building knowledge base for the community",
      },
    ],
  };

  return (
    <section id="gallery" className="py-24 bg-black bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Gallery <span className="text-primary">Showcase</span>
          </h2>
          <a
            href="#"
            className="text-primary hover:underline flex items-center"
          >
            Submit Content <i className="ri-arrow-right-line ml-1"></i>
          </a>
        </div>

        <div className="mb-8 border-b border-gray-800">
          <div className="flex overflow-x-auto space-x-4 pb-2">
            <button
              onClick={() => setActiveTab("photos")}
              className={`py-2 px-4 whitespace-nowrap ${
                activeTab === "photos"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Photo Insights
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`py-2 px-4 whitespace-nowrap ${
                activeTab === "videos"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Video Archive
            </button>
            <button
              onClick={() => setActiveTab("soundsystems")}
              className={`py-2 px-4 whitespace-nowrap ${
                activeTab === "soundsystems"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Sound System Showcase
            </button>
            <button
              onClick={() => setActiveTab("collections")}
              className={`py-2 px-4 whitespace-nowrap ${
                activeTab === "collections"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Collections
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems[activeTab].map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 bg-opacity-50 rounded-lg overflow-hidden group hover:bg-gray-800 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                {activeTab === "videos" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-primary bg-opacity-80 rounded-full flex items-center justify-center">
                      <i className="ri-play-fill text-2xl"></i>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-2 py-1 text-xs">
                      {item.duration}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
              <div className="px-4 pb-4 flex justify-between items-center">
                <span className="text-xs text-gray-500">
                  {activeTab === "photos" && "Photo Collection"}
                  {activeTab === "videos" && "Video Content"}
                  {activeTab === "soundsystems" && "System Showcase"}
                  {activeTab === "collections" && "Archive Material"}
                </span>
                <button className="text-primary text-sm hover:underline">
                  View {activeTab === "videos" ? "Video" : "Details"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
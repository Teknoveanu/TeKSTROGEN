import React, { useState } from "react";

const Genres = () => {
  const [activeGenre, setActiveGenre] = useState("acidTekno");

  const genres = [
    {
      id: "acidTekno",
      name: "Acid Tekno",
      description:
        "Characterized by the squelchy sound of the Roland TB-303, Acid Tekno combines hypnotic acid lines with hard-hitting tekno beats. It's the soundtrack of warehouse raves and underground parties since the early 90s.",
      bpm: "170-190",
      origins: "Early 90s UK and French free party scene",
      keyArtists: [
        "Manu le Malin",
        "Crystal Distortion",
        "69db",
        "Noize Creator",
      ],
      iconClass: "ri-pulse-line",
    },
    {
      id: "tribe",
      name: "Tribe",
      description:
        "A French innovation with tribal influences, characterized by hypnotic, looping rhythms and psychedelic atmospheres. Tribe is all about trance-inducing repetition and spiritual connection on the dancefloor.",
      bpm: "160-180",
      origins: "French sound systems like Heretik, Spiral Tribe",
      keyArtists: ["Popof", "Radium", "Micropoint", "Guigoo"],
      iconClass: "ri-shape-line",
    },
    {
      id: "hardtek",
      name: "Hardtek",
      description:
        "Hardtek merges the raw energy of hardcore with tekno's rhythmic complexity. Expect punishing kick drums, distorted basslines and a relentless drive that defines the hardcore end of the free party spectrum.",
      bpm: "170-200",
      origins: "French and European tekno scenes, late 90s",
      keyArtists: ["The Sickest Squad", "Narkotek", "Maissouille", "Le Bask"],
      iconClass: "ri-disc-line",
    },
    {
      id: "mental",
      name: "Mental Tekno",
      description:
        "The most experimental and psychedelic subgenre, focused on disorienting soundscapes, glitchy patterns, and mind-bending sound design. For when the regular tekno isn't twisted enough.",
      bpm: "160-190",
      origins: "European experimental tekno scene, 2000s",
      keyArtists: ["Ixindamix", "Azax Syndrom", "Teknambul", "Youthless"],
      iconClass: "ri-psychotherapy-line",
    },
    {
      id: "industrial",
      name: "Industrial Tekno",
      description:
        "Dark, mechanical, and heavily influenced by industrial music, this genre incorporates metallic sounds, factory noises, and dystopian atmospheres. The sound of post-apocalyptic warehouse parties.",
      bpm: "140-170",
      origins: "Industrial music crossover with tekno, early 2000s",
      keyArtists: [
        "Moleculez",
        "Implant",
        "The Outside Agency",
        "Somatic Responses",
      ],
      iconClass: "ri-hammer-line",
    },
  ];

  const activeGenreData = genres.find((genre) => genre.id === activeGenre);

  return (
    <section id="genres" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Sound</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            TeKSTROGEN showcases the full spectrum of underground tekno genres.
            From acid-driven warehouse stompers to mind-bending psychedelic
            journeys, discover the diverse sounds that define our collective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden p-1">
              {genres.map((genre) => (
                <button
                  key={genre.id}
                  className={`w-full text-left px-4 py-3 rounded ${
                    activeGenre === genre.id
                      ? "bg-primary bg-opacity-20 text-primary"
                      : "hover:bg-gray-800"
                  }`}
                  onClick={() => setActiveGenre(genre.id)}
                >
                  <div className="flex items-center">
                    <i className={`${genre.iconClass} text-lg mr-3`}></i>
                    <span>{genre.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden p-6">
              <div className="flex items-center mb-4">
                <i
                  className={`${activeGenreData.iconClass} text-4xl text-primary mr-4`}
                ></i>
                <h3 className="text-2xl font-bold">{activeGenreData.name}</h3>
              </div>

              <p className="text-gray-300 mb-6">
                {activeGenreData.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">BPM Range</div>
                  <div className="font-mono">{activeGenreData.bpm}</div>
                </div>

                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Origins</div>
                  <div>{activeGenreData.origins}</div>
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-400 mb-3">Key Artists</div>
                <div className="flex flex-wrap gap-2">
                  {activeGenreData.keyArtists.map((artist, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-xs px-3 py-1 rounded-full"
                    >
                      {artist}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <button className="bg-primary bg-opacity-20 hover:bg-opacity-30 text-primary px-4 py-2 !rounded-button">
                  <i className="ri-headphone-line mr-2"></i> Listen to{" "}
                  {activeGenreData.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Genres;

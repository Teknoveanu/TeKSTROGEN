import React, { useState } from "react";

const Schedule = () => {
  const [activeDay, setActiveDay] = useState("monday");

  const weekSchedule = {
    monday: [
      {
        time: "00:00 - 03:00",
        dj: "Acid_Trooper",
        show: "Early Hours Psychedelics",
        genre: "Acid Tekno",
      },
      {
        time: "03:00 - 06:00",
        dj: "Mental_Zero",
        show: "Dawn Crusher",
        genre: "Mental",
      },
      {
        time: "06:00 - 09:00",
        dj: "DJ Tribe303",
        show: "Morning Rituals",
        genre: "Tribe",
      },
      {
        time: "09:00 - 12:00",
        dj: "Teknotik",
        show: "Midday Madness",
        genre: "Hard Tekno",
      },
      {
        time: "12:00 - 15:00",
        dj: "Sub_bass_warrior",
        show: "Afternoon Dropouts",
        genre: "Subtek",
      },
      {
        time: "15:00 - 18:00",
        dj: "Industrial_Force",
        show: "Machine Hours",
        genre: "Industrial",
      },
      {
        time: "18:00 - 21:00",
        dj: "Tribe_Vibe",
        show: "Evening Session",
        genre: "Tribe",
      },
      {
        time: "21:00 - 00:00",
        dj: "Freetekno_Alliance",
        show: "Prime Time Chaos",
        genre: "Freetekno",
      },
    ],
    tuesday: [
      {
        time: "00:00 - 03:00",
        dj: "Spiral_Tekno",
        show: "Mind Twister",
        genre: "Spiral",
      },
      {
        time: "03:00 - 06:00",
        dj: "Hard_Drive",
        show: "System Overload",
        genre: "Hardtek",
      },
      {
        time: "06:00 - 09:00",
        dj: "Acidic_Rain",
        show: "Morning Meltdown",
        genre: "Acid Tekno",
      },
      {
        time: "09:00 - 12:00",
        dj: "Mental_Maze",
        show: "Labyrinth",
        genre: "Mental",
      },
      {
        time: "12:00 - 15:00",
        dj: "Tribalist",
        show: "Ritual Drums",
        genre: "Tribe",
      },
      {
        time: "15:00 - 18:00",
        dj: "Hard_Limit",
        show: "No Boundaries",
        genre: "Hard Tekno",
      },
      {
        time: "18:00 - 21:00",
        dj: "Sub_Division",
        show: "Low End Theory",
        genre: "Subtek",
      },
      {
        time: "21:00 - 00:00",
        dj: "Industrial_Complex",
        show: "Factory Floor",
        genre: "Industrial",
      },
    ],
    wednesday: [
      {
        time: "00:00 - 03:00",
        dj: "Tribe_Master",
        show: "Midnight Tribe",
        genre: "Tribe",
      },
      {
        time: "03:00 - 06:00",
        dj: "Free_Circuit",
        show: "Circuit Breaker",
        genre: "Freetekno",
      },
      {
        time: "06:00 - 09:00",
        dj: "Spiral_Vision",
        show: "Morning Spirals",
        genre: "Spiral",
      },
      {
        time: "09:00 - 12:00",
        dj: "Hardtek_Heroine",
        show: "Mid Week Blast",
        genre: "Hardtek",
      },
      {
        time: "12:00 - 15:00",
        dj: "Acid_Protocol",
        show: "Protocol 303",
        genre: "Acid Tekno",
      },
      {
        time: "15:00 - 18:00",
        dj: "Mental_Patient",
        show: "Asylum Hours",
        genre: "Mental",
      },
      {
        time: "18:00 - 21:00",
        dj: "Tribal_Council",
        show: "Council Meeting",
        genre: "Tribe",
      },
      {
        time: "21:00 - 00:00",
        dj: "Tekno_Terrorist",
        show: "Sonic Warfare",
        genre: "Hard Tekno",
      },
    ],
    thursday: [
      {
        time: "00:00 - 06:00",
        dj: "Community Takeover",
        show: "Open Decks Night",
        genre: "Mixed",
      },
      {
        time: "06:00 - 09:00",
        dj: "Sub_Level",
        show: "Sub Bass Morning",
        genre: "Subtek",
      },
      {
        time: "09:00 - 12:00",
        dj: "Industrial_Plant",
        show: "Factory Shift",
        genre: "Industrial",
      },
      {
        time: "12:00 - 15:00",
        dj: "TribeVibe",
        show: "Tribal Gathering",
        genre: "Tribe",
      },
      {
        time: "15:00 - 18:00",
        dj: "Free_Form",
        show: "No Rules Radio",
        genre: "Freetekno",
      },
      {
        time: "18:00 - 21:00",
        dj: "Spiral_Staircase",
        show: "Ascension",
        genre: "Spiral",
      },
      {
        time: "21:00 - 00:00",
        dj: "Hard_Knox",
        show: "School of Hard Knox",
        genre: "Hardtek",
      },
    ],
    friday: [
      {
        time: "00:00 - 03:00",
        dj: "Acid_Bath",
        show: "TB-303 Therapy",
        genre: "Acid Tekno",
      },
      {
        time: "03:00 - 06:00",
        dj: "Mental_State",
        show: "Altered States",
        genre: "Mental",
      },
      {
        time: "06:00 - 09:00",
        dj: "Tribe_Chief",
        show: "Morning Ceremony",
        genre: "Tribe",
      },
      {
        time: "09:00 - 12:00",
        dj: "Hard_Knock",
        show: "Hard Knock Life",
        genre: "Hard Tekno",
      },
      {
        time: "12:00 - 15:00",
        dj: "Sub_Culture",
        show: "Underground Frequencies",
        genre: "Subtek",
      },
      {
        time: "15:00 - 18:00",
        dj: "Industrial_Accident",
        show: "Danger Zone",
        genre: "Industrial",
      },
      {
        time: "18:00 - 00:00",
        dj: "Weekend_Warriors",
        show: "Friday Night Marathon",
        genre: "Mixed",
      },
    ],
    saturday: [
      {
        time: "00:00 - 06:00",
        dj: "Party_Squad",
        show: "All Night Long",
        genre: "Mixed",
      },
      {
        time: "06:00 - 09:00",
        dj: "Morning_After",
        show: "Afterhours",
        genre: "Minimal Tekno",
      },
      {
        time: "09:00 - 12:00",
        dj: "Weekend_Tribe",
        show: "Tribal Weekend",
        genre: "Tribe",
      },
      {
        time: "12:00 - 18:00",
        dj: "Sound_System_Showcase",
        show: "System Showcase",
        genre: "Mixed",
      },
      {
        time: "18:00 - 00:00",
        dj: "Prime_Time_Crew",
        show: "Saturday Night Special",
        genre: "Mixed",
      },
    ],
    sunday: [
      {
        time: "00:00 - 06:00",
        dj: "After_Party",
        show: "Never Stop",
        genre: "Mixed",
      },
      {
        time: "06:00 - 12:00",
        dj: "Sunday_Service",
        show: "Tekno Church",
        genre: "Mixed",
      },
      {
        time: "12:00 - 15:00",
        dj: "Chill_Zone",
        show: "Ambient Recovery",
        genre: "Ambient Tekno",
      },
      {
        time: "15:00 - 18:00",
        dj: "Back_To_Roots",
        show: "Old School Session",
        genre: "Classic Tekno",
      },
      {
        time: "18:00 - 21:00",
        dj: "New_Talent",
        show: "Fresh Blood",
        genre: "Mixed",
      },
      {
        time: "21:00 - 00:00",
        dj: "Week_Ahead",
        show: "Week Preview",
        genre: "Mixed",
      },
    ],
  };

  const days = [
    { id: "monday", label: "MON" },
    { id: "tuesday", label: "TUE" },
    { id: "wednesday", label: "WED" },
    { id: "thursday", label: "THU" },
    { id: "friday", label: "FRI" },
    { id: "saturday", label: "SAT" },
    { id: "sunday", label: "SUN" },
  ];

  return (
    <section id="schedule" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Radio Schedule</h2>
          <div className="space-x-3">
            <button className="bg-primary bg-opacity-20 hover:bg-opacity-30 text-primary px-4 py-2 !rounded-button whitespace-nowrap">
              <i className="ri-calendar-line mr-2"></i> Full Schedule
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 !rounded-button whitespace-nowrap">
              <i className="ri-time-line mr-2"></i> Current Show
            </button>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden mb-8">
          <div className="flex overflow-x-auto scrollbar-hidden">
            {days.map((day) => (
              <button
                key={day.id}
                className={`px-6 py-4 text-center min-w-[80px] ${
                  activeDay === day.id
                    ? "bg-primary bg-opacity-20 text-primary"
                    : "text-gray-400 hover:bg-gray-800"
                }`}
                onClick={() => setActiveDay(day.id)}
              >
                {day.label}
              </button>
            ))}
          </div>

          <div className="px-6 py-4">
            {weekSchedule[activeDay].map((slot, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row md:items-center py-4 ${
                  index !== weekSchedule[activeDay].length - 1
                    ? "border-b border-gray-800"
                    : ""
                }`}
              >
                <div className="md:w-1/6 mb-2 md:mb-0">
                  <div className="text-primary font-mono">{slot.time}</div>
                </div>
                <div className="md:w-2/6 mb-2 md:mb-0">
                  <div className="font-bold">{slot.dj}</div>
                  <div className="text-sm text-gray-400">{slot.show}</div>
                </div>
                <div className="md:w-1/6 mb-2 md:mb-0">
                  <span className="bg-gray-800 text-xs px-2 py-1 rounded-full text-gray-300">
                    {slot.genre}
                  </span>
                </div>
                <div className="md:w-2/6 flex justify-end space-x-2">
                  <button
                    className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center"
                    aria-label="Notify"
                  >
                    <i className="ri-notification-line"></i>
                  </button>
                  <button
                    className="bg-primary bg-opacity-20 hover:bg-opacity-30 text-primary w-10 h-10 rounded-full flex items-center justify-center"
                    aria-label="Play"
                  >
                    <i className="ri-play-fill"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;

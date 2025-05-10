import React from "react";

const MobileApp = () => {
  const features = [
    {
      icon: "ri-broadcast-line",
      title: "Live Broadcasting",
      description:
        "Stream our radio channels in high quality with minimal data usage, perfect for parties with limited connectivity.",
    },
    {
      icon: "ri-calendar-event-line",
      title: "Event Finder",
      description:
        "Discover underground events near you with our location-based system and get automatic notifications.",
    },
    {
      icon: "ri-user-voice-line",
      title: "Chat & Community",
      description:
        "Connect with fellow ravers, share experiences, and coordinate meetups at events.",
    },
    {
      icon: "ri-history-line",
      title: "Set Archives",
      description:
        "Access our complete library of past sets and download them for offline listening.",
    },
  ];

  return (
    <section id="mobile-app" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              TeKSTROGEN Mobile App
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Take the underground with you everywhere. Our mobile app keeps you
              connected to the global tekno community, with exclusive features
              designed for the free party lifestyle.
            </p>

            <div className="mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex mb-6">
                  <div className="mr-4">
                    <div className="bg-primary bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center">
                      <i className={`${feature.icon} text-xl text-primary`}></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#" className="block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on App Store"
                  className="h-12"
                />
              </a>
              <a href="#" className="block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-12"
                />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-4">
            <div className="relative">
              <div className="bg-primary bg-opacity-20 absolute -top-8 -left-8 w-64 h-64 rounded-full blur-3xl z-0"></div>
              <div className="bg-secondary bg-opacity-20 absolute -bottom-12 -right-12 w-48 h-48 rounded-full blur-3xl z-0"></div>

              <div className="relative z-10 flex justify-center">
                <img
                  src="/assets/images/mobile-app-screenshot.jpg"
                  alt="TeKSTROGEN Mobile App"
                  className="max-w-full rounded-3xl border-8 border-gray-900 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;

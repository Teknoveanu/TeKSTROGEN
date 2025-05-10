import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black pt-16 pb-6 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a
              href="#"
              className="text-2xl font-['Orbitron'] font-black tracking-wider text-white mb-4 inline-block"
            >
              TeKSTROGEN
            </a>
            <p className="text-gray-400 mb-6">
              The hormone of underground electronic music. Broadcasting tekno
              culture 24/7.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <i className="ri-soundcloud-line"></i>
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <i className="ri-telegram-line"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  Live Stream
                </a>
              </li>
              <li>
                <a href="#events" className="text-gray-400 hover:text-primary">
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  className="text-gray-400 hover:text-primary"
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="text-gray-400 hover:text-primary"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#mobile-app"
                  className="text-gray-400 hover:text-primary"
                >
                  Mobile App
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  DJ Submissions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  Sound System Directory
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  Free Party Ethics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  Harm Reduction
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  DIY Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  Support Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="ri-mail-line mr-2 text-primary"></i>
                <a
                  href="mailto:info@tekstrogen.net"
                  className="text-gray-400 hover:text-primary"
                >
                  info@tekstrogen.net
                </a>
              </li>
              <li className="flex items-center">
                <i className="ri-signal-tower-line mr-2 text-primary"></i>
                <span className="text-gray-400">
                  Broadcasting from mobile sound systems worldwide
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="#"
                className="bg-primary bg-opacity-20 hover:bg-opacity-30 text-primary px-4 py-2 !rounded-button"
              >
                <i className="ri-headphone-line mr-2"></i> Listen Now
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} TeKSTROGEN. All rights reserved.
            </div>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-500 hover:text-gray-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from "react";

const NavDropdown = ({ title, items }) => {
  return (
    <div className="dropdown relative">
      <button className="px-4 py-2 hover:text-primary whitespace-nowrap !rounded-button">
        {title}
      </button>
      <div className="dropdown-menu">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="block px-4 py-2 hover:bg-gray-800"
          >
            {item.label}
          </a>
        ))}
        <a href="#newsletter" className="block px-4 py-2 hover:bg-gray-800">
          Newsletter
        </a>
      </div>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Funcție pentru închiderea meniului după ce s-a făcut click pe un link
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
          // Închide meniul dacă e deschis
          if (isMenuOpen) setIsMenuOpen(false);
        }
      }
    };

    // Aplică handler pentru toate link-urile cu anchor
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleAnchorClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleAnchorClick);
      });
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black bg-opacity-80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            className="text-2xl font-['Orbitron'] font-black tracking-wider text-white"
          >
            TeKSTROGEN
          </a>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <div className="dropdown relative">
                  <button className="px-4 py-2 hover:text-primary whitespace-nowrap !rounded-button">
                    About
                  </button>
                  <div className="dropdown-menu">
                    <a
                      href="#about"
                      className="block px-4 py-2 hover:bg-gray-800"
                    >
                      TeKSTROGEN Story
                    </a>
                    <a
                      href="#about"
                      className="block px-4 py-2 hover:bg-gray-800"
                    >
                      Our Mission
                    </a>
                    <a
                      href="#about"
                      className="block px-4 py-2 hover:bg-gray-800"
                    >
                      Team
                    </a>
                    <a
                      href="#about"
                      className="block px-4 py-2 hover:bg-gray-800"
                    >
                      Partners
                    </a>
                    <a
                      href="#about"
                      className="block px-4 py-2 hover:bg-gray-800"
                    >
                      Press Kit
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#events"
                  className="hover:text-primary transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  className="hover:text-primary transition-colors"
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="hover:text-primary transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#genres"
                  className="hover:text-primary transition-colors"
                >
                  Genres
                </a>
              </li>
              <li>
                <a
                  href="#mobile-app"
                  className="hover:text-primary transition-colors"
                >
                  App
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center">
            <button className="hidden md:flex bg-primary text-black font-bold px-4 py-2 !rounded-button glow-button">
              <i className="ri-headphone-fill mr-2"></i> Listen Now
            </button>
            <button
              className="ml-4 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i
                className={`${
                  isMenuOpen ? "ri-close-line" : "ri-menu-line"
                } text-2xl`}
              ></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-black bg-opacity-95 overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <ul className="space-y-4">
            <li>
              <a
                href="#about"
                className="block py-2 hover:text-primary transition-colors"
                onClick={handleNavLinkClick}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#events"
                className="block py-2 hover:text-primary transition-colors"
                onClick={handleNavLinkClick}
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#schedule"
                className="block py-2 hover:text-primary transition-colors"
                onClick={handleNavLinkClick}
              >
                Schedule
              </a>
            </li>
            <li>
              <a
                href="#community"
                className="block py-2 hover:text-primary transition-colors"
                onClick={handleNavLinkClick}
              >
                Community
              </a>
            </li>
            <li>
              <a
                href="#genres"
                className="block py-2 hover:text-primary transition-colors"
                onClick={handleNavLinkClick}
              >
                Genres
              </a>
            </li>
            <li>
              <a
                href="#mobile-app"
                className="block py-2 hover:text-primary transition-colors"
                onClick={handleNavLinkClick}
              >
                App
              </a>
            </li>
            <li className="pt-4">
              <button className="w-full bg-primary text-black font-bold px-4 py-2 !rounded-button glow-button">
                <i className="ri-headphone-fill mr-2"></i> Listen Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

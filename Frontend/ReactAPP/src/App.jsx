import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Schedule from "./components/Schedule";
import Community from "./components/Community";
import Genres from "./components/Genres";
import Gallery from "./components/Gallery"; // Adăugat noua componentă Gallery
import MobileApp from "./components/MobileApp";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import RadioPlayer from "./components/RadioPlayer";
import "./styles/globals.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Events />
      <Schedule />
      <Community />
      <Genres />
      <Gallery /> {/* Adăugat componenta Gallery aici, după Genres */}
      <MobileApp />
      <Newsletter />
      <Footer />
      <RadioPlayer />
    </>
  );
}

export default App;

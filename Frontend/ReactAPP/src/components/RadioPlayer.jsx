import React, { useState, useEffect, useRef } from "react";

const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [currentTime, setCurrentTime] = useState(0);
  const [streamError, setStreamError] = useState(false);
  const [email, setEmail] = useState("");
  const audioRef = useRef(null);

  // URL-ul stream-ului tău Icecast
  const streamUrl = "http://130.61.89.132:8080/stream";

  // Formatarea timpului în format MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Inițializare audio
  useEffect(() => {
    audioRef.current = new Audio(streamUrl);
    audioRef.current.volume = volume / 100;

    // Handler pentru erori
    const handleError = () => {
      console.error("Stream error:", audioRef.current.error);
      setIsPlaying(false);
      setStreamError(true);
    };

    audioRef.current.addEventListener("error", handleError);

    // Cleanup la demontare
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("error", handleError);
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Actualizare volum când se schimbă
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setStreamError(false);
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Playback failed:", error);
          setStreamError(true);
        });
    }
  };

  const handleVolumeChange = (e) => {
    setVolume(parseInt(e.target.value));
  };

  // Audio visualizer effect pentru barele animate
  useEffect(() => {
    let timer;
    if (isPlaying) {
      // Pentru simularea barelor de vizualizare audio
      const updateBars = () => {
        const bars = document.querySelectorAll(".audio-visualizer .bar");
        if (bars.length === 0) return;

        bars.forEach((bar) => {
          if (isPlaying) {
            const height = Math.floor(Math.random() * 25) + 5;
            bar.style.height = `${height}px`;
          } else {
            bar.style.height = "5px";
          }
        });
      };

      const interval = setInterval(updateBars, 100);

      // Pentru simularea progresului (opțional pentru radio live)
      timer = setInterval(() => {
        setCurrentTime((prevTime) => (prevTime >= 300 ? 0 : prevTime + 1));
      }, 1000);

      return () => {
        clearInterval(interval);
        clearInterval(timer);
      };
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-90 backdrop-blur-md border-t border-gray-800 z-40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-3 md:mb-0">
            <button
              className="w-10 h-10 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mr-4"
              onClick={togglePlayPause}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              <i
                className={`ri-${
                  isPlaying ? "pause" : "play"
                }-fill ri-lg text-primary`}
              ></i>
            </button>
            <div>
              <div className="flex items-center">
                <h3 className="font-bold mr-2">TeKSTROGEN RADIO</h3>
                <span className="text-xs bg-red-500 px-2 py-0.5 rounded-full">
                  LIVE
                </span>
              </div>
              <p className="text-sm text-gray-400">
                {streamError
                  ? "Stream unavailable - Check back later"
                  : isPlaying
                  ? "Now Playing: Live Tekno Stream"
                  : "Click Play to Start Streaming"}
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="hidden md:flex items-center mr-4">
              <span className="text-xs text-gray-500 mr-2">
                {formatTime(currentTime)}
              </span>
              <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary"
                  style={{ width: `${(currentTime / 300) * 100}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-500 ml-2">LIVE</span>
            </div>
            <div className="flex items-center mr-4">
              <i className="ri-volume-up-line text-gray-400 mr-2"></i>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="w-16 md:w-24"
                aria-label="Volume"
              />
            </div>
            <div className="ml-4 flex items-center">
              <div className="audio-visualizer flex items-center h-6">
                {[...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className="bar bg-primary mx-0.5"
                    style={{
                      width: "2px",
                      height: "5px",
                      transition: "height 0.1s ease",
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Your email address"
            className="flex-grow bg-gray-900 border border-gray-700 text-white px-6 py-4 rounded-button focus:outline-none focus:border-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary-dark text-black font-bold px-8 py-4 !rounded-button glow-button whitespace-nowrap"
            aria-label="Subscribe to newsletter"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default RadioPlayer;

import React, { useState, useEffect } from "react";
import { Sparkles, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DynamicIsland() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPulse, setShowPulse] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPulse((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleButtonClick = (buttonType) => {
    console.log(`${buttonType} button clicked`);
    // You can add navigation logic here
    // navigate(`/${buttonType.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-yellow-500/20 to-orange-500/20 rounded-full blur-xl opacity-50"></div>

        {/* Dynamic Island Container */}
        <div
          className={`relative bg-black border border-gray-800 transition-all duration-500 ease-out cursor-pointer mx-auto ${
            isExpanded
              ? "rounded-3xl px-4 sm:px-6 py-3 sm:py-4 w-72 sm:w-80 max-w-sm"
              : "rounded-full px-3 sm:px-4 py-2 sm:py-3 w-52 sm:w-64 max-w-xs"
          }`}
          onClick={handleClick}
        >
          {/* Pulse animation overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-500/10 rounded-full transition-opacity duration-1000 ${
              showPulse ? "opacity-100" : "opacity-0"
            }`}
          ></div>

          <div className="relative flex items-center justify-between">
            {/* Left section */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
              </div>

              <div className="flex flex-col">
                <span className="text-white text-xs sm:text-sm font-medium">
                  VIEW NEW PROMPTS
                </span>
                {isExpanded && (
                  <div className="text-orange-300 text-xs mt-1 animate-in slide-in-from-left duration-300">
                    ✨ new prompts ready
                  </div>
                )}
              </div>
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              {isExpanded && (
                <button
                  className="bg-gradient-to-r from-purple-900 to-purple-800 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold hover:from-orange-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105 animate-in slide-in-from-right duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/fifthpromptpage");
                  }}
                >
                  View Now
                </button>
              )}

              <ChevronRight
                className={`w-3 h-3 sm:w-4 sm:h-4 text-gray-400 transition-transform duration-300 ${
                  isExpanded ? "rotate-90" : ""
                }`}
              />
            </div>
          </div>

          {/* Expanded content with interactive buttons */}
          {isExpanded && <div className=""></div>}
        </div>

        {/* Ambient particles */}
        <div className="absolute -z-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse`}
              style={{
                left: `${Math.random() * 300}px`,
                top: `${Math.random() * 100}px`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

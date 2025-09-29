import React, { useState, useEffect, useRef } from "react";
import { Sparkles, ChevronRight, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DynamicIsland() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPulse((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const AllPrompts = useNavigate();

  const handleButtonClick = (buttonType, path) => {
    console.log(`${buttonType} button clicked`);
    // Navigation logic here
    // navigate(path);
  };

  return (
    <div className="flex justify-center items-center w-full min-h-[200px] relative">
      {/* Background ambient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-purple-500/10 via-transparent to-transparent rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-orange-500/5 via-transparent to-transparent rounded-full animate-pulse delay-1000"></div>
      </div>

      <div
        className="relative z-10"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Enhanced glow effect */}
        <div
          className="absolute -inset-6 opacity-60 transition-all duration-500 ease-out"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(147, 51, 234, 0.4) 0%, 
              rgba(249, 115, 22, 0.3) 30%, 
              rgba(168, 85, 247, 0.2) 60%, 
              transparent 80%)`,
            filter: "blur(20px)",
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        ></div>

        {/* Dynamic Island Container */}
        <div
          className={`relative bg-gradient-to-br from-gray-900/90 via-black to-gray-900/90 backdrop-blur-xl border border-purple-800/50 shadow-2xl transition-all duration-700 ease-out cursor-pointer mx-auto overflow-hidden ${
            isExpanded
              ? "rounded-3xl px-6 py-5 w-80 sm:w-96 max-w-md"
              : "rounded-full px-5 py-3 w-64 sm:w-72 max-w-sm hover:scale-105"
          }`}
          onClick={handleClick}
          style={{
            boxShadow: isHovered
              ? "0 0 40px rgba(147, 51, 234, 0.3), 0 0 80px rgba(249, 115, 22, 0.1)"
              : "0 0 20px rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-orange-500/5 to-purple-600/5 animate-gradient-x"></div>

          {/* Pulse animation overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-purple-500/10 to-orange-500/10 transition-opacity duration-1000 ${
              showPulse ? "opacity-100" : "opacity-0"
            }`}
            style={{
              borderRadius: "inherit",
            }}
          ></div>

          {/* Shimmer effect */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transition-transform duration-1000 ${
              isHovered ? "translate-x-full" : "-translate-x-full"
            }`}
          ></div>

          <div className="relative flex items-center justify-between">
            {/* Left section */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full animate-spin-slow opacity-50"></div>
                <div className="relative bg-black rounded-full p-1">
                  <Sparkles className="w-5 h-5 text-orange-400 animate-pulse" />
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-white text-sm font-bold tracking-wider">
                  SEE WHAT'S NEW
                </span>
                <span className="text-orange-300/80 text-xs font-medium">
                  AI Prompt Generator
                </span>
                {isExpanded && (
                  <div className="text-purple-300 text-xs mt-2 animate-in slide-in-from-left duration-500 flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    Ready to create magic
                  </div>
                )}
              </div>
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-2">
              {isExpanded && (
                <button
                  className="bg-gradient-to-r from-purple-600 via-purple-700 to-orange-600 text-white px-3 py-1.5 rounded-full text-xs font-bold hover:from-orange-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 animate-in slide-in-from-right duration-500 shadow-lg hover:shadow-purple-500/25"
                  onClick={() => AllPrompts("/allRandom")}
                >
                  ✨ Try Now
                </button>
              )}

              <div className="relative">
                <ChevronRight
                  className={`w-4 h-4 text-gray-300 transition-all duration-300 ${
                    isExpanded
                      ? "rotate-90 text-purple-400"
                      : "group-hover:text-orange-400"
                  }`}
                />
                {isHovered && !isExpanded && (
                  <div className="absolute -inset-1 bg-purple-500/20 rounded-full animate-ping"></div>
                )}
              </div>
            </div>
          </div>

          {/* Expanded content */}
          {isExpanded && (
            <div className="mt-4 animate-in slide-in-from-top duration-500">
              {/* Stats or additional info */}
              <div className="pt-3 border-t border-purple-800/30">
                <div className="flex justify-between text-xs text-gray-400">
                  <span>🎨 1000+ Prompts</span>
                  <span>⚡ AI Powered</span>
                  <span>🚀 Always Fresh</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced floating particles */}
        <div className="absolute -z-10 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full animate-float ${
                i % 2 === 0 ? "bg-purple-400" : "bg-orange-400"
              }`}
              style={{
                left: `${20 + Math.random() * 280}px`,
                top: `${10 + Math.random() * 80}px`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Floating icons around the island when expanded */}
        {isExpanded && (
          <>
            {[Sparkles, Sparkles, Sparkles, Sparkles].map((Icon, i) => (
              <div
                key={i}
                className="absolute animate-float opacity-30"
                style={{
                  left: `${-30 + i * 120}px`,
                  top: `${-40 + Math.sin(i) * 20}px`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${4 + i * 0.5}s`,
                }}
              >
                <Icon className="w-4 h-4 text-purple-400" />
              </div>
            ))}
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 8s ease infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

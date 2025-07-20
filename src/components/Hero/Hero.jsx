import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import gptt from "../../assets/gpt.png";
import copilot from "../../assets/pilot.png";
import DynamicIsland from "../dyanamic islanda/DynamicIsland";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [currentPrompt, setCurrentPrompt] = useState(0);

  //testing part

  const prompts = [
    "A majestic dragon soaring through neon-lit cyberpunk clouds",
    "Ethereal forest spirit dancing in moonlit mist",
    "Vintage robot reading poetry in a cozy library",
    "Crystalline ice palace floating in aurora skies",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrompt((prev) => (prev + 1) % prompts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(90deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
          75% {
            transform: translateY(-30px) rotate(270deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes sparkle {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 0.8;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-pulse-custom {
          animation: pulse 2s ease-in-out infinite;
        }
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        .text-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
      `}</style>

      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 pt-20 p-12 ">
        {/* Floating particles (reduced to 10 for performance) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-float animate-pulse-custom"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 z-0 animate-fadeInUp">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-custom"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-custom"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center text-white max-w-4xl mx-auto">
          <div className="mb-12 space-y-4 animate-fadeInUp">
            <DynamicIsland></DynamicIsland>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              Transform Words Into
              <br />
              <span className="text-gradient">Visual Masterpieces</span>
            </h1>
          </div>

          <p
            className="text-lg sm:text-xl md:text-2xl mb-15 leading-relaxed animate-fadeInUp opacity-90"
            style={{ animationDelay: "0.3s" }}
          >
            Copy our expertly crafted prompts, paste into any AI tool, and watch
            your imagination come to life in stunning detail. No experience
            needed—just pure creative magic.
          </p>

          {/* Current prompt display */}
          <div className="flex mb-8 gap-6">
            <a
              href="https://chatgpt.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-15 h-14"
            >
              <motion.img
                src={gptt}
                alt=""
                animate={{ y: [0, -18, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </a>

            <a
              href="https://copilot.microsoft.com/chats/4Ko47LdB3zMW1BjGaC3oY?msockid=3e46ba9f4fef690e021bafa94e42682b"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-15 h-14"
            >
              <motion.img
                src={copilot}
                alt=""
                animate={{ y: [0, -18, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[
              {
                icon: "📋",
                title: "Copy & Paste",
                desc: "One click to copy perfect prompts",
              },
              {
                icon: "⚡",
                title: "Instant Results",
                desc: "Works with any AI image generator",
              },
              {
                icon: "✨",
                title: "Pro Quality",
                desc: "Crafted by prompt engineering experts",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 group animate-fadeInUp"
                style={{ animationDelay: `${0.9 + index * 0.2}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2 text-lg">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

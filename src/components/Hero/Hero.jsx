import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import gpt from "../../assets/gpt.png";
import copilot from "../../assets/pilot.png";
import nano from "../../assets/nano.png";
import grok from "../../assets/grok.png";
import DynamicIsland from "../dyanamic islanda/DynamicIsland";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const navigate = useNavigate();

  const prompts = [
    "A majestic dragon soaring through neon-lit cyberpunk clouds",
    "Ethereal forest spirit dancing in moonlit mist",
    "Vintage robot reading poetry in a cozy library",
    "Crystalline ice palace floating in aurora skies",
  ];

  const aiPlatforms = [
    {
      name: "ChatGPT",
      url: "https://chatgpt.com/",
      icon: gpt,
      delay: 0,
    },
    {
      name: "Microsoft Copilot",
      url: "https://copilot.microsoft.com/",
      icon: copilot,
      delay: 1,
    },
    {
      name: "Google Gemini",
      url: "https://gemini.google.com/app",
      icon: nano,
      delay: 2,
    },
    {
      name: "Grok",
      url: "https://grok.com/",
      icon: grok,
      delay: 3,
    },
  ];

  const features = [
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
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrompt((prev) => (prev + 1) % prompts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [prompts.length]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 pt-20 px-4 sm:px-6 lg:px-12">
      {/* Optimized floating particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white/30 rounded-full"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: 0,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated background gradients */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white max-w-6xl mx-auto">
        {/* Header section */}
        <motion.div
          className="mb-8 sm:mb-12 space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <DynamicIsland />
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Transform Words Into
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Visual Masterpieces
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 leading-relaxed opacity-90 max-w-4xl px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Copy our expertly crafted prompts, paste into any AI tool, and watch
          your imagination come to life in stunning detail. No experience
          needed—just pure creative magic.
        </motion.p>

        {/* Current prompt display */}
        <motion.div
          className="mb-8 sm:mb-12 p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 max-w-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-sm text-gray-300 mb-2">Try this prompt:</p>
          <motion.p
            key={currentPrompt}
            className="text-lg sm:text-xl font-medium text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            "{prompts[currentPrompt]}"
          </motion.p>
        </motion.div>

        {/* AI Platform logos */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <p className="text-sm text-gray-400 mb-4">
            Works with these AI platforms:
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {aiPlatforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-2">
                  <motion.img
                    src={platform.icon}
                    alt={platform.name}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: platform.delay,
                    }}
                    className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <span className="text-xs text-gray-300 group-hover:text-white transition-colors duration-300 block">
                  {platform.name.split(" ")[0]}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 1.2 + index * 0.2,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="text-3xl sm:text-4xl mb-3 sm:mb-4"
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, 0],
                }}
                transition={{ duration: 0.3 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="font-semibold mb-2 text-lg sm:text-xl text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          {/*<motion.button
            onClick={() => navigate("/prompts")}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-full text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Prompts →
          </motion.button>*/}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

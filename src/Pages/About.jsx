import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-blue-800 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full p-4 sm:p-6 md:p-8 lg:p-10 text-center">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              About Solomon
            </span>
          </h1>
        </div>

        <div className="space-y-4 sm:space-y-5 md:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          <p className="mb-8">
            <strong>Solomon</strong> is a simple prompt-sharing tool that helps
            users generate images using ChatGPT, Microsoft Copilot, or any
            compatible AI tool. You can copy ready-made prompts and paste them
            into the tool of your choice to create stunning visuals.
          </p>

          <p className="mb-8">
            <strong>I'm</strong>, a 2nd-year Software Engineering student. I
            developed this project to practice React.js
          </p>

          <p className="mb-8">
            <strong>How it works:</strong> Just browse → copy → paste into
            ChatGPT or Microsoft Copilot → generate image!
          </p>

          <p className="text-xs sm:text-sm md:text-base text-gray-300 italic mt-6 sm:mt-8 md:mt-10 bg-black/20 p-3 sm:p-4 md:p-5 rounded-lg border border-gray-700/50">
            <strong>Note:</strong> This is an educational project. Some features
            may be limited or not fully developed. I plan to continuously
            improve and enhance this project in the future.
          </p>
        </div>
        <Link to="/">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10">
            {/* Back Button */}
            <button
              className="bg-blue-600 hover:bg-black text-white font-bold py-2 px-6 rounded-full w-[150px] transition duration-600"
              onClick={() => PromptPage("/prompt")}
            >
              ← Back
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default About;

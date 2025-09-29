import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import newsImg from "../assets/newsImg.webp";
import pNews from "../assets/pNews.webp";
import Dayanamic from "../assets/dyanamic.png";
import copilott from "../assets/copilot.png";
import newp from "../assets/addp.png";
import random from "../assets/random.png";
import tNew from "../assets/tryNew.png";

const News = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const newsItems = [
    {
      id: 2106,
      image: tNew,
      title: "New Prompts Added",
      date: "August 11, 2025",
      description:
        "Explore our latest collection of creative prompts designed to inspire your next masterpiece.",
      category: "Update",
      color: "from-violet-500 to-purple-600",
    },
    {
      id: 2105,
      image: random,
      title: "Try Random Prompts",
      date: "July 25, 2025",
      description:
        "Feeling adventurous? Hit the random button and discover unexpected creative possibilities.",
      category: "Feature",
      color: "from-pink-500 to-rose-600",
    },
    {
      id: 2104,
      image: newp,
      title: "Adding New Prompts",
      date: "July 25, 2025",
      description:
        "We're constantly expanding our library with fresh, innovative prompt ideas for you.",
      category: "Update",
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: 2103,
      image: copilott,
      title: "Click Copilot Image",
      date: "July 20, 2025",
      description:
        "One-click integration with Microsoft Copilot for seamless image generation workflow.",
      category: "Feature",
      color: "from-emerald-500 to-teal-600",
    },
    {
      id: 2102,
      image: Dayanamic,
      title: "Quick Navigation",
      date: "July 20, 2025",
      description:
        "Navigate through prompts faster with our improved UI and intuitive controls.",
      category: "Improvement",
      color: "from-orange-500 to-red-600",
    },
    {
      id: 2101,
      image: pNews,
      title: "Images Load Faster",
      date: "July 17, 2025",
      description:
        "Enhanced performance with optimized image loading for a smoother browsing experience.",
      category: "Performance",
      color: "from-indigo-500 to-blue-600",
    },
    {
      id: 2000,
      image: newsImg,
      title: "New AI Prompt Collection Released",
      date: "July 13, 2025",
      description:
        "100+ professionally crafted prompt templates now available. Start creating amazing AI art today!",
      category: "Launch",
      color: "from-purple-500 to-pink-600",
    },
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Update":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        );
      case "Feature":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        );
      case "Improvement":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        );
      case "Performance":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        );
      case "Launch":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-800 text-white relative overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Latest News
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Stay updated with the newest features, improvements, and exciting
            additions to Solomon
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {newsItems.map((news, index) => (
            <div
              key={news.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(news.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Category Badge */}
                <div
                  className={`absolute top-4 left-4 bg-gradient-to-r ${news.color} px-3 py-1 rounded-full flex items-center gap-2 shadow-lg`}
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {getCategoryIcon(news.category)}
                  </svg>
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">
                    {news.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${news.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                ></div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-gray-400 text-sm font-medium">
                    {news.date}
                  </p>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-violet-300 group-hover:to-pink-300 transition-all duration-300">
                  {news.title}
                </h2>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {news.description}
                </p>

                <button
                  onClick={() => navigate("/sixthpromptpage")}
                  className={`group/btn relative bg-gradient-to-r ${news.color} text-white font-semibold px-6 py-3 rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 flex items-center gap-2`}
                >
                  <span className="relative z-10">Read More</span>
                  <svg
                    className="w-5 h-5 relative z-10 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>

              {/* Animated border effect */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                style={{
                  background: `linear-gradient(45deg, transparent 30%, ${
                    hoveredCard === news.id
                      ? "rgba(168, 85, 247, 0.4)"
                      : "transparent"
                  } 50%, transparent 70%)`,
                  backgroundSize: "200% 200%",
                  animation:
                    hoveredCard === news.id ? "shimmer 2s infinite" : "none",
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
          <Link to="/">
            <button className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <svg
                className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Back to Home</span>
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default News;

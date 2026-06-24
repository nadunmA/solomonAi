/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import newsImg from "../assets/newsImg.webp";
import pNews from "../assets/pNews.webp";
import Dayanamic from "../assets/dyanamic.png";
import copilott from "../assets/copilot.png";
import newp from "../assets/addp.png";
import random from "../assets/random.png";
import tNew from "../assets/tryNew.png";
import newui from "../assets/newui.webp";

const CATEGORY_COLORS = {
  Update: { dot: "var(--cyan)", border: "var(--cyan)" },
  Feature: { dot: "var(--magenta)", border: "var(--magenta)" },
  Improvement: { dot: "var(--violet)", border: "var(--violet)" },
  Performance: { dot: "#22d3ee", border: "#22d3ee" },
  Launch: { dot: "var(--magenta)", border: "var(--magenta)" },
};

const getCategoryIcon = (category) => {
  switch (category) {
    case "Update":
      return "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15";
    case "Feature":
      return "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z";
    case "Improvement":
      return "M13 10V3L4 14h7v7l9-11h-7z";
    case "Performance":
      return "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6";
    case "Launch":
      return "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z";
    default:
      return null;
  }
};

const newsItems = [
  {
    id: 2107,
    image: newui,
    title: "Unveiling a Shaper, Immersive Visual Experience",
    date: "June 24, 2026",
    description:
      "Engineered for clarity. Our brand-new interface brings advanced layout micro-interactions and dark-grid optimization tailored for global digital artists.",
    category: "ui update",
  },
  {
    id: 2106,
    image: tNew,
    title: "New Prompts Added",
    date: "August 11, 2025",
    description:
      "Explore our latest collection of creative prompts designed to inspire your next masterpiece.",
    category: "Update",
  },
  {
    id: 2105,
    image: random,
    title: "Try Random Prompts",
    date: "July 25, 2025",
    description:
      "Feeling adventurous? Hit the random button and discover unexpected creative possibilities.",
    category: "Feature",
  },
  {
    id: 2104,
    image: newp,
    title: "Adding New Prompts",
    date: "July 25, 2025",
    description:
      "We're constantly expanding our library with fresh, innovative prompt ideas for you.",
    category: "Update",
  },
  {
    id: 2103,
    image: copilott,
    title: "Click Copilot Image",
    date: "July 20, 2025",
    description:
      "One-click integration with Microsoft Copilot for seamless image generation workflow.",
    category: "Feature",
  },
  {
    id: 2102,
    image: Dayanamic,
    title: "Quick Navigation",
    date: "July 20, 2025",
    description:
      "Navigate through prompts faster with our improved UI and intuitive controls.",
    category: "Improvement",
  },
  {
    id: 2101,
    image: pNews,
    title: "Images Load Faster",
    date: "July 17, 2025",
    description:
      "Enhanced performance with optimized image loading for a smoother browsing experience.",
    category: "Performance",
  },
  {
    id: 2000,
    image: newsImg,
    title: "New AI Prompt Collection Released",
    date: "July 13, 2025",
    description:
      "100+ professionally crafted prompt templates now available. Start creating amazing AI art today!",
    category: "Launch",
  },
];

const News = () => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="relative min-h-screen bg-[var(--void)] bg-grid text-[var(--text-primary)] overflow-hidden pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      {/* ── Ambient glow blobs ── */}
      <div className="absolute top-20 -left-10 w-72 h-72 bg-[var(--violet)]/15 rounded-full blur-3xl animate-drift pointer-events-none" />
      <div className="absolute bottom-20 -right-10 w-96 h-96 bg-[var(--cyan)]/10 rounded-full blur-3xl animate-drift-rev pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--magenta)]/8 rounded-full blur-3xl animate-drift pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          className="text-center mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center mb-5">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, var(--violet), var(--cyan))",
                boxShadow: "0 0 30px rgba(139,92,246,0.35)",
              }}
            >
              <svg
                className="w-6 h-6 text-white"
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

          <p className="font-mono text-xs sm:text-sm text-[var(--cyan)] tracking-widest mb-4">
            // CHANGELOG
          </p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--magenta)] via-[var(--violet)] to-[var(--cyan)]">
              Latest
            </span>{" "}
            <span className="text-[var(--text-primary)]">News</span>
          </h1>

          <p className="text-[var(--text-muted)] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Stay updated with the newest features, improvements, and exciting
            additions to Solomon
          </p>

          <div className="w-24 h-px mx-auto mt-6 bg-gradient-to-r from-transparent via-[var(--cyan)]/60 to-transparent" />
        </motion.div>

        {/* ── News Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {newsItems.map((news, index) => {
            const colors = CATEGORY_COLORS[news.category] ?? {
              dot: "var(--cyan)",
              border: "var(--cyan)",
            };

            return (
              <motion.div
                key={news.id}
                className="group relative glass-panel rounded-2xl overflow-hidden cursor-default"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                whileHover={{ y: -4 }}
                onMouseEnter={() => setHoveredId(news.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  borderColor:
                    hoveredId === news.id ? `${colors.border}40` : undefined,
                  transition: "border-color 0.3s, transform 0.3s",
                }}
              >
                {/* Scanline */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
                  <div className="absolute left-0 right-0 h-1/3 bg-gradient-to-b from-transparent via-[var(--cyan)]/4 to-transparent animate-scanline" />
                </div>

                {/* ── Image ── */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Corner brackets */}
                  <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--cyan)]/0 group-hover:border-[var(--cyan)]/70 transition-colors rounded-tl" />
                  <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--cyan)]/0 group-hover:border-[var(--cyan)]/70 transition-colors rounded-br" />

                  {/* Category badge */}
                  <div
                    className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[10px] tracking-widest text-white"
                    style={{
                      background: "rgba(0,0,0,0.6)",
                      border: `1px solid ${colors.dot}60`,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: colors.dot }}
                    />
                    {news.category.toUpperCase()}
                  </div>
                </div>

                {/* ── Content ── */}
                <div className="relative p-6">
                  {/* Date */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <svg
                      className="w-3.5 h-3.5 text-[var(--text-muted)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-mono text-[11px] text-[var(--text-muted)]">
                      {news.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg sm:text-xl font-bold mb-3 text-[var(--text-primary)] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--magenta)] group-hover:to-[var(--cyan)] transition-all duration-300">
                    {news.title}
                  </h2>

                  {/* Description */}
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5">
                    {news.description}
                  </p>

                  {/* Read more */}
                  <button
                    onClick={() => navigate("/sixthpromptpage")}
                    className="group/btn flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)] hover:text-[var(--cyan)] transition-colors duration-200"
                  >
                    <span>READ MORE</span>
                    <svg
                      className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform duration-200"
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
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Back button ── */}
        <div className="flex justify-center">
          <Link to="/">
            <button className="group flex items-center gap-2 px-7 py-2.5 rounded-full border border-[var(--glass-border)] text-[var(--text-primary)] font-mono text-sm hover:border-[var(--cyan)]/50 hover:text-[var(--cyan)] transition-all duration-300">
              <svg
                className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300"
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
              BACK TO HOME
            </button>
          </Link>
        </div>

        {/* ── Footer dot ── */}
        <div className="text-center mt-12 pt-10 border-t border-[var(--glass-border)]">
          <p className="font-mono text-xs text-[var(--text-muted)] flex items-center justify-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--cyan)] animate-blink-dot" />
            </span>
            Stay tuned for more updates
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;

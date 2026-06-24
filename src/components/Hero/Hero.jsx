/* eslint-disable no-unused-vars */
import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gpt from "../../assets/gpt.png";
import copilot from "../../assets/pilot.png";
import nano from "../../assets/nano.png";
import grok from "../../assets/grok.png";
import AnnouncementBanner from "../announcement-banner/AnnouncementBanner";

const PROMPTS = [
  "A majestic dragon soaring through neon-lit cyberpunk clouds",
  "Ethereal forest spirit dancing in moonlit mist",
  "Vintage robot reading poetry in a cozy library",
  "Crystalline ice palace floating in aurora skies",
];
//d

const ENGINES = [
  { name: "ChatGPT", url: "https://chatgpt.com/", icon: gpt },
  { name: "Microsoft", url: "https://copilot.microsoft.com/", icon: copilot },
  { name: "Google", url: "https://gemini.google.com/app", icon: nano },
  { name: "Grok", url: "https://grok.com/", icon: grok },
];

const STATS = [
  { value: "1,000+", label: "Prompts" },
  { value: "4", label: "AI engines" },
  { value: "0s", label: "Setup needed" },
];

// Isolated decoder — only this re-renders on the interval tick
const PromptDecoder = memo(function PromptDecoder() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let charIndex = 0;
    setDisplay("");
    const target = PROMPTS[index];
    const typeInterval = setInterval(() => {
      charIndex++;
      setDisplay(target.slice(0, charIndex));
      if (charIndex >= target.length) clearInterval(typeInterval);
    }, 28);
    return () => clearInterval(typeInterval);
  }, [index]);

  useEffect(() => {
    const rotate = setInterval(() => {
      setIndex((prev) => (prev + 1) % PROMPTS.length);
    }, 4200);
    return () => clearInterval(rotate);
  }, []);

  return (
    <div className="relative glass-panel rounded-2xl p-5 sm:p-6 overflow-hidden">
      {/* corner brackets */}
      <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--cyan)]/70 rounded-tl" />
      <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[var(--cyan)]/70 rounded-tr" />
      <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[var(--cyan)]/70 rounded-bl" />
      <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--cyan)]/70 rounded-br" />

      {/* scanline */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        <div className="absolute left-0 right-0 h-1/3 bg-gradient-to-b from-transparent via-[var(--cyan)]/10 to-transparent animate-scanline" />
      </div>

      <div className="relative flex items-center justify-between mb-4 font-mono text-[10px] sm:text-xs text-[var(--text-muted)]">
        <span className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--magenta)] animate-blink-dot" />
          </span>
          DECODING_PROMPT
        </span>
        <span>
          #{String(index + 1).padStart(2, "0")}/
          {String(PROMPTS.length).padStart(2, "0")}
        </span>
      </div>

      <p className="relative font-mono text-sm sm:text-base text-[var(--text-primary)] leading-relaxed min-h-[4.5rem]">
        <span className="text-[var(--cyan)]">{">"}</span> {display}
        <span className="inline-block w-2 h-4 bg-[var(--cyan)] align-middle ml-1 animate-blink-dot" />
      </p>

      {/* RUNS ON */}
      <div className="relative mt-5 pt-4 border-t border-[var(--glass-border)]">
        <span className="font-mono text-[10px] text-[var(--text-muted)] block mb-3">
          RUNS ON
        </span>
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {ENGINES.map((engine) => (
            <a
              key={engine.name}
              href={engine.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 rounded-xl border border-[var(--glass-border)] bg-black/30 py-3 px-2 hover:border-[var(--cyan)]/60 hover:bg-black/50 transition-colors"
              title={engine.name}
            >
              <img
                src={engine.icon}
                alt={engine.name}
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain rounded-lg group-hover:scale-110 transition-transform"
              />
              <span className="font-mono text-[9px] sm:text-[10px] text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors text-center leading-tight">
                {engine.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
});

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[var(--void)] bg-grid overflow-hidden">
      <AnnouncementBanner />

      {/* ambient glow blobs */}
      <div className="absolute -top-32 -left-20 w-[28rem] h-[28rem] bg-[var(--violet)]/20 rounded-full blur-3xl animate-drift pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[24rem] h-[24rem] bg-[var(--cyan)]/10 rounded-full blur-3xl animate-drift-rev pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[var(--magenta)]/10 rounded-full blur-3xl animate-drift pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-24">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-8 items-center">
          {/* LEFT — copy column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:pt-12"
          >
            <p className="font-mono text-xs sm:text-sm text-[var(--cyan)] tracking-widest mb-5">
              // PROMPT LIBRARY FOR AI IMAGE TOOLS
            </p>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-[var(--text-primary)]">
              Stop typing
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--magenta)] via-[var(--violet)] to-[var(--cyan)]">
                from scratch.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[var(--text-muted)] max-w-lg leading-relaxed">
              Copy a prompt that's already been tested, paste it into ChatGPT,
              Gemini, Copilot, or Grok, and get the image you imagined — not
              five rounds of guessing.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/sixthpromptpage">
                <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--magenta)] to-[var(--violet)] text-white font-semibold text-sm sm:text-base shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_45px_rgba(139,92,246,0.6)] transition-shadow">
                  Browse prompts
                </button>
              </Link>
              <button className="px-6 py-3 rounded-xl border border-[var(--glass-border)] text-[var(--text-primary)] font-medium text-sm sm:text-base hover:border-[var(--cyan)]/50 hover:text-[var(--cyan)] transition-colors">
                How it works
              </button>
            </div>

            {/* stats row — each stat staggered */}
            <div className="mt-12 flex gap-8">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + i * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <p className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                    {stat.value}
                  </p>
                  <p className="font-mono text-[10px] sm:text-xs text-[var(--text-muted)] tracking-wide mt-1">
                    {stat.label.toUpperCase()}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — HUD signature panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:-mt-2"
          >
            <PromptDecoder />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    // w-full, overflow-x-hidden සහ box-border දමා Android horizontal scrolling දෝෂය සම්පූර්ණයෙන්ම නැති කළා
    <div className="relative min-h-screen w-full bg-[var(--void)] bg-grid text-[var(--text-primary)] overflow-x-hidden box-border pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      {/* ── Ambient glow blobs ── */}
      <div className="absolute top-20 -left-10 w-72 h-72 bg-[var(--violet)]/15 rounded-full blur-3xl animate-drift pointer-events-none" />
      <div className="absolute bottom-20 -right-10 w-96 h-96 bg-[var(--cyan)]/10 rounded-full blur-3xl animate-drift-rev pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--magenta)]/8 rounded-full blur-3xl animate-drift pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto w-full box-border">
        {/* ── Header ── */}
        <motion.div
          className="text-center mb-14 w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center mb-6">
            <motion.div
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center shadow-2xl"
              style={{
                background:
                  "linear-gradient(135deg, var(--magenta), var(--violet), var(--cyan))",
                boxShadow: "0 0 40px rgba(139,92,246,0.4)",
              }}
              whileHover={{ rotate: 6, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </motion.div>
          </div>

          <p className="font-mono text-xs sm:text-sm text-[var(--cyan)] tracking-widest mb-4">
            // SYSTEM INFO
          </p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--magenta)] via-[var(--violet)] to-[var(--cyan)]">
              About
            </span>{" "}
            <span className="text-[var(--text-primary)]">Solomon</span>
          </h1>

          {/* Divider */}
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[var(--cyan)]/60 to-transparent" />
        </motion.div>

        {/* ── Cards ── */}
        <div className="space-y-6 w-full box-border">
          {/* What is Solomon */}
          <motion.div
            className="relative glass-panel rounded-2xl overflow-hidden group max-w-full box-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -3 }}
          >
            {/* Scanline */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute left-0 right-0 h-1/3 bg-gradient-to-b from-transparent via-[var(--cyan)]/5 to-transparent animate-scanline" />
            </div>

            <div className="relative p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 w-full box-border">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, var(--violet), #7c3aed)",
                }}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-mono text-xs text-[var(--cyan)] tracking-widest mb-2">
                  WHAT IS SOLOMON?
                </h2>
                <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed break-words">
                  <span className="text-[var(--text-primary)] font-semibold">
                    Solomon
                  </span>{" "}
                  is a simple prompt-sharing tool that helps users generate
                  images using ChatGPT, Microsoft Copilot, or any compatible AI
                  tool. Browse ready-made prompts, copy them, and paste into the
                  tool of your choice to create stunning visuals.
                </p>
              </div>
            </div>

            {/* Hover border glow */}
            <div className="absolute inset-0 rounded-2xl border border-[var(--violet)]/0 group-hover:border-[var(--violet)]/40 transition-colors duration-500 pointer-events-none" />
          </motion.div>

          {/* How it Works */}
          <motion.div
            className="relative glass-panel rounded-2xl overflow-hidden group max-w-full box-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -3 }}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute left-0 right-0 h-1/3 bg-gradient-to-b from-transparent via-[var(--magenta)]/4 to-transparent animate-scanline" />
            </div>

            <div className="relative p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 w-full box-border">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, var(--magenta), #be185d)",
                }}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-mono text-xs text-[var(--magenta)] tracking-widest mb-2">
                  HOW IT WORKS
                </h2>
                <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base">
                  {["Browse", "Copy", "Paste", "Generate"].map((step, i) => (
                    <React.Fragment key={step}>
                      <span className="text-[var(--text-primary)] font-semibold">
                        {step}
                      </span>
                      {i < 3 && (
                        <svg
                          className="w-4 h-4 text-[var(--cyan)]/60 flex-shrink-0"
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
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed mt-2 break-words">
                  Browse our gallery → copy a prompt → paste into ChatGPT or
                  Microsoft Copilot → generate your image!
                </p>
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl border border-[var(--magenta)]/0 group-hover:border-[var(--magenta)]/40 transition-colors duration-500 pointer-events-none" />
          </motion.div>

          {/* Note */}
          <motion.div
            className="relative rounded-2xl overflow-hidden max-w-full box-border"
            style={{
              background:
                "linear-gradient(135deg, rgba(139,92,246,0.08), rgba(0,0,0,0.4), rgba(6,182,212,0.08))",
              border: "1px solid rgba(139,92,246,0.25)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 w-full box-border">
              <div className="flex-shrink-0 mt-0.5">
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed break-words">
                <span className="text-yellow-400 font-semibold font-mono">
                  NOTE:
                </span>{" "}
                This is an educational project. Some features may be limited or
                not fully developed. I plan to continuously improve and enhance
                this project in the future.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Back Button ── */}
        <motion.div
          className="flex justify-center mt-12 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/">
            <button className="group flex items-center gap-2 px-7 py-2.5 rounded-full border border-[var(--glass-border)] text-[var(--text-primary)] font-mono text-sm hover:border-[var(--cyan)]/50 hover:text-[var(--cyan)] transition-all duration-300 cursor-pointer">
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
        </motion.div>

        {/* ── Footer dot ── */}
        <div className="text-center mt-10 w-full">
          <p className="font-mono text-xs text-[var(--text-muted)] flex items-center justify-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--cyan)] animate-blink-dot" />
            </span>
            © 2026 Solomon Inc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

/* eslint-disable no-unused-vars */
import React, { useState, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const AnnouncementBanner = () => {
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  // ── scroll shadow ──────────────────────────────────────────────────────
  useEffect(() => {
    if (dismissed) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Top of page — always show
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down — hide
        setVisible(false);
      } else {
        // Scrolling up — show
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, dismissed]);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="relative w-full box-border overflow-hidden border-b border-[var(--glass-border)] bg-[var(--panel)]/60 backdrop-blur-md z-40"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Neon Glow Divider Line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-center gap-3 w-full box-border">
            {/* Blinking Dot */}
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--magenta)] animate-blink-dot" />
            </span>

            <p className="font-mono text-xs sm:text-sm text-[var(--text-muted)] text-center leading-normal">
              <span className="text-[var(--cyan)] font-bold">NEW</span>{" "}
              <span className="hidden sm:inline">— </span>
              1,000+ AI prompts, refreshed weekly
            </p>

            <button
              onClick={() => navigate("/allRandom")}
              className="font-mono text-xs text-[var(--text-primary)] hover:text-[var(--cyan)] underline underline-offset-4 transition-colors shrink-0 cursor-pointer"
            >
              Browse →
            </button>

            {/* Dismiss Button */}
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss announcement"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-red-400 transition-colors text-sm hidden sm:block p-1 cursor-pointer"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(AnnouncementBanner);

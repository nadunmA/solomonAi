/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { name: "Prompts", path: "/prompt" },
  { name: "About", path: "/about", isButton: true },
  { name: "News", path: "/news" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // ── scroll shadow ──────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── close on route change ──────────────────────────────────────────────
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // ── ESC + body-scroll lock + TOUCH OUTSIDE CLOSE ──────────────────────
  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "unset";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    // works for both mouse and touch
    const handleOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside, { passive: true });

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleAboutClick = () => {
    if (location.pathname === "/about") {
      window.location.reload();
    } else {
      navigate("/about");
    }
    setIsMenuOpen(false);
  };

  const isActiveRoute = (path) => location.pathname === path;

  return (
    <motion.nav
      className={`font-ubuntu fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--void)]/85 backdrop-blur-xl border-b border-[var(--glass-border)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent backdrop-blur-md"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* ── Logo ── */}
        <Link
          to="/"
          className="group flex items-center gap-2"
          aria-label="Solomon - Home"
        >
          <motion.div
            className="font-display text-xl font-bold relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--magenta)] via-[var(--violet)] to-[var(--cyan)]">
              Solomon
            </span>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-[var(--magenta)]/20 to-[var(--cyan)]/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              layoutId="logoGlow"
            />
          </motion.div>
        </Link>

        {/* ── Desktop Menu ── */}
        <div className="hidden md:flex items-center space-x-1">
          {NAV_ITEMS.map((item) => {
            const active = isActiveRoute(item.path);

            if (item.isButton) {
              return (
                <motion.button
                  key={item.name}
                  onClick={handleAboutClick}
                  className={`relative px-4 py-2 font-mono text-sm tracking-wide transition-all duration-300 rounded-lg ${
                    active
                      ? "bg-white/5 text-[var(--cyan)]"
                      : "text-[var(--text-muted)] hover:bg-white/5 hover:text-[var(--text-primary)]"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                  {active && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 w-1 h-1 bg-[var(--cyan)] rounded-full"
                      layoutId="activeIndicator"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      style={{ x: "-50%" }}
                    />
                  )}
                </motion.button>
              );
            }

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 font-mono text-sm tracking-wide transition-all duration-300 rounded-lg ${
                  active
                    ? "bg-white/5 text-[var(--cyan)]"
                    : "text-[var(--text-muted)] hover:bg-white/5 hover:text-[var(--text-primary)]"
                }`}
              >
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="block"
                >
                  {item.name}
                </motion.span>
                {active && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 w-1 h-1 bg-[var(--cyan)] rounded-full"
                    layoutId="activeIndicator"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ x: "-50%" }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* ── Hamburger ── */}
        <motion.button
          ref={hamburgerRef}
          onClick={toggleMenu}
          className="md:hidden p-2 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--cyan)]/50 rounded-lg"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={isMenuOpen ? "open" : "closed"}
            className="w-6 h-6 relative"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 5 },
              }}
              className="absolute h-0.5 w-6 bg-[var(--text-primary)] block transition-all duration-300 origin-center"
              style={{ top: "6px" }}
            />
            <motion.span
              variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
              className="absolute h-0.5 w-6 bg-[var(--text-primary)] block transition-all duration-300"
              style={{ top: "11px" }}
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -5 },
              }}
              className="absolute h-0.5 w-6 bg-[var(--text-primary)] block transition-all duration-300 origin-center"
              style={{ top: "16px" }}
            />
          </motion.div>
        </motion.button>
      </div>

      {/* ── Mobile Menu (portal → renders at document.body, outside nav stacking context) ── */}
      {createPortal(
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Full-screen backdrop — dims entire page correctly */}
              <motion.div
                className="fixed inset-0 bg-black/75 backdrop-blur-sm"
                style={{ zIndex: 9998 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onMouseDown={() => setIsMenuOpen(false)}
                onTouchStart={() => setIsMenuOpen(false)}
              />

              {/* Dropdown panel */}
              <motion.div
                ref={menuRef}
                className="fixed left-4 right-4 rounded-2xl shadow-2xl overflow-hidden"
                style={{
                  zIndex: 9999,
                  top: "68px",
                  background: "rgba(10, 10, 20, 0.97)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                }}
                initial={{ opacity: 0, y: -12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.96 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <div className="px-4 py-3 space-y-1">
                  {NAV_ITEMS.map((item, index) => {
                    const active = isActiveRoute(item.path);

                    if (item.isButton) {
                      return (
                        <motion.button
                          key={item.name}
                          onClick={handleAboutClick}
                          className={`w-full text-left px-4 py-3 font-mono text-sm rounded-xl transition-all duration-200 ${
                            active
                              ? "text-[var(--cyan)]"
                              : "text-white/70 hover:text-white hover:bg-white/5"
                          }`}
                          style={
                            active
                              ? { background: "rgba(255,255,255,0.06)" }
                              : {}
                          }
                          initial={{ opacity: 0, x: -16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.07 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <span className="flex items-center gap-2">
                            {active && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--cyan)] flex-shrink-0" />
                            )}
                            {item.name}
                          </span>
                        </motion.button>
                      );
                    }

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.07 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`flex items-center gap-2 px-4 py-3 font-mono text-sm rounded-xl transition-all duration-200 ${
                            active
                              ? "text-[var(--cyan)]"
                              : "text-white/70 hover:text-white hover:bg-white/5"
                          }`}
                          style={
                            active
                              ? { background: "rgba(255,255,255,0.06)" }
                              : {}
                          }
                        >
                          {active && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--cyan)] flex-shrink-0" />
                          )}
                          {item.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <div
                  className="px-6 py-3"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <p className="font-mono text-[10px] text-white/30 text-center">
                    © 2025 Solomon Inc.
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </motion.nav>
  );
};

export default NavBar;

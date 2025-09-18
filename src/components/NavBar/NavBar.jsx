import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { name: "Prompts", path: "/prompt" },
    { name: "About", path: "/about", isButton: true },
    { name: "News", path: "/news" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAboutClick = () => {
    if (location.pathname === "/about") {
      window.location.reload();
    } else {
      navigate("/about");
    }
    setIsMenuOpen(false);
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <motion.nav
      className={`font-ubuntu fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-transparent backdrop-blur-md"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2"
          aria-label="Solomon - Home"
        >
          <motion.div
            className="text-white text-xl font-bold relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Solomon
            </span>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              layoutId="logoGlow"
            />
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navigationItems.map((item) => {
            if (item.isButton) {
              return (
                <motion.button
                  key={item.name}
                  onClick={handleAboutClick}
                  className={`relative px-4 py-2 text-white font-medium transition-all duration-300 rounded-lg ${
                    isActiveRoute(item.path)
                      ? "bg-white/10 text-purple-300"
                      : "hover:bg-white/5 hover:text-purple-300"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                  {isActiveRoute(item.path) && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 w-1 h-1 bg-purple-400 rounded-full"
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
                className={`relative px-4 py-2 text-white font-medium transition-all duration-300 rounded-lg ${
                  isActiveRoute(item.path)
                    ? "bg-white/10 text-purple-300"
                    : "hover:bg-white/5 hover:text-purple-300"
                }`}
              >
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="block"
                >
                  {item.name}
                </motion.span>
                {isActiveRoute(item.path) && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 w-1 h-1 bg-purple-400 rounded-full"
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

        {/* Hamburger Menu Button */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 rounded-lg"
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
              className="absolute h-0.5 w-6 bg-white block transform transition-all duration-300 origin-center"
              style={{ top: "6px" }}
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className="absolute h-0.5 w-6 bg-white block transform transition-all duration-300"
              style={{ top: "11px" }}
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -5 },
              }}
              className="absolute h-0.5 w-6 bg-white block transform transition-all duration-300 origin-center"
              style={{ top: "16px" }}
            />
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              className="fixed top-16 left-4 right-4 z-50 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="px-6 py-4 space-y-1">
                {navigationItems.map((item, index) => {
                  if (item.isButton) {
                    return (
                      <motion.button
                        key={item.name}
                        onClick={handleAboutClick}
                        className={`w-full text-left px-4 py-3 text-white font-medium rounded-lg transition-all duration-200 ${
                          isActiveRoute(item.path)
                            ? "bg-white/10 text-purple-300"
                            : "hover:bg-white/5 hover:text-purple-300"
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.name}
                      </motion.button>
                    );
                  }

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        className={`block px-4 py-3 text-white font-medium rounded-lg transition-all duration-200 ${
                          isActiveRoute(item.path)
                            ? "bg-white/10 text-purple-300"
                            : "hover:bg-white/5 hover:text-purple-300"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <motion.span
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          className="block"
                        >
                          {item.name}
                        </motion.span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile menu footer */}
              <div className="border-t border-white/10 px-6 py-4">
                <p className="text-xs text-gray-400 text-center">
                  © 2025 Solomon Inc.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;

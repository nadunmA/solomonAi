import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAboutClick = () => {
    if (location.pathname === "/about") {
      window.location.reload();
    } else {
      navigate("/about");
    }
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <>
      <nav className="font-ubuntu fixed top-0 left-0 right-0 z-50  backdrop-blur-md px-4 sm:px-6 lg:px-8 py-4 nav-shadow ">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-white text-xl font-bold logo-glow">
            Solomon
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/prompt" className="btn-shine px-4 py-2">
              Prompt
            </Link>

            {/* <Link to="/element" className="btn-shine px-4 py-2">
              Element
            </Link> */}

            <button onClick={handleAboutClick} className="btn-shine px-4 py-2">
              About
            </button>

            <Link to="/news" className="btn-shine px-4 py-2">
              News
            </Link>
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className={`text-white focus:outline-none ${
                isMenuOpen ? "hamburger-active" : ""
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            <div
              className="navbar-blur fixed inset-0 z-40  bg-opacity-60 backdrop-blur-sm font-ubuntu "
              onClick={() => setIsMenuOpen(false)}
            ></div>
            <div className="fixed top-16 left-0 right-0 z-50 menu-slide px-6 py-4 space-y-2  backdrop-blur">
              <Link
                to="/prompt"
                className="block text-white btn-shine"
                onClick={() => setIsMenuOpen(false)}
              >
                Prompt
              </Link>

              <button
                onClick={handleAboutClick}
                className="block text-white btn-shine w-full text-left "
              >
                About
              </button>

              <Link
                to="/news"
                className="block text-white btn-shine"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default NavBar;

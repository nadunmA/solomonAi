import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import aiImage1 from "../../assets/c2.png";
import aiImage2 from "../../assets/c8.png";
import aiImage3 from "../../assets/c9.png";
import aiImage4 from "../../assets/c10.png";

const ImageSlider = () => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState({});

  const handleImageLoad = (imageId) => {
    setImageLoaded((prev) => ({ ...prev, [imageId]: true }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatingImages = [
    {
      src: aiImage1,
      top: "10%",
      left: "8%",
      rotation: 12,
      size: "w-20 h-24 sm:w-32 sm:h-40",
    },
    {
      src: aiImage2,
      top: "15%",
      right: "10%",
      rotation: -6,
      size: "w-16 h-20 sm:w-28 sm:h-36",
    },
    {
      src: aiImage3,
      bottom: "25%",
      left: "20%",
      rotation: 45,
      size: "w-14 h-18 sm:w-24 sm:h-32",
    },
    {
      src: aiImage4,
      bottom: "15%",
      right: "20%",
      rotation: -12,
      size: "w-20 h-24 sm:w-36 sm:h-44",
    },
  ];

  const mainImages = [
    { src: aiImage1, alt: "AI Generated Portrait", color: "blue" },
    { src: aiImage2, alt: "AI Generated Landscape", color: "purple" },
    { src: aiImage3, alt: "AI Generated Abstract Art", color: "green" },
    { src: aiImage4, alt: "AI Generated Character", color: "orange" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-800 relative overflow-hidden">
      {/* Optimized floating background images */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        {floatingImages.map((img, index) => (
          <motion.div
            key={index}
            className={`absolute ${img.size}`}
            style={{
              top: img.top,
              left: img.left,
              right: img.right,
              bottom: img.bottom,
              transform: `rotate(${img.rotation}deg)`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [img.rotation, img.rotation + 5, img.rotation],
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            <img
              src={img.src}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex items-center min-h-screen"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-20">
          {/* Left side - Text content */}
          <motion.div
            variants={itemVariants}
            className="text-white space-y-6 lg:space-y-8"
          >
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block">1000+</span>
              <span className="text-yellow-400 block sm:inline">
                AI Creations
              </span>
              <span className="block mt-2">with Advanced</span>
              <span className="text-green-400 block">Generation</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-lg leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience once, create across multiple platforms with our
              advanced AI technology and creative tools. Transform your ideas
              into stunning visual masterpieces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={() => navigate("/prompt")}
                className="group bg-gradient-to-r from-white to-gray-100 hover:from-green-400 hover:to-green-600 text-black hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                aria-label="Explore AI prompts and creations"
              >
                <span className="flex items-center gap-2">
                  EXPLORE
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </motion.div>

            {/* Stats section */}
            <motion.div
              className="flex gap-8 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">1000+</div>
                <div className="text-sm text-gray-400">AI Images</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">50+</div>
                <div className="text-sm text-gray-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-gray-400">Available</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Featured images */}
          <motion.div variants={itemVariants} className="relative">
            {/* Main featured images grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
              {/* Left column */}
              <div className="space-y-3 sm:space-y-4">
                <motion.div
                  whileHover={{ scale: 1.03, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-xl"
                >
                  <img
                    src={mainImages[0].src}
                    alt={mainImages[0].alt}
                    loading="lazy"
                    onLoad={() => handleImageLoad("img1")}
                    className={`w-full h-40 sm:h-48 lg:h-56 object-cover shadow-2xl transition-all duration-500 hover:shadow-${
                      mainImages[0].color
                    }-500/50 ${imageLoaded.img1 ? "opacity-100" : "opacity-0"}`}
                  />
                  {!imageLoaded.img1 && (
                    <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-xl" />
                  )}
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03, rotateY: -5 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-xl"
                >
                  <img
                    src={mainImages[1].src}
                    alt={mainImages[1].alt}
                    loading="lazy"
                    onLoad={() => handleImageLoad("img2")}
                    className={`w-full h-28 sm:h-32 lg:h-40 object-cover shadow-2xl transition-all duration-500 hover:shadow-${
                      mainImages[1].color
                    }-500/50 ${imageLoaded.img2 ? "opacity-100" : "opacity-0"}`}
                  />
                  {!imageLoaded.img2 && (
                    <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-xl" />
                  )}
                </motion.div>
              </div>

              {/* Right column */}
              <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                <motion.div
                  whileHover={{ scale: 1.03, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-xl"
                >
                  <img
                    src={mainImages[2].src}
                    alt={mainImages[2].alt}
                    loading="lazy"
                    onLoad={() => handleImageLoad("img3")}
                    className={`w-full h-32 sm:h-40 lg:h-48 object-cover shadow-2xl transition-all duration-500 hover:shadow-${
                      mainImages[2].color
                    }-500/50 ${imageLoaded.img3 ? "opacity-100" : "opacity-0"}`}
                  />
                  {!imageLoaded.img3 && (
                    <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-xl" />
                  )}
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03, rotateY: -5 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-xl"
                >
                  <img
                    src={mainImages[3].src}
                    alt={mainImages[3].alt}
                    loading="lazy"
                    onLoad={() => handleImageLoad("img4")}
                    className={`w-full h-32 sm:h-40 lg:h-48 object-cover shadow-2xl transition-all duration-500 hover:shadow-${
                      mainImages[3].color
                    }-500/50 ${imageLoaded.img4 ? "opacity-100" : "opacity-0"}`}
                  />
                  {!imageLoaded.img4 && (
                    <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-xl" />
                  )}
                </motion.div>
              </div>
            </div>

            {/* Floating accent images */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [12, 17, 12] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 h-20 sm:w-24 sm:h-32 opacity-80 pointer-events-none"
            >
              <img
                src={aiImage1}
                alt=""
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], rotate: [-6, -11, -6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-14 h-18 sm:w-20 sm:h-28 opacity-70 pointer-events-none"
            >
              <img
                src={aiImage3}
                alt=""
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Optimized animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, index) => (
          <motion.div
            key={index}
            className={`absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full ${
              ["bg-blue-400", "bg-green-400", "bg-purple-400", "bg-orange-400"][
                index
              ]
            }`}
            style={{
              top: `${20 + index * 15}%`,
              left: `${15 + index * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

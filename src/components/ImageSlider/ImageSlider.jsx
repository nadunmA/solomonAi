/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, memo } from "react";
import aiImage1 from "../../assets/c2.webp";
import aiImage2 from "../../assets/c8.webp";
import aiImage3 from "../../assets/c9.webp";
import aiImage4 from "../../assets/c10.webp";

const FLOATING_IMAGES = [
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

const MAIN_IMAGES = [
  { src: aiImage1, alt: "AI Generated Portrait", tag: "GEN_01" },
  { src: aiImage2, alt: "AI Generated Landscape", tag: "GEN_02" },
  { src: aiImage3, alt: "AI Generated Abstract Art", tag: "GEN_03" },
  { src: aiImage4, alt: "AI Generated Character", tag: "GEN_04" },
];

const STATS = [
  { value: "1,000+", label: "AI IMAGES" },
  { value: "50+", label: "CATEGORIES" },
  { value: "24/7", label: "AVAILABLE" },
];

const PARTICLE_POSITIONS = Array.from({ length: 6 }, (_, i) => ({
  top: 20 + i * 12,
  left: 15 + i * 15,
  delay: i * 0.3,
  duration: 3 + i * 0.5,
}));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 0.6 },
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

// Reusable HUD-framed image card — Responsive Optimized
const HudImage = memo(function HudImage({
  image,
  id,
  loaded,
  onLoad,
  heightClass,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-xl cursor-pointer glass-panel max-w-full box-border z-10"
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        onLoad={() => onLoad(id)}
        className={`w-full ${heightClass} object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
      {!loaded && (
        <div className="absolute inset-0 bg-[var(--panel)] animate-pulse" />
      )}

      {/* corner brackets — adjusted to 0 bounds to prevent horizontal scroll bugs */}
      <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[var(--cyan)]/0 group-hover:border-[var(--cyan)]/80 transition-colors rounded-tl pointer-events-none" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[var(--cyan)]/0 group-hover:border-[var(--cyan)]/80 transition-colors rounded-br pointer-events-none" />

      {/* tag */}
      <span className="absolute bottom-1.5 left-1.5 font-mono text-[9px] text-[var(--text-primary)] bg-black/50 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        {image.tag}
      </span>

      {/* scan overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--violet)]/0 to-[var(--cyan)]/0 group-hover:from-[var(--violet)]/15 group-hover:to-[var(--cyan)]/10 transition-colors duration-300" />
    </motion.div>
  );
});

const ImageSlider = () => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState({});

  const handleImageLoad = (id) => {
    setImageLoaded((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="min-h-screen w-full bg-[var(--void)] bg-grid relative overflow-x-hidden">
      {/* faint floating watermark images */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-screen overflow-hidden">
        {FLOATING_IMAGES.map((img, index) => (
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
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </div>

      {/* ambient glow blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[var(--violet)]/15 rounded-full blur-3xl animate-drift pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[var(--cyan)]/10 rounded-full blur-3xl animate-drift-rev pointer-events-none" />
      <div className="absolute top-10 right-1/3 w-60 h-60 bg-[var(--magenta)]/10 rounded-full blur-3xl animate-drift pointer-events-none" />

      <motion.div
        className="relative z-10 flex items-center min-h-screen"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-12 items-center py-20 w-full">
          {/* LEFT — copy */}
          <motion.div
            variants={itemVariants}
            className="text-[var(--text-primary)] space-y-6 lg:space-y-8"
          >
            <p className="font-mono text-xs sm:text-sm text-[var(--cyan)] tracking-widest">
              // LIVE PROMPT GALLERY
            </p>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--magenta)] via-[var(--violet)] to-[var(--cyan)]">
                1,000+ AI Creations
              </span>
              <span className="block mt-2 text-[var(--text-muted)] font-medium text-2xl sm:text-3xl lg:text-4xl">
                ready to copy, paste, generate.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-lg leading-relaxed">
              Browse images already made by other creators, grab the exact
              prompt behind them, and run it on the AI engine of your choice.
            </p>

            <motion.button
              onClick={() => navigate("/prompt")}
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[var(--magenta)] to-[var(--violet)] text-white font-semibold text-sm sm:text-base shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_45px_rgba(139,92,246,0.6)] transition-shadow"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Explore AI prompts and creations"
            >
              EXPLORE
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>

            {/* stats — each staggered */}
            <div className="flex gap-8 pt-2">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: i * 0.1 },
                    },
                  }}
                >
                  <p className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                    {stat.value}
                  </p>
                  <p className="font-mono text-[10px] sm:text-xs text-[var(--text-muted)] tracking-wide mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — HUD image grid */}
          <motion.div variants={itemVariants} className="relative max-w-full">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
              <div className="space-y-3 sm:space-y-4">
                {[0, 1].map((index) => (
                  <HudImage
                    key={`left-${index}`}
                    image={MAIN_IMAGES[index]}
                    id={`img${index + 1}`}
                    loaded={!!imageLoaded[`img${index + 1}`]}
                    onLoad={handleImageLoad}
                    heightClass={
                      index === 0
                        ? "h-40 sm:h-48 lg:h-56"
                        : "h-28 sm:h-32 lg:h-40"
                    }
                  />
                ))}
              </div>
              <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                {[2, 3].map((index) => (
                  <HudImage
                    key={`right-${index}`}
                    image={MAIN_IMAGES[index]}
                    id={`img${index + 1}`}
                    loaded={!!imageLoaded[`img${index + 1}`]}
                    onLoad={handleImageLoad}
                    heightClass="h-32 sm:h-40 lg:h-48"
                  />
                ))}
              </div>
            </div>

            {/* floating accent badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-3 sm:-right-5 glass-panel rounded-lg px-3 py-2 pointer-events-none"
            >
              <p className="font-mono text-[10px] text-[var(--cyan)] flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--cyan)] animate-blink-dot" />
                </span>
                LIVE
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLE_POSITIONS.map((p, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[var(--cyan)]"
            style={{ top: `${p.top}%`, left: `${p.left}%` }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

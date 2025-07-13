import { useNavigate } from "react-router-dom";
import aiImage1 from "../../assets/c2.png";
import aiImage2 from "../../assets/c8.png";
import aiImage3 from "../../assets/c9.png";
import aiImage4 from "../../assets/c10.png";
import { motion } from "framer-motion";

const ImageSlider = () => {
  const PromptPage = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-800 relative overflow-hidden">
      {/* Background floating images */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-40 transform rotate-12">
          <motion.img
            src={aiImage1}
            alt=""
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full object-cover rounded-lg shadow-2xl"
          />
        </div>
        <div className="absolute top-20 right-20 w-28 h-36 transform -rotate-6">
          <motion.img
            src={aiImage2}
            alt=""
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full object-cover rounded-lg shadow-2xl"
          />
        </div>
        <div className="absolute bottom-32 left-32 w-24 h-32 transform rotate-45">
          <motion.img
            src={aiImage3}
            alt=""
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full object-cover rounded-lg shadow-2xl"
          />
        </div>
        <div className="absolute bottom-20 right-32 w-36 h-44 transform -rotate-12">
          <motion.img
            src={aiImage4}
            alt=""
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="text-white space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              1000+ <span className="text-yellow-400">AI creations</span> with
              Advanced
              <br />
              <span className="text-green-400">Generation</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-md">
              Experience once, create across multiple platforms with our
              advanced AI technology and creative tools.
            </p>

            <button
              onClick={() => PromptPage("/prompt")}
              className="bg-white hover:bg-green-600 text-black font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 w-40 h-12"
            >
              EXPLORE→
            </button>
          </motion.div>

          {/* Right side - Featured images */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Main featured images grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="space-y-4">
                <img
                  src={aiImage1}
                  alt="AI Creation 1"
                  className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50"
                />
                <img
                  src={aiImage2}
                  alt="AI Creation 2"
                  className="w-full h-32 sm:h-40 object-cover rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src={aiImage3}
                  alt="AI Creation 3"
                  className="w-full h-40 sm:h-48 object-cover rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-green-500/50"
                />
                <img
                  src={aiImage4}
                  alt="AI Creation 4"
                  className="w-full h-40 sm:h-48 object-cover rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-orange-500/50"
                />
              </div>
            </div>

            {/* Floating accent images */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 w-24 h-32 transform rotate-12 opacity-80"
            >
              <img
                src={aiImage1}
                alt=""
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -left-4 w-20 h-28 transform -rotate-6 opacity-70"
            >
              <img
                src={aiImage3}
                alt=""
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full"
        ></motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-400 rounded-full"
        ></motion.div>
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full"
        ></motion.div>
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-orange-400 rounded-full"
        ></motion.div>
      </div>
    </div>
  );
};

export default ImageSlider;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import copilot from "../assets/pilot.png";
import { motion } from "framer-motion";

import collage101 from "../assets/photos/collage101.webp";
import collage102 from "../assets/photos/collage102.webp";
import collage103 from "../assets/photos/collage103.webp";
import collage104 from "../assets/photos/collage104.webp";
import collage105 from "../assets/photos/collage105.webp";
import collage106 from "../assets/photos/collage106.webp";
import collage107 from "../assets/photos/collage107.webp";
import collage108 from "../assets/photos/collage108.webp";
import collage109 from "../assets/photos/collage109.webp";
import collage110 from "../assets/photos/collage110.webp";
import collage111 from "../assets/photos/collage111.webp";
import collage112 from "../assets/photos/collage112.webp";

const FifthPromptPage = () => {
  const [clickedImageId, setClickedImageId] = useState(null);
  const [copiedPromptId, setCopiedPromptId] = useState(null);
  const [copyClickedId, setCopyClickedId] = useState(null);

  const ForthPromptPage = useNavigate();
  //const SecondPromptPage = useNavigate();

  const promptData = [
    {
      id: 101,
      image: collage101,
      alt: "Images",
      prompt:
        "Grungy analog photo of [ tupac ] circa 1999 playing [ Games ] on Playstation 1 on a 90s CRT TV in a dimly lit bedroom with me . Both sitting on the floor in front of the TV holding the Playstation 1 cotroller in one hand and locking back at the camera taking the photo while the game is on the background visible to us, Flash photography, unedited",
    },
    {
      id: 102,
      image: collage102,
      alt: "Images",
      prompt:
        "Use face above uploaded photo A sharply styled man with wet, slicked-back hair stands beneath a moody, overcast sky, rain lightly falling and catching in the strands of his hair and the folds of his open black shirt. His face is captured in a close-up side profile, lips gently parted as he exhales smoke from a cigarette held between tattooed fingers. Droplets trace down his skin and silver chain, adding raw texture and realism. The ambient light reflects subtly on his sunglasses and metallic accessories, while dramatic shadows carve out his jawline and neck. Behind him, a blurred urban backdrop fades into desaturated tones, heightening the cinematic atmosphere with a sense of introspective solitude and quiet tension.",
    },
    {
      id: 103,
      image: collage103,
      alt: "Images",
      prompt:
        "Use face above uploaded photo A cinematic, ultra-realistic image of a confident use my real face in his 27s, wearing a blue shirt and jeans, and sunglasses, stepping into a modern black helicopter. hia front foot is on the helicopter's step, one hand is holding the door or frame, and his denim jacket and hair are blowing in the strong wind from the spinning blades. Dust and dry leaves are swirling around due to the rotor wind. he looks focused and stylish, like a movie hero boarding for a secret mission.",
    },
    {
      id: 104,
      image: collage104,
      alt: "Images",
      prompt:
        "Use face above uploaded photo Create an ultra-realistic 3D cinematic render of the same person, preserving facial features. He sits in a lounge chair (teal, burnt orange), legs crossed, holding a steaming coffee cup. Outfit: fitted T-shirt, rolled-up jeans, sneakers, sunglasses, and wristwatch. Background: soft gradient, minimalist décor. Lighting: warm key, cool rim, soft fill, steam glow. Style: 8K detail, shallow depth, teal-orange tones, cinematic.",
    },
    {
      id: 105,
      image: collage105,
      alt: "Images",
      prompt:
        "Use face above uploaded photo A cinematic double exposure portrait of a man (use uploaded face) staring calmly into the distance. Inside his silhouette, a dramatic cliffside vista is revealed with waves crashing below, wind pulling at the coat of a lone figure standing at the edge (himself), overlooking a stormy sea. Lightning flickers behind clouds in the far horizon. The outer portrait is dark and windswept, with sharp contrast and misty tones",
    },
    {
      id: 106,
      image: collage106,
      alt: "Images",
      prompt:
        "Create a hyper-realistic, cinematic portrait of the man in the uploaded reference image. He appears in side profile, exuding confidence and mystery. He wears a fitted, deep red button-up shirt that adds intensity and contrast to the composition. The lighting is dramatic and stylized, dominated by a neon red color palette.",
    },
    {
      id: 107,
      image: collage107,
      alt: "Images",
      prompt:
        "A hyper-realistic, cinematic 9:16 portrait of a man standing on a bustling city street at twilight. He’s wearing dark sunglasses with warm-toned reflections of neon signs visible in the lenses. The man is dressed in a dark wool overcoat layered over a high-neck black turtleneck. The background is an out-of-focus mix of vibrant city lights—reds, oranges, yellows, and blues—creating a dreamy bokeh effect with a moody urban vibe. He gazes slightly upward, exuding calm confidence and introspection. The lighting is soft and diffused, with a warm amber glow on the face and coat. Use the exact facial features, skin texture, hairstyle, beard, and natural tone from the uploaded selfie. No retouching, no smoothing—keep the face fully original. Match the same camera lighting style, and background atmosphere as in the reference photo. Slight filmic grain and depth-of-field for realistic viewing.",
    },
    {
      id: 108,
      image: collage108,
      alt: "Images",
      prompt:
        "Create a moody portrait with dramatic studio lighting. The subject should stand slightly off-center in front of a large, soft golden spotlight circle on a deep navy background. Use soft shadows and a cinematic feel. The subject must wear a plain black t-shirt, have slightly long, wavy hair, flawless fair skin, and no glasses or facial hair. Lighting should fall from the top-left casting a clear shadow to the right. Maintain a 4:3 aspect ratio and keep the camera angle and distance consistent with classic editorial portraits?.",
    },
    {
      id: 109,
      image: collage109,
      alt: "Images",
      prompt:
        "Cinematic travel shot of me sitting at the front of a traditional Thai long-tail boat, cruising through crystal-clear turquoise waters surrounded by towering limestone cliffs and lush green vegetation. I’m smiling, wearing black sunglasses, beachwear and a straw hat, facing forward, enjoying the view under a bright blue sky. Other similar boats float in the distance, adding to the tropical atmosphere. Sunlight reflects off the water’s surface, casting shimmering patterns onto the wooden deck. 35mm film aesthetic, warm tropical tones.",
    },
    {
      id: 110,
      image: collage110,
      alt: "Images",
      prompt:
        "Cinematic night portrait using subject's selfie. Subject stands outdoors, slightly turned, head tilted back/left, looking away calmly with parted lips. Background: tall apartment with glowing yellow-orange bokeh windows, deep shadows around. Red neon light from front-left casts bold tones; strong shadows on right create dramatic contrast. Wears dark puffer jacket over shirt and sweater. Hair is thicker, wind-swept, tousled. Dark, moody color palette with soft grain and vignette. 3:4 vertical. Style: urban, cinematic, editorial.",
    },
    {
      id: 111,
      image: collage111,
      alt: "Images",
      prompt:
        "An stands in a fish-eye lens photo booth from above, where every wall and ceiling are covered with posters of rock and metal bands—Nirvana, Metallica, AC/DC, Blink-182, Queen, Ghost, Slipknot, Guns N’ Roses, and Pink Floyd, Helloween, Bon Jovi, Maroon 5, Sepultura. He’s fair-skinned and short-haired, his face fitting the photo, wearing an oversized black T-shirt with a flaming Harley Davidson motorcycle, jeans, black combat boots, and an olive green trucker hat turned backwards. He stands with his body leaning toward the camera, making his head appear slightly larger than his body and legs, his legs spread wide, he smiles confidently, with his rock metal hands outstretched toward the camera. The bright studio lighting highlights their confident poses and the intense texture of the poster-covered backdrop. The vibe is loud, alternative, and rebellious—a stylish young couple with a rock-and-roll aesthetic, a 3:4 aspect ratio.",
    },
    {
      id: 112,
      image: collage112,
      alt: "Images",
      prompt:
        "A cinematic black-and-white portrait of a young man with sharp features, light stubble, and tousled dark hair. He is wearing a striped button-down shirt, slightly open at the collar. The lighting is soft yet directional, casting moody shadows across his face and highlighting the texture of his skin and shirt. The background is a plain dark grey, and the overall tone is dramatic, editorial, and minimalist. Photographed with a shallow depth of field using a professional DSLR camera, high contrast, matte finish.",
    },
  ];

  const handleImageClick = (id) => {
    setClickedImageId(id);
    setTimeout(() => setClickedImageId(null), 800);
  };

  const handleCopy = (id, promptText) => {
    setCopyClickedId(id);
    navigator.clipboard
      .writeText(promptText)
      .then(() => {
        setCopiedPromptId(id);
        setTimeout(() => {
          setCopiedPromptId(null);
          setCopyClickedId(null);
        }, 2500);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
        setCopyClickedId(null);
      });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-800 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br bg-gradient-to-br from-purple-900 via-black to-blue-800 text-white"></div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-violet-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-600/5 to-violet-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 pt-16 pb-20 px-4 sm:pt-24 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-block">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  AI Prompt
                </span>
                <br />
                <span className="text-white/90">Gallery</span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
            </div>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Discover stunning AI-generated images with their creative prompts.
              Click to explore, copy to create.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="space-y-16 sm:space-y-20">
            {promptData.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-12 items-center`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <div
                    className={`group relative cursor-pointer transition-all duration-700 ease-out ${
                      clickedImageId === item.id
                        ? "scale-105"
                        : "hover:scale-[1.02]"
                    }`}
                    onClick={() => handleImageClick(item.id)}
                  >
                    {/* Image container with glassmorphism border */}
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-1 backdrop-blur-sm border border-white/10">
                      <div className="relative overflow-hidden rounded-xl">
                        <motion.img
                          loading="lazy"
                          src={item.image}
                          srcSet={`
                          ${item.image} 400w,
                          ${item.image} 800w,
                          ${item.image} 1200w
                          `}
                          sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
                          alt={item.alt}
                          className="w-full h-80 sm:h-96 lg:h-[28rem] xl:h-[32rem] object-cover"
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
                          viewport={{ once: false, amount: 0.5 }}
                        />

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                        {/* Click effect */}
                        {clickedImageId === item.id && (
                          <div className="absolute inset-0">
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-pink-500/20 to-cyan-500/20 animate-pulse rounded-xl"></div>
                            <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/30 via-pink-500/30 to-cyan-500/30 rounded-2xl blur-xl animate-ping"></div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Floating badge */}
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-violet-600 to-pink-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                      #{item.id}
                    </div>
                  </div>
                </div>

                {/* Prompt Section */}
                <div className="w-full lg:w-1/2">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2">
                      {" "}
                      {/* Added a parent div */}
                      <a
                        href="https://copilot.microsoft.com/chats/4Ko47LdB3zMW1BjGaC3oY?msockid=3e46ba9f4fef690e021bafa94e42682b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-9 h-9"
                      >
                        <motion.img
                          src={copilot}
                          alt=""
                          animate={{ y: [0, -18, 0] }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="w-full h-full object-cover rounded-lg shadow-2xl"
                        />
                      </a>
                      <h3 className="flex text-xl sm:text-2xl font-bold text-white font-ubuntu">
                        Use Copilot
                      </h3>
                    </div>

                    {/* Prompt container with glassmorphism */}
                    <motion.div
                      className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: false, amount: 0.4 }}
                    >
                      <div className="relative">
                        <div className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                          <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-ubuntu break-words">
                                {item.prompt}
                              </p>
                            </div>

                            {/* Copy button */}
                            <div className="flex-shrink-0 flex justify-center sm:justify-start">
                              <button
                                onClick={() => handleCopy(item.id, item.prompt)}
                                className={`h-[50px] group relative overflow-hidden px-6 py-3 font-bold text-sm transition-all duration-200 w-[110px] rounded-full ${
                                  copiedPromptId === item.id
                                    ? "bg-gradient-to-r from-purple-500 to-purple-500 text-white scale-105 shadow-lg shadow-green-500/25"
                                    : copyClickedId === item.id
                                    ? "bg-gradient-to-r from-violet-600 to-pink-600 text-white scale-105 shadow-lg shadow-violet-500/25"
                                    : "bg-gradient-to-r from-violet-600/80 to-pink-600/80 text-white hover:from-violet-500 hover:to-pink-500 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25"
                                }`}
                                style={{ minWidth: "110px" }}
                                disabled={copiedPromptId === item.id}
                              >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                  {copiedPromptId === item.id ? (
                                    <>
                                      <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M5 13l4 4L19 7"
                                        />
                                      </svg>
                                      Copied!
                                    </>
                                  ) : (
                                    <>
                                      <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                        />
                                      </svg>
                                      Copy
                                    </>
                                  )}
                                </span>

                                {/* Button effects */}
                                {copyClickedId === item.id &&
                                  copiedPromptId !== item.id && (
                                    <div className="absolute inset-0 bg-white/20 animate-ping rounded-xl"></div>
                                  )}

                                {copiedPromptId === item.id && (
                                  <div className="absolute inset-0 bg-green-400/20 animate-pulse rounded-xl"></div>
                                )}
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 via-pink-600/20 to-cyan-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
            {/* next page button part*/}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10">
              {/* Back Button */}
              <button
                className="bg-blue-600 hover:bg-black text-white font-bold py-2 px-6 rounded-full w-[150px] transition duration-600"
                onClick={() => ForthPromptPage("/forthpromptpage")}
              >
                ← Back
              </button>

              {/* Next Button */}
              {/*<button
                className="bg-black hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full w-[150px] transition duration-600"
                onClick={() => ForthPromptPage("/forthpromptpage")}
              >
                Next →
              </button>*/}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="text-center mt-20 pt-12 border-t border-white/10">
            <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full animate-pulse"></div>
              Create your own AI masterpieces with these prompts
              <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthPromptPage;

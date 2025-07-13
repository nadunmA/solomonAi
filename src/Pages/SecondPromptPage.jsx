import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import collage26 from "../assets/photos/collage26.png";
import collage27 from "../assets/photos/collage27.png";
import collage28 from "../assets/photos/collage28.png";
import collage29 from "../assets/photos/collage29.png";
import collage30 from "../assets/photos/collage30.png";
import collage31 from "../assets/photos/collage31.png";
import collage32 from "../assets/photos/collage32.png";
import collage33 from "../assets/photos/collage33.png";
import collage34 from "../assets/photos/collage34.png";
import collage35 from "../assets/photos/collage35.png";
import collage36 from "../assets/photos/collage36.png";
import collage37 from "../assets/photos/collage37.png";
import collage38 from "../assets/photos/collage38.png";
import collage39 from "../assets/photos/collage39.png";
import collage40 from "../assets/photos/collage40.png";
import collage41 from "../assets/photos/collage41.png";
import collage42 from "../assets/photos/collage42.png";
import collage43 from "../assets/photos/collage43.png";
import collage44 from "../assets/photos/collage44.png";
import collage45 from "../assets/photos/collage45.png";
import collage46 from "../assets/photos/collage46.png";
import collage47 from "../assets/photos/collage47.png";
import collage48 from "../assets/photos/collage48.png";
import collage49 from "../assets/photos/collage49.png";
import collage50 from "../assets/photos/collage50.png";
import copilot from "../assets/pilot.png";
import { motion } from "framer-motion";

const SecondPromptPage = () => {
  const [clickedImageId, setClickedImageId] = useState(null);
  const [copiedPromptId, setCopiedPromptId] = useState(null);
  const [copyClickedId, setCopyClickedId] = useState(null);

  const ThirdPromptPage = useNavigate();
  const PromptPage = useNavigate();

  const promptData = [
    {
      id: 26,
      image: collage26,
      alt: "Images",
      prompt:
        "A laid-back young man reclines on a vintage red couch, lost in music with earphones in and a smartphone in hand. Scattered vinyl records surround him on a wooden floor, alongside a classic record player, a worn paperback novel, and a pack of cigarettes. The lighting is soft and moody, casting nostalgic shadows across the scene. The atmosphere evokes lazy afternoons, analog warmth, and introspective vibes. Retro color grading, shallow depth of field, cinematic framing, 3:2 aspect ratio.",
    },
    {
      id: 27,
      image: collage27,
      alt: "Images",
      prompt:
        "A cinematic black and white portrait of a muscular man standing alone in a dark studio environment. The man is wearing a loose olive green T-shirt and dark pants.His arms are slightly flexed, revealing defined muscles and veins. A soft spotlight from 7 above casts dramatic shadows across his body and face, highlighting his form while the background fades into deep black. The image has a moodyeditorial tone with a U high contrast, matte finish.",
    },
    {
      id: 28,
      image: collage28,
      alt: "Images",
      prompt:
        "A high-resolution, black-and-white portrait of a young man wearing a sharp black suit and black shirt with a tie. He stands confidently in a minimal studio setting, facing slightly to the side. Dramatic studio lighting casts bold geometric shadows across his face and background, with a strong diagonal beam of light cutting through darkness. His expression is calm, introspective, and slightly distant. The image has a high-fashion, cinematic noir tone, with high contrast and fine detail on the face and suit texture. Soft bokeh background, vertical frame (9:16), 8K resolution.",
    },
    {
      id: 29,
      image: collage29,
      alt: "Images",
      prompt:
        "Ultra-realistic full-body portrait of a 28 years old, 164 cm tall, medium build, side-parted hair styled with pomade, clean look, wearing a white oversized T-shirt from Uniqlo, olive green cargo pants from H&M, white Nike Air Force 1 sneakers, denim sling bag, posing on Jalan Braga Bandung, surrounded by classic Dutch-style buildings, textured walls, vintage street lamps, soft afternoon lighting, fashion lookbook photography style, DSLR camera feel, 32k, 9:16 aspect ratio.",
    },
    {
      id: 30,
      image: collage30,
      alt: "Images",
      prompt:
        "An overhead cinematic shot of me, leaning against the hood of a black M3 gtr on the street, wearing a black suit, left hand in my pocket, right hand smoking a cigarette. I have good gyn physique. A blurry crowd of cars and people are running on the street around me. Gloomy lighting, 35mm film style, shallow depth of field, sharp focus on me. Aspect ratio 9:16. 8K resolution",
    },
    {
      id: 31,
      image: collage31,
      alt: "Images",
      prompt:
        "Produce a luxurious rooftop portrait with skyline in the background. Maintain the original selfie's face without any Al face modification. The subject is in a smart-casual outfit — open collar shirt, linen blazer, watch visible on wrist and black sunglasses. Sunset lighting casts soft golden tones across the skin. Behind, a modern city skyline fades into warm bokeh. Clean, editorial look with professional photography vibes. 4K clarity, vertical 9:16.",
    },
    {
      id: 32,
      image: collage32,
      alt: "Images",
      prompt:
        "A cinematic overhead portrait of a man exactly in the image lying relaxed on a red couch, surrounded by a chaotic and stylish retro setup. He has thick wavy hair and a beard, wearing a dark checkered shirt, brown trousers, sunglasses, and earphones connected to a smartphone resting on his chest. His arm is resting top on a stack of books, including The 5 People You Meet in Heaven and Horace Silver, with visible cigarette packs and vinyl records nearby.",
    },
    {
      id: 33,
      image: collage33,
      alt: "Images",
      prompt:
        "A cinematic side-profile portrait of a young man in a black suit, illuminated from behind by a glowing orange neon halo ring. The background is dark with warm tones, emphasizing the silhouette and creating a dramatic, moody atmosphere. Soft shadows and high contrast, professional studio lighting, 35mm film look.",
    },
    {
      id: 34,
      image: collage34,
      alt: "Images",
      prompt:
        "A tense, dystopian moment captured in a fluorescent-lit corridor—centered on a defiant protagonist wearing a worn green tracksuit marked “456,” staring down the lens with weary determination. The hallway is filled with similarly dressed players in deep shadow, faces blurred in motion or anxiety. Harsh top-down lighting creates dramatic silhouettes and oppressive atmosphere.  Moody composition, shallow depth of field, grainy textures, editorial tone with cinematic color grading—think bleak, hyperreal aesthetic with cultural overlays and social commentary.",
    },
    {
      id: 35,
      image: collage35,
      alt: "Images",
      prompt:
        "A dynamic mid-air shot of a young man leaping above a glowing futuristic cityscape at dusk, wearing a modern white streetwear t-shirt emblazoned with bold, colorful text XTREME — cinematic ultra-wide angle, strong backlighting casting long shadows, blurred neon lights below suggesting speed and altitude, sense of gravity-defying motion, inspired by parkour action, editorial sports photography style, cool-toned color grading, shallow depth of field, dramatic sky with urban skyline fade-out — shot on 50mm f/1.4 lens, ISO 400, shutter speed 1/1000s",
    },
    {
      id: 36,
      image: collage36,
      alt: "Images",
      prompt:
        "A confident young man leans casually against an open car door on a moody city street. He wears a black leather jacket and matching black shirt, exuding cool intensity. The background is softly blurred with hints of urban grit—distant neon signs, muted building silhouettes, and the subtle glint of wet pavement reflecting city lights. Capture a dramatic editorial vibe with low-angle lighting, soft shadows, and a shallow depth of field to accentuate his silhouette. Moody tones of charcoal, steel blue, and espresso dominate the palette. Style the frame with cinematic flair—like a still from a modern action film noir.",
    },
    {
      id: 37,
      image: collage37,
      alt: "Images",
      prompt:
        "Take a picture of a Southeast Asian man standing casually on the banks of the Seine river, facing slightly to the right, not looking directly at the camera. Behind it, the Eiffel Tower lights up majestically with golden yellow lighting, creating a dramatic contrast with the dense night sky. The highlights of the city lights and the light of the Eiffel Tower are beautifully reflected on the calm but slightly rissing river surface because of the passing boat. This man wears a stylish and elegant outfit: a white turtle neck t-shirt, covered with a light beige long coat, combined with light beige chino trousers and a classic black belt. The style is simple but fashionable, giving a modern and sophisticated impression. His pose is relaxed but confident, his right hand holds the edge of the river barrier wall, while his left hand is allowed to relax beside the body. His gaze was directed to the bottom right, as if he was enjoying the beauty of Paris at night. Shooting is done with an eye-level angle, the camera position is parallel to the subject's chest. The lighting is dominated by the warm yellow light from the Eiffel Tower and street lights, creating a romantic and iconic atmosphere typical of Paris. Light reflection in river water adds a rich and cinematic visual dimension. The background shows the iconic Paris bridge, the city buildings in the distance, and the tourist boat traffic on the quiet Seine River. The evening atmosphere feels elegant, full of charm, and iconic. Aspect ratio 9:16",
    },
    {
      id: 38,
      image: collage38,
      alt: "Images",
      prompt:
        "A sharply dressed man in a black suit and tie walks confidently alongside a majestic black horse on an empty road surrounded by mist. The man has a modern, well-groomed haircut and a composed expression, holding the horse’s reins with one hand. The horse is strong and elegant, with a white diamond mark on its forehead. The background is softly blurred with muted tones and fog, creating a cinematic, mysterious atmosphere. The scene conveys calm power, elegance, and control",
    },
    {
      id: 39,
      image: collage39,
      alt: "Images",
      prompt:
        "A young man sitting confidently inside a sleek, white luxury supercar with butterfly doors open at day. The car interior is a striking red and black with racing seats and a modern dashboard featuring a digital display and Ferrari logo on the steering wheel e man is wearing a white suit and white shoes",
    },
    {
      id: 40,
      image: collage40,
      alt: "Images",
      prompt:
        "A high-resolution, black-and-white portrait of a young man wearing a sharp black suit and black shirt with a tie. He stands confidently in a minimal studio setting, facing slightly to the side. Dramatic studio lighting casts bold geometric shadows across his face and background, with a strong diagonal beam of light cutting through darkness. His expression is calm, introspective, and slightly distant. The image has a high-fashion, cinematic noir tone, with high contrast and fine detail on the face and suit texture. Soft bokeh background, vertical frame (9:16), 8K resolution.",
    },
    {
      id: 41,
      image: collage41,
      alt: "Images",
      prompt:
        "create a shot of a man in the photo uploaded with the same face details, standing in the middle in a suit, red tie and there are thousands of press and paparazzi, surrounding him with cameras and microphones, everyone is looking at him but he is looking up at the camera, Birds Eye shot, taken with a digital camera, London, should look like a scene from a movie with dramatic lighting, keep my face details as you can.",
    },
    {
      id: 42,
      image: collage42,
      alt: "Images",
      prompt:
        "a man whose face and upper body are split into two distinct halves. The left side (from the viewer's perspective) appears normal, depicting a man with dark hair, a beard, and a serious expression, wearing a dark green or black suit jacket over a dark shirt. The right side of his face and body is transformed, appearing icy blue and cracked, with electric blue veins or energy coursing through it. His right eye glows with an intense blue light, and the right side of his suit jacket also appears to be covered in ice or frost, with a frosty, textured appearance. The overall impression is one of a duality, perhaps representing a human side and a supernatural or elemental (ice/cold) side.",
    },
    {
      id: 43,
      image: collage43,
      alt: "Images",
      prompt:
        "Photography realistic dramatic portrait of a young man in uploaded photo with same face details, in 3:4 ratio. He has shoulder length wavy black hair, a thin mustache, and no beard. His expression is confident with a subtle smirk. He wears a dark high-collared leather jacket. His left hand is extended toward the viewer as he throws several playing cards (ace of spades, hearts, clubs, diamonds) floating mid-air surrounded by smoke effects. Dramatic lighting with a gradient background from dark blue to black. Ultra-realistic style, resembling a fantasy-action movie or game character poster in realistic",
    },
    {
      id: 44,
      image: collage44,
      alt: "Images",
      prompt:
        "wearing an oversized black shirt. His face is illuminated by glowing green digital code streams, similar to The Matrix aesthetic. The environment is futuristic cyberpunk cityscape at night, with digital rain of binary codes falling from the sky, some projecting onto his skin like a hologram interface. He tilts his head slightly upward with eyes closed, immersed in data. Ratio 3:4, detailed lighting, neon glow",
    },
    {
      id: 45,
      image: collage45,
      alt: "Images",
      prompt:
        "Grunge-style analog photos around 2025. I was taking picture in front of bmw m3gtr car together. Where tokiyo Japan, I was sitting in the front engine car with a post model style turn toward camera, wearing black t-shirts outfit baggy jeans and Nike air Jordan low shoes, using flash",
    },
    {
      id: 46,
      image: collage46,
      alt: "Images",
      prompt:
        "A high-resolution, black-and-white portrait of a young man wearing a sharp black suit and black shirt with a tie. He stands confidently in a minimal studio setting, facing slightly to the side. Dramatic studio lighting casts bold geometric shadows across his face and background, with a strong diagonal beam of light cutting through darkness. His expression is calm, introspective, and slightly distant. The image has a high-fashion, cinematic noir tone, with high contrast and fine detail on the face and suit texture. Soft bokeh background, vertical frame (9:16), 8K resolution.",
    },
    {
      id: 47,
      image: collage47,
      alt: "Images",
      prompt:
        "Create a high-resolution, cinematic black-and-white portrait of me standing on a side view under a dramatic spotlight in a dark, moody studio. The spotlight creates a powerful beam of light from above, casting deep shadows down a muscular body and intense contrast across his torso and face. With faint smoke surrounding the scene and making the beam of light stand out Important: Use the my real face from the original reference image exactly as it is — no editing, no retouching, no smoothing, no alterations. Preserve all natural skin texture, facial hair, expression, and lighting on the face. Maintain the raw, authentic look of the original. I should have a confident yet mysterious aura, dark trousers. The atmosphere is cinematic, bold, and dramatic — similar to a fashion editorial or performance art scene. The background is dark with soft gradients, and the spotlight fades into the shadows behind him. Format: Vertical 9:16, ultra-sharp DSLR-style detail, with professional-grade lighting and depth.",
    },
    {
      id: 48,
      image: collage48,
      alt: "Images",
      prompt:
        "the lighting is cinematic with a dual tone neon red and blue light setup.creating a deep . high contrast atmosi. the background is dark and minimal. his pose and expression are intense evoking a mysterious and thougghtfull mood . shot in ultra .detailed . hyper . realistic style with soft shadows and professional studio quality. cinematic color tone with neon lighting...",
    },
    {
      id: 49,
      image: collage49,
      alt: "Images",
      prompt:
        "A cinematic low-angle portrait of a stylish man in a dark trench coat sitting in an urban cityscape at night, towering skyscrapers in the background, moody green atmospheric lighting, dramatic shadows on the face, intense expression, multiple silver rings and accessories on fingers, hand extended toward the camera, cloudy night sky, Gotham city vibe, shot with a wide-angle lens, dramatic perspective, neon tones, gritty street aesthetic.",
    },
    {
      id: 50,
      image: collage50,
      alt: "Images",
      prompt:
        "A stylish young man stands confidently, wearing a sleek black dress shirt with the sleeves rolled up and matching black trousers. His hair is neatly styled back with volume on top, and he has a calm, serious expression. The background is dark and minimal, making him the focal point of the image. Studio lighting creates a dramatic and professional atmosphere.",
    },
  ];

  //const SecondPromptPage = useNavigate();

  // Using placeholder images since we can't access your assets

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
                <div className="w-full lg:w-1/2 ">
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
                              <p className="text-gray-300 text-sm sm:text-base leading-relaxed break-words font-ubuntu">
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
                onClick={() => PromptPage("/prompt")}
              >
                ← Back
              </button>

              {/* Next Button */}
              <button
                className="bg-black hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full w-[150px] transition duration-600"
                onClick={() => ThirdPromptPage("/thirdprompt")}
              >
                Next →
              </button>
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

export default SecondPromptPage;

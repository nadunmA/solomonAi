import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import copilot from "../assets/pilot.png";
import { motion } from "framer-motion";

import collage1 from "../assets/photos/collage1.webp";
import collage2 from "../assets/photos/collage2.webp";
import collage3 from "../assets/photos/collage3.webp";
import collage4 from "../assets/photos/collage4.webp";
import collage5 from "../assets/photos/collage5.webp";
import collage6 from "../assets/photos/collage6.webp";
import collage7 from "../assets/photos/collage7.webp";
import collage8 from "../assets/photos/collage8.webp";
import collage9 from "../assets/photos/collage9.webp";
import collage10 from "../assets/photos/collage10.webp";
import collage11 from "../assets/photos/collage11.webp";
import collage12 from "../assets/photos/collage12.webp";
import collage13 from "../assets/photos/collage13.webp";
import collage14 from "../assets/photos/collage14.webp";
import collage15 from "../assets/photos/collage15.webp";
import collage16 from "../assets/photos/collage16.webp";
import collage17 from "../assets/photos/collage17.webp";
import collage18 from "../assets/photos/collage18.webp";
import collage19 from "../assets/photos/collage19.webp";
import collage20 from "../assets/photos/collage20.webp";
import collage21 from "../assets/photos/collage21.webp";
import collage22 from "../assets/photos/collage22.webp";
import collage23 from "../assets/photos/collage23.webp";
import collage24 from "../assets/photos/collage24.webp";
import collage25 from "../assets/photos/collage25.webp";

const FifthPromptPage = () => {
  const [clickedImageId, setClickedImageId] = useState(null);
  const [copiedPromptId, setCopiedPromptId] = useState(null);
  const [copyClickedId, setCopyClickedId] = useState(null);
  const [isRandomizing, setIsRandomizing] = useState(false);
  const [displayData, setDisplayData] = useState([]);

  const ForthPromptPage = useNavigate();
  //const SecondPromptPage = useNavigate();

  const promptData = [
    {
      id: 1,
      image: collage1,
      alt: "Professional Portrait",
      prompt:
        "Create a clean, modern, professional portrait of a confident young man sitting on a chair against a minimalist beige background. He is wearing a light brown knit sweater, cream-colored pants, and white New Balance sneakers. His pose is relaxed with one leg crossed over the other and hands resting comfortably. The lighting is soft and even, giving the image a polished, editorial look. The background has a bold, graphic black shape adding contrast and interest. High-resolution, studio-quality, lifestyle magazine style.",
    },
    {
      id: 2,
      image: collage2,
      alt: "Digital Art Portrait",
      prompt:
        "created a surreal digital painting of the man in the photograph with mixed dark hair, bright green eyes and intense facial features. Standing in front of a dystopian cyberpunk urban landscape under a stormy sky, holding a Guy Fawkes mask that decomposes into a glowing orange charcoal. The scene illuminates dramatically with stark contrast between cool blue tones from the background and warm orange sparks from the mask",
    },
    {
      id: 3,
      image: collage3,
      alt: "Digital Art Portrait",
      prompt:
        "Cinematic cyberpunk portrait of a man walking through a neon-lit futuristic city, nighttime scene, heavy rain, soaked trench coat, neon reflections on wet street, dramatic side profile, serious expression, vibrant pink and blue ambient lighting from neon signs, busy urban street with motion blur of rushing crowd, shallow depth of field, shot on 35mm film, detailed textures, moody atmosphere, Blade Runner aesthetic. Optional additions for refinement: Camera settings: 35mm lens, aperture f/1.4 for shallow depth of field Lighting: ambient neon, rim lighting on edges Colors: neon cyan, magenta, purple, electric blue, hints of deep red Mood: introspective, tense, noir detective vibes Post-processing: analog film grain, slight chromatic aberration for realism",
    },
    {
      id: 4,
      image: collage4,
      alt: "Digital Art Portrait",
      prompt:
        "Transform the uploaded image (keep face details properly) into a digitally captured scene features a young, bearded software developer deeply engrossed in coding at a sleek, transparent laptop set against a cyberpunk backdrop. Neon blue and purple lights permeate the environment, accentuating his focused expression, and the glowing, holographic interface displays colorful Python code along with an Al Assistant window, while floating code streams and a mechanical arm add to the futuristic ambian",
    },
    {
      id: 5,
      image: collage5,
      alt: "Digital Art Portrait",
      prompt:
        "Close-up portrait of a man, hyperrealistic style, with a warm, approachable expression. The man's face is well-lit, showing details of his features, including a slightly wavy, dark brown hairstyle, and a pleasant smile. He is wearing a dark suit jacket over a light-colored, likely white, collared shirt. The background is a soft-focus, deep blue wall or curtain, creating a strong contrast with the subject. The overall tone is professional and friendly, focusing on the direct and candid expression of the subject. The lighting is natural and evenly distributed, producing a clear image.",
    },
    {
      id: 6,
      image: collage6,
      alt: "Digital Art Portrait",
      prompt:
        "Style analog photo around 2000. the person on the picture I upload standing next to or leaning on his McLaren P1, arms casually holding a snack,looking completely chill while the car sits on the background, he is wearing gray sweatpants and black jacket inside white T-shirt.the Tokyo night light in the background.",
    },
    {
      id: 7,
      image: collage7,
      alt: "Digital Art Portrait",
      prompt:
        "Close-up portrait of a young 21 year old boy(attached photo) in the rain, seen from profile, looking into the distance with anelancholic expression. he is wearing a dark baseball cap witr i red detail and black over-ear headphones. His heavy dark hai is tousled by the coastal wind, falling leicht ins Gesicht, voller Textur und Bewegung.. Raindrops are clearly visible on his skin. The background is a heavily blurred, dark, rainy outdoor scene with visible streaks of falling rain.",
    },
    {
      id: 8,
      image: collage8,
      alt: "Digital Art Portrait",
      prompt:
        "Trform the image into a black and white portrait in a three-quarter angle composition, with the body slightly tilted in 'a', while the face remains facing the left side with a sharp and calm side glance, reflecting contemplation or determination. Use a soft studio light from only one side- cinematic side lighting-to create a high-contrast chiaroscuro effect, illuminating half of the face while the other half is cast in shadow. The lighting highlights the details of the skin, the forehead, and the cheekbones with artistic clarity, while preserving the overall atmosphere.",
    },
    {
      id: 9,
      image: collage9,
      alt: "Digital Art Portrait",
      prompt:
        "Convert this image into A cinematic portrait of a man standing under a dramatic spotlight in a dark room.The man wears a patterned shirt, glasses and has a confident, intense expression. His handa are in his pocket and the lighting casts deep shadows emphasizing the contours of his face and body. the background is black, creating a ai",
    },
    {
      id: 10,
      image: collage10,
      alt: "Digital Art Portrait",
      prompt:
        "A man has portrait like uploaded photo is doing a photoshoot in a moody, dramatic setting. He is wearing a knitted sweater with slight tears on the wrist area. The man lifts the collar of his sweater to partially cover his lower face, leaving only his expressive eyes visible. The lighting is cinematic with a dual-tone neon red and blue light setup, creating a deep, high-contrast atmosphere. The background is dark and minimal. His pose and expression are intense, evoking a mysterious and thoughtful mood. Shot in ultra-detailed, hyper-realistic style with soft shadows and professional studio quality. Cinematic color tone with neon lighting.",
    },
    {
      id: 11,
      image: collage11,
      alt: "Digital Art Portrait",
      prompt:
        "Cinematic cyberpunk portrait of this exact man in the image, walking through a neon lit futuristic city. Nighttime scene with heavy rain, soaked trench coat, neon reflections on a wet street. Dramatic side profile with vibrant neon pink and blue ambient lighting from the signs, busy urban street with motion blur crowds, shallow depth of field shot with a 85mm 1.4 lens to create ultimate bokeh. Detailed textures and moody atmosphere.",
    },
    {
      id: 12,
      image: collage12,
      alt: "Digital Art Portrait",
      prompt:
        "Create me a double exposure using the picture provided. The main image should be a man walking through a woodland holding a Sony camera with a long lens. Small amounts of rain falling with reflections on the puddles on the dirt path. The double exposure again using the image above should blend seamlessly with the trees using natural light. The whole image should be using cool tones.",
    },
    {
      id: 13,
      image: collage13,
      alt: "Digital Art Portrait",
      prompt:
        "Use this image to create a cinematic style image shot using a drone looking down at an angle with amazing seascape backdrop with a sun glow from one side lighting up the subject.The image of the man must not change and need to keep the face the same and not to change at all including no face change or smoothing.",
    },
    {
      id: 14,
      image: collage14,
      alt: "Digital Art Portrait",
      prompt:
        "A high-resolution, black-and-white portrait of a young man wearing a sharp black suit and black shirt with a tie. He stands confidently in a minimal studio setting, facing slightly to the side. Dramatic studio lighting casts bold geometric shadows across his face and background, with a strong diagonal beam of light cutting through darkness. His expression is calm, introspective, and slightly distant. The image has a high-fashion, cinematic noir tone, with high contrast and fine detail on the face and suit texture. Soft bokeh background, vertical frame (9:16), 8K resolution.",
    },
    {
      id: 15,
      image: collage15,
      alt: "Digital Art Portrait",
      prompt:
        "A dramatic spotlight in a dark room highlights the same face as the uploaded image. The man wears a patterned white shirt with a black suit and sunglasses, exuding a confident, intense expression. His hands are in his pockets, and the lighting casts deep shadows that define the contours of his face and body. The background is black. Create a realistic image with a 9:6 ratio.",
    },
    {
      id: 16,
      image: collage16,
      alt: "Digital Art Portrait",
      prompt:
        "Create an image A stylish model standing in heavy rain, soaked and expressive, wearing a semi-wet white dress shirt with subtle transparency, artistically clinging to his form. He looks upward with a cinematic, emotional expression. Rain droplets suspended midair, dramatic lighting with cool blue tones, soft mist in the background, shallow depth of field. Editorial fashion shoot style, aesthetics, captured in ultra-high resolution.",
    },
    {
      id: 17,
      image: collage17,
      alt: "Digital Art Portrait",
      prompt:
        "Let's try to generate this image using my photo as a faithful reference. Scene A man (based on my photo) walking, [left foot forward], head slightly tilted downward, staring at the ground as if expressing desolation. His left arm is directed toward his chin, suggesting he's deep in thought-or to draw attention to his watch. He is walking, and as he moves forward, he gradually disintegrates into smoke [from his left side], symbolizing the loss of his personality as he trusts and is betrayed-his",
    },
    {
      id: 18,
      image: collage18,
      alt: "Digital Art Portrait",
      prompt:
        "Cinematic overhead shot of me standing still on a brick city sidewalk at dusk, wearing a dark oversized blazer. A motion-blurred crowd rushes past around me, emphasizing my stillness. Moody, contrasty lighting with deep shadows and soft warm highlights from nearby neon signs or streetlights. 50mm film look with subtle grain, shallow depth of field — sharp focus on me, slightly desaturated color palette with rich blacks. Rain-slicked pavement reflects ambient light. Light wind ruffles the edge of my blazer. Portrait ratio 4:5",
    },
    {
      id: 19,
      image: collage19,
      alt: "Digital Art Portrait",
      prompt:
        "Cinematic overhead shot of me standing still on a brick city sidewalk at dusk, wearing a dark oversized blazer. A motion-blurred crowd rushes past around me, emphasizing my stillness. Moody, contrasty lighting with deep shadows and soft warm highlights from nearby neon signs or streetlights. 50mm film look with subtle grain, shallow depth of field — sharp focus on me, slightly desaturated color palette with rich blacks. Rain-slicked pavement reflects ambient light. Light wind ruffles the edge of my blazer. Portrait ratio 4:5",
    },
    {
      id: 20,
      image: collage20,
      alt: "Digital Art Portrait",
      prompt:
        "sitting on a wooden chair in a dimly lit vintage room. He has wears a skin colour oversized jacket. The sunlight filters through window blinds, casting dramatic striped shadows across hi Sace and the wall. The atmosphere feels nostalgic and contemplative, with a soft golden hue and warm tones. Pls Face should remain same 9:16 ratio",
    },
    {
      id: 21,
      image: collage21,
      alt: "Digital Art Portrait",
      prompt:
        "A hyper-realistic 8K cinematic portrait of a dominant, battle-hardened boxer standing in a heroic stance against a bold crimson red backdrop. His fists are clenched and wrapped in worn, white training tape, raised with intensity. The camera captures every detail of his physique — deeply defined biceps, bulging forearms, and vascular veins running across his arms and hands. Sweat glistens on his forehead, temple, and neck, catching the light in subtle highlights that enhance the realism and grit. His expression is fierce and unwavering, with furrowed brows and a look of controlled aggression — radiating power, leadership, and quiet majesty. Cinematic lighting sculpts his body: strong side light enhances muscle striations and veins, casting sharp shadows between muscle groups. A faint rim light outlines his silhouette, separating him from the crimson background and adding a regal, almost divine glow to his figure. His black athletic shirt is tight over his frame, absorbing the deep shadows and adding contrast to the glistening skin and sharp features. The overall tone is bold, intense, and elevated — as if he were a modern warrior king prepared for an epic duel. Style: High-drama cinematic poster — ultra-detailed, stylized like a prestige film cover or a legendary athlete's tribute shot. Royal, powerful, timeless.",
    },
    {
      id: 22,
      image: collage22,
      alt: "Digital Art Portrait",
      prompt:
        "A stylish man standing confidently in a narrow alley of seoul , south korea.wearing a long black overcoat and glasses , hands in pockets, surrounded by colourful neon signs, and stacked blue crates, urban street photography, cinematic lighting, moody tones, shallow depth of field",
    },
    {
      id: 23,
      image: collage23,
      alt: "Digital Art Portrait",
      prompt:
        "Take a photo of a very crowded city street with old East Asian-style buildings on both sides of the road. This street is filled with large brightly colored signs with Chinese writing, depicting the atmosphere of the old city market. A large plane (Boeing 747 type) flies very low, almost touching the roof of the building, creating a dramatic and tense atmosphere. Bright daytime lighting with a clear blue sky, the sun is high in the sky so that the shadow falls right down. The shooting angle is taken from the bottom (low angle), showing the dramatic perspective of the plane passing over the narrow road.In the middle of the road, add a 25-year-old Southeast Asian man, 175 cm tall, 78 kg weight, wearing formal clothes (white shirt, black suit, material pants, and black leather shoes). He was walking across the street with confident steps, a neutral expression, and his right hand in his pants pocket. This man is on the front right of the image composition, seen in contrast with the crowded background and the plane passing above. The highlight of the sunlight made a soft reflection on his black suit. Realistic documentary style photos with medium color saturation and high contrast. Aspect ratio 9:16",
    },
    {
      id: 24,
      image: collage24,
      alt: "Digital Art Portrait",
      prompt:
        "CREATE A HYPER-DETAILED GRAPHIC DESIGN FEATURING A STRIKING PORTRAIT OF A YOUNG MAN WITH THE SAME FACE AS UPLOADED] WITH A CONFIDENT DEMEANOUR. HIS HEAD IS ADORNED WITH VOLUMINOUS, ADDING TEXTURE AND DEPTH ΤΟ THE COMPOSITION. THE PORTRAIT IS RENDERED IN A HIGH-CONTRAST BLACK-AND-WHITE STYLE, STANDING OUT AGAINST THE MINIMALIST BACKGROUND. HIS EXPRESSION IS CALM YET DETERMINED, WITH ONE EYE PARTIALLY OBSCURED BY A BOLD RED RECTANGULAR OVERLAY THAT ADDS A MODERN, ARTISTIC FLAIRTHE BACKGROUND IS A SMOOTH, TEXTURED GREY CANVAS,SERVING AS A NEUTRAL BACKDROP THAT ENHANCES THE FOCAL ELEMENTS. OVERLAID VERTICALLY ALONG THE LEFT SIDE OF THE IMAGE, THE WORD PAUL SOMENDRA IS REPEATED IN LARGE, BOLD BLACK LETTERS WITH A SLIGHT TRANSPARENCY EFFECT, CREATING A LAYERED, DYNAMIC LOOK INTERSPERSED WITHIN THIS TEXT ARE ICONIC DESIGN ELEMENTS: A PROMINENT NIKE LOGO IN RED NEAR THE TOP, A STYLIZED RED S LOWER DOWN, AND A VERTICAL RED LINE THAT PUNCTUATES THE DESIGN. TO THE RIGHT, A RED GEOMETRIC FRAME SURROUNDS THE OBSCURED EYE, DRAWING ATTENTION TO THE INTERPLAY OF COLOUR AND FORM. AT THE BOTTOM RIGHT, THEAT THE BOTTOM RIGHT, THE PHRASE WORK SMART NOT HARD IS WRITTEN IN BOLD RED CAPITAL LETTERS, WITH SMART IN A SMALLER, ELEGANT CURSIVE SCRIPT BENEATH IT SIGNED OFF WITH GRAPHICS IN A MATCHING STYLE, SUGGESTING A PERSONAL OR BRAND SIGNATURE. THE BOTTOM LEFT CORNER FEATURES THE HASHTAG #PAUL IN RED. REINFORCING THE IDENTITY THEME. THE YOUNG MAN'S ATTIRE, A PARTIALLY VISIBLE BLACK LEATHER JACKET WITH AN OPEN COLLAR, ADDS A RUGGED YET STYLISH EDGE TO THE OVERALL AESTHETIC. THE LIGHTING IS SOFT YET DRAMATIC. HIGHLIGHTING THE TEXTURES OF HIS HAIR AND JACKET, WHILE THERED ACCENTS POP VIVIDLY AGAINST THE GRAYSCALE TONES, CREATING A COHESIVE, HIGH-ENERGY VISUAL THAT BLENDS STREETWEAR CULTURE WITH GRAPHIC ARTISTRY. PHOTOREALISTIC, SHALLOW D",
    },
    {
      id: 25,
      image: collage25,
      alt: "Digital Art Portrait",
      prompt:
        "A mysterious man in a sleek black suit and tie stands confidently in front of a glowing circular light, creating a perfect halo around his head. The background is moody and dark with subtle fog, evoking a sense of power and enigma. High contrast lighting, cinematic depth of field, dramatic atmosphere, futuristic noir style.",
    },
  ];

  // Initialize displayData with original order
  React.useEffect(() => {
    setDisplayData([...promptData]);
  }, []);

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleRandomize = () => {
    setIsRandomizing(true);
    const totalDuration = 1000; // ms
    const shuffleSteps = 10;
    const interval = totalDuration / shuffleSteps;

    let currentStep = 0;
    let lastUpdate = performance.now();

    const animate = (now) => {
      if (now - lastUpdate >= interval) {
        setDisplayData(shuffleArray(promptData));
        lastUpdate = now;
        currentStep++;
      }

      if (currentStep < shuffleSteps) {
        requestAnimationFrame(animate);
      } else {
        setIsRandomizing(false);
      }
    };

    requestAnimationFrame(animate);
  };

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

            {/* Randomize Button */}
            <div className="flex justify-center mt-8">
              <button
                onClick={handleRandomize}
                disabled={isRandomizing}
                className={`min-w-[130px] px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 group relative overflow-hidden ${
                  isRandomizing
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white scale-105 shadow-lg shadow-orange-500/25 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 font-ubuntu">
                  {isRandomizing ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      Shuffling...
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      Randomize
                    </>
                  )}
                </span>

                {/* Button pulse effect */}
                {isRandomizing && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20 animate-pulse rounded-xl"></div>
                )}
              </button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="space-y-16 sm:space-y-20">
            {displayData.map((item, index) => (
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

                    {/* Floating badge 
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-violet-600 to-pink-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                      #{item.id}
                    </div>*/}
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

              {/* Next Button 
              <button
                className="bg-black hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full w-[150px] transition duration-600"
                onClick={() => SecondPromptPage("/secondprompt")}
              >
                Next →
              </button> */}
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

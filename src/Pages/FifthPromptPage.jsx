/* eslint-disable no-unused-vars */
import React, { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import copilot from "../assets/pilot.png";
import gpt from "../assets/gpt.png";
import nano from "../assets/nano.png";
import grok from "../assets/grok.png";

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

const ENGINES = [
  { name: "Microsoft", url: "https://copilot.microsoft.com/", icon: copilot },
  { name: "ChatGPT", url: "https://chatgpt.com/", icon: gpt },
  { name: "Gemini", url: "https://gemini.google.com/app", icon: nano },
  { name: "Grok", url: "https://grok.com/", icon: grok },
];

const shuffleArray = (array) => {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Memoized so it doesn't re-render on every parent state change
const EngineGrid = memo(function EngineGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-md">
      {ENGINES.map((e) => (
        <a
          key={e.name}
          href={e.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-2 rounded-xl border border-[var(--glass-border)] bg-black/30 py-3 px-2 hover:border-[var(--cyan)]/60 hover:bg-black/50 transition-colors"
        >
          <img
            src={e.icon}
            alt={e.name}
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain rounded-lg group-hover:scale-110 transition-transform"
          />
          <span className="font-mono text-[10px] text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors text-center">
            {e.name}
          </span>
        </a>
      ))}
    </div>
  );
});

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

const FifthPromptPage = () => {
  const navigate = useNavigate();
  const [clickedImageId, setClickedImageId] = useState(null);
  const [copiedPromptId, setCopiedPromptId] = useState(null);
  const [isRandomizing, setIsRandomizing] = useState(false);
  const [displayData, setDisplayData] = useState([...promptData]);
  const [expandedIds, setExpandedIds] = useState(new Set());

  const toggleExpand = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleRandomize = () => {
    setIsRandomizing(true);
    const steps = 10;
    const interval = 1000 / steps;
    let step = 0;
    let last = performance.now();

    const animate = (now) => {
      if (now - last >= interval) {
        setDisplayData(shuffleArray(promptData));
        last = now;
        step++;
      }
      if (step < steps) requestAnimationFrame(animate);
      else setIsRandomizing(false);
    };
    requestAnimationFrame(animate);
  };

  const handleImageClick = (id) => {
    setClickedImageId(id);
    setTimeout(() => setClickedImageId(null), 800);
  };

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedPromptId(id);
      setTimeout(() => setCopiedPromptId(null), 2500);
    });
  };

  return (
    <div className="relative min-h-screen bg-[var(--void)] bg-grid text-[var(--text-primary)] overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="absolute top-10 -left-20 w-[32rem] h-[32rem] bg-[var(--violet)]/25 rounded-full blur-[120px] animate-drift pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-10 -right-20 w-[40rem] h-[40rem] bg-[var(--cyan)]/20 rounded-full blur-[140px] animate-drift-rev pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/3 left-1/3 w-[30rem] h-[30rem] bg-[var(--magenta)]/15 rounded-full blur-[120px] animate-drift pointer-events-none mix-blend-screen" />

      <div className="relative z-10 pt-16 pb-20 px-4 sm:pt-24 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* ── Header ── */}
          <div className="text-center mb-16 sm:mb-20">
            <p className="font-mono text-xs sm:text-sm text-[var(--cyan)] tracking-widest mb-4">
              // FULL PROMPT INDEX
            </p>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--magenta)] via-[var(--violet)] to-[var(--cyan)]">
                Prompt
              </span>{" "}
              <span className="text-[var(--text-primary)]">Gallery</span>
            </h1>
            <p className="text-[var(--text-muted)] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Browse AI-generated images with their exact prompts. Click to
              preview, copy to create.
            </p>

            <button
              onClick={handleRandomize}
              disabled={isRandomizing}
              className={`min-w-[140px] px-5 py-2.5 font-mono text-sm rounded-xl transition-all duration-300 relative overflow-hidden ${
                isRandomizing
                  ? "bg-[var(--magenta)]/80 text-white cursor-not-allowed"
                  : "bg-gradient-to-r from-[var(--magenta)] to-[var(--violet)] text-white hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]"
              }`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg
                  className={`w-4 h-4 ${isRandomizing ? "animate-spin" : ""}`}
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
                {isRandomizing ? "SHUFFLING..." : "RANDOMIZE"}
              </span>
            </button>
          </div>

          {/* ── Gallery ── */}
          <div className="space-y-16 sm:space-y-20">
            {displayData.map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-12 items-center`}
              >
                {/* ── Image ── */}
                <div className="w-full lg:w-1/2">
                  <div
                    className={`group relative cursor-pointer transition-all duration-500 ${
                      clickedImageId === item.id
                        ? "scale-[1.02]"
                        : "hover:scale-[1.01]"
                    }`}
                    onClick={() => handleImageClick(item.id)}
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-[var(--glass-border)]">
                      <img
                        loading="lazy"
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-80 sm:h-96 lg:h-[28rem] xl:h-[32rem] object-cover"
                      />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Corner brackets */}
                      <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--cyan)]/0 group-hover:border-[var(--cyan)]/80 transition-colors rounded-tl" />
                      <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--cyan)]/0 group-hover:border-[var(--cyan)]/80 transition-colors rounded-br" />

                      {clickedImageId === item.id && (
                        <div className="absolute -inset-2 bg-gradient-to-r from-[var(--violet)]/30 via-[var(--magenta)]/30 to-[var(--cyan)]/30 rounded-2xl blur-xl animate-ping" />
                      )}
                    </div>
                  </div>
                </div>

                {/* ── Prompt panel ── */}
                <div className="w-full lg:w-1/2">
                  <div className="space-y-5">
                    {/* Engine grid */}
                    <div className="space-y-3">
                      <h3 className="font-mono text-xs text-[var(--text-muted)] tracking-wide">
                        RUNS ON
                      </h3>
                      <EngineGrid />
                    </div>

                    {/* Prompt box */}
                    <div className="relative glass-panel rounded-2xl overflow-hidden">
                      {/* Scanline */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute left-0 right-0 h-1/3 bg-gradient-to-b from-transparent via-[var(--cyan)]/5 to-transparent animate-scanline" />
                      </div>

                      <div className="relative p-6 flex flex-col gap-4">
                        <p
                          className={`text-sm sm:text-base text-[var(--text-muted)] leading-relaxed break-words transition-all duration-300 ${
                            expandedIds.has(item.id) ? "" : "line-clamp-4"
                          }`}
                        >
                          {item.prompt}
                        </p>

                        <div className="flex items-center justify-between pt-3 border-t border-[var(--glass-border)]">
                          {/* Toggle */}
                          <button
                            onClick={() => toggleExpand(item.id)}
                            className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] flex items-center gap-1.5 transition-colors"
                          >
                            {expandedIds.has(item.id) ? (
                              <>
                                <svg
                                  className="w-3 h-3"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 15l7-7 7 7"
                                  />
                                </svg>
                                SHOW LESS
                              </>
                            ) : (
                              <>
                                <svg
                                  className="w-3 h-3"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                                SHOW MORE
                              </>
                            )}
                          </button>

                          {/* Copy button */}
                          <button
                            onClick={() => handleCopy(item.id, item.prompt)}
                            disabled={copiedPromptId === item.id}
                            className={`h-[44px] w-[110px] rounded-full font-mono text-xs font-semibold transition-all duration-200 relative overflow-hidden ${
                              copiedPromptId === item.id
                                ? "bg-[var(--cyan)]/20 text-[var(--cyan)] border border-[var(--cyan)]/50"
                                : "bg-gradient-to-r from-[var(--magenta)] to-[var(--violet)] text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                            }`}
                          >
                            <span className="relative z-10 flex items-center justify-center gap-1.5">
                              {copiedPromptId === item.id ? (
                                <>
                                  <svg
                                    className="w-3.5 h-3.5"
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
                                  COPIED
                                </>
                              ) : (
                                <>
                                  <svg
                                    className="w-3.5 h-3.5"
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
                                  COPY
                                </>
                              )}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* ── Navigation ── */}
            <div className="flex justify-center gap-4 mt-10">
              <button
                onClick={() => navigate("/forthpromptpage")}
                className="px-7 py-2.5 rounded-full border border-[var(--glass-border)] text-[var(--text-primary)] font-mono text-sm hover:border-[var(--cyan)]/50 hover:text-[var(--cyan)] transition-colors"
              >
                ← BACK
              </button>
              <button
                onClick={() => navigate("/sixthpromptpage")}
                className="px-7 py-2.5 rounded-full border border-[var(--glass-border)] text-[var(--text-primary)] font-mono text-sm hover:border-[var(--cyan)]/50 hover:text-[var(--cyan)] transition-colors"
              >
                NEXT →
              </button>
            </div>
          </div>

          {/* ── Footer CTA ── */}
          <div className="text-center mt-20 pt-12 border-t border-[var(--glass-border)]">
            <p className="font-mono text-xs text-[var(--text-muted)] flex items-center justify-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--cyan)] animate-blink-dot" />
              </span>
              Create your own AI masterpieces with these prompts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthPromptPage;

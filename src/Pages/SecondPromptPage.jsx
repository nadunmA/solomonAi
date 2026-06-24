/* eslint-disable no-unused-vars */
import React, { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import collage26 from "../assets/photos/collage26.webp";
import collage27 from "../assets/photos/collage27.webp";
import collage28 from "../assets/photos/collage28.webp";
import collage29 from "../assets/photos/collage29.webp";
import collage30 from "../assets/photos/collage30.webp";
import collage31 from "../assets/photos/collage31.webp";
import collage32 from "../assets/photos/collage32.webp";
import collage33 from "../assets/photos/collage33.webp";
import collage34 from "../assets/photos/collage34.webp";
import collage35 from "../assets/photos/collage35.webp";
import collage36 from "../assets/photos/collage36.webp";
import collage37 from "../assets/photos/collage37.webp";
import collage38 from "../assets/photos/collage38.webp";
import collage39 from "../assets/photos/collage39.webp";
import collage40 from "../assets/photos/collage40.webp";
import collage41 from "../assets/photos/collage41.webp";
import collage42 from "../assets/photos/collage42.webp";
import collage43 from "../assets/photos/collage43.webp";
import collage44 from "../assets/photos/collage44.webp";
import collage45 from "../assets/photos/collage45.webp";
import collage46 from "../assets/photos/collage46.webp";
import collage47 from "../assets/photos/collage47.webp";
import collage48 from "../assets/photos/collage48.webp";
import collage49 from "../assets/photos/collage49.webp";
import collage50 from "../assets/photos/collage50.webp";

import copilot from "../assets/pilot.png";
import gpt from "../assets/gpt.png";
import nano from "../assets/nano.png";
import grok from "../assets/grok.png";

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

const EngineGrid = memo(function EngineGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-md w-full box-border">
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

const SecondPromptPage = () => {
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
    <div className="relative min-h-screen w-full bg-[var(--void)] bg-grid text-[var(--text-primary)] overflow-x-hidden box-border">
      {/* Ambient glow blobs */}
      <div className="absolute top-10 -left-20 w-[32rem] h-[32rem] bg-[var(--violet)]/25 rounded-full blur-[120px] animate-drift pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-10 -right-20 w-[40rem] h-[40rem] bg-[var(--cyan)]/20 rounded-full blur-[140px] animate-drift-rev pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/3 left-1/3 w-[30rem] h-[30rem] bg-[var(--magenta)]/15 rounded-full blur-[120px] animate-drift pointer-events-none mix-blend-screen" />

      <div className="relative z-10 pt-16 pb-20 px-4 sm:pt-24 sm:px-6 lg:px-8 w-full box-border">
        <div className="max-w-7xl mx-auto w-full box-border">
          {/* ── Header ── */}
          <div className="text-center mb-16 sm:mb-20 w-full">
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
              className={`min-w-[140px] px-5 py-2.5 rounded-xl font-mono text-sm transition-all duration-300 relative overflow-hidden cursor-pointer ${
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
          <div className="space-y-16 sm:space-y-20 w-full box-border">
            {displayData.map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-12 items-center w-full box-border`}
              >
                {/* ── Image ── */}
                <div className="w-full lg:w-1/2 box-border">
                  <div
                    className={`group relative cursor-pointer transition-all duration-500 max-w-full box-border ${
                      clickedImageId === item.id
                        ? "scale-[1.02]"
                        : "hover:scale-[1.01]"
                    }`}
                    onClick={() => handleImageClick(item.id)}
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-[var(--glass-border)] max-w-full box-border z-10">
                      <img
                        loading="lazy"
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-80 sm:h-96 lg:h-[28rem] xl:h-[32rem] object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Corner brackets — Fixed to bounds to prevent responsive overflow bugs */}
                      <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--cyan)]/0 group-hover:border-[var(--cyan)]/80 transition-colors rounded-tl pointer-events-none" />
                      <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--cyan)]/0 group-hover:border-[var(--cyan)]/80 transition-colors rounded-br pointer-events-none" />

                      {clickedImageId === item.id && (
                        <div className="absolute -inset-2 bg-gradient-to-r from-[var(--violet)]/30 via-[var(--magenta)]/30 to-[var(--cyan)]/30 rounded-2xl blur-xl animate-ping" />
                      )}
                    </div>
                  </div>
                </div>

                {/* ── Prompt panel ── */}
                <div className="w-full lg:w-1/2 box-border">
                  <div className="space-y-5 w-full">
                    <div className="space-y-3 w-full">
                      <h3 className="font-mono text-xs text-[var(--text-muted)] tracking-wide">
                        RUNS ON
                      </h3>
                      <EngineGrid />
                    </div>

                    <div className="relative glass-panel rounded-2xl overflow-hidden max-w-full box-border">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute left-0 right-0 h-1/3 bg-gradient-to-b from-transparent via-[var(--cyan)]/5 to-transparent animate-scanline" />
                      </div>

                      <div className="relative p-6 flex flex-col gap-4 w-full box-border">
                        <p
                          className={`text-sm sm:text-base text-[var(--text-muted)] leading-relaxed break-words transition-all duration-300 ${
                            expandedIds.has(item.id) ? "" : "line-clamp-4"
                          }`}
                        >
                          {item.prompt}
                        </p>

                        <div className="flex items-center justify-between pt-3 border-t border-[var(--glass-border)] w-full">
                          <button
                            onClick={() => toggleExpand(item.id)}
                            className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] flex items-center gap-1.5 transition-colors cursor-pointer"
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

                          <button
                            onClick={() => handleCopy(item.id, item.prompt)}
                            disabled={copiedPromptId === item.id}
                            className={`h-[44px] w-[110px] rounded-full font-mono text-xs font-semibold transition-all duration-200 relative overflow-hidden cursor-pointer ${
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

            {/* ── Dynamic HUD Navigation (Correctly setup for Page 02) ── */}
            <div className="flex justify-center items-center gap-2 mt-10 flex-wrap w-full box-border">
              <button
                disabled={window.location.hash === "#/prompt"}
                onClick={() => {
                  const currentHash = window.location.hash;
                  if (currentHash.endsWith("/secondprompt"))
                    navigate("/prompt");
                  else if (currentHash.endsWith("/thirdprompt"))
                    navigate("/secondprompt");
                  else if (currentHash.endsWith("/forthpromptpage"))
                    navigate("/thirdprompt");
                  else if (currentHash.endsWith("/fifthpromptpage"))
                    navigate("/forthpromptpage");
                  else if (currentHash.endsWith("/sixthpromptpage"))
                    navigate("/fifthpromptpage");
                  else if (currentHash.endsWith("/seventhpromptpage"))
                    navigate("/sixthpromptpage");
                }}
                className={`px-4 py-2.5 rounded-full font-mono text-xs border transition-all cursor-pointer ${
                  window.location.hash === "#/prompt"
                    ? "border-[var(--glass-border)] text-[var(--text-muted)] opacity-30 cursor-not-allowed"
                    : "border-[var(--glass-border)] text-[var(--text-primary)] hover:border-[var(--cyan)]/50 hover:text-[var(--cyan)]"
                }`}
              >
                ← PREV
              </button>

              <span className="text-[var(--text-muted)] font-mono text-xs opacity-40 mx-1">
                |
              </span>

              {[
                { label: "01", path: "/prompt" },
                { label: "02", path: "/secondprompt" },
                { label: "03", path: "/thirdprompt" },
                { label: "04", path: "/forthpromptpage" },
                { label: "05", path: "/fifthpromptpage" },
                { label: "06", path: "/sixthpromptpage" },
                { label: "07", path: "/seventhpromptpage" },
              ].map((p, i, arr) => {
                const isActive = window.location.hash.endsWith(p.path);

                return (
                  <React.Fragment key={p.label}>
                    <button
                      onClick={() => navigate(p.path)}
                      className={`w-10 h-10 rounded-full font-mono text-xs transition-all duration-200 border cursor-pointer ${
                        isActive
                          ? "bg-gradient-to-r from-[var(--magenta)] to-[var(--violet)] text-white border-transparent shadow-[0_0_15px_rgba(139,92,246,0.4)] font-bold"
                          : "border-[var(--glass-border)] text-[var(--text-muted)] hover:border-[var(--cyan)]/50 hover:text-[var(--cyan)]"
                      }`}
                    >
                      {p.label}
                    </button>
                    {i < arr.length - 1 && (
                      <span className="text-[var(--text-muted)] font-mono text-xs opacity-40">
                        |
                      </span>
                    )}
                  </React.Fragment>
                );
              })}

              <span className="text-[var(--text-muted)] font-mono text-xs opacity-40 mx-1">
                |
              </span>

              <button
                disabled={window.location.hash === "#/seventhpromptpage"}
                onClick={() => {
                  const currentHash = window.location.hash;
                  if (currentHash.endsWith("/prompt"))
                    navigate("/secondprompt");
                  else if (currentHash.endsWith("/secondprompt"))
                    navigate("/thirdprompt");
                  else if (currentHash.endsWith("/thirdprompt"))
                    navigate("/forthpromptpage");
                  else if (currentHash.endsWith("/forthpromptpage"))
                    navigate("/fifthpromptpage");
                  else if (currentHash.endsWith("/fifthpromptpage"))
                    navigate("/sixthpromptpage");
                  else if (currentHash.endsWith("/sixthpromptpage"))
                    navigate("/seventhpromptpage");
                }}
                className={`px-4 py-2.5 rounded-full font-mono text-xs border transition-all cursor-pointer ${
                  window.location.hash === "#/seventhpromptpage"
                    ? "border-[var(--glass-border)] text-[var(--text-muted)] opacity-30 cursor-not-allowed"
                    : "border-[var(--glass-border)] text-[var(--text-primary)] hover:border-[var(--cyan)]/50 hover:text-[var(--cyan)]"
                }`}
              >
                NEXT →
              </button>
            </div>
          </div>

          {/* ── Footer CTA ── */}
          <div className="text-center mt-20 pt-12 border-t border-[var(--glass-border)] w-full">
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

export default SecondPromptPage;

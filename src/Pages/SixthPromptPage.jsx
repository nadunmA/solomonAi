/* eslint-disable no-unused-vars */
import React, { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import collage126 from "../assets/photos/collage126.webp";
import collage127 from "../assets/photos/collage127.webp";
import collage128 from "../assets/photos/collage128.webp";
import collage129 from "../assets/photos/collage129.webp";
import collage130 from "../assets/photos/collage130.webp";
import collage131 from "../assets/photos/collage131.webp";
import collage132 from "../assets/photos/collage132.webp";
import collage133 from "../assets/photos/collage133.webp";
import collage134 from "../assets/photos/collage134.webp";
import collage135 from "../assets/photos/collage135.webp";
import collage136 from "../assets/photos/collage136.webp";
import collage137 from "../assets/photos/collage137.webp";
import collage138 from "../assets/photos/collage138.webp";
import collage139 from "../assets/photos/collage139.webp";
import collage140 from "../assets/photos/collage140.webp";
import collage141 from "../assets/photos/collage141.webp";
import collage142 from "../assets/photos/collage142.webp";
import collage143 from "../assets/photos/collage143.webp";
import collage144 from "../assets/photos/collage144.webp";
import collage145 from "../assets/photos/collage145.webp";
import collage146 from "../assets/photos/collage146.webp";
import collage147 from "../assets/photos/collage147.webp";
import collage148 from "../assets/photos/collage148.webp";
import collage149 from "../assets/photos/collage149.webp";
import collage150 from "../assets/photos/collage150.webp";
import collage151 from "../assets/photos/collage151.webp";

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
    id: 126,
    image: collage126,
    alt: "Professional Portrait",
    prompt:
      "Craft a moody, introspective winter editorial with a cinematic stillness. The subject sits gracefully in a soft cocoon of oversized winterwear - a pale mint-green puffer jacket layered over textured knits and creamy wide-leg pants. A ribbed beanie hugs the head, and the styling is elevated with stacked silver rings and layered chain necklaces that glint under the moody light. Lighting is key: use a focused beam from a low angle to mimic golden-hour window light cutting through darkness, casting long shadows and highlighting skin texture and fabric grain. The set is minimalist, with a deep blue-to-black gradient backdrop that suggests early evening solitude. The subject's eyes are closed, face lifteg'oafafi.lahbat bathing in a fleeting moment of warmth. The scene evokes the calm after the chaos - personal, stylish, and grounded. Tags: cinematic quiet, winter softness, editorial calm, light therapy aesthetic, cozy minimalism.",
  },
  {
    id: 127,
    image: collage127,
    alt: "Professional Portrait",
    prompt:
      "Craft a hyperrealistic, futuristic fashion editorial featuring a solitary male figure seated with assertive composure at the center of a minimalist void. The subject wears oversized, dramatically voluminous black trousers with rich fabric texture and an equally stark, structured black blazer layered over a matte-black turtleneck — all contributing to a monolithic silhouette that feels both powerful and enigmatic. Accessories include sleek, reflective cyberpunk-style visor glasses, adding a high-tech element that contrasts with the analog quiet of the scene. Lighting is sculptural and cinematic: a cold, studio-grade blue-toned key light from high above casts deep shadows beneath the folds of the garment and chair, isolating the digdirtehbat and exaggerating his geometry. The background is a clean gradient from ice blue to soft slate, creating spatial depth and emotional detachment. Use a low, eye-level camera angle to emphasize scale, negative space, and the overwhelming architecture of",
  },
  {
    id: 128,
    image: collage128,
    alt: "Professional Portrait",
    prompt:
      "Ultra-realistic 8K studio portrait of a young man sitting on the floor with one leg extended toward the camera in a dramatic foreshortened perspective. He wears modern streetwear: a white hoodie layered under a black bomber jacket with gold-accented INSIGHT branding on the sleeve and pants. Large white sneakers dominate the foreground. The subject wears round, dark sunglasses and has a confident expression.",
  },
  {
    id: 129,
    image: collage129,
    alt: "Professional Portrait",
    prompt:
      "The man leans his forearm against the open car window, elbow bent with effortless poise. He wears mirrored aviator shades that catch the late afternoon sun, casting brilliant flares off the chrome doorframe and side mirror. The soft rumble of the idling engine hums beneath him. His expression is calm, unfazed, with a cigarette resting loosely between his fingers — untouched, burning slowly. A hot desert wind tousles the edge of his sun-bleached jacket, and dust swirls lightly across the asphalt. In the background, the two-lane desert highway stretches endlessly forward, rippling with heat mirages, flanked by cacti and faded road signs. The golden hour sun washes everything in warm amber tones, wrapping the scene in nostalgic brilliance. Long shadows fall across the worn dashboard, where a classic rock cassette case lies beside a pair of leather gloves. Style: Retro Americana realism, 50mm lens, sun-bleached colors, ultra-sharp chrome reflections, shallow depth of field, textured skin and fabric details Mood: Cool independence, rebellious serenity, timeless freedom",
  },
  {
    id: 130,
    image: collage130,
    alt: "Professional Portrait",
    prompt:
      "In an opulent, dimly-lit library lined with ancient tomes and dark wood shelves, a introspective man sits with one leg crossed over the other in a green velvet armchair, reading an old book. A single golden desk lamp lights the face and hands, throwing long shadows across the polished floor. He’s wearing casuall clothing. Ultra-detailed 4K, warm cinematic tones, 50mm lens, shallow focus on hands and face, ambient shadows.",
  },
  {
    id: 131,
    image: collage131,
    alt: "Professional Portrait",
    prompt:
      "A cinematic portrait of me at night in an urban environment, standing casually with a slight lean backward, hands resting in my pockets. My shoulders are loose, exuding a confident yet laid-back attitude. I’m dressed in a sleek black bomber jacket layered over a clean white T-shirt, paired with dark joggers featuring visible drawstrings. My head is gently tilted upward and slightly to the left, while my gaze is locked directly on the camera. Behind me, a blur of city lights in warm red,",
  },
  {
    id: 132,
    image: collage132,
    alt: "Professional Portrait",
    prompt:
      "Use 100% face above uploaded photo Subject: A handsome, successful man in his early 27s with styled black hair and black beard like uploaded photo and wearing sun glasses gold Attire: An impeccable black long coat over a charcoal grey three-piece suit with a dark, open-collared shirt. Setting: The airstairs of a luxury private jet on an airport tarmac. Lighting: Cinematic golden hour lighting. The warm, low sun acts as a strong backlight, creating a glowing rim light on the subject's hair and shoulders, with a subtle lens flare. Style: Hyper-realistic, high-end fashion or advertising photography. Extremely sharp details, 8K resolution, capturing a feeling of wealth, power, and elegance.",
  },
  {
    id: 133,
    image: collage133,
    alt: "Professional Portrait",
    prompt:
      "Depict the subject as a charismatic back-alley gambler in a gritty, urban underground setting, mid-roll in a street craps game surrounded by cheering spectators. He’s crouched low to the ground, wearing a bomber jacket, black jeans, and scuffed white sneakers. The alley is damp, lit by flickering neon signs and steam vents. Style: Full-body action shot, captured from a low angle with a 35mm DSLR, in 16:9 ultra-realistic 4K resolution Lighting: Harsh, cinematic lighting from nearby neon signage reflecting off puddles; backlight from a corner streetlamp cutting through smoke and steam. Detail: The dice frozen mid-air, fingers still outstretched in the throw; grit on his boots, dust and oil-slicked pavement underfoot; sharply detailed urban textures—brick walls, graffiti, crumpled bills and cigarette butts. Mood: Raw energy, fast cash, high risk—modern outlaw charisma.",
  },
  {
    id: 134,
    image: collage134,
    alt: "Professional Portrait",
    prompt:
      "A hyper-realistic, ultra-HD cinematic scene of a man(use uploaded photo) in a sleek futuristic black leather trench coat performing an iconic bullet-dodge move in slow motion, inspired by the Matrix. He leans back impossibly as high-velocity bullets slice through the air in front of him, creating ripples and sonic shockwaves. Time is frozen – shell casings suspended mid-air, motion blur trailing behind each bullet. The background features a gritty, digital cityscape with neon signs, glitching effects, and code raining down like green digital waterfalls. The camera is in dynamic motion, orbiting around him at a tilted angle, capturing the moment from a low, dramatic perspective. His expression is focused, calm, and calculating, with short, jet-black hair swept to the side, and a glowing aura reflecting off his face from the ambient neon lights. Rendered in cinematic lighting with volumetric fog and particle effects, depth of field focused on the subject, using an 85mm lens, f/1.4 - photo-realism, 8K, ultra-detailed, ray tracing, DOF, cinematic color grading. 9:16 portrait",
  },
  {
    id: 135,
    image: collage135,
    alt: "Professional Portrait",
    prompt:
      "Use 100% face above uploaded photo A powerful, dramatic digital portrait of a an yound man in last 27s with a soft smile appearance and a black beard and black hair like uploaded photo. He wears black-rimmed glasses, and his eyes glow with intense fiery white light, suggesting supernatural or demonic power. The artwork features a split-themed composition: the left side of his face dissolves into dark, smoky shadows, while the right side erupts into vivid, fiery textures with orange and red flames. The background is mostly white, with abstract black and red ink splatters blending into his form. A lone black bird, possibly a crow or raven, flies in the bottom right, adding a symbolic, ominous touch. The style is highly detailed, dark fantasy mixed with watercolor and digital painting aesthetics. Cinematic lighting and high contrast, 8k resolution, aspect ratio 4:5.",
  },
  {
    id: 136,
    image: collage136,
    alt: "Professional Portrait",
    prompt:
      "Use 100 % face above uploaded photo Cinematic portrait of a handsome, rugged man in his late 27 with dark hair and a black beard like uploaded photo. He is wearing a vibrant, retro color-block hooded jacket (yellow and blue) over a white t-shirt. He stands on a city street at night, looking off-camera with a serious, contemplative expression. The scene is illuminated by dramatic, warm golden light from the side, sculpting his features. The background is a soft bokeh of glowing purple and pink neon signs, with fiery sparks and embers floating in the air on one side. Photorealistic, ultra-detailed, sharp focus on the subject, shallow depth of field, moody atmosphere, 8K",
  },
  {
    id: 137,
    image: collage137,
    alt: "Professional Portrait",
    prompt:
      "Use face above uploaded photo Hyperrealistic portrait of a man. He wears a large, ornate gold crown slightly tilted on his head, studded with jewels and pearls, reminiscent of the aesthetic of royal rappers. His expression is intense and stoic, his gaze straight ahead, his lips slightly pursed in a strong and composed manner. The lighting is bold and studio-quality, with sharp contrasts and shadows across his face. His skin tone, texture, and facial features are rendered in grayscale (black and white). while the crown remains a bright gold accented with jewels. The background is a deep, rich red, creating a striking pop-art look. He wears a thick gold chain around his neck, wearing thick-framed Mascot glasses, and a vintage Slipknot metal band t-shirt. The overall frame is a tight, short haircut that falls over his head and shoulders, looking directly at the camera, styled like an iconic hip-hop magazine cover photo. Urban, royal, legendary. No text.",
  },
  {
    id: 138,
    image: collage138,
    alt: "Professional Portrait",
    prompt:
      " Use face above uploaded photo Dynamic point-of-view action photograph, GoPro style. A handsome, athletic young man with tanned skin, a rugged beard, and wet, sun-bleached black hair is surfing inside the barrel of a crystal-clear ocean wave. He is looking directly into the camera with a confident expression, as if taking a selfie. The curling, translucent blue wave perfectly frames his face and shoulders. Bright, natural sunlight filters through the water, creating a vibrant turquoise glow and highlighting water splashes frozen in mid-air. Ultra-sharp focus, hyper-detailed, fast shutter speed, professional sports photography.",
  },
  {
    id: 139,
    image: collage139,
    alt: "Professional Portrait",
    prompt:
      "3-A cinematic portrait of a stylish young man, wearing a black jacket and black pants. He is standing outdoors in soft golden hour lighting, with a confident and calm expression as he looks over his shoulder toward the camera. The background features a vertical green garden wall with plants and a soft pink panel, giving a modern and urban vibe. The setting is clean and minimalistic with smooth pavement underfoot.",
  },
  {
    id: 140,
    image: collage140,
    alt: "Professional Portrait",
    prompt:
      "Me stands on a dimly lit urban street in front of closed shop shutters and parked motorbikes. I am holding a newspaper that is dramatically engulfed in flames. The overall tone is cinematic and moody, with rich, warm colors and soft shadows. Do not change, edit, smooth, or retouch my face. Keep all skin texture, facial hair, and lighting exactly as in the original photo.",
  },
  {
    id: 141,
    image: collage141,
    alt: "Professional Portrait",
    prompt:
      "A stylish young man sits in front of a graffiti-covered wall featuring the Adidas logo and the word 'THINK'. He wears a light jacket with an 'H' emblem, camouflage pants, and white sneakers. The urban setting is enhanced by blurred motion lights in the background, creating a dynamic and edgy streetwear aesthetic.",
  },
  {
    id: 142,
    image: collage142,
    alt: "Professional Portrait",
    prompt:
      "A futuristic portrait of a man standing against a vibrant orange backdrop. He wears high-tech sunglasses and a black hoodie with glowing orange patterns, featuring the Nike logo. The overall look blends cyberpunk aesthetics with modern sportswear design.",
  },
  {
    id: 143,
    image: collage143,
    alt: "Professional Portrait",
    prompt:
      "use original face in his wearing matte black sunglasses and a light beige overcoat over a plain black shirt. He faces slightly away from the camera with a confident expression. His voluminous hair is neatly styled, and his trimmed beard adds sharpness to his look. The background is dark grey with soft lighting that highlights his facial structure and outfit texture in ultra-detailed 4K clarity.",
  },
  {
    id: 144,
    image: collage144,
    alt: "Professional Portrait",
    prompt:
      "use original face a surreal, ultra -detailed portrait of a with messy, tousled black hair and a short beard, holding a vibrant blue rose close to his face. he is wearing a plain oversized white sweatshirt and a thin silver chain necklace. his fingers are adorned with rings. the background is minimalistic and shadowy, emphasizing his presence. the portrait is styled with a digital glitch effect -parts of his face and body are fragmented into horizontal.pixel streaks in",
  },
  {
    id: 145,
    image: collage145,
    alt: "Professional Portrait",
    prompt:
      "A confident young man wearing a stylish white suit with a black shirt underneath, standing with hands in pockets, looking slightly upward with a serious expression. He has short dark hair and glasses. The background is dark and smoky with dramatic lighting, giving a cinematic, powerful vibe.",
  },
  {
    id: 146,
    image: collage146,
    alt: "Professional Portrait",
    prompt:
      "A hyper-realistic cinematic editorial portrait of the uploaded person (preserve face 100%). He stands tall in a dark moody studio,surrounded by soft drifting smoke under a dramatic spotlight.Outfit:Oversized slate-blue luxury suit with wide-leg trousers, paired with a slightly unbuttoned white silk shirt. Both hands tucked casually in pockets, shoulders relaxed, confident expression, head tilted slightly upward",
  },
  {
    id: 147,
    image: collage147,
    alt: "Professional Portrait",
    prompt:
      " Create a retro vintage grainy but bright image of the reference picture but draped in a perfect red wine color Pinteresty aesthetic red shirt with white pant and holding a rose flower in hands. It must feel like a 90s movie and romanticising windy environment. The boy is standing against a solid wall deep shadows and contrast drama, creating a mysterious and artistic atmosphere where the lighting is warm with a golden tones of evoking a sunset or golden hour glow. The background is minimalist and slightly textured the expression on his face is moody, calm yet happy and introspective.",
  },
  {
    id: 148,
    image: collage148,
    alt: "Professional Portrait",
    prompt:
      "A hyper-realistic cinematic editorial portrait of the uploaded person (preserve face 100%). He stands tall in a dark moody studio, surrounded by soft drifting smoke under a dramatic spotlight. Outfit: Oversized maroon luxury suit with wide-leg trousers, paired with a slightly unbuttoned white silk shirt. The body is slim, but the suit remains oversized for a bold fashion-forward look. Both hands tucked casually in pockets, shoulders relaxed, confident expression, head tilted slightly upward. His face has a subtle glow, and he wears a thin gold necklace. The studio room background has a dark maroon tone to match the suit color, enhancing the atmosphere.",
  },
  {
    id: 149,
    image: collage149,
    alt: "Professional Portrait",
    prompt:
      "sitting on a wooden chair in a dimly lit vintage room. He has wears a skin colour oversized jacket. The sunlight filters through window blinds, casting dramatic striped shadows across hi Sace and the wall. The atmosphere feels nostalgic and contemplative, with a soft golden hue and warm tones. Pls Face should remain same 9:16 ratio",
  },
  {
    id: 150,
    image: collage150,
    alt: "Professional Portrait",
    prompt:
      "Create a retro vintage grainy but bright image of the reference picture but draped in a perfect red wine color Pinteresty aesthetic retro shirt with white pant and holding a rose flower in hands. It must feel like a 90s movie and romanticising windy environment. The boy is standing against a solid wall deep shadows",
  },
  {
    id: 151,
    image: collage151,
    alt: "Professional Portrait",
    prompt:
      "Turn this photo into a dark cinematic scene of a mysterious young man sitting on a modern leather chair in a dark room. He is wearing a cool oversized maroon vintage jersey, oversized faded black baggy jeans, and stylish white sneakers with dark accents. His expression is indifferent and calm with one hand on his chin and one leg raised. The wall is made of textured concrete filled with gravity, which gives it an urban and rough feel. The overall feel is gloomy and intense, with dramatic lighting and shadows. Highly detailed, with a realistic finish.",
  },
];

const SixthPromptPage = () => {
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
                          {/* Toggle expand */}
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

            {/* ── Dynamic HUD Navigation ── */}
            <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
              {/* PREV - Disabled dynamically if on Page 1 */}
              <button
                disabled={window.location.hash === "#/prompt"}
                onClick={() => navigate("/prompt")}
                className={`px-4 py-2.5 rounded-full font-mono text-xs border transition-all ${
                  window.location.hash === "#/prompt"
                    ? "border-[var(--glass-border)] text-[var(--text-muted)] opacity-30 cursor-not-allowed"
                    : "border-[var(--glass-border)] text-[var(--text-primary)] hover:border-[var(--cyan)]/50 hover:text-[var(--cyan)]"
                }`}
              >
                ← PREV
              </button>

              {/* Divider */}
              <span className="text-[var(--text-muted)] font-mono text-xs opacity-40 mx-1">
                |
              </span>

              {/* Page numbers */}
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
                      className={`w-10 h-10 rounded-full font-mono text-xs transition-all duration-200 border ${
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

              {/* Divider */}
              <span className="text-[var(--text-muted)] font-mono text-xs opacity-40 mx-1">
                |
              </span>

              {/* NEXT - Disabled dynamically if on the last page */}
              <button
                disabled={window.location.hash === "#/sixthpromptpage"}
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
                className={`px-4 py-2.5 rounded-full font-mono text-xs border transition-all ${
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

export default SixthPromptPage;

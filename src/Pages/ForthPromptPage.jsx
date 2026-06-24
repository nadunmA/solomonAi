/* eslint-disable no-unused-vars */
import React, { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import copilot from "../assets/pilot.png";
import gpt from "../assets/gpt.png";
import nano from "../assets/nano.png";
import grok from "../assets/grok.png";

import collage76 from "../assets/photos/collage76.webp";
import collage77 from "../assets/photos/collage77.webp";
import collage78 from "../assets/photos/collage78.webp";
import collage79 from "../assets/photos/collage79.webp";
import collage80 from "../assets/photos/collage80.webp";
import collage81 from "../assets/photos/collage81.webp";
import collage82 from "../assets/photos/collage82.webp";
import collage83 from "../assets/photos/collage83.webp";
import collage84 from "../assets/photos/collage84.webp";
import collage85 from "../assets/photos/collage85.webp";
import collage86 from "../assets/photos/collage86.webp";
import collage87 from "../assets/photos/collage87.webp";
import collage88 from "../assets/photos/collage88.webp";
import collage89 from "../assets/photos/collage89.webp";
import collage90 from "../assets/photos/collage90.webp";
import collage91 from "../assets/photos/collage91.webp";
import collage92 from "../assets/photos/collage92.webp";
import collage93 from "../assets/photos/collage93.webp";
import collage94 from "../assets/photos/collage94.webp";
import collage95 from "../assets/photos/collage95.webp";
import collage96 from "../assets/photos/collage96.webp";
import collage97 from "../assets/photos/collage97.webp";
import collage98 from "../assets/photos/collage98.webp";
import collage99 from "../assets/photos/collage99.webp";
import collage100 from "../assets/photos/collage100.webp";

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
    id: 76,
    image: collage76,
    alt: "Professional Portrait",
    prompt:
      "A 25-year-old Southeast Asian man with fair skin, standing at 175cm tall and weighing 76kg, casually poses on Tower Bridge in London.  He exudes a relaxed confidence, subtly leaning against a bridge railing, his weight balanced evenly. He wears an oversized, dark olive-green parachute jacket, black cargo pants, white Nike Giannis Immortality 4 sneakers, a silver necklace, and a wristwatch.  His expression is calm and slightly pensive, his gaze directed slightly away from the camera. the curving lines of the wall as leading lines. The Great Wall stretches dramatically before him, its ancient stones a textured contrast to the soft, golden light. The wall curves dramatically, descending and ascending to follow the contours of the mountainous landscape, creating a strong sense of depth and perspective.  Rolling green hills and a tranquil lake are visible in the far distance. Lush green trees dot the landscape, and the air appears crisp and clear, suggesting a spring The image is shot using a wide-angle lens, adhering to the rule of thirds, with dramatic side lighting casting strong shadows and highlighting his features. This creates a high-contrast, cinematic feel, emphasizing the subject against the grandeur of the Tower Bridge.  The overall mood is one of urban adventure and quiet contemplation. The final image will be in a 916 aspect ratio, with sharp focus on the subject and a shallow depth of field blurring the background details",
  },
  {
    id: 77,
    image: collage77,
    alt: "Professional Portrait",
    prompt:
      "sitting on a luxurious Vintage style chair. wearing a neat three piece dark grey suit with a red tie and a red handkerchief in his pocket. his expression is serious. holding a glass of tea in one hand, sitting casually with his legs crossed in the dominant pose. the background is a dark textured wall with glass shelves displaying miniature sports cars, creating a mysterious cinematic atmosphere. dramatic lighting with sharp shadows and warm tones, reinforcing the Classic feel like a mafia boss.",
  },
  {
    id: 78,
    image: collage78,
    alt: "Professional Portrait",
    prompt:
      "A man wearing a green long- sleeve shirt and black shorts learing casually againce a silver honda nxs sport car with pop- up headlights parked on a cobblestone driveway surrounded by greenery and modern architecture urban setting, overcast lighting photo taken in Jakarta Indonesia realistic style",
  },
  {
    id: 79,
    image: collage79,
    alt: "Professional Portrait",
    prompt:
      "cinematic style photo around 2000. the person on the picture I upload Standing upright feet shoulder-width apart (can slightly shift one foot forward for a relaxed stance), Chest pushed slightly forward, as if you're offering yourself openly, Slight lean back, especially at the upper chest and shoulders — adds to the dramatic flair, Head tilted slightly back or up, giving a sense of surrender or openness to the universe. Both arms fully extended outward, slightly below shoulder level (like forming a soft arc or “V” shape) Palms open and facing up or slightly forward Elbows are not stiff — a soft bend keeps it natural and warm Fingers relaxed, not spread wide — like you’re ready to embrace someone.Gentle smile, Eyes may be open with a dreamy gaze, or slightly closed to add emotion Slight head tilt to the side sometimes, Add wind to make your hair or shirt flap. He is wearing a white linen baggy pant and Pants are not tucked in And transparent sheer White long sleeve shirt and no waist inside of shirt. The image 4:3 portrait. The background A romantic grass field or grass landscape and some colour full flowers are in the ground. Snow mountain can be seen far away.",
  },
  {
    id: 80,
    image: collage80,
    alt: "Professional Portrait",
    prompt:
      "A dramatic, high-contrast portrait of a stylish with [FACIAL FEATURES or ACCESSORIES] standing against a textured, graffiti-covered concrete wall. The subject wears [camera] with bold zippers, gloves, or urban accessories. A glowing halo with geometric or sacred pattern outlines the head. Fine golden cracks on the face or background symbolize resilience and rebirth (kintsugi style). Stylized motivational text such as 1111 is placed in the bottom corner. Overall tone is moody, grayscale with golden highlights, gritty and empowering, keep my face details as you can.",
  },
  {
    id: 81,
    image: collage81,
    alt: "Professional Portrait",
    prompt:
      "A hyper-realistic portrait of the same man in the reference image, standing against a rough concrete wall under a dramatic spotlight in an unfinished building at night. Shot with a 0.6 wide-angle lens. The lighting creates a nightmare-like atmosphere with harsh shadows and cold tones. He wears a light blue denim jacket, black jeans, and stylish sunglasses. His hands are in his pants pockets. The environment is gritty and dark, with detailed textures of the construction site. The overall mood is moody,",
  },
  {
    id: 82,
    image: collage82,
    alt: "Professional Portrait",
    prompt:
      "Turn my selfie in a moody, cinematic portrait of a stylish young man lounging in a luxurious, dimly-lit room. He wears a sharp, tailored dark navy or black suit with a white dress shirt and a slightly loosened black tie. His expression is relaxed, almost aloof, with closed eyes and a cigarette held lightly between his gloved fingers. He wears sleek black leather gloves, exuding a mysterious, noir vibe. His hair is tousled and wet, enhancing the dramatic, edgy look. He leans back on a dark couch, with one leg propped up casually. In his other gloved hand, he holds a black flask resembling a bottle of Jack Daniel's whiskey. The setting includes vintage-style silver candleholders with tall white candles, elegant curtains letting in soft daylight, and dark wooden furnishings, giving the room a gothic, old-money atmosphere. The lighting is soft and natural, filtered through the curtains, casting gentle shadows and highlights across the subject and furniture, adding to the mysterious and cinematic feel. The overall mood is a blend of neo-noir elegance, danger, and decadence like a scene from a stylish crime thriller or a high-fashion editorial shoot. Style references: Film noir, cinematic photography, high-fashion editorial, gothic luxury.",
  },
  {
    id: 83,
    image: collage83,
    alt: "Professional Portrait",
    prompt:
      "A hyper-realistic cinematic portrait of a bold and fearless egyption gangster standing on a metal bridge platform under heavy rain at night. A HYPER REALISTIC IMAGE OF MINE SAME NOSE, SAME EYE, SAME CHEEK POSITION, SAME EYEBROWS. He wears a cream-white three-piece suit, drenched from the rain. His blazer is open, shirt unbuttoned at the top. One leg is confidently placed up on the railing, striking a dominant pose. His long, wet hair is slicked back, and his thick beard drips with rain.",
  },
  {
    id: 84,
    image: collage84,
    alt: "Professional Portrait",
    prompt:
      "Create a dramatic, stylized movie poster featuring a close-up profile of a man with a sharp beard and styled hair, wearing large, square sunglasses. The image should have a bold, cyberpunk-inspired aesthetic with high contrast and gritty texture. Use a red and black color scheme, with a horizontal strip of bright red cutting through the middle third of the poster, illuminating the glasses and part of the face. Overlay the rest of the image in monochrome tones (black, grey, and white)",
  },
  {
    id: 85,
    image: collage85,
    alt: "Professional Portrait",
    prompt:
      " Use face above uploaded photo HYPERREALISTIC 3D ILLUSTRATED POSTER STYLE- 4K Ultra Cinematic Finish: Create a hyperdetailed, manga-inspired, streetart-style portrait of a rebellious young man(reference image), standing against a vibrant urban backdrop filled with abstract Kanji and bold graphic textures,8k,FHD.",
  },
  {
    id: 86,
    image: collage86,
    alt: "Professional Portrait",
    prompt:
      "convert this image into a aesthetic 0.6 lens portrait of a boy standing leaning against a wall under a dramatic spotlight in a construction building. with the same face as uploaded image. the boy wears a Blue danim jaket with black jeans, and wear a clasay sunglass. his hands are in his jeans pokets, and the light is nightmare. creating ai.",
  },
  {
    id: 87,
    image: collage87,
    alt: "Professional Portrait",
    prompt:
      "A realistic, cinematic portrait of a mafia-style man standing confidently, holding a military-grade large dog (like a Belgian Malinois or Doberman) on a strong leash. The scene is shot from the front with a straight-on camera angle. Both the man and the dog are looking directly into the camera with intense expressions. The man wears a sleek black suit with subtle luxury details, and a cold demeanor. The background is inspired by peaky blinders dark shots or blurred background to keep focus on the subjects. Dramatic lighting and sharp shadows emphasize a gritty, powerful mood. Ultra-realistic style, high detail, 8K resolution",
  },
  {
    id: 88,
    image: collage88,
    alt: "Professional Portrait",
    prompt:
      "A man, 175cm tall, with fair skin, striding confidently through a dramatic London twilight scene. He wears a thick black jacket, black skinny jeans, and black and white Air Jordan low sneakers; a wristwatch is visible on his left wrist. His expression is serious and focused, his gaze directed forward. The setting is iconic London, England, at dusk, under a cloudy, yet vibrant sky. The majestic Elizabeth Tower (Big Ben) dominates the background, its clock face brilliantly lit, showing approximately 7:05 PM. The Gothic architecture glows warmly in the golden light. To the right, an old-fashioned street lamp casts a warm, inviting glow, reflecting in the slightly wet street. Vehicle lights create streaks of light on the wet pavement, adding to the scene's nostalgic feel. Another pedestrian is visible in the background, slightly blurred. The overall mood is nostalgic, classic, and romantic, capturing the essence of London at twilight. Shot in a candid street photography style, using golden hour light that creates a warm, cinematic atmosphere. Shallow depth of field keeps the focus sharply on the man, with a soft bokeh effect on the background. The image is in a 9:16 aspect ratio.",
  },
  {
    id: 89,
    image: collage89,
    alt: "Professional Portrait",
    prompt:
      "Analog photos in 2000s grunge style. I was taking pictures positioned in front of a silver Nissan GTR R34 sports car, sitting on the hood with one leg in front of the other, hands resting casually on my thighs, and a neutral yet slightly confident facial expression. We were in Tokyo, Japan. I was posed like a model, facing the camera, wearing a black t-shirt, jeans, and low-top Nike Air Jordan sneakers. The photo was taken using flash and is in a 4:3 portrait format. Tokyo’s night lights are visible in the background. The camera is centered, capturing the full body of the person and the front of the car. The pose and angle help highlight both the model and the car, creating a stylish and urban look.",
  },
  {
    id: 90,
    image: collage90,
    alt: "Professional Portrait",
    prompt:
      "Cinematic night portrait using subject's selfie. Subject stands outdoors, slightly turned, head tilted back/left, looking away calmly with parted lips. Background: tall apartment with glowing yellow-orange bokeh windows, deep shadows around. Red neon light from front-left casts bold tones; strong shadows on right create dramatic contrast. Wears dark puffer jacket over shirt and sweater. Hair is thicker, wind-swept, tousled. Dark, moody color palette with soft grain and vignette. 3:4 vertical. Style: urban, cinematic, editorial.",
  },
  {
    id: 91,
    image: collage91,
    alt: "Professional Portrait",
    prompt:
      "Convert this image into a aesthetic 0.6 lens portrait of a boy standing leaning against a wall under a dramatic spotlight in a construction building, with the same face as upload image. The boy wears a blue denim jacket with black jeans and wears a classy sunglasses. His hands are in his jeans pockets, and the light is nightmare. The final out put must look hyper realistic with sharp",
  },
  {
    id: 92,
    image: collage92,
    alt: "Professional Portrait",
    prompt:
      "A man with slightly messy short hair peeking out from beneath a black baseball cap sits relaxed on an outdoor chair near a convenience store or grocery shop at night. He wears an oversized black Uniqlo t-shirt, dark grey cargo shorts, a long necklace, and a wristwatch on his left wrist. He sits at a round metal table, on which there are a bottle of Pocari Sweat, a bottle of mineral water, snack wrappers, a black face mask, and several food packaging remnants. The background features rows of metal chairs and a brightly lit store corridor illuminated by soft neon lights. The store’s glass wall is lined with horizontal vinyl stripes in blue, yellow, and red. Behind the young man, several casually dressed and attractive young women are seated, chatting or scrolling through their phones, creating a warm and sociable atmosphere. In the distance, in the parking lot area, a person in a bright orange vest stands near a motorbike, adding a touch of everyday realism to this quiet night scene.",
  },
  {
    id: 93,
    image: collage93,
    alt: "Professional Portrait",
    prompt:
      "A hyper-realistic close-up portrait of a confident male model in a moody which in uploaded picture, editorial setup. His face is lit with contrasting amber and blue light, highlighting his sharp jawline, textured skin, and piercing gaze. He wears a dark velvet jacket, slightly open at the collar, with a subtle chain visible. The background is a deep charcoal haze with soft flares and fog, evoking luxury and cinematic elegance.",
  },
  {
    id: 94,
    image: collage94,
    alt: "Professional Portrait",
    prompt:
      "An man wearing modern casual attire consisting of a loose-fitting plain white shirt, black cargo shorts above the knee. Black and white striped Adidas socks, a white watch on his left hand, a silver chain necklace, and a black bracelet on his left wrist posing with two peace fingers sitting on a gaming chair. Background Modern gaming and entertainment room with a futuristic design with cyberpunk and technology nuances. The room features a white ergonomic work chair in front of dual monitors with futuristic city-themed wallpaper. On the wall is a hanging board with various gaming accessories (PlayStation controllers, Nintendo Switch, etc.) illuminated by blue LED lights. Retro consoles such as the PS2 and the original PlayStation are displayed on black floating shelves. There is a Valentino Rossi MotoGP 46 poster and a racing motorcycle model as decoration. Next to it is a metal lattice wall with a skateboard, helmet, and a cat climbing structure. Under the bed is a checkered shelf filled with colorful snacks, chips, and instant noodles. The black and white bed with a typographic motif is complemented by a small round glass table that holds remotes, drinks, and decorations. The floor is made of gray vinyl, there is a black beanbag, and an acoustic guitar is propped up next to it. The lighting uses ambient LEDs and soft wall lights, creating a cozy and futuristic atmosphere. The photo resolution is 3:4.",
  },
  {
    id: 95,
    image: collage95,
    alt: "Professional Portrait",
    prompt:
      "An aerial cinematic shot of me leaning coolly on the hood of a grey Mercedes-AMG G63 on a city street, wearing a t-shirt underneath a black jacket. A blurred crowd rushes past around me. Moody lighting, 35mm film style, shallow depth of field, sharply focused on me. 9:16 aspect ratio.",
  },
  {
    id: 96,
    image: collage96,
    alt: "Professional Portrait",
    prompt:
      "D OF SAME PERSON IN IMAGE WITH SHARP FEATURES, POSES CONFIDENTLY UNDER DRAMATIC LIGHTING. WEARING A CREAM -COLORED TRENCH COAT OVER A WHITE BUTTON -UP SHIRT AND TAUPE TROUSERS, HANDS CASUALLY TUCKED INTO HIS POCKETS. A SHARP TRIANGULAR BEAM OF LIGHT IS PROJECTED ON THE WALL BEHIND HIM. CASTING BOLD SHADOWS AND ADDING A CINEMATIC. MODERN FLAIR TO THE SCENE. EXPRESSION IS CALM AND CONFIDENT. WITH A MINIMALIST, HIGH-FASHION EDITORIAL VIBE, CAPTURED IN ULTRA-HIGH AND GIVING A LUXURY FASHION MAGAZINE VIBE. REALISTIC, HIGH-DETAIL, EDITORIAL PHOTOGRAPHY STYLE. 8K RESOLUTION, SYMMETRICAL COMPOSITION, MINIMAL BACKGROUND ELEMENTS. 4:3 RATIO.",
  },
  {
    id: 97,
    image: collage97,
    alt: "Professional Portrait",
    prompt:
      "overhead shot of me standing still on a brick city sidewalk, wearing a dark oversized sweater. Motion-blurred crowd rushes past around me. Moody lighting, 35mm film look, shallow depth of field, sharp focus on me. Ratio potrait 4:3",
  },
  {
    id: 98,
    image: collage98,
    alt: "Professional Portrait",
    prompt:
      "A man, 175 cm tall, weighing 78 kg, sits on a concrete block in the middle of a metropolis filled with glass and steel skyscrapers. He is wearing a dark hoodie, baggy jeans, and dirty white sneakers. His face is turned to the side. The natural daylight lighting, with an overcast sky and no sharp shadows, creates a cool, urban feel. Tall buildings surround the subject, creating a dramatic perspective effect from below (low-angle wide shot / ultra-wide fisheye), emphasizing the height and symmetry of the architecture. Reflections from the glass buildings add a modern, austere feel. The overall look embodies the spirit of urban exploration and freedom in modern street photography with a 9:16 aspect ratio.",
  },

  {
    id: 99,
    image: collage99,
    alt: "Professional Portrait",
    prompt:
      "cinematic full-body portrait of me walking alone toward the camera on a golden desert dune at sunset, wearing a flowing white robe and traditional white turban, sunglasses on, looking slightly to the side, warm orange and sandy tones dominating the rippled landscape, long shadows stretching across the dunes, soft wind lifting the edge of my scarf, sky glowing from deep orange to pale violet, serene meditative atmosphere, epic desert odyssey film scene, film body, 85mm, high detail, dramatic lighting",
  },
  {
    id: 100,
    image: collage100,
    alt: "Professional Portrait",
    prompt:
      "A young man with short, styled black hair and light brown skin, leaning casually out of the window of a vintage yellow car. He is wearing a white bomber jacket and a wristwatch with a brown leather strap. He holds a cigarette in his hand, resting his arms on the car door. The setting is an urban street with classic European architecture, featuring blurred background lights (bokeh effect) from cars and street lamps at sunset. The sky is warmly lit with golden hour tones, creating a cinematic, moody, and nostalgic atmosphere. The angle is slightly low and close-up, emphasizing the subject's calm and confident expression.",
  },
];

const ForthPromptPage = () => {
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
          <div className="text-center mb-16 sm:mb-20 w-full box-border">
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

                      {/* Corner brackets — Fixed boundaries to prevent responsive layout issues */}
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
                  <div className="space-y-5 w-full box-border">
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

                        <div className="flex items-center justify-between pt-3 border-t border-[var(--glass-border)] w-fullBox">
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

            {/* ── Dynamic HUD Navigation (Page 04 Config Matrix) ── */}
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

export default ForthPromptPage;

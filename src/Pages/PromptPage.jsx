/* eslint-disable no-unused-vars */
import React, { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
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
import collage113 from "../assets/photos/collage113.webp";
import collage114 from "../assets/photos/collage114.webp";
import collage115 from "../assets/photos/collage115.webp";
import collage116 from "../assets/photos/collage116.webp";
import collage117 from "../assets/photos/collage117.webp";
import collage118 from "../assets/photos/collage118.webp";
import collage119 from "../assets/photos/collage119.webp";
import collage120 from "../assets/photos/collage120.webp";
import collage121 from "../assets/photos/collage121.webp";
import collage122 from "../assets/photos/collage122.webp";
import collage123 from "../assets/photos/collage123.webp";
import collage124 from "../assets/photos/collage124.webp";
import collage125 from "../assets/photos/collage125.webp";

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
  {
    id: 113,
    image: collage113,
    alt: "Images",
    prompt:
      "Ultra high-definition, cinematic portrait of a Red Bull Racing F1 driver walking confidently through a pit lane. The image should appear sharp and highly detailed, with subtle cinematic grain, controlled vignetting, and rich contrast. Use a high-gloss professional motorsport aesthetic — neutral blacks, silvers, and whites, with signature Red Bull accents like deep blue, red, and yellow. The driver is wearing official Red Bull Racing gear (full suit, gloves, boots) and holding a Red Bull helmet. His face is visible, unedited, and natural — no retouching. Skin texture must remain intact. Sunglasses optional. The lighting should highlight his facial features and gear textures realistically. The F1 bolide behind him is a Red Bull Racing car, slightly out of focus due to shallow depth of field (85mm lens look), parked at an angle behind him in the pit lane. Background includes blurred crew members, photographers, and a warm sun haze for cinematic flair. The final result must evoke the energy and status of a Netflix sports documentary still or a premium racing magazine cover.",
  },
  {
    id: 114,
    image: collage114,
    alt: "Images",
    prompt:
      "Create Image showing a in his with a good physique sitting alone on a park bench during a rainy night. with a middle part hairstyle looks wet from the rain, wearing a dark gray jacket over a white t-shirt, and dark trousers. He also wears light colored sneakers (white with black accents). His posture suggests sadness or contemplation, his head is looking at the sky with his face slightly turned towards the camera and his hands are intertwined or holding something in his lap. The expression looks sad because his head is looking at the sky. Foreground The park bench is made of wood with a black iron frame, looks wet from the rain. Puddles of water are visible on the ground in front of the bench, reflecting the light of street lamps and lights in the distance. The wet texture and reflection of light add a realistic feel to the rainy atmosphere. Background and Atmosphere The rain is clearly visible with streaks of water falling. There is a street lamp post to the left of the man, with a bright orange lamp that casts light around the man and the bench. The light creates a halo and shadow effect. In the distance, the silhouettes of city buildings with their lights on, as well as the headlights of vehicles on the streets, can be seen. Electric or telephone cables stretch above, adding to the urban detail. A tree with sparse leaves is visible in the upper left corner, wet from the rain. The overall atmosphere is melancholic, lonely, and cold, typical of a rainy night in the city. Style and Aesthetics The use of color is dominated by dark blue, gray, and black shades for the sky and the wet environment, with a strong contrast from the yellowish orange light from the streetlights. In short, this photo depicts a gloomy and introspective scene of a man contemplating in the middle of a rainy night in a city. Photo Ratio 3:4",
  },
  {
    id: 115,
    image: collage115,
    alt: "Images",
    prompt:
      "A fashion-forward man sits confidently in a vintage convertible, sunlight casting sharp highlights over his tattooed arm and modern accessories — Cartier earring, black smartwatch, dark Ray-Ban sunglasses. Dressed in a navy long-sleeve shirt, he embodies cinematic nonchalance. A tan canvas duffle hints at transient luxury and urban escapism. Editorial-style composition, sharp shadows, muted tones with bold contrast.",
  },
  {
    id: 116,
    image: collage116,
    alt: "Images",
    prompt:
      "Cinematic portrait of a man holding a cracked, burning mask in front of his face. The mask has flames on one side and is partially broken. The man stares at it seriously, wearing a beige sweater. Dark background, moody lighting, symbolic theme of identity and transformation.",
  },
  {
    id: 117,
    image: collage117,
    alt: "Images",
    prompt:
      "the man sitting relaxed in the middle of the military airport runway, with one leg folded. The right hand is placed on the asphalt. He wears an oversize black t-shirt, light gray jogger pants, and black adidas samba shoes. Behind him, stood a dark gray fighter jet, looking symmetrical and dashing, facing directly to the camera. On the left side of the man is a maroon luxury sports car (Mercedes AMG GT), and on the right side is a Lamborghini Huracán sports car in a striking neon green color. The background shows the atmosphere of an open airport with a dramatic sky full of thick dark gray and white clouds, giving the impression of being cloudy but not raining. The sunlight is spread softly from behind the clouds, creating a contrast of shadows and highlights that emphasize the shape of the car and jet. The shooting was taken from an eye-level angle with a symmetrical composition—cars, jets, and men were right in the middle of the yellow line on the runway. Perspective lines and clouds add depth and dramatic impression to the image. There is a large hangar building on the left and a crowd of people and vehicles in the distance on the right. aspect ratio 9:16",
  },
  {
    id: 118,
    image: collage118,
    alt: "Images",
    prompt:
      "Take a photo of a white Nissan GT-R sports car with a wide Liberty Walk body kit, gold racing wheels, and a large spoiler stopping at a Chevron gas station at night. The lighting comes from the top lights on the roof of the gas station, creating a warm and dramatic feel, with sharp shadows on the concrete floor. Low angle shooting angle from the back of the right side of the car, showing aggressive details of the bodykit and a very low car stance. Next to the car, stood a 25-year-old Southeast Asian man. He wears a plain black t-shirt, shorts, and clean white sneakers. The man's pose relaxed face looking at the camera, sitting leaning on the car door slightly sideways while staring at the camera, with one hand in his pants pocket. This photo style gives an urban and cool impression, with a warm night feel and a typical atmosphere of street automotive culture. Ratio 9:16",
  },
  {
    id: 119,
    image: collage119,
    alt: "Images",
    prompt:
      "A confident teenage boy sitting on the hood of a heavily modified classic Mercedes-Benz car with custom graffiti-style doors in a gritty, dimly lit warehouse. The car has neon green underglow lights and a gold grille. The left car door says ‘‘Why not meri jaan?’’ and the right one says ‘‘ALWAYS STRIVE AND PROSPER’’ The boy is wearing stylish oversized streetwear: a bold patterned sleeveless sweater over a printed long-sleeve shirt, baggy cargo pants, and sneakers. He’s wearing black sunglasses and looking cool, relaxed, and fearless. Industrial ceiling lights hang above, and warm and cool lighting contrast gives it a high-fashion urban editorial style. Cinematic color grading, moody shadows, and strong attitude Important: Do not change the face — it must be exactly the same as in the attached photo.",
  },
  {
    id: 120,
    image: collage120,
    alt: "Images",
    prompt:
      "A stylish young man confidently walks across golden sand dunes at sunrise, dressed in a light beige linen shirt with rolled-up sleeves, loose white trousers, and brown leather sandals. He wears aviator sunglasses and a thin scarf draped loosely around his neck, fluttering in the wind. A brown canvas backpack is slung over one shoulder, and he carries a wide-brimmed hat in one hand. The vast desert stretches endlessly behind him, with rippling dunes and a warm, soft glow of morning light casting long shadows. The mood is adventurous and serene, capturing the spirit of exploration and solitude. Shot in natural daylight with cinematic tones and shallow depth of field.",
  },
  {
    id: 121,
    image: collage121,
    alt: "Images",
    prompt:
      "Wearing an oversized black t-shirt,baggy pants,snekers.using an umbrella on the sidewalk about to cross the road at a red light many trees,beside the sidewalk.heavy rain.",
  },
  {
    id: 122,
    image: collage122,
    alt: "Images",
    prompt:
      "Design a cinematic fashion portrait that oozes quiet dominance and retro-luxury flair. The subject is seated regally on a baroque-style throne chair, legs wide, posture unbothered - a vision of Gen Z aristocracy. He's styled in a soft pinstriped co-ord suit with a relaxed fit, worn over a muted tank top, paired unexpectedly with chunky white sneakers that ground the look in modern streetwear. Accessories are subtle yet declarative: stacked rings, layered chains, and narrow retro sunglasses elevate the energy with cool restraint. Lighting is bold and theatrical: a vibrant two-tone gradient floods the backdrop and wraps around the subject - golden amber on one side, deep violet on the other — casting sharp-edged shadows that contour his silhouette and the ornate curves of jaekalaaihbat This contrast of opulent old-world decor with contemporary styling cues creates a hybrid aesthetic: fashion royalty meets downtown swagger. Mood: luxurious, commanding, and unapologetically elevated. Tags: regal streetwea arm-cool gradient liahtina. neo-baroque sitorial. sneaker",
  },
  {
    id: 123,
    image: collage123,
    alt: "Images",
    prompt:
      "Capture an ultra-stylized fashion portrait with bold cinematic attitude, placing the subject in the center of a blazing monochromatic red environment. The subject stands in a wide, commanding pose, shot from a dramatic high angle that emphasizes swagger and scale. Styled in a glossy black leather trench coat layered over a black base, they accessorize with thick gold chains, stacked rings, and statement sunglasses. A black beanie embroidered with subtle text tops off the look, reinforcing the urban luxe attitude. The lighting is punchy and clean, allowing the red backdrop to wrap around the figure with intensity, while subtle highlights bounce off the leather, jewelry, and eyewear. Retro analog film borders frame the image, giving it an archival, fashion-magazine feel. Footwear - bright red and white sneakers — senhadidaabat the scene and mirror the color palette, grounding the look in classic street culture. Mood: bold, braggadocious, and editorially cinematic. Tags: monochrome power, leather culture, analog flex, fashion n.I. street glamor.",
  },
  {
    id: 124,
    image: collage124,
    alt: "Images",
    prompt:
      "Create a bold overhead fashion portrait that fuses softness with street edge, capturing a youthful subject squatting beneath a studio spotlight in a cocoon of comfort and attitude. The figure wears a plush, cream-colored sherpa hoodie with the hood drawn tightly over their head — wrapping them in warmth like modern armor. Paired with wide-wale corduroy pants in a complementary beige, the textures clash subtly against the crisp, icy-blue gradient studio backdrop. The focal point: a pair of standout olive green and white Air Jordan 1s, presented prominently in the lower third of the frame, giving the image sneaker editorial energy. Lighting is overhead and cinematic, casting natural shadows that contour the folds of fabric and the curvature of the hood exhildi. lahbat enhancing skin texture and gaze intensity. The mood is introspective yet confident — a visual essay in coziness, self-protection, and youthful defiance. Tags: street coziness, sneaker culture portraiture, fleece armor, soft power, Gen Z loungewear editorial.",
  },
  {
    id: 125,
    image: collage125,
    alt: "Images",
    prompt:
      "Stage a hyperrealistic, studio-lit fashion portrait that fuses icy luxury with urban dominance. The subject squats in a commanding pose, draped in a voluminous, high-shine silver-white puffer jacket layered over an off-white tonal base: oversized cargo trousers and a soft textured sweatshirt. The palette is strictly monochrome arctic — whites, silvers, and creams — with one subtle pop: a translucent pink toy accessory clutched casually in hand, injecting playful contrast into the otherwise militant styling. Set against a seamless cool-grey gradient backdrop, the lighting is top-down and studio-crisp, highlighting the puffed volume, shoe detailing, and sharp lens reflections. The futuristic wraparound visor glasses add a sci-fi edge, while chunky, sculpted sneakers root the look in contemporary streetweaf.@criadritizBat the contrast between techwear sophistication and childlike irony, creating a striking editorial that feels both sub-zero and subversive. Tags: glacier streetwear, puffed armor, tonal futurism, icy masculine energy, next-gen luxury.",
  },
];

const PromptPage = () => {
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

export default PromptPage;

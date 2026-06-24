/* eslint-disable no-unused-vars */
import React, { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import collage51 from "../assets/photos/collage51.webp";
import collage52 from "../assets/photos/collage52.jpg";
import collage53 from "../assets/photos/collage53.webp";
import collage54 from "../assets/photos/collage54.webp";
import collage55 from "../assets/photos/collage55.webp";
import collage56 from "../assets/photos/collage56.webp";
import collage57 from "../assets/photos/collage57.webp";
import collage58 from "../assets/photos/collage58.webp";
import collage59 from "../assets/photos/collage59.webp";
import collage60 from "../assets/photos/collage60.webp";
import collage61 from "../assets/photos/collage61.webp";
import collage62 from "../assets/photos/collage62.webp";
import collage63 from "../assets/photos/collage63.webp";
import collage64 from "../assets/photos/collage64.webp";
import collage65 from "../assets/photos/collage65.webp";
import collage66 from "../assets/photos/collage66.webp";
import collage67 from "../assets/photos/collage67.webp";
import collage68 from "../assets/photos/collage68.webp";
import collage69 from "../assets/photos/collage69.webp";
import collage70 from "../assets/photos/collage70.webp";
import collage71 from "../assets/photos/collage71.webp";
import collage72 from "../assets/photos/collage72.webp";
import collage73 from "../assets/photos/collage73.webp";
import collage74 from "../assets/photos/collage74.webp";
import collage75 from "../assets/photos/collage75.webp";

import copilot from "../assets/pilot.png";
import gpt from "../assets/gpt.png";
import nano from "../assets/nano.png";
import grok from "../assets/grok.png";

// ── Engine config ──────────────────────────────────────────────────────────
const ENGINES = [
  { name: "Microsoft", url: "https://copilot.microsoft.com/", icon: copilot },
  { name: "ChatGPT", url: "https://chatgpt.com/", icon: gpt },
  { name: "Gemini", url: "https://gemini.google.com/app", icon: nano },
  { name: "Grok", url: "https://grok.com/", icon: grok },
];

// ── Helpers ────────────────────────────────────────────────────────────────
const shuffleArray = (array) => {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// ── Engine Grid (memoised) ─────────────────────────────────────────────────
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
    id: 51,
    image: collage51,
    alt: "Images",
    prompt:
      "A stylish photo of me (uploaded photo as reference) as young male model with messy comma hair stands on a giant iPhone 16 screen showing a Spotify playlist sajanka sun is coming song. He wears 2025 AirPods Max, an oversized white shirt, black shorts, and white Air Jordans. The top-down angle highlights the scale of the phone. The vibe is sleek, modern, and minimal.",
  },
  {
    id: 52,
    image: collage52,
    alt: "Images",
    prompt:
      "Create a high-resolution, cinematic black-and-white portrait of me standing under a dramatic spotlight in a dark, moody studio. The spotlight creates a powerful beam of light from above, casting deep shadows and intense contrast across his muscular torso and face.",
  },
  {
    id: 53,
    image: collage53,
    alt: "Images",
    prompt:
      "Use the my real face from the original reference image exactly as it is — no editing, no retouching, no smoothing, no alterations. Preserve all natural skin texture, facial hair, expression, and lighting on the face. Maintain the raw, authentic look of the original. I should have a confident yet mysterious aura, with a tattoo on his forearm and dark pants slightly lowered as he holds onto the fabric. The atmosphere is cinematic, bold, and dramatic — similar to a fashion editorial or performance art scene. The background is dark with soft gradients, and the spotlight fades into the shadows behind him. Format: Vertical 9:16, ultra-sharp DSLR-style detail, with professional-grade lighting and depth.",
  },
  {
    id: 54,
    image: collage54,
    alt: "Images",
    prompt:
      "An aerial cinematic shot of me leaning coolly on the hood of a grey Lamborghini Aventador on a city street, wearing a t-shirt underneath a black jacket. A blurred crowd rushes past around me. Moody lighting, 35mm film style, shallow depth of field, sharply focused on me. 9:16 aspect ratio.",
  },
  {
    id: 55,
    image: collage55,
    alt: "Images",
    prompt:
      "Transform the uploaded image (keep face details properly) into a digitally captured scene features a young, bearded software developer deeply engrossed in coding at a sleek, transparent laptop set against a cyberpunk backdrop. Neon blue and purple lights permeate the environment, accentuating his focused expression, and the glowing, holographic interface displays colorful Python code along with an Al Assistant window, while floating code streams and a mechanical arm add to the futuristic ambian",
  },
  {
    id: 56,
    image: collage56,
    alt: "Images",
    prompt:
      "[upload youre photo] Create a cinematic, emotional portrait of the uploaded person standing forehead-to-forehead with a wild animal (such as a wolf or hyena) in a snowy wilderness. The person has a gentle, soulful expression, eyes closed, wearing a dark winter jacket. The animal looks calm and connected, mirroring the emotion. The background is a soft, misty winter forest with subtle snowflakes falling. Use soft, dramatic lighting with a shallow depth of field to create a touching, heartwarming atmosphere inspired by movie scenes of trust and bond between human and wild.",
  },
  {
    id: 57,
    image: collage57,
    alt: "Images",
    prompt:
      "A Koenigsegg Jesko hypercar Purple color blue graffiti on the car body many monster art doodle pictures, and black racing rims with gold list, modified spoilers. parked on wet city streets at night. The road surface reflects neon light from the surrounding billboards. The background shows the atmosphere of the city in New York, with many pink, purple, and blue neon lights that light up brightly. On the wall of the building there is the writing in Japanese and English letters as well as graffiti art doodle poster on the walls of the building. A Southeast Asian man around 25 years old sits comfortably in the front hood of a car. He is wearing a pink oversize shirt, cream jeans shorts, Yeezy Boost 700 Wave Runner shoes, long white Adidas socks, and a watch on his left wrist. The male pose looks relaxed and confident, staring straight ahead or slightly to the side. Neon lighting from around illuminates her body, creating dramatic shadows and highlights on her face and clothes. The photo was taken from a high angle (hight angle shot) parallel to the car, with a composition that shows cars, men, and the city's night atmosphere in a cinematic and colorful way. Ratio 3:2",
  },
  {
    id: 58,
    image: collage58,
    alt: "Images",
    prompt:
      "A stylish man standing confidently in the middle of a city street surrounded by tall buildings, wearing a dark green shearling jacket with a white fur collar, plaid trousers, and sunglasses. Urban background with traffic, modern and classical architecture, soft lighting, fall or winter vibe, cinematic street photography style.",
  },
  {
    id: 59,
    image: collage59,
    alt: "Images",
    prompt:
      "Modern style poster design man wearing a light brown suit, with a split personality concept. On the front, a colorful version is shown.The man with black color, skin color is white. The man is wearing a modern light [brown blazer,] a white shirt, and air force 1 black. The pose is walking slowly towards the camera or slightly away, with his head turned to the camera. The blazer is left open, and one hand can be playing with a watch. Impression: Dynamic, modern, classy, and professional. In the background, a black-and-white version of him is seen staring intently ahead with a mysterious expression. In the background, a black-and-white version of him is seen wearing sunglasses, staring intently ahead with a mysterious expression. The background is light gray with a dramatic light [brown] circle or gradient element behind the main figure. Studio design, bold lighting, symmetrical composition. Ultra HD 8K, hyper realistic, and Detail. Style Editorial fashion, men's lifestyle campaign",
  },
  {
    id: 60,
    image: collage60,
    alt: "Images",
    prompt:
      "Create a hyperrealistic, professionally finished portrait of the person in the provided photo. Keep the left half of the face exactly as it appears in the original image including the reflective blue sunglasses, hairstyle, lighting, skin tone, and facial expression. Right half: transform that side of the face into an elemental ice version. The skin should look frozen and cracked, with subtle glowing blue and white lines running through the fractures. Add frost and snow texture on the skin and shirt, with an icy blue eye that shines intensely, and frosted eyelashes or eyebrows. Cold mist or vapor should emerge from the skin, creating a chilling effect. The hair can have frozen tips or appear partially covered in ice. Include fine details like a realistic, subtle vertical transition between both sides, with cold vapor marking the division. The lighting should shift from warm, natural tones (left side) to cold, bluish tones (right side). The background should reinforce the wintry atmosphere with a surreal snowstorm aesthetic, without stealing focus from the subject. Maintain the person's identity and realism at all times.",
  },
  {
    id: 61,
    image: collage61,
    alt: "Images",
    prompt:
      "Ultra-HD 4K vertical cinematic portrait of a stylish young man standing tall on a modern rooftop during mid-sunset. The golden-orange sun glows directly behind him, casting a strong backlit silhouette. He wears a sharp charcoal-grey tailored suit with black sunglasses. Wind lifts the edges of his open blazer slightly. One hand tucked in his pant pocket, the other holding his jacket lapel. His side profile is outlined by the sunset glow",
  },
  {
    id: 62,
    image: collage62,
    alt: "Images",
    prompt:
      "A STYLISH YOUNG MAN STANDS CONFIDENTLY ON A LUXURY AIRPORT RUNWAY AT NIGHT, DRESSED IN A STRIKING RED JACKET OVER A WHITE T-SHIRT, BLACK JEANS, AND DESIGNER SNEAKERS. BEHIND HIM IS AN ULTRA-REALISTIC PRIVATE JET WITH GLOSSY WHITE TEXTURE AND METALLIC DETAILING, PARKED UNDER BRIGHT FLOODLIGHTS. NEXT TO HIM IS A SLEEK, MATTE-BLACK ROLLS-ROYCE WITH ITS HEADLIGHTS GLOWING INTENSELY. THE SCENE IS CINEMATIC WITH HIGH DYNAMIC RANGE, SHARP SHADOWS, AND CRISP LIGHTING. THE BACKGROUND IS FILLED WITH GLOWING STREET LAMPS AND A PREMIUM AIRPORT VIBE. THE SUBJECT LOOKS POISED AND MODERN, EXUDING LUXURY AND ASPIRATION. SHOT IN 8K RESOLUTION WITH SHALLOW DEPTH OF FIELD, PROFESSIONAL CINEMATIC GRADING, BOKEH LIGHTS, AND ATMOSPHERIC NIGHT CONTRAST.",
  },
  {
    id: 63,
    image: collage63,
    alt: "Images",
    prompt:
      "Black-and-white photo of a man standing by a wall, one hand adjusting his wristwatch, the other tucked into his trouser pocket. The light source creates angular shadows on his chiseled face and suit, emphasizing the tailoring. His gaze is downward, evoking calm confidence and refined masculinity.",
  },
  {
    id: 64,
    image: collage64,
    alt: "Images",
    prompt:
      "A poetic and emotional portrait of a young man sitting by a serene riverbank in the rain. He wears a light brown kurta and dark pants, soaked slightly by the soft rainfall. His expression is introspective and gentle as he delicately places a handmade white paper boat on the rippling water. Rain droplets fall around him, enhancing the melancholic, nostalgic mood. The background is blurred with lush green foliage and mist, creating a quiet.",
  },
  {
    id: 65,
    image: collage65,
    alt: "Images",
    prompt:
      "Cinematic overhead shot of me standing still on a brick city sidewalk at dusk, wearing a dark oversized blazer. A motion-blurred crowd rushes past around me, emphasizing my stillness. Moody, contrasty lighting with deep shadows and soft warm highlights from nearby neon signs or streetlights. 50mm film look with subtle grain, shallow depth of field — sharp focus on me, slightly desaturated color palette with rich blacks. Rain-slicked pavement reflects ambient light. Light wind ruffles the edge of my blazer. Portrait ratio 4:5",
  },
  {
    id: 66,
    image: collage66,
    alt: "Images",
    prompt:
      "A high-contrast black and white photo taken in a modern art gallery. The scene captures a candid stolen shot style moment of a young man standing still among a crowd in motion. He is positioned at a slight slanted angle, not fully side view, with his face turned slightly-- not completely facing the camera, but also not fully sideways.+Framing is from mid-thigh upward (3/4 body shot). He's wearing al ong, dark coat with his hands in hispockets, 10.8K standing out from the blurred crowd moving past him. The background wall displays framed 152 Banksy artworks in a grid arrangement, slightly",
  },
  {
    id: 67,
    image: collage67,
    alt: "Images",
    prompt:
      "A high-contrast black and white digital portrait of a young man wearing a black sleeveless tank top, standing against a smooth gradient background. One hand is wrapped in white boxing tape and raised to his lips with his index finger extended in a 'shhh' gesture, creating a mysterious and confident attitude. His facial expression is intense and focused, with a strong jawline emphasized by dramatic shadows. A front key light and intense side shadows enhance muscle definition and skin texture. The backlight creates a glowing halo effect in grayscale tones. Professional studio lighting, ultra-dramatic, gritty, and moody atmosphere. 3:4 aspect ratio",
  },
  {
    id: 68,
    image: collage68,
    alt: "Images",
    prompt:
      "A surreal, moody portrait of me (in the picture), wearing a minimalist black outfit (based on uploaded portrait photo) is standing in profile with my head gently tilted back and eyes closed, facing upward. The background is a deep gradient of cinematic blue, evoking mystery and serenity. A single sharp beam of warm white light cuts horizontally across him or her (based on uploaded portrait photo) face, passing directly over my (based on CREATE uploaded portrait photo) eyes, creating a LIKE THIS dramatic visual contrast. my (based on uploaded portrait photo) facial features are distinctly, with subtle shadows highlighting the contours of my (based on uploaded portrait photo) face. The lighting is soft yet high-contrast, emphasizing texture while keeping the rest of the body in silhouette.",
  },
  {
    id: 69,
    image: collage69,
    alt: "Images",
    prompt:
      "Backlit portrait of me under an overpass at twilight, city lights trailing around me in long exposure streaks. I'm in perfect sharpness, dressed in a leather jacket with hands in pockets. A sense of isolation and focus dominates the frame, with deep shadows and a soft cinematic bloom to the light sources.",
  },
  {
    id: 70,
    image: collage70,
    alt: "Images",
    prompt:
      "grunge-style analog photos around 2025.i was taking picture in front of toyoto supra car together. where tokyo japan, was sitting in the front engine car with a post model style turn toward camera, wearing black t-shirts outfit baggy jeans and nike air Jordan low shoes, using flash",
  },
  {
    id: 71,
    image: collage71,
    alt: "Images",
    prompt:
      "Artificial:Hyper-realistic extreme close-up portrait, showing half of the face with focus on the eye. Skin with real texture (pores and freckles). Dramatic light cutting across the face in an irregular pattern. Deep and vulnerable gaze, conveying silence and emotion. Dark, blurred background. Cinematic, intimate, and emotional style, in 8K resolution. Preserve all physical features of the provided person.",
  },
  {
    id: 72,
    image: collage72,
    alt: "Images",
    prompt:
      "Create a high contrast black and white close up portrait of the man in the picture. The image should depict only the right half of his face, partially submerged in water with droplets and bubbles visible on his skin and hair, illuminate the right side of the face dramatically, casting the rest into deep shadow, dark background, detail in skin texture, beard stubble and eye focus to evoke a moody cinematic atmosphere Enjoy",
  },
  {
    id: 73,
    image: collage73,
    alt: "Images",
    prompt:
      "parachuting from a small white plane flying high in the sky. The man is in an upside-down position in the air, with one arm outstretched and his body slightly curved, creating a dynamic and dramatic impression. He is wearing a white T-shirt, black trousers, and dark parachute equipment attached to his back. On his wrist is a sporty watch. The lighting comes from natural sunlight that is evenly distributed behind a thick layer of gray clouds, producing a soft yet contrasting lighting nuance. The clouds in the background form a faint vortex that emphasizes the movement and speed of the skydiver's free fall. The shooting angle is a dramatic low angle from bottom to top, with a wide angle or fisheye lens to capture the wide field of sky and the entire plane above. The camera seems to follow the man's movements, creating a cinematic and thrilling sensation as if we are falling together. The atmosphere of the image reflects high adrenaline, extreme freedom, and courage, very suitable for extreme sports themes or adventurous lifestyles. Aspect ratio 9:16",
  },
  {
    id: 74,
    image: collage74,
    alt: "Images",
    prompt:
      " Create an ultra-realistic image A stylish, confident man from uploaded photo sits in the driver’s seat of a luxury black car with the window down. He has trimmed beard, and wears dark, rectangular sunglasses. He is dressed in a sharp black tuxedo with a black bow tie and a white shirt, finished with a white pocket square. The face is unaltered from uploaded photo. On his left wrist, he wears a modern black smartwatch. The car exterior is glossy and covered in water droplets, hinting at recent rain. His left arm rests casually on the window, hand relaxed and visible, projecting calm authority. The background is urban, blurred out for a bokeh effect, focusing all attention on the man and the car interior. Lighting is natural but moody, highlighting his face and suit with cinematic clarity and subtle reflections on the car. The mood is cool, composed, and sophisticated, suitable for a high-end fashion or luxury lifestyle editorial. Render in ultra-realistic, 8K quality with crisp textures and deep, rich color tones.",
  },
  {
    id: 75,
    image: collage75,
    alt: "Images",
    prompt:
      "Create a moody aesthetic portrait of the young, stylish, and confident, sitting on the floor against a plain wall. The room is dimly lit with a warm yellow or amber light casting a fake window shadow (4-pane grid) on the wall behind them. The person is wearing a simple light-colored T-shirt and dark pants. Their pose is relaxed and introspective, one knee raised, arms resting casually, head slightly tilted toward the shadow. The overall mood is calm, cinematic, and artistic. Background should be minimalist. Lighting should feel like golden hour sunlight, 9:16 vertical frame, 8K Ultra Realistic.",
  },
];

// ── Component ──────────────────────────────────────────────────────────────
const ThirdPromptPage = () => {
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
      {/* ── Ambient glow blobs ── */}
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

            {/* Randomize button */}
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

                      {/* Corner brackets — Fixed boundary mappings to avoid element shifting */}
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

            {/* ── Dynamic HUD Navigation (Optimized Route Hooks) ── */}
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

export default ThirdPromptPage;

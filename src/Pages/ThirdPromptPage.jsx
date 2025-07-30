import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
import ForthPromptPage from "./ForthPromptPage";
import copilot from "../assets/pilot.png";
import { motion } from "framer-motion";

const ThirdPromptPage = () => {
  const [clickedImageId, setClickedImageId] = useState(null);
  const [copiedPromptId, setCopiedPromptId] = useState(null);
  const [copyClickedId, setCopyClickedId] = useState(null);
  const [isRandomizing, setIsRandomizing] = useState(false);
  const [displayData, setDisplayData] = useState([]);

  const ForthPromptPage = useNavigate();
  const SecondPromptPage = useNavigate();

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
                onClick={() => SecondPromptPage("/secondprompt")}
              >
                ← Back
              </button>

              {/* Next Button */}
              <button
                className="bg-black hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full w-[150px] transition duration-600"
                onClick={() => ForthPromptPage("/forthpromptpage")}
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

export default ThirdPromptPage;

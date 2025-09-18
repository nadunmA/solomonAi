import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import copilot from "../assets/pilot.png";
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

import gpt from "../assets/gpt.png";
import nano from "../assets/nano.png";
import grok from "../assets/grok.png";

const SixthPromptPage = () => {
  const [clickedImageId, setClickedImageId] = useState(null);
  const [copiedPromptId, setCopiedPromptId] = useState(null);
  const [copyClickedId, setCopyClickedId] = useState(null);
  const [isRandomizing, setIsRandomizing] = useState(false);
  const [displayData, setDisplayData] = useState([]);

  const FifthPromptPage = useNavigate();
  //const SecondPromptPage = useNavigate();

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
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <h3 className="text-lg sm:text-xl font-bold text-white font-ubuntu">
                          Try these AI platforms:
                        </h3>
                      </div>

                      {/* AI Platform Logos Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-md">
                        {/* Copilot */}
                        <a
                          href="https://copilot.microsoft.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex flex-col items-center p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                        >
                          <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2">
                            <motion.img
                              loading="lazy"
                              src={copilot}
                              alt="Microsoft Copilot"
                              animate={{ y: [0, -8, 0] }}
                              transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                            />
                          </div>
                          <span className="text-xs text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
                            Copilot
                          </span>
                        </a>

                        {/* ChatGPT */}
                        <a
                          href="https://chatgpt.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex flex-col items-center p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                        >
                          <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2">
                            <motion.img
                              loading="lazy"
                              src={gpt}
                              alt="ChatGPT"
                              animate={{ y: [0, -8, 0] }}
                              transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1,
                              }}
                              className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                            />
                          </div>
                          <span className="text-xs text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
                            ChatGPT
                          </span>
                        </a>

                        {/* Nano (Claude) */}
                        <a
                          href="https://gemini.google.com/app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex flex-col items-center p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                        >
                          <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2">
                            <motion.img
                              loading="lazy"
                              src={nano}
                              alt="Gemini"
                              animate={{ y: [0, -8, 0] }}
                              transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2,
                              }}
                              className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                            />
                          </div>
                          <span className="text-xs text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
                            Gemini
                          </span>
                        </a>

                        {/* Grok */}
                        <a
                          href="https://grok.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex flex-col items-center p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                        >
                          <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2">
                            <motion.img
                              loading="lazy"
                              src={grok}
                              alt="Grok"
                              animate={{ y: [0, -8, 0] }}
                              transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 3,
                              }}
                              className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                            />
                          </div>
                          <span className="text-xs text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
                            Grok
                          </span>
                        </a>
                      </div>
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
                onClick={() => FifthPromptPage("/fifthpromptpage")}
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

export default SixthPromptPage;

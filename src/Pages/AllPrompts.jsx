import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
import { motion } from "framer-motion";

const PromptPage = () => {
  const [clickedImageId, setClickedImageId] = useState(null);
  const [copiedPromptId, setCopiedPromptId] = useState(null);
  const [copyClickedId, setCopyClickedId] = useState(null);
  const [isRandomizing, setIsRandomizing] = useState(false);
  const [displayData, setDisplayData] = useState([]);

  const PromptPage = useNavigate();

  const promptData = [
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
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-800 text-white overflow-hidden ">
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
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              Discover stunning AI-generated images with their creative prompts.
              Click to explore, copy to create.
            </p>

            {/* Randomize Button */}
            <div className="flex justify-center">
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
              <motion.div
                key={`${item.id}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                    } ${isRandomizing ? "animate-pulse" : ""}`}
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
                          loading="lazy"
                          src={copilot}
                          alt="images"
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

                    {/*<div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-violet-600 to-pink-600 text-white scale-105 shadow-lg shadow-violet-500/25  rounded-lg flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg> 
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-ubuntu">
                        AI Prompt
                      </h3>
                    </div>*}

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
                            <div className="flex-shrink-0 flex justify-center sm:justify-start ">
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
                                <span className="relative z-10 flex items-center justify-center gap-2 font-ubuntu">
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
                                        className="w-4 h-4 font-ubuntu"
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
              </motion.div>
            ))}
            {/* next page button part*/}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10">
              {/* Next Button */}
              <button
                className="bg-black hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full w-[150px] transition duration-600"
                onClick={() => PromptPage("/prompt")}
              >
                Next →
              </button>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="text-center mt-20 pt-12 border-t border-white/10 ">
            <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
              <div className=" w-2 h-2 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full animate-pulse"></div>
              Create your own AI masterpieces with these prompts
              <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptPage;

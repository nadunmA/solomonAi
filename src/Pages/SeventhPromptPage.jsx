/* eslint-disable no-unused-vars */
import React, { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import collage152 from "../assets/photos/c152.webp";
import collage153 from "../assets/photos/c153.webp";
import collage154 from "../assets/photos/c154.webp";
import collage155 from "../assets/photos/c155.webp";
import collage156 from "../assets/photos/c156.webp";
import collage157 from "../assets/photos/c157.webp";
import collage158 from "../assets/photos/c158.webp";

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
    id: 152,
    image: collage152,
    alt: "Professional Portrait",
    prompt:
      "Do not change the face shape, hairstyle, beard, skin tone, jawline, eyes, nose, lips, smile, or expression. Create an ultra-realistic cinematic artwork of a delicate transparent skeleton leaf held between fingers during golden hour sunset. Inside the leaf, engrave the same face as a detailed pencil-sketch portrait naturally blended into the leaf veins and texture, appearing artistically carved with fine-line shading and realistic detailing. Warm sunlight passes through the leaf, creating glowing amber and orange tones with dramatic backlighting. Background should be heavily blurred with creamy sunset bokeh and cinematic depth of field. Focus sharply on the leaf artwork while keeping the fingers slightly soft. Hyper-realistic DSLR quality, ultra HD, emotional aesthetic, warm cinematic color grading, premium Instagram viral photography style.",
  },
  {
    id: 153,
    image: collage153,
    alt: "Professional Portrait",
    prompt:
      "Leo Image Creator 📷: A high-resolution, cinematic, and photorealistic close-up profile portrait of a man. The image features dramatic split-lighting with a vibrant, glowing red light illuminating the top of his face and a contrasting, cool neon blue light casting a soft glow on his jawline and neck. He has a contemplative expression, looking upwards and away from the camera. The focus is sharp on his eye, with a dark, minimalist background. The style is moody, ethereal, and high-fashion.",
  },
  {
    id: 154,
    image: collage154,
    alt: "Professional Portrait",
    prompt:
      "Use reference photo to create Ultra-realistic cinematic vertical mirror portrait of a young man Use 100% same facel with voluminous short curly mullet hair. He is wearing a Black Beige full sleeves folded shirt and a slim Gold chain and Luxury Gold Frame Round sunglasses, posing stylishly before a modern LED-lit mirror in a dark. The shot is from behind, showing a clear, sharp reflection of his face with a neutral, looking into camera. Soft cinematic.",
  },
  {
    id: 155,
    image: collage155,
    alt: "Professional Portrait",
    prompt:
      "Use my uploaded photo as the main reference and keep my face, body shape, hairstyle, skin tone, and overall proportions completely unchanged and realistic. Create a stylish mirror selfie portrait in a minimalist luxury room with warm beige lighting and a large circular mirror. I am wearing a fitted black satin shirt with slightly open collar, holding a premium pastel pink flower bouquet with white roses, pink roses, purple daisies, and baby's breath wrapped in soft pink paper. Keep the same natural pose and physique from my original image — no body reshaping, face modification, or unrealistic edits. Add soft cinematic lighting, clean aesthetic background, luxury lifestyle vibe, realistic skin texture, subtle shadows, elegant watch details, shallow depth of field, ultra-realistic photography, DSLR quality, high detail, Instagram aesthetic, vertical composition 9:16.",
  },
  {
    id: 156,
    image: collage156,
    alt: "Professional Portrait",
    prompt:
      "Same face, same energy now standing next to Leo Messi Not a random face swap: it's about placing a real person into a believable moment while keeping identity, proportions, lighting, and presence intact. Al as direction, not magic. From a simple photo to an unexpected selfie, with intention and control.",
  },
  {
    id: 157,
    image: collage157,
    alt: "Professional Portrait",
    prompt:
      "A 100% authentic and unedited photorealistic portrait, in medium format, of a stunning Brazilian man, photographed from an extremely low angle, looking up against a bright blue sky with scattered altocumulus clouds. Face and Likeness: He has precise and mature masculine features. His expression is confident, melancholic, and naturally cool. Hair: Short hair, with a fade on the sides, voluminous and jet black. The dark, textured, and tousled waves catch a subtle contour light. Pose and Framing: Extremely low angle, close-up. His head is dynamically tilted to the right, projecting slightly into the frame, creating an intimate and imposing perspective. Clothing: Dark gray, faded denim jacket with visible stitching, rustic texture, and structural details on the collar, worn casually over the shoulders. Lighting and camera effects: Strong and dramatic backlighting from the bright, penetrating afternoon sun, positioned low behind her left shoulder. This creates an authentic anamorphic horizontal sunglow and a prismatic rainbow lens flare that extends across the lower third of the frame, naturally casting a soft, atmospheric shadow on her face. Technical specifications: Shot with a Hasselblad H6D-100c, 85mm f/1.4 lens, 1/2000s shutter speed, sharp focus on facial features, realistic film grain texture similar to Kodak Portra 400 film. High-fidelity photography, realistic skin textures, organic imperfections, natural light scattering, strictly no CGI, no digital rendering, no artificial smooth 3D effect. 9:16 aspect ratio.",
  },
  {
    id: 158,
    image: collage158,
    alt: "Professional Portrait",
    prompt:
      "Use my face from the original photo and keep the same hairstyle as in the image. Create a handsome man wearing a black polo shirt, white pants, white shoes, a Rolex watch, black square eyeglasses, and an outdoor hiking cap. He is sitting on a camping chair with his legs crossed by the stream, with a white Toyota Land Cruiser SUV slightly blurred in the background.",
  },
];

const SeventhPromptPage = () => {
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

                      {/* Corner brackets — Fixed bounds to zero to prevent overflow */}
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

            {/* ── Dynamic HUD Navigation (Pages 1 to 7) ── */}
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

export default SeventhPromptPage;
